/* Anees cloud integration — DB is the single source of truth. No localStorage for app data. */
(() => {
  const SUPABASE_URL = "https://bpjrbmgflmdwcyyqhpag.supabase.co";
  const SUPABASE_PUBLISHABLE_KEY =
    "sb_publishable_seAuyevDEq57ZaHQ1H9aXA_DZOBTKKy";

  const client = window.supabase?.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY,
    {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
      },
    },
  );

  let writeQueue = Promise.resolve();

  function domainByKey(key) {
    return (
      { s: "activity", m: "mood", c: "social", f: "attention", t: "stress" }[
        String(key).charAt(0)
      ] || "activity"
    );
  }

  async function requireUser() {
    if (!client) throw new Error("Supabase client failed to load.");
    const {
      data: { user },
      error,
    } = await client.auth.getUser();
    if (error || !user) throw error || new Error("Please sign in again.");
    return user;
  }

  async function enqueue(fn) {
    // A failed write rejects only itself; it must not poison later writes.
    const operation = writeQueue.catch(() => undefined).then(fn);
    writeQueue = operation.catch((err) => {
      console.error("[AneesCloud write]", err);
      return undefined; // keep the queue usable for the next operation
    });
    return operation;
  }

  /** Map DB class row → app shape */
  function mapClass(row) {
    return {
      id: row.external_id || row.id,
      dbId: row.id,
      name: row.name,
      schoolName: row.school_name || "",
      ageStage: row.age_stage || "",
      teacherId: row.created_by,
      createdAt: row.created_at
        ? new Date(row.created_at).getTime()
        : Date.now(),
    };
  }

  /** Map DB student row → app shape */
  function mapStudent(row, classExtByUuid) {
    return {
      id: row.external_id || row.id,
      dbId: row.id,
      name: row.full_name,
      classId: row.class_id ? classExtByUuid.get(row.class_id) || null : null,
      parentName: row.parent_name || "",
      parentPhone: row.parent_phone || "",
      parentEmail: row.parent_email || "",
      teacherId: row.created_by,
      parentToken: row.metadata?.parentToken || undefined,
      createdAt: row.created_at
        ? new Date(row.created_at).getTime()
        : Date.now(),
    };
  }

  /** Map DB assessment → app report shape */
  function mapReport(row) {
    const meta =
      row.metadata && typeof row.metadata === "object" ? row.metadata : {};
    const scores = {};
    if (Array.isArray(row.assessment_answers)) {
      for (const a of row.assessment_answers) {
        if (a.question_key != null) scores[a.question_key] = a.score;
      }
    }
    const totalScore = Number.isFinite(Number(row.total_score))
      ? Number(row.total_score)
      : Number(meta.totalScore) || 0;
    return {
      id: row.external_id || row.id,
      dbId: row.id,
      studentId: row.student_external_id || meta.studentExternalId || null,
      studentDbId: row.student_id,
      teacherId: row.created_by,
      date: row.submitted_at
        ? new Date(row.submitted_at).getTime()
        : meta.date || Date.now(),
      day: meta.day || "",
      scores: Object.keys(scores).length ? scores : meta.scores || {},
      notes: row.notes || meta.notes || "",
      totalScore,
      totalPercent:
        meta.riskPercent != null
          ? meta.riskPercent
          : meta.totalPercent != null
            ? meta.totalPercent
            : Math.round((totalScore / 84) * 100),
      riskPercent: meta.riskPercent ?? meta.totalPercent ?? null,
      parentSummary: meta.parentSummary || null,
      observations: Array.isArray(meta.observations) ? meta.observations : [],
      totalPossible: 84,
      scaleType: meta.scaleType || "frequency_0_4",
      status: meta.statusLabel || row.status || "",
      statusClass: meta.statusClass || "",
      recommendation: meta.recommendation || "",
      aiAnalysis: meta.aiAnalysis || null,
      aiRecommendation: meta.aiRecommendation || null,
      alertSent: meta.alertSent ?? null,
      shouldNotify: meta.shouldNotify ?? null,
      riskLevel: meta.riskLevel || null,
      scoreBreakdown: meta.scoreBreakdown || null,
      answersTotal: meta.answersTotal ?? null,
      notesScore: meta.notesScore ?? null,
      finalTotal: meta.finalTotal ?? null,
      automationStatus: meta.automationStatus || "processed",
      automationCompletedAt: meta.automationCompletedAt || null,
      createdAt: row.created_at
        ? new Date(row.created_at).getTime()
        : Date.now(),
    };
  }

  const cloud = {
    enabled: !!client,
    client,

    async signIn(email, password) {
      if (!client) throw new Error("Supabase client failed to load.");
      const { data, error } = await client.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      return data.user;
    },

    async signUp({ email, password, fullName, phone, specialty }) {
      if (!client) throw new Error("Supabase client failed to load.");
      const { data, error } = await client.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
            name: fullName,
            phone,
            specialty: specialty || "",
            role: "teacher",
          },
        },
      });
      if (error) throw error;
      if (
        data.user &&
        Array.isArray(data.user.identities) &&
        data.user.identities.length === 0
      ) {
        const duplicate = new Error("This email is already registered");
        duplicate.code = "USER_ALREADY_EXISTS";
        throw duplicate;
      }
      return data;
    },

    async updateProfile({
      fullName,
      email,
      phone,
      avatarUrl,
      experienceYears,
      specialty,
      school,
    }) {
      if (!client) throw new Error("Supabase client failed to load.");
      const current = await requireUser();
      const metadata = {
        ...(fullName !== undefined
          ? { full_name: fullName, name: fullName }
          : {}),
        ...(phone !== undefined ? { phone } : {}),
        ...(avatarUrl !== undefined ? { avatar_url: avatarUrl } : {}),
        ...(experienceYears !== undefined
          ? { experience_years: experienceYears }
          : {}),
        ...(specialty !== undefined ? { specialty } : {}),
        ...(school !== undefined ? { school } : {}),
      };
      const updatePayload = { data: metadata };
      if (
        email &&
        email.toLowerCase() !== String(current.email || "").toLowerCase()
      )
        updatePayload.email = email;
      const { data, error } = await client.auth.updateUser(updatePayload);
      if (error) throw error;
      const user = data.user;
      // Keep the application profile synchronized with the authenticated identity.
      const { error: profileError } = await client.from("profiles").upsert(
        {
          id: user.id,
          full_name: fullName ?? user.user_metadata?.full_name ?? "",
          email: user.email,
          phone: phone ?? user.user_metadata?.phone ?? null,
          role: user.user_metadata?.role || "teacher",
          experience_years:
            experienceYears ??
            Number(user.user_metadata?.experience_years || 0),
          specialty: specialty ?? user.user_metadata?.specialty ?? null,
          school: school ?? user.user_metadata?.school ?? null,
          avatar_url: avatarUrl ?? user.user_metadata?.avatar_url ?? null,
          updated_at: new Date().toISOString(),
        },
        { onConflict: "id" },
      );
      if (profileError) throw profileError;
      return user;
    },

    async syncProfile({
      id,
      fullName,
      email,
      phone,
      role = "teacher",
      experienceYears,
      specialty,
      school,
      avatarUrl,
    }) {
      if (!client) throw new Error("Supabase client failed to load.");
      const user = await requireUser();
      if (id && id !== user.id) throw new Error("Profile identity mismatch.");
      const { error } = await client.from("profiles").upsert(
        {
          id: user.id,
          full_name: fullName || user.user_metadata?.full_name || "",
          email: email || user.email,
          phone: phone ?? user.user_metadata?.phone ?? null,
          role,
          experience_years:
            experienceYears ??
            Number(user.user_metadata?.experience_years || 0),
          specialty: specialty ?? user.user_metadata?.specialty ?? null,
          school: school ?? user.user_metadata?.school ?? null,
          avatar_url: avatarUrl ?? user.user_metadata?.avatar_url ?? null,
          updated_at: new Date().toISOString(),
        },
        { onConflict: "id" },
      );
      if (error) throw error;
    },

    async getProfile() {
      if (!client) throw new Error("Supabase client failed to load.");
      const user = await requireUser();
      const { data, error } = await client
        .from("profiles")
        .select(
          "id,full_name,email,phone,role,experience_years,specialty,school,avatar_url",
        )
        .eq("id", user.id)
        .maybeSingle();
      if (error) throw error;
      return data;
    },

    async uploadAvatar(dataUrl) {
      if (!client) throw new Error("Supabase client failed to load.");
      const user = await requireUser();
      if (typeof dataUrl !== "string" || !dataUrl.startsWith("data:image/")) {
        throw new Error("Invalid image data.");
      }
      const response = await fetch(dataUrl);
      const blob = await response.blob();
      if (blob.size > 2 * 1024 * 1024)
        throw new Error("Image must be under 2MB.");
      if (!["image/jpeg", "image/png", "image/webp"].includes(blob.type)) {
        throw new Error("Please use a JPG, PNG, or WebP image.");
      }
      const ext =
        blob.type === "image/png"
          ? "png"
          : blob.type === "image/webp"
            ? "webp"
            : "jpg";
      const path = `${user.id}/avatar.${ext}`;
      const { error: uploadError } = await client.storage
        .from("anees-avatars")
        .upload(path, blob, {
          upsert: true,
          contentType: blob.type,
          cacheControl: "3600",
        });
      if (uploadError) throw uploadError;
      const { data } = client.storage.from("anees-avatars").getPublicUrl(path);
      return `${data.publicUrl}?v=${Date.now()}`;
    },

    async requestPasswordReset(email) {
      if (!client) throw new Error("Supabase client failed to load.");
      const redirectTo = `${window.location.origin}${window.location.pathname}?recovery=1`;
      const { error } = await client.auth.resetPasswordForEmail(email, {
        redirectTo,
      });
      if (error) throw error;
    },

    async updateRecoveredPassword(password) {
      if (!client) throw new Error("Supabase client failed to load.");
      const {
        data: { session },
        error: sessionError,
      } = await client.auth.getSession();
      if (sessionError) throw sessionError;
      if (!session)
        throw new Error(
          "Recovery link is invalid or expired. Request a new one.",
        );
      const { data, error } = await client.auth.updateUser({ password });
      if (error) throw error;
      return data.user;
    },

    async hashParentToken(token) {
      const bytes = new TextEncoder().encode(String(token));
      const digest = await crypto.subtle.digest("SHA-256", bytes);
      return Array.from(new Uint8Array(digest), (b) =>
        b.toString(16).padStart(2, "0"),
      ).join("");
    },

    async registerParentLink(token, studentExternalId, studentName) {
      const user = await requireUser();
      const token_hash = await this.hashParentToken(token);
      const row = {
        token_hash,
        student_external_id: String(studentExternalId),
        student_name: String(studentName || "").slice(0, 250),
        created_by: user.id,
        enabled: true,
        updated_at: new Date().toISOString(),
      };
      const { error } = await client
        .from("parent_form_links")
        .upsert(row, { onConflict: "token_hash" });
      if (error) throw error;
      return true;
    },

    async submitParentForm(token, submission) {
      if (!client) throw new Error("Supabase client failed to load.");
      const token_hash = await this.hashParentToken(token);
      const safeSubmission = { ...submission };
      if (safeSubmission.parent) {
        safeSubmission.parent = { ...safeSubmission.parent };
        delete safeSubmission.parent.phone;
        delete safeSubmission.parent.email;
      }
      const { data, error } = await client.rpc("submit_parent_form_by_token", {
        p_token_hash: token_hash,
        p_submission_external_id: String(submission.id),
        p_submission: safeSubmission,
      });
      if (error) throw error;
      return data;
    },

    async fetchParentSubmissions() {
      if (!client) return [];
      const {
        data: { user },
        error: userError,
      } = await client.auth.getUser();
      if (userError || !user) return [];
      const { data, error } = await client
        .from("parent_form_submissions")
        .select("submission,student_external_id,submitted_at")
        .eq("created_by", user.id)
        .order("submitted_at", { ascending: false });
      if (error) throw error;
      return (data || []).map((row) => ({
        ...(row.submission || {}),
        studentId: row.student_external_id,
        submittedAt: row.submitted_at,
      }));
    },

    async signOut() {
      if (!client) return;
      const { error } = await client.auth.signOut();
      if (error) throw error;
    },

    /**
     * Load classes, students, reports from normalized tables (source of truth).
     */
    async loadAll() {
      const user = await requireUser();

      // Load primary collections concurrently instead of paying for three
      // sequential network round-trips during every login/bootstrap.
      const [classResult, studentResult, assessmentResult] = await Promise.all([
        client
          .from("classes")
          .select("*")
          .eq("created_by", user.id)
          .order("created_at", { ascending: true }),
        client
          .from("students")
          .select("*")
          .eq("created_by", user.id)
          .order("created_at", { ascending: true }),
        client
          .from("assessments")
          .select("*, assessment_answers(question_key, score, domain)")
          .eq("created_by", user.id)
          .order("submitted_at", { ascending: false }),
      ]);
      if (classResult.error) throw classResult.error;
      if (studentResult.error) throw studentResult.error;
      if (assessmentResult.error) throw assessmentResult.error;

      const classRows = classResult.data || [];
      const studentRows = studentResult.data || [];
      const assessmentRows = assessmentResult.data || [];
      const classes = classRows.map(mapClass);
      const classExtByUuid = new Map(
        classRows.map((r) => [r.id, r.external_id || r.id]),
      );
      const classUuidByExt = new Map(
        classRows.map((r) => [String(r.external_id || r.id), r.id]),
      );
      const students = studentRows.map((r) => mapStudent(r, classExtByUuid));
      const studentExtByUuid = new Map(
        studentRows.map((r) => [r.id, r.external_id || r.id]),
      );

      const reports = (assessmentRows || []).map((row) => {
        const report = mapReport(row);
        if (!report.studentId && row.student_id) {
          report.studentId = studentExtByUuid.get(row.student_id) || null;
        }
        return report;
      });

      // Optional helper state and parent submissions are independent; fetch
      // concurrently so they do not add two more sequential round-trips.
      const [stateResult, subs] = await Promise.all([
        client
          .from("anees_user_state")
          .select("state_key,payload")
          .eq("user_id", user.id)
          .in("state_key", ["anees.notifications", "anees.parentSubs"]),
        this.fetchParentSubmissions(),
      ]);
      if (stateResult.error) throw stateResult.error;
      const stateRows = stateResult.data || [];
      let notifications = [];
      let parentSubs = {};
      for (const row of stateRows) {
        if (
          row.state_key === "anees.notifications" &&
          Array.isArray(row.payload)
        )
          notifications = row.payload;
        if (
          row.state_key === "anees.parentSubs" &&
          row.payload &&
          typeof row.payload === "object"
        )
          parentSubs = row.payload;
      }
      for (const sub of subs) {
        const sid = String(sub.studentId || "");
        if (!sid) continue;
        if (!Array.isArray(parentSubs[sid])) parentSubs[sid] = [];
        const identity = sub.id || String(sub.submittedAt || "");
        parentSubs[sid] = [
          sub,
          ...parentSubs[sid].filter(
            (item) => (item.id || String(item.submittedAt || "")) !== identity,
          ),
        ].slice(0, 50);
      }

      return {
        user,
        classes,
        students,
        reports,
        notifications,
        parentSubs,
        classUuidByExt,
        studentExtByUuid,
      };
    },

    /** @deprecated — kept so old call sites don't crash; no-ops localStorage */
    async restoreState() {
      const {
        data: { session },
      } = await client.auth.getSession();
      if (!session?.user) return null;
      return session.user;
    },

    /** @deprecated — JSON blob sync removed; use CRUD methods */
    async syncState() {
      return;
    },

    // ─── Classes CRUD ─────────────────────────────────────────
    async upsertClass(cls) {
      return enqueue(async () => {
        const user = await requireUser();
        if (!String(cls.name || "").trim())
          throw new Error("Class name is required.");
        const row = {
          external_id: String(cls.id),
          created_by: user.id,
          name: String(cls.name || "")
            .trim()
            .slice(0, 250),
          school_name: cls.schoolName
            ? String(cls.schoolName).slice(0, 250)
            : null,
          age_stage: cls.ageStage ? String(cls.ageStage).slice(0, 80) : null,
          updated_at: new Date().toISOString(),
        };
        const { data, error } = await client
          .from("classes")
          .upsert(row, { onConflict: "created_by,external_id" })
          .select("id,external_id")
          .single();
        if (error) throw error;
        return data;
      });
    },

    async deleteClass(externalId) {
      return enqueue(async () => {
        await requireUser();
        const { data, error } = await client.rpc(
          "delete_class_with_related_data",
          {
            p_external_id: String(externalId),
          },
        );
        if (error) {
          if (
            error.code === "PGRST202" ||
            /function .*delete_class_with_related_data.*not found/i.test(
              error.message || "",
            )
          ) {
            throw new Error(
              "Required Supabase migration is missing: delete_class_with_related_data. Apply 20261025_production_hardening.sql first.",
            );
          }
          throw error;
        }
        if (data?.deleted !== true)
          throw new Error(
            data?.reason === "not_found"
              ? "Class was not found in the database; refresh and retry."
              : "Class deletion was not confirmed.",
          );
        return data;
      });
    },

    // ─── Students CRUD ────────────────────────────────────────
    async upsertStudent(st, classUuidByExt) {
      return enqueue(async () => {
        const user = await requireUser();
        let class_id = null;
        if (st.classId) {
          if (classUuidByExt?.get(String(st.classId))) {
            class_id = classUuidByExt.get(String(st.classId));
          } else {
            const { data: c, error: classLookupError } = await client
              .from("classes")
              .select("id")
              .eq("created_by", user.id)
              .eq("external_id", String(st.classId))
              .maybeSingle();
            if (classLookupError) throw classLookupError;
            class_id = c?.id || null;
          }
          if (!class_id)
            throw new Error(
              "The selected class was not found. Save the class first, then retry.",
            );
        }
        if (!String(st.name || "").trim())
          throw new Error("Student name is required.");
        const row = {
          external_id: String(st.id),
          created_by: user.id,
          full_name: String(st.name || "").slice(0, 250),
          class_id,
          class_name: st.className || null,
          parent_name: st.parentName
            ? String(st.parentName).slice(0, 250)
            : null,
          parent_phone: st.parentPhone
            ? String(st.parentPhone).slice(0, 80)
            : null,
          parent_email: st.parentEmail
            ? String(st.parentEmail).slice(0, 320)
            : null,
          updated_at: new Date().toISOString(),
        };
        // metadata for parentToken if column exists via ignore
        const { data, error } = await client
          .from("students")
          .upsert(row, { onConflict: "created_by,external_id" })
          .select("id,external_id")
          .single();
        if (error) throw error;
        return data;
      });
    },

    async deleteStudent(externalId) {
      return enqueue(async () => {
        await requireUser();
        const { data, error } = await client.rpc(
          "delete_student_with_related_data",
          {
            p_external_id: String(externalId),
          },
        );
        if (error) {
          if (
            error.code === "PGRST202" ||
            /function .*delete_student_with_related_data.*not found/i.test(
              error.message || "",
            )
          ) {
            throw new Error(
              "Required Supabase migration is missing: delete_student_with_related_data. Apply 20261025_production_hardening.sql first.",
            );
          }
          throw error;
        }
        if (data?.deleted !== true)
          throw new Error(
            data?.reason === "not_found"
              ? "Student was not found in the database; refresh and retry."
              : "Student deletion was not confirmed.",
          );
        return data;
      });
    },

    // ─── Assessments (reports) ────────────────────────────────
    async upsertReportFromN8n(report) {
      // Reports are primarily written by n8n; this is for local state refresh only.
      return report;
    },

    async deleteReport(externalId) {
      return enqueue(async () => {
        await requireUser();
        const { data, error } = await client.rpc(
          "delete_assessment_with_related_data",
          {
            p_external_id: String(externalId),
          },
        );
        if (error) {
          if (
            error.code === "PGRST202" ||
            /function .*delete_assessment_with_related_data.*not found/i.test(
              error.message || "",
            )
          ) {
            throw new Error(
              "Required Supabase migration is missing: delete_assessment_with_related_data.",
            );
          }
          throw error;
        }
        if (data?.deleted !== true) {
          if (data?.reason === "not_found") return false;
          throw new Error("Assessment deletion was not confirmed.");
        }
        return true;
      });
    },

    /** Persist notifications / parentSubs helpers in anees_user_state */
    async saveHelperState(key, value) {
      if (!["anees.notifications", "anees.parentSubs"].includes(key)) return;
      return enqueue(async () => {
        const user = await requireUser();
        const { error } = await client.from("anees_user_state").upsert(
          {
            user_id: user.id,
            state_key: key,
            payload: value,
            updated_at: new Date().toISOString(),
          },
          { onConflict: "user_id,state_key" },
        );
        if (error) throw error;
      });
    },

    async reloadIntoState(stateObj) {
      const data = await this.loadAll();
      stateObj.classes = data.classes;
      stateObj.students = data.students;
      stateObj.reports = data.reports;
      stateObj.notifications = data.notifications;
      stateObj.parentSubs = data.parentSubs;
      return data;
    },

    // Public, read-only article content synchronized from Google Drive by n8n.
    async fetchPublishedArticles() {
      if (!client) throw new Error("Supabase client failed to load.");
      const { data, error } = await client
        .from("articles")
        .select(
          "drive_file_id,title,excerpt,content,content_html,content_format,mime_type,storage_path,file_url,modified_time,web_view_link",
        )
        .eq("published", true)
        .order("modified_time", { ascending: false, nullsFirst: false });
      if (error) throw error;
      return Array.isArray(data) ? data : [];
    },

    async fetchPublishedArticle(driveFileId) {
      if (!client) throw new Error("Supabase client failed to load.");
      const { data, error } = await client
        .from("articles")
        .select(
          "drive_file_id,title,excerpt,content,content_html,content_format,mime_type,storage_path,file_url,modified_time,web_view_link",
        )
        .eq("drive_file_id", String(driveFileId))
        .eq("published", true)
        .maybeSingle();
      if (error) throw error;
      return data || null;
    },

    subscribeToArticles(callback) {
      if (!client || typeof callback !== "function") return null;
      const channel = client
        .channel("anees-public-articles-live")
        .on(
          "postgres_changes",
          { event: "*", schema: "public", table: "articles" },
          callback,
        )
        .subscribe((status) => {
          if (status === "CHANNEL_ERROR" || status === "TIMED_OUT") {
            console.warn(
              "[Anees articles realtime] Realtime unavailable; route refresh remains available.",
            );
          }
        });
      return channel;
    },
  };

  window.AneesCloud = cloud;
})();

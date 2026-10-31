const CONFIG = {
  N8N_CHAT: "https://anees2.app.n8n.cloud/webhook/anees-chat",
  N8N_ASSESSMENT: "https://anees2.app.n8n.cloud/webhook/anees-assessment",
  USE_N8N: true,
};
/* ============================================================
   ICONS
   ============================================================ */
const I = {
  check:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>',
  info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>',
  alert:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.7 18-8-14a2 2 0 0 0-3.4 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.7-3z"/><path d="M12 9v4M12 17h.01"/></svg>',
  filter:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>',
  copy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="8" width="13" height="13" rx="2"/><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"/></svg>',
  chev: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="15" height="15"><path d="m6 9 6 6 6-6"/></svg>',
  chevL:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="15" height="15"><path d="m15 18-6-6 6-6"/></svg>',
  chevR:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="15" height="15"><path d="m9 18 6-6-6-6"/></svg>',
  arrowL:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>',
  plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
  trash:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/></svg>',
  user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
  users:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  logout:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/></svg>',
  grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>',
  chart:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m7 14 4-4 4 4 5-5"/></svg>',
  folder:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-6l-2-2H5a2 2 0 0 0-2 2z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg>',
  phone:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"/></svg>',
  whatsapp:
    '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.52 3.48A11.8 11.8 0 0 0 12.13 0C5.6 0 .3 5.3.3 11.83c0 2.08.54 4.12 1.57 5.92L0 24l6.42-1.68a11.8 11.8 0 0 0 5.7 1.45h.01c6.52 0 11.82-5.3 11.82-11.83 0-3.16-1.23-6.13-3.43-8.46ZM12.13 21.75c-1.78 0-3.53-.48-5.05-1.4l-.36-.21-3.81 1 1.02-3.71-.24-.38a9.84 9.84 0 0 1-1.51-5.22c0-5.46 4.45-9.91 9.92-9.91 2.65 0 5.14 1.03 7.01 2.9a9.86 9.86 0 0 1 2.9 7.02c0 5.47-4.45 9.91-9.9 9.91Zm5.44-7.42c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.5 1.7.64.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.13-.27-.2-.57-.35Z"/></svg>',
  facebook:
    '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2.5v-3h2.5V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 3h-2.3v7A10 10 0 0 0 22 12z"/></svg>',
  linkedin:
    '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34V9.66H5.67v8.68h2.67zM7 8.5a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1zm11.34 9.84v-4.76c0-2.55-1.36-3.73-3.17-3.73-1.46 0-2.12.8-2.48 1.37V9.66h-2.67v8.68h2.67v-4.85c0-1.28.24-2.52 1.83-2.52 1.56 0 1.58 1.46 1.58 2.6v4.77h2.67z"/></svg>',
  send: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.8 2.2a1 1 0 0 0-1.04-.18L2.7 9.3a1 1 0 0 0 .08 1.88l7.1 2.4 2.4 7.1a1 1 0 0 0 1.88.08l7.28-18.06a1 1 0 0 0-.64-1.5ZM11.1 12.9 5.7 11.1l11.7-4.7-6.3 6.5Zm2.1 5.4-1.8-5.4 6.5-6.3-4.7 11.7Z"/></svg>',
  brain:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/></svg>',
  book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>',
  video:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 8-6 4 6 4V8Z"/><rect x="2" y="6" width="14" height="12" rx="2"/></svg>',
  heart:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
  shield:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  activity:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>',
  sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>',
  moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
  globe:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
  sparkle:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/></svg>',
  target:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
  eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>',
  calendar:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',
  edit: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>',
  settings:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
  search:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
  bell: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>',
};
const ico = (k) => I[k] || "";

/* ============================================================
   STORAGE LAYER (جاهز للاستبدال بـ API)
   ============================================================ */
/* App data and preferences are memory-only in the browser; Supabase is the persistence layer. */
const _mem = Object.create(null);
const UI_PREF_KEYS = new Set(["anees.theme", "anees.lang"]);
const PREF_STORAGE = {
  get(key, fallback) {
    try { const value = window.localStorage.getItem(key); return value == null ? fallback : value; }
    catch { return fallback; }
  },
  set(key, value) { try { window.localStorage.setItem(key, String(value)); } catch {} },
};
const DATA_KEYS = new Set([
  "anees.teachers",
  "anees.classes",
  "anees.students",
  "anees.reports",
  "anees.notifications",
  "anees.parentSubs",
  "anees.user",
  "anees.dashboardContext",
  "anees.dashboardReturnContext",
  "anees.parentForms",
  "anees.sent",
  "anees.refreshPosition",
]);
const LS = {
  get: (k, d) => {
    if (UI_PREF_KEYS.has(k)) {
      const fallback = k === "anees.theme" ? "dark" : "ar";
      const value = PREF_STORAGE.get(k, fallback);
      return k === "anees.theme" ? (value === "light" ? "light" : "dark") : (value === "en" ? "en" : "ar");
    }
    if (Object.prototype.hasOwnProperty.call(_mem, k)) return _mem[k];
    return d;
  },
  set: (k, v) => {
    _mem[k] = v;
    if (UI_PREF_KEYS.has(k)) PREF_STORAGE.set(k, v);
    // Only transient helper collections are persisted, directly to Supabase.
    if (
      window.AneesCloud &&
      (k === "anees.notifications" || k === "anees.parentSubs")
    ) {
      const write = window.AneesCloud.saveHelperState(k, v);
      window.__aneesPendingWrites = (
        window.__aneesPendingWrites || Promise.resolve()
      )
        .catch(() => undefined)
        .then(() => write)
        .catch((error) => {
          console.error(`[AneesCloud persistence failed: ${k}]`, error);
          toast(
            state?.lang === "ar"
              ? "تعذر مزامنة البيانات مع قاعدة البيانات"
              : "Could not sync data with the database",
            "error",
          );
          throw error;
        });
    }
    return true;
  },
  async flush() {
    await (window.__aneesPendingWrites || Promise.resolve());
  },
  clearData() {
    for (const k of Object.keys(_mem)) {
      if (!UI_PREF_KEYS.has(k)) delete _mem[k];
    }
  },
};

/* ---------- Password hashing (SHA-256 + per-user salt) ----------
   ملاحظة: ده تحسين للواجهة فقط؛ التحقق الحقيقي لازم يتنقل للباك-إند. */
async function hashPass(salt, pass) {
  try {
    const buf = await crypto.subtle.digest(
      "SHA-256",
      new TextEncoder().encode(salt + ":" + pass),
    );
    return Array.from(new Uint8Array(buf))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
  } catch {
    return "plain:" + pass; // بيئة بدون crypto.subtle (HTTP غير آمن)
  }
}
async function setUserPass(user, pass) {
  user.salt = Math.random().toString(36).slice(2) + Date.now().toString(36);
  user.passHash = await hashPass(user.salt, pass);
  delete user.pass;
}
async function checkUserPass(user, pass) {
  if (!user) return false;
  if (user.passHash)
    return (await hashPass(user.salt || "", pass)) === user.passHash;
  if (user.pass && user.pass === pass) {
    await setUserPass(user, pass); // ترحيل الحسابات القديمة تلقائيًا
    LS.set("anees.teachers", state.teachers);
    return true;
  }
  return false;
}

async function hydrateParentSubmissions() {
  try {
    const rows = await window.AneesCloud?.fetchParentSubmissions?.();
    if (!Array.isArray(rows) || !rows.length) return;
    state.parentSubs =
      state.parentSubs && typeof state.parentSubs === "object"
        ? state.parentSubs
        : {};
    // Snapshot identities already known locally so we only notify for newly arrived rows.
    const knownIds = new Set();
    for (const list of Object.values(state.parentSubs)) {
      if (!Array.isArray(list)) continue;
      for (const item of list) {
        const id = item?.id || String(item?.submittedAt || "");
        if (id) knownIds.add(String(id));
      }
    }
    const notifiedIds = new Set(
      (state.notifications || [])
        .filter((n) => n && n.type === "parent_form")
        .map((n) => String(n.meta?.submissionId || ""))
        .filter(Boolean),
    );
    const hadLocalCache = knownIds.size > 0;
    let addedNew = false;
    for (const row of rows) {
      const student = (state.students || []).find(
        (s) => String(s.id) === String(row.studentId),
      );
      if (!student) continue;
      const submission = { ...row, studentId: student.id };
      const current = Array.isArray(state.parentSubs[student.id])
        ? state.parentSubs[student.id]
        : [];
      const identity = String(
        submission.id || String(submission.submittedAt || ""),
      );
      const isNew = !!identity && !knownIds.has(identity);
      state.parentSubs[student.id] = [
        submission,
        ...current.filter(
          (item) => (item.id || String(item.submittedAt || "")) !== identity,
        ),
      ].slice(0, 50);
      // Notify teacher only for submissions that arrived after they already had local data,
      // and that are not already represented in the notification list. Skip ancient history on first load.
      if (
        isNew &&
        hadLocalCache &&
        identity &&
        !notifiedIds.has(identity) &&
        state.user?.id
      ) {
        const submittedMs = Number(
          submission.submittedAt
            ? new Date(submission.submittedAt).getTime()
            : 0,
        );
        const recent =
          Number.isFinite(submittedMs) &&
          submittedMs > 0 &&
          Date.now() - submittedMs < 7 * 24 * 60 * 60 * 1000;
        if (recent) {
          addNotification({
            type: "parent_form",
            title:
              state.lang === "ar"
                ? "تقييم جديد من ولي الأمر"
                : "New parent assessment",
            body:
              state.lang === "ar"
                ? `ولي أمر الطالب ${student.name || ""} سجّل تقييمًا جديدًا.`
                : `Parent of ${student.name || "student"} submitted a new assessment.`,
            meta: {
              studentId: student.id,
              submissionId: identity,
            },
          });
          notifiedIds.add(identity);
        }
      }
      if (isNew) addedNew = true;
      if (identity) knownIds.add(identity);
    }
    if (addedNew || hadLocalCache) LS.set("anees.parentSubs", state.parentSubs);
    else LS.set("anees.parentSubs", state.parentSubs);
  } catch (error) {
    console.warn("[Anees parent submissions hydration]", error);
  }
}

/* ============================================================
   AGE STAGES (نفسية)
   ============================================================ */
const AGE_STAGES = {
  kg: { ar: "KG", en: "KG", min: 4, max: 6 },
  early_primary: {
    ar: "ابتدائي مبكر",
    en: "Early Primary",
    min: 6,
    max: 9,
  },
  late_primary: {
    ar: "ابتدائي متأخر",
    en: "Late Primary",
    min: 9,
    max: 12,
  },
  preparatory: {
    ar: "إعدادي",
    en: "Preparatory",
    min: 12,
    max: 15,
  },
  secondary: { ar: "ثانوي", en: "Secondary", min: 15, max: 18 },
};

/* ============================================================
   STATE
   ============================================================ */
const state = {
  theme: LS.get("anees.theme", "dark"),
  lang: LS.get("anees.lang", "ar"),
  user: LS.get("anees.user", null),
  teachers: LS.get("anees.teachers", []),
  classes: LS.get("anees.classes", []),
  students: LS.get("anees.students", []),
  reports: LS.get("anees.reports", []),
  notifications: LS.get("anees.notifications", []),
  parentSubs: LS.get("anees.parentSubs", {}),
  route: "#/",
  currentClass: null,
  dashView: "classes",
  profileTab: "assess",
  parentSubsSort: "newest",
  assessPeriod: "daily",
  detailTab: "daily",
  classSearch: "",
  classFilter: "all",
  studentSearch: "",
  studentSort: "az",
  reportsSearch: "",
  reportsFilter: "all",
  reportsSort: "newest",
  authMode: "login",
  resetEmail: "",
  resetCode: "",
  pendingResetCode: null,
  signupStep: 1,
  signupDraft: {},
};

// Normalize volatile in-memory state before rendering; Supabase remains the durable source of truth.
state.theme = state.theme === "light" ? "light" : "dark";
state.lang = state.lang === "en" ? "en" : "ar";
state.user = state.user && typeof state.user === "object" ? state.user : null;
for (const key of [
  "teachers",
  "classes",
  "students",
  "reports",
  "notifications",
]) {
  if (!Array.isArray(state[key])) state[key] = [];
  else
    state[key] = state[key].filter((item) => item && typeof item === "object");
}
state.parentSubs =
  state.parentSubs &&
  typeof state.parentSubs === "object" &&
  !Array.isArray(state.parentSubs)
    ? state.parentSubs
    : {};

const savedDashboardContext = LS.get("anees.dashboardContext", null);
const currentUserKey = state.user
  ? String(state.user.id || state.user.email || state.user.name || "local-user")
  : "";
if (
  state.user &&
  savedDashboardContext &&
  String(savedDashboardContext.userId || "") === currentUserKey
) {
  const validViews = new Set([
    "classes",
    "profile",
    "studentProfile",
    "classStatus",
  ]);
  state.dashView = validViews.has(savedDashboardContext.dashView)
    ? savedDashboardContext.dashView
    : "classes";
  state.currentClass = state.classes.some(
    (item) => item.id === savedDashboardContext.currentClass,
  )
    ? savedDashboardContext.currentClass
    : null;
  state.profileStudentId = state.students.some(
    (item) => item.id === savedDashboardContext.profileStudentId,
  )
    ? savedDashboardContext.profileStudentId
    : null;
  if (state.dashView === "studentProfile" && !state.profileStudentId)
    state.dashView = "classes";
  if (state.dashView === "classStatus" && !state.currentClass)
    state.dashView = "classes";
  state.profileTab =
    savedDashboardContext.profileTab === "parent" ? "parent" : "assess";
  state.assessPeriod = ["daily", "weekly", "monthly"].includes(
    savedDashboardContext.assessPeriod,
  )
    ? savedDashboardContext.assessPeriod
    : "daily";
  state.detailTab = ["daily", "weekly", "monthly"].includes(
    savedDashboardContext.detailTab,
  )
    ? savedDashboardContext.detailTab
    : "daily";
  state.parentSubsSort = ["newest", "oldest", "high", "low"].includes(
    savedDashboardContext.parentSubsSort,
  )
    ? savedDashboardContext.parentSubsSort
    : "newest";
}

function persistDashboardContext() {
  if (!state.user) return;
  try {
    LS.set("anees.dashboardContext", {
      userId:
        state.user.id || state.user.email || state.user.name || "local-user",
      dashView: state.dashView,
      currentClass: state.currentClass,
      profileStudentId: state.profileStudentId || null,
      profileTab: state.profileTab,
      assessPeriod: state.assessPeriod,
      detailTab: state.detailTab,
      parentSubsSort: state.parentSubsSort,
    });
  } catch (error) {
    // Dashboard state is a convenience; a full storage quota must not break navigation.
  }
}

function brandName() {
  return state.lang === "ar" ? "أنيس" : "Anees";
}
function updateBrandLabels() {
  document.querySelectorAll(".logo span, .brand-name").forEach((el) => {
    el.textContent = brandName();
  });
  const titleBrand = brandName();
  if (document.title.includes("|")) {
    const rest = document.title.split("|").slice(1).join("|").trim();
    document.title = titleBrand + " | " + rest;
  }
}

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));
// Shared delivery guard: all layered modules (legacy fixes and reports UI) use one lock.
const reportSendsInFlight = new Set();
const validParentEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email || "").trim());
const missingParentEmail = () =>
  toast(
    state.lang === "ar"
      ? "أضف بريدًا إلكترونيًا صحيحًا لولي الأمر قبل الإرسال."
      : "Enter a valid parent email before sending.",
    "error",
  );
const esc = (s) =>
  String(s ?? "").replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
const fmtDate = (d) =>
  new Date(d).toLocaleString(state.lang === "ar" ? "ar-EG" : "en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
  });
const fmtDateShort = (d) =>
  new Date(d).toLocaleDateString(state.lang === "ar" ? "ar-EG" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
const initials = (n) =>
  (n || "?")
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
/** Translate stored report status between AR/EN for display */
const STATUS_PAIRS = [
  ["ممتاز", "Excellent"],
  ["جيد", "Good"],
  ["يحتاج متابعة", "Needs monitoring"],
  ["يحتاج انتباه", "Needs attention"],
  ["يحتاج تدخل", "Needs intervention"],
  ["تكرار منخفض جداً", "Very low frequency"],
  ["تكرار محدود إلى متوسط", "Limited to moderate frequency"],
  ["تكرار مرتفع نسبياً", "Relatively high frequency"],
  ["تكرار مرتفع جداً", "Very high frequency"],
  ["خطورة منخفضة", "Low risk"],
  ["خطورة متوسطة", "Moderate risk"],
  ["خطورة مرتفعة", "Elevated risk"],
  ["خطورة عالية", "High risk"],
];
function statusLabel(st, isAr = state.lang === "ar") {
  if (!st) return "";
  const legacyRisk = {
    "تكرار منخفض جداً": ["خطورة منخفضة", "Low risk"],
    "Very low frequency": ["خطورة منخفضة", "Low risk"],
    "تكرار محدود إلى متوسط": ["خطورة متوسطة", "Moderate risk"],
    "Limited to moderate frequency": ["خطورة متوسطة", "Moderate risk"],
    "تكرار مرتفع نسبياً": ["خطورة مرتفعة", "Elevated risk"],
    "Relatively high frequency": ["خطورة مرتفعة", "Elevated risk"],
    "تكرار مرتفع جداً": ["خطورة عالية", "High risk"],
    "Very high frequency": ["خطورة عالية", "High risk"],
  };
  if (legacyRisk[st]) return legacyRisk[st][isAr ? 0 : 1];
  for (const [a, e] of STATUS_PAIRS) {
    if (st === a || st === e) return isAr ? a : e;
  }
  return st;
}
const AR_DAYS = [
  "الأحد",
  "الاثنين",
  "الثلاثاء",
  "الأربعاء",
  "الخميس",
  "الجمعة",
  "السبت",
];
const AR_DAYS_SHORT = ["أحد", "اثن", "ثلا", "أرب", "خمي", "جمع", "سبت"];
const EN_DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const EN_DAYS_SHORT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

/* ============================================================
   TOAST & DIALOG
   ============================================================ */

/* ============================================================
   NOTIFICATIONS
   ============================================================ */
function addNotification(n) {
  const item = {
    id: "n_" + Date.now() + "_" + Math.random().toString(36).slice(2, 7),
    ts: Date.now(),
    read: false,
    type: n.type || "info",
    title: n.title || "",
    body: n.body || "",
    meta: n.meta || null,
  };
  state.notifications = [item, ...(state.notifications || [])].slice(0, 100);
  LS.set("anees.notifications", state.notifications);
  try {
    renderNavbar();
  } catch (e) {}
  try {
    renderDashTopActions();
  } catch (e) {}
  try {
    ringNotifBell();
  } catch (e) {}
}
async function copyParentFormLink() {
  const el = $("#spParentLink");
  const val = el ? el.value : "";
  if (!val) return toast(state.lang === "ar" ? "مفيش رابط" : "No link", "warn");
  if (
    state.profileStudentId &&
    typeof window.registerParentLink === "function"
  ) {
    const registered = await window.registerParentLink(state.profileStudentId);
    if (!registered)
      return toast(
        state.lang === "ar"
          ? "تعذر تجهيز الرابط في قاعدة البيانات. تحقق من اتصال Supabase وحاول مرة أخرى."
          : "Could not register the link in the database. Check Supabase and try again.",
        "error",
      );
  }
  try {
    await navigator.clipboard.writeText(val);
  } catch (error) {
    try {
      el.select();
      if (!document.execCommand("copy")) throw error;
    } catch {
      return toast(state.lang === "ar" ? "تعذر النسخ" : "Copy failed", "error");
    }
  }
  toast(
    state.lang === "ar"
      ? "تم تجهيز الرابط ونسخه"
      : "Link registered and copied",
    "success",
  );
}

function ringNotifBell() {
  $$(".notif-btn").forEach((btn) => {
    btn.classList.remove("ringing");
    void btn.offsetWidth;
    btn.classList.add("ringing");
    setTimeout(() => btn.classList.remove("ringing"), 1200);
  });
}
function ensureNotifToastHost() {
  let host = $("#notifToastHost");
  if (!host) {
    host = document.createElement("div");
    host.id = "notifToastHost";
    host.className = "notif-toast-host";
    document.body.appendChild(host);
  }
  return host;
}
function showNotifToast(item) {
  const host = ensureNotifToastHost();
  const el = document.createElement("div");
  el.className = "notif-toast";
  el.innerHTML = `<div class="nt-title">${esc(item.title)}</div><div class="nt-body">${esc(item.body)}</div>`;
  el.onclick = () => {
    markNotifRead(item.id);
    openNotificationTarget(item);
    el.classList.add("out");
    setTimeout(() => el.remove(), 350);
  };
  host.appendChild(el);
  setTimeout(() => {
    if (!el.parentNode) return;
    el.classList.add("out");
    setTimeout(() => el.remove(), 350);
  }, 5500);
}
function handleNotifClick(id) {
  const n = (state.notifications || []).find((x) => x.id === id);
  if (!n) return;
  closeNotifPanels();
  openNotificationTarget(n);
  try {
    renderDashTopActions();
  } catch (e) {}
  try {
    renderNavbar();
  } catch (e) {}
}
function openNotificationTarget(n) {
  markNotifRead(n.id);
  LS.set("anees.notifications", state.notifications);
  const m = n.meta || {};
  if (m.studentId) {
    if (!state.user) {
      location.hash = "#/login";
      return;
    }
    state.dashView = "studentProfile";
    state.profileStudentId = m.studentId;
    const s = state.students.find((x) => x.id === m.studentId);
    if (s) state.currentClass = s.classId;
    location.hash = "#/dashboard";
    setTimeout(() => {
      try {
        renderDashboard();
      } catch (e) {}
    }, 50);
    return;
  }
  if (m.classId) {
    if (!state.user) {
      location.hash = "#/login";
      return;
    }
    state.dashView = "classes";
    state.currentClass = m.classId;
    location.hash = "#/dashboard";
    setTimeout(() => {
      try {
        renderDashboard();
      } catch (e) {}
    }, 50);
    return;
  }
  if (state.user) {
    location.hash = "#/dashboard";
  }
}
function notifPanelHTML(isAr) {
  const nCount = unreadNotifCount();
  return `<div class="notif-wrap">
      <button type="button" class="icon-btn notif-btn" onclick="toggleNotifPanel(event)" aria-label="Notifications">${ico("bell")}${nCount ? `<span class="notif-badge">${nCount > 9 ? "9+" : nCount}</span>` : ""}</button>
      <div class="notif-panel">
        <div class="notif-panel-head">
          <span>${isAr ? "الإشعارات" : "Notifications"}</span>
          <button type="button" class="btn btn-ghost btn-sm" onclick="markAllNotifsRead();try{renderDashTopActions()}catch(e){};try{renderNavbar()}catch(e){};">${isAr ? "تحديد الكل كمقروء" : "Mark all read"}</button>
        </div>
        <div class="notif-list">${
          !(state.notifications || []).length
            ? `<div class="notif-empty">${isAr ? "مفيش إشعارات" : "No notifications"}</div>`
            : (state.notifications || [])
                .slice(0, 30)
                .map(
                  (n) =>
                    `<div class="notif-item ${n.read ? "" : "unread"}" data-nid="${n.id}" onclick="handleNotifClick('${n.id}')">
                      <div class="ni-title">${esc(n.title)}</div>
                      <div class="ni-body">${esc(n.body)}</div>
                      <div class="ni-time">${fmtDate(n.ts)}</div>
                    </div>`,
                )
                .join("")
        }</div>
      </div>
    </div>`;
}

function markNotifRead(id) {
  state.notifications = (state.notifications || []).map((x) =>
    x.id === id ? { ...x, read: true } : x,
  );
  LS.set("anees.notifications", state.notifications);
}
function closeNotifPanels(except = null) {
  $$(".notif-wrap.open").forEach((wrap) => {
    if (wrap !== except) wrap.classList.remove("open");
  });
  syncNotifScrollLock();
}

function syncNotifScrollLock() {
  const hasOpenPanel = Boolean(document.querySelector(".notif-wrap.open"));
  document.body.classList.toggle(
    "notifications-open",
    innerWidth <= 768 && hasOpenPanel,
  );
}

function toggleNotifPanel(e) {
  e?.preventDefault?.();
  e?.stopPropagation?.();
  const wrap =
    e?.currentTarget?.closest(".notif-wrap") ||
    e?.target?.closest(".notif-wrap");
  if (!wrap) return;

  const shouldOpen = !wrap.classList.contains("open");
  $$(".user-menu.open").forEach((menu) => menu.classList.remove("open"));
  closeNotifPanels();
  if (shouldOpen) wrap.classList.add("open");
  syncNotifScrollLock();
}
function markAllNotifsRead() {
  state.notifications = (state.notifications || []).map((x) => ({
    ...x,
    read: true,
  }));
  LS.set("anees.notifications", state.notifications);
}
function unreadNotifCount() {
  return (state.notifications || []).filter((x) => !x.read).length;
}

function toast(msg, type = "info") {
  const wrap = $("#toasts");
  const el = document.createElement("div");
  el.className = `toast ${type}`;
  const icMap = {
    info: "info",
    success: "check",
    error: "alert",
    warn: "alert",
  };
  el.innerHTML = `<span class="t-ic">${ico(icMap[type] || "info")}</span><span class="t-text">${esc(msg)}</span>`;
  wrap.appendChild(el);
  setTimeout(() => {
    el.style.transition = "opacity .28s, transform .28s";
    el.style.opacity = "0";
    el.style.transform = "translateY(8px)";
    setTimeout(() => el.remove(), 280);
  }, 3800);
}

function dialog({
  title,
  msg,
  type = "info",
  confirmText = "موافق",
  cancelText = "إلغاء",
  onConfirm,
  showCancel = true,
}) {
  const overlay = $("#dialogOverlay");
  const box = $("#dialog");
  const icMap = {
    info: "info",
    success: "check",
    error: "alert",
    warn: "alert",
  };
  box.innerHTML = `
    <div class="dialog-icon ${type}">${ico(icMap[type] || "info")}</div>
    <h3>${esc(title)}</h3>
    <p>${esc(msg)}</p>
    <div class="dialog-actions">
      ${showCancel ? `<button class="btn btn-ghost" data-role="cancel">${esc(cancelText)}</button>` : ""}
      <button class="btn ${type === "error" ? "btn-danger" : "btn-primary"}" data-role="confirm">${esc(confirmText)}</button>
    </div>`;
  overlay.classList.add("open");
  box.querySelector('[data-role="confirm"]').onclick = () => {
    overlay.classList.remove("open");
    onConfirm && onConfirm();
  };
  const c = box.querySelector('[data-role="cancel"]');
  if (c) c.onclick = () => overlay.classList.remove("open");
}
$("#dialogOverlay").addEventListener("click", (e) => {
  if (e.target.id === "dialogOverlay")
    $("#dialogOverlay").classList.remove("open");
});

function markField(id, invalid) {
  const el = typeof id === "string" ? document.getElementById(id) : id;
  if (!el) return;
  el.classList.toggle("invalid", !!invalid);
}
document.addEventListener("input", (e) => {
  const g = e.target.closest && e.target.closest(".form-group");
  if (g && g.classList.contains("invalid") && e.target.value)
    g.classList.remove("invalid");
});

/* ============================================================
   CUSTOM SELECT – branded dropdown (no native option chrome)
   ============================================================ */
function closeAllCustomSelects(except) {
  $$(".cs-wrap.open").forEach((w) => {
    if (except && w === except) return;
    w.classList.remove("open");
    const t = w.querySelector(".cs-trigger");
    if (t) t.setAttribute("aria-expanded", "false");
  });
}
function enhanceCustomSelects(root) {
  const scope = root || document;

  // Remove stray SVG icons that are direct children of filter bars (ghost icons)
  scope
    .querySelectorAll(
      ".filter-bar > svg, .stu-filter-bar > svg, .reports-toolbar > svg",
    )
    .forEach((svg) => svg.remove());
  // For toolbar selects: always tear down and rebuild clean (prevents icon ghosts)
  scope
    .querySelectorAll(
      ".filter-bar .cs-wrap, .stu-filter-bar .cs-wrap, .reports-toolbar .cs-wrap",
    )
    .forEach((w) => {
      const sel = w.querySelector("select");
      if (!sel) {
        w.remove();
        return;
      }
      delete sel.dataset.cs;
      sel.classList.remove("cs-native");
      w.parentNode.insertBefore(sel, w);
      w.remove();
    });

  scope.querySelectorAll("select").forEach((sel) => {
    if (
      sel.dataset.cs === "1" &&
      sel.parentElement &&
      sel.parentElement.classList.contains("cs-wrap")
    ) {
      return;
    }
    if (sel.dataset.cs === "1") delete sel.dataset.cs;
    if (sel.parentElement && sel.parentElement.classList.contains("cs-wrap"))
      return;

    sel.dataset.cs = "1";
    sel.classList.add("cs-native");

    const wrap = document.createElement("div");
    wrap.className = "cs-wrap";
    if (sel.closest(".filter-bar, .stu-filter-bar, .reports-toolbar")) {
      wrap.classList.add("cs-toolbar");
    }
    if (sel.disabled) wrap.classList.add("disabled");
    sel.parentNode.insertBefore(wrap, sel);
    wrap.appendChild(sel);

    const trigger = document.createElement("button");
    trigger.type = "button";
    trigger.className = "cs-trigger";
    trigger.setAttribute("aria-haspopup", "listbox");
    trigger.setAttribute("aria-expanded", "false");
    if (sel.getAttribute("aria-label"))
      trigger.setAttribute("aria-label", sel.getAttribute("aria-label"));

    const menu = document.createElement("div");
    menu.className = "cs-menu";
    menu.setAttribute("role", "listbox");
    menu.addEventListener(
      "wheel",
      (e) => {
        if (menu.scrollHeight > menu.clientHeight) e.stopPropagation();
      },
      { passive: true },
    );

    const sync = () => {
      const opt = sel.options[sel.selectedIndex];
      // ONLY text — icons come from CSS background-image on .cs-trigger
      trigger.textContent = opt ? opt.text : "";
      menu.innerHTML = "";
      Array.from(sel.options).forEach((o, i) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className =
          "cs-option" + (i === sel.selectedIndex ? " selected" : "");
        btn.setAttribute("role", "option");
        btn.setAttribute(
          "aria-selected",
          i === sel.selectedIndex ? "true" : "false",
        );
        btn.textContent = o.text;
        btn.disabled = !!o.disabled;
        btn.onclick = (ev) => {
          ev.stopPropagation();
          sel.selectedIndex = i;
          sel.dispatchEvent(new Event("change", { bubbles: true }));
          sync();
          closeAllCustomSelects();
        };
        menu.appendChild(btn);
      });
    };
    sync();

    trigger.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (sel.disabled) return;
      const willOpen = !wrap.classList.contains("open");
      closeAllCustomSelects();
      if (willOpen) {
        wrap.classList.add("open");
        trigger.setAttribute("aria-expanded", "true");
      }
    };

    wrap.appendChild(trigger);
    wrap.appendChild(menu);
    sel.addEventListener("change", sync);
  });
}

document.addEventListener("click", () => closeAllCustomSelects());
document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  closeAllCustomSelects();
  closeNotifPanels();
  $$(".user-menu.open").forEach((menu) => menu.classList.remove("open"));
});
window.addEventListener("resize", syncNotifScrollLock, { passive: true });

/* ============================================================
   THEME & LANG
   ============================================================ */
function applyTheme() {
  document.documentElement.setAttribute("data-theme", state.theme);
}
function toggleTheme() {
  state.theme = state.theme === "dark" ? "light" : "dark";
  LS.set("anees.theme", state.theme);
  applyTheme();
  renderNavbar();
  if (state.user && $("#dashboard").classList.contains("active"))
    renderDashTopActions();
}

function toggleLang() {
  state.lang = state.lang === "ar" ? "en" : "ar";
  LS.set("anees.lang", state.lang);
  document.documentElement.lang = state.lang;
  document.documentElement.dir = state.lang === "ar" ? "rtl" : "ltr";
  renderNavbar();
  if (state.user && $("#dashboard")?.classList.contains("active")) {
    renderDashTopActions();
    renderDashboard();
  } else {
    navigate(state.route);
  }
  toast(
    state.lang === "ar" ? "تم التحويل للعربية" : "Switched to English",
    "info",
  );
}

/* Keep wheel scrolling native inside notifications and prevent scroll chaining. */
document.addEventListener(
  "wheel",
  (event) => {
    const target = event.target instanceof Element ? event.target : null;
    const panel = target?.closest(".notif-panel");
    if (!panel || !panel.closest(".notif-wrap.open")) return;
    const list = panel.querySelector(".notif-list");
    if (!list) return;

    if (!target.closest(".notif-list")) {
      event.preventDefault();
      return;
    }

    const canScrollUp = list.scrollTop > 0;
    const canScrollDown =
      list.scrollTop + list.clientHeight < list.scrollHeight - 1;
    if (
      (event.deltaY < 0 && canScrollUp) ||
      (event.deltaY > 0 && canScrollDown)
    ) {
      event.stopPropagation(); // Do not hijack the wheel: the browser scrolls the list natively.
    } else {
      event.preventDefault(); // Keep the page from moving when the list reaches an edge.
    }
  },
  { passive: false },
);

document.addEventListener("click", (e) => {
  const trigger = e.target.closest("#userTrigger, #dashUserTrigger");
  if (trigger) {
    const menu = trigger.closest(".user-menu");
    if (!menu) return;
    const shouldOpen = !menu.classList.contains("open");
    closeNotifPanels();
    $$(".user-menu.open").forEach((item) => item.classList.remove("open"));
    if (shouldOpen) menu.classList.add("open");
    e.stopPropagation();
    return;
  }

  if (!e.target.closest(".user-menu")) {
    $$(".user-menu.open").forEach((menu) => menu.classList.remove("open"));
  }
  if (!e.target.closest(".notif-wrap")) closeNotifPanels();
});

/* ============================================================
   ROUTING
   ============================================================ */
const ROUTES = {
  "#/": renderHome,
  "#/blog": renderBlog,
  "#/privacy": renderPrivacy,
  "#/terms": renderTerms,
  "#/testimonials": renderTestimonials,
  "#/pricing": renderPricing,
  "#/about": renderAbout,
  "#/contact": renderContact,
  "#/login": () => renderAuthPage("login"),
  "#/signup": () => renderAuthPage("signup"),
  "#/forgot": () => renderAuthPage("forgot"),
  "#/reset-code": () => renderAuthPage("reset-code"),
  "#/reset-password": () => renderAuthPage("reset-password"),
};

function navigate(hash) {
  if (!hash) hash = "#/";
  const previousRoute = state.route;
  state.route = hash;
  const studentRoute = hash.match(/^#\/dashboard\/student\/([^/?#]+)/);
  if (studentRoute) {
    let requestedId = "";
    try {
      requestedId = decodeURIComponent(studentRoute[1]);
    } catch {}
    const targetStudent = state.students.find(
      (item) => String(item.id) === requestedId,
    );
    if (targetStudent) {
      state.dashView = "studentProfile";
      state.profileStudentId = targetStudent.id;
      state.currentClass = targetStudent.classId || null;
      persistDashboardContext();
    }
  } else if (
    hash === "#/dashboard" &&
    previousRoute.startsWith("#/dashboard/student/")
  ) {
    const returnContext = LS.get("anees.dashboardReturnContext", null);
    if (returnContext && typeof returnContext === "object") {
      state.dashView = [
        "classes",
        "profile",
        "studentProfile",
        "classStatus",
      ].includes(returnContext.dashView)
        ? returnContext.dashView
        : "classes";
      state.currentClass = state.classes.some(
        (item) => item.id === returnContext.currentClass,
      )
        ? returnContext.currentClass
        : null;
      state.profileStudentId = state.students.some(
        (item) => item.id === returnContext.profileStudentId,
      )
        ? returnContext.profileStudentId
        : null;
      state.profileTab =
        returnContext.profileTab === "parent" ? "parent" : "assess";
      state.assessPeriod = ["daily", "weekly", "monthly"].includes(
        returnContext.assessPeriod,
      )
        ? returnContext.assessPeriod
        : "daily";
      state.parentSubsSort = ["newest", "oldest", "high", "low"].includes(
        returnContext.parentSubsSort,
      )
        ? returnContext.parentSubsSort
        : "newest";
      LS.set("anees.dashboardReturnContext", null);
    } else {
      state.dashView = "classes";
      state.profileStudentId = null;
      state.currentClass = null;
    }
    persistDashboardContext();
  }
  if (hash.startsWith("#/dashboard")) {
    if (!state.user) {
      location.hash = "#/login";
      toast(
        state.lang === "ar"
          ? "لازم تسجل دخول الأول للوصول للداشبورد"
          : "Please login first",
        "warn",
      );
      return;
    }
    // Exclusive: hide site completely, show only dashboard
    const site = $("#site");
    const dash = $("#dashboard");
    if (site) {
      site.classList.add("hidden");
      site.style.display = "none";
    }
    if (dash) {
      dash.classList.add("active");
      dash.style.display = "block";
    }
    // Never auto-open mobile drawer
    closeDashDrawer();
    renderDashboard();
    renderDashTopActions();
    window.scrollTo(0, 0);
    return;
  }
  // Leaving dashboard → show site only
  {
    const site = $("#site");
    const dash = $("#dashboard");
    if (site) {
      site.classList.remove("hidden");
      site.style.display = "";
    }
    if (dash) {
      dash.classList.remove("active");
      dash.style.display = "none";
    }
    closeDashDrawer();
  }
  const articleRouteMatch = hash.match(/^#\/article\/([^/?#]+)/);
  let articleRouteId = "";
  if (articleRouteMatch) { try { articleRouteId = decodeURIComponent(articleRouteMatch[1]); } catch {} }
  const render = articleRouteMatch ? () => renderArticleDetail(articleRouteId) : (ROUTES[hash] || ROUTES["#/"]);
  try {
    $("#page").innerHTML = render();
    bindPageEvents();
    updateNavActive();
    window.scrollTo(0, 0);
    setupReveal();
    if (hash === "#/blog") { ensureArticleRealtime(); loadBlogArticles(); }
    else if (articleRouteMatch && articleRouteId) { ensureArticleRealtime(); loadBlogArticleDetail(articleRouteId); }
  } catch (error) {
    console.error("[Anees route render]", { hash, error });
    const page = $("#page");
    if (page) page.innerHTML = `<section class="auth-page"><div class="container"><div class="auth-card"><h1>${state.lang === "ar" ? "تعذر فتح الصفحة" : "Unable to open this page"}</h1><p class="auth-sub">${state.lang === "ar" ? "حدث خطأ غير متوقع. حدّث الصفحة أو ارجع للرئيسية." : "An unexpected error occurred. Refresh the page or return home."}</p><a class="btn btn-primary btn-block" href="#/" data-link>${state.lang === "ar" ? "العودة للرئيسية" : "Return home"}</a></div></div></section>`;
    bindPageEvents();
  }
}

function updateNavActive() {
  $$(".nav-links a, #mobileNavLinks a").forEach((a) =>
    a.classList.toggle("active", a.getAttribute("href") === state.route),
  );
}
window.addEventListener("hashchange", () =>
  window.navigate(location.hash || "#/"),
);

/* ============================================================
   NAVBAR (بدون صفحة الخدمات)
   ============================================================ */

function updateFooter() {
  const isAr = state.lang === "ar";
  const grid = document.querySelector(".footer-grid");
  if (!grid) return;
  const brandP = grid.querySelector(".footer-brand p");
  if (brandP) {
    brandP.textContent = isAr
      ? "منصة مصرية بتساعد المدرسين وأولياء الأمور يتابعوا الصحة النفسية للطلاب بشكل علمي ومبسط."
      : "An Egyptian platform helping teachers and parents track students' mental wellbeing in a simple, practical way.";
  }
  const cols = grid.querySelectorAll(".footer-col:not(.footer-brand)");
  const linkSets = [
    [
      ["#/pricing", isAr ? "التسعير" : "Pricing"],
      ["#/blog", isAr ? "تعلم معنا" : "Learn with us"],
      ["#/testimonials", isAr ? "قالوا عنا" : "Testimonials"],
    ],
    [
      ["#/about", isAr ? "من نحن" : "About"],
      ["#/contact", isAr ? "تواصل معنا" : "Contact"],
    ],
    [
      ["#/privacy", isAr ? "سياسة الخصوصية" : "Privacy Policy"],
      ["#/terms", isAr ? "الشروط والأحكام" : "Terms & Conditions"],
    ],
  ];
  cols.forEach((col, i) => {
    const ul = col.querySelector("ul");
    if (!ul || !linkSets[i]) return;
    ul.innerHTML = linkSets[i]
      .map(
        ([href, label]) => `<li><a href="${href}" data-link>${label}</a></li>`,
      )
      .join("");
  });
  const bottom = document.querySelector(".footer-bottom");
  if (bottom) {
    bottom.innerHTML = isAr
      ? `<span>&copy; 2026 أنيس. جميع الحقوق محفوظة.</span><span>صُنع في مصر</span>`
      : `<span>&copy; 2026 Anees. All rights reserved.</span><span>Made in Egypt</span>`;
  }
  grid.querySelectorAll("[data-link]").forEach((a) => {
    a.onclick = (e) => {
      const h = a.getAttribute("href");
      if (h && h.startsWith("#")) {
        e.preventDefault();
        location.hash = h;
      }
    };
  });
}

function goHome() {
  state.route = "#/";
  location.hash = "#/";
  try {
    navigate("#/");
  } catch (e) {}
}
function goDashboardClasses() {
  state.dashView = "classes";
  state.currentClass = null;
  state.profileStudentId = null;
  persistDashboardContext();
  location.hash = "#/dashboard";
  try {
    navigate("#/dashboard");
  } catch (e) {}
  try {
    renderDashboard();
  } catch (e) {}
}
function goMyProfile() {
  state.dashView = "profile";
  state.currentClass = null;
  state.profileStudentId = null;
  persistDashboardContext();
  location.hash = "#/dashboard";
  try {
    navigate("#/dashboard");
  } catch (e) {}
  try {
    renderDashboard();
  } catch (e) {}
}

function renderNavbar() {
  updateBrandLabels();
  updateFooter();
  const isAr = state.lang === "ar";
  const links = [
    { href: "#/", label: isAr ? "الرئيسية" : "Home" },
    { href: "#/blog", label: isAr ? "تعلم معنا" : "Learn with us" },
    { href: "#/testimonials", label: isAr ? "قالوا عنا" : "Testimonials" },
    { href: "#/pricing", label: isAr ? "التسعير" : "Pricing" },
    { href: "#/about", label: isAr ? "من نحن" : "About" },
    { href: "#/contact", label: isAr ? "تواصل معنا" : "Contact" },
  ];
  $("#navLinks").innerHTML = links
    .map((l) => `<a href="${l.href}" data-link>${l.label}</a>`)
    .join("");
  $("#mobileNavLinks").innerHTML = links
    .map(
      (l) =>
        `<a href="${l.href}" data-link>${l.label}<span style="opacity:.4">${ico("arrowL")}</span></a>`,
    )
    .join("");

  const themeBtn = `<button class="icon-btn" onclick="toggleTheme()" aria-label="Theme">${state.theme === "dark" ? ico("sun") : ico("moon")}</button>`;
  const langBtn = `<button class="icon-btn" onclick="toggleLang()" aria-label="Language">${ico("globe")}</button>`;

  if (state.user) {
    const avatarContent = state.user.avatar
      ? `<img src="${esc(state.user.avatar)}" alt="" />`
      : esc(initials(state.user.name));
    $("#navActions").innerHTML = `
      ${langBtn}${themeBtn}
      ${notifPanelHTML(isAr)}
      <div class="user-menu" id="userMenu">
        <button class="user-trigger" id="userTrigger">
          <span class="user-avatar">${avatarContent}</span>
          <span class="name">${isAr ? "أهلا،" : "Hi,"} ${esc(state.user.name.split(" ")[0])}</span>
          <span class="chev">${ico("chev")}</span>
        </button>
        <div class="user-dropdown">
          <button type="button" onclick="goHome()">${ico("arrowL")}<span>${isAr ? "الصفحة الرئيسية" : "Home"}</span></button>
          <button type="button" onclick="goDashboardClasses()">${ico("grid")}<span>${isAr ? "لوحة التحكم" : "Dashboard"}</span></button>
          <button type="button" onclick="goMyProfile()">${ico("user")}<span>${isAr ? "الملف الشخصي" : "Profile"}</span></button>
          <div class="divider"></div>
          <button type="button" class="danger" onclick="logout()">${ico("logout")}<span>${isAr ? "تسجيل الخروج" : "Logout"}</span></button>
        </div>
      </div>`;
    $("#mobileActions").innerHTML = ""; // المينيو: صفحات الناف فقط
  } else {
    $("#navActions").innerHTML = `
      ${langBtn}${themeBtn}
      <a class="btn btn-ghost btn-sm" href="#/login" data-link>${isAr ? "تسجيل الدخول" : "Login"}</a>
      <a class="btn btn-primary btn-sm" href="#/signup" data-link>${isAr ? "انضم إلينا" : "Join us"}</a>`;
    $("#mobileActions").innerHTML = `
      <a class="btn btn-primary btn-lg btn-block" href="#/signup" data-link onclick="closeMobile()">${isAr ? "انضم إلينا" : "Join us"}</a>`;
  }
}

$("#menuToggle").onclick = () => {
  const menu = $("#mobileMenu");
  if (menu.classList.contains("open")) {
    closeMobile();
  } else {
    menu.classList.add("open");
    document.body.style.overflow = "hidden";
  }
};
function closeMobile() {
  $("#mobileMenu").classList.remove("open");
  document.body.style.overflow = "";
}
// Close mobile menu when clicking a nav link inside it
document.addEventListener("click", (e) => {
  const menu = $("#mobileMenu");
  if (!menu || !menu.classList.contains("open")) return;
  const link = e.target.closest("#mobileNavLinks a, #mobileActions a");
  if (link) closeMobile();
});

/* ============================================================
   HOME PAGE
   ============================================================ */
function renderHome() {
  const isAr = state.lang === "ar";
  return `
<section class="hero">
  <div class="container hero-grid">
    <div class="reveal">
      <span class="hero-badge"><span class="dot"></span> ${isAr ? "منصة الصحة النفسية الأولى للطلاب في مصر" : "Egypt's first student mental-health platform"}</span>
      <h1 class="h1">${isAr ? 'خلي بالك من <span class="accent">صحة طفلك النفسية</span> قبل ما تشوف الدرجات' : 'Care about your child\'s <span class="accent">mental health</span> before the grades'}</h1>
      <p class="lead">${isAr ? "أنيس رفيقك اليومي كمدرس أو ولي أمر لتقييم سلوك الطالب ومتابعة صحته النفسية بشكل علمي مبسط، مع تقارير ذكية توصل في وقتها." : "Anees is your daily companion as a teacher or parent to assess student behavior and track mental wellbeing with smart, timely reports."}</p>
      <div class="hero-cta">
        <button class="btn btn-primary btn-lg" onclick="openAuth('signup')">${ico("arrowL")} ${isAr ? "ابدأ كمدرس" : "Start as Teacher"}</button>
        <a href="#/pricing" data-link class="btn btn-ghost btn-lg">${isAr ? "اكتشف الباقات" : "See plans"}</a>
      </div>
      <div class="hero-stats">
        <div><div class="num">+2,400</div><div class="lbl">${isAr ? "طالب تم متابعته" : "Students tracked"}</div></div>
        <div><div class="num">+180</div><div class="lbl">${isAr ? "مدرس نشط" : "Active teachers"}</div></div>
        <div><div class="num">96%</div><div class="lbl">${isAr ? "رضا أولياء الأمور" : "Parent satisfaction"}</div></div>
      </div>
    </div>
    <div class="hero-visual reveal">
      <div class="hero-card">
        <div class="row">
          <div class="who">
            <div class="avatar">م</div>
            <div><b>${isAr ? "محمد أحمد" : "Mohamed Ahmed"}</b><span>${isAr ? "الصف الثالث الإعدادي" : "Grade 9"}</span></div>
          </div>
          <span class="score-pill good">8.5 / 10</span>
        </div>
        <div class="mood-label">${isAr ? "مؤشر السلوك اليومي" : "Daily behavior index"}</div>
        <div class="mood-row"><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i></i><i></i><i></i></div>
      </div>
      <div class="hero-float f1">${ico("sparkle")} ${isAr ? "تحسن ملحوظ هذا الأسبوع" : "Clear improvement this week"}</div>
      <div class="hero-float f2">${ico("chart")} ${isAr ? "تقرير أسبوعي لولي الأمر" : "Weekly parent report"}</div>
    </div>
  </div>
</section>

<section class="section" id="services">
  <div class="container">
    <div class="section-head reveal">
      <div class="eyebrow">${isAr ? "خدماتنا" : "Our Services"}</div>
      <h2 class="h2">${isAr ? "كل اللي محتاجه المدرس وولي الأمر في مكان واحد" : "Everything teachers & parents need in one place"}</h2>
      <p class="lead">${isAr ? "أدوات مصممة لتساعدك تلاحظ، تفهم، وتتصرف صح مع طلابك." : "Tools designed to help you notice, understand, and act correctly with your students."}</p>
    </div>
    <div class="grid grid-3-fixed">
      ${[
        {
          ic: "activity",
          t: isAr ? "تقييم سلوكي" : "Behavioral Assessment",
          d: isAr
            ? "تقييم دقيق لسلوك الطالب اليومي بأسئلة علمية بسيطة، بتطلعلك مؤشر واضح لتطوره."
            : "Accurate daily behavior assessment with simple scientific questions and a clear progress index.",
        },
        {
          ic: "brain",
          t: isAr ? "تقييم نفسي" : "Psychological Screening",
          d: isAr
            ? "أدوات مبنية على معايير معتمدة تساعدك تلاحظ أي تغيرات مبكرة."
            : "Tools based on validated standards to help you notice early changes.",
        },
        {
          ic: "user",
          t: isAr ? "دعم المدرس" : "Teacher Support",
          d: isAr
            ? "لوحة تحكم كاملة تتابع بها فصلك وطلابك وترفع تقاريرهم بضغطة واحدة."
            : "A full dashboard to manage your class, students, and send reports in one click.",
        },
        {
          ic: "users",
          t: isAr ? "دعم ولي الأمر" : "Parent Support",
          d: isAr
            ? "تقارير أسبوعية تصل لولي الأمر تلقائيًا على الإيميل مع توصيات عملية."
            : "Weekly reports delivered automatically to parents with practical recommendations.",
        },
        {
          ic: "book",
          t: isAr ? "المقالات الإرشادية" : "Guidance Articles",
          d: isAr
            ? "محتوى عربي مبسط وموثوق يساعدك تفهم نفسية طفلك في كل مرحلة."
            : "Simple, trusted content to help you understand your child's psychology at every stage.",
        },
        {
          ic: "video",
          t: isAr ? "فيديوهات تعليمية" : "Educational Videos",
          d: isAr
            ? "فيديوهات قصيرة من متخصصين تعلّمك مهارات التعامل مع السلوكيات."
            : "Short expert videos teaching practical skills for handling behaviors.",
        },
      ]
        .map(
          (s) =>
            `<div class="card reveal"><div class="card-icon">${ico(s.ic)}</div><h3>${s.t}</h3><p>${s.d}</p></div>`,
        )
        .join("")}
    </div>
  </div>
</section>

<section class="section">
  <div class="container why-grid">
    <div class="why-visual reveal">
      <div>
        <div class="stat-big">1 من 5</div>
        <div class="stat-cap">${isAr ? "طلاب بيعاني من اضطراب نفسي، وأغلبهم مش بياخدوا أي دعم متخصص." : "Students face a mental health challenge, and most receive no specialized support."}</div>
      </div>
      <div class="mini-stats">
        <div><b>+60%</b><span>${isAr ? "تحسن في التحصيل بعد الدعم النفسي" : "Improvement in achievement after support"}</span></div>
        <div><b>3x</b><span>${isAr ? "أسرع في اكتشاف المشكلات مبكرًا" : "Faster early problem detection"}</span></div>
      </div>
    </div>
    <div class="reveal">
      <div class="eyebrow">${isAr ? "لماذا أنيس" : "Why Anees"}</div>
      <h2 class="h2">${isAr ? "لأن كل طالب محتاج حد يفهمه، مش بس يقيم درجاته" : "Because every student needs someone who understands them, not just grades them"}</h2>
      <p class="lead">${isAr ? "بنشتغل على بناء علاقة صحية بين المدرس والطالب وولي الأمر، بأدوات مبنية على أسس علمية." : "We work on building a healthy relationship between teacher, student and parent with science-based tools."}</p>
      <ul class="why-list">
        ${(isAr
          ? [
              "تقييم علمي مبني على أسئلة متخصصين، مش تخمين",
              "تقارير تلقائية توصل لولي الأمر بدون أي مجهود إضافي",
              "متابعة لحظية لكل طالب داخل الفصل",
              "محتوى عربي مبسط بدون تعقيد أو مصطلحات صعبة",
              "التزام بخصوصية بيانات الطلاب",
            ]
          : [
              "Scientific assessment based on expert questions, not guesswork",
              "Automatic reports delivered to parents with zero extra effort",
              "Real-time tracking for every student in class",
              "Simple Arabic content without complex jargon",
              "Commitment to student data privacy",
            ]
        )
          .map(
            (x) =>
              `<li><div class="check">${ico("check")}</div><span>${x}</span></li>`,
          )
          .join("")}
      </ul>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head reveal">
      <div class="eyebrow">${isAr ? "ليه يهمك" : "Why it matters"}</div>
      <h2 class="h2">${isAr ? "ليه لازم تهتم بالصحة النفسية للطالب؟" : "Why should you care about student mental health?"}</h2>
      <p class="lead">${isAr ? "الطالب اللي نفسيته كويسة بيتعلم أسرع، بيشارك في الفصل، وعلاقاته الاجتماعية بتبقى صحية. أما الطالب اللي بيعاني في صمت، بيتحول لطالب فاشل دراسيًا بدون سبب واضح." : "A student with good mental health learns faster, participates more, and builds healthier relationships. A student suffering in silence often becomes an underachiever without an obvious reason."}</p>
    </div>
    <div class="grid grid-3-fixed">
      ${[
        {
          ic: "heart",
          n: "01",
          t: isAr ? "العافية النفسية" : "Mental Wellbeing",
          d: isAr
            ? "تقييم مستمر للحالة النفسية، واكتشاف مبكر للعلامات التحذيرية، وتقارير تساعدك تتصرف صح."
            : "Continuous assessment, early warning signs, and reports that help you act correctly.",
        },
        {
          ic: "activity",
          n: "02",
          t: isAr ? "العافية البدنية" : "Physical Wellbeing",
          d: isAr
            ? "متابعة مؤشرات النشاط، النوم، والطاقة اللي بتنعكس على تركيز الطالب وقدرته على التحصيل."
            : "Tracking activity, sleep and energy indicators that affect focus and achievement.",
        },
        {
          ic: "shield",
          n: "03",
          t: isAr ? "السلوك السليم" : "Healthy Behavior",
          d: isAr
            ? "توجيه الطالب للسلوكيات الإيجابية من خلال تقييم أسبوعي، وملاحظات المدرس، وتوصيات مخصصة."
            : "Guiding students toward positive behaviors through weekly assessment and tailored recommendations.",
        },
      ]
        .map(
          (p) =>
            `<div class="pillar reveal"><div class="num">${p.n}</div><div class="pillar-icon">${ico(p.ic)}</div><h3>${p.t}</h3><p>${p.d}</p></div>`,
        )
        .join("")}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head center reveal">
      <div class="eyebrow">${isAr ? "الأسئلة الشائعة" : "FAQ"}</div>
      <h2 class="h2">${isAr ? "إجابات على أكتر الأسئلة اللي بتوصلنا" : "Answers to the most common questions"}</h2>
    </div>
    <div class="faq">
      ${(isAr
        ? [
            [
              "هل المنصة مجانية للمدرسين؟",
              "في باقة مجانية بتشمل فصل واحد و10 طلاب، وباقات مدفوعة للمدارس والاستخدامات الموسعة.",
            ],
            [
              "هل تقارير الطلاب سرية؟",
              "في النسخة الحالية بتتحفظ البيانات على متصفحك، وتُشارك مع ولي الأمر فقط عند إرسال تقرير.",
            ],
            [
              "إزاي التقارير بتوصل لولي الأمر؟",
              "بشكل تلقائي في نهاية كل أسبوع على الإيميل اللي المدرس بيسجله للطالب.",
            ],
            [
              "هل التقارير دي بديل للمتخصص؟",
              "لا. أنيس أداة مساعدة للتقييم المبدئي والمتابعة، وبيوصي بزيارة المتخصص في الحالات اللي محتاجة تدخل.",
            ],
          ]
        : [
            [
              "Is the platform free for teachers?",
              "There is a free plan with one class and up to 10 students, plus paid plans for schools and expanded use.",
            ],
            [
              "Are student reports confidential?",
              "In the current version, data stays in your browser and is only shared with the parent when you send a report.",
            ],
            [
              "How do reports reach parents?",
              "Automatically at the end of each week to the email the teacher registers for the student.",
            ],
            [
              "Are these reports a substitute for a specialist?",
              "No. Anees is a supportive tool for initial assessment and follow-up, and recommends specialist visits when needed.",
            ],
          ]
      )
        .map(
          ([q, a]) =>
            `<div class="faq-item reveal"><button class="faq-q"><span>${q}</span>${ico("chev")}</button><div class="faq-a"><p>${a}</p></div></div>`,
        )
        .join("")}
    </div>
  </div>
</section>

<section class="section" id="home-contact">
  <div class="container contact-grid">
    <div class="reveal">
      <div class="eyebrow">${isAr ? "تواصل معنا" : "Contact"}</div>
      <h2 class="h2" style="font-size:1.5rem;margin-bottom:10px;">${isAr ? "عندك سؤال؟ كلّمنا" : "Have a question? Talk to us"}</h2>
      <p class="lead" style="font-size:.98rem;">${isAr ? "ابعتلنا استفسارك وهنرد عليك في أقرب وقت ممكن." : "Send us your inquiry and we'll get back to you as soon as possible."}</p>
      <ul class="contact-list">
        <li><a class="contact-item" href="mailto:anees.mental.health@gmail.com" aria-label="${isAr ? "أرسل بريدًا إلكترونيًا" : "Send an email"}"><div class="ic">${ico("mail")}</div><div><div class="cv" dir="ltr">hello@anees.eg</div><div style="font-size:.82rem;color:var(--text-muted);">${isAr ? "للرد خلال 24 ساعة" : "Reply within 24 hours"}</div></div><span class="go" aria-hidden="true">${ico("arrowL")}</span></a></li>
        <li><a class="contact-item" href="tel:+201112302971" aria-label="${isAr ? "اتصل بنا" : "Call us"}"><div class="ic">${ico("phone")}</div><div><div class="cv" dir="ltr">+20 100 000 0000</div><div style="font-size:.82rem;color:var(--text-muted);">${isAr ? "من 9ص لـ 6م" : "9 AM – 6 PM"}</div></div><span class="go" aria-hidden="true">${ico("arrowL")}</span></a></li>
        <li><a class="contact-item" href="https://facebook.com/anees.eg" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><div class="ic">${ico("facebook")}</div><div><div class="cv" dir="ltr">facebook.com/anees.eg</div></div><span class="go" aria-hidden="true">${ico("arrowL")}</span></a></li>
        <li><a class="contact-item" href="https://linkedin.com/company/anees" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><div class="ic">${ico("linkedin")}</div><div><div class="cv" dir="ltr">linkedin.com/company/anees</div></div><span class="go" aria-hidden="true">${ico("arrowL")}</span></a></li>
      </ul>
    </div>
    <form class="form-card reveal" onsubmit="submitContact(event)" novalidate>
      <div class="form-group" id="fg-name">
        <label for="cName">${isAr ? "الاسم بالكامل" : "Full name"}</label>
        <input id="cName" type="text" placeholder="${isAr ? "محمد أحمد" : "Mohamed Ahmed"}" />
        <div class="form-error">${ico("alert")} ${isAr ? "من فضلك اكتب اسمك (٣ أحرف على الأقل)" : "Please enter your name (at least 3 characters)"}</div>
      </div>
      <div class="form-group" id="fg-email">
        <label for="cEmail">${isAr ? "البريد الإلكتروني" : "Email"}</label>
        <input id="cEmail" type="email" placeholder="you@example.com" />
        <div class="form-error">${ico("alert")} ${isAr ? "من فضلك اكتب بريد إلكتروني صحيح" : "Please enter a valid email"}</div>
      </div>
      <div class="form-group" id="fg-msg">
        <label for="cMsg">${isAr ? "الاستفسار أو الشكوى" : "Message"}</label>
        <textarea id="cMsg" placeholder="${isAr ? "اكتب تفاصيل استفسارك هنا..." : "Write your message here..."}"></textarea>
        <div class="form-error">${ico("alert")} ${isAr ? "الرسالة قصيرة جدًا، اكتب ١٠ أحرف على الأقل" : "Message is too short (min 10 characters)"}</div>
      </div>
      <button class="btn btn-primary btn-lg btn-block" type="submit">${isAr ? "إرسال الرسالة" : "Send message"}</button>
    </form>
  </div>
</section>`;
}

/* ============================================================
   OTHER PAGES (Blog, Testimonials, Pricing, About, Contact)
   ============================================================ */

function renderPrivacy() {
  const isAr = state.lang === "ar";
  return `
<section class="section legal-page"><div class="container">
  <div class="section-head">
    <div class="eyebrow">${isAr ? "قانوني" : "Legal"}</div>
    <h1 class="h2">${isAr ? "سياسة الخصوصية" : "Privacy Policy"}</h1>
    <p class="lead">${isAr ? "كيف نحمي بياناتك وبيانات طلابك داخل أنيس." : "How we protect your data and your students' data inside Anees."}</p>
  </div>
  <div class="legal-card">
    <h3>${isAr ? "من نحن وماذا نفعل" : "Who we are"}</h3>
    <p>${
      isAr
        ? "أنيس منصة تساعد المدرسين وأولياء الأمور على متابعة الصحة العامة والسلوك اليومي للأطفال والمراهقين (النوم، المزاج، العلاقات، التركيز، التوتر). التقييم يعتمد على ملاحظات الوالدين أو المعلمين للتعرّف المبكر على ما قد يحتاج متابعة أو إحالة لمتخصص."
        : "Anees helps teachers and parents track children's and teens' daily wellbeing and behavior (sleep, mood, relationships, focus, stress). Assessments rely on parent or teacher observations to flag early needs for follow-up or specialist referral."
    }</p>
    <h3>${isAr ? "ما البيانات التي نجمعها" : "What data we collect"}</h3>
    <p>${
      isAr
        ? "بيانات الحساب (الاسم، البريد، التخصص، الخبرة)، بيانات الفصول والطلاب اللازمة للمتابعة، إجابات التقييمات والملاحظات، وبيانات التواصل مع ولي الأمر عند إضافتها. لا نطلب منك مشاركة معلومات غير ضرورية."
        : "Account details (name, email, specialty, experience), class and student data needed for follow-up, assessment answers and notes, and parent contact details when provided. We do not ask for unnecessary information."
    }</p>
    <h3>${isAr ? "كيف نستخدم البيانات" : "How we use data"}</h3>
    <p>${
      isAr
        ? "للتشغيل اليومي للمنصة: حفظ التقييمات، عرض اللوحات والتقارير، إرسال تنبيهات أو تقارير لأولياء الأمور عند طلبك، وتحسين التجربة. النتائج مساعدة للمتابعة وليست تشخيصًا طبيًا أو نفسيًا نهائيًا."
        : "To run the product: save assessments, show dashboards and reports, send parent alerts when you request them, and improve the experience. Results support follow-up and are not a final medical or psychological diagnosis."
    }</p>
    <h3>${isAr ? "من يصل إلى البيانات" : "Who can access data"}</h3>
    <p>${
      isAr
        ? "الوصول مقصور على الأشخاص المخوّلين (مثل المدرس المرتبط بالطالب). لا نبيع بياناتك. أي استخدام بحثي يتم فقط بموافقة واضحة ومستقلة عند الحاجة."
        : "Access is limited to authorized people (such as the teacher linked to the student). We do not sell your data. Research use only happens with clear, separate consent when required."
    }</p>
    <h3>${isAr ? "الاستثناءات" : "Exceptions"}</h3>
    <p>${
      isAr
        ? "قد تُكشف معلومات عند وجود خطر جدي على الطفل أو بموجب التزام قانوني، وفق القوانين المعمول بها."
        : "Information may be disclosed when there is a serious risk to a child or when required by law."
    }</p>
    <h3>${isAr ? "حقوقك" : "Your rights"}</h3>
    <p>${
      isAr
        ? "يمكنك طلب تصحيح بياناتك، أو حذف الحساب والبيانات المرتبطة به ضمن الحدود التقنية والقانونية. للمزيد تواصل معنا من صفحة الاتصال."
        : "You may request corrections or account deletion within technical and legal limits. Contact us via the contact page for help."
    }</p>
    <p class="legal-note">${isAr ? "آخر تحديث: أكتوبر 2026" : "Last updated: October 2026"}</p>
  </div>
</div></section>`;
}

function renderTerms() {
  const isAr = state.lang === "ar";
  return `
<section class="section legal-page"><div class="container">
  <div class="section-head">
    <div class="eyebrow">${isAr ? "قانوني" : "Legal"}</div>
    <h1 class="h2">${isAr ? "الشروط والأحكام" : "Terms & Conditions"}</h1>
    <p class="lead">${isAr ? "قواعد واضحة لاستخدام أنيس بأمان ومسؤولية." : "Clear rules for using Anees safely and responsibly."}</p>
  </div>
  <div class="legal-card">
    <h3>${isAr ? "طبيعة الخدمة" : "Nature of the service"}</h3>
    <p>${
      isAr
        ? "أنيس أداة مساعدة للتقييم والمتابعة السلوكية والنفسية الأولية في البيئة التعليمية والمنزلية. المنصة ليست بديلاً عن الرعاية الطبية أو النفسية المباشرة، وليست خدمة طوارئ."
        : "Anees is a support tool for initial behavioral and wellbeing assessment in school and home settings. It is not a substitute for direct medical or psychological care, and it is not an emergency service."
    }</p>
    <h3>${isAr ? "المشاركة طوعية" : "Participation is voluntary"}</h3>
    <p>${
      isAr
        ? "يمكنك التوقف عن استخدام المنصة أو الانسحاب من مشاركة معينة وفق سياسات الحساب، دون تأثير على حق الطفل في الحصول على الرعاية المناسبة خارج المنصة."
        : "You may stop using the platform or withdraw from a given participation under account policies, without affecting the child's right to appropriate care outside the platform."
    }</p>
    <h3>${isAr ? "مسؤولياتك" : "Your responsibilities"}</h3>
    <p>${
      isAr
        ? "تقديم معلومات دقيقة بقدر الإمكان، واستخدام المنصة فقط للأغراض التعليمية والتربوية المشروعة، واحترام خصوصية الطلاب والأسر. المعلمون يقدّمون ملاحظات مرتبطة بالبيئة التعليمية وفق سياسات مؤسستهم."
        : "Provide accurate information as far as possible, use the platform only for legitimate educational purposes, and respect student and family privacy. Teachers share observations tied to the school setting under their institution's policies."
    }</p>
    <h3>${isAr ? "حدود النتائج" : "Limits of results"}</h3>
    <p>${
      isAr
        ? "نتائج التقييم تساعد في المتابعة وتحديد الاحتياجات المحتملة. لا تُستخدم وحدها كتشخيص نهائي أو كأساس لقرارات عقابية أو تعليمية جوهرية بحق الطفل."
        : "Assessment results help with follow-up and identifying potential needs. They alone are not a final diagnosis or a basis for punitive or major educational decisions about a child."
    }</p>
    <h3>${isAr ? "عند ظهور مؤشرات مقلقة" : "When concerning signals appear"}</h3>
    <p>${
      isAr
        ? "قد نوجّهك إلى طلب دعم من جهة صحية أو نفسية متخصصة. المنصة لا تضمن تشخيصًا أو علاجًا أو تحسنًا محددًا."
        : "We may guide you to seek support from a qualified health or mental-health professional. The platform does not guarantee a diagnosis, treatment, or specific improvement."
    }</p>
    <h3>${isAr ? "الحساب والاستخدام المقبول" : "Accounts & acceptable use"}</h3>
    <p>${
      isAr
        ? "أنت مسؤول عن حماية بيانات الدخول. يُمنع إساءة استخدام المنصة أو محاولة الوصول غير المصرح به أو إدخال بيانات مضللة بشكل متعمد."
        : "You are responsible for protecting login credentials. Misuse, unauthorized access attempts, or deliberately misleading data are not allowed."
    }</p>
    <p class="legal-note">${isAr ? "باستخدامك أنيس فأنت توافق على هذه الشروط وسياسة الخصوصية." : "By using Anees you agree to these terms and the privacy policy."}</p>
  </div>
</div></section>`;
}

function renderBlog() {
  const isAr = state.lang === "ar";
  return `
<section class="page-head"><div class="container">
  <div class="eyebrow">${isAr ? "تعلم معنا" : "Learn with us"}</div>
  <h1 class="h1">${isAr ? "مقالات إرشادية موثوقة" : "Trusted guidance articles"}</h1>
  <p>${isAr ? "محتوى عربي مبسط عن الصحة النفسية للطلاب، التربية، والسلوك." : "Simple content about student mental health, parenting and behavior."}</p>
</div></section>
<section class="section"><div class="container">
  <div class="blog-grid" id="blogArticlesGrid" aria-live="polite">
    <div class="articles-state"><span class="spinner" role="status"></span><p>${isAr ? "جاري تحميل المقالات..." : "Loading articles..."}</p></div>
  </div>
</div></section>`;
}

let articleRealtimeChannel = null;
let articleLoadSequence = 0;

function articleExcerpt(content, max = 220) {
  const text = String(content || "").replace(/\s+/g, " ").trim();
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const boundary = cut.lastIndexOf(" ");
  return cut.slice(0, boundary > max * 0.65 ? boundary : max).trimEnd() + "…";
}

function sanitizeArticleHtml(input) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(String(input || ""), "text/html");
  const allowed = new Set(["P","BR","HR","H1","H2","H3","H4","H5","H6","STRONG","B","EM","I","U","S","UL","OL","LI","BLOCKQUOTE","TABLE","THEAD","TBODY","TFOOT","TR","TH","TD","CAPTION","FIGURE","FIGCAPTION","IMG","A","DIV","SPAN"]);
  const clean = (node) => {
    for (const child of [...node.childNodes]) {
      if (child.nodeType === Node.COMMENT_NODE) { child.remove(); continue; }
      if (child.nodeType !== Node.ELEMENT_NODE) continue;
      if (!allowed.has(child.tagName)) { child.replaceWith(...child.childNodes); continue; }
      for (const attr of [...child.attributes]) {
        const name = attr.name.toLowerCase();
        if (child.tagName === "A" && name === "href") {
          try { const u = new URL(attr.value, location.href); if (!['https:','http:','mailto:'].includes(u.protocol)) child.removeAttribute(attr.name); else { child.href = u.href; child.rel = "noopener noreferrer"; } } catch { child.removeAttribute(attr.name); }
        } else if (child.tagName === "IMG" && name === "src") {
          try { const u = new URL(attr.value, location.href); if (!['https:','http:'].includes(u.protocol)) child.removeAttribute(attr.name); else child.src = u.href; } catch { child.removeAttribute(attr.name); }
        } else if ((child.tagName === "TH" || child.tagName === "TD") && ["colspan","rowspan"].includes(name) && /^\d{1,2}$/.test(attr.value)) {
          // Keep simple table spans only.
        } else if (child.tagName === "IMG" && ["alt","width","height"].includes(name) && /^[a-z0-9 _.-]{0,300}$/i.test(attr.value)) {
          // Keep safe image metadata only.
        } else child.removeAttribute(attr.name);
      }
      clean(child);
    }
  };
  clean(doc.body);
  return doc.body.innerHTML;
}
function articleParagraphs(content, contentHtml = "") {
  if (String(contentHtml || "").trim()) return sanitizeArticleHtml(contentHtml);
  return String(content || "").replace(/\r/g, "").split(/\n\s*\n/).map((paragraph) => paragraph.trim()).filter(Boolean).map((paragraph) => `<p>${esc(paragraph).replace(/\n/g, "<br>")}</p>`).join("");
}
function articleFilePreview(article, isAr) {
  // Source files are ingestion inputs only; the site renders extracted content.
  return "";
}

function renderArticleDetail(articleId) {
  const isAr = state.lang === "ar";
  return `<section class="page-head"><div class="container"><a class="article-back" href="#/blog" data-link>← ${isAr ? "العودة للمقالات" : "Back to articles"}</a></div></section>
<section class="section"><div class="container"><article class="article-detail" id="articleDetail" aria-live="polite"><div class="articles-state"><span class="spinner" role="status"></span><p>${isAr ? "جاري تحميل المقال..." : "Loading article..."}</p></div></article></div></section>`;
}

async function loadBlogArticles() {
  const grid = $("#blogArticlesGrid");
  if (!grid || state.route !== "#/blog") return;
  const seq = ++articleLoadSequence;
  const isAr = state.lang === "ar";
  try {
    if (!window.AneesCloud?.fetchPublishedArticles) throw new Error("Article data service is not configured.");
    const articles = await window.AneesCloud.fetchPublishedArticles();
    if (seq !== articleLoadSequence || state.route !== "#/blog" || !$("#blogArticlesGrid")) return;
    if (!articles.length) {
      grid.innerHTML = `<div class="articles-state articles-empty"><div class="articles-empty-icon">${ico("book")}</div><h2>${isAr ? "لسه مفيش مقالات" : "No articles yet"}</h2><p>${isAr ? "المقالات الجديدة هتظهر هنا تلقائيًا بعد إضافتها إلى مجلد أنيس على Google Drive." : "New articles will appear here automatically after they are added to the Anees Google Drive folder."}</p></div>`;
      return;
    }
    grid.innerHTML = articles.map((a) => {
      const title = esc(a.title || (isAr ? "مقال بدون عنوان" : "Untitled article"));
      const excerpt = esc(a.excerpt || articleExcerpt(a.content) || (isAr ? "اقرأ المحتوى الإرشادي داخل الموقع." : "Read the guidance content directly on the site."));
      const href = `#/article/${encodeURIComponent(a.drive_file_id)}`;
      return `<article class="article-card article-card-text-only reveal"><div class="article-body"><h2>${title}</h2><p>${excerpt}</p><a class="btn btn-primary article-read-button" href="${href}" data-link>${isAr ? "اقرأ المقال" : "Read article"} ${ico("arrowL")}</a></div></article>`;
    }).join("");
    setupReveal();
  } catch (error) {
    console.error("[Anees articles load]", error);
    if (seq !== articleLoadSequence || state.route !== "#/blog" || !$("#blogArticlesGrid")) return;
    grid.innerHTML = `<div class="articles-state articles-error"><h2>${isAr ? "تعذر تحميل المقالات" : "Unable to load articles"}</h2><p>${isAr ? "محتوى المقالات محفوظ، لكن تعذر الاتصال الآن. حاول تحديث الصفحة بعد قليل." : "Article content is preserved, but the service is temporarily unavailable. Please try again shortly."}</p><button class="btn btn-ghost" type="button" onclick="loadBlogArticles()">${isAr ? "إعادة المحاولة" : "Try again"}</button></div>`;
  }
}

async function loadBlogArticleDetail(articleId) {
  const container = $("#articleDetail");
  if (!container || !articleId || !state.route.startsWith("#/article/")) return;
  const routeAtStart = state.route;
  const isAr = state.lang === "ar";
  try {
    if (!window.AneesCloud?.fetchPublishedArticle) throw new Error("Article data service is not configured.");
    const article = await window.AneesCloud.fetchPublishedArticle(articleId);
    if (state.route !== routeAtStart || !$("#articleDetail")) return;
    if (!article) {
      container.innerHTML = `<div class="articles-state articles-empty"><h2>${isAr ? "المقال غير متاح" : "Article not found"}</h2><p>${isAr ? "قد يكون المقال حُذف من Google Drive أو لم يعد منشورًا." : "This article may have been deleted from Google Drive or is no longer published."}</p><a class="btn btn-primary" href="#/blog" data-link>${isAr ? "العودة للمقالات" : "Back to articles"}</a></div>`;
      return;
    }
    document.title = `${article.title} | Anees`;
    const richBody = article.content_html ? articleParagraphs(article.content, article.content_html) : articleParagraphs(article.content);
    const filePreview = articleFilePreview(article, isAr);
    container.innerHTML = `<header class="article-detail-head"><h1>${esc(article.title)}</h1><p class="article-detail-updated">${isAr ? "آخر تحديث" : "Last updated"}: ${article.modified_time ? new Date(article.modified_time).toLocaleDateString(isAr ? "ar-EG" : "en-GB") : "—"}</p></header>${richBody ? `<div class="article-detail-content">${richBody}</div>` : ""}${filePreview}<footer class="article-detail-footer"><a class="btn btn-ghost" href="#/blog" data-link>← ${isAr ? "كل المقالات" : "All articles"}</a></footer>`;
  } catch (error) {
    console.error("[Anees article detail]", error);
    if (state.route !== routeAtStart || !$("#articleDetail")) return;
    container.innerHTML = `<div class="articles-state articles-error"><h2>${isAr ? "تعذر تحميل المقال" : "Unable to load article"}</h2><p>${isAr ? "حاول مرة أخرى بعد قليل." : "Please try again shortly."}</p><button class="btn btn-ghost" type="button" onclick="loadBlogArticleDetail('${esc(articleId)}')">${isAr ? "إعادة المحاولة" : "Try again"}</button></div>`;
  }
}

function ensureArticleRealtime() {
  if (articleRealtimeChannel || !window.AneesCloud?.subscribeToArticles) return;
  articleRealtimeChannel = window.AneesCloud.subscribeToArticles(() => {
    if (state.route === "#/blog") loadBlogArticles();
    else if (state.route.startsWith("#/article/")) {
      const id = state.route.slice("#/article/".length);
      try { loadBlogArticleDetail(decodeURIComponent(id)); } catch {}
    }
  });
}

function renderTestimonials() {
  const isAr = state.lang === "ar";
  const items = isAr
    ? [
        {
          n: "أ. هدى عبد الله",
          r: "مدرسة لغة عربية - القاهرة",
          q: "أنيس غيّر طريقة تعاملي مع طلابي تمامًا. بقيت أعرف مين محتاج دعم من غير ما أسأل.",
        },
        {
          n: "م. خالد سعيد",
          r: "ولي أمر - الإسكندرية",
          q: "أول مرة أعرف إن ابني بيمر بفترة صعبة. التقرير الأسبوعي كان بداية لحل مشكلة كنت غافل عنها.",
        },
        {
          n: "د. ريم الشرقاوي",
          r: "مرشدة طلابية - مدرسة دولية",
          q: "استخدمنا أنيس مع 12 فصل. لوحة التحكم سهلة، والتقارير بتوصل لأولياء الأمور بشكل احترافي.",
        },
        {
          n: "أ. مصطفى كمال",
          r: "مدرس رياضيات - الجيزة",
          q: "التقييمات بتساعدني أفهم سلوك الطالب قبل ما يتحول لمشكلة كبيرة. بقيت ألاحظ الفرق.",
        },
        {
          n: "م. نهى إبراهيم",
          r: "ولية أمر - المنصورة",
          q: "ابنتي بقت بتتكلم معايا أكتر بعد ما بدأنا نتابع تقارير أنيس. حاسة إن البيت بقى أهدى.",
        },
        {
          n: "أ. أحمد فتحي",
          r: "مدير مدرسة - أسوان",
          q: "كنا بندور على حل يتابع نفسية الطلاب بدون ما نضغط على المدرسين. أنيس كان الحل المناسب.",
        },
      ]
    : [
        {
          n: "Mrs. Hoda Abdallah",
          r: "Arabic teacher – Cairo",
          q: "Anees completely changed how I deal with my students. I now know who needs support without asking.",
        },
        {
          n: "Mr. Khaled Said",
          r: "Parent – Alexandria",
          q: "For the first time I realized my son was going through a hard time. The weekly report started the solution.",
        },
        {
          n: "Dr. Reem El-Sharkawy",
          r: "Student counselor – International school",
          q: "We used Anees with 12 classes. The dashboard is easy and reports reach parents professionally.",
        },
        {
          n: "Mr. Mostafa Kamal",
          r: "Math teacher – Giza",
          q: "The assessments help me understand behavior before it becomes a big problem.",
        },
        {
          n: "Mrs. Noha Ibrahim",
          r: "Parent – Mansoura",
          q: "My daughter talks to me more after we started following Anees reports. The house feels calmer.",
        },
        {
          n: "Mr. Ahmed Fathy",
          r: "School principal – Aswan",
          q: "We needed a solution that tracks student mental health without overloading teachers. Anees was the answer.",
        },
      ];
  return `
<section class="page-head"><div class="container">
  <div class="eyebrow">${isAr ? "قالوا عنا" : "Testimonials"}</div>
  <h1 class="h1">${isAr ? "آراء حقيقية من مدرسين وأولياء أمور" : "Real voices from teachers and parents"}</h1>
  <p>${isAr ? "أكتر من 180 مدرس وألفي ولي أمر بيستخدموا أنيس كل يوم." : "More than 180 teachers and 2000 parents use Anees every day."}</p>
</div></section>
<section class="section"><div class="container"><div class="grid grid-3-fixed">
${items
  .map(
    (t) => `
  <div class="testimonial reveal">
    <div class="quote">${t.q}</div>
    <div class="person">
      <div class="avatar">${initials(t.n)}</div>
      <div><b>${t.n}</b><span>${t.r}</span></div>
    </div>
  </div>`,
  )
  .join("")}
</div></div></section>`;
}

function renderPricing() {
  const isAr = state.lang === "ar";
  const plans = [
    {
      name: isAr ? "الأساسية" : "Basic",
      desc: isAr
        ? "ابدأ رحلتك مع أنيس بدون أي تكلفة."
        : "Start your journey with Anees at no cost.",
      price: "0",
      per: isAr ? "مجانًا للأبد" : "Free forever",
      cta: isAr ? "ابدأ الآن" : "Start now",
      ctaStyle: "btn-ghost",
      features: [
        { t: isAr ? "فصل واحد" : "1 class", ok: true },
        { t: isAr ? "حتى 10 طلاب" : "Up to 10 students", ok: true },
        {
          t: isAr ? "تقييم سلوكي أساسي" : "Basic behavior assessment",
          ok: true,
        },
        {
          t: isAr ? "تقارير أسبوعية لولي الأمر" : "Weekly parent reports",
          ok: true,
        },
        {
          t: isAr ? "تقارير تحليلية تلقائية" : "Automated analytical reports",
          ok: false,
        },
        { t: isAr ? "دعم فني مخصص" : "Dedicated support", ok: false },
      ],
    },
    {
      name: isAr ? "المدرس المحترف" : "Pro Teacher",
      desc: isAr
        ? "الأنسب للمدرسين اللي بيتعاملوا مع فصول متعددة."
        : "Best for teachers with multiple classes.",
      price: "199",
      per: isAr ? "ج.م / شهريًا" : "EGP / month",
      cta: isAr ? "اشترك الآن" : "Subscribe",
      ctaStyle: "btn-primary",
      featured: true,
      features: [
        { t: isAr ? "فصول غير محدودة" : "Unlimited classes", ok: true },
        { t: isAr ? "حتى 100 طالب" : "Up to 100 students", ok: true },
        { t: isAr ? "كل أدوات التقييم" : "All assessment tools", ok: true },
        {
          t: isAr ? "تقارير تحليلية تلقائية" : "Automated analytical reports",
          ok: true,
        },
        {
          t: isAr ? "إرسال تلقائي لأولياء الأمور" : "Auto parent emails",
          ok: true,
        },
        { t: isAr ? "دعم فني عبر الإيميل" : "Email support", ok: true },
      ],
    },
    {
      name: isAr ? "المؤسسات التعليمية" : "Institutions",
      desc: isAr
        ? "حل متكامل للمدارس والمراكز التعليمية."
        : "Complete solution for schools and centers.",
      price: isAr ? "تواصل" : "Contact",
      per: isAr ? "حسب الاحتياج" : "Custom",
      cta: isAr ? "تواصل معنا" : "Contact us",
      ctaStyle: "btn-ghost",
      features: [
        {
          t: isAr ? "طلاب وفصول غير محدودة" : "Unlimited students & classes",
          ok: true,
        },
        { t: isAr ? "لوحة تحكم للمدير" : "Admin dashboard", ok: true },
        { t: isAr ? "تقارير مؤسسية شاملة" : "Institution reports", ok: true },
        { t: isAr ? "تدريب للمدرسين" : "Teacher training", ok: true },
        { t: isAr ? "مدير حساب مخصص" : "Dedicated account manager", ok: true },
        {
          t: isAr ? "تكامل API مع أنظمة المدرسة" : "API integration",
          ok: true,
        },
      ],
    },
  ];
  return `
<section class="page-head"><div class="container">
  <div class="eyebrow">${isAr ? "التسعير" : "Pricing"}</div>
  <h1 class="h1">${isAr ? "باقات تناسب كل احتياج" : "Plans that fit every need"}</h1>
  <p>${isAr ? "ابدأ مجانًا وطوّر باقتك لما تحتاج. بدون عقود، وبدون أي رسوم خفية." : "Start free and upgrade when you need. No contracts, no hidden fees."}</p>
</div></section>
<section class="section"><div class="container"><div class="pricing-grid">
${plans
  .map(
    (p) => `
  <div class="price-card reveal ${p.featured ? "featured" : ""}">
    ${p.featured ? `<span class="plan-badge">${isAr ? "الأكثر شعبية" : "Most popular"}</span>` : ""}
    <div class="plan-name">${p.name}</div>
    <div class="plan-desc">${p.desc}</div>
    <div class="price"><span class="amount">${p.price}</span><span class="per">${p.per}</span></div>
    <ul class="price-features">
      ${p.features.map((f) => `<li class="${f.ok ? "" : "dim"}"><span class="check">${f.ok ? ico("check") : ico("x")}</span><span>${f.t}</span></li>`).join("")}
    </ul>
    <button class="btn ${p.ctaStyle} btn-block btn-lg" onclick="pricingCTA('${p.name}')">${p.cta}</button>
  </div>`,
  )
  .join("")}
</div></div></section>`;
}

function pricingCTA(plan) {
  if (plan.includes("مؤسسات") || plan.includes("Institutions"))
    location.hash = "#/contact";
  else if (plan.includes("أساسية") || plan.includes("Basic"))
    openAuth("signup");
  else if (state.user) {
    if (state.user.plan === "pro")
      toast(
        state.lang === "ar"
          ? "أنت بالفعل على باقة Pro"
          : "You're already on Pro",
        "info",
      );
    else if (typeof openUpgradeCheckout === "function") openUpgradeCheckout();
    else location.hash = "#/dashboard";
  } else openAuth("signup");
}

function renderAbout() {
  const isAr = state.lang === "ar";
  const team = [
    {
      n: isAr ? "وفاء عثمان" : "Wafaa Othman",
      r: isAr
        ? "أستاذ ورئيس قسم الصحة النفسية بجامعة العاصمة حلوان سابقًا"
        : "Former Professor & Head of Mental Health Dept., Helwan University",
      b: isAr
        ? "خبرة أكاديمية ومهنية عميقة في الصحة النفسية التربوية، وإشراف على برامج الدعم النفسي داخل المؤسسات التعليمية."
        : "Deep academic and professional experience in educational mental health and supervision of school support programs.",
    },
    {
      n: isAr ? "كريمة محمود" : "Karima Mahmoud",
      r: isAr
        ? "مطور تعليمي وكاتب محتوى في سلاح التلميذ"
        : "Educational Developer & Content Writer at Selah El-Telmeez",
      b: isAr
        ? "متخصصة في تطوير المحتوى التعليمي والإرشادي بأسلوب بسيط يصل لكل ولي أمر ومدرس."
        : "Specialized in developing educational and guidance content in a simple style that reaches every parent and teacher.",
    },
    {
      n: isAr ? "محمد حاتم" : "Mohamed Hatem",
      r: isAr
        ? "أخصائي تكنولوجيا التعليم ومبرمج ومحاضر بمعاهد iTi بوزارة الاتصالات"
        : "EdTech Specialist, Programmer & Lecturer at ITI, MCIT",
      b: isAr
        ? "يجمع بين الخبرة التقنية والتعليمية، ويشرف على بناء الأنظمة الذكية اللي بتخدم المدرس والطالب."
        : "Combines technical and educational expertise, leading the development of smart systems that serve teachers and students.",
    },
    {
      n: isAr ? "آلاء بركات" : "Alaa Barakat",
      r: isAr ? "مدرسة رياضيات" : "Mathematics Teacher",
      b: isAr
        ? "خبرة ميدانية يومية داخل الفصول، بتفهم احتياجات المدرس والطالب من أرض الواقع."
        : "Daily classroom experience that deeply understands the real needs of teachers and students.",
    },
    {
      n: isAr ? "ميادة حاتم" : "Mayada Hatem",
      r: isAr
        ? "محاضر لغة إنجليزية ومتخصص IT"
        : "English Lecturer & IT Specialist",
      b: isAr
        ? "تجمع بين مهارات التواصل والتعليم التقني، وبتساهم في تجربة المستخدم والمحتوى ثنائي اللغة."
        : "Combines communication skills and technical education, contributing to UX and bilingual content.",
    },
    {
      n: isAr ? "أحمد مصطفى" : "Ahmed Mostafa",
      r: isAr
        ? "متخصص في العلاقات العامة والموارد البشرية"
        : "PR & Human Resources Specialist",
      b: isAr
        ? "يبني جسور التواصل بين المنصة والمجتمع التعليمي، ويدعم نمو الفريق والشراكات."
        : "Builds bridges between the platform and the education community, supporting team growth and partnerships.",
    },
  ];

  return `
<section class="page-head"><div class="container">
  <div class="eyebrow">${isAr ? "من نحن" : "About us"}</div>
  <h1 class="h1">${isAr ? "ناس مؤمنين إن الصحة النفسية للطالب مش رفاهية" : "People who believe student mental health is not a luxury"}</h1>
  <p>${isAr ? "أنيس بناه فريق متعدد التخصصات من خبراء الصحة النفسية، التعليم، والتكنولوجيا، عشان يخلي الدعم النفسي في المدارس حقيقي وقابل للقياس." : "Anees was built by a multidisciplinary team of mental health, education and technology experts to make psychological support in schools real and measurable."}</p>
</div></section>

<section class="section"><div class="container">
  <div class="grid grid-3-fixed">
    <div class="card reveal"><div class="card-icon">${ico("target")}</div><h3>${isAr ? "رسالتنا" : "Our Mission"}</h3><p>${isAr ? "نساعد كل مدرس وولي أمر على فهم احتياجات الطالب النفسية بشكل عملي ومبني على أسس علمية." : "Help every teacher and parent understand student psychological needs in a practical, science-based way."}</p></div>
    <div class="card reveal"><div class="card-icon">${ico("eye")}</div><h3>${isAr ? "رؤيتنا" : "Our Vision"}</h3><p>${isAr ? "بيئة تعليمية مصرية كل طالب فيها بيلاقي الدعم النفسي المناسب في الوقت المناسب." : "An Egyptian learning environment where every student finds the right psychological support at the right time."}</p></div>
    <div class="card reveal"><div class="card-icon">${ico("heart")}</div><h3>${isAr ? "قيمنا" : "Our Values"}</h3><p>${isAr ? "الخصوصية، الصدق، والاحترام المطلق لبيانات كل طالب وكل أسرة داخل المنصة." : "Privacy, honesty, and absolute respect for every student's and family's data."}</p></div>
  </div>
</div></section>

<section class="section"><div class="container">
  <div class="section-head reveal">
    <div class="eyebrow">${isAr ? "الفريق" : "The Team"}</div>
    <h2 class="h2">${isAr ? "الناس اللي واقفين ورا أنيس" : "The people behind Anees"}</h2>
    <p class="lead">${isAr ? "فريق متعدد التخصصات، بيشتغل على أرض الواقع مع مدرسين وأولياء أمور." : "A multidisciplinary team working on the ground with teachers and parents."}</p>
  </div>
  <div class="team-grid">
    ${team
      .map(
        (m) => `
      <div class="team-card reveal">
        <div class="photo">${initials(m.n)}</div>
        <h3>${m.n}</h3>
        <div class="role">${m.r}</div>
        <div class="bio">${m.b}</div>
      </div>`,
      )
      .join("")}
  </div>
</div></section>

<section class="section"><div class="container">
  <div class="section-head center reveal">
    <div class="eyebrow">${isAr ? "عصارة خبرتنا" : "Our Combined Expertise"}</div>
    <h2 class="h2">${isAr ? "حطينا كل خبراتنا في مكان واحد عشانك" : "We put all our expertise in one place for you"}</h2>
  </div>
  <div class="card reveal" style="max-width:820px;margin:0 auto;text-align:center;padding:36px;">
    <p style="font-size:1.08rem;line-height:1.85;color:var(--text-muted);">
      ${
        isAr
          ? "من خبرة أكاديمية في الصحة النفسية، إلى تطوير محتوى تعليمي يلامس الواقع، إلى برمجة أنظمة ذكية، إلى فهم يومي لاحتياجات المدرس داخل الفصل، إلى مهارات التواصل والموارد البشرية… كل ده اتجمع في أنيس. مش بس منصة تقنية، دي عصارة سنين من الشغل الحقيقي مع الطلاب والمدرسين والأسر. هدفنا إن كل طالب يلاقي حد يفهمه، وكل مدرس يلاقي أداة تساعده، وكل ولي أمر يطمن على ابنه."
          : "From academic expertise in mental health, to educational content that touches reality, to building smart systems, to daily understanding of classroom needs, to communication and HR skills… all of this came together in Anees. It's not just a tech platform — it's the essence of years of real work with students, teachers and families. Our goal is that every student finds someone who understands them, every teacher finds a tool that helps, and every parent feels reassured about their child."
      }
    </p>
  </div>
</div></section>`;
}

function renderContact() {
  const isAr = state.lang === "ar";
  return `
<section class="page-head"><div class="container">
  <div class="eyebrow">${isAr ? "تواصل معنا" : "Contact"}</div>
  <h1 class="h1">${isAr ? "عندك سؤال؟ كلّمنا" : "Have a question? Talk to us"}</h1>
  <p>${isAr ? "ابعتلنا استفسارك وهنرد عليك في أقرب وقت ممكن." : "Send us your inquiry and we'll get back as soon as possible."}</p>
</div></section>
<section class="section"><div class="container contact-grid">
  <div class="reveal">
    <h2 class="h2" style="font-size:1.45rem;margin-bottom:10px;">${isAr ? "طرق التواصل المباشر" : "Direct contact"}</h2>
    <p class="lead" style="font-size:.96rem;">${isAr ? "لو حابب تتواصل معانا بشكل أسرع، استخدم أي من الطرق دي." : "Prefer a faster channel? Use any of these."}</p>
    <ul class="contact-list">
      <li><a class="contact-item" href="https://t.me/AneesMentalHealth_bot" target="_blank" rel="noopener noreferrer" aria-label="Telegram Anees Mental Health Bot"><div class="ic">${ico("send")}</div><div><div class="cv" dir="ltr">t.me/AneesMentalHealth_bot</div><div style="font-size:.82rem;color:var(--text-muted);">${isAr ? "تواصل معنا عبر تيليجرام" : "Contact us on Telegram"}</div></div><span class="go" aria-hidden="true">${ico("arrowL")}</span></a></li>
      <li><a class="contact-item" href="mailto:anees.mental.health@gmail.com" aria-label="${isAr ? "أرسل بريدًا إلكترونيًا" : "Send an email"}"><div class="ic">${ico("mail")}</div><div><div class="cv" dir="ltr">hello@anees.eg</div><div style="font-size:.82rem;color:var(--text-muted);">${isAr ? "للرد خلال 24 ساعة" : "Reply within 24h"}</div></div><span class="go" aria-hidden="true">${ico("arrowL")}</span></a></li>
      <li><a class="contact-item" href="tel:+201112302971" aria-label="${isAr ? "اتصل بنا" : "Call us"}"><div class="ic">${ico("phone")}</div><div><div class="cv" dir="ltr">+20 100 000 0000</div><div style="font-size:.82rem;color:var(--text-muted);">${isAr ? "من 9ص لـ 6م" : "9 AM – 6 PM"}</div></div><span class="go" aria-hidden="true">${ico("arrowL")}</span></a></li>
      <li><a class="contact-item" href="https://facebook.com/anees.eg" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><div class="ic">${ico("facebook")}</div><div><div class="cv" dir="ltr">facebook.com/anees.eg</div></div><span class="go" aria-hidden="true">${ico("arrowL")}</span></a></li>
      <li><a class="contact-item" href="https://linkedin.com/company/anees" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><div class="ic">${ico("linkedin")}</div><div><div class="cv" dir="ltr">linkedin.com/company/anees</div></div><span class="go" aria-hidden="true">${ico("arrowL")}</span></a></li>
    </ul>
  </div>
  <form class="form-card reveal" onsubmit="submitContact(event)" novalidate>
    <div class="form-group" id="fg-name2">
      <label for="cName2">${isAr ? "الاسم بالكامل" : "Full name"}</label>
      <input id="cName2" type="text" placeholder="${isAr ? "محمد أحمد" : "Mohamed Ahmed"}" />
      <div class="form-error">${ico("alert")} ${isAr ? "من فضلك اكتب اسمك" : "Please enter your name"}</div>
    </div>
    <div class="form-group" id="fg-email2">
      <label for="cEmail2">${isAr ? "البريد الإلكتروني" : "Email"}</label>
      <input id="cEmail2" type="email" placeholder="you@example.com" />
      <div class="form-error">${ico("alert")} ${isAr ? "بريد إلكتروني غير صحيح" : "Invalid email"}</div>
    </div>
    <div class="form-group" id="fg-msg2">
      <label for="cMsg2">${isAr ? "الاستفسار" : "Message"}</label>
      <textarea id="cMsg2" placeholder="${isAr ? "اكتب استفسارك..." : "Write your message..."}"></textarea>
      <div class="form-error">${ico("alert")} ${isAr ? "الرسالة قصيرة جدًا" : "Message too short"}</div>
    </div>
    <button class="btn btn-primary btn-lg btn-block" type="submit">${isAr ? "إرسال" : "Send"}</button>
  </form>
</div></section>`;
}

function bindPageEvents() {
  $$("[data-link]").forEach((a) => {
    a.onclick = (e) => {
      const href = a.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        location.hash = href;
        closeMobile();
      }
    };
  });
  $$(".faq-q").forEach((btn) => {
    btn.onclick = () => {
      const item = btn.closest(".faq-item");
      const open = item.classList.contains("open");
      item.parentElement
        .querySelectorAll(".faq-item")
        .forEach((i) => i.classList.remove("open"));
      if (!open) item.classList.add("open");
    };
  });
}

let revealObs;
function setupReveal() {
  if (revealObs) revealObs.disconnect();
  revealObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          revealObs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.06, rootMargin: "0px 0px -30px 0px" },
  );
  $$(".reveal").forEach((el) => revealObs.observe(el));
}

/* ============================================================
   AUTH (تسجيل كامل)
   ============================================================ */
function openAuth(mode = "login") {
  const map = {
    login: "#/login",
    signup: "#/signup",
    forgot: "#/forgot",
    "reset-code": "#/reset-code",
    "reset-password": "#/reset-password",
  };
  if (mode === "signup") {
    state.signupStep = 1;
    state.signupDraft = {};
    pendingAvatarData = null;
  }
  location.hash = map[mode] || "#/login";
}
let pendingAvatarData = null;
function closeAuth() {
  const m = $("#authModal");
  if (m) m.classList.remove("open");
  pendingAvatarData = null;
}
function previewAvatar(e) {
  const file = e.target.files && e.target.files[0];
  if (!file) return;
  if (!file.type.startsWith("image/")) {
    toast(
      state.lang === "ar" ? "اختار ملف صورة" : "Please choose an image file",
      "error",
    );
    return;
  }
  if (file.size > 2 * 1024 * 1024) {
    toast(
      state.lang === "ar" ? "الصورة أكبر من ٢ ميجا" : "Image must be under 2MB",
      "warn",
    );
    return;
  }
  const reader = new FileReader();
  reader.onload = () => {
    pendingAvatarData = reader.result;
    const prev = $("#avatarPreview");
    if (prev) prev.innerHTML = `<img src="${reader.result}" alt="" />`;
  };
  reader.readAsDataURL(file);
}
const authOverlay = $("#authModal");
if (authOverlay) {
  authOverlay.addEventListener("click", (e) => {
    if (e.target.id === "authModal") closeAuth();
  });
}

function authVisualPanel() {
  const isAr = state.lang === "ar";
  return `
    <div class="auth-visual" aria-hidden="true">
      <div class="av-glow"></div>
      <div class="av-content">
        <div class="av-badge">${ico("heart")} ${isAr ? "صحة نفسية للطلاب" : "Student mental wellbeing"}</div>
        <h2>${isAr ? "خلي بالك من صحة طلابك النفسية" : "Care for your students' mental health"}</h2>
        <p>${isAr ? "أنيس يساعدك تلاحظ، تقيّم، وتتابع سلوك الطالب بتقارير بسيطة تصل لولي الأمر في وقتها." : "Anees helps you notice, assess, and follow student behavior with simple reports that reach parents on time."}</p>
        <div class="av-art">
          <svg viewBox="0 0 360 280" fill="none" xmlns="http://www.w3.org/2000/svg" class="av-svg">
            <defs>
              <linearGradient id="avG1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="#7ba3b5"/>
                <stop offset="100%" stop-color="#e09a8c"/>
              </linearGradient>
              <linearGradient id="avG2" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0%" stop-color="#5a9a9c"/>
                <stop offset="100%" stop-color="#7ba3b5"/>
              </linearGradient>
            </defs>
            <ellipse cx="180" cy="240" rx="120" ry="18" fill="rgba(255,255,255,0.12)"/>
            <rect x="70" y="70" width="220" height="150" rx="24" fill="rgba(255,255,255,0.14)" stroke="rgba(255,255,255,0.25)"/>
            <circle cx="120" cy="130" r="28" fill="url(#avG1)" opacity="0.9"/>
            <path d="M108 130c0-8 6-14 12-14s12 6 12 14-6 18-12 22c-6-4-12-14-12-22z" fill="#fff" opacity="0.95"/>
            <rect x="168" y="108" width="90" height="10" rx="5" fill="rgba(255,255,255,0.55)"/>
            <rect x="168" y="128" width="70" height="10" rx="5" fill="rgba(255,255,255,0.35)"/>
            <rect x="168" y="148" width="80" height="10" rx="5" fill="rgba(255,255,255,0.35)"/>
            <path d="M100 190c30-20 60-20 90 0 30 20 60 20 90 0" stroke="url(#avG2)" stroke-width="4" stroke-linecap="round" opacity="0.8"/>
            <circle cx="280" cy="90" r="18" fill="url(#avG2)" opacity="0.85"/>
            <path d="M274 90h12M280 84v12" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>
            <circle cx="95" cy="95" r="8" fill="rgba(255,255,255,0.35)"/>
            <circle cx="300" cy="180" r="12" fill="rgba(255,255,255,0.2)"/>
          </svg>
        </div>
        <div class="av-stats">
          <div><b>+2,400</b><span>${isAr ? "طالب" : "Students"}</span></div>
          <div><b>96%</b><span>${isAr ? "رضا" : "Satisfaction"}</span></div>
          <div><b>+180</b><span>${isAr ? "مدرس" : "Teachers"}</span></div>
        </div>
      </div>
    </div>`;
}
function authShell(formInner) {
  return `
<section class="auth-page">
  ${authVisualPanel()}
  <div class="auth-card">${formInner}</div>
</section>`;
}
function googleAuthBtn(mode) {
  const isAr = state.lang === "ar";
  const label =
    mode === "signup"
      ? isAr
        ? "التسجيل عبر Google"
        : "Sign up with Google"
      : isAr
        ? "الدخول عبر Google"
        : "Log in with Google";
  return `
    <button type="button" class="btn btn-google btn-block" onclick="handleGoogleAuth('${mode}')">
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="#EA4335" d="M12 10.2v3.6h5.1c-.2 1.2-1.5 3.6-5.1 3.6-3.1 0-5.6-2.5-5.6-5.6S8.9 6.2 12 6.2c1.7 0 2.9.7 3.6 1.4l2.4-2.4C16.7 3.9 14.6 3 12 3 7 3 3 7 3 12s4 9 9 9c5.2 0 8.6-3.6 8.6-8.7 0-.6-.1-1-.2-1.5H12z"/><path fill="#34A853" d="M3 12c0-1.6.5-3.1 1.4-4.3l3 2.3C6.9 11 6.7 12.5 7.4 13.7l-3 2.3C3.5 14.8 3 13.5 3 12z"/><path fill="#4A90E2" d="M12 21c2.4 0 4.4-.8 5.9-2.1l-2.9-2.3c-.8.5-1.8.9-3 .9-2.3 0-4.2-1.5-4.9-3.6l-3 2.3C5.9 19.1 8.7 21 12 21z"/><path fill="#FBBC05" d="M20.6 12.3c0-.5-.1-1-.2-1.5H12v3.6h5.1c-.2 1-1 1.9-1.9 2.5l2.9 2.3c1.7-1.6 2.5-3.9 2.5-6.9z"/></svg>
      <span>${label}</span>
    </button>
    <div class="auth-or"><span>${isAr ? "أو" : "or"}</span></div>`;
}

function renderAuthPage(mode = "login") {
  const isAr = state.lang === "ar";
  state.authMode = mode;
  // لو المستخدم مسجّل بالفعل، رجّعه للداشبورد بدل صفحة الدخول/التسجيل
  if (state.user && (mode === "login" || mode === "signup")) {
    setTimeout(() => {
      location.hash = "#/dashboard";
    }, 0);
    return `<section class="auth-page"><div class="container"><div class="auth-card"><p class="auth-sub">${isAr ? "جاري التحويل للوحة التحكم..." : "Redirecting to dashboard..."}</p></div></div></section>`;
  }
  if (mode === "forgot") return renderForgotPage();
  if (mode === "reset-code") return renderResetCodePage();
  if (mode === "reset-password") return renderResetPasswordPage();
  if (mode === "signup") return renderSignupSteps();
  // login
  return authShell(`
    <div class="eyebrow">${isAr ? "مرحبًا بعودتك" : "Welcome back"}</div>
    <h1>${isAr ? "تسجيل الدخول" : "Log in"}</h1>
    <p class="auth-sub">${isAr ? "ادخل بياناتك للوصول للوحة التحكم." : "Enter your credentials to access your account."}</p>
    ${googleAuthBtn("login")}
    <form onsubmit="handleAuth(event, 'login')" novalidate>
      <div class="form-group" id="ag-email">
        <label for="aEmail">${isAr ? "البريد الإلكتروني" : "Email address"}</label>
        <input id="aEmail" type="email" dir="ltr" placeholder="name@example.com" autocomplete="email" />
        <div class="form-error">${ico("alert")} ${isAr ? "بريد إلكتروني غير صحيح" : "Invalid email"}</div>
      </div>
      <div class="form-group" id="ag-pass">
        <label for="aPass">${isAr ? "كلمة السر" : "Password"}</label>
        <input id="aPass" type="password" placeholder="${isAr ? "٦ أحرف على الأقل" : "Min 6 characters"}" autocomplete="current-password" />
        <div class="form-error">${ico("alert")} ${isAr ? "كلمة السر ٦ أحرف على الأقل" : "Password min 6 characters"}</div>
      </div>
      <div class="auth-forgot"><a href="#/forgot" data-link>${isAr ? "هل نسيت كلمة السر؟" : "Forgot password?"}</a></div>
      <button class="btn btn-primary btn-lg btn-block" type="submit">${isAr ? "دخول" : "Login"}</button>
    </form>
    <div class="auth-switch">${isAr ? "مفيش حساب؟ " : "Don't have an account? "}<a href="#/signup" data-link>${isAr ? "إنشاء حساب" : "Sign up"}</a></div>
  `);
}

function renderSignupSteps() {
  const isAr = state.lang === "ar";
  const d = state.signupDraft || {};
  return authShell(`
    <div class="eyebrow">${isAr ? "انضم إلى أنيس" : "Join Anees"}</div>
    <h1>${isAr ? "إنشاء حساب مدرّس" : "Create teacher account"}</h1>
    <p class="auth-sub">${isAr ? "ابدأ مجانًا — فصل واحد و١٠ طلاب." : "Start free — 1 class and 10 students."}</p>
    ${googleAuthBtn("signup")}
    <form onsubmit="handleAuth(event, 'signup')" novalidate>
      <div class="form-row-2">
        <div class="form-group" id="ag-fname">
          <label for="aFName">${isAr ? "الاسم الأول" : "First name"}</label>
          <input id="aFName" type="text" value="${esc(d.firstName || "")}" autocomplete="given-name" />
          <div class="form-error">${ico("alert")} ${isAr ? "اسم قصير جدًا" : "Too short"}</div>
        </div>
        <div class="form-group" id="ag-lname">
          <label for="aLName">${isAr ? "اسم العائلة" : "Last name"}</label>
          <input id="aLName" type="text" value="${esc(d.lastName || "")}" autocomplete="family-name" />
          <div class="form-error">${ico("alert")} ${isAr ? "اسم قصير جدًا" : "Too short"}</div>
        </div>
      </div>
      <div class="form-group" id="ag-email">
        <label for="aEmail">${isAr ? "البريد الإلكتروني" : "Email address"}</label>
        <input id="aEmail" type="email" dir="ltr" value="${esc(d.email || "")}" placeholder="name@example.com" autocomplete="email" />
        <div class="form-error">${ico("alert")} ${isAr ? "بريد إلكتروني غير صحيح" : "Invalid email"}</div>
      </div>
      <div class="form-group" id="ag-phone">
        <label for="aPhone">${isAr ? "رقم الهاتف (اختياري)" : "Phone number (optional)"}</label>
        <input id="aPhone" type="tel" dir="ltr" value="${esc(d.phone || "")}" placeholder="01xxxxxxxxx" autocomplete="tel" inputmode="tel" />
        <div class="form-error">${ico("alert")} ${isAr ? "رقم الهاتف غير صحيح" : "Enter a valid phone number"}</div>
      </div>
      <div class="form-group" id="ag-pass">
        <label for="aPass">${isAr ? "كلمة السر" : "Password"}</label>
        <input id="aPass" type="password" placeholder="${isAr ? "٦ أحرف على الأقل" : "Min 6 characters"}" autocomplete="new-password" />
        <div class="form-error">${ico("alert")} ${isAr ? "كلمة السر ٦ أحرف على الأقل" : "Password min 6 characters"}</div>
      </div>
      <div class="form-group" id="ag-spec">
        <label for="aSpec">${isAr ? "التخصص (اختياري)" : "Specialty (optional)"}</label>
        <input id="aSpec" type="text" value="${esc(d.specialty || "")}" placeholder="${isAr ? "مثال: رياضيات / لغة عربية" : "e.g. Math / Arabic"}" />
      </div>
      <button class="btn btn-primary btn-lg btn-block" type="submit">${isAr ? "إنشاء الحساب" : "Create account"}</button>
    </form>
    <div class="auth-switch">${isAr ? "عندك حساب؟ " : "Already have an account? "}<a href="#/login" data-link>${isAr ? "سجّل دخول" : "Log in"}</a></div>
  `);
}

function signupNextStep() {}
function signupPrevStep() {}

function renderForgotPage() {
  const isAr = state.lang === "ar";
  return `
<section class="auth-page"><div class="container">
  <div class="auth-card">
    <div class="eyebrow">${isAr ? "استعادة الحساب" : "Account recovery"}</div>
    <h1>${isAr ? "نسيت كلمة السر؟" : "Forgot password?"}</h1>
    <p class="auth-sub">${isAr ? "اكتب الإيميل المسجّل وهنبعتلك رابط آمن لتغيير كلمة السر." : "Enter your registered email and we'll send a secure password-reset link."}</p>
    <form onsubmit="handleForgot(event)" novalidate>
      <div class="form-group" id="fg-email">
        <label for="fgEmail">${isAr ? "البريد الإلكتروني" : "Email"}</label>
        <input id="fgEmail" type="email" dir="ltr" placeholder="name@example.com" value="${esc(state.resetEmail || "")}" />
        <div class="form-error">${ico("alert")} ${isAr ? "بريد إلكتروني غير صحيح" : "Invalid email"}</div>
      </div>
      <button class="btn btn-primary btn-lg btn-block" type="submit">${isAr ? "إرسال رابط الاستعادة" : "Send reset link"}</button>
    </form>
    <div class="auth-switch"><a href="#/login" data-link>${isAr ? "رجوع لتسجيل الدخول" : "Back to login"}</a></div>
  </div>
</div></section>`;
}

function renderResetCodePage() {
  const isAr = state.lang === "ar";
  if (!state.resetEmail) {
    setTimeout(() => (location.hash = "#/forgot"), 0);
    return renderForgotPage();
  }
  return `
<section class="auth-page"><div class="container">
  <div class="auth-card">
    <div class="eyebrow">${isAr ? "التحقق" : "Verification"}</div>
    <h1>${isAr ? "أدخل رمز التأكيد" : "Enter verification code"}</h1>
    <p class="auth-sub">${isAr ? "بعتنا رمزًا مكوّنًا من ٦ أرقام على " : "We sent a 6-digit code to "}<b dir="ltr">${esc(state.resetEmail)}</b>${isAr ? ". في النسخة التجريبية الرمز يظهر في الرسالة التالية." : ". In demo mode the code appears in the next toast."}</p>
    <form onsubmit="handleResetCode(event)" novalidate>
      <div class="code-inputs" id="codeInputs">
        ${[0, 1, 2, 3, 4, 5].map((i) => `<input type="text" inputmode="numeric" maxlength="1" data-i="${i}" aria-label="digit ${i + 1}" />`).join("")}
      </div>
      <button class="btn btn-primary btn-lg btn-block" type="submit">${isAr ? "تأكيد الرمز" : "Verify code"}</button>
    </form>
    <div class="auth-switch">
      <a href="#" onclick="event.preventDefault();resendResetCode()">${isAr ? "إعادة إرسال الرمز" : "Resend code"}</a>
      · <a href="#/forgot" data-link>${isAr ? "تغيير الإيميل" : "Change email"}</a>
    </div>
  </div>
</div></section>`;
}

function renderResetPasswordPage() {
  const isAr = state.lang === "ar";
  return `
<section class="auth-page"><div class="container">
  <div class="auth-card">
    <div class="eyebrow">${isAr ? "كلمة سر جديدة" : "New password"}</div>
    <h1>${isAr ? "تعيين كلمة السر" : "Set a new password"}</h1>
    <p class="auth-sub">${isAr ? "اختار كلمة سر قوية (٨ أحرف على الأقل)." : "Choose a strong password (at least 8 characters)."}</p>
    <form onsubmit="handleResetPassword(event)" novalidate>
      <div class="form-group" id="rp-pass">
        <label for="rpPass">${isAr ? "كلمة السر الجديدة" : "New password"}</label>
        <input id="rpPass" type="password" autocomplete="new-password" />
        <div class="form-error">${ico("alert")} ${isAr ? "كلمة السر ٦ أحرف على الأقل" : "Password min 6 characters"}</div>
      </div>
      <div class="form-group" id="rp-pass2">
        <label for="rpPass2">${isAr ? "تأكيد كلمة السر" : "Confirm password"}</label>
        <input id="rpPass2" type="password" autocomplete="new-password" />
        <div class="form-error">${ico("alert")} ${isAr ? "كلمتا السر غير متطابقتين" : "Passwords do not match"}</div>
      </div>
      <button class="btn btn-primary btn-lg btn-block" type="submit">${isAr ? "حفظ كلمة السر" : "Save password"}</button>
    </form>
  </div>
</div></section>`;
}

async function handleForgot(e) {
  e.preventDefault();
  const isAr = state.lang === "ar";
  const email = ($("#fgEmail")?.value || "").trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    markField("fg-email", true);
    return toast(
      isAr ? "اكتب بريد إلكتروني صحيح" : "Enter a valid email",
      "error",
    );
  }
  markField("fg-email", false);
  try {
    await window.AneesCloud.requestPasswordReset(email);
    state.resetEmail = email;
    toast(
      isAr
        ? "لو الإيميل مسجل، هتوصلك رسالة فيها رابط آمن لتغيير كلمة السر. راجع الوارد والـ Spam."
        : "If this email is registered, a secure password-reset link will arrive. Check your inbox and spam folder.",
      "success",
    );
  } catch (error) {
    console.error("[Anees password reset request]", error);
    toast(
      isAr
        ? "تعذر إرسال رسالة الاستعادة. تأكد من إعدادات البريد وروابط إعادة التوجيه في Supabase ثم حاول مرة أخرى."
        : "Could not send the reset email. Check Supabase email and redirect URL settings, then try again.",
      "error",
    );
  }
}

function resendResetCode() {
  const isAr = state.lang === "ar";
  if (!state.resetEmail) return (location.hash = "#/forgot");
  state.pendingResetCode = String(Math.floor(100000 + Math.random() * 900000));
  toast(
    isAr
      ? `تم إعادة إرسال الرمز (تجريبي): ${state.pendingResetCode}`
      : `Code resent (demo): ${state.pendingResetCode}`,
    "info",
  );
}

function handleResetCode(e) {
  e.preventDefault();
  const isAr = state.lang === "ar";
  const inputs = $$("#codeInputs input");
  const code = inputs.map((i) => i.value.trim()).join("");
  if (code.length !== 6 || !/^\d{6}$/.test(code)) {
    return toast(
      isAr ? "اكتب الرمز المكوّن من ٦ أرقام" : "Enter the 6-digit code",
      "error",
    );
  }
  if (code !== state.pendingResetCode) {
    return toast(isAr ? "الرمز غير صحيح" : "Incorrect code", "error");
  }
  state.resetCode = code;
  toast(isAr ? "تم التحقق من الرمز" : "Code verified", "success");
  location.hash = "#/reset-password";
}

async function handleResetPassword(e) {
  e.preventDefault();
  const isAr = state.lang === "ar";
  const p1 = $("#rpPass")?.value || "";
  const p2 = $("#rpPass2")?.value || "";
  let ok = true;
  if (p1.length < 8) {
    markField("rp-pass", true);
    ok = false;
  } else markField("rp-pass", false);
  if (p1 !== p2) {
    markField("rp-pass2", true);
    ok = false;
  } else markField("rp-pass2", false);
  if (!ok)
    return toast(
      isAr
        ? "استخدم ٨ أحرف على الأقل وتأكد من تطابق كلمتي السر"
        : "Use at least 8 characters and make sure passwords match",
      "error",
    );
  try {
    await window.AneesCloud.updateRecoveredPassword(p1);
    state.resetEmail = "";
    state.resetCode = "";
    state.pendingResetCode = null;
    try {
      await window.AneesCloud.signOut();
    } catch (signOutError) {
      console.warn("[Anees reset sign out]", signOutError);
    }
    toast(
      isAr
        ? "تم تغيير كلمة السر بنجاح. سجّل دخولك بكلمة السر الجديدة."
        : "Password updated. Sign in with your new password.",
      "success",
    );
    location.hash = "#/login";
  } catch (error) {
    console.error("[Anees password reset completion]", error);
    toast(
      isAr
        ? "رابط الاستعادة غير صالح أو انتهت صلاحيته. اطلب رابطًا جديدًا."
        : "The recovery link is invalid or expired. Request a new link.",
      "error",
    );
  }
}

function showAuthLoading(mode = "login") {
  hideAuthLoading();
  const isAr = state.lang === "ar";
  const title =
    mode === "signup"
      ? isAr
        ? "بنجهّز حسابك في أنيس"
        : "Setting up your Anees account"
      : isAr
        ? "بنجهّز مساحتك"
        : "Getting your workspace ready";
  const messages = isAr
    ? [
        "بنتأكد من بياناتك بأمان…",
        "بنحمّل الفصول والطلاب والتقييمات…",
        "بنجهّز لوحة التحكم…",
      ]
    : [
        "Securely verifying your account…",
        "Loading your classes, students, and assessments…",
        "Preparing your dashboard…",
      ];
  const overlay = document.createElement("div");
  overlay.id = "authLoadingOverlay";
  overlay.className = "auth-loading-overlay";
  overlay.setAttribute("role", "status");
  overlay.setAttribute("aria-live", "polite");
  overlay.innerHTML = `<div class="auth-loading-card">
    <div class="auth-loading-spinner" aria-hidden="true"></div>
    <h2>${esc(title)}</h2>
    <p id="authLoadingMessage">${esc(messages[0])}</p>
    <div class="auth-loading-dots" aria-hidden="true"><span></span><span></span><span></span></div>
  </div>`;
  document.body.appendChild(overlay);
  let index = 0;
  overlay._messageTimer = window.setInterval(() => {
    const el = document.getElementById("authLoadingMessage");
    if (!el) return;
    index = (index + 1) % messages.length;
    el.textContent = messages[index];
  }, 1800);
}
function hideAuthLoading() {
  const overlay = document.getElementById("authLoadingOverlay");
  if (!overlay) return;
  if (overlay._messageTimer) window.clearInterval(overlay._messageTimer);
  overlay.remove();
}

async function handleAuth(e, mode) {
  e.preventDefault();
  const isAr = state.lang === "ar";
  let ok = true;

  if (mode === "login") {
    const email = ($("#aEmail")?.value || "").trim().toLowerCase();
    const pass = $("#aPass")?.value || "";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      markField("ag-email", true);
      ok = false;
    } else markField("ag-email", false);
    if (pass.length < 6) {
      markField("ag-pass", true);
      ok = false;
    } else markField("ag-pass", false);
    if (!ok) {
      toast(
        isAr
          ? "من فضلك أكمل الحقول المطلوبة"
          : "Please complete the required fields",
        "error",
      );
      return;
    }
    showAuthLoading("login");
    let user;
    try {
      const authUser = await window.AneesCloud.signIn(email, pass);
      await window.AneesCloud.restoreState();
      // Load all app data from Supabase (source of truth)
      if (window.AneesCloud.reloadIntoState) {
        await window.AneesCloud.reloadIntoState(state);
      }
      const cachedProfile =
        state.teachers.find(
          (x) => x.id === authUser.id || x.email === authUser.email,
        ) || {};
      const meta = authUser.user_metadata || {};
      let dbProfile = null;
      try {
        dbProfile = await window.AneesCloud.getProfile?.();
      } catch (profileError) {
        console.warn("[Anees profile read]", profileError);
      }
      user = {
        ...cachedProfile,
        id: authUser.id,
        name:
          meta.full_name ||
          meta.name ||
          cachedProfile.name ||
          authUser.email?.split("@")[0] ||
          "Teacher",
        email: authUser.email,
        phone: dbProfile?.phone || meta.phone || cachedProfile.phone || "",
        avatar: meta.avatar_url || meta.picture || cachedProfile.avatar || null,
        experienceYears: Number(
          dbProfile?.experience_years ??
            meta.experience_years ??
            cachedProfile.experienceYears ??
            0,
        ),
        specialty:
          dbProfile?.specialty ??
          meta.specialty ??
          cachedProfile.specialty ??
          "",
        school: dbProfile?.school ?? meta.school ?? cachedProfile.school ?? "",
        plan: cachedProfile.plan || "free",
        createdAt: cachedProfile.createdAt || Date.now(),
      };
      const existingIndex = state.teachers.findIndex(
        (x) => x.id === user.id || x.email === user.email,
      );
      if (existingIndex >= 0)
        state.teachers[existingIndex] = {
          ...state.teachers[existingIndex],
          ...user,
        };
      else state.teachers.push(user);
    } catch (error) {
      hideAuthLoading();
      console.error("[Anees auth]", error);
      return toast(
        isAr
          ? "تعذر تسجيل الدخول. راجع البريد وكلمة السر أو اتصال Supabase."
          : "Login failed. Check your email, password, or Supabase connection.",
        "error",
      );
    }
    state.user = user;
    LS.set("anees.user", user);
    state.dashView = "classes";
    state.currentClass = null;
    renderNavbar();
    toast(
      isAr
        ? `أهلًا ${user.name.split(" ")[0]}`
        : `Welcome ${user.name.split(" ")[0]}`,
      "success",
    );
    setTimeout(() => {
      location.hash = "#/dashboard";
      navigate("#/dashboard");
      hideAuthLoading();
    }, 200);
    return;
  }

  if (mode === "signup") {
    const firstName = ($("#aFName")?.value || "").trim();
    const lastName = ($("#aLName")?.value || "").trim();
    const email = ($("#aEmail")?.value || "").trim().toLowerCase();
    const phone = ($("#aPhone")?.value || "").trim().replace(/[\s\-()]/g, "");
    const pass = $("#aPass")?.value || "";
    const specialty = ($("#aSpec")?.value || "").trim();
    let ok = true;
    if (firstName.length < 2) {
      markField("ag-fname", true);
      ok = false;
    } else markField("ag-fname", false);
    if (lastName.length < 2) {
      markField("ag-lname", true);
      ok = false;
    } else markField("ag-lname", false);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      markField("ag-email", true);
      ok = false;
    } else markField("ag-email", false);
    if (pass.length < 6) {
      markField("ag-pass", true);
      ok = false;
    } else markField("ag-pass", false);
    const phoneOk = !phone || /^(?:\+20|0020|0)?1[0125]\d{8}$/.test(phone);
    markField("ag-phone", !phoneOk);
    if (!phoneOk) ok = false;
    if (!ok) {
      return toast(
        isAr
          ? "من فضلك أكمل الحقول المطلوبة"
          : "Please complete the required fields",
        "error",
      );
    }
    const name = `${firstName} ${lastName}`.trim();
    let authData;
    showAuthLoading("signup");
    try {
      authData = await window.AneesCloud.signUp({
        email,
        password: pass,
        fullName: name,
        phone,
        specialty,
      });
    } catch (error) {
      hideAuthLoading();
      console.error("[Anees signup]", error);
      const errorText = String(error?.message || "").toLowerCase();
      const message =
        error?.code === "USER_ALREADY_EXISTS" ||
        errorText.includes("already registered") ||
        errorText.includes("already been registered")
          ? isAr
            ? "الإيميل ده عليه حساب بالفعل. سجّل دخولك بدل إنشاء حساب جديد."
            : "This email already has an account. Please log in instead."
          : isAr
            ? "تعذر إنشاء الحساب. راجع البيانات وإعدادات Supabase."
            : "Could not create account. Check the details and Supabase settings.";
      return toast(message, "error");
    }
    if (!authData.session || !authData.user) {
      hideAuthLoading();
      return toast(
        isAr
          ? "الحساب اتعمل. افتح بريدك الإلكتروني لتأكيد الحساب، وبعدها سجّل الدخول."
          : "Account created. Confirm your email, then log in.",
        "success",
      );
    }
    try {
      await window.AneesCloud.syncProfile?.({
        id: authData.user.id,
        fullName: name,
        email: authData.user.email,
        phone,
        role: "teacher",
        specialty,
        experienceYears: 0,
        school: "",
      });
      if (window.AneesCloud?.reloadIntoState)
        await window.AneesCloud.reloadIntoState(state);
    } catch (loadError) {
      hideAuthLoading();
      console.error("[Anees signup bootstrap]", loadError);
      return toast(
        isAr
          ? "الحساب اتعمل لكن تعذر تحميل لوحة التحكم. سجّل الدخول مرة أخرى."
          : "Account created, but the dashboard could not load. Please log in again.",
        "error",
      );
    }
    const user = {
      id: authData.user.id,
      name,
      email: authData.user.email,
      phone,
      avatar: null,
      experienceYears: 0,
      specialty,
      school: "",
      plan: "free",
      createdAt: Date.now(),
    };
    state.teachers = state.teachers.filter(
      (x) => x.email !== email && x.id !== user.id,
    );
    state.teachers.push(user);
    LS.set("anees.teachers", state.teachers);
    state.user = user;
    LS.set("anees.user", user);
    state.dashView = "classes";
    state.currentClass = null;
    state.signupStep = 1;
    state.signupDraft = {};
    renderNavbar();
    addNotification({
      type: "account",
      title: isAr ? "تم إنشاء الحساب" : "Account created",
      body: isAr
        ? `أهلًا ${firstName}، حسابك جاهز.`
        : `Welcome ${firstName}, your account is ready.`,
    });
    toast(
      isAr
        ? `أهلًا ${firstName}، تم إنشاء حسابك بنجاح`
        : `Welcome ${firstName}, account created`,
      "success",
    );
    setTimeout(() => {
      location.hash = "#/dashboard";
      navigate("#/dashboard");
      hideAuthLoading();
    }, 200);
  }
}

async function handleGoogleAuth(mode) {
  const isAr = state.lang === "ar";
  showAuthLoading(mode === "signup" ? "signup" : "login");
  try {
    const { error } = await window.AneesCloud.client.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: window.location.origin + window.location.pathname,
      },
    });
    if (error) throw error;
  } catch (error) {
    console.error("[Anees Google OAuth]", error);
    toast(
      isAr
        ? "تسجيل Google يحتاج تفعيل Google Provider في إعدادات Supabase أولًا."
        : "Enable the Google provider in Supabase Auth settings first.",
      "error",
    );
  }
  return;
  await new Promise((r) => setTimeout(r, 650));
  const email = "teacher.google@anees.eg";
  let user = state.teachers.find(
    (x) => x.email === email || x.googleId === "demo-google",
  );
  if (!user) {
    user = {
      id: "t_google_" + Date.now(),
      name: isAr ? "مدرس Google" : "Google Teacher",
      email,
      googleId: "demo-google",
      avatar: null,
      experienceYears: 5,
      specialty: isAr ? "تربية" : "Education",
      school: "",
      plan: "free",
      createdAt: Date.now(),
    };
    await setUserPass(user, "google-oauth-demo");
    state.teachers.push(user);
    LS.set("anees.teachers", state.teachers);
  }
  state.user = user;
  LS.set("anees.user", user);
  state.dashView = "classes";
  state.currentClass = null;
  renderNavbar();
  toast(
    isAr
      ? `تم الدخول عبر Google — أهلًا ${user.name.split(" ")[0]}`
      : `Signed in with Google — Hi ${user.name.split(" ")[0]}`,
    "success",
  );
  setTimeout(() => {
    location.hash = "#/dashboard";
    navigate("#/dashboard");
  }, 200);
}

function logout() {
  const isAr = state.lang === "ar";
  dialog({
    title: isAr ? "تسجيل الخروج" : "Logout",
    msg: isAr
      ? "متأكد إنك عايز تسجل خروج من حسابك؟"
      : "Are you sure you want to logout?",
    type: "warn",
    confirmText: isAr ? "تسجيل الخروج" : "Logout",
    cancelText: isAr ? "إلغاء" : "Cancel",
    onConfirm: async () => {
      try {
        await window.AneesCloud?.signOut();
      } catch (error) {
        console.warn("[Anees sign out]", error);
      }
      state.user = null;
      state.currentClass = null;
      state.dashView = "classes";
      state.profileStudentId = null;
      LS.set("anees.user", null);
      LS.set("anees.dashboardContext", null);
      // Clear cached account data after it has been synced, so another account on this device cannot inherit it.
      state.teachers = [];
      state.classes = [];
      state.students = [];
      state.reports = [];
      state.notifications = [];
      state.parentSubs = {};
      for (const key of [
        "anees.teachers",
        "anees.classes",
        "anees.students",
        "anees.reports",
        "anees.notifications",
        "anees.parentSubs",
      ]) {
        LS.set(key, key === "anees.parentSubs" ? {} : []);
      }
      renderNavbar();
      toast(isAr ? "تم تسجيل الخروج بنجاح" : "Logged out successfully", "info");
      if (location.hash.startsWith("#/dashboard")) location.hash = "#/";
    },
  });
}

/* ============================================================
   DASHBOARD – Classes, Students, Reports, Profile
   (الجزء المتبقي من الداشبورد + التقييم + الشات بوت)
   موجود بالكامل في الملف، ومهيأ لـ n8n
   ============================================================ */

/* بسبب طول الملف، باقي دوال الداشبورد (renderDashboard, openClassForm, 
   saveClass, openStudentForm, submitBehavior, sendReport, chat, إلخ)
   هتتكتب في الجزء التالي لو محتاج، أو تقدر تطلبها كاملة. */

/* ============================================================
   أنيس – الجزء الثالث: الداشبورد الكامل + التقييم + الشات بوت
   انسخ المحتوى ده بعد نهاية محتوى Part 2 (قبل الـ INIT)
   ============================================================ */

/* ============================================================
   DASHBOARD CORE
   ============================================================ */
function renderDashTopActions() {
  const el = $("#dashTopActions");
  if (!el || !state.user) return;
  const isAr = state.lang === "ar";
  const avatarContent = state.user.avatar
    ? `<img src="${esc(state.user.avatar)}" alt="" />`
    : esc(initials(state.user.name));
  const themeBtn = `<button class="icon-btn" onclick="toggleTheme()" aria-label="Theme">${state.theme === "dark" ? ico("sun") : ico("moon")}</button>`;
  const langBtn = `<button class="icon-btn" onclick="toggleLang()" aria-label="Language">${ico("globe")}</button>`;
  const notifBtn = state.user ? notifPanelHTML(isAr) : "";
  el.innerHTML = `
    ${langBtn}${themeBtn}${notifBtn}
    <div class="user-menu" id="dashUserMenu">
      <button class="user-trigger" id="dashUserTrigger" aria-label="User menu">
        <span class="user-avatar">${avatarContent}</span>
        <span class="name">${isAr ? "أهلاً" : "Hi"} ${esc(state.user.name.split(" ")[0])}</span>
        <span class="chev">${ico("chev")}</span>
      </button>
      <div class="user-dropdown">
        <button type="button" onclick="goHome()">${ico("arrowL")}<span>${isAr ? "الصفحة الرئيسية" : "Home"}</span></button>
        <button type="button" onclick="goDashboardClasses()">${ico("grid")}<span>${isAr ? "لوحة التحكم" : "Dashboard"}</span></button>
        <button type="button" onclick="goMyProfile()">${ico("user")}<span>${isAr ? "الملف الشخصي" : "Profile"}</span></button>
        <div class="divider"></div>
        <button type="button" class="danger" onclick="logout()">${ico("logout")}<span>${isAr ? "تسجيل الخروج" : "Logout"}</span></button>
      </div>
    </div>`;
  $$("#dashUserMenu [data-link]").forEach(
    (a) =>
      (a.onclick = (e) => {
        e.preventDefault();
        location.hash = a.getAttribute("href");
      }),
  );
}

function renderDashboard() {
  if (!state.user) return;
  persistDashboardContext();
  renderDashSidebar();
  restoreSideCollapsed();
  renderDashTopActions();
  const main = $("#dashMain");
  if (state.dashView === "profile") {
    main.innerHTML = renderProfileView();
    return;
  }
  if (state.dashView === "studentProfile" && state.profileStudentId) {
    main.innerHTML = window.renderStudentProfileView();
    return;
  }
  if (state.dashView === "classStatus" && state.currentClass) {
    main.innerHTML = renderClassStatusView();
    return;
  }
  if (state.currentClass) {
    main.innerHTML = renderClassDetailView();
    return;
  }
  main.innerHTML = renderClassesView();
  setTimeout(() => {
    try {
      enhanceCustomSelects($("#dashMain") || document);
    } catch (e) {}
  }, 30);
}

function renderDashSidebar() {
  const isAr = state.lang === "ar";
  const side = $("#dashSide");
  if (!side || !state.user) return;
  const wasCollapsed = side.classList.contains("collapsed");
  const wasOpen = side.classList.contains("open");
  const u = state.user;
  const avatarContent = u.avatar
    ? `<img src="${esc(u.avatar)}" alt="" />`
    : esc(initials(u.name));
  const spec = (u.specialty || "").trim() || (isAr ? "غير محدد" : "N/A");
  const years =
    u.experienceYears != null && u.experienceYears !== ""
      ? u.experienceYears
      : "—";
  const yearsLabel = isAr
    ? years === "—"
      ? "—"
      : `${years} ${Number(years) === 1 ? "سنة" : "سنوات"}`
    : years === "—"
      ? "—"
      : `${years} yr`;
  side.innerHTML = `
    <div class="side-user-card">
      <div class="side-user-avatar">${avatarContent}</div>
      <div class="side-user-meta">
        <div class="side-user-hello">${isAr ? "أهلاً" : "Hello"}</div>
        <div class="side-user-name">${esc(u.name || "")}</div>
        <div class="side-user-badges">
          <span class="side-badge side-badge-spec" title="${esc(spec)}">${esc(spec)}</span>
          <span class="side-badge side-badge-exp" title="${esc(String(yearsLabel))}">${esc(String(yearsLabel))}</span>
        </div>
      </div>
    </div>
    <div class="side-label">${isAr ? "القائمة الرئيسية" : "Main menu"}</div>
    <nav class="side-nav">
      <button type="button" class="side-link ${state.dashView === "classes" && !state.currentClass ? "active" : ""}" data-view="classes" data-tip="${isAr ? "الفصول" : "Classes"}">${ico("grid")}<span>${isAr ? "الفصول" : "Classes"}</span></button>
      <button type="button" class="side-link ${state.dashView === "profile" ? "active" : ""}" data-view="profile" data-tip="${isAr ? "الملف الشخصي" : "Profile"}">${ico("user")}<span>${isAr ? "الملف الشخصي" : "Profile"}</span></button>
    </nav>
    <div style="flex:1;min-height:12px;"></div>
    <div class="side-label">${isAr ? "الحساب" : "Account"}</div>
    <a href="#/" data-link class="side-link" data-tip="${isAr ? "الصفحة الرئيسية" : "Home"}">${ico("arrowL")}<span>${isAr ? "الصفحة الرئيسية" : "Home"}</span></a>
    <button type="button" class="side-link danger" onclick="logout()" data-tip="${isAr ? "تسجيل الخروج" : "Logout"}">${ico("logout")}<span>${isAr ? "تسجيل الخروج" : "Logout"}</span></button>`;
  if (wasOpen) side.classList.add("open");
  if (wasCollapsed) side.classList.add("collapsed");
  side.querySelectorAll("[data-view]").forEach((b) => {
    b.onclick = () => {
      state.dashView = b.dataset.view;
      state.currentClass = null;
      if (window.innerWidth <= 1024) closeDashDrawer();
      renderDashboard();
    };
  });
  side.querySelectorAll("[data-link]").forEach(
    (a) =>
      (a.onclick = (e) => {
        e.preventDefault();
        location.hash = a.getAttribute("href");
      }),
  );
}

function toggleDashSidebar() {
  const side = $("#dashSide");
  const overlay = $("#dashOverlay");
  const shell = document.querySelector(".dash-shell");
  if (!side) return;
  if (window.innerWidth > 1024) {
    // Desktop: collapse to icons-only (never fully hide)
    const collapsed = side.classList.toggle("collapsed");
    if (shell) shell.classList.toggle("side-collapsed", collapsed);
    LS.set("anees.sideCollapsed", collapsed);
    return;
  }
  const willOpen = !side.classList.contains("open");
  side.classList.toggle("open", willOpen);
  if (overlay) overlay.classList.toggle("open", willOpen);
  document.body.style.overflow =
    willOpen && window.innerWidth <= 1024 ? "hidden" : "";
}
function closeDashDrawer() {
  const side = $("#dashSide");
  const overlay = $("#dashOverlay");
  if (side) side.classList.remove("open");
  if (overlay) overlay.classList.remove("open");
  document.body.style.overflow = "";
}
function restoreSideCollapsed() {
  const side = $("#dashSide");
  const shell = document.querySelector(".dash-shell");
  if (!side || window.innerWidth <= 1024) return;
  const collapsed = !!LS.get("anees.sideCollapsed", false);
  side.classList.toggle("collapsed", collapsed);
  if (shell) shell.classList.toggle("side-collapsed", collapsed);
}
// bind once (elements exist in HTML)
if ($("#dashMenuBtn")) {
  $("#dashMenuBtn").onclick = (e) => {
    e.stopPropagation();
    toggleDashSidebar();
  };
}
if ($("#dashOverlay")) {
  $("#dashOverlay").onclick = closeDashDrawer;
}

function teacherData() {
  const tid = state.user.id;
  return {
    classes: state.classes.filter((c) => c.teacherId === tid),
    students: state.students.filter((s) => s.teacherId === tid),
    reports: state.reports.filter((r) => r.teacherId === tid),
  };
}

/* ============================================================
   CLASSES VIEW (بحث + فلتر)
   ============================================================ */
function renderClassesView() {
  const isAr = state.lang === "ar";
  const { classes, students } = teacherData();
  const first = state.user.name.split(" ")[0];

  let filtered = classes;
  if (state.classSearch) {
    const q = state.classSearch.toLowerCase();
    filtered = filtered.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        (c.schoolName || "").toLowerCase().includes(q),
    );
  }
  if (state.classFilter !== "all") {
    filtered = filtered.filter((c) => c.ageStage === state.classFilter);
  }

  return `
    <div class="dash-pagehead">
      <div>
        <h1>${isAr ? `أهلًا ${esc(first)}` : `Hi ${esc(first)}`}</h1>
        <p>${isAr ? "ابدأ بمتابعة فصولك وطلابك من هنا." : "Start tracking your classes and students here."}</p>
      </div>
      <div class="actions">
        <button class="btn btn-primary" onclick="openClassForm()">${ico("plus")} ${isAr ? "إضافة فصل" : "Add class"}</button>
      </div>
    </div>

    ${
      classes.length > 0
        ? `
      <div class="filter-bar">
        <div class="search-wrap">
          ${ico("search")}
          <input type="text" id="classSearchInput" placeholder="${isAr ? "ابحث باسم الفصل أو المدرسة..." : "Search by class or school name..."}" value="${esc(state.classSearch)}" oninput="state.classSearch=this.value;renderDashboard()" />
        </div>
        <select id="classFilterSelect" onchange="state.classFilter=this.value;renderDashboard()">
          <option value="all" ${state.classFilter === "all" ? "selected" : ""}>${isAr ? "كل المراحل" : "All stages"}</option>
          ${Object.entries(AGE_STAGES)
            .map(
              ([k, v]) =>
                `<option value="${k}" ${state.classFilter === k ? "selected" : ""}>${isAr ? v.ar : v.en}</option>`,
            )
            .join("")}
        </select>
      </div>`
        : ""
    }

    ${
      classes.length === 0
        ? `<div class="empty-state">
            <div class="ic">${ico("folder")}</div>
            <h3>${isAr ? "لسه مضفتش أي فصل" : "No classes yet"}</h3>
            <p>${isAr ? 'الفصل هو المكان اللي هتضيف فيه طلابك. اضغط على الزر تحت عشان تضيف أول فصل وتسميه (مثلًا: "3/1 رياضيات").' : 'A class is where you add your students. Click below to add your first class (e.g. "3/1 Math").'}</p>
            <button class="btn btn-primary btn-lg" onclick="openClassForm()">${ico("plus")} ${isAr ? "إضافة أول فصل" : "Add first class"}</button>
            <div class="hint">${ico("info")} ${isAr ? "بعد ما تضيف الفصل، تقدر تضيف طلاب وتقييمات" : "After adding a class you can add students and assessments"}</div>
          </div>`
        : filtered.length === 0
          ? `<div class="empty-state"><div class="ic">${ico("search")}</div><h3>${isAr ? "مفيش نتائج" : "No results"}</h3><p>${isAr ? "جرب تغيير البحث أو الفلتر." : "Try changing the search or filter."}</p></div>`
          : `<div class="classes-grid">
              ${filtered
                .map((c) => {
                  const cnt = students.filter((s) => s.classId === c.id).length;
                  const stageLabel = c.ageStage
                    ? isAr
                      ? AGE_STAGES[c.ageStage]?.ar
                      : AGE_STAGES[c.ageStage]?.en
                    : "";
                  return `
                    <div class="class-card">
                      <div class="cc-body">
                        <div class="cc-head">
                          <div class="cc-icon">${ico("folder")}</div>
                          <div class="cc-head-actions">
                            <button class="cc-edit" onclick="event.stopPropagation();openClassForm('${c.id}')" aria-label="${isAr ? "تعديل الفصل" : "Edit class"}" title="${isAr ? "تعديل الفصل" : "Edit class"}">${ico("edit")}</button>
                            <button class="cc-del" onclick="event.stopPropagation();deleteClass('${c.id}')" aria-label="${isAr ? "حذف الفصل" : "Delete class"}" title="${isAr ? "حذف الفصل" : "Delete class"}">${ico("trash")}</button>
                          </div>
                        </div>
                        <div>
                          <h3>${isAr ? "فصل " : "Class "}${esc(c.name)}</h3>
                          <div class="cc-meta">${esc(c.schoolName || "")} · ${fmtDateShort(c.createdAt)}</div>
                          ${stageLabel ? `<div class="cc-stage">${stageLabel}</div>` : ""}
                        </div>
                        <div class="cc-stats"><div><b>${cnt}</b><span>${isAr ? "طالب" : "students"}</span></div></div>
                      </div>
                      <div class="cc-actions">
                        <button class="btn btn-primary btn-sm" onclick="openClass('${c.id}')">${ico("users")} ${isAr ? "تقرير الفصل" : "Class report"}</button>
                        <button class="btn btn-soft btn-sm" onclick="openClassStatus('${c.id}')">${ico("chart")} ${isAr ? "حالة الفصل" : "Class status"}</button>
                      </div>
                    </div>`;
                })
                .join("")}
              <div class="class-card add-card" onclick="openClassForm()">
                <div>
                  <div class="plus-circle">${ico("plus")}</div>
                  <div style="font-weight:600;">${isAr ? "إضافة فصل جديد" : "Add new class"}</div>
                </div>
              </div>
            </div>`
    }`;
}

function renderClassDetailView() {
  const isAr = state.lang === "ar";
  const cls = teacherData().classes.find((c) => c.id === state.currentClass);
  if (!cls) {
    state.currentClass = null;
    return renderClassesView();
  }
  let clsStudents = teacherData().students.filter((s) => s.classId === cls.id);
  const { reports } = teacherData();
  const stageLabel = cls.ageStage
    ? isAr
      ? AGE_STAGES[cls.ageStage]?.ar
      : AGE_STAGES[cls.ageStage]?.en
    : "";

  // search
  if (state.studentSearch) {
    const q = state.studentSearch.toLowerCase();
    clsStudents = clsStudents.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        (s.parentName || "").toLowerCase().includes(q),
    );
  }
  // sort
  const lastScore = (s) => {
    const sr = reports.filter((r) => r.studentId === s.id);
    const last = sr[sr.length - 1];
    return last ? last.totalScore : -1;
  };
  const sort = state.studentSort || "az";
  clsStudents = clsStudents.slice().sort((a, b) => {
    if (sort === "az") return a.name.localeCompare(b.name, isAr ? "ar" : "en");
    if (sort === "za") return b.name.localeCompare(a.name, isAr ? "ar" : "en");
    if (sort === "high") return lastScore(b) - lastScore(a);
    if (sort === "low") {
      const sa = lastScore(a),
        sb = lastScore(b);
      if (sa < 0 && sb < 0) return 0;
      if (sa < 0) return 1;
      if (sb < 0) return -1;
      return sa - sb;
    }
    return 0;
  });

  const allCount = teacherData().students.filter(
    (s) => s.classId === cls.id,
  ).length;

  return `
    <div class="detail-top detail-top-desktop">
    </div>
    <div class="dash-pagehead">
      <div>
        <h1>${isAr ? "فصل " : "Class "}${esc(cls.name)}</h1>
        <p>${allCount} ${isAr ? "طالب" : "students"} ${stageLabel ? "· " + stageLabel : ""} ${cls.schoolName ? "· " + esc(cls.schoolName) : ""}</p>
      </div>
      <div class="actions class-detail-actions">
        <button class="btn btn-soft btn-sm class-detail-status-btn" onclick="openClassStatus('${cls.id}')">${ico("chart")} ${isAr ? "حالة الفصل" : "Class status"}</button>
        <button class="btn btn-ghost" onclick="openStudentImport('${cls.id}')">${ico("folder")} ${isAr ? "استيراد من Excel" : "Import Excel"}</button>
        ${allCount ? `<button class="btn btn-primary" onclick="openStudentForm('${cls.id}')">${ico("plus")} ${isAr ? "إضافة طالب" : "Add student"}</button>` : ""}
      </div>
    </div>
    ${
      allCount === 0
        ? `<div class="empty-state">
            <div class="ic">${ico("users")}</div>
            <h3>${isAr ? "مفيش طلاب في الفصل ده لسه" : "No students in this class yet"}</h3>
            <p>${isAr ? "ابدأ بإضافة أول طالب. هتحتاج اسمه، اسم ولي أمره، رقمه، وإيميل ولي الأمر عشان نقدر نتواصل ونرسل التقارير تلقائيًا." : "Start by adding the first student. You'll need their name, parent name, phone and parent email for automatic reports."}</p>
            <div style="display:flex;flex-wrap:wrap;gap:10px;justify-content:center;">
              <button class="btn btn-primary btn-lg" onclick="openStudentForm('${cls.id}')">${ico("plus")} ${isAr ? "إضافة أول طالب" : "Add first student"}</button>
              <button class="btn btn-ghost btn-lg" onclick="openStudentImport('${cls.id}')">${ico("folder")} ${isAr ? "استيراد من Excel" : "Import from Excel"}</button>
            </div>
          </div>`
        : `
          <div class="stu-filter-bar">
            <div class="search-wrap">
              ${ico("search")}
              <input type="text" placeholder="${isAr ? "ابحث باسم الطالب أو ولي الأمر..." : "Search by student or parent name..."}" value="${esc(state.studentSearch)}" oninput="state.studentSearch=this.value;renderDashboard()" />
            </div>
            <select onchange="state.studentSort=this.value;renderDashboard()">
              <option value="az" ${sort === "az" ? "selected" : ""}>${isAr ? "هجائيًا من أ ← ي" : "Name A → Z"}</option>
              <option value="za" ${sort === "za" ? "selected" : ""}>${isAr ? "هجائيًا من ي ← أ" : "Name Z → A"}</option>
              <option value="high" ${sort === "high" ? "selected" : ""}>${isAr ? "الأعلى تقييمًا" : "Highest score"}</option>
              <option value="low" ${sort === "low" ? "selected" : ""}>${isAr ? "الأقل تقييمًا" : "Lowest score"}</option>
            </select>
          </div>
          ${
            clsStudents.length === 0
              ? `<div class="empty-state"><div class="ic">${ico("search")}</div><h3>${isAr ? "مفيش نتائج" : "No results"}</h3><p>${isAr ? "جرب تغيير البحث أو الترتيب." : "Try changing search or sort."}</p></div>`
              : `<div class="students-grid">
            ${clsStudents
              .map((s) => {
                const sr = reports.filter((r) => r.studentId === s.id);
                const last = sr[sr.length - 1];
                const score = last ? last.totalScore : null;
                const kind =
                  score === null
                    ? "none"
                    : score >= 70
                      ? "good"
                      : score >= 45
                        ? "mid"
                        : "low";
                return `
                  <div class="student-card">
                    <div class="student-head">
                      <div class="info">
                        <h4>${esc(s.name)}</h4>
                        <div class="sub">${esc(s.parentName)} — ${sr.length} ${isAr ? "تقييم" : "reports"}</div>
                      </div>
                      <div class="student-head-actions">
                        <button class="icon-btn student-edit" onclick="openStudentForm('${s.classId}','${s.id}')" aria-label="${isAr ? "تعديل الطالب" : "Edit student"}" title="${isAr ? "تعديل الطالب" : "Edit student"}">${ico("edit")}</button>
                        <button class="icon-btn icon-danger student-del" onclick="deleteStudent('${s.id}')" aria-label="${isAr ? "حذف الطالب" : "Delete student"}" title="${isAr ? "حذف الطالب" : "Delete student"}">${ico("trash")}</button>
                      </div>
                    </div>
                    <div class="student-data">
                      <div><div class="k">${isAr ? "ولي الأمر" : "Parent"}</div><div class="v">${esc(s.parentName)}</div></div>
                      <div><div class="k">${isAr ? "الهاتف" : "Phone"}</div><div class="v">${esc(s.parentPhone)}</div></div>
                      <div><div class="k">${isAr ? "آخر تقييم" : "Last score"}</div><div class="v"><span class="score-pill ${kind}">${score !== null ? score + "%" : isAr ? "لا يوجد" : "None"}</span></div></div>
                      <div><div class="k">${isAr ? "عدد التقارير" : "Reports"}</div><div class="v">${sr.length}</div></div>
                    </div>
                    <div class="student-actions">
                      <button class="btn btn-primary btn-sm" onclick="window.openStudentProfile('${s.id}')">${ico("user")} <span class="btn-txt">${isAr ? "تفاصيل الطالب" : "Student details"}</span></button>
                    </div>
                  </div>`;
              })
              .join("")}
              <div class="student-card add-card" onclick="openStudentForm('${cls.id}')" role="button" tabindex="0">
                <div class="plus-circle">${ico("plus")}</div>
                <span>${isAr ? "إضافة طالب جديد" : "Add new student"}</span>
              </div>
          </div>`
          }`
    }`;
}

function renderClassStatusView() {
  const isAr = state.lang === "ar";
  const cls = teacherData().classes.find((c) => c.id === state.currentClass);
  if (!cls) {
    state.currentClass = null;
    state.dashView = "classes";
    return renderClassesView();
  }
  const students = teacherData().students.filter((s) => s.classId === cls.id);
  const { reports } = teacherData();
  const lastScore = (s) => {
    const sr = reports.filter((r) => r.studentId === s.id);
    const last = sr[sr.length - 1];
    return last ? last.totalScore : null;
  };
  const scored = students
    .map((s) => ({ s, score: lastScore(s) }))
    .filter((x) => x.score !== null);
  const avg =
    scored.length > 0
      ? Math.round(scored.reduce((a, x) => a + x.score, 0) / scored.length)
      : 0;
  const good = scored.filter((x) => x.score >= 70).length;
  const mid = scored.filter((x) => x.score >= 45 && x.score < 70).length;
  const low = scored.filter((x) => x.score < 45).length;
  const noData = students.length - scored.length;
  const overall =
    avg >= 70 ? "good" : avg >= 45 ? "mid" : scored.length ? "low" : "mid";
  const maxBar = Math.max(good, mid, low, noData, 1);
  const pct = (n) => Math.round((n / maxBar) * 100);

  const ranked = scored.slice().sort((a, b) => b.score - a.score);
  const top = ranked.slice(0, 5);
  const bottom = ranked
    .slice()
    .reverse()
    .filter((x) => !top.find((t) => t.s.id === x.s.id))
    .slice(0, 3);

  let suggestions = [];
  if (!scored.length) {
    suggestions = isAr
      ? [
          "ابدأ بتقييم الطلاب عشان تبان صورة واضحة عن حالة الفصل.",
          "وزّع التقييمات على أيام الأسبوع عشان تتابع التغيير.",
        ]
      : [
          "Start assessing students so the class picture becomes clear.",
          "Spread assessments across the week to track change.",
        ];
  } else if (overall === "good") {
    suggestions = isAr
      ? [
          "الفصل في حالة جيدة عمومًا — حافظ على الروتين الإيجابي.",
          "شجّع الطلاب المتميزين وخلّيهم قدوة لزملائهم.",
          "تابع أي طالب نتيجته نزلت فجأة حتى لو المتوسط عالي.",
        ]
      : [
          "Class is generally in good shape — keep the positive routine.",
          "Encourage high performers to mentor peers.",
          "Watch for any sudden drop even if the average is high.",
        ];
  } else if (overall === "mid") {
    suggestions = isAr
      ? [
          "في تباين واضح — ركّز على الطلاب في المنطقة المتوسطة والمنخفضة.",
          "جرّب أنشطة جماعية قصيرة لتحسين التفاعل والانتباه.",
          "تواصل مع أولياء أمور الطلاب الأقل تقييمًا عبر نموذج ولي الأمر.",
        ]
      : [
          "Clear variance — focus on mid and low scoring students.",
          "Try short group activities to boost engagement.",
          "Reach parents of lower-scoring students via the parent form.",
        ];
  } else {
    suggestions = isAr
      ? [
          "الحالة تحتاج تدخل قريب — راجع الطلاب الأقل تقييمًا واحدًا واحدًا.",
          "شارك ملاحظاتك مع الأخصائي النفسي أو إدارة المدرسة إن أمكن.",
          "ابعت تقارير لأولياء الأمور واطلب دعمهم في البيت.",
          "قلّل الضغط الأكاديمي مؤقتًا وركّز على الدعم العاطفي.",
        ]
      : [
          "Status needs near-term action — review lowest scores one by one.",
          "Share notes with the school counselor or admin if possible.",
          "Send parent reports and ask for home support.",
          "Ease academic pressure briefly and focus on emotional support.",
        ];
  }

  const overallLabel =
    overall === "good"
      ? isAr
        ? "جيدة"
        : "Good"
      : overall === "mid"
        ? isAr
          ? "متوسطة"
          : "Fair"
        : isAr
          ? "تحتاج انتباه"
          : "Needs attention";

  const distRow = (label, n, kind) => `
    <div class="cs-dist-row">
      <span class="cs-dist-label">${label}</span>
      <div class="cs-dist-bar"><i class="${kind}" style="width:${pct(n)}%"></i></div>
      <span class="cs-dist-n">${n}</span>
    </div>`;

  const rankRow = (x) => {
    const k = x.score >= 70 ? "good" : x.score >= 45 ? "mid" : "low";
    return `
      <div class="cs-rank-row">
        
        <span class="cs-rank-name">${esc(x.s.name)}</span>
        <div class="cs-rank-bar"><i class="${k}" style="width:${x.score}%"></i></div>
        <span class="score-pill ${k}">${x.score}%</span>
      </div>`;
  };

  return `
    <div class="dash-pagehead cs-head">
      <div>
        <h1>${isAr ? "حالة الفصل" : "Class status"} — ${esc(cls.name)}</h1>
        <p>${isAr ? "تحليل مبني على آخر تقييم لكل طالب" : "Analysis based on each student's latest assessment"}</p>
      </div>
      <span class="score-pill ${overall} big">${overallLabel}${scored.length ? ` · ${avg}%` : ""}</span>
    </div>

    <div class="status-grid">
      <div class="status-stat">
        <div class="cs-stat-ic">${ico("users")}</div>
        <div class="v">${students.length}</div>
        <div class="l">${isAr ? "الطلاب" : "Students"}</div>
      </div>
      <div class="status-stat">
        <div class="cs-stat-ic">${ico("activity")}</div>
        <div class="v"><span class="score-pill ${overall}">${scored.length ? avg + "%" : "—"}</span></div>
        <div class="l">${isAr ? "متوسط الفصل" : "Class average"}</div>
      </div>
      <div class="status-stat">
        <div class="cs-stat-ic good">${ico("check")}</div>
        <div class="v" style="color:var(--success)">${good}</div>
        <div class="l">${isAr ? "جيدة" : "Good"}</div>
      </div>
      <div class="status-stat">
        <div class="cs-stat-ic low">${ico("alert")}</div>
        <div class="v" style="color:var(--danger)">${low}</div>
        <div class="l">${isAr ? "تحتاج انتباه" : "Need attention"}</div>
      </div>
    </div>

    <div class="status-charts">
      <div class="status-chart-card">
        <div class="cs-card-title">
          <span class="cs-card-ic">${ico("chart")}</span>
          <h3>${isAr ? "توزيع الحالات" : "Status distribution"}</h3>
        </div>
        ${distRow(isAr ? "جيدة" : "Good", good, "good")}
        ${distRow(isAr ? "متوسطة" : "Mid", mid, "mid")}
        ${distRow(isAr ? "منخفضة" : "Low", low, "low")}
        ${distRow(isAr ? "بدون تقييم" : "No data", noData, "none")}
        <div class="cs-dist-stack" aria-hidden="true">
          ${good ? `<i class="good" style="flex:${good}"></i>` : ""}
          ${mid ? `<i class="mid" style="flex:${mid}"></i>` : ""}
          ${low ? `<i class="low" style="flex:${low}"></i>` : ""}
          ${noData ? `<i class="none" style="flex:${noData}"></i>` : ""}
        </div>
      </div>
      <div class="status-chart-card">
        <div class="cs-card-title">
          <span class="cs-card-ic">${ico("target")}</span>
          <h3>${isAr ? "أعلى التقييمات" : "Top scores"}</h3>
        </div>
        ${
          top.length
            ? top.map(rankRow).join("")
            : `<p class="cs-empty">${isAr ? "لا توجد تقييمات بعد" : "No assessments yet"}</p>`
        }
        ${
          bottom.length
            ? `<div class="cs-subhead">${isAr ? "الأقل تقييمًا" : "Lowest scores"}</div>${bottom.map(rankRow).join("")}`
            : ""
        }
      </div>
    </div>

    <div class="status-suggest ${overall}">
      <div class="cs-card-title">
        <span class="cs-card-ic">${ico("sparkle")}</span>
        <h3>${isAr ? "اقتراحات بناءً على حالة الفصل" : "Suggestions based on class status"}</h3>
      </div>
      <ul>${suggestions.map((t) => `<li>${t}</li>`).join("")}</ul>
    </div>
  `;
}

function renderReportsView() {
  const isAr = state.lang === "ar";
  const { reports, students, classes } = teacherData();
  if (reports.length === 0)
    return `
      <div class="dash-pagehead"><div><h1>${isAr ? "التقارير" : "Reports"}</h1><p>${isAr ? "كل التقارير اللي سجلتها لطلابك." : "All reports you recorded for your students."}</p></div></div>
      <div class="empty-state">
        <div class="ic">${ico("chart")}</div>
        <h3>${isAr ? "لسه مفيش تقارير" : "No reports yet"}</h3>
        <p>${isAr ? "التقارير بتتسجل لما تدخل على أي طالب وتسجل تقييم سلوكه." : "Reports are created when you assess a student's behavior."}</p>
        <button class="btn btn-primary" onclick="state.dashView='classes';state.currentClass=null;renderDashboard();">${ico("grid")} ${isAr ? "روح للفصول" : "Go to classes"}</button>
      </div>`;

  let list = reports.slice();
  // search
  if (state.reportsSearch) {
    const q = state.reportsSearch.toLowerCase();
    list = list.filter((r) => {
      const s = students.find((x) => x.id === r.studentId);
      return (
        (s?.name || "").toLowerCase().includes(q) ||
        (r.notes || "").toLowerCase().includes(q) ||
        (r.status || "").toLowerCase().includes(q)
      );
    });
  }
  // filter by score band
  if (state.reportsFilter === "good")
    list = list.filter((r) => r.totalScore >= 70);
  else if (state.reportsFilter === "mid")
    list = list.filter((r) => r.totalScore >= 45 && r.totalScore < 70);
  else if (state.reportsFilter === "low")
    list = list.filter((r) => r.totalScore < 45);

  // sort
  if (state.reportsSort === "newest")
    list.sort((a, b) => (b.date || 0) - (a.date || 0));
  else if (state.reportsSort === "oldest")
    list.sort((a, b) => (a.date || 0) - (b.date || 0));
  else if (state.reportsSort === "high")
    list.sort((a, b) => b.totalScore - a.totalScore);
  else if (state.reportsSort === "low")
    list.sort((a, b) => a.totalScore - b.totalScore);

  const avg =
    reports.length > 0
      ? Math.round(
          reports.reduce((sum, r) => sum + (r.totalScore || 0), 0) /
            reports.length,
        )
      : 0;
  const goodN = reports.filter((r) => r.totalScore >= 70).length;
  const midN = reports.filter(
    (r) => r.totalScore >= 45 && r.totalScore < 70,
  ).length;
  const lowN = reports.filter((r) => r.totalScore < 45).length;
  const avgKind = avg >= 70 ? "good" : avg >= 45 ? "mid" : "low";

  return `
    <div class="dash-pagehead"><div><h1>${isAr ? "التقارير" : "Reports"}</h1><p>${reports.length} ${isAr ? "تقرير مسجل — ملخص وتحليل سريع" : "reports recorded — quick overview"}</p></div></div>
    <div class="reports-stats">
      <div class="status-stat"><div class="v">${reports.length}</div><div class="l">${isAr ? "إجمالي التقارير" : "Total reports"}</div></div>
      <div class="status-stat"><div class="v"><span class="score-pill ${avgKind}">${avg}%</span></div><div class="l">${isAr ? "متوسط التقييم" : "Average score"}</div></div>
      <div class="status-stat"><div class="v" style="color:var(--success)">${goodN}</div><div class="l">${isAr ? "حالة جيدة" : "Good"}</div></div>
      <div class="status-stat"><div class="v" style="color:var(--danger)">${lowN}</div><div class="l">${isAr ? "تحتاج انتباه" : "Need attention"}</div></div>
    </div>
    <div class="reports-toolbar">
      <div class="search-wrap" style="flex:1 1 200px;">
        ${ico("search")}
        <input type="text" placeholder="${isAr ? "ابحث باسم الطالب أو الملاحظة..." : "Search by student or notes..."}" value="${esc(state.reportsSearch)}" oninput="state.reportsSearch=this.value;renderDashboard();(function(){var i=document.querySelector('.reports-toolbar input');if(i){i.focus();var n=i.value.length;i.setSelectionRange(n,n)}})()" />
      </div>
      <select onchange="state.reportsFilter=this.value;renderDashboard()">
        <option value="all" ${state.reportsFilter === "all" ? "selected" : ""}>${isAr ? "كل الحالات" : "All statuses"}</option>
        <option value="good" ${state.reportsFilter === "good" ? "selected" : ""}>${isAr ? "جيدة (≥70%)" : "Good (≥70%)"}</option>
        <option value="mid" ${state.reportsFilter === "mid" ? "selected" : ""}>${isAr ? "متوسطة (45–69%)" : "Mid (45–69%)"}</option>
        <option value="low" ${state.reportsFilter === "low" ? "selected" : ""}>${isAr ? "منخفضة (<45%)" : "Low (<45%)"}</option>
      </select>
      <select onchange="state.reportsSort=this.value;renderDashboard()">
        <option value="newest" ${state.reportsSort === "newest" ? "selected" : ""}>${isAr ? "الأحدث أولًا" : "Newest first"}</option>
        <option value="oldest" ${state.reportsSort === "oldest" ? "selected" : ""}>${isAr ? "الأقدم أولًا" : "Oldest first"}</option>
        <option value="high" ${state.reportsSort === "high" ? "selected" : ""}>${isAr ? "الأعلى تقييمًا" : "Highest score"}</option>
        <option value="low" ${state.reportsSort === "low" ? "selected" : ""}>${isAr ? "الأقل تقييمًا" : "Lowest score"}</option>
      </select>
    </div>
    ${
      list.length === 0
        ? `<div class="empty-state"><div class="ic">${ico("search")}</div><h3>${isAr ? "مفيش نتائج" : "No results"}</h3></div>`
        : `<div class="reports-list">
      ${list
        .map((r) => {
          const s = students.find((x) => x.id === r.studentId);
          const cls = classes.find((c) => c.id === s?.classId);
          const kind =
            r.totalScore >= 70 ? "good" : r.totalScore >= 45 ? "mid" : "low";
          const day =
            r.day || (isAr ? AR_DAYS : EN_DAYS)[new Date(r.date).getDay()];
          const schoolName = cls?.schoolName || cls?.name || "";
          const schoolDisp = schoolName
            ? isAr
              ? schoolName.startsWith("مدرسة")
                ? schoolName
                : "مدرسة " + schoolName
              : /^school\b/i.test(schoolName)
                ? schoolName
                : "School: " + schoolName
            : "";
          const statusDisp = statusLabel(r.status, isAr);
          return `
            <div class="report-item">
              <div class="ri-top">
                <div class="ri-main">
                  <h4>${esc(s?.name || (isAr ? "طالب محذوف" : "Deleted student"))}</h4>
                  <div class="meta">${ico("calendar")} ${esc(day)} — ${fmtDate(r.date)}</div>
                </div>
                <span class="score-pill ${kind}">${r.totalScore}%</span>
              </div>
              <div class="ri-tags">
                ${schoolDisp ? `<span class="ri-tag class-tag">${ico("folder")}<span>${esc(schoolDisp)}</span></span>` : ""}
                ${statusDisp ? `<span class="ri-tag status-tag">${ico("sparkle")}<span>${esc(statusDisp)}</span></span>` : ""}
              </div>
              ${r.notes ? `<div class="ri-notes">${esc(r.notes)}</div>` : ""}
              ${s ? `<button class="btn btn-ghost btn-sm ri-details" onclick="window.openStudentProfile('${s.id}')\">${isAr ? "التفاصيل" : "Details"}</button>` : ""}
            </div>`;
        })
        .join("")}
    </div>`
    }`;
}

function renderProfileView() {
  const isAr = state.lang === "ar";
  const u = state.user;
  const avatarContent = u.avatar
    ? `<img src="${esc(u.avatar)}" alt="" />`
    : esc(initials(u.name));
  return `
    <div class="dash-pagehead">
      <div>
        <h1>${isAr ? "الملف الشخصي" : "Profile"}</h1>
        <p>${isAr ? "إدارة بيانات حسابك والباقة." : "Manage your account and plan."}</p>
      </div>
    </div>
    <div class="profile-grid">
      <div class="profile-card">
        <div class="profile-avatar-wrap">
          <div class="profile-avatar-lg">${avatarContent}</div>
          <h3 style="font-size:1.2rem;">${esc(u.name)}</h3>
          <div class="plan-badge-inline ${u.plan === "pro" ? "pro" : ""}">${u.plan === "pro" ? (isAr ? "باقة Pro" : "Pro Plan") : isAr ? "باقة مجانية" : "Free Plan"}</div>
        </div>
        <div class="info-grid" style="grid-template-columns:1fr;">
          <div class="info-cell"><div class="k">${isAr ? "الإيميل" : "Email"}</div><div class="v" dir="ltr">${esc(u.email)}</div></div>
          <div class="info-cell"><div class="k">${isAr ? "رقم الهاتف" : "Phone number"}</div><div class="v" dir="ltr">${esc(u.phone || "—")}</div></div>
          <div class="info-cell"><div class="k">${isAr ? "سنوات الخبرة" : "Experience"}</div><div class="v">${u.experienceYears || 0} ${isAr ? "سنة" : "years"}</div></div>
          <div class="info-cell"><div class="k">${isAr ? "التخصص" : "Specialty"}</div><div class="v">${esc(u.specialty || "—")}</div></div>
          <div class="info-cell"><div class="k">${isAr ? "المدرسة" : "School"}</div><div class="v">${esc(u.school || "—")}</div></div>
        </div>
      </div>
      <div class="profile-card">
        <h3 style="margin-bottom:18px;font-size:1.1rem;">${isAr ? "تعديل البيانات" : "Edit profile"}</h3>
        <form onsubmit="event.preventDefault();saveProfile();">
          <div class="form-group">
            <label>${isAr ? "الاسم" : "Name"}</label>
            <input id="profName" value="${esc(u.name)}" required />
          </div>
          <div class="form-group">
            <label>${isAr ? "البريد الإلكتروني" : "Email address"}</label>
            <input id="profEmail" type="email" dir="ltr" value="${esc(u.email || "")}" required />
            <small class="field-hint">${isAr ? "تغيير البريد قد يتطلب تأكيدًا من بريدك الجديد." : "Changing your email may require confirmation."}</small>
          </div>
          <div class="form-group">
            <label>${isAr ? "رقم الهاتف" : "Phone number"}</label>
            <input id="profPhone" type="tel" dir="ltr" value="${esc(u.phone || "")}" required />
          </div>
          <div class="form-group">
            <label>${isAr ? "سنوات الخبرة" : "Years of experience"}</label>
            <input id="profExp" type="number" min="0" value="${u.experienceYears || 0}" />
          </div>
          <div class="form-group">
            <label>${isAr ? "التخصص" : "Specialty"}</label>
            <input id="profSpec" value="${esc(u.specialty || "")}" />
          </div>
          <div class="form-group">
            <label>${isAr ? "المدرسة" : "School"}</label>
            <input id="profSchool" value="${esc(u.school || "")}" />
          </div>
          <div class="form-group">
            <label>${isAr ? "تغيير الصورة" : "Change photo"}</label>
            <div class="file-upload">
              <input type="file" id="profAvatarFile" accept="image/*" onchange="previewProfileAvatar(event);updateFileUploadLabel(this)" />
              <label for="profAvatarFile" class="file-upload-btn">
                <span class="file-upload-icon">${ico("edit")}</span>
                <span class="file-upload-text">
                  <strong id="profAvatarLabel">${isAr ? "اختيار صورة" : "Choose photo"}</strong>
                  <small>${isAr ? "JPG أو PNG — هتقدر تقصها قبل الحفظ" : "JPG or PNG — you can crop before saving"}</small>
                </span>
              </label>
            </div>
          </div>
          <button class="btn btn-primary btn-lg" type="submit">${isAr ? "حفظ التغييرات" : "Save changes"}</button>
        </form>
        ${
          u.plan !== "pro"
            ? `<div style="margin-top:28px;padding-top:22px;border-top:1px solid var(--border);">
                <p style="color:var(--text-muted);font-size:.92rem;margin-bottom:14px;">${isAr ? "عايز فصول غير محدودة وتقارير تحليلية تلقائية؟" : "Want unlimited classes and automated reports?"}</p>
                <button class="btn btn-primary" onclick="openUpgradeCheckout()">${isAr ? "ترقية للباقة Pro" : "Upgrade to Pro"}</button>
              </div>`
            : ""
        }
      </div>
    </div>`;
}

let pendingProfileAvatar = null;
let _cropState = null;

function openAvatarCropper(dataUrl) {
  const isAr = state.lang === "ar";
  const overlay = document.createElement("div");
  overlay.className = "crop-overlay open";
  overlay.id = "avatarCropOverlay";
  overlay.innerHTML = `
    <div class="crop-modal" role="dialog" aria-modal="true" aria-label="${isAr ? "قص الصورة" : "Crop photo"}">
      <h3>${isAr ? "قص الصورة الشخصية" : "Crop profile photo"}</h3>
      <p class="crop-hint">${isAr ? "اسحب الصورة وقرّب/بعّد لحد ما الوجه يبقى في منتصف الدائرة — هتظهر كده نظيفة في الشريط والقائمة." : "Drag and zoom until the face sits in the circle — it will look clean in the navbar and menu."}</p>
      <div class="crop-stage">
        <div class="crop-frame">
          <img id="cropImg" src="${dataUrl}" alt="" draggable="false" />
        </div>
      </div>
      <div class="crop-zoom-row">
        <label for="cropZoom">${isAr ? "التكبير" : "Zoom"}</label>
        <input type="range" id="cropZoom" min="1" max="3" step="0.01" value="1" aria-label="${isAr ? "تكبير الصورة" : "Zoom image"}" />
      </div>
      <div class="crop-actions">
        <button type="button" class="btn btn-ghost" id="cropCancel">${isAr ? "إلغاء" : "Cancel"}</button>
        <button type="button" class="btn btn-primary" id="cropApply">${isAr ? "حفظ القص" : "Save crop"}</button>
      </div>
    </div>`;
  document.body.appendChild(overlay);
  document.body.style.overflow = "hidden";

  const img = overlay.querySelector("#cropImg");
  const zoom = overlay.querySelector("#cropZoom");
  let scale = 1,
    tx = 0,
    ty = 0,
    dragging = false,
    sx = 0,
    sy = 0,
    ox = 0,
    oy = 0;

  const applyTransform = () => {
    img.style.transform = `translate(-50%, -50%) translate(${tx}px, ${ty}px) scale(${scale})`;
  };
  img.onload = () => {
    // fit cover
    const frame = overlay.querySelector(".crop-frame");
    const fw = frame.clientWidth,
      fh = frame.clientHeight;
    const iw = img.naturalWidth,
      ih = img.naturalHeight;
    const base = Math.max(fw / iw, fh / ih);
    img.dataset.base = String(base);
    img.style.width = iw * base + "px";
    img.style.height = ih * base + "px";
    scale = 1;
    tx = 0;
    ty = 0;
    applyTransform();
  };
  zoom.oninput = () => {
    scale = Number(zoom.value) || 1;
    applyTransform();
  };
  const onDown = (e) => {
    dragging = true;
    const p = e.touches ? e.touches[0] : e;
    sx = p.clientX;
    sy = p.clientY;
    ox = tx;
    oy = ty;
  };
  const onMove = (e) => {
    if (!dragging) return;
    const p = e.touches ? e.touches[0] : e;
    tx = ox + (p.clientX - sx);
    ty = oy + (p.clientY - sy);
    applyTransform();
  };
  const onUp = () => {
    dragging = false;
  };
  img.addEventListener("mousedown", onDown);
  img.addEventListener("touchstart", onDown, { passive: true });
  window.addEventListener("mousemove", onMove);
  window.addEventListener("touchmove", onMove, { passive: true });
  window.addEventListener("mouseup", onUp);
  window.addEventListener("touchend", onUp);

  const cleanup = () => {
    window.removeEventListener("mousemove", onMove);
    window.removeEventListener("touchmove", onMove);
    window.removeEventListener("mouseup", onUp);
    window.removeEventListener("touchend", onUp);
    overlay.remove();
    if (
      !$$(".modal-overlay.open,.dialog-overlay.open,#avatarCropOverlay").length
    )
      document.body.style.overflow = "";
  };
  overlay.querySelector("#cropCancel").onclick = cleanup;
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) cleanup();
  });
  overlay.querySelector("#cropApply").onclick = () => {
    const frame = overlay.querySelector(".crop-frame");
    const size = 256;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    const base = Number(img.dataset.base || 1);
    const fw = frame.clientWidth,
      fh = frame.clientHeight;
    // Source rect in natural image coords corresponding to the visible circle/square
    const displayW = img.naturalWidth * base * scale;
    const displayH = img.naturalHeight * base * scale;
    const left = fw / 2 - displayW / 2 + tx;
    const top = fh / 2 - displayH / 2 + ty;
    // Map frame (0,0)-(fw,fh) to natural image
    const sx0 = -left / (base * scale);
    const sy0 = -top / (base * scale);
    const sw = fw / (base * scale);
    const sh = fh / (base * scale);
    ctx.fillStyle = "#142024";
    ctx.fillRect(0, 0, size, size);
    try {
      ctx.drawImage(img, sx0, sy0, sw, sh, 0, 0, size, size);
    } catch (err) {
      // fallback: full image
      ctx.drawImage(img, 0, 0, size, size);
    }
    pendingProfileAvatar = canvas.toDataURL("image/jpeg", 0.9);
    const prev = $("#profileAvatarPreview") || $(".profile-avatar-lg");
    if (prev) {
      prev.innerHTML = `<img src="${pendingProfileAvatar}" alt="" />`;
    }
    const signupPrev = $("#avatarImg");
    if (signupPrev) {
      signupPrev.src = pendingProfileAvatar;
      const wrap = $("#avatarPreview");
      if (wrap) wrap.style.display = "block";
    }
    cleanup();
    toast(
      isAr
        ? "تم قص الصورة — احفظ الملف الشخصي لتأكيدها"
        : "Cropped — save profile to confirm",
      "success",
    );
  };
}

function updateFileUploadLabel(input) {
  const lab = document.getElementById("profAvatarLabel");
  if (!lab) return;
  const isAr = state.lang === "ar";
  const name = input?.files?.[0]?.name;
  lab.textContent = name ? name : isAr ? "اختيار صورة" : "Choose photo";
}
function previewProfileAvatar(e) {
  const file = e.target.files?.[0];
  if (!file) return;
  if (!file.type.startsWith("image/")) {
    toast(
      state.lang === "ar" ? "اختَر صورة فقط" : "Please choose an image file",
      "error",
    );
    return;
  }
  const reader = new FileReader();
  reader.onload = (ev) => openAvatarCropper(ev.target.result);
  reader.readAsDataURL(file);
}

async function saveProfile() {
  const isAr = state.lang === "ar";
  if (!state.user) return;
  const saveButton = document.querySelector(
    '#dashMain button[onclick="saveProfile()"]',
  );
  if (saveButton) {
    saveButton.disabled = true;
    saveButton.dataset.oldText = saveButton.textContent;
    saveButton.textContent = isAr ? "جارٍ الحفظ..." : "Saving...";
  }
  try {
    if (!window.AneesCloud?.updateProfile)
      throw new Error("Cloud profile storage is unavailable");
    const nextEmail = ($("#profEmail")?.value || state.user.email || "")
      .trim()
      .toLowerCase();
    const nextPhone = ($("#profPhone")?.value || "").trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(nextEmail))
      throw new Error(
        isAr
          ? "البريد الإلكتروني غير صحيح"
          : "Please enter a valid email address",
      );
    if (nextPhone.replace(/[\s()+-]/g, "").length < 8)
      throw new Error(
        isAr ? "رقم الهاتف مطلوب وصحيح" : "Please enter a valid phone number",
      );
    const nextUser = {
      ...state.user,
      name: $("#profName")?.value.trim() || state.user.name,
      email: nextEmail,
      phone: nextPhone,
      experienceYears: parseInt($("#profExp")?.value, 10) || 0,
      specialty: $("#profSpec")?.value.trim() || "",
      school: $("#profSchool")?.value.trim() || "",
    };
    const avatarToUpload =
      pendingProfileAvatar ||
      (typeof nextUser.avatar === "string" &&
      nextUser.avatar.startsWith("data:image/")
        ? nextUser.avatar
        : null);
    if (avatarToUpload) {
      if (!window.AneesCloud.uploadAvatar)
        throw new Error("Cloud avatar storage is unavailable");
      nextUser.avatar = await window.AneesCloud.uploadAvatar(avatarToUpload);
    }
    const savedAuthUser = await window.AneesCloud.updateProfile({
      fullName: nextUser.name,
      email: nextUser.email,
      phone: nextUser.phone,
      avatarUrl: nextUser.avatar || null,
      experienceYears: nextUser.experienceYears,
      specialty: nextUser.specialty,
      school: nextUser.school,
    });

    // Auth may require confirmation before changing email; reflect the authoritative email.
    if (savedAuthUser?.email) nextUser.email = savedAuthUser.email;
    // Commit to the current UI only after Supabase confirms the profile update.
    state.user = nextUser;
    pendingProfileAvatar = null;
    const idx = state.teachers.findIndex((t) => t.id === state.user.id);
    if (idx >= 0)
      state.teachers[idx] = { ...state.teachers[idx], ...state.user };
    else state.teachers.push(state.user);
    LS.set("anees.user", state.user);
    LS.set("anees.teachers", state.teachers);
    toast(
      isAr
        ? "تم حفظ التغييرات والصورة على حسابك"
        : "Profile and photo saved to your account",
      "success",
    );
    renderDashboard();
    renderNavbar();
  } catch (error) {
    console.error("[Anees profile save]", error);
    toast(
      isAr
        ? `تعذر حفظ الملف الشخصي: ${error?.message || "خطأ غير معروف"}`
        : `Could not save profile: ${error?.message || "Unknown error"}`,
      "error",
    );
  } finally {
    if (saveButton) {
      saveButton.disabled = false;
      if (saveButton.dataset.oldText)
        saveButton.textContent = saveButton.dataset.oldText;
    }
  }
}

function backToClasses() {
  state.currentClass = null;
  state.dashView = "classes";
  state.studentSearch = "";
  state.studentSort = "az";
  renderDashboard();
}
function openClass(id) {
  state.currentClass = id;
  state.dashView = "classes";
  state.studentSearch = "";
  state.studentSort = "az";
  renderDashboard();
  closeDashDrawer();
}
function openClassStatus(id) {
  state.currentClass = id;
  state.dashView = "classStatus";
  renderDashboard();
  closeDashDrawer();
}

/* ============================================================
   ADD CLASS (اسم + مدرسة + مرحلة عمرية)
   ============================================================ */
function openClassForm(editId) {
  const isAr = state.lang === "ar";
  const editing = editId
    ? teacherData().classes.find((c) => c.id === editId)
    : null;
  const box = $("#genericModalBody");
  box.classList.remove("lg");
  box.classList.add("md");
  box.innerHTML = `
    <div class="modal-body">
      <button type="button" class="modal-close" onclick="closeGenericModal()">${ico("x")}</button>
      <div class="modal-step"><span class="dot"></span> ${editing ? (isAr ? "تعديل" : "Edit") : isAr ? "جديد" : "New"}</div>
      <h2 style="font-size:1.3rem;margin-bottom:6px;">${editing ? (isAr ? "تعديل بيانات الفصل" : "Edit class") : isAr ? "إضافة فصل جديد" : "Add new class"}</h2>
      <p style="color:var(--text-muted);font-size:.88rem;margin-bottom:20px;">${isAr ? 'سمّي الفصل باسم يسهل عليك تمييزه لاحقًا، مثل "3/1 رياضيات".' : 'Name the class clearly, e.g. "3/1 Math".'}</p>
      <form onsubmit="event.preventDefault();saveClass('${editing ? editing.id : ""}');" novalidate>
        <div class="form-group" id="fg-class">
          <label for="newClassName">${isAr ? "اسم الفصل" : "Class name"}</label>
          <input id="newClassName" value="${esc(editing?.name || "")}" placeholder="${isAr ? "مثال: 3/1 رياضيات" : "e.g. 3/1 Math"}" autofocus />
          <div class="form-error">${ico("alert")} ${isAr ? "من فضلك اكتب اسم الفصل" : "Class name required"}</div>
        </div>
        <div class="form-group" id="fg-school">
          <label for="newClassSchool">${isAr ? "اسم المدرسة" : "School name"}</label>
          <input id="newClassSchool" value="${esc(editing?.schoolName || "")}" placeholder="${isAr ? "مدرسة النور" : "Al-Noor School"}" />
          <div class="form-error">${ico("alert")} ${isAr ? "اكتب اسم المدرسة" : "School name required"}</div>
        </div>
        <div class="form-group" id="fg-stage">
          <label for="newClassStage">${isAr ? "المرحلة العمرية" : "Age stage"}</label>
          <select id="newClassStage">
            <option value="">${isAr ? "اختر المرحلة" : "Select stage"}</option>
            ${Object.entries(AGE_STAGES)
              .map(
                ([k, v]) =>
                  `<option value="${k}" ${editing?.ageStage === k ? "selected" : ""}>${isAr ? v.ar : v.en}</option>`,
              )
              .join("")}
          </select>
          <div class="form-error">${ico("alert")} ${isAr ? "اختر المرحلة العمرية" : "Please select age stage"}</div>
        </div>
        <button class="btn btn-primary btn-lg btn-block" type="submit">${editing ? (isAr ? "حفظ التعديلات" : "Save changes") : isAr ? "حفظ الفصل" : "Save class"}</button>
      </form>
    </div>`;
  $("#genericModal").classList.add("open");
  setTimeout(() => enhanceCustomSelects($("#genericModalBody")), 0);
}

function closeGenericModal() {
  $("#genericModal").classList.remove("open");
  $("#genericModalBody").classList.remove("lg", "md");
}
$("#genericModal").addEventListener("click", (e) => {
  if (e.target.id === "genericModal") closeGenericModal();
});

// Prevent duplicate submissions even when users double-click or the network is slow.
let _classSaveInFlight = false;
let _studentSaveInFlight = false;
async function saveClass(editId) {
  if (_classSaveInFlight) return;
  _classSaveInFlight = true;
  const button = document.querySelector("#genericModalBody form button[type=submit]");
  const originalText = button?.textContent;
  if (button) { button.disabled = true; button.setAttribute("aria-busy", "true"); }
  try {
    await _saveClassInternal(editId);
  } finally {
    _classSaveInFlight = false;
    if (button?.isConnected) { button.disabled = false; button.removeAttribute("aria-busy"); if (originalText) button.textContent = originalText; }
  }
}

async function _saveClassInternal(editId) {
  const isAr = state.lang === "ar";
  const name = $("#newClassName").value.trim();
  const school = $("#newClassSchool").value.trim();
  const stage = $("#newClassStage").value;
  let ok = true;
  if (!name) {
    markField("fg-class", true);
    ok = false;
  } else markField("fg-class", false);
  if (!school) {
    markField("fg-school", true);
    ok = false;
  } else markField("fg-school", false);
  if (!stage) {
    markField("fg-stage", true);
    ok = false;
  } else markField("fg-stage", false);
  if (!ok) {
    toast(
      isAr
        ? "من فضلك أكمل الحقول المطلوبة"
        : "Please complete the required fields",
      "error",
    );
    return;
  }

  if (editId) {
    const cls = state.classes.find((c) => c.id === editId);
    if (cls) {
      const updated = { ...cls, name, schoolName: school, ageStage: stage };
      try {
        if (!window.AneesCloud?.upsertClass)
          throw new Error("Cloud storage is unavailable");
        await window.AneesCloud.upsertClass(updated);
        Object.assign(cls, updated);
        closeGenericModal();
        toast(isAr ? "تم تحديث الفصل" : "Class updated", "success");
        renderDashboard();
      } catch (error) {
        console.error("[upsertClass]", error);
        toast(
          isAr
            ? "فشل حفظ تعديلات الفصل. لم يتم تأكيد الحفظ."
            : "Could not save class changes. The save was not confirmed.",
          "error",
        );
      }
      return;
    }
  }

  const newClassId = "c_" + (globalThis.crypto?.randomUUID?.() || (Date.now().toString(36) + "_" + Math.random().toString(36).slice(2)));
  const newCls = {
    id: newClassId,
    teacherId: state.user.id,
    name,
    schoolName: school,
    ageStage: stage,
    createdAt: Date.now(),
  };
  try {
    if (!window.AneesCloud?.upsertClass)
      throw new Error("Cloud storage is unavailable");
    await window.AneesCloud.upsertClass(newCls);
  } catch (error) {
    console.error("[upsertClass]", error);
    toast(
      isAr
        ? "فشل حفظ الفصل في قاعدة البيانات. لم تتم إضافته."
        : "Could not save class to the database. It was not added.",
      "error",
    );
    return;
  }
  state.classes.push(newCls);
  closeGenericModal();
  addNotification({
    type: "class",
    title: isAr ? "تم إضافة فصل" : "Class added",
    body: isAr
      ? `تم إضافة فصل ${name}${school ? " — " + school : ""}`
      : `Class ${name} added${school ? " — " + school : ""}`,
    meta: { classId: newClassId },
  });
  toast(isAr ? "تم إضافة الفصل بنجاح" : "Class added successfully", "success");
  renderDashboard();
}

function deleteClass(id) {
  const isAr = state.lang === "ar";
  const { students } = teacherData();
  const cnt = students.filter((s) => s.classId === id).length;
  dialog({
    title: isAr ? "تأكيد الحذف" : "Confirm delete",
    msg:
      cnt > 0
        ? isAr
          ? `هيتم حذف الفصل مع ${cnt} طالب وكل تقاريرهم. متأكد؟`
          : `This will delete the class with ${cnt} students and all their reports. Continue?`
        : isAr
          ? "هيتم حذف الفصل نهائيًا. متأكد؟"
          : "This will permanently delete the class. Continue?",
    type: "error",
    confirmText: isAr ? "حذف" : "Delete",
    cancelText: isAr ? "إلغاء" : "Cancel",
    onConfirm: async () => {
      try {
        if (!window.AneesCloud?.deleteClass)
          throw new Error("Cloud storage is unavailable");
        await window.AneesCloud.deleteClass(id);
        const ids = state.students
          .filter((s) => s.classId === id)
          .map((s) => s.id);
        state.classes = state.classes.filter((c) => c.id !== id);
        state.students = state.students.filter((s) => s.classId !== id);
        state.reports = state.reports.filter((r) => !ids.includes(r.studentId));
        if (state.currentClass === id) state.currentClass = null;
        toast(isAr ? "تم حذف الفصل" : "Class deleted", "success");
        renderDashboard();
      } catch (err) {
        console.error("[deleteClass]", err);
        toast(
          isAr
            ? "فشل حذف الفصل من قاعدة البيانات"
            : "Failed to delete class from the database",
          "error",
        );
      }
    },
  });
}

/* ============================================================
   ADD STUDENT
   ============================================================ */
function openStudentForm(classId, editId) {
  const isAr = state.lang === "ar";
  const editing = editId
    ? teacherData().students.find((s) => s.id === editId)
    : null;
  const box = $("#genericModalBody");
  box.classList.remove("lg");
  box.classList.add("md");
  box.innerHTML = `
    <div class="modal-body">
      <button type="button" class="modal-close" onclick="closeGenericModal()">${ico("x")}</button>
      <div class="modal-step"><span class="dot"></span> ${editing ? (isAr ? "تعديل" : "Edit") : isAr ? "طالب جديد" : "New student"}</div>
      <h2 style="font-size:1.3rem;margin-bottom:6px;">${editing ? (isAr ? "تعديل بيانات الطالب" : "Edit student") : isAr ? "إضافة طالب" : "Add student"}</h2>
      <p style="color:var(--text-muted);font-size:.88rem;margin-bottom:20px;">${isAr ? "هتحتاج بيانات ولي الأمر عشان إرسال التقارير." : "Parent details are needed to send reports."}</p>
      <form onsubmit="event.preventDefault();saveStudent('${classId || editing?.classId || ""}','${editing ? editing.id : ""}');" novalidate>
        <div class="form-group" id="fg-sname">
          <label for="sfName">${isAr ? "اسم الطالب" : "Student name"}</label>
          <input id="sfName" value="${esc(editing?.name || "")}" placeholder="${isAr ? "اسم الطالب بالكامل" : "Full student name"}" autofocus />
          <div class="form-error">${ico("alert")} ${isAr ? "اسم الطالب مطلوب" : "Student name required"}</div>
        </div>
        <div class="pf-grid" style="margin-bottom:0;">
          <div class="form-group" id="fg-parent">
            <label for="sfParent">${isAr ? "اسم ولي الأمر" : "Parent name"}</label>
            <input id="sfParent" value="${esc(editing?.parentName || "")}" placeholder="${isAr ? "اسم ولي الأمر" : "Parent name"}" />
            <div class="form-error">${ico("alert")} ${isAr ? "اسم ولي الأمر مطلوب" : "Parent name required"}</div>
          </div>
          <div class="form-group" id="fg-phone">
            <label for="sfPhone">${isAr ? "هاتف ولي الأمر" : "Parent phone"}</label>
            <input id="sfPhone" value="${esc(editing?.parentPhone || "")}" placeholder="01xxxxxxxxx" inputmode="tel" dir="ltr" />
            <div class="form-error">${ico("alert")} ${isAr ? "رقم غير صحيح" : "Invalid phone"}</div>
          </div>
        </div>
        <div class="form-group" id="fg-pemail">
          <label for="sfPEmail">${isAr ? "إيميل ولي الأمر" : "Parent email"}</label>
          <input id="sfPEmail" type="email" dir="ltr" value="${esc(editing?.parentEmail || "")}" placeholder="parent@example.com" />
          <div class="form-error">${ico("alert")} ${isAr ? "إيميل غير صحيح" : "Invalid email"}</div>
        </div>
        <button class="btn btn-primary btn-lg btn-block" type="submit">${editing ? (isAr ? "حفظ التعديلات" : "Save changes") : isAr ? "حفظ الطالب" : "Save student"}</button>
      </form>
    </div>`;
  $("#genericModal").classList.add("open");
  setTimeout(() => enhanceCustomSelects($("#genericModalBody")), 0);
}

async function _saveStudentInternal(classId, editId) {
  const isAr = state.lang === "ar";
  const name = $("#sfName").value.trim();
  const parent = $("#sfParent").value.trim();
  const phone = $("#sfPhone")
    .value.trim()
    .replace(/[\s\-()]/g, "");
  const pemail = $("#sfPEmail").value.trim();
  let ok = true;
  markField("fg-sname", name.length < 2);
  if (name.length < 2) ok = false;
  markField("fg-parent", parent.length < 2);
  if (parent.length < 2) ok = false;
  const phoneOk =
    /^(\+20|0020|0)?1[0125]\d{8}$/.test(phone) ||
    /^[0-9+\s\-()]{8,}$/.test(phone);
  markField("fg-phone", !phoneOk);
  if (!phoneOk) ok = false;
  const pemailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(pemail);
  markField("fg-pemail", !pemailOk);
  if (!pemailOk) ok = false;
  if (!ok) {
    toast(
      isAr
        ? "من فضلك أكمل الحقول المطلوبة"
        : "Please complete the required fields",
      "error",
    );
    return;
  }

  if (editId) {
    const st = state.students.find((s) => s.id === editId);
    if (st) {
      const updated = {
        ...st,
        name,
        parentName: parent,
        parentPhone: phone,
        parentEmail: pemail,
      };
      try {
        if (!window.AneesCloud?.upsertStudent)
          throw new Error("Cloud storage is unavailable");
        await window.AneesCloud.upsertStudent(updated);
        Object.assign(st, updated);
        closeGenericModal();
        toast(isAr ? "تم تحديث بيانات الطالب" : "Student updated", "success");
        renderDashboard();
      } catch (error) {
        console.error("[upsertStudent]", error);
        toast(
          isAr
            ? "فشل حفظ تعديلات الطالب. لم يتم تأكيد الحفظ."
            : "Could not save student changes. The save was not confirmed.",
          "error",
        );
      }
      return;
    }
  }

  const newStuId = "s_" + (globalThis.crypto?.randomUUID?.() || (Date.now().toString(36) + "_" + Math.random().toString(36).slice(2)));
  const newStu = {
    id: newStuId,
    teacherId: state.user.id,
    classId,
    name,
    parentName: parent,
    parentPhone: phone,
    parentEmail: pemail,
    createdAt: Date.now(),
  };
  try {
    if (!window.AneesCloud?.upsertStudent)
      throw new Error("Cloud storage is unavailable");
    await window.AneesCloud.upsertStudent(newStu);
  } catch (error) {
    console.error("[upsertStudent]", error);
    toast(
      isAr
        ? "فشل حفظ الطالب في قاعدة البيانات. لم تتم إضافته."
        : "Could not save student to the database. Student was not added.",
      "error",
    );
    return;
  }
  state.students.push(newStu);
  addNotification({
    type: "student",
    title: state.lang === "ar" ? "تم إضافة طالب" : "Student added",
    body:
      state.lang === "ar" ? `تم إضافة الطالب ${name}` : `Student ${name} added`,
    meta: { studentId: newStuId, classId },
  });
  closeGenericModal();
  toast(
    isAr ? "تم إضافة الطالب بنجاح" : "Student added successfully",
    "success",
  );
  renderDashboard();
}

async function saveStudent(classId, editId) {
  if (_studentSaveInFlight) return;
  _studentSaveInFlight = true;
  const button = document.querySelector("#genericModalBody form button[type=submit]");
  const originalText = button?.textContent;
  if (button) { button.disabled = true; button.setAttribute("aria-busy", "true"); }
  try {
    await _saveStudentInternal(classId, editId);
  } finally {
    _studentSaveInFlight = false;
    if (button?.isConnected) { button.disabled = false; button.removeAttribute("aria-busy"); if (originalText) button.textContent = originalText; }
  }
}

/* ============================================================
   IMPORT STUDENTS FROM CSV / EXCEL
   Columns: student name | parent name | parent phone | parent email
   ============================================================ */
let _importRows = [];
let _importClassId = null;

function downloadStudentTemplate() {
  const isAr = state.lang === "ar";
  const header = isAr
    ? "اسم الطالب,اسم ولي الأمر,هاتف ولي الأمر,إيميل ولي الأمر"
    : "Student name,Parent name,Parent phone,Parent email";
  const sample = isAr
    ? "أحمد محمد,محمد أحمد,01012345678,parent@example.com"
    : "Ahmed Mohamed,Mohamed Ahmed,01012345678,parent@example.com";
  const bom = "\uFEFF";
  const blob = new Blob([bom + header + "\n" + sample + "\n"], {
    type: "text/csv;charset=utf-8;",
  });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = isAr ? "قالب-طلاب-أنيس.csv" : "anees-students-template.csv";
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 1500);
}

function normalizeImportHeader(h) {
  return String(h || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/[أإآ]/g, "ا")
    .replace(/ة/g, "ه");
}

function mapImportColumns(headers) {
  const idx = { name: -1, parent: -1, phone: -1, email: -1 };
  headers.forEach((h, i) => {
    const n = normalizeImportHeader(h);
    if (
      n.includes("طالب") ||
      n.includes("student") ||
      n === "name" ||
      n === "اسم"
    ) {
      if (idx.name < 0) idx.name = i;
    }
    if (
      (n.includes("ولي") || n.includes("parent")) &&
      (n.includes("اسم") ||
        n.includes("name") ||
        n.includes("ولي الامر") ||
        n.includes("ولي الأمر"))
    ) {
      if (idx.parent < 0) idx.parent = i;
    } else if (
      n === "parent name" ||
      n === "اسم ولي الامر" ||
      n === "اسم ولي الأمر"
    ) {
      if (idx.parent < 0) idx.parent = i;
    }
    if (
      n.includes("هاتف") ||
      n.includes("موبايل") ||
      n.includes("phone") ||
      n.includes("mobile") ||
      n.includes("tel")
    ) {
      if (idx.phone < 0) idx.phone = i;
    }
    if (
      n.includes("ايميل") ||
      n.includes("إيميل") ||
      n.includes("بريد") ||
      n.includes("email") ||
      n.includes("mail")
    ) {
      if (idx.email < 0) idx.email = i;
    }
  });
  // fallback positional: 0 name, 1 parent, 2 phone, 3 email
  if (idx.name < 0) idx.name = 0;
  if (idx.parent < 0) idx.parent = 1;
  if (idx.phone < 0) idx.phone = 2;
  if (idx.email < 0) idx.email = 3;
  return idx;
}

function validateImportRow(row) {
  const name = String(row.name || "").trim();
  const parent = String(row.parent || "").trim();
  const phone = String(row.phone || "")
    .trim()
    .replace(/[\s\-()]/g, "");
  const email = String(row.email || "").trim();
  const errors = [];
  if (name.length < 2) errors.push("name");
  if (parent.length < 2) errors.push("parent");
  const phoneOk =
    /^(\+20|0020|0)?1[0125]\d{8}$/.test(phone) ||
    /^[0-9+\s\-()]{8,}$/.test(phone);
  if (!phoneOk) errors.push("phone");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push("email");
  return {
    name,
    parentName: parent,
    parentPhone: phone,
    parentEmail: email,
    ok: errors.length === 0,
    errors,
  };
}

function parseCsvText(text) {
  const rows = [];
  let cur = "";
  let row = [];
  let inQ = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    const n = text[i + 1];
    if (inQ) {
      if (c === '"' && n === '"') {
        cur += '"';
        i++;
      } else if (c === '"') inQ = false;
      else cur += c;
    } else {
      if (c === '"') inQ = true;
      else if (c === "," || c === ";" || c === "\t") {
        row.push(cur);
        cur = "";
      } else if (c === "\n") {
        row.push(cur);
        rows.push(row);
        row = [];
        cur = "";
      } else if (c === "\r") {
        /* skip */
      } else cur += c;
    }
  }
  if (cur.length || row.length) {
    row.push(cur);
    rows.push(row);
  }
  return rows.filter((r) => r.some((c) => String(c).trim() !== ""));
}

async function loadXlsxLib() {
  if (window.XLSX) return window.XLSX;
  await new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = "https://cdn.sheetjs.com/xlsx-0.20.3/package/dist/xlsx.full.min.js";
    s.onload = resolve;
    s.onerror = () => reject(new Error("xlsx load failed"));
    document.head.appendChild(s);
  });
  return window.XLSX;
}

async function parseStudentImportFile(file) {
  const name = (file.name || "").toLowerCase();
  if (name.endsWith(".csv") || name.endsWith(".txt")) {
    const text = await file.text();
    return parseCsvText(text.replace(/^\uFEFF/, ""));
  }
  if (name.endsWith(".xlsx") || name.endsWith(".xls")) {
    const XLSX = await loadXlsxLib();
    const buf = await file.arrayBuffer();
    const wb = XLSX.read(buf, { type: "array" });
    const sheet = wb.Sheets[wb.SheetNames[0]];
    const data = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: "" });
    return data.filter(
      (r) => Array.isArray(r) && r.some((c) => String(c).trim() !== ""),
    );
  }
  throw new Error("unsupported");
}

function buildImportPreviewRows(matrix) {
  if (!matrix.length) return [];
  const headers = matrix[0].map((h) => String(h ?? ""));
  const map = mapImportColumns(headers);
  // detect if first row is header or data
  const firstMapped = validateImportRow({
    name: matrix[0][map.name],
    parent: matrix[0][map.parent],
    phone: matrix[0][map.phone],
    email: matrix[0][map.email],
  });
  const headerLooksLikeHeader =
    /طالب|student|name|اسم|ولي|parent|هاتف|phone|ايميل|email/i.test(
      headers.join(" "),
    );
  const start = headerLooksLikeHeader ? 1 : firstMapped.ok ? 0 : 1;
  const out = [];
  for (let i = start; i < matrix.length; i++) {
    const r = matrix[i];
    const raw = {
      name: r[map.name],
      parent: r[map.parent],
      phone: r[map.phone],
      email: r[map.email],
    };
    if (
      !String(raw.name || "").trim() &&
      !String(raw.parent || "").trim() &&
      !String(raw.email || "").trim()
    )
      continue;
    out.push(validateImportRow(raw));
  }
  return out;
}

function openStudentImport(classId) {
  const isAr = state.lang === "ar";
  _importClassId = classId;
  _importRows = [];
  const box = $("#genericModalBody");
  box.classList.remove("md");
  box.classList.add("lg");
  box.innerHTML = `
    <div class="modal-body import-modal">
      <button type="button" class="modal-close" onclick="closeGenericModal()">${ico("x")}</button>
      <div class="modal-step"><span class="dot"></span> ${isAr ? "استيراد طلاب" : "Import students"}</div>
      <h2 style="font-size:1.3rem;margin-bottom:8px;">${isAr ? "استيراد طلاب للفصل" : "Import students to class"}</h2>
      <p style="color:var(--text-muted);font-size:.9rem;margin-bottom:18px;">${
        isAr
          ? "خطوتين بسيطتين: حمّل القالب واملأه، وبعدين ارفع الملف هنا. الطلاب الصح هيتضافوا مباشرة للفصل."
          : "Two simple steps: download and fill the template, then upload it here. Valid students are added directly to this class."
      }</p>

      <div class="import-step-card">
        <div class="import-step-num">1</div>
        <div class="import-step-body">
          <h3>${isAr ? "حمّل القالب واملأه" : "Download & fill the template"}</h3>
          <p>${
            isAr
              ? "نزّل ملف القالب، واملأ كل صف ببيانات طالب. خلّي الأعمدة بنفس الترتيب ده:"
              : "Download the template and fill one row per student. Keep columns in this order:"
          }</p>
          <div class="import-cols-hint" dir="rtl">
            <span>اسم الطالب</span>
            <span>اسم ولي الأمر</span>
            <span>هاتف ولي الأمر</span>
            <span>إيميل ولي الأمر</span>
          </div>
          <button type="button" class="btn btn-soft" onclick="downloadStudentTemplate()">${ico("book")} ${isAr ? "تحميل قالب CSV" : "Download CSV template"}</button>
        </div>
      </div>

      <div class="import-step-card">
        <div class="import-step-num">2</div>
        <div class="import-step-body">
          <h3>${isAr ? "ارفع الملف بعد ما تخلّصه" : "Upload the filled file"}</h3>
          <p class="import-upload-hint">${
            isAr
              ? "⚠️ مهم: لازم خلايا الشيت تكون مرتبة كالتالي من اليمين لليسار (أو من اليسار لليمين في الإنجليزي): <strong>اسم الطالب ← اسم ولي الأمر ← هاتف ولي الأمر ← إيميل ولي الأمر</strong>. أي صف ناقص أو برقم/إيميل غلط هيظهر في المعاينة ومش هيتضاف."
              : "⚠️ Important: sheet columns must be ordered as: <strong>Student name → Parent name → Parent phone → Parent email</strong>. Incomplete or invalid rows will show in the preview and will not be added."
          }</p>
          <label class="btn btn-primary file-btn">
            ${ico("folder")} ${isAr ? "رفع ملف Excel / CSV" : "Upload Excel / CSV"}
            <input type="file" id="importFileInput" accept=".csv,.xlsx,.xls,text/csv,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" hidden />
          </label>
          <div id="importFileName" class="import-file-name"></div>
        </div>
      </div>

      <div id="importPreviewHost" class="import-preview-host">
        <div class="import-empty">${isAr ? "بعد رفع الملف هتظهر هنا معاينة الطلاب قبل الإضافة." : "After upload, a preview of students will appear here before adding."}</div>
      </div>
      <div class="import-footer">
        <button type="button" class="btn btn-ghost" onclick="closeGenericModal()">${isAr ? "إلغاء" : "Cancel"}</button>
        <button type="button" class="btn btn-primary" id="importConfirmBtn" disabled onclick="confirmStudentImport()">${isAr ? "تأكيد إضافة الطلاب" : "Confirm add students"}</button>
      </div>
    </div>`;
  $("#genericModal").classList.add("open");
  const input = $("#importFileInput");
  if (input) {
    input.onchange = async (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const nameEl = $("#importFileName");
      if (nameEl)
        nameEl.textContent = (isAr ? "الملف: " : "File: ") + file.name;
      try {
        const matrix = await parseStudentImportFile(file);
        _importRows = buildImportPreviewRows(matrix);
        renderImportPreview();
      } catch (err) {
        console.error(err);
        toast(
          isAr
            ? "تعذّر قراءة الملف. جرّب CSV أو Excel (.xlsx)"
            : "Could not read the file. Try CSV or Excel (.xlsx)",
          "error",
        );
      }
    };
  }
}

function renderImportPreview() {
  const isAr = state.lang === "ar";
  const host = $("#importPreviewHost");
  const btn = $("#importConfirmBtn");
  if (!host) return;
  if (!_importRows.length) {
    host.innerHTML = `<div class="import-empty">${isAr ? "الملف فاضي أو مفيش صفوف صالحة." : "File is empty or has no valid rows."}</div>`;
    if (btn) btn.disabled = true;
    return;
  }
  const okCount = _importRows.filter((r) => r.ok).length;
  const badCount = _importRows.length - okCount;
  if (btn) btn.disabled = okCount === 0;
  host.innerHTML = `
    <div class="import-summary">
      <span class="ok">${okCount} ${isAr ? "صف جاهز" : "ready"}</span>
      ${badCount ? `<span class="bad">${badCount} ${isAr ? "فيه مشكلة" : "with issues"}</span>` : ""}
    </div>
    <div class="import-table-wrap">
      <table class="import-table">
        <thead>
          <tr>
            <th>#</th>
            <th>${isAr ? "الطالب" : "Student"}</th>
            <th>${isAr ? "ولي الأمر" : "Parent"}</th>
            <th>${isAr ? "الهاتف" : "Phone"}</th>
            <th>${isAr ? "الإيميل" : "Email"}</th>
            <th>${isAr ? "الحالة" : "Status"}</th>
          </tr>
        </thead>
        <tbody>
          ${_importRows
            .map(
              (r, i) => `<tr class="${r.ok ? "ok" : "bad"}">
              <td>${i + 1}</td>
              <td>${esc(r.name || "—")}</td>
              <td>${esc(r.parentName || "—")}</td>
              <td dir="ltr">${esc(r.parentPhone || "—")}</td>
              <td dir="ltr">${esc(r.parentEmail || "—")}</td>
              <td>${r.ok ? (isAr ? "جاهز" : "OK") : isAr ? "Incomplete" : "Invalid"}</td>
            </tr>`,
            )
            .join("")}
        </tbody>
      </table>
    </div>
    <p class="import-note">${isAr ? "الصفوف الجاهزة فقط هتتضاف للفصل. الصفوف الناقصة هتتساب." : "Only valid rows will be added. Invalid rows are skipped."}</p>`;
}

async function confirmStudentImport() {
  const isAr = state.lang === "ar";
  const classId = _importClassId;
  if (!classId) return;
  const valid = _importRows.filter((r) => r.ok);
  if (!valid.length) {
    toast(
      isAr ? "مفيش صفوف صالحة للإضافة" : "No valid rows to import",
      "error",
    );
    return;
  }
  const existing = state.students.filter((s) => s.classId === classId);
  let added = 0;
  let skipped = 0;
  let failed = 0;
  const now = Date.now();
  for (let i = 0; i < valid.length; i += 1) {
    const r = valid[i];
    const dup = existing.some(
      (s) =>
        (s.parentEmail || "").toLowerCase() === r.parentEmail.toLowerCase() &&
        (s.name || "").trim().toLowerCase() === r.name.toLowerCase(),
    );
    if (dup) {
      skipped += 1;
      continue;
    }
    const id =
      "s_" + now + "_" + i + "_" + Math.random().toString(36).slice(2, 6);
    const stu = {
      id,
      teacherId: state.user.id,
      classId,
      name: r.name,
      parentName: r.parentName,
      parentPhone: r.parentPhone,
      parentEmail: r.parentEmail,
      createdAt: now + i,
    };
    try {
      if (!window.AneesCloud?.upsertStudent)
        throw new Error("Cloud storage is unavailable");
      await window.AneesCloud.upsertStudent(stu);
      state.students.push(stu);
      existing.push(stu);
      added += 1;
    } catch (error) {
      failed += 1;
      console.error("[import upsertStudent]", error);
    }
  }
  if (added) {
    addNotification({
      type: "student",
      title: isAr ? "استيراد طلاب" : "Students imported",
      body: isAr
        ? `تم إضافة ${added} طالب للفصل`
        : `${added} students added to the class`,
      meta: { classId, added },
    });
  }
  closeGenericModal();
  _importRows = [];
  _importClassId = null;
  toast(
    isAr
      ? `تم حفظ ${added} طالب في قاعدة البيانات${skipped ? `، وتخطي ${skipped} مكرر` : ""}${failed ? `، وفشل حفظ ${failed}` : ""}`
      : `Saved ${added} student(s) to the database${skipped ? `, skipped ${skipped} duplicates` : ""}${failed ? `, failed ${failed}` : ""}`,
    failed ? (added ? "warn" : "error") : added ? "success" : "info",
  );
  renderDashboard();
}

function deleteStudent(id) {
  const isAr = state.lang === "ar";
  dialog({
    title: isAr ? "تأكيد الحذف" : "Confirm delete",
    msg: isAr
      ? "هيتم حذف الطالب وكل التقارير المرتبطة بيه. متأكد؟"
      : "This will delete the student and all related reports. Continue?",
    type: "error",
    confirmText: isAr ? "حذف" : "Delete",
    cancelText: isAr ? "إلغاء" : "Cancel",
    onConfirm: async () => {
      try {
        if (!window.AneesCloud?.deleteStudent)
          throw new Error("Cloud storage is unavailable");
        await window.AneesCloud.deleteStudent(id);
        state.students = state.students.filter((s) => s.id !== id);
        state.reports = state.reports.filter((r) => r.studentId !== id);
        toast(isAr ? "تم حذف الطالب" : "Student deleted", "success");
        closeGenericModal();
        renderDashboard();
      } catch (err) {
        console.error("[deleteStudent]", err);
        toast(
          isAr
            ? "فشل حذف الطالب من قاعدة البيانات"
            : "Failed to delete student from the database",
          "error",
        );
      }
    },
  });
}

/* ============================================================
   STUDENT DETAIL + DAILY ASSESSMENT (Radio scales)
   ============================================================ */
function getWeekStart(date) {
  const d = new Date(date);
  const day = d.getDay();
  const diff = (day + 1) % 7;
  d.setDate(d.getDate() - diff);
  d.setHours(0, 0, 0, 0);
  return d;
}
function getWeekDays(weekStart) {
  const days = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date(weekStart);
    d.setDate(weekStart.getDate() + i);
    days.push(d);
  }
  return days;
}
function getReportsForWeek(studentId, weekStart) {
  const days = getWeekDays(weekStart);
  return days.map((d) => {
    const dayStart = d.getTime();
    const dayEnd = dayStart + 24 * 60 * 60 * 1000;
    const reports = state.reports.filter(
      (r) => r.studentId === studentId && r.date >= dayStart && r.date < dayEnd,
    );
    return { date: d, reports };
  });
}
function formatWeekRange(weekStart) {
  const end = new Date(weekStart);
  end.setDate(end.getDate() + 6);
  return `${weekStart.getDate()}/${weekStart.getMonth() + 1} - ${end.getDate()}/${end.getMonth() + 1}`;
}

/* Teacher assessment uses the same 20 items / 5 domains as the parent form (0–4 frequency) */
const BEHAVIOR_DOMAINS = {
  activity: {
    ar: "النشاط والمؤشرات الجسدية داخل الفصل",
    en: "Activity & physical indicators in class",
  },
  mood: { ar: "المزاج والدافعية المدرسية", en: "Mood & school motivation" },
  social: {
    ar: "التفاعل والتكيف الاجتماعي في المدرسة",
    en: "Social interaction & adjustment at school",
  },
  attention: {
    ar: "الانتباه والتحصيل الدراسي",
    en: "Attention & academic performance",
  },
  stress: {
    ar: "إدارة الضغوط والانفعال المدرسية",
    en: "Managing school stress & emotions",
  },
};
const BEHAVIOR_SCALE = [
  { v: 0, ar: "أبدًا", en: "Never" },
  { v: 1, ar: "نادرًا", en: "Rarely" },
  { v: 2, ar: "أحيانًا", en: "Sometimes" },
  { v: 3, ar: "غالبًا", en: "Often" },
  { v: 4, ar: "دائمًا", en: "Always" },
];
const BEHAVIOR_QUESTIONS = [
  // البعد الأول: النشاط والمؤشرات الجسدية داخل الفصل
  {
    key: "s1",
    d: "activity",
    scale: 4,
    ar: "يبدو على التلميذ الخمول أو النعاس أو التثاؤب المتكرر أثناء الحصص الدراسية.",
    en: "The student appears lethargic or drowsy, or yawns repeatedly during lessons.",
  },
  {
    key: "s2",
    d: "activity",
    scale: 4,
    ar: "يبدو على التلميذ الإرهاق وضعف الطاقة أثناء المشاركة في الأنشطة الصفية أو البدنية.",
    en: "The student appears fatigued or low in energy while participating in classroom or physical activities.",
  },
  {
    key: "s3",
    d: "activity",
    scale: 4,
    ar: "يشكو التلميذ من أعراض جسدية متكررة (مثل الصداع، ألم البطن، أو الإجهاد) دون سبب عضوي واضح.",
    en: "The student repeatedly complains of physical symptoms (such as headaches, stomachaches, or fatigue) without an obvious physical cause.",
  },
  {
    key: "s4",
    d: "activity",
    scale: 4,
    ar: "يطلب التلميذ الذهاب للعيادة المدرسية أو الاستئذان من الوعكة الجسدية بشكل متكرر.",
    en: "The student frequently asks to visit the school clinic or to be excused because of physical discomfort.",
  },
  // البعد الثاني: المزاج والدافعية المدرسية
  {
    key: "m1",
    d: "mood",
    scale: 4,
    ar: "يبدو التلميذ حزينًا، واجمًا، أو منخفض المزاج داخل الفصل.",
    en: "The student appears sad, withdrawn, or low in mood in the classroom.",
  },
  {
    key: "m2",
    d: "mood",
    scale: 4,
    ar: "يفقد التلميذ الاهتمام بالمشاركة في الأنشطة المدرسية أو اللعب مع زملائه في الفناء.",
    en: "The student loses interest in school activities or playing with classmates in the playground.",
  },
  {
    key: "m3",
    d: "mood",
    scale: 4,
    ar: "يظهر التلميذ تقلبًا سريعًا في المزاج أو سرعة الانزعاج من أبسط الأسباب الصفية.",
    en: "The student shows rapid mood changes or becomes upset by minor classroom issues.",
  },
  {
    key: "m4",
    d: "mood",
    scale: 4,
    ar: "يبدو التلميذ فاقدًا للحماس والفضول العلمي مقارنة بمستواه المعتاد أو زملائه.",
    en: "The student appears to have less enthusiasm and curiosity for learning than usual or than classmates.",
  },
  // البعد الثالث: التفاعل والتكيف الاجتماعي في المدرسة
  {
    key: "c1",
    d: "social",
    scale: 4,
    ar: "ينطوي التلميذ أو ينسحب من الأنشطة الجماعية والتفاعل مع زملائه المعلمين.",
    en: "The student keeps to themselves or withdraws from group activities and interaction with classmates and teachers.",
  },
  {
    key: "c2",
    d: "social",
    scale: 4,
    ar: "يواجه التلميذ صعوبة في تكوين صداقات مع زملائه أو الحفاظ عليها داخل الفصل.",
    en: "The student has difficulty making or maintaining friendships with classmates.",
  },
  {
    key: "c3",
    d: "social",
    scale: 4,
    ar: "يدخل التلميذ في خلافات أو مشاحنات متكررة مع زملائه في الصف أو الفناء.",
    en: "The student gets into repeated disagreements or conflicts with classmates in the classroom or playground.",
  },
  {
    key: "c4",
    d: "social",
    scale: 4,
    ar: "يجد التلميذ صعوبة في طلب المساعدة من المعلم أو التعبير عن احتياجاته الصفية.",
    en: "The student has difficulty asking the teacher for help or expressing classroom needs.",
  },
  // البعد الرابع: الانتباه والتحصيل الدراسي
  {
    key: "f1",
    d: "attention",
    scale: 4,
    ar: "يجد التلميذ صعوبة في التركيز والشغف أثناء شرح المعلم للدروس.",
    en: "The student has difficulty staying focused and engaged while the teacher explains lessons.",
  },
  {
    key: "f2",
    d: "attention",
    scale: 4,
    ar: "يتشتت انتباه التلميذ بسهولة بأي مؤثرات خارجية أو داخلية أثناء الشرح أو أداء الاختبارات.",
    en: "The student's attention is easily distracted by external or internal stimuli during lessons or tests.",
  },
  {
    key: "f3",
    d: "attention",
    scale: 4,
    ar: "يواجه التلميذ صعوبة في اتباع التعليمات الصفية أو إكمال المهام المطلوبة منه في الوقت المحدد.",
    en: "The student has difficulty following classroom instructions or completing assigned tasks on time.",
  },
  {
    key: "f4",
    d: "attention",
    scale: 4,
    ar: "يظهر تراجعًا ملحوظًا في جودة واجباته المدرسية أو أدائه الأكاديمي مقارنة بمستواه المعتاد.",
    en: "The quality of the student's homework or academic performance noticeably declines compared with their usual level.",
  },
  // البعد الخامس: إدارة الضغوط والانفعال المدرسية
  {
    key: "t1",
    d: "stress",
    scale: 4,
    ar: "يبدو التلميذ قلقًا أو شديد التوتر عند تكليفه بمهام أو عند الانتقال بين الحصص والاختبارات.",
    en: "The student appears anxious or highly stressed when assigned tasks or transitioning between lessons and tests.",
  },
  {
    key: "t2",
    d: "stress",
    scale: 4,
    ar: "ينفعل التلميذ بشدة (غضب، بكاء، صراخ) عند مواجهة صعوبة دراسية أو تقييم سلبي.",
    en: "The student reacts intensely (anger, crying, or shouting) when facing academic difficulty or negative feedback.",
  },
  {
    key: "t3",
    d: "stress",
    scale: 4,
    ar: "يستغرق التلميذ وقتًا طويلاً ليهدأ بعد تعرضه لموقف محبط أو ضيق داخل الفصل.",
    en: "The student takes a long time to calm down after a frustrating or upsetting classroom incident.",
  },
  {
    key: "t4",
    d: "stress",
    scale: 4,
    ar: "يتجنب التلميذ المشاركة الشفهية، أو التحدث أمام الزملاء، أو الأنشطة المدرسية التي تتطلب تواصلًا.",
    en: "The student avoids oral participation, speaking in front of classmates, or school activities that require communication.",
  },
];

/* openStudentDetail: توافق مع الاستدعاءات القديمة (التفاصيل في ROUND 4 أسفل الملف) */
function openStudentDetail(id, tab = "daily") {
  return tab === "weekly" ? openStudentReports(id) : openAssessModal(id);
}

function renderDailyTab(id, s, todayName, defaultDate, allReports) {
  const isAr = state.lang === "ar";
  const recentReports = allReports.slice().reverse().slice(0, 5);
  const days = isAr ? AR_DAYS : EN_DAYS;
  return `
    <div class="behavior-form">
      <form onsubmit="event.preventDefault();submitBehavior('${id}');" novalidate>
        <div class="date-row">
          <div class="form-group">
            <label for="bDay">${isAr ? "اليوم" : "Day"}</label>
            <select id="bDay">${days.map((d) => `<option ${d === todayName ? "selected" : ""}>${d}</option>`).join("")}</select>
          </div>
          <div class="form-group">
            <label for="bDate">${isAr ? "التاريخ" : "Date"}</label>
            <input id="bDate" type="date" value="${defaultDate}" />
          </div>
        </div>
        <div class="assess-intro">
          <p>${
            isAr
              ? "قيّم سلوك الطفل خلال الفترة الأخيرة بناءً على ملاحظتك اليومية. اختر مدى تكرار كل سلوك (0 أبدًا → 4 دائمًا)."
              : "Rate the child's recent behavior based on daily observation. Choose how often each behavior occurs (0 Never → 4 Always)."
          }</p>
          <div class="assess-scale-legend">
            ${BEHAVIOR_SCALE.map((s) => `<span><b>${s.v}</b> ${isAr ? s.ar : s.en}</span>`).join("")}
          </div>
        </div>
        ${Object.keys(BEHAVIOR_DOMAINS)
          .map((dom) => {
            const items = BEHAVIOR_QUESTIONS.filter((q) => q.d === dom);
            const dLabel = isAr
              ? BEHAVIOR_DOMAINS[dom].ar
              : BEHAVIOR_DOMAINS[dom].en;
            return `
            <div class="assess-domain">
              <h4 class="assess-domain-title">${dLabel}</h4>
              ${items
                .map(
                  (q) => `
                <div class="question-block">
                  <div class="q-label"><span>${isAr ? q.ar : q.en}</span></div>
                  <div class="pf-opts n5" role="radiogroup" aria-label="${isAr ? q.ar : q.en}">
                    ${BEHAVIOR_SCALE.map(
                      (s) => `
                      <label class="pf-opt" title="${isAr ? s.ar : s.en}">
                        <input type="radio" name="${q.key}" value="${s.v}" />
                        <span>${isAr ? s.ar : s.en}</span>
                      </label>`,
                    ).join("")}
                  </div>
                </div>`,
                )
                .join("")}
            </div>`;
          })
          .join("")}
        <div class="form-group" style="margin-top:16px;">
          <label for="behaviorNotes">${isAr ? "ملاحظات إضافية (اختياري)" : "Additional notes (optional)"}</label>
          <textarea id="behaviorNotes" placeholder="${isAr ? "أي ملاحظات عن سلوك الطالب في اليوم ده..." : "Any notes about today's behavior..."}"></textarea>
        </div>
        <div style="display:flex;gap:10px;flex-wrap:wrap;">
          <button class="btn btn-primary btn-lg" type="submit" style="flex:1;min-width:180px;">${ico("check")} ${isAr ? "تقييم الطالب" : "Assess student"}</button>
        </div>
      </form>
    </div>`;
}

async function runAssessmentAutomation(report, student) {
  const url = CONFIG.N8N_ASSESSMENT;
  const configured =
    CONFIG.USE_N8N && url && !url.includes("your-n8n.example.com");
  if (!configured) {
    report.automationStatus = "not_configured";
    LS.set("anees.reports", state.reports);
    toast(
      state.lang === "ar"
        ? "التقييم محفوظ محليًا؛ رابط تحليل n8n لم يُضبط بعد."
        : "Assessment saved locally; the n8n analysis webhook is not configured yet.",
      "warn",
    );
    return;
  }

  report.automationStatus = "pending";
  LS.set("anees.reports", state.reports);

  const result = await window.sendToN8N(url, {
    studentId: report.studentId,
    createdBy: report.teacherId || state.user?.id || "",
    assessmentId: report.id,
    answers: report.scores,
    notes: report.notes || "",
    date: report.date,
    day: report.day,
    language: state.lang,
    totalScore: report.totalScore,
    status: report.status,
    teacherName: state.user?.name || "", // ← السطر المهم
  });

  if (!result) {
    report.automationStatus = "failed";
    report.automationCompletedAt = Date.now();
    LS.set("anees.reports", state.reports);
    if (
      state.dashView === "studentProfile" &&
      state.profileStudentId === report.studentId
    )
      renderDashboard();
    toast(
      state.lang === "ar"
        ? "التقييم محفوظ، لكن تحليل n8n فشل. راجع الرابط والاتصال ثم أعد المحاولة."
        : "Assessment saved, but the n8n analysis failed. Check the webhook and connection, then retry.",
      "error",
    );
    return;
  }

  const body =
    result.data && typeof result.data === "object"
      ? { ...result, ...result.data }
      : result;

  const ai = body.analysis ?? body.aiAnalysis ?? null;
  if (ai !== null) report.aiAnalysis = ai;
  if (typeof body.aiRecommendation === "string")
    report.aiRecommendation = body.aiRecommendation;
  if (typeof body.alertSent === "boolean") report.alertSent = body.alertSent;
  else if (typeof body.emailSent === "boolean")
    report.alertSent = body.emailSent;
  if (typeof body.shouldNotify === "boolean")
    report.shouldNotify = body.shouldNotify;

  // اختياري: حفظ تفصيل الدرجات من n8n (للمدرس داخل النظام فقط)
  if (Number.isFinite(Number(body.answersTotal)))
    report.answersTotal = Number(body.answersTotal);
  if (Number.isFinite(Number(body.notesScore)))
    report.notesScore = Number(body.notesScore);
  if (Number.isFinite(Number(body.finalTotal))) {
    report.finalTotal = Number(body.finalTotal);
    report.totalScore = Number(body.finalTotal);
    report.totalPossible = 84;
    report.totalPercent = Math.round((Number(body.finalTotal) / 84) * 100);
  }
  if (body.band) {
    report.status = state.lang === "ar" ? body.band.labelAr : body.band.labelEn;
    report.statusClass = body.band.level || report.statusClass;
  }
  if (body.scoreBreakdown && typeof body.scoreBreakdown === "object")
    report.scoreBreakdown = body.scoreBreakdown;
  if (body.riskLevel) report.riskLevel = body.riskLevel;

  report.automationStatus = "processed";
  report.automationCompletedAt = Date.now();
  LS.set("anees.reports", state.reports);
  // Re-read the canonical report after n8n confirms it has persisted the final result.
  try {
    if (window.AneesCloud?.reloadIntoState)
      await window.AneesCloud.reloadIntoState(state);
  } catch (reloadError) {
    console.warn("[Anees reload after retry]", reloadError);
  }
  if (
    state.dashView === "studentProfile" &&
    state.profileStudentId === report.studentId
  )
    renderDashboard();

  if (report.alertSent === true) {
    toast(
      state.lang === "ar"
        ? "اكتمل التحليل وتم تأكيد إرسال تنبيه ولي الأمر من n8n."
        : "Analysis completed; n8n confirmed that the parent alert was sent.",
      "success",
    );
  } else {
    toast(
      state.lang === "ar"
        ? "اكتمل تحليل التقييم وحُفظت النتيجة في ملف الطالب."
        : "Assessment analysis completed and saved to the student profile.",
      "success",
    );
  }
}

const assessmentAutomationRunsInFlight = new Set();
window.retryAssessmentAutomation = async (reportId) => {
  const report = state.reports.find((item) => item.id === reportId);
  const student = state.students.find((item) => item.id === report?.studentId);
  const isAr = state.lang === "ar";
  if (!report || !student) {
    toast(
      isAr
        ? "مش قادر ألاقي التقييم أو ملف الطالب."
        : "Could not find the assessment or student profile.",
      "error",
    );
    return;
  }
  if (assessmentAutomationRunsInFlight.has(reportId)) return;
  assessmentAutomationRunsInFlight.add(reportId);
  report.automationStatus = "pending";
  try {
    LS.set("anees.reports", state.reports);
  } catch (error) {
    console.warn(error);
  }
  try {
    await runAssessmentAutomation(report, student);
  } catch (error) {
    console.error("[Anees retry assessment automation]", error);
    report.automationStatus = "failed";
    report.automationCompletedAt = Date.now();
    try {
      LS.set("anees.reports", state.reports);
    } catch (saveError) {
      console.warn(saveError);
    }
    toast(
      isAr
        ? "التقييم محفوظ، لكن التحليل لم يكتمل. راجع إعداد n8n وحاول مجددًا."
        : "The assessment is saved, but analysis did not complete. Check n8n and retry.",
      "error",
    );
  } finally {
    assessmentAutomationRunsInFlight.delete(reportId);
    if (
      state.dashView === "studentProfile" &&
      state.profileStudentId === report.studentId
    )
      renderDashboard();
  }
};

function submitBehavior(studentId) {
  const isAr = state.lang === "ar";
  const scores = {};

  BEHAVIOR_QUESTIONS.forEach((q) => {
    const checked = document.querySelector(`input[name="${q.key}"]:checked`);
    if (!checked) return;
    scores[q.key] = parseInt(checked.value, 10);
  });

  if (Object.keys(scores).length !== BEHAVIOR_QUESTIONS.length) {
    state.assessmentSubmitting = false;
    toast(
      isAr
        ? "تعذر إرسال التقييم. راجع الإجابات وحاول مرة أخرى."
        : "Could not submit the assessment. Review the answers and try again.",
      "error",
    );
    return;
  }

  const notes = $("#behaviorNotes")?.value?.trim() || "";
  const day = $("#bDay")?.value || "";
  const dateVal = $("#bDate")?.value;
  const chosenDate = dateVal
    ? new Date(dateVal + "T12:00:00").getTime()
    : Date.now();

  const box = $("#genericModalBody");
  if (box)
    box.innerHTML = `
    <div class="modal-body" style="text-align:center;padding:60px 32px;">
      <div class="spinner" role="status" aria-label="${isAr ? "جارٍ تحليل التقييم" : "Analyzing assessment"}"></div>
      <h3 style="font-size:1.1rem;margin-bottom:6px;">${isAr ? "جاري تحليل التقييم" : "Analyzing assessment"}</h3>
      <p style="color:var(--text-muted);font-size:.9rem;">${isAr ? "n8n بيحسب الدرجة ويحلل الملاحظات ويقرر إرسال التنبيه." : "n8n is scoring answers, analyzing notes, and deciding on parent alerts."}</p>
    </div>`;

  window.setTimeout(async () => {
    try {
      const assessmentId =
        "r_" +
        Date.now().toString(36) +
        "_" +
        Math.random().toString(36).slice(2, 8);
      const student = state.students.find((x) => x.id === studentId);
      const url = CONFIG.N8N_ASSESSMENT;
      const configured =
        CONFIG.USE_N8N && url && !String(url).includes("your-n8n.example.com");

      if (!configured) {
        state.assessmentSubmitting = false;
        if (typeof closeGenericModal === "function") closeGenericModal();
        toast(
          isAr
            ? "رابط تحليل n8n غير مضبوط. التقييم لا يُحفظ بدون الـ workflow."
            : "n8n analysis webhook is not configured. Assessment is not saved without the workflow.",
          "error",
        );
        return;
      }

      // Site code does NOT score — n8n owns total, band, AI analysis, and email.
      const result = await window.sendToN8N(url, {
        studentId,
        createdBy: state.user?.id || "",
        assessmentId,
        answers: scores,
        notes,
        date: chosenDate,
        day,
        language: state.lang,
        teacherName: state.user?.name || "",
      });

      state.assessmentSubmitting = false;

      if (!result) {
        if (typeof closeGenericModal === "function") closeGenericModal();
        toast(
          isAr
            ? "فشل تحليل التقييم عبر n8n. لم يُحفظ التقييم. راجع الـ webhook وحاول مجددًا."
            : "n8n assessment analysis failed. Nothing was saved. Check the webhook and retry.",
          "error",
        );
        return;
      }

      const body =
        result.data && typeof result.data === "object"
          ? { ...result, ...result.data }
          : result;

      const totalScore = Number.isFinite(Number(body.finalTotal))
        ? Number(body.finalTotal)
        : Number.isFinite(Number(body.totalScore))
          ? Number(body.totalScore)
          : Number(body.answersTotal) || 0;
      const answersTotal = Number(body.answersTotal) || 0;
      const risk = body.riskLevel || body.band?.level || "";
      let statusClass = "good";
      let status =
        body.band?.labelAr || body.band?.labelEn || body.status || risk || "";
      if (state.lang === "ar" && body.band?.labelAr) status = body.band.labelAr;
      else if (state.lang !== "ar" && body.band?.labelEn)
        status = body.band.labelEn;
      if (risk === "low" || totalScore <= 20) statusClass = "excellent";
      else if (risk === "moderate" || totalScore <= 40) statusClass = "good";
      else if (risk === "high" || totalScore <= 60) statusClass = "watch";
      else statusClass = "critical";

      const recommendation =
        body.aiRecommendation ||
        body.band?.interpretationAr ||
        body.band?.interpretationEn ||
        body.recommendation ||
        "";

      const report = {
        id: assessmentId,
        studentId,
        teacherId: state.user?.id || "",
        date: chosenDate,
        day,
        scores,
        notes,
        totalScore,
        totalPercent: Math.round((totalScore / 84) * 100),
        totalPossible: 84,
        scaleType: "frequency_0_4",
        status,
        statusClass,
        recommendation,
        aiAnalysis: body.aiAnalysis || body.analysis || null,
        aiRecommendation: body.aiRecommendation || null,
        alertSent: body.alertSent === true,
        shouldNotify: body.shouldNotify === true,
        riskLevel: risk || null,
        scoreBreakdown: body.scoreBreakdown || null,
        answersTotal: body.answersTotal ?? null,
        notesScore: body.notesScore ?? null,
        finalTotal: body.finalTotal ?? totalScore,
        automationStatus: "processed",
        automationCompletedAt: Date.now(),
        createdAt: Date.now(),
      };

      // Prefer fresh data from DB after n8n write
      try {
        if (window.AneesCloud?.reloadIntoState) {
          await window.AneesCloud.reloadIntoState(state);
          // Ensure this report is present even if reload lags
          if (!state.reports.some((r) => r.id === assessmentId)) {
            state.reports.unshift(report);
          }
        } else {
          state.reports.unshift(report);
        }
      } catch (reloadErr) {
        console.warn("[Anees reload after assessment]", reloadErr);
        state.reports.unshift(report);
      }

      if (typeof closeGenericModal === "function") closeGenericModal();
      if (report.alertSent) {
        toast(
          isAr
            ? "اكتمل التحليل وتم إرسال تنبيه لولي الأمر."
            : "Analysis completed and a parent alert was sent.",
          "success",
        );
      } else {
        toast(
          isAr
            ? "اكتمل تحليل التقييم وحُفظت النتيجة في قاعدة البيانات."
            : "Assessment analysis completed and saved to the database.",
          "success",
        );
      }
      window.openStudentProfile(studentId);
    } catch (error) {
      console.error("[Anees submitBehavior]", error);
      state.assessmentSubmitting = false;
      if (typeof closeGenericModal === "function") closeGenericModal();
      toast(
        isAr
          ? "حصل خطأ أثناء تحليل التقييم. لم يُحفظ شيء محليًا."
          : "An error occurred while analyzing the assessment. Nothing was saved locally.",
        "error",
      );
    }
  }, 200);
}

/* ============================================================
   n8n HELPERS + SEND REPORTS
   ============================================================ */
async function sendToN8N(url, payload) {
  try {
    const headers = { "Content-Type": "application/json" };
    try {
      const { data } = await window.AneesCloud?.client?.auth?.getSession?.();
      const accessToken = data?.session?.access_token;
      if (accessToken) headers.Authorization = `Bearer ${accessToken}`;
    } catch (authHeaderError) {
      console.warn("[n8n] Could not attach session token", authHeaderError);
    }
    const res = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (!res.ok || data?.success === false) {
      console.warn("[n8n] webhook returned an error", res.status, data);
      return null;
    }
    return data;
  } catch (err) {
    console.warn("[n8n] webhook failed, using local fallback", err);
    return null;
  }
}

function submitContact(e) {
  e.preventDefault();
  const isAr = state.lang === "ar";
  const nameEl = $("#cName") || $("#cName2");
  const emailEl = $("#cEmail") || $("#cEmail2");
  const msgEl = $("#cMsg") || $("#cMsg2");
  const name = nameEl?.value.trim() || "";
  const email = emailEl?.value.trim() || "";
  const msg = msgEl?.value.trim() || "";
  let ok = true;
  const nameBad = name.length < 3;
  const emailBad = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const msgBad = msg.length < 10;
  if (nameEl)
    markField(nameEl.id === "cName" ? "fg-name" : "fg-name2", nameBad);
  if (nameBad) ok = false;
  if (emailEl)
    markField(emailEl.id === "cEmail" ? "fg-email" : "fg-email2", emailBad);
  if (emailBad) ok = false;
  if (msgEl) markField(msgEl.id === "cMsg" ? "fg-msg" : "fg-msg2", msgBad);
  if (msgBad) ok = false;
  if (!ok) {
    toast(isAr ? "في حقول محتاجة تصحيح" : "Please fix the fields", "error");
    return;
  }
  dialog({
    title: isAr ? "تم الإرسال" : "Sent",
    msg: isAr
      ? "شكرًا لتواصلك. هنرد عليك في أقرب وقت ممكن."
      : "Thank you. We'll reply as soon as possible.",
    type: "success",
    showCancel: false,
    confirmText: isAr ? "موافق" : "OK",
  });
  e.target.reset();
}

/* ============================================================
   CHATBOT – جاهز لـ n8n Agent
   ============================================================ */
function toggleChat() {
  $("#chatPanel").classList.toggle("open");
}

function addChat(text, who) {
  const el = document.createElement("div");
  el.className = "chat-msg " + who;

  // تحويل **نص** إلى <strong>نص</strong> بشكل آمن
  const safe = esc(text).replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  el.innerHTML = safe.replace(/\n/g, "<br>");

  $("#chatBody").appendChild(el);
  $("#chatBody").scrollTop = $("#chatBody").scrollHeight;
}

function showTyping() {
  const el = document.createElement("div");
  el.className = "typing";
  el.id = "typingIndicator";
  el.innerHTML =
    '<span></span><span></span><span></span><em class="typing-label">' +
    (state.lang === "ar" ? "أنيس بيكتب..." : "Anees is typing...") +
    "</em>";
  $("#chatBody").appendChild(el);
  $("#chatBody").scrollTop = $("#chatBody").scrollHeight;
}
function hideTyping() {
  $("#typingIndicator")?.remove();
}

async function sendChat() {
  const input = $("#chatInput");
  const text = input.value.trim();
  if (!text) return;
  addChat(text, "user");
  input.value = "";
  showTyping();

  // Volatile session id only; never persisted in browser storage.
  if (!window._aneesChatSession) {
    window._aneesChatSession =
      "sess_" + Date.now() + "_" + Math.random().toString(36).slice(2, 9);
  }

  if (CONFIG.USE_N8N) {
    try {
      const data = await sendToN8N(CONFIG.N8N_CHAT, {
        message: text,
        lang: state.lang,
        sessionId: window._aneesChatSession,
        user: state.user
          ? { name: state.user.name, email: state.user.email }
          : null,
      });
      hideTyping();
      addChat(
        data?.reply ||
          (state.lang === "ar"
            ? "معلش، حصل خطأ. جرب تاني."
            : "Sorry, something went wrong. Try again."),
        "bot",
      );
    } catch {
      hideTyping();
      addChat(
        state.lang === "ar"
          ? "المساعد مش متاح حالياً. جرب بعد شوية."
          : "The assistant is unavailable right now. Try later.",
        "bot",
      );
    }
  } else {
    // الـ fallback المحلي زي ما هو
    setTimeout(() => {
      hideTyping();
      const ar = state.lang === "ar";
      const q = text.toLowerCase();
      const KB = [
        [
          /فصل|class/,
          ar
            ? "من «الفصول» اضغط «إضافة فصل»، اكتب الاسم والمرحلة واحفظ. بعدها ضيف الطلاب جواه."
            : "Go to Classes, press Add class, enter the name and stage, then add students inside it.",
        ],
        [
          /باقة|سعر|اشتراك|plan|pric/,
          ar
            ? "الباقات موضحة في صفحة التسعير، وفيها باقة مجانية بحدود معينة."
            : "Plans are listed on the Pricing page, including a free plan with limits.",
        ],
        [
          /تقرير|report/,
          ar
            ? "من «التقارير» تقدر تشوف التقارير اليومية والأسبوعية والشهرية وتبعتها لولي الأمر."
            : "Open Reports to view daily, weekly and monthly reports and send them to parents.",
        ],
      ];
      const hit = KB.find(([re]) => re.test(q));
      addChat(
        hit
          ? hit[1]
          : ar
            ? "ده رد تجريبي. المساعد الذكي الكامل بيتفعّل بعد ربط خدمة المحادثة."
            : "This is a demo reply. The full assistant is enabled once the chat service is connected.",
        "bot",
      );
    }, 700);
  }
}
function quickAsk(q) {
  $("#chatInput").value = q;
  sendChat();
}
$("#chatFab").onclick = toggleChat;

console.log(
  "Anees Platform – Part 3 (Dashboard + Assessment + Chat) loaded successfully.",
);

/* ============================================================
   INIT
   ============================================================ */
window.addEventListener(
  "scroll",
  () => {
    $("#nav").classList.toggle("scrolled", window.scrollY > 12);
  },
  { passive: true },
);

document.documentElement.lang = state.lang;
document.documentElement.dir = state.lang === "ar" ? "rtl" : "ltr";
applyTheme();
renderNavbar();
// Initial routing runs after all feature modules have registered (final bootstrap below).

console.log("Anees Platform – Part 2 (JS Core) loaded successfully.");

/* ================= FIXES (1) ================= */
/* ============================================================
   anees-fixes.js — حمّله بعد anees-part2-js.js مباشرة
   يعدّل الدوال العامة بدون لمس الملف الأصلي
   ============================================================ */
(() => {
  "use strict";
  const T = (a, e) => (state.lang === "ar" ? a : e);
  const localISO = (d) =>
    new Date(d.getTime() - d.getTimezoneOffset() * 6e4)
      .toISOString()
      .slice(0, 10);
  const isPlaceholder = (u) => !u || u.includes("your-n8n.example.com");

  /* ---------- 1) التخزين: ذاكرة مؤقتة فقط، وSupabase مصدر الحفظ الدائم ---------- */
  const _baseSet = LS.set;
  LS.set = (k, v) => {
    try {
      if (k === "anees.user" && v) {
        const { pass, passHash, salt, ...safe } = v;
        v = safe;
      }
      return _baseSet(k, v);
    } catch (e) {
      toast(T("تعذر الحفظ", "Could not save"), "error");
      return false;
    }
  };

  /* صور مصغّرة (160px) بدل base64 ضخم */
  function shrink(file, cb) {
    if (!file || !file.type.startsWith("image/") || file.size > 8e6) {
      toast(T("اختر صورة أقل من 8MB", "Pick an image under 8MB"), "error");
      return;
    }
    const img = new Image(),
      url = URL.createObjectURL(file);
    img.onload = () => {
      const s = Math.min(1, 160 / Math.max(img.width, img.height));
      const c = document.createElement("canvas");
      c.width = Math.round(img.width * s);
      c.height = Math.round(img.height * s);
      c.getContext("2d").drawImage(img, 0, 0, c.width, c.height);
      URL.revokeObjectURL(url);
      cb(c.toDataURL("image/jpeg", 0.8));
    };
    img.src = url;
  }
  window.previewAvatar = (e) =>
    shrink(e.target.files?.[0], (d) => {
      pendingAvatarData = d;
      openAvatarCropper(d);
    });
  window.previewProfileAvatar = (e) =>
    shrink(e.target.files?.[0], (d) => {
      openAvatarCropper(d);
    });

  // Supabase Auth owns credentials; never copy password/hash fields into the app profile.
  window.saveProfile = saveProfile;

  /* ---------- 2) الشبكة: res.ok + timeout + لا نجاح كاذب ---------- */
  window.sendToN8N = async (url, payload) => {
    if (isPlaceholder(url)) return null;
    if (payload && payload.type === "daily" && payload.report) return null; // prevent duplicate daily submission

    const isAssessmentWebhook = String(url).includes(
      "/webhook/anees-assessment",
    );
    const controller = new AbortController();
    // LLM analysis + DB persistence can legitimately exceed 15 seconds.
    const timeoutMs = isAssessmentWebhook ? 120000 : 30000;
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    try {
      const headers = { "Content-Type": "application/json" };
      // Preserve the Supabase access token for the assessment workflow's auth check.
      try {
        const authResult =
          await window.AneesCloud?.client?.auth?.getSession?.();
        const accessToken = authResult?.data?.session?.access_token;
        if (accessToken) headers.Authorization = `Bearer ${accessToken}`;
      } catch (authError) {
        console.warn(
          "[n8n] Could not read Supabase session for webhook",
          authError,
        );
      }

      const res = await fetch(url, {
        method: "POST",
        headers,
        body: JSON.stringify(payload),
        signal: controller.signal,
      });
      const responseText = await res.text();
      let parsed;
      try {
        parsed = responseText ? JSON.parse(responseText) : {};
      } catch {
        console.error(
          "[n8n] Webhook returned non-JSON response",
          res.status,
          responseText.slice(0, 1000),
        );
        return null;
      }
      if (!res.ok) {
        console.error("[n8n] Webhook HTTP error", res.status, parsed);
        return null;
      }
      const responseObjects = [parsed, parsed?.data].filter(
        (item) => item && typeof item === "object",
      );
      const reportedFailure = responseObjects.some((item) => {
        const status = String(item.status || "").toLowerCase();
        return (
          item.ok === false ||
          item.success === false ||
          item.error === true ||
          (item.error && String(item.error).trim() !== "") ||
          status === "error" ||
          status === "failed"
        );
      });
      if (reportedFailure) {
        console.error("[n8n] Workflow reported failure", parsed);
        return null;
      }
      if (
        isAssessmentWebhook &&
        !(parsed?.success === true || parsed?.data?.success === true)
      ) {
        console.error(
          "[n8n] Assessment workflow did not confirm persistence",
          parsed,
        );
        return null;
      }
      return parsed;
    } catch (error) {
      console.error(
        `[n8n] Webhook request failed${error?.name === "AbortError" ? ` after ${timeoutMs}ms timeout` : ""}`,
        error,
      );
      return null;
    } finally {
      clearTimeout(timer);
    }
  };

  const sendFail = (url) =>
    toast(
      isPlaceholder(url)
        ? T(
            "رابط الإرسال لم يُضبط بعد في CONFIG، لم يتم إرسال أي شيء",
            "Webhook URL not configured; nothing was sent",
          )
        : T(
            "فشل الإرسال. تحقق من الاتصال وأعد المحاولة",
            "Sending failed. Check your connection and retry",
          ),
      "error",
    );

  window.sendReport = async (id) => {
    const r = state.reports.find((x) => x.id === id);
    const s = state.students.find((x) => x.id === r?.studentId);
    if (!r || !s) return;
    if (!validParentEmail(s.parentEmail)) return missingParentEmail();
    const lockKey = "legacy-daily:" + id;
    if (reportSendsInFlight.has(lockKey)) return;
    if (
      r.sentAt &&
      !confirm(
        T(
          "تم إرسال هذا التقرير من قبل. إرساله مرة أخرى؟",
          "Already sent. Send again?",
        ),
      )
    )
      return;
    reportSendsInFlight.add(lockKey);
    try {
      const res = await sendToN8N(CONFIG.N8N_DAILY_REPORT, {
        type: "daily",
        action: "send",
        deliveryId: lockKey + ":" + Date.now(),
        to: s.parentEmail,
        student: s.name,
        parentName: s.parentName,
        score: r.totalScore,
        status: r.status,
        recommendation: r.recommendation,
        notes: r.notes,
        date: r.date,
        day: r.day,
        scores: r.scores,
        teacherName: state.user.name,
      });
      if (!res) return sendFail(CONFIG.N8N_DAILY_REPORT);
      r.sentAt = Date.now();
      LS.set("anees.reports", state.reports);
      toast(
        T(
          "تم قبول طلب التقرير لدى n8n. تأكد أن الـ workflow لا يرجع نجاحًا إلا بعد إرسال البريد فعلًا.",
          "n8n accepted the report request. Configure the workflow to respond only after the email is sent.",
        ),
        "success",
      );
    } finally {
      reportSendsInFlight.delete(lockKey);
    }
  };

  /* ---------- 3) الدرجات ---------- */
  // frequency scale 0–4: higher = more concerning (no reverse)
  const _rdt = renderDailyTab;
  window.renderDailyTab = (id, s, tn, dd, all) =>
    _rdt(id, s, tn, localISO(new Date()), all)
      .replace(/ checked \/>/g, " />") // لا قيم افتراضية
      .replace(
        /<div class="radio-group">/g,
        '<div class="radio-group" role="radiogroup">',
      );

  const _sb = submitBehavior;
  window.submitBehavior = (id) => {
    if (state.assessmentSubmitting) return;
    const miss = BEHAVIOR_QUESTIONS.find(
      (q) => !document.querySelector(`input[name="${q.key}"]:checked`),
    );
    if (miss) {
      toast(
        T(
          "من فضلك أجب عن كل الأسئلة قبل التقييم",
          "Please answer every question first",
        ),
        "error",
      );
      document
        .querySelector(`input[name="${miss.key}"]`)
        ?.closest(".question-block")
        ?.scrollIntoView({ block: "center" });
      return;
    }
    state.assessmentSubmitting = true;
    _sb(id);
  };

  /* اليوم يتبع التاريخ */
  document.addEventListener("change", (e) => {
    if (e.target.id === "bDate" && e.target.value) {
      const sel = $("#bDay");
      if (sel)
        sel.selectedIndex = new Date(e.target.value + "T12:00:00").getDay();
    }
  });

  /* ---------- 4) الصحة الوظيفية ---------- */
  const _rd = renderDashboard;
  window.renderDashboard = () => {
    // يحافظ على focus حقل البحث
    const a = document.activeElement,
      id = a && a.id,
      pos = a && a.selectionStart;
    _rd();
    enhanceCustomSelects($("#dashMain") || document);
    enhanceCustomSelects($("#genericModalBody") || document);
    if (id === "classSearchInput") {
      const n = $("#" + id);
      if (n) {
        n.focus();
        try {
          n.setSelectionRange(pos, pos);
        } catch {}
      }
    }
  };

  const _cgm = closeGenericModal;
  window.closeGenericModal = () => {
    _cgm();
    if (state.user && $("#dashboard").classList.contains("active"))
      renderDashboard();
  };

  window.bindPageEvents = () => {
    // لا يستبدل onclick المكتوب في الـ HTML
    $$("[data-link]").forEach((a) => {
      if (a.hasAttribute("onclick")) return;
      a.onclick = (e) => {
        const h = a.getAttribute("href");
        if (h && h.startsWith("#")) {
          e.preventDefault();
          location.hash = h;
          closeMobile();
        }
      };
    });
    $$(".faq-q").forEach((b) => {
      b.setAttribute("aria-expanded", "false");
      b.onclick = () => {
        const it = b.closest(".faq-item"),
          open = it.classList.contains("open");
        it.parentElement.querySelectorAll(".faq-item").forEach((i) => {
          i.classList.remove("open");
          i.querySelector(".faq-q").setAttribute("aria-expanded", "false");
        });
        if (!open) {
          it.classList.add("open");
          b.setAttribute("aria-expanded", "true");
        }
      };
    });
  };

  const TITLES = {
    "#/": ["الرئيسية", "Home"],
    "#/blog": ["تعلم معنا", "Learn with us"],
    "#/pricing": ["التسعير", "Pricing"],
    "#/about": ["من نحن", "About"],
    "#/contact": ["تواصل معنا", "Contact"],
    "#/dashboard": ["لوحة التحكم", "Dashboard"],
    "#/login": ["تسجيل الدخول", "Login"],
    "#/signup": ["إنشاء حساب", "Sign up"],
    "#/forgot": ["نسيت كلمة السر", "Forgot password"],
    "#/reset-code": ["رمز التأكيد", "Verification code"],
    "#/reset-password": ["كلمة سر جديدة", "New password"],
  };
  TITLES["#/testimonials"] = ["قالوا عنا", "Testimonials"];
  TITLES["#/privacy"] = ["سياسة الخصوصية", "Privacy Policy"];
  TITLES["#/terms"] = ["الشروط والأحكام", "Terms & Conditions"];
  const setTitle = () => {
    const t = TITLES[state.route.split("?")[0]] || (state.route.startsWith("#/article/") ? ["مقال إرشادي", "Guidance article"] : TITLES["#/"]);
    document.title = brandName() + " | " + T(t[0], t[1]);
  };
  const _nav = navigate;
  window.navigate = (h) => {
    _nav(h);
    if (innerWidth <= 1024) closeDashDrawer();
    setTitle();
  };

  /* حدود الباقة المجانية + تحقق الهاتف المصري
     ملاحظة: الحدود تُطبَّق عند الإضافة فقط — التعديل يبقى متاحًا دائمًا */
  const overLimit = (kind) => {
    if (!state.user || state.user.plan === "pro") return false;
    const d = teacherData();
    return kind === "class" ? d.classes.length >= 1 : d.students.length >= 10;
  };
  const _sc = saveClass;
  window.saveClass = (editId) => {
    if (!editId && overLimit("class")) {
      showUpgradeDialog("class");
      return;
    }
    return _sc(editId);
  };
  const _ss = saveStudent;
  window.saveStudent = (cid, editId) => {
    if (!editId && overLimit("student")) {
      showUpgradeDialog("student");
      return;
    }
    const p = ($("#sfPhone")?.value || "").replace(/[\s\-()]/g, "");
    if (p && !/^(\+20|0020|0)?1[0125]\d{8}$/.test(p)) {
      markField("fg-phone", true);
      toast(
        T(
          "رقم الهاتف غير صحيح (مثال: 01012345678)",
          "Invalid phone (e.g. 01012345678)",
        ),
        "error",
      );
      return;
    }
    return _ss(cid, editId);
  };

  /* منع فتح نموذج الإضافة عند تجاوز الحد + بوب-أب ترقية */
  function showUpgradeDialog(kind) {
    const isClass = kind === "class";
    dialog({
      title: T(
        isClass ? "وصلت لحد الباقة المجانية" : "وصلت لحد عدد الطلاب",
        isClass ? "Free plan limit reached" : "Student limit reached",
      ),
      msg: T(
        isClass
          ? "الباقة المجانية تشمل فصلًا واحدًا فقط. رقِّ باقتك لإضافة فصول غير محدودة."
          : "الباقة المجانية تشمل حتى 10 طلاب. رقِّ باقتك لإضافة المزيد.",
        isClass
          ? "The free plan includes only 1 class. Upgrade for unlimited classes."
          : "The free plan includes up to 10 students. Upgrade to add more.",
      ),
      type: "warn",
      confirmText: T("ترقية الباقة", "Upgrade plan"),
      cancelText: T("إلغاء", "Cancel"),
      showCancel: true,
      onConfirm: () => openUpgradeCheckout(),
    });
  }

  window.openUpgradeCheckout = function openUpgradeCheckout() {
    const isAr = state.lang === "ar";
    const box = $("#genericModalBody");
    box.classList.remove("lg");
    box.classList.add("md");
    box.innerHTML = `
      <div class="modal-body upgrade-modal">
        <button type="button" class="modal-close" onclick="closeGenericModal()">${ico("x")}</button>
        <div class="modal-step"><span class="dot"></span> ${isAr ? "ترقية الباقة" : "Upgrade plan"}</div>
        <h2 style="font-size:1.25rem;margin-bottom:6px;">${isAr ? "اختر باقتك" : "Choose your plan"}</h2>
        <p style="color:var(--text-muted);font-size:.9rem;margin-bottom:18px;">${isAr ? "بعد إتمام الدفع التجريبي هتتفعل باقة Pro فورًا على حسابك." : "After the demo payment, Pro activates on your account immediately."}</p>
        <div class="upgrade-plans">
          <label class="upgrade-plan selected" data-plan="pro">
            <input type="radio" name="upPlan" value="pro" checked />
            <div class="up-body">
              <div class="up-name">${isAr ? "المدرس المحترف" : "Pro Teacher"}</div>
              <div class="up-price"><b>199</b> ${isAr ? "ج.م / شهريًا" : "EGP / month"}</div>
              <ul>
                <li>${isAr ? "فصول غير محدودة" : "Unlimited classes"}</li>
                <li>${isAr ? "حتى 100 طالب" : "Up to 100 students"}</li>
                <li>${isAr ? "تقارير وتحليلات كاملة" : "Full reports & analytics"}</li>
              </ul>
            </div>
          </label>
        </div>
        <h3 style="font-size:1rem;margin:18px 0 10px;">${isAr ? "بيانات الدفع (تجريبي)" : "Payment details (demo)"}</h3>
        <form id="upgradeForm" onsubmit="completeUpgrade(event)" novalidate autocomplete="off">
          <div class="form-group" id="up-cardname">
            <label for="upCardName">${isAr ? "الاسم على البطاقة" : "Name on card"}</label>
            <input id="upCardName" type="text" placeholder="${isAr ? "كما يظهر على البطاقة" : "As shown on card"}" />
            <div class="form-error">${ico("alert")} ${isAr ? "اكتب الاسم" : "Enter the name"}</div>
          </div>
          <div class="form-group" id="up-cardnum">
            <label for="upCardNum">${isAr ? "رقم البطاقة" : "Card number"}</label>
            <input id="upCardNum" type="text" inputmode="numeric" dir="ltr" maxlength="19" placeholder="4242 4242 4242 4242" />
            <div class="form-error">${ico("alert")} ${isAr ? "رقم بطاقة غير صالح" : "Invalid card number"}</div>
          </div>
          <div class="form-row-2">
            <div class="form-group" id="up-exp">
              <label for="upExp">${isAr ? "الانتهاء" : "Expiry"}</label>
              <input id="upExp" type="text" inputmode="numeric" dir="ltr" maxlength="5" placeholder="MM/YY" />
              <div class="form-error">${ico("alert")} ${isAr ? "MM/YY" : "MM/YY"}</div>
            </div>
            <div class="form-group" id="up-cvc">
              <label for="upCvc">CVC</label>
              <input id="upCvc" type="text" inputmode="numeric" dir="ltr" maxlength="4" placeholder="123" />
              <div class="form-error">${ico("alert")} ${isAr ? "CVC غير صالح" : "Invalid CVC"}</div>
            </div>
          </div>
          <p class="up-demo-note">${ico("info")} ${isAr ? "وضع تجريبي: أي بيانات بطاقة صحيحة الشكل كافية للتفعيل. لن يُخصم أي مبلغ." : "Demo mode: any valid-looking card activates Pro. No real charge."}</p>
          <button class="btn btn-primary btn-lg btn-block" type="submit" id="upSubmit">${isAr ? "ادفع وفعّل Pro — 199 ج.م" : "Pay & activate Pro — 199 EGP"}</button>
          <button class="btn btn-ghost btn-block" type="button" style="margin-top:8px;" onclick="closeGenericModal()">${isAr ? "إلغاء" : "Cancel"}</button>
        </form>
      </div>`;
    $("#genericModal").classList.add("open");
    setTimeout(() => enhanceCustomSelects($("#genericModalBody")), 0);
    // format helpers
    const num = $("#upCardNum");
    if (num)
      num.addEventListener("input", () => {
        let v = num.value.replace(/\D/g, "").slice(0, 16);
        num.value = v.replace(/(\d{4})(?=\d)/g, "$1 ").trim();
      });
    const exp = $("#upExp");
    if (exp)
      exp.addEventListener("input", () => {
        let v = exp.value.replace(/\D/g, "").slice(0, 4);
        if (v.length >= 3) v = v.slice(0, 2) + "/" + v.slice(2);
        exp.value = v;
      });
  };

  window.completeUpgrade = function completeUpgrade(e) {
    e.preventDefault();
    const isAr = state.lang === "ar";
    const name = ($("#upCardName")?.value || "").trim();
    const card = ($("#upCardNum")?.value || "").replace(/\s/g, "");
    const exp = ($("#upExp")?.value || "").trim();
    const cvc = ($("#upCvc")?.value || "").trim();
    let ok = true;
    const mark = (id, inv) => {
      markField(id, inv);
      if (inv) ok = false;
    };
    mark("up-cardname", name.length < 2);
    mark("up-cardnum", !/^\d{13,19}$/.test(card));
    mark("up-exp", !/^(0[1-9]|1[0-2])\/\d{2}$/.test(exp));
    mark("up-cvc", !/^\d{3,4}$/.test(cvc));
    if (!ok) {
      toast(isAr ? "راجع بيانات البطاقة" : "Check card details", "error");
      return;
    }
    const btn = $("#upSubmit");
    if (btn) {
      btn.disabled = true;
      btn.classList.add("loading");
    }
    setTimeout(() => {
      if (!state.user) return;
      state.user.plan = "pro";
      const idx = state.teachers.findIndex((t) => t.id === state.user.id);
      if (idx >= 0) state.teachers[idx].plan = "pro";
      LS.set("anees.user", state.user);
      LS.set("anees.teachers", state.teachers);
      closeGenericModal();
      toast(
        isAr
          ? "تم تفعيل باقة Pro بنجاح 🎉"
          : "Pro plan activated successfully 🎉",
        "success",
      );
      if ($("#dashboard")?.classList.contains("active")) renderDashboard();
      renderNavbar();
    }, 700);
  };

  const _openClassForm = window.openClassForm;
  window.openClassForm = (editId) => {
    if (!editId && overLimit("class")) {
      showUpgradeDialog("class");
      return;
    }
    return _openClassForm(editId);
  };
  const _openStudentForm = window.openStudentForm;
  window.openStudentForm = (cid, editId) => {
    if (!editId && overLimit("student")) {
      showUpgradeDialog("student");
      return;
    }
    return _openStudentForm(cid, editId);
  };

  /* ---------- 5) نصوص مضللة: إزالة ادعاء التشفير ---------- */
  const _home = ROUTES["#/"];
  ROUTES["#/"] = () =>
    _home()
      .replace("التزام بخصوصية بيانات الطلاب", "التزام بخصوصية بيانات الطلاب")
      .replace(
        "Commitment to student data privacy",
        "Commitment to student data privacy",
      )
      .replace(
        "في النسخة الحالية بتتحفظ البيانات على متصفحك، وتُشارك مع ولي الأمر فقط عند إرسال تقرير.",
        "في النسخة التجريبية بتتحفظ البيانات على متصفحك فقط، ولا تُشارك إلا مع ولي الأمر عند إرسال تقرير.",
      )
      .replace(
        "In the current version, data stays in your browser and is only shared with the parent when you send a report.",
        "In this demo, data stays in your browser and is only shared with the parent when you send a report.",
      );

  /* ---------- 6) إمكانية الوصول ---------- */
  $("#toasts").setAttribute("aria-live", "polite");
  $("#chatBody").setAttribute("aria-live", "polite");
  $("#chatFab").setAttribute(
    "aria-label",
    state.lang === "ar"
      ? "مساعد أنيس، اسألني أي حاجة"
      : "Anees assistant, ask me anything",
  );
  $("#chatPanel").setAttribute("role", "dialog");
  $("#chatInput").setAttribute("aria-label", "Message");

  ["authModal", "genericModal", "dialogOverlay"].forEach((id) => {
    const o = $("#" + id),
      box = o.firstElementChild;
    let prev = null;
    box.setAttribute("role", id === "dialogOverlay" ? "alertdialog" : "dialog");
    box.setAttribute("aria-modal", "true");
    box.setAttribute("tabindex", "-1");
    new MutationObserver(() => {
      if (o.classList.contains("open")) {
        prev = document.activeElement;
        document.body.style.overflow = "hidden";
        setTimeout(
          () =>
            (
              box.querySelector("input,select,textarea,.btn-primary") || box
            ).focus(),
          60,
        );
      } else {
        if (!$$(".modal-overlay.open,.dialog-overlay.open").length)
          document.body.style.overflow = "";
        if (prev && prev.focus) prev.focus();
      }
    }).observe(o, { attributes: true, attributeFilter: ["class"] });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if ($("#dialogOverlay").classList.contains("open"))
        $("#dialogOverlay").classList.remove("open");
      else if ($("#genericModal").classList.contains("open"))
        closeGenericModal();
      else if ($("#authModal").classList.contains("open")) closeAuth();
      else if ($("#chatPanel").classList.contains("open")) toggleChat();
      else if ($("#mobileMenu").classList.contains("open")) closeMobile();
    }
    if (e.key === "Tab") {
      // focus trap
      const o = $$(".dialog-overlay.open,.modal-overlay.open").pop();
      if (!o) return;
      const f = $$(
        "button:not([disabled]),input:not([disabled]),select,textarea,a[href]",
        o,
      ).filter((x) => x.offsetParent);
      if (!f.length) return;
      const first = f[0],
        last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });
  $$(".icon-btn:not([aria-label])").forEach((b) =>
    b.setAttribute("aria-label", "Action"),
  );

  /* ---------- init ---------- */
  setTitle();
  if (innerWidth <= 1024) closeDashDrawer();
  const _tl = toggleLang;
  window.toggleLang = () => {
    _tl();
    setTitle();
    const fab = $("#chatFab");
    const tip = fab?.querySelector(".fab-tip");
    const logo = fab?.querySelector(".fab-logo");
    const isArabic = state.lang === "ar";
    if (fab)
      fab.setAttribute(
        "aria-label",
        isArabic
          ? "مساعد أنيس، اسألني أي حاجة"
          : "Anees assistant, ask me anything",
      );
    if (tip)
      tip.textContent = isArabic ? "اسألني أي حاجة 👋" : "Ask me anything 👋";
    if (logo)
      logo.alt = isArabic ? "أيقونة مساعد أنيس" : "Anees assistant icon";
  };
})();

/* ================= FIXES (2) ================= */
/* anees-fixes-2.js — حمّله بعد anees-fixes.js */
(() => {
  "use strict";
  const ar = () => state.lang === "ar";
  const L = (a, e) => (ar() ? a : e);
  const NAME = () => L("أنيس", "Anees");

  /* ---------- انتقال الصفحات ---------- */
  let navTimer = null,
    inNav = false;
  const fixTitle = () => {
    document.title = document.title.replace(/^(أنيس|Anees) \|/, NAME() + " |");
  };
  const _nav = window.navigate;
  window.navigate = (h) => {
    if (inNav) return _nav(h);
    const page = $("#page");
    clearTimeout(navTimer);
    const run = () => {
      inNav = true;
      _nav(h);
      inNav = false;
      fixTitle();
    };
    if (
      !$("#site").classList.contains("hidden") &&
      page.innerHTML.trim() &&
      !(h || "").startsWith("#/dashboard")
    ) {
      page.classList.add("leaving");
      navTimer = setTimeout(() => {
        run();
        page.classList.remove("leaving", "page-in");
        void page.offsetWidth;
        page.classList.add("page-in");
      }, 200);
    } else run();
  };

  /* ---------- Reveal + عدّاد + إبراز كلمات العناوين ---------- */
  let obs;
  function countUp(el) {
    const to = +el.dataset.to;
    let t0;
    const f = (t) => {
      t0 = t0 || t;
      const p = Math.min((t - t0) / 1200, 1);
      el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(f);
    };
    requestAnimationFrame(f);
  }
  window.setupReveal = () => {
    obs && obs.disconnect();
    $$(
      "#page .why-list li,#page .contact-list li,#page .team-card,#page .price-card,#page .faq-item,#page .bento-card,#page .step,#page .stat,#page .article-card,#page .testimonial",
    ).forEach((e) => e.classList.add("reveal"));
    $$("#page .h2,#page .cta-band h2").forEach((h) => {
      if (h.dataset.hl || h.children.length) return;
      h.dataset.hl = 1;
      const w = h.textContent.trim().split(/\s+/);
      if (w.length >= 4)
        h.innerHTML =
          esc(w.slice(0, -2).join(" ")) +
          ' <span class="hl">' +
          esc(w.slice(-2).join(" ")) +
          "</span>";
    });
    obs = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target;
          el.classList.add("in");
          obs.unobserve(el);
          if (el.matches(".count")) countUp(el);
          setTimeout(() => (el.style.transitionDelay = ""), 1400);
        }),
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
    );
    $$(".reveal,.count").forEach((el) => {
      if (el.classList.contains("reveal")) {
        const sib = [...el.parentElement.children].filter((c) =>
          c.classList.contains("reveal"),
        );
        el.style.transitionDelay = Math.min(sib.indexOf(el), 6) * 80 + "ms";
      }
      obs.observe(el);
    });
  };

  /* Custom wheel-scroll hijack removed for native scrolling */

  /* ---------- الهوم الجديد ---------- */
  const prevHome = ROUTES["#/"];
  ROUTES["#/"] = () => {
    const o = prevHome();
    const ci = o.indexOf('<section class="section" id="home-contact">');
    const contact = ci > -1 ? o.slice(ci) : "";
    const fm = o.match(
      /<section class="section">\s*<div class="container">\s*<div class="section-head center reveal">[\s\S]*?<\/section>/,
    );
    const faq = fm ? fm[0] : "";
    const svc = [
      [
        "activity",
        L("تقييم سلوكي يومي", "Daily behavior assessment"),
        L(
          "7 أسئلة بسيطة بعد كل يوم دراسي تعطيك مؤشرًا واضحًا لتطور الطالب، مع حفظ كل التقييمات لمتابعة الاتجاه.",
          "Seven quick questions after each school day give a clear indicator of progress, with every assessment saved to track trends.",
        ),
        "wide",
      ],
      [
        "brain",
        L("رصد مبكر", "Early signals"),
        L(
          "تلاحظ التغيرات قبل ما تتحول لمشكلة.",
          "Notice changes before they become problems.",
        ),
        "",
      ],
      [
        "user",
        L("لوحة المدرس", "Teacher dashboard"),
        L(
          "فصولك وطلابك وتقاريرك في مكان واحد.",
          "Your classes, students and reports in one place.",
        ),
        "",
      ],
      [
        "users",
        L("تقارير لولي الأمر", "Parent reports"),
        L(
          "تقرير يومي وأسبوعي يصل لولي الأمر بضغطة.",
          "Daily and weekly reports sent to parents in a click.",
        ),
        "",
      ],
      [
        "book",
        L("مقالات إرشادية", "Guidance articles"),
        L(
          "محتوى عربي مبسط عن سلوك الطلاب.",
          "Simple content about student behavior.",
        ),
        "",
      ],
      [
        "video",
        L("فيديوهات تعليمية", "Educational videos"),
        L(
          "مهارات عملية للتعامل مع السلوكيات (قريبًا).",
          "Practical skills for handling behaviors (coming soon).",
        ),
        "wide",
      ],
    ];
    const steps = [
      [
        L("أضف فصلك", "Add your class"),
        L(
          "سمّ الفصل واختر المرحلة العمرية وأضف طلابك وبيانات أولياء أمورهم.",
          "Name the class, pick the age stage, add students and their parents' details.",
        ),
      ],
      [
        L("قيّم يوميًا", "Assess daily"),
        L(
          "أجب عن 7 أسئلة سريعة لكل طالب واحصل على مؤشر وتوصية فورية.",
          "Answer 7 quick questions per student and get an instant score and recommendation.",
        ),
      ],
      [
        L("شارك التقرير", "Share the report"),
        L(
          "أرسل ملخصًا يوميًا أو أسبوعيًا لولي الأمر ليتابع معك.",
          "Send a daily or weekly summary so parents can follow along.",
        ),
      ],
    ];
    const stat = (n, t, s, c) =>
      `<div class="stat" style="--c:var(--c${c})"><div class="stat-ic count" data-to="${n}">0</div><div><b>${t}</b><span>${s}</span></div></div>`;
    return `
<section class="hero2"><div class="container">
  <div class="hero2-top reveal">
    <span class="hero-badge"><span class="dot"></span>${L("منصة الصحة النفسية للطلاب", "Student mental-health platform")}</span>
    <h1 class="h1">${L('اعرف <span class="hl">حال طفلك</span> قبل ما تشوف درجاته', 'Know how your child <span class="hl">really feels</span> before the grades')}</h1>
    <p class="lead">${L("أنيس بيساعد المدرس وولي الأمر يتابعوا سلوك الطالب ومزاجه يوميًا، بتقييم بسيط وتقارير واضحة توصل في وقتها.", "Anees helps teachers and parents follow a student's behavior and mood every day, with simple assessments and clear, timely reports.")}</p>
    <div class="hero-cta">
      <button class="btn btn-primary btn-lg" onclick="openAuth('signup')">${ico("arrowL")} ${L("ابدأ كمدرس", "Start as a teacher")}</button>
      <a href="#/pricing" data-link class="btn btn-ghost btn-lg">${L("اكتشف الباقات", "See plans")}</a>
    </div>
  </div>
  <div class="hero2-stage reveal">
    <div class="hero-card">
      <div class="row"><div class="who"><div class="avatar">${L("م", "M")}</div><div><b>${L("محمد أحمد", "Mohamed Ahmed")}</b><span>${L("الصف الثالث الإعدادي", "Grade 9")}</span></div></div><span class="score-pill good">85%</span></div>
      <div class="mood-label">${L("مؤشر السلوك اليومي", "Daily behavior index")}</div>
      <div class="mood-row"><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i></i><i></i></div>
      <div class="mood-label" style="margin-top:12px;opacity:.7">${L("مثال توضيحي", "Illustrative example")}</div>
    </div>
    <div class="chip c1">${ico("sparkle")} ${L("تحسن ملحوظ هذا الأسبوع", "Clear improvement this week")}</div>
    <div class="chip c2">${ico("mail")} ${L("تقرير أسبوعي لولي الأمر", "Weekly parent report")}</div>
    <div class="chip c3">${ico("shield")} ${L("رصد مبكر", "Early signals")}</div>
  </div>
  <div class="stats-band">
    ${stat(7, L("أسئلة تقييم", "Assessment questions"), L("لكل طالب يوميًا", "per student, daily"), 1)}
    ${stat(5, L("مراحل عمرية", "Age stages"), L("من KG حتى الثانوي", "from KG to secondary"), 2)}
    ${stat(2, L("لغتان", "Languages"), L("عربي وإنجليزي", "Arabic & English"), 4)}
  </div>
</div></section>

<section class="section" id="services"><div class="container">
  <div class="section-head center reveal"><div class="eyebrow">${L("خدماتنا", "Our services")}</div>
    <h2 class="h2">${L("كل ما يحتاجه المدرس وولي الأمر في مكان واحد", "Everything teachers and parents need in one place")}</h2>
    <p class="lead">${L("أدوات بسيطة تساعدك تلاحظ وتفهم وتتصرف صح.", "Simple tools to help you notice, understand and act.")}</p></div>
  <div class="bento">${svc.map((s) => `<div class="bento-card reveal ${s[3]}"><div class="card-icon">${ico(s[0])}</div><h3>${s[1]}</h3><p>${s[2]}</p></div>`).join("")}</div>
</div></section>

<section class="section"><div class="container">
  <div class="section-head center reveal"><div class="eyebrow">${L("كيف يعمل", "How it works")}</div>
    <h2 class="h2">${L("ثلاث خطوات وتبدأ المتابعة", "Three steps and you are tracking")}</h2></div>
  <div class="steps">${steps.map((s, i) => `<div class="step reveal"><div class="step-num">${i + 1}</div><h3>${s[0]}</h3><p>${s[1]}</p></div>`).join("")}</div>
</div></section>

<section class="section"><div class="container why-grid">
  <div class="why-visual reveal"><div>
    <div class="stat-big">${L("1 من 7", "1 in 7")}</div>
    <div class="stat-cap">${L("من المراهقين (10–19 سنة) يعانون من اضطراب نفسي، حسب تقديرات منظمة الصحة العالمية.", "adolescents (10–19) experience a mental disorder, according to WHO estimates.")}</div></div>
    <div class="mini-stats"><div><b>7</b><span>${L("أسئلة يومية", "daily questions")}</span></div><div><b>5</b><span>${L("مراحل عمرية", "age stages")}</span></div></div>
  </div>
  <div class="reveal"><div class="eyebrow">${L("لماذا أنيس", "Why Anees")}</div>
    <h2 class="h2">${L("لأن كل طالب يحتاج من يفهمه، مش بس من يقيّم درجاته", "Because every student needs to be understood, not just graded")}</h2>
    <ul class="why-list">${[
      L(
        "تقييم يومي مبسط بمقاييس واضحة",
        "Simple daily assessment with clear scales",
      ),
      L("تقارير جاهزة تُرسل لولي الأمر", "Ready-made reports for parents"),
      L("متابعة كل طالب داخل الفصل", "Follow every student in the class"),
      L("واجهة عربية وإنجليزية كاملة", "Full Arabic and English interface"),
    ]
      .map(
        (x) =>
          `<li><div class="check">${ico("check")}</div><span>${x}</span></li>`,
      )
      .join("")}</ul>
  </div>
</div></section>

${faq}

<section class="section"><div class="container"><div class="cta-band reveal">
  <h2>${L("جاهز تبدأ متابعة طلابك؟", "Ready to start tracking your students?")}</h2>
  <p>${L("ابدأ بالباقة المجانية: فصل واحد و10 طلاب.", "Start on the free plan: one class and 10 students.")}</p>
  <button class="btn btn-primary btn-lg" onclick="openAuth('signup')">${L("أنشئ حسابك المجاني", "Create your free account")}</button>
</div></div></section>

${contact}`;
  };

  /* ---------- أيقونة الشات ---------- */
  $("#chatFab").innerHTML = `
    <span class="fab-ring" aria-hidden="true"></span>
    <img class="fab-logo" src="Anees-Icon-Light-Transparent.png" onerror="this.onerror=null;this.src='anees-icon-fallback.svg'" alt="${state.lang === "ar" ? "أيقونة مساعد أنيس" : "Anees assistant icon"}" />
    <span class="fab-dot" aria-hidden="true"></span><span class="fab-tip" id="chatFabTooltip" role="tooltip">${state.lang === "ar" ? "اسألني أي حاجة 👋" : "Ask me anything 👋"}</span>`;

  /* ---------- الترجمة الكاملة: لوجو، فوتر، شات ---------- */
  let lastKey = "";
  const _rd = window.renderDashboard;
  window.renderDashboard = () => {
    _rd();
    const stageFilter = $("#classFilterSelect");
    if (stageFilter)
      stageFilter.setAttribute(
        "aria-label",
        L("تصفية حسب المرحلة", "Filter by stage"),
      );
    const m = $("#dashMain");
    if (!m) return;
    const key = state.dashView + "|" + state.currentClass + "|" + state.lang;
    if (key !== lastKey) {
      lastKey = key;
      m.classList.remove("view-in");
      void m.offsetWidth;
      m.classList.add("view-in");
      setTimeout(() => m.classList.remove("view-in"), 1000);
    } else m.classList.remove("view-in");
  };

  // The legacy i18n()/fixStored() helpers no longer exist. Language switching and
  // stored-state restoration are already handled by the canonical functions above.
  // Route initialization is intentionally deferred until all feature modules load.
})();

/* ============================================================
   ROUND 4: تقييم الطالب · تقارير الطالب · رابط/نموذج ولي الأمر
   ============================================================ */
(() => {
  "use strict";
  const ar = () => state.lang === "ar";
  const L = (a, e) => (ar() ? a : e);
  const isPh = (u) => !u || u.includes("your-n8n.example.com");
  const pad = (n) => String(n).padStart(2, "0");
  const iso = (d) =>
    `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  const sod = (d) => {
    const x = new Date(d);
    x.setHours(0, 0, 0, 0);
    return x;
  };
  const DAY = 864e5;
  const loc = () => (ar() ? "ar-EG" : "en-GB");
  const dstr = (d) =>
    new Date(d).toLocaleDateString(loc(), {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  const dshort = (d) =>
    `${pad(new Date(d).getDate())}/${pad(new Date(d).getMonth() + 1)}`;
  const mlabel = (d) =>
    new Date(d).toLocaleDateString(loc(), { month: "long", year: "numeric" });
  const dayName = (d) => (ar() ? AR_DAYS : EN_DAYS)[new Date(d).getDay()];
  const num = (n) => String(n); // أرقام لاتينية زي باقي الموقع (تفادي مشاكل اتجاه % في RTL)
  const kindOf = (sc) => (sc >= 70 ? "good" : sc >= 45 ? "mid" : "low");
  const avg = (a) =>
    a.length ? Math.round(a.reduce((x, y) => x + y, 0) / a.length) : null;
  const stu = (id) => state.students.find((x) => x.id === id);
  const reportsOf = (id) =>
    state.reports
      .filter((r) => r.studentId === id)
      .sort((a, b) => a.date - b.date || (a.id > b.id ? 1 : -1));
  const reportsBetween = (id, from, to) =>
    reportsOf(id).filter((r) => r.date >= +from && r.date < +to);
  const pickLast = (a) => a[a.length - 1];
  // اليوم "خلص" لو عدّى، أو لو إحنا بعد ساعة نهاية اليوم الدراسي
  const dayEnded = (d) => {
    const now = new Date();
    const day = new Date(d);
    day.setHours(0, 0, 0, 0);
    const next = new Date(day);
    next.setDate(next.getDate() + 1);
    if (now >= next) return true;
    return (
      +day === +sod(now) && now.getHours() >= (CONFIG.SCHOOL_DAY_END_HOUR ?? 15)
    );
  };
  const endHourTxt = () => {
    const h = CONFIG.SCHOOL_DAY_END_HOUR ?? 15;
    return ar()
      ? `${num(h > 12 ? h - 12 : h)} ${h >= 12 ? "م" : "ص"}`
      : `${h}:00`;
  };
  const STATUS = [
    ["ممتاز", "Excellent"],
    ["جيد", "Good"],
    ["يحتاج متابعة", "Needs monitoring"],
    ["يحتاج انتباه", "Needs attention"],
    ["يحتاج تدخل", "Needs intervention"],
  ];
  const stLabel = (st) => {
    for (const [a, e] of STATUS) if (st === a || st === e) return ar() ? a : e;
    return st || "";
  };
  const chevPrev = () => ico(ar() ? "chevR" : "chevL");
  const chevNext = () => ico(ar() ? "chevL" : "chevR");

  const sendFail = (url) =>
    toast(
      isPh(url)
        ? L(
            "رابط الإرسال لم يُضبط بعد في CONFIG، لم يتم إرسال أي شيء",
            "Webhook URL not configured; nothing was sent",
          )
        : L(
            "فشل الإرسال. تحقق من الاتصال وأعد المحاولة",
            "Sending failed. Check your connection and retry",
          ),
      "error",
    );

  /* ---------- سجل التقارير المُرسلة (أسبوعي/شهري) ---------- */
  const SENT = "anees.sent";
  const sentAt = (k) => (LS.get(SENT, {}) || {})[k] || null;
  const markSent = (k) => {
    const m = LS.get(SENT, {}) || {};
    m[k] = Date.now();
    LS.set(SENT, m);
  };

  /* ============================================================
     1) تقييم الطالب (أوفرلاي الأسئلة فقط)
     ============================================================ */

  /* ============================================================
   STUDENT PROFILE PAGE (full page, not modal)
   ============================================================ */
  window.openStudentProfile = function (studentId) {
    const requestedId = String(studentId ?? "");
    const student = state.students.find(
      (item) => String(item.id) === requestedId,
    );
    if (!student) {
      toast(
        state.lang === "ar"
          ? "لم يتم العثور على الطالب. حدّث الصفحة وحاول مرة أخرى."
          : "Student not found. Refresh and try again.",
        "error",
      );
      return;
    }

    if (!location.hash.startsWith("#/dashboard/student/")) {
      LS.set("anees.dashboardReturnContext", {
        dashView: state.dashView,
        currentClass: state.currentClass,
        profileStudentId: state.profileStudentId || null,
        profileTab: state.profileTab,
        assessPeriod: state.assessPeriod,
        parentSubsSort: state.parentSubsSort,
      });
    }
    state.dashView = "studentProfile";
    state.profileStudentId = student.id;
    state.currentClass = student.classId || null;
    persistDashboardContext();
    const profileHash = `#/dashboard/student/${encodeURIComponent(String(student.id))}`;
    if (location.hash !== `#${profileHash}`) {
      location.hash = profileHash;
      // Update the view immediately; do not rely solely on async hashchange.
      navigate(profileHash);
    } else {
      renderDashboard();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  window.renderStudentProfileView = function renderStudentProfileView() {
    const isAr = state.lang === "ar";
    const L = (ar, en) => (isAr ? ar : en);
    const student = state.students.find(
      (item) => item.id === state.profileStudentId,
    );
    if (!student) {
      state.dashView = "classes";
      state.currentClass = null;
      return renderClassesView();
    }

    const cls = state.classes.find((item) => item.id === student.classId);
    const period = ["daily", "weekly", "monthly"].includes(state.assessPeriod)
      ? state.assessPeriod
      : "daily";
    const now = new Date();
    const dayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let rangeStart = dayStart;
    let rangeEnd = new Date(dayStart.getTime() + 86400000);
    if (period === "weekly") {
      rangeStart = new Date(dayStart);
      rangeStart.setDate(rangeStart.getDate() - rangeStart.getDay());
      rangeEnd = new Date(rangeStart);
      rangeEnd.setDate(rangeEnd.getDate() + 7);
    } else if (period === "monthly") {
      rangeStart = new Date(now.getFullYear(), now.getMonth(), 1);
      rangeEnd = new Date(now.getFullYear(), now.getMonth() + 1, 1);
    }

    const timestamp = (value) => {
      if (value == null || value === "") return 0;
      if (typeof value === "number" && Number.isFinite(value)) return value;
      const parsed = new Date(value).getTime();
      return Number.isFinite(parsed) ? parsed : 0;
    };
    const reportTime = (report) =>
      timestamp(report.date ?? report.createdAt ?? report.ts);
    const scoreOf = (report) => {
      const pct = Number(report?.totalPercent);
      if (
        report?.totalPercent !== null &&
        report?.totalPercent !== "" &&
        Number.isFinite(pct)
      ) {
        return Math.max(0, Math.min(100, pct));
      }
      const score = Number(report?.totalScore);
      if (
        !Number.isFinite(score) ||
        report?.totalScore === null ||
        report?.totalScore === ""
      )
        return null;
      const possible = Number(report?.totalPossible);
      const normalized =
        Number.isFinite(possible) && possible > 0 && possible < 100
          ? (score / possible) * 100
          : score;
      return Math.max(0, Math.min(100, normalized));
    };
    const localDate = (value) => new Date(timestamp(value));
    const dateLabel = (date, options = { day: "numeric", month: "short" }) =>
      new Intl.DateTimeFormat(isAr ? "ar-EG" : "en-GB", options).format(date);
    const reportLabel = (report) => {
      const time = reportTime(report);
      if (!time) return L("بدون تاريخ", "No date");
      const d = new Date(time);
      return `${(isAr ? AR_DAYS : EN_DAYS)[d.getDay()]} · ${dateLabel(d)}`;
    };
    const isSchoolDay = (report) => {
      const time = reportTime(report);
      if (!time) return true;
      const day = new Date(time).getDay();
      return day >= 0 && day <= 4;
    };
    const allReports = (state.reports || [])
      .filter(
        (report) => report.studentId === student.id && isSchoolDay(report),
      )
      .slice()
      .sort((a, b) => reportTime(b) - reportTime(a));
    const periodReports = allReports.filter((report) => {
      const time = reportTime(report);
      return time >= rangeStart.getTime() && time < rangeEnd.getTime();
    });
    const periodScores = periodReports
      .map(scoreOf)
      .filter((score) => score !== null);
    const average = periodScores.length
      ? Math.round(
          periodScores.reduce((total, score) => total + score, 0) /
            periodScores.length,
        )
      : null;
    const latest =
      allReports.find((report) => scoreOf(report) !== null) ||
      allReports[0] ||
      null;
    const latestScore = latest ? scoreOf(latest) : null;
    // Teacher assessment percentages represent concern/risk, not achievement.
    // Higher values must use warning colors and stronger risk labels.
    const tone = (score) =>
      score == null
        ? "none"
        : score >= 70
          ? "low"
          : score >= 45
            ? "mid"
            : score >= 20
              ? "watch"
              : "good";
    const overallLabel = (score) =>
      score == null
        ? L("لا توجد بيانات بعد", "No data yet")
        : score >= 70
          ? L("خطورة عالية جدًا", "Very high risk")
          : score >= 45
            ? L("خطورة مرتفعة", "High risk")
            : score >= 20
              ? L("خطورة متوسطة", "Moderate risk")
              : L("خطورة منخفضة", "Low risk");
    const rangeLabel =
      period === "daily"
        ? dateLabel(dayStart, {
            weekday: "long",
            day: "numeric",
            month: "long",
          })
        : period === "weekly"
          ? `${dateLabel(rangeStart)} – ${dateLabel(new Date(rangeEnd.getFullYear(), rangeEnd.getMonth(), rangeEnd.getDate() - 1))}`
          : dateLabel(rangeStart, { month: "long", year: "numeric" });

    let parentSubs = Array.isArray(state.parentSubs?.[student.id])
      ? state.parentSubs[student.id].slice()
      : [];
    try {
      if (student.formToken) {
        const storedForms = LS.get("anees.parentForms", {}) || {};
        let stored = storedForms[student.formToken];
        if (stored && !Array.isArray(stored)) stored = [stored];
        if (Array.isArray(stored)) {
          const seen = new Set(
            parentSubs.map((sub) => sub.id || String(sub.submittedAt || "")),
          );
          stored.forEach((sub) => {
            const key = sub?.id || String(sub?.submittedAt || "");
            if (sub && key && !seen.has(key)) {
              parentSubs.push(sub);
              seen.add(key);
            }
          });
        }
      }
    } catch (error) {
      // Keep already-loaded parent replies available if local legacy data is malformed.
    }
    const subTime = (sub) => timestamp(sub.submittedAt ?? sub.createdAt);
    const parentSort = ["newest", "oldest", "high", "low"].includes(
      state.parentSubsSort,
    )
      ? state.parentSubsSort
      : "newest";
    const sortedSubs = parentSubs.slice().sort((a, b) => {
      if (parentSort === "oldest") return subTime(a) - subTime(b);
      if (parentSort === "high")
        return (
          Number(b.analysis?.overall ?? -1) - Number(a.analysis?.overall ?? -1)
        );
      if (parentSort === "low")
        return (
          Number(a.analysis?.overall ?? 101) -
          Number(b.analysis?.overall ?? 101)
        );
      return subTime(b) - subTime(a);
    });
    const visibleSubs = sortedSubs;

    let parentLink = "";
    try {
      if (typeof window.getParentFormLink === "function")
        parentLink = window.getParentFormLink(student.id) || "";
      else if (student.formToken)
        parentLink = `${location.href.split("#")[0]}#/parent/${encodeURIComponent(student.formToken)}`;
    } catch (error) {
      if (student.formToken)
        parentLink = `${location.href.split("#")[0]}#/parent/${encodeURIComponent(student.formToken)}`;
    }
    const waNumber = String(student.parentPhone || "").replace(/\D/g, "");
    const normalizedWaNumber = waNumber.startsWith("00")
      ? waNumber.slice(2)
      : waNumber.startsWith("0")
        ? `20${waNumber.slice(1)}`
        : waNumber;
    const waText = L(
      `أهلًا بك أستاذ/ة ${student.parentName || ""} 👋\n\nمن فضلك املأ نموذج متابعة حالة ${student.name}:\n\n${parentLink}\n\nشكرًا — فريق أنيس`,
      `Hello ${student.parentName || ""} 👋\n\nPlease fill in the wellbeing form for ${student.name}:\n\n${parentLink}\n\nThank you — Anees`,
    );
    const waHref =
      parentLink && normalizedWaNumber
        ? `https://wa.me/${normalizedWaNumber}?text=${encodeURIComponent(waText)}`
        : "";
    const tab = state.profileTab === "parent" ? "parent" : "assess";
    const info = (icon, label, value, extra = "") => `
    <div class="sp-info-item">
      <span class="sp-info-icon">${ico(icon)}</span>
      <div class="sp-info-copy"><span class="sp-info-label">${label}</span><strong ${extra}>${value || "—"}</strong></div>
    </div>`;
    const insight = (score) => {
      if (score == null)
        return {
          kind: "none",
          text: L(
            "لا توجد بيانات كافية لتكوين ملخص.",
            "There is not enough data for a summary.",
          ),
        };
      if (score < 30)
        return {
          kind: "low",
          text: L(
            "تحتاج الحالة إلى مراجعة بشرية للملاحظات وتحديد دعم مناسب؛ الدرجة ليست تشخيصًا طبيًا.",
            "A human should review the notes and decide on appropriate support; this score is not a medical diagnosis.",
          ),
        };
      if (score < 45)
        return {
          kind: "low",
          text: L(
            "يُفضّل مراجعة الملاحظات ووضع خطة دعم مناسبة.",
            "Review the notes and consider an appropriate support plan.",
          ),
        };
      if (score < 70)
        return {
          kind: "mid",
          text: L(
            "توجد مؤشرات تستحق المتابعة في التقييم القادم.",
            "Some indicators deserve follow-up in the next assessment.",
          ),
        };
      return {
        kind: "good",
        text: L(
          "المؤشر الحالي مطمئن؛ استمر في المتابعة الدورية.",
          "The current indicator is reassuring; continue regular follow-up.",
        ),
      };
    };
    const trendReports = allReports
      .filter((report) => scoreOf(report) !== null)
      .slice(0, 8)
      .reverse();
    const trendMarkup = trendReports.length
      ? trendReports
          .map((report) => {
            const score = scoreOf(report);
            const d = new Date(reportTime(report));
            const shortDate = dateLabel(d, { day: "numeric", month: "short" });
            return `<div class="sp-chart-column" title="${esc(shortDate)} · ${score}%">
          <span class="sp-chart-score">${score}</span>
          <div class="sp-chart-track"><div class="sp-chart-fill ${tone(score)}" style="height:${Math.max(3, score)}%"></div></div>
          <span class="sp-chart-date">${esc(shortDate)}</span>
        </div>`;
          })
          .join("")
      : `<div class="sp-chart-empty">${L("سيظهر تطور التقييم بعد تسجيل أول تقييم.", "The trend will appear after the first assessment.")}</div>`;

    const reportCards = periodReports.length
      ? `<div class="sp-report-list">${periodReports
          .map((report) => {
            const score = scoreOf(report);
            const ai =
              typeof report.aiAnalysis === "string"
                ? report.aiAnalysis
                : report.aiAnalysis?.summary ||
                  report.aiAnalysis?.overview ||
                  report.aiAnalysis?.recommendation ||
                  report.aiRecommendation ||
                  "";
            const rec =
              typeof report.recommendation === "string"
                ? report.recommendation
                : "";
            const status = statusLabel(report.status) || overallLabel(score);
            const answerDetails =
              report.scores && typeof report.scores === "object"
                ? BEHAVIOR_QUESTIONS.filter((q) =>
                    Number.isFinite(Number(report.scores[q.key])),
                  )
                    .map((q) => {
                      const value = Number(report.scores[q.key]);
                      const scale = BEHAVIOR_SCALE.find(
                        (item) => item.v === value,
                      );
                      return `<div class="sp-answer-row"><span>${esc(isAr ? q.ar : q.en)}</span><strong>${value}/4 · ${esc(scale ? (isAr ? scale.ar : scale.en) : "")}</strong></div>`;
                    })
                    .join("")
                : "";
            const scoreBreakdown =
              report.scoreBreakdown && typeof report.scoreBreakdown === "object"
                ? `<p class="sp-note"><b>${L("تفصيل الدرجة", "Score breakdown")}:</b> ${esc(String(report.scoreBreakdown.answersTotal ?? report.answersTotal ?? "—"))}/80 + ${esc(String(report.scoreBreakdown.notesScore ?? report.notesScore ?? "—"))}/4 = ${esc(String(report.scoreBreakdown.finalTotal ?? report.finalTotal ?? report.totalScore ?? "—"))}/84</p>`
                : "";
            return `<details class="sp-report-card">
          <summary>
            <span class="sp-report-score ${tone(score)}">${score == null ? "—" : `${score}%`}</span>
            <span class="sp-report-summary"><strong>${esc(status)}</strong><small>${esc(reportLabel(report))}</small></span>
            <span class="sp-acc-chev">${ico("chev")}</span>
          </summary>
          <div class="sp-report-body">
            ${report.notes ? `<p class="sp-note"><b>${L("ملاحظات المدرس", "Teacher notes")}:</b> ${esc(report.notes)}</p>` : `<p class="sp-note is-muted">${L("لم تُضف ملاحظات لهذا التقييم.", "No teacher notes were added.")}</p>`}
            ${rec ? `<p class="sp-note"><b>${L("التوصية", "Recommendation")}:</b> ${esc(rec)}</p>` : ""}
            ${ai ? `<p class="sp-note sp-ai-summary"><b>${L("ملخص التحليل", "AI analysis")}:</b> ${esc(ai)}</p>` : ""}
            ${scoreBreakdown}
            ${answerDetails ? `<div class="sp-answer-details"><h4>${L("إجابات التقييم", "Assessment answers")}</h4>${answerDetails}</div>` : ""}
            ${report.automationStatus === "failed" ? `<p class="sp-inline-alert">${L("تم حفظ التقييم، لكن التحليل الخارجي لم يكتمل.", "The assessment is saved, but external analysis did not complete.")}</p>` : ""}
            ${["failed", "not_configured"].includes(report.automationStatus) ? `<button type="button" class="btn btn-ghost btn-sm" onclick="retryAssessmentAutomation('${esc(report.id)}')">${L("إعادة محاولة التحليل", "Retry analysis")}</button>` : ""}
          </div>
        </details>`;
          })
          .join("")}</div>`
      : `<div class="sp-empty-state">
        <span class="sp-empty-icon">${ico("activity")}</span>
        <h3>${L("لا توجد تقييمات في هذه الفترة", "No assessments in this period")}</h3>
        <p>${L("الفترة المحددة لا تحتوي على تقييمات مسجلة من الأحد إلى الخميس.", "There are no assessments recorded for the selected period (Sunday–Thursday).")}</p>
        ${period === "daily" ? `<button type="button" class="btn btn-primary" onclick="openAssessModal('${esc(student.id)}')">${ico("plus")} ${L("إضافة تقييم", "Add assessment")}</button>` : `<p class="sp-note is-muted">${L("للتقييم اليومي، اختر تبويب «يومي».", "For daily assessment, switch to the Daily tab.")}</p>`}
      </div>`;

    const parentCards = visibleSubs.length
      ? `<div class="parent-subs-list">${visibleSubs
          .map((sub, index) => {
            const storedOverall =
              sub.analysis?.overall ??
              sub.analysis?.overallScore ??
              sub.overallScore ??
              sub.totalScore;
            const overallValue =
              storedOverall == null || storedOverall === ""
                ? null
                : Number(storedOverall);
            const profileInsight =
              typeof window.getParentProfileInsights === "function" &&
              (sub.answers || sub.a)
                ? window.getParentProfileInsights(
                    sub.answers || sub.a,
                    state.lang,
                    overallValue,
                  )
                : null;
            const rawOverall = Number.isFinite(overallValue)
              ? Math.max(0, Math.min(100, overallValue))
              : profileInsight?.overall;
            const overallScore =
              rawOverall == null || !Number.isFinite(Number(rawOverall))
                ? null
                : Number(rawOverall);
            const overallCopy =
              profileInsight ||
              (typeof window.getParentOverallCopy === "function"
                ? window.getParentOverallCopy(
                    overallScore,
                    state.lang,
                    Array.isArray(sub.analysis?.flags)
                      ? sub.analysis.flags.length
                      : 0,
                  )
                : null);
            const savedTeacherNote =
              state.lang === "en"
                ? sub.teacherNoteEn ||
                  sub.analysis?.teacherNoteEn ||
                  sub.analysis?.overallNoteEn ||
                  (sub.lang === "en" || !sub.lang
                    ? sub.teacherNote || sub.analysis?.teacherNote || ""
                    : "")
                : sub.teacherNoteAr ||
                  sub.analysis?.teacherNoteAr ||
                  sub.analysis?.overallNoteAr ||
                  (sub.lang === "ar" || !sub.lang
                    ? sub.teacherNote || sub.analysis?.teacherNote || ""
                    : "");
            const summary =
              savedTeacherNote ||
              overallCopy?.overallNote ||
              overallCopy?.note ||
              insight(overallScore).text;
            const savedDomains = Array.isArray(sub.analysis?.domains)
              ? sub.analysis.domains
              : [];
            const domains = profileInsight?.domains?.length
              ? profileInsight.domains
              : savedDomains.map((domain) => {
                  const key = String(
                    domain.d ||
                      domain.domain ||
                      domain.name ||
                      domain.key ||
                      domain.category ||
                      "",
                  );
                  const rawDomainScore =
                    domain.score ??
                    domain.percentage ??
                    domain.percent ??
                    domain.value;
                  const domainScore =
                    rawDomainScore == null || rawDomainScore === ""
                      ? null
                      : Number(rawDomainScore);
                  const copy =
                    typeof window.getParentDomainCopy === "function"
                      ? window.getParentDomainCopy(key, domainScore, state.lang)
                      : null;
                  return {
                    key,
                    label: copy?.label || key,
                    score: domainScore,
                    note: copy?.note || domain.note || domain.notes || "",
                    kind: copy?.kind || tone(domainScore),
                  };
                });
            const recommendations =
              profileInsight?.recommendations ||
              overallCopy?.recommendations ||
              [];
            const aiValue =
              sub.aiAnalysis ??
              sub.aiSummary ??
              sub.analysis?.aiAnalysis ??
              sub.analysis?.aiSummary ??
              "";
            const localizedAiSource =
              typeof aiValue === "string"
                ? { generic: aiValue }
                : state.lang === "en"
                  ? {
                      localized:
                        aiValue.en ||
                        aiValue.summary_en ||
                        aiValue.summaryEn ||
                        "",
                      generic:
                        aiValue.summary ||
                        aiValue.overview ||
                        aiValue.recommendation ||
                        "",
                    }
                  : {
                      localized:
                        aiValue.ar ||
                        aiValue.summary_ar ||
                        aiValue.summaryAr ||
                        "",
                      generic:
                        aiValue.summary ||
                        aiValue.overview ||
                        aiValue.recommendation ||
                        "",
                    };
            const aiSource =
              localizedAiSource.localized ||
              (!sub.lang || sub.lang === state.lang
                ? localizedAiSource.generic
                : "");
            return `<details class="parent-sub-acc" ${index === 0 ? "open" : ""}>
          <summary>
            <div class="parent-sub-meta"><span class="sp-parent-date">${subTime(sub) ? esc(fmtDate(sub.submittedAt || sub.createdAt)) : L("رد بدون تاريخ", "Undated reply")}</span>
              <span class="sp-report-score ${tone(overallScore)}">${overallScore == null ? "—" : `${overallScore}%`}</span></div>
            <span class="sp-acc-chev" aria-hidden="true">${ico("chev")}</span>
          </summary>
          <div class="ps-body">
            ${aiSource ? `<section class="sp-ai-summary"><strong>${L("ملخص تحليل n8n / AI", "n8n / AI analysis")}</strong><p>${esc(String(aiSource))}</p></section>` : ""}
            ${
              domains.length
                ? `<div class="sp-parent-domains"><h4>${L("تحليل الجوانب النفسية", "Psychological aspects")}</h4>${domains
                    .map((domain) => {
                      const domainScore =
                        domain.score == null || domain.score === ""
                          ? null
                          : Number(domain.score);
                      return `<article class="sp-domain-row ${domain.kind || tone(domainScore)}"><div class="sp-domain-head"><span>${esc(String(domain.label || domain.key || L("مجال", "Domain")))}</span><strong>${Number.isFinite(domainScore) ? `${Math.round(domainScore)}%` : "—"}</strong></div>
                ${Number.isFinite(domainScore) ? `<div class="sp-domain-progress" aria-label="${esc(String(domain.label || domain.key || ""))}"><span style="width:${Math.max(0, Math.min(100, domainScore))}%"></span></div>` : ""}
                ${domain.note ? `<p class="sp-note">${esc(String(domain.note))}</p>` : `<p class="sp-note is-muted">${L("لا توجد تفاصيل إضافية لهذا المجال حتى الآن.", "No additional detail is available for this domain yet.")}</p>`}
              </article>`;
                    })
                    .join("")}</div>`
                : `<p class="sp-note is-muted">${L("لم تصل تفاصيل الجوانب النفسية بعد. ستظهر هنا عند توفر إجابات التحليل.", "Psychological-aspect details will appear here when analysis responses are available.")}</p>`
            }
            ${sub.notes ? `<p class="sp-note"><b>${L("ملاحظات ولي الأمر", "Parent notes")}:</b> ${esc(sub.notes)}</p>` : ""}
            <p class="sp-disclaimer">${ico("info")} ${L("هذه مؤشرات استرشادية مبنية على إجابات ولي الأمر، وليست تشخيصًا طبيًا. تُراجع النتائج مع ملاحظات المدرس والسياق المدرسي.", "These are advisory indicators based on the parent's answers, not a medical diagnosis. Review them alongside teacher notes and school context.")}</p>
            <section class="sp-parent-insight" role="note" aria-label="${L("إرشادات للمدرس", "Teacher guidance")}">
              <div class="sp-parent-insight-head"><div class="sp-parent-insight-title"><span class="sp-parent-insight-icon" aria-hidden="true">${ico("info")}</span><h3>${L("ملاحظة إجمالية للمدرس", "Overall teacher note")}</h3></div><span class="sp-parent-level ${overallCopy?.overallKind || overallCopy?.kind || tone(overallScore)}">${esc(overallCopy?.overallLabel || overallCopy?.label || L("غير محدد", "Not classified"))}</span></div>
              <p>${esc(summary)}</p>
              ${recommendations.length ? `<div class="sp-recommendations"><strong>${L("خطوات مقترحة للمتابعة", "Suggested follow-up steps")}</strong><ul>${recommendations.map((item) => `<li>${esc(item)}</li>`).join("")}</ul></div>` : ""}
            </section>
          </div>
        </details>`;
          })
          .join("")}</div>`
      : `<div class="sp-empty-state"><span class="sp-empty-icon">${ico("mail")}</span><h3>${L("لا توجد ردود حتى الآن", "No parent replies yet")}</h3><p>${L("عند إرسال ولي الأمر للنموذج، ستظهر الردود هنا.", "Replies will appear here after the parent submits the form.")}</p></div>`;

    const ageStage = cls?.ageStage
      ? AGE_STAGES[cls.ageStage]?.[isAr ? "ar" : "en"] || ""
      : "";
    return `
    <main class="stu-profile" aria-labelledby="spStudentName">
      <div class="sp-topbar">
        <div class="sp-top-actions">
          <button type="button" class="btn btn-ghost btn-sm" onclick="openStudentForm('${esc(student.classId)}','${esc(student.id)}')">${ico("edit")} ${L("تعديل البيانات", "Edit student")}</button>
          <button type="button" class="btn btn-primary btn-sm" onclick="openAssessModal('${esc(student.id)}')">${ico("plus")} ${L("إضافة تقييم", "Add assessment")}</button>
        </div>
      </div>

      <section class="sp-hero">
        <div class="sp-hero-main">
          <div class="sp-identity-block">
            <div class="sp-identity-row">
              <div class="sp-avatar" aria-hidden="true">${esc(Array.from(initials(student.name).trim())[0] || "؟")}</div>
              <div class="sp-hero-copy">
                <span class="sp-eyebrow">${L("ملف الطالب", "Student profile")}</span>
                <h1 id="spStudentName">${esc(student.name)}</h1>
              </div>
            </div>
            <div class="sp-meta-chips">
              ${cls?.name ? `<span>${ico("book")} ${L("فصل", "Class")} ${esc(cls.name)}</span>` : ""}
              ${ageStage ? `<span>${ico("users")} ${esc(ageStage)}</span>` : ""}
              ${cls?.schoolName ? `<span>${ico("folder")} ${esc(cls.schoolName)}</span>` : ""}
            </div>
          </div>
          <div class="sp-latest-score ${tone(latestScore)}">
            <span>${L("آخر تقييم", "Latest score")}</span>
            <strong>${latestScore == null ? "—" : `${latestScore}%`}</strong>
            <small>${esc(overallLabel(latestScore))}</small>
            ${latest ? `<small>${esc(reportLabel(latest))}</small>` : ""}
          </div>
        </div>
      </section>

      <section class="sp-stat-grid" aria-label="${L("ملخص الطالب", "Student summary")}">
        <article class="sp-stat-card"><span class="sp-stat-icon">${ico("activity")}</span><div><span class="sp-stat-label">${L("متوسط الفترة", "Period average")}</span><strong>${average == null ? "—" : `${average}%`}</strong><small>${esc(rangeLabel)}</small></div></article>
        <article class="sp-stat-card"><span class="sp-stat-icon">${ico("calendar")}</span><div><span class="sp-stat-label">${L("تقييمات الفترة", "Assessments in period")}</span><strong>${periodReports.length}</strong><small>${L("حسب الفترة المحددة", "For selected period")}</small></div></article>
        <article class="sp-stat-card"><span class="sp-stat-icon">${ico("chart")}</span><div><span class="sp-stat-label">${L("إجمالي التقييمات", "All assessments")}</span><strong>${(state.reports || []).filter((report) => report.studentId === student.id).length}</strong><small>${L("كل السجل المتاح", "All available records")}</small></div></article>
        <article class="sp-stat-card"><span class="sp-stat-icon">${ico("users")}</span><div><span class="sp-stat-label">${L("ردود ولي الأمر", "Parent replies")}</span><strong>${parentSubs.length}</strong><small>${L("استجابات النموذج", "Form responses")}</small></div></article>
      </section>

      <div class="sp-main-grid">
        <section class="sp-card sp-chart-card">
          <div class="sp-card-heading"><div><h2>${L("تطور التقييمات", "Assessment trend")}</h2><p>${L("آخر 8 تقييمات مسجلة", "Last 8 recorded assessments")}</p></div><span class="sp-heading-icon">${ico("chart")}</span></div>
          <div class="sp-chart" role="img" aria-label="${L("رسم أعمدة لآخر درجات الطالب", "Bar chart of the student's latest scores")}">${trendMarkup}</div>
        </section>
        <section class="sp-card sp-info-card-panel">
          <div class="sp-card-heading"><div><h2>${L("بيانات الطالب وولي الأمر", "Student and parent details")}</h2><p>${L("معلومات الاتصال والسياق الدراسي", "Contact and school context")}</p></div><span class="sp-heading-icon">${ico("user")}</span></div>
          <div class="sp-info-list">
            ${info("users", L("ولي الأمر", "Parent"), esc(student.parentName || "—"))}
            ${info("phone", L("رقم الهاتف", "Phone number"), esc(student.parentPhone || "—"), 'dir="ltr"')}
            ${info("mail", L("البريد الإلكتروني", "Email address"), esc(student.parentEmail || "—"), 'dir="ltr"')}
            ${info("book", L("الفصل", "Class"), esc(cls?.name || "—"))}
            ${info("folder", L("المدرسة", "School"), esc(cls?.schoolName || "—"))}
          </div>
        </section>
      </div>

      <section class="sp-card sp-parent-card">
        <div class="sp-card-heading"><div><h2>${L("متابعة ولي الأمر", "Parent follow-up")}</h2><p>${L("شارك نموذج المتابعة الآمن مع ولي الأمر", "Share the parent follow-up form")}</p></div><span class="sp-heading-icon">${ico("mail")}</span></div>
        ${parentLink ? `<div class="sp-link-row"><input type="text" class="sp-link-input" id="spParentLink" readonly dir="ltr" aria-label="${L("رابط نموذج ولي الأمر", "Parent form link")}" value="${esc(parentLink)}" /><button type="button" class="btn btn-ghost sp-copy-link" onclick="copyParentFormLink()">${ico("copy")} ${L("نسخ", "Copy")}</button>${waHref ? `<a class="btn btn-primary sp-whatsapp-link" target="_blank" rel="noopener noreferrer" onclick="registerParentLink('${esc(student.id)}')" href="${waHref}">${ico("whatsapp")} ${L("إرسال عبر واتساب", "Send via WhatsApp")}</a>` : ""}</div>` : `<p class="sp-note is-muted">${L("رابط نموذج ولي الأمر غير متاح. تحقق من إنشاء رمز النموذج للطالب.", "The parent form link is not available. Check whether a form token has been created for this student.")}</p>`}
      </section>

      <section class="sp-history-section">
        <div class="sp-tabs" role="tablist" aria-label="${L("سجل الطالب", "Student records")}">
          <button type="button" role="tab" aria-selected="${tab === "assess"}" class="sp-tab ${tab === "assess" ? "active" : ""}" onclick="state.profileTab='assess';renderDashboard()">${ico("activity")} ${L("سجل التقييمات", "Assessments")}</button>
          <button type="button" role="tab" aria-selected="${tab === "parent"}" class="sp-tab ${tab === "parent" ? "active" : ""}" onclick="state.profileTab='parent';renderDashboard()">${ico("mail")} ${L("ردود ولي الأمر", "Parent replies")}</button>
        </div>
        ${
          tab === "assess"
            ? `
          <section class="sp-card sp-history-card">
            <div class="sp-card-heading sp-history-heading">
              <div>
                <h2>${L("تاريخ التقييمات", "Assessment history")}</h2>
                <p>${esc(rangeLabel)} · ${periodReports.length} ${L("تقييم", "assessments")}</p>
              </div>
              <div class="sp-period-bar" role="group" aria-label="${L("الفترة الزمنية", "Time period")}">
                <button type="button" class="sp-period ${period === "daily" ? "on" : ""}" aria-pressed="${period === "daily"}" onclick="state.assessPeriod='daily';renderDashboard()">${L("يومي", "Daily")}</button>
                <button type="button" class="sp-period ${period === "weekly" ? "on" : ""}" aria-pressed="${period === "weekly"}" onclick="state.assessPeriod='weekly';renderDashboard()">${L("أسبوعي", "Weekly")}</button>
                <button type="button" class="sp-period ${period === "monthly" ? "on" : ""}" aria-pressed="${period === "monthly"}" onclick="state.assessPeriod='monthly';renderDashboard()">${L("شهري", "Monthly")}</button>
              </div>
            </div>
            ${reportCards}
            ${
              tab === "assess" && period === "daily" && periodReports.length > 0
                ? `<div class="sp-add-assess-foot">
              <button type="button" class="btn btn-primary" onclick="openAssessModal('${esc(student.id)}')">${ico("plus")} ${L("إضافة تقييم", "Add assessment")}</button>
            </div>`
                : ""
            }
          </section>`
            : `
          <section class="sp-card sp-history-card">
            <div class="sp-card-heading sp-history-heading"><div><h2>${L("استجابات ولي الأمر", "Parent responses")}</h2><p>${visibleSubs.length} ${L("من", "of")} ${parentSubs.length} ${L("رد مسجل", "recorded replies")}</p></div>
              <div class="sp-filter-toolbar">
                <div class="sp-sort-control"><select id="parentSubsSort" class="cs-toolbar" aria-label="${L("ترتيب استجابات ولي الأمر", "Sort parent responses")}" onchange="state.parentSubsSort=this.value;renderDashboard()">
                  <option value="newest" ${parentSort === "newest" ? "selected" : ""}>${L("الأحدث أولًا", "Newest first")}</option>
                  <option value="oldest" ${parentSort === "oldest" ? "selected" : ""}>${L("الأقدم أولًا", "Oldest first")}</option>
                  <option value="high" ${parentSort === "high" ? "selected" : ""}>${L("الأعلى تقييمًا", "Highest score")}</option>
                  <option value="low" ${parentSort === "low" ? "selected" : ""}>${L("الأقل تقييمًا", "Lowest score")}</option>
                </select></div>
              </div>
            </div>
            ${parentCards}
          </section>`
        }
      </section>
    </main>`;
  };

  window.openAssessModal = (id, dateISO) => {
    const s = stu(id);
    if (!s) return;
    const box = $("#genericModalBody");
    box.classList.add("lg");
    box.classList.remove("md");
    state.detailTab = "daily";
    box.innerHTML = `
      <div class="modal-body">
        <button type="button" class="modal-close" onclick="closeGenericModal()" aria-label="${L("إغلاق", "Close")}">${ico("x")}</button>
        <div class="modal-step"><span class="dot"></span> ${L("تقييم الطالب", "Student assessment")}</div>
        <h2 class="assess-title">${esc(s.name)}</h2>
        ${renderDailyTab(id, s, dayName(new Date()), iso(new Date()), [])}
      </div>`;
    $("#genericModal").classList.add("open");
    setTimeout(() => enhanceCustomSelects($("#genericModalBody")), 0);
    if (dateISO && $("#bDate")) {
      $("#bDate").value = dateISO;
      $("#bDay").selectedIndex = new Date(dateISO + "T12:00:00").getDay();
    }
  };

  /* ============================================================
     2) رابط ولي الأمر: توكن فريد لكل طالب
     ============================================================ */
  const genToken = () => {
    const used = new Set(
      state.students.map((s) => s.formToken).filter(Boolean),
    );
    let t;
    do {
      const a = new Uint8Array(16);
      crypto.getRandomValues(a);
      t = [...a].map((b) => b.toString(16).padStart(2, "0")).join("");
    } while (used.has(t));
    return t;
  };
  const ensureToken = (s) => {
    if (!s.formToken) {
      s.formToken = genToken();
      LS.set("anees.students", state.students);
    }
    return s.formToken;
  };
  const formLink = (s) => {
    const t = ensureToken(s);
    // The token is a secret capability link; never place names, phone, email, or student IDs in the URL.
    return location.href.split("#")[0] + "#/parent/" + encodeURIComponent(t);
  };
  window.getParentFormLink = (studentId) => {
    const student = stu(studentId);
    return student ? formLink(student) : "";
  };
  const registeringTokens = new Set();
  const registerLink = async (s) => {
    if (!s) return false;
    const token = ensureToken(s);
    if (registeringTokens.has(token)) return false;
    registeringTokens.add(token);
    try {
      let dbRegistered = false;
      if (window.AneesCloud?.registerParentLink && state.user?.id) {
        await window.AneesCloud.registerParentLink(token, s.id, s.name);
        dbRegistered = true;
      }
      if (!CONFIG.USE_N8N || isPh(CONFIG.N8N_PARENT_FORM)) {
        s.formRegistered = dbRegistered;
        LS.set("anees.students", state.students);
        return dbRegistered;
      }
      const res = await sendToN8N(CONFIG.N8N_PARENT_FORM, {
        action: "register",
        eventId: "parent-link:" + token,
        token,
        studentId: s.id,
        studentName: s.name,
        parentName: s.parentName,
        parentEmail: s.parentEmail,
        link: formLink(s),
        teacher: { name: state.user?.name, email: state.user?.email },
      });
      if (!res && !dbRegistered) return false;
      s.formRegistered = true;
      LS.set("anees.students", state.students);
      return true;
    } finally {
      registeringTokens.delete(token);
    }
  };
  window.registerParentLink = async (id) => {
    const s = stu(id);
    if (!s) return false;
    try {
      return await registerLink(s);
    } catch (error) {
      console.warn("[Anees parent-link registration]", error);
      return false;
    }
  };

  /* ---------- أسئلة ولي الأمر ---------- */
  const FREQ = [
    { v: 0, ar: "أبدًا", en: "Never" },
    { v: 1, ar: "نادرًا", en: "Rarely" },
    { v: 2, ar: "أحيانًا", en: "Sometimes" },
    { v: 3, ar: "غالبًا", en: "Often" },
    { v: 4, ar: "دائمًا", en: "Always" },
  ];
  const DOMAINS = {
    sleep: ["النوم والصحة الجسدية", "Sleep & physical health"],
    mood: ["المزاج", "Mood"],
    social: ["العلاقات الاجتماعية", "Social relationships"],
    school: ["التركيز والمدرسة", "Focus & school"],
    stress: ["التوتر والانفعال", "Stress & emotion"],
  };
  const PQ = [
    // sleep (4)
    {
      k: "s1",
      d: "sleep",
      pos: 0,
      ar: "يجد الطفل صعوبة في النوم أو الاستغراق فيه.",
      en: "The child has difficulty falling or staying asleep.",
    },
    {
      k: "s2",
      d: "sleep",
      pos: 0,
      ar: "يستيقظ الطفل متعبًا أو يبدو عليه النعاس خلال النهار.",
      en: "The child wakes up tired or seems sleepy during the day.",
    },
    {
      k: "s3",
      d: "sleep",
      pos: 0,
      ar: "يشكو الطفل من التعب أو انخفاض الطاقة أثناء أنشطته اليومية.",
      en: "The child complains of fatigue or low energy during daily activities.",
    },
    {
      k: "s4",
      d: "sleep",
      pos: 0,
      ar: "يشكو الطفل من أعراض جسدية متكررة، مثل الصداع أو آلام البطن، دون سبب واضح للملاحظ.",
      en: "The child reports repeated physical symptoms (e.g. headaches or stomach pain) without a clear reason to the observer.",
    },
    // mood (4)
    {
      k: "m1",
      d: "mood",
      pos: 0,
      ar: "يبدو الطفل حزينًا أو منخفض المزاج.",
      en: "The child appears sad or low in mood.",
    },
    {
      k: "m2",
      d: "mood",
      pos: 0,
      ar: "يفقد الطفل الاهتمام باللعب أو الأنشطة التي يستمتع بها عادةً.",
      en: "The child loses interest in play or activities they usually enjoy.",
    },
    {
      k: "m3",
      d: "mood",
      pos: 0,
      ar: "يبدو الطفل سريع الانزعاج أو متقلب المزاج.",
      en: "The child seems easily irritated or mood swings.",
    },
    {
      k: "m4",
      d: "mood",
      pos: 0,
      ar: "يبدو الطفل أقل حيوية أو حماسًا من المعتاد.",
      en: "The child seems less lively or enthusiastic than usual.",
    },
    // social (4)
    {
      k: "c1",
      d: "social",
      pos: 0,
      ar: "ينسحب الطفل من التفاعل مع الأسرة أو الأقران.",
      en: "The child withdraws from interaction with family or peers.",
    },
    {
      k: "c2",
      d: "social",
      pos: 0,
      ar: "يجد الطفل صعوبة في تكوين الصداقات أو الحفاظ عليها.",
      en: "The child has difficulty making or keeping friendships.",
    },
    {
      k: "c3",
      d: "social",
      pos: 0,
      ar: "يدخل الطفل في خلافات متكررة مع الآخرين.",
      en: "The child gets into frequent conflicts with others.",
    },
    {
      k: "c4",
      d: "social",
      pos: 0,
      ar: "يجد الطفل صعوبة في التعبير عن احتياجاته أو طلب المساعدة من الآخرين.",
      en: "The child finds it hard to express needs or ask others for help.",
    },
    // school (4)
    {
      k: "f1",
      d: "school",
      pos: 0,
      ar: "يجد الطفل صعوبة في التركيز على المهام المناسبة لعمره.",
      en: "The child has difficulty focusing on age-appropriate tasks.",
    },
    {
      k: "f2",
      d: "school",
      pos: 0,
      ar: "يتشتت انتباه الطفل بسهولة أثناء الدراسة أو أداء الواجبات.",
      en: "The child is easily distracted while studying or doing homework.",
    },
    {
      k: "f3",
      d: "school",
      pos: 0,
      ar: "يواجه الطفل صعوبة في إكمال المهام أو اتباع التعليمات.",
      en: "The child has difficulty completing tasks or following instructions.",
    },
    {
      k: "f4",
      d: "school",
      pos: 0,
      ar: "يظهر تراجعًا ملحوظًا في المشاركة المدرسية أو إنجاز المهام مقارنة بمستواه المعتاد.",
      en: "There is a noticeable drop in school participation or task completion compared with their usual level.",
    },
    // stress (4)
    {
      k: "t1",
      d: "stress",
      pos: 0,
      ar: "يبدو الطفل قلقًا أو كثير الانشغال بشأن أمور الحياة اليومية.",
      en: "The child seems anxious or overly preoccupied with everyday matters.",
    },
    {
      k: "t2",
      d: "stress",
      pos: 0,
      ar: "ينفعل الطفل بشدة عند مواجهة الإحباط أو التغيير.",
      en: "The child reacts intensely to frustration or change.",
    },
    {
      k: "t3",
      d: "stress",
      pos: 0,
      ar: "يجد الطفل صعوبة في تهدئة نفسه بعد الغضب أو الضيق.",
      en: "The child has difficulty calming down after anger or distress.",
    },
    {
      k: "t4",
      d: "stress",
      pos: 0,
      ar: "يتجنب الطفل المواقف أو الأنشطة التي تبدو صعبة أو مثيرة للتوتر.",
      en: "The child avoids situations or activities that seem difficult or stressful.",
    },
  ];
  const optsOf = (q) => q.opts || FREQ;
  const optLabel = (q, v) => {
    const o = optsOf(q).find((x) => x.v === v);
    return o ? (ar() ? o.ar : o.en) : "—";
  };
  const wellbeing = (q, v) => (q.pos ? v / 4 : 1 - v / 4);
  const riskKind = (q, v) => {
    const risk = q.pos ? 4 - v : v;
    return risk <= 1 ? "good" : risk === 2 ? "mid" : "low";
  };
  const scoreBand = (total) => {
    if (total <= 20) return "low";
    if (total <= 40) return "mid";
    if (total <= 60) return "high";
    return "severe";
  };
  const bandMeta = (band, isAr) => {
    const map = {
      low: {
        ar: {
          title: "خطورة منخفضة",
          desc: "لا تظهر في الإجابات الحالية مؤشرات مرتفعة وفق قواعد المتابعة. استمر في الملاحظة المدرسية المعتادة.",
        },
        en: {
          title: "Low risk",
          desc: "The current answers do not indicate an elevated level under the follow-up rules. Continue routine school observation.",
        },
        cls: "good",
      },
      mid: {
        ar: {
          title: "خطورة متوسطة",
          desc: "توجد مؤشرات تستحق المتابعة ومراجعة الملاحظات، مع التواصل مع المدرسة عند الحاجة.",
        },
        en: {
          title: "Moderate risk",
          desc: "Some indicators merit follow-up and review, with school communication when needed.",
        },
        cls: "mid",
      },
      high: {
        ar: {
          title: "خطورة مرتفعة",
          desc: "تستدعي المؤشرات مراجعة الملاحظات والتنسيق مع فريق المدرسة لتحديد خطوات دعم مناسبة.",
        },
        en: {
          title: "High risk",
          desc: "The indicators warrant review and coordination with the school team to plan appropriate support.",
        },
        cls: "mid",
      },
      severe: {
        ar: {
          title: "خطورة عالية جدًا",
          desc: "تستدعي المؤشرات مراجعة سريعة من فريق المدرسة والتواصل مع ولي الأمر للاتفاق على خطوات دعم واضحة. النتيجة وحدها لا تحدد تشخيصًا أو سببًا.",
        },
        en: {
          title: "Very high risk",
          desc: "The indicators warrant prompt review by the school team and coordination with the parent on clear support steps. This result alone is not a diagnosis.",
        },
        cls: "low",
      },
    };
    const m = map[band] || map.mid;
    return { ...(isAr ? m.ar : m.en), cls: m.cls, band };
  };

  const NARR = {
    sleep: [
      [
        "في مؤشرات واضحة على اضطراب النوم أو الشهية أو شكاوى جسدية متكررة، وده غالبًا بيرتبط بالضغط النفسي.",
        "Clear signs of sleep or appetite disturbance or repeated physical complaints, often linked to psychological stress.",
      ],
      [
        "في مؤشرات متقطعة على اضطراب النوم أو الشهية أو شكاوى جسدية تستحق المتابعة.",
        "Some occasional signs of sleep or appetite disturbance or physical complaints worth monitoring.",
      ],
      [
        "النوم والشهية والحالة الجسدية في وضع جيد حسب ولي الأمر.",
        "Sleep, appetite and physical state look good according to the parent.",
      ],
    ],
    mood: [
      [
        "المزاج منخفض بشكل واضح مع فقدان الاهتمام بالأنشطة، ويحتاج اهتمامًا وحوارًا قريبًا.",
        "Mood is clearly low with loss of interest in activities; needs attention and close conversation.",
      ],
      [
        "ظهرت فترات من الضيق أو قلة الحماس، يفضل ملاحظتها داخل المدرسة.",
        "Periods of low mood or low enthusiasm appeared; worth observing at school.",
      ],
      [
        "المزاج العام مستقر والطالب لسه بيستمتع باهتماماته.",
        "Overall mood is stable and the student still enjoys their interests.",
      ],
    ],
    social: [
      [
        "ميل واضح للانعزال وتجنب الآخرين.",
        "A clear tendency to withdraw and avoid others.",
      ],
      [
        "في ميل أحيانًا للانعزال أو تقليل التفاعل.",
        "Occasional tendency to withdraw or interact less.",
      ],
      [
        "العلاقات الاجتماعية جيدة والطالب متفاعل مع المحيطين.",
        "Social relationships are good and the student interacts well.",
      ],
    ],
    school: [
      [
        "صعوبة واضحة في التركيز ومقاومة للذهاب للمدرسة.",
        "Clear difficulty concentrating and resistance to going to school.",
      ],
      [
        "في صعوبة أحيانًا في التركيز أو في الرغبة في الذهاب للمدرسة.",
        "Sometimes difficulty concentrating or wanting to go to school.",
      ],
      [
        "التركيز والحماس للمدرسة جيدين.",
        "Focus and enthusiasm for school are good.",
      ],
    ],
    stress: [
      [
        "توتر وانفعال مرتفعان بشكل ملحوظ.",
        "Noticeably high tension and irritability.",
      ],
      [
        "في توتر أو انفعال متكرر قبل الامتحانات أو المواقف الضاغطة.",
        "Recurring tension or irritability before exams or stressful situations.",
      ],
      [
        "مستوى التوتر والانفعال في الحدود الطبيعية.",
        "Stress and irritability are within normal limits.",
      ],
    ],
    family: [
      [
        "حصل تغيير كبير في ظروف الأسرة، وده عامل مؤثر لازم يتاخد في الاعتبار.",
        "A major change in family circumstances occurred; an influential factor to take into account.",
      ],
      [
        "حصل تغيير بسيط في ظروف الأسرة ممكن يكون له أثر.",
        "A minor change in family circumstances that may have an effect.",
      ],
      [
        "مفيش تغييرات مؤثرة في ظروف الأسرة.",
        "No significant changes in family circumstances.",
      ],
    ],
  };
  const LEVELS = {
    stable: {
      kind: "good",
      ar: "مستقرة",
      en: "Stable",
      reco: [
        [
          "استمر في الدعم والتشجيع الحالي.",
          "Keep up the current support and encouragement.",
        ],
        [
          "كمّل التقييم اليومي لملاحظة أي تغيّر مبكر.",
          "Continue daily assessments to catch any early change.",
        ],
      ],
    },
    watch: {
      kind: "mid",
      ar: "تحتاج متابعة",
      en: "Needs monitoring",
      reco: [
        [
          "اتكلم مع الطالب بشكل ودّي وافهم اللي بيضايقه.",
          "Talk with the student in a friendly way to understand what bothers them.",
        ],
        [
          "قارن التقييم اليومي بإجابات ولي الأمر بانتظام.",
          "Regularly compare daily assessments with the parent's answers.",
        ],
        [
          "شارك ولي الأمر ملاحظاتك.",
          "Share your observations with the parent.",
        ],
      ],
    },
    attention: {
      kind: "low",
      ar: "تحتاج انتباه",
      en: "Needs attention",
      reco: [
        [
          "رتّب جلسة مع المرشد الطلابي.",
          "Arrange a session with the school counselor.",
        ],
        [
          "تواصل مع ولي الأمر لمناقشة المؤشرات.",
          "Contact the parent to discuss the indicators.",
        ],
        [
          "راقب النوم والمزاج والتفاعل خلال الأسابيع الجاية.",
          "Monitor sleep, mood and interaction over the coming weeks.",
        ],
      ],
    },
    intervene: {
      kind: "low",
      ar: "تحتاج تدخل",
      en: "Needs intervention",
      reco: [
        [
          "ننصح بالتواصل السريع مع الأسرة ومتخصص نفسي.",
          "We recommend contacting the family and a mental health specialist promptly.",
        ],
        [
          "حوّل الحالة للمرشد الطلابي فورًا.",
          "Refer the case to the school counselor right away.",
        ],
        [
          "وفّر بيئة داعمة وآمنة للطالب داخل الفصل.",
          "Provide a supportive, safe environment for the student in class.",
        ],
      ],
    },
  };
  const toAnswers = (a) => {
    if (Array.isArray(a))
      return Object.fromEntries(a.map((x) => [x.key, Number(x.value)]));
    return Object.fromEntries(
      Object.entries(a || {}).map(([k, v]) => [k, Number(v)]),
    );
  };
  function analyze(answersRaw) {
    const answers = toAnswers(answersRaw);
    const per = {};
    const perRaw = {};
    const flags = [];
    let totalRaw = 0;
    let answered = 0;
    PQ.forEach((q) => {
      const v = answers[q.k];
      if (v == null || Number.isNaN(v)) return;
      answered += 1;
      totalRaw += Number(v);
      (per[q.d] = per[q.d] || []).push(wellbeing(q, v));
      (perRaw[q.d] = perRaw[q.d] || []).push(Number(v));
      if (riskKind(q, v) === "low") flags.push(q);
    });
    const domains = Object.keys(DOMAINS)
      .filter((d) => per[d])
      .map((d) => ({
        d,
        score: Math.round(
          (per[d].reduce((a, b) => a + b, 0) / per[d].length) * 100,
        ),
        raw: perRaw[d].reduce((a, b) => a + b, 0),
        max: perRaw[d].length * 4,
      }));
    const all = Object.values(per).flat();
    const overall = all.length
      ? Math.round((all.reduce((a, b) => a + b, 0) / all.length) * 100)
      : 0;
    const maxRiskAnswer = Math.max(
      0,
      ...Object.values(answers).map((value) => Number(value) || 0),
    );
    const band =
      maxRiskAnswer >= 4
        ? "severe"
        : maxRiskAnswer >= 3
          ? "high"
          : scoreBand(totalRaw);
    let level =
      band === "low"
        ? "stable"
        : band === "mid"
          ? "watch"
          : band === "high"
            ? "attention"
            : "intervene";
    if (level === "stable" && flags.length >= 3) level = "watch";
    return {
      overall,
      level,
      domains,
      flags,
      answers,
      totalRaw,
      band,
      answered,
      maxRaw: PQ.length * 4,
    };
  }

  const parentOverallNotes = {
    stable: [
      "إجابات ولي الأمر تشير إلى مؤشرات عامة مستقرة وفق النموذج. استمر في التواصل والمتابعة وقارنها بملاحظات المدرسة.",
      "The parent's answers indicate generally stable indicators in this form. Keep communicating and compare them with school observations.",
    ],
    watch: [
      "توجد مجالات تستحق المتابعة. راجع إجابات ولي الأمر مع التقييمات المدرسية وحدد ما إذا كانت هناك تغيّرات متكررة.",
      "Some areas merit follow-up. Compare the parent's answers with school assessments and look for recurring changes.",
    ],
    attention: [
      "النتيجة تستدعي مراجعة الإجابات والملاحظات والتواصل الهادئ مع ولي الأمر لتحديد دعم مناسب داخل المدرسة.",
      "The result calls for reviewing the answers and notes, then discussing suitable school support with the parent.",
    ],
    intervene: [
      "المؤشرات مرتفعة وفق هذا النموذج؛ راجع الإجابات والملاحظات سريعًا واتبع إجراءات الدعم المعتمدة في المدرسة. النتيجة ليست تشخيصًا.",
      "The indicators are elevated on this form. Review the answers and notes promptly and follow the school's support process. This is not a diagnosis.",
    ],
  };
  const domainKind = (score) =>
    score == null ? "none" : score >= 70 ? "good" : score >= 45 ? "mid" : "low";
  const normalizeDomainKey = (value) => {
    const raw = String(value ?? "")
      .trim()
      .toLocaleLowerCase();
    if (!raw) return "";
    return (
      Object.keys(DOMAINS).find((key) => {
        const aliases = [key, DOMAINS[key][0], DOMAINS[key][1]].map((item) =>
          String(item).toLocaleLowerCase(),
        );
        return aliases.some(
          (alias) =>
            raw === alias ||
            (alias.length > 3 && raw.includes(alias)) ||
            raw.includes(key),
        );
      }) || raw
    );
  };
  window.getParentDomainCopy = (key, score, language = state.lang) => {
    const languageIndex = language === "en" ? 1 : 0;
    const normalizedKey = normalizeDomainKey(key);
    const numericScore = Number(score);
    const validScore =
      score != null && score !== "" && Number.isFinite(numericScore)
        ? Math.max(0, Math.min(100, numericScore))
        : null;
    const bandIndex =
      validScore == null ? 1 : validScore < 45 ? 0 : validScore < 70 ? 1 : 2;
    const labels = DOMAINS[normalizedKey];
    const narratives = NARR[normalizedKey];
    return {
      key: normalizedKey || key,
      label: labels
        ? labels[languageIndex]
        : String(key || (languageIndex ? "Domain" : "مجال")),
      score: validScore,
      kind: domainKind(validScore),
      note: narratives
        ? narratives[bandIndex][languageIndex]
        : languageIndex
          ? "No domain-specific interpretation is available yet."
          : "لا يتوفر تفسير لهذا المجال حتى الآن.",
    };
  };
  window.getParentOverallCopy = (
    score,
    language = state.lang,
    flagCount = 0,
  ) => {
    const languageIndex = language === "en" ? 1 : 0;
    const numericScore = Number(score);
    const overall =
      score == null || score === "" || !Number.isFinite(numericScore)
        ? null
        : Math.max(0, Math.min(100, numericScore));
    if (overall == null) {
      return {
        overall: null,
        level: "unknown",
        kind: "none",
        label: languageIndex ? "Not enough data" : "بيانات غير كافية",
        note: languageIndex
          ? "There is not enough scored data to form an overall note yet."
          : "لا توجد بيانات كافية لتكوين ملاحظة إجمالية حتى الآن.",
        recommendations: [],
      };
    }
    let level =
      overall >= 75
        ? "stable"
        : overall >= 55
          ? "watch"
          : overall >= 35
            ? "attention"
            : "intervene";
    if (level === "stable" && Number(flagCount) >= 2) level = "watch";
    const levelCopy = LEVELS[level] || LEVELS.watch;
    return {
      overall,
      level,
      kind: levelCopy.kind,
      label: languageIndex ? levelCopy.en : levelCopy.ar,
      note: (parentOverallNotes[level] || parentOverallNotes.watch)[
        languageIndex
      ],
      recommendations: levelCopy.reco.map((item) => item[languageIndex]),
    };
  };
  window.getParentProfileInsights = (
    answersRaw,
    language = state.lang,
    overallOverride = null,
  ) => {
    const analysis = analyze(answersRaw);
    const override =
      overallOverride == null || overallOverride === ""
        ? null
        : Number(overallOverride);
    const overall = Number.isFinite(override)
      ? Math.max(0, Math.min(100, override))
      : analysis.overall;
    const overallCopy = window.getParentOverallCopy(
      overall,
      language,
      analysis.flags.length,
    );
    const languageIndex = language === "en" ? 1 : 0;
    return {
      overall,
      level: overallCopy.level,
      overallKind: overallCopy.kind,
      overallLabel: overallCopy.label,
      overallNote: overallCopy.note,
      recommendations: overallCopy.recommendations,
      domains: analysis.domains.map((domain) =>
        window.getParentDomainCopy(domain.d, domain.score, language),
      ),
      flags: analysis.flags.map((question) => ({
        label: languageIndex ? question.en : question.ar,
        value: optLabel(question, analysis.answers[question.k]),
      })),
    };
  };

  /* ---------- تخزين/جلب إجابات ولي الأمر ---------- */
  const PF = "anees.parentForms";
  const submissionIdentity = (x) => {
    if (!x || typeof x !== "object") return "";
    if (x.id || x.submissionId) return String(x.id || x.submissionId);
    if (x.submittedAt != null) return String(x.submittedAt);
    try {
      return JSON.stringify({
        answers: x.answers || x.a || {},
        parent: x.parent || {},
        child: x.child || "",
        notes: x.notes || "",
      });
    } catch {
      return "";
    }
  };
  const localSub = (t) => {
    const linkedStudent = (state.students || []).find(
      (s) => s.formToken === t || s.parentToken === t || s.token === t,
    );
    const dbCache =
      linkedStudent && state.parentSubs
        ? state.parentSubs[linkedStudent.id]
        : null;
    const value = (LS.get(PF, {}) || {})[t] || dbCache;
    if (Array.isArray(value))
      return (
        value
          .filter((x) => x && typeof x === "object")
          .sort(
            (a, b) => Number(b.submittedAt || 0) - Number(a.submittedAt || 0),
          )[0] || null
      );
    return value && typeof value === "object" ? value : null;
  };
  const saveLocalSub = (t, sub) => {
    if (!sub || typeof sub !== "object") return false;
    const m = LS.get(PF, {}) || {};
    let arr = m[t];
    if (arr && !Array.isArray(arr)) arr = [arr]; // migrate single-object legacy storage
    if (!Array.isArray(arr)) arr = [];
    const identity = submissionIdentity(sub);
    const alreadyExists =
      !!identity && arr.some((x) => submissionIdentity(x) === identity);
    arr = [
      sub,
      ...arr.filter((x) => !identity || submissionIdentity(x) !== identity),
    ].slice(0, 50);
    m[t] = arr;
    // Volatile cache only. Callers must first confirm that Supabase saved the submission.
    _mem[PF] = m;
    try {
      const sid =
        sub.studentId ||
        state.students.find(
          (s) => s.formToken === t || s.parentToken === t || s.token === t,
        )?.id;
      if (sid) {
        state.parentSubs = state.parentSubs || {};
        const list = Array.isArray(state.parentSubs[sid])
          ? state.parentSubs[sid]
          : [];
        state.parentSubs[sid] = [
          sub,
          ...list.filter(
            (x) => !identity || submissionIdentity(x) !== identity,
          ),
        ].slice(0, 50);
        // Only the signed-in teacher may persist parentSubs / notifications to Supabase.
        // Anonymous parent browsers must not call saveHelperState (causes "sync failed" toast).
        if (state.user?.id) {
          LS.set("anees.parentSubs", state.parentSubs);
          if (!alreadyExists) {
            const student = state.students.find((s) => s.id === sid);
            addNotification({
              type: "parent_form",
              title:
                state.lang === "ar"
                  ? "رد جديد من ولي الأمر"
                  : "New parent form reply",
              body:
                state.lang === "ar"
                  ? `ولي أمر الطالب ${student?.name || ""} سجّل تقييمًا جديدًا.`
                  : `Parent of ${student?.name || "student"} submitted a new assessment.`,
              meta: {
                studentId: sid,
                token: t,
                submissionId: identity || undefined,
              },
            });
          }
        }
      }
    } catch (error) {
      console.warn("[Anees parent submission local mirror]", error);
    }
    return true;
  };
  async function fetchSubmission(s) {
    const token = ensureToken(s);
    if (window.AneesCloud?.fetchParentSubmissions) {
      try {
        const rows = await window.AneesCloud.fetchParentSubmissions();
        const cloudSub = rows.find(
          (row) =>
            row.token === token || String(row.studentId) === String(s.id),
        );
        if (cloudSub) {
          saveLocalSub(token, cloudSub);
          return { sub: cloudSub, failed: false };
        }
      } catch (error) {
        console.warn("[Anees parent submission fetch]", error);
      }
    }
    if (CONFIG.USE_N8N && !isPh(CONFIG.N8N_PARENT_FORM)) {
      const res = await sendToN8N(CONFIG.N8N_PARENT_FORM, {
        action: "fetch",
        token,
      });
      if (!res) return { sub: localSub(token), failed: true };
      const sub = res.submission || res.data || (res.answers ? res : null);
      if (sub && res.submitted !== false) {
        saveLocalSub(token, sub);
        return { sub, failed: false };
      }
      return { sub: localSub(token), failed: false };
    }
    return { sub: localSub(token), failed: false, local: true };
  }

  /* ============================================================
     3) أوفرلاي تقارير الطالب
     ============================================================ */
  window.openStudentReports = function (id) {
    window.openStudentProfile(id);
  };
  window.__openStudentReports_DISABLED = (
    id,
    main = "reports",
    sub = "daily",
  ) => {
    const s = stu(id);
    if (!s) return;
    ensureToken(s);
    registerLink(s);
    state.rep = { id, main, sub, wOff: 0, mOff: 0 };
    const cls = state.classes.find((c) => c.id === s.classId);
    const box = $("#genericModalBody");
    box.classList.add("lg");
    box.classList.remove("md");
    box.innerHTML = `
      <div class="modal-body rep-modal">
        <button type="button" class="modal-close" onclick="closeGenericModal()" aria-label="${L("إغلاق", "Close")}">${ico("x")}</button>
        <div class="rep-head">
          
          <div class="rep-head-txt">
            <h2>${esc(s.name)}</h2>
            <div class="rep-sub">${cls ? esc(cls.name) + " · " : ""}${esc(s.parentName)}</div>
          </div>
        </div>
        <div class="tabs rep-tabs" role="tablist" id="repTabs">
          <button role="tab" data-main="reports" onclick="repGo('reports')">${ico("chart")}<span>${L("تقارير الأداء", "Performance")}</span></button>
          <button role="tab" data-main="parent" onclick="repGo('parent')">${ico("heart")}<span>${L("تقرير ولي الأمر", "Parent report")}</span></button>
          <button role="tab" data-main="info" onclick="repGo('info')">${ico("user")}<span>${L("بيانات الطالب", "Student info")}</span></button>
        </div>
        <div id="repContent"></div>
      </div>`;
    $("#genericModal").classList.add("open");
    setTimeout(() => enhanceCustomSelects($("#genericModalBody")), 0);
    repRender();
  };
  window.repGo = (main) => {
    state.rep.main = main;
    repRender();
  };
  window.repSub = (sub) => {
    state.rep.sub = sub;
    repRender();
  };
  window.repShift = (kind, d) => {
    const r = state.rep;
    if (kind === "w") r.wOff = Math.min(0, r.wOff + d);
    else r.mOff = Math.min(0, r.mOff + d);
    repRender();
  };

  function repRender() {
    const r = state.rep;
    const s = r && stu(r.id);
    const host = $("#repContent");
    if (!s || !host) return;
    $$("#repTabs button").forEach((b) => {
      const on = b.dataset.main === r.main;
      b.classList.toggle("active", on);
      b.setAttribute("aria-selected", on);
    });
    let html = "";
    if (r.main === "reports") {
      const subs = [
        ["daily", L("يومي", "Daily")],
        ["weekly", L("أسبوعي", "Weekly")],
        ["monthly", L("شهري", "Monthly")],
      ];
      html = `<div class="seg" role="tablist">${subs
        .map(
          ([k, t]) =>
            `<button role="tab" class="${r.sub === k ? "active" : ""}" onclick="repSub('${k}')">${t}</button>`,
        )
        .join("")}</div>
        <div class="rep-fade">${r.sub === "daily" ? dailyHTML(s) : r.sub === "weekly" ? weeklyHTML(s) : monthlyHTML(s)}</div>`;
    } else if (r.main === "info") {
      html = `<div class="rep-fade">${infoHTML(s)}</div>`;
    } else {
      html = `<div class="rep-fade"><div class="rep-loading"><div class="spinner"></div><span>${L("جاري تحميل تقرير ولي الأمر...", "Loading the parent report...")}</span></div></div>`;
      host.innerHTML = html;
      fetchSubmission(s).then((res) => {
        if (
          !state.rep ||
          state.rep.id !== s.id ||
          state.rep.main !== "parent" ||
          !$("#repContent")
        )
          return;
        $("#repContent").innerHTML =
          `<div class="rep-fade">${parentTabHTML(s, res)}</div>`;
      });
      return;
    }
    host.innerHTML = html;
  }

  /* ---------- كارت تقرير + أزرار الإرسال ---------- */
  const emptyCard = (icon, title, text, btn = "") => `
    <div class="rep-empty">
      <div class="ic">${ico(icon)}</div>
      <h4>${title}</h4>
      <p>${text}</p>
      ${btn}
    </div>`;

  const sendBlock = ({ enabled, done, label, hint, onclick }) => `
    <div class="send-block">
      <button class="btn btn-primary btn-lg" ${enabled ? `onclick="${onclick}"` : "disabled"}>${ico("mail")} ${done ? L("إعادة الإرسال", "Resend") : label}</button>
      ${done ? `<span class="sent-chip">${ico("check")} ${L("تم الإرسال", "Sent")} · ${dstr(done)}</span>` : ""}
      ${!enabled && hint ? `<div class="send-hint">${ico("info")} <span>${hint}</span></div>` : ""}
    </div>`;

  function reportBody(r) {
    const sc = r.totalScore;
    return `
      <div class="rc-top">
        <div class="rc-date"><b>${esc(dayName(r.date))}</b><span>${dstr(r.date)}</span></div>
        <span class="score-pill ${kindOf(sc)}">${num(sc)}% · ${esc(stLabel(r.status))}</span>
      </div>
      ${r.recommendation ? `<p class="rc-text">${esc(r.recommendation)}</p>` : ""}
      ${(() => {
        const ai =
          typeof r.aiAnalysis === "string"
            ? r.aiAnalysis
            : r.aiAnalysis?.summary ||
              r.aiAnalysis?.overview ||
              r.aiAnalysis?.recommendation ||
              r.aiRecommendation ||
              "";
        return ai
          ? `<div class="rc-ai"><b>${L("ملخص التحليل الآلي", "AI analysis summary")}</b><p>${esc(ai)}</p></div>`
          : "";
      })()}
      ${r.automationStatus === "failed" ? `<div class="rc-note warn"><b>${L("تنبيه تقني", "Technical note")}</b>${L("التقييم محفوظ، لكن التحليل الخارجي لم يكتمل.", "The assessment is saved, but external analysis did not complete.")}</div>` : ""}
      ${["failed", "not_configured"].includes(r.automationStatus) ? `<button type="button" class="btn btn-ghost btn-sm" onclick="retryAssessmentAutomation('${esc(r.id)}')">${L("إعادة تشغيل التحليل", "Retry analysis")}</button>` : ""}
      ${r.notes ? `<div class="rc-note"><b>${L("ملاحظات المدرس", "Teacher notes")}</b>${esc(r.notes)}</div>` : ""}
`;
  }

  /* ---------- يومي ---------- */
  function dailyHTML(s) {
    const today = sod(new Date());
    const r = pickLast(reportsBetween(s.id, today, +today + DAY));
    if (!r)
      return `
        <div class="rep-card today">${emptyCard(
          "edit",
          L(
            "لسه ماكتبتش تقرير اليوم",
            "Today's report hasn't been written yet",
          ),
          L(
            "سجّل تقييم الطالب لليوم عشان يظهر تقريره هنا ويبقى جاهز للإرسال لولي الأمر.",
            "Record today's assessment so the report appears here, ready to send to the parent.",
          ),
          `<button class="btn btn-primary" onclick="openAssessModal('${s.id}')">${ico("edit")} ${L("تقييم الطالب", "Assess student")}</button>`,
        )}</div>
        ${sendBlock({ enabled: false, label: L("إرسال التقرير اليومي", "Send daily report"), hint: L("هيتفعل بعد تسجيل تقييم اليوم.", "Becomes available after today's assessment is recorded.") })}`;
    return `
      <div class="rep-card today">
        <div class="rep-card-tag">${ico("calendar")} ${L("تقرير اليوم", "Today's report")}</div>
        ${reportBody(r)}
      </div>
      ${sendBlock({ enabled: dayEnded(today), done: r.sentAt, label: L("إرسال التقرير اليومي لولي الأمر", "Send daily report to parent"), hint: L(`هيتفعل بعد نهاية اليوم الدراسي (الساعة ${endHourTxt()}).`, `Available after the school day ends (${endHourTxt()}).`), onclick: `sendDailyReport('${r.id}')` })}`;
  }

  window.sendDailyReport = (rid) => {
    const r = state.reports.find((x) => x.id === rid);
    const s = r && stu(r.studentId);
    if (!r || !s) return;
    if (!validParentEmail(s.parentEmail)) return missingParentEmail();
    if (!dayEnded(r.date))
      return toast(
        L(
          "التقرير اليومي بيتبعت بعد نهاية اليوم الدراسي",
          "The daily report can be sent after the school day ends",
        ),
        "warn",
      );
    const go = async () => {
      const lockKey = "daily:" + rid;
      if (reportSendsInFlight.has(lockKey)) return;
      reportSendsInFlight.add(lockKey);
      try {
        const res = await sendToN8N(CONFIG.N8N_DAILY_REPORT, {
          type: "daily",
          action: "send",
          deliveryId: lockKey + ":" + Date.now(),
          to: s.parentEmail,
          student: s.name,
          parentName: s.parentName,
          score: r.totalScore,
          status: r.status,
          recommendation: r.recommendation,
          notes: r.notes,
          date: r.date,
          day: r.day,
          scores: r.scores,
          teacherName: state.user.name,
        });
        if (!res) return sendFail(CONFIG.N8N_DAILY_REPORT);
        r.sentAt = Date.now();
        LS.set("anees.reports", state.reports);
        toast(
          L(
            "قبل n8n طلب التقرير. تأكد أن الـ workflow بيرجع نجاح بعد إرسال البريد فعلًا.",
            "n8n accepted the report request. Configure the workflow to respond only after the email is sent.",
          ),
          "success",
        );
        if (state.rep && state.rep.id === s.id) repRender();
      } finally {
        reportSendsInFlight.delete(lockKey);
      }
    };
    if (r.sentAt)
      return dialog({
        title: L("إعادة الإرسال؟", "Send again?"),
        msg: L(
          "تم إرسال هذا التقرير من قبل. إرساله مرة أخرى؟",
          "This report was already sent. Send it again?",
        ),
        type: "info",
        confirmText: L("إرسال", "Send"),
        cancelText: L("إلغاء", "Cancel"),
        onConfirm: go,
      });
    go();
  };

  /* ---------- أسبوعي (الأحد → الخميس) ---------- */
  const studyWeekStart = (d) => {
    const x = sod(d);
    x.setDate(x.getDate() - x.getDay());
    return x;
  };
  const weekDays = (start) =>
    [0, 1, 2, 3, 4].map((i) => {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      return d;
    });

  function weeklyHTML(s) {
    const today = sod(new Date());
    const off = state.rep.wOff;
    const start = studyWeekStart(today);
    start.setDate(start.getDate() + off * 7);
    const days = weekDays(start);
    const visible = days.filter((d) => +d <= +today);
    const finished = dayEnded(days[4]);
    const rows = visible.map((d) => ({
      d,
      r: pickLast(reportsBetween(s.id, d, +d + DAY)),
    }));
    const scores = rows.filter((x) => x.r).map((x) => x.r.totalScore);
    const mean = avg(scores);
    const key = `w:${s.id}:${iso(start)}`;
    const note =
      mean === null
        ? ""
        : mean >= 75
          ? L(
              "أسبوع ممتاز، استقرار واضح في السلوك والتفاعل. استمر في الدعم.",
              "An excellent week with clear stability in behavior and engagement. Keep supporting.",
            )
          : mean >= 55
            ? L(
                "أسبوع جيد بشكل عام مع فرص لتحسين بعض الجوانب.",
                "A generally good week with room to improve some areas.",
              )
            : mean >= 40
              ? L(
                  "أسبوع متوسط وفيه تحديات محتاجة متابعة. حاول تفهم مصدرها مع الطالب.",
                  "An average week with challenges that need follow-up. Try to understand their source with the student.",
                )
              : L(
                  "أسبوع صعب والمؤشرات منخفضة. ننصح بجلسة مع المرشد والتواصل مع الأسرة.",
                  "A difficult week with low indicators. We recommend a counselor session and family contact.",
                );
    const label =
      off === 0
        ? L("الأسبوع الحالي", "Current week")
        : off === -1
          ? L("الأسبوع السابق", "Previous week")
          : L("أسبوع سابق", "Earlier week");
    let hint = "";
    if (!finished)
      hint = L(
        `هيتفعل بعد نهاية الأسبوع (الخميس ${dshort(days[4])}).`,
        `Available after the week ends (Thursday ${dshort(days[4])}).`,
      );
    else if (!scores.length)
      hint = L("مفيش تقييمات في الأسبوع ده.", "No assessments in this week.");
    return `
      <div class="week-nav">
        <button class="icon-btn" onclick="repShift('w',-1)" aria-label="${L("الأسبوع السابق", "Previous week")}">${chevPrev()}</button>
        <div class="wn-mid"><div class="week-label">${label}</div><div class="week-sub">${dshort(days[0])} - ${dshort(days[4])}</div></div>
        <button class="icon-btn" ${off === 0 ? "disabled" : ""} onclick="repShift('w',1)" aria-label="${L("الأسبوع التالي", "Next week")}">${chevNext()}</button>
      </div>
      <div class="rep-summary">
        <div class="summary-cell"><div class="k">${L("متوسط الأسبوع", "Week average")}</div><div class="v">${mean !== null ? num(mean) + "%" : "—"}</div></div>
        <div class="summary-cell"><div class="k">${L("أعلى تقييم", "Best score")}</div><div class="v">${scores.length ? num(Math.max(...scores)) + "%" : "—"}</div></div>
        <div class="summary-cell"><div class="k">${L("أيام مقيّمة", "Days assessed")}</div><div class="v">${num(scores.length)} / ${num(visible.length)}</div></div>
      </div>
      ${note ? `<div class="rep-note">${ico("sparkle")}<span>${note}</span></div>` : ""}
      <div class="rc-list">
        ${rows
          .map(({ d, r }) => {
            const isToday = +d === +today;
            return r
              ? `<div class="rep-card ${isToday ? "today" : ""}">
                  ${reportBody(r)}
                  <div class="rc-actions"><button class="btn btn-ghost btn-sm" ${dayEnded(d) ? `onclick="sendDailyReport('${r.id}')"` : `disabled title="${L("هيتفعل بعد نهاية اليوم", "Available after the day ends")}"`}>${ico("mail")} ${r.sentAt ? L("إعادة إرسال اليومي", "Resend daily") : L("إرسال تقرير اليوم", "Send daily report")}</button>${r.sentAt ? `<span class="sent-chip sm">${ico("check")} ${L("تم الإرسال", "Sent")}</span>` : ""}</div>
                </div>`
              : `<div class="rep-card missing ${isToday ? "today" : ""}">
                  <div class="rc-top"><div class="rc-date"><b>${esc(dayName(d))}</b><span>${dstr(d)}</span></div><span class="score-pill none">${L("لم يتم التقييم", "Not assessed")}</span></div>
                  <div class="rc-actions"><button class="btn btn-soft btn-sm" onclick="openAssessModal('${s.id}','${iso(d)}')">${ico("edit")} ${L("قيّم هذا اليوم", "Assess this day")}</button></div>
                </div>`;
          })
          .join("")}
      </div>
      ${sendBlock({ enabled: finished && scores.length > 0, done: sentAt(key), label: L("إرسال التقرير الأسبوعي لولي الأمر", "Send weekly report to parent"), hint, onclick: `sendPeriodReport('weekly','${s.id}',${off})` })}`;
  }

  /* ---------- شهري ---------- */
  const monthRange = (off) => {
    const t = new Date();
    const from = new Date(t.getFullYear(), t.getMonth() + off, 1);
    const to = new Date(t.getFullYear(), t.getMonth() + off + 1, 1);
    return { from, to };
  };
  const studyDaysIn = (from, to) => {
    const out = [];
    for (let d = new Date(from); +d < +to; d.setDate(d.getDate() + 1))
      if (d.getDay() <= 4) out.push(new Date(d));
    return out;
  };
  function monthStats(s, off) {
    const today = sod(new Date());
    const { from, to } = monthRange(off);
    const all = studyDaysIn(from, to);
    const elapsed = all.filter((d) => +d <= +today);
    const byDay = elapsed.map((d) => ({
      d,
      r: pickLast(reportsBetween(s.id, d, +d + DAY)),
    }));
    const rs = byDay.filter((x) => x.r).map((x) => x.r);
    const scores = rs.map((r) => r.totalScore);
    const lastStudy = all[all.length - 1];
    const finished = lastStudy ? dayEnded(lastStudy) : true;
    return { from, to, all, elapsed, byDay, rs, scores, finished, lastStudy };
  }

  function monthlyHTML(s) {
    const off = state.rep.mOff;
    const m = monthStats(s, off);
    const mean = avg(m.scores);
    const prev = monthStats(s, off - 1);
    const pmean = avg(prev.scores);
    const delta = mean !== null && pmean !== null ? mean - pmean : null;
    const good = m.scores.filter((x) => x >= 70).length;
    const mid = m.scores.filter((x) => x >= 45 && x < 70).length;
    const low = m.scores.filter((x) => x < 45).length;
    const tot = m.scores.length || 1;
    // نقاط القوة / الضعف
    const qa = BEHAVIOR_QUESTIONS.map((q) => {
      const vals = m.rs
        .map((r) => r.scores && r.scores[q.key])
        .filter((v) => typeof v === "number");
      return {
        q,
        v: vals.length
          ? vals.reduce((a, b) => a + b / q.scale, 0) / vals.length
          : null,
      };
    }).filter((x) => x.v !== null);
    qa.sort((a, b) => b.v - a.v);
    const best = qa[0];
    const worst = qa.length > 1 ? qa[qa.length - 1] : null;
    // أسابيع الشهر
    const weeks = [];
    m.byDay.forEach((x) => {
      const ws = iso(studyWeekStart(x.d));
      let w = weeks.find((k) => k.ws === ws);
      if (!w) weeks.push((w = { ws, start: studyWeekStart(x.d), sc: [] }));
      if (x.r) w.sc.push(x.r.totalScore);
    });
    const narrative =
      mean === null
        ? ""
        : L(
            `${esc(s.name)} حقق متوسط ${num(mean)}% خلال ${num(m.scores.length)} يوم تقييم من ${num(m.elapsed.length)} يوم دراسة.` +
              (delta === null
                ? ""
                : delta > 0
                  ? ` وده تحسّن بمقدار ${num(delta)} نقطة عن الشهر السابق.`
                  : delta < 0
                    ? ` وده انخفاض بمقدار ${num(Math.abs(delta))} نقطة عن الشهر السابق.`
                    : " وده ثابت تقريبًا مقارنة بالشهر السابق.") +
              (best ? ` أقوى جانب: «${best.q.ar}».` : "") +
              (worst && worst.q.key !== best.q.key
                ? ` أكثر جانب يحتاج دعم: «${worst.q.ar}».`
                : ""),
            `${esc(s.name)} averaged ${num(mean)}% across ${num(m.scores.length)} assessed days out of ${num(m.elapsed.length)} study days.` +
              (delta === null
                ? ""
                : delta > 0
                  ? ` That is up ${num(delta)} points from last month.`
                  : delta < 0
                    ? ` That is down ${num(Math.abs(delta))} points from last month.`
                    : " That is about the same as last month.") +
              (best ? ` Strongest area: "${best.q.en}".` : "") +
              (worst && worst.q.key !== best.q.key
                ? ` Area needing most support: "${worst.q.en}".`
                : ""),
          );
    const key = `m:${s.id}:${m.from.getFullYear()}-${pad(m.from.getMonth() + 1)}`;
    let hint = "";
    if (!m.finished)
      hint = L(
        `هيتفعل بعد آخر يوم دراسة في الشهر (${dshort(m.lastStudy)}).`,
        `Available after the last study day of the month (${dshort(m.lastStudy)}).`,
      );
    else if (!m.scores.length)
      hint = L("مفيش تقييمات في الشهر ده.", "No assessments in this month.");
    const bars = m.byDay
      .map(({ d, r }, i) =>
        r
          ? `<div class="mc-col" style="--i:${i}" title="${esc(dayName(d))} ${dshort(d)} · ${r.totalScore}%"><div class="mc-bar"><i class="${kindOf(r.totalScore)}" style="height:${Math.max(6, r.totalScore)}%"></i></div><span>${num(d.getDate())}</span></div>`
          : `<div class="mc-col none" style="--i:${i}" title="${esc(dayName(d))} ${dshort(d)} · ${L("لم يتم التقييم", "Not assessed")}"><div class="mc-bar"><i style="height:5%"></i></div><span>${num(d.getDate())}</span></div>`,
      )
      .join("");
    return `
      <div class="week-nav">
        <button class="icon-btn" onclick="repShift('m',-1)" aria-label="${L("الشهر السابق", "Previous month")}">${chevPrev()}</button>
        <div class="wn-mid"><div class="week-label">${mlabel(m.from)}</div><div class="week-sub">${off === 0 ? L("الشهر الحالي", "Current month") : L("شهر سابق", "Earlier month")}</div></div>
        <button class="icon-btn" ${off === 0 ? "disabled" : ""} onclick="repShift('m',1)" aria-label="${L("الشهر التالي", "Next month")}">${chevNext()}</button>
      </div>
      ${
        !m.elapsed.length
          ? emptyCard(
              "calendar",
              L("الشهر لسه ما بدأش", "This month hasn't started yet"),
              L("مفيش أيام دراسة لحد دلوقتي.", "No study days so far."),
            )
          : `
      <div class="rep-summary four">
        <div class="summary-cell"><div class="k">${L("متوسط الشهر", "Month average")}</div><div class="v">${mean !== null ? num(mean) + "%" : "—"}</div>${delta !== null ? `<div class="delta ${delta > 0 ? "up" : delta < 0 ? "down" : ""}">${delta > 0 ? "▲" : delta < 0 ? "▼" : "•"} ${num(Math.abs(delta))}</div>` : ""}</div>
        <div class="summary-cell"><div class="k">${L("أعلى تقييم", "Best")}</div><div class="v">${m.scores.length ? num(Math.max(...m.scores)) + "%" : "—"}</div></div>
        <div class="summary-cell"><div class="k">${L("أقل تقييم", "Lowest")}</div><div class="v">${m.scores.length ? num(Math.min(...m.scores)) + "%" : "—"}</div></div>
        <div class="summary-cell"><div class="k">${L("أيام مقيّمة", "Days assessed")}</div><div class="v">${num(m.scores.length)} / ${num(m.elapsed.length)}</div></div>
      </div>
      ${narrative ? `<div class="rep-note">${ico("sparkle")}<span>${narrative}</span></div>` : ""}
      ${
        m.scores.length
          ? `<div class="rep-card"><div class="rep-card-tag">${ico("activity")} ${L("توزيع التقييمات", "Score distribution")}</div>
              <div class="dist"><i class="good" style="flex:${good}"></i><i class="mid" style="flex:${mid}"></i><i class="low" style="flex:${low}"></i></div>
              <div class="dist-legend"><span><i class="good"></i>${L("جيد", "Good")} ${num(good)}</span><span><i class="mid"></i>${L("متوسط", "Fair")} ${num(mid)}</span><span><i class="low"></i>${L("منخفض", "Low")} ${num(low)}</span></div>
            </div>`
          : ""
      }
      <div class="rep-card"><div class="rep-card-tag">${ico("chart")} ${L("التقييم اليومي خلال الشهر", "Daily scores this month")}</div>
        <div class="mchart"><div class="mc-row">${bars}</div></div></div>
      ${
        weeks.length
          ? `<div class="rep-card"><div class="rep-card-tag">${ico("calendar")} ${L("ملخص الأسابيع", "Weekly breakdown")}</div>
              ${weeks
                .map((w, i) => {
                  const a = avg(w.sc);
                  return `<div class="wk-row"><span class="wk-name">${L("أسبوع", "Week")} ${num(i + 1)} <em>${dshort(w.start)}</em></span><div class="wk-bar"><i class="${a === null ? "" : kindOf(a)}" style="width:${a === null ? 0 : a}%"></i></div><b>${a === null ? "—" : num(a) + "%"}</b></div>`;
                })
                .join("")}
            </div>`
          : ""
      }`
      }
      ${sendBlock({ enabled: m.finished && m.scores.length > 0, done: sentAt(key), label: L("إرسال التقرير الشهري لولي الأمر", "Send monthly report to parent"), hint, onclick: `sendPeriodReport('monthly','${s.id}',${off})` })}`;
  }

  /* ---------- إرسال أسبوعي/شهري ---------- */
  window.sendPeriodReport = (kind, sid, off) => {
    const s = stu(sid);
    if (!s) return;
    const today = sod(new Date());
    let payload, key, url, text;
    if (kind === "weekly") {
      const start = studyWeekStart(today);
      start.setDate(start.getDate() + off * 7);
      const days = weekDays(start).filter((d) => +d <= +today);
      const rows = days.map((d) => ({
        d,
        rs: reportsBetween(sid, d, +d + DAY),
      }));
      const sc = rows.flatMap((x) => x.rs.map((r) => r.totalScore));
      if (!sc.length)
        return toast(
          L("مفيش تقييمات في الأسبوع ده", "No assessments this week"),
          "warn",
        );
      key = `w:${sid}:${iso(start)}`;
      url = CONFIG.N8N_WEEKLY_REPORT;
      text = L(
        `تم إرسال التقرير الأسبوعي (متوسط ${avg(sc)}%) إلى ${s.parentEmail}`,
        `Weekly report (avg ${avg(sc)}%) sent to ${s.parentEmail}`,
      );
      payload = {
        type: "weekly",
        action: "send",
        to: s.parentEmail,
        student: s.name,
        parentName: s.parentName,
        weekStart: iso(start),
        avgScore: avg(sc),
        teacherName: state.user.name,
        days: rows.map((x) => ({
          day: AR_DAYS[x.d.getDay()],
          dayEn: EN_DAYS[x.d.getDay()],
          date: iso(x.d),
          avgScore: x.rs.length ? avg(x.rs.map((r) => r.totalScore)) : null,
          notes: x.rs.flatMap((r) => (r.notes ? [r.notes] : [])),
          recommendation: x.rs.length ? pickLast(x.rs).recommendation : null,
        })),
      };
    } else {
      const m = monthStats(s, off);
      if (!m.scores.length)
        return toast(
          L("مفيش تقييمات في الشهر ده", "No assessments this month"),
          "warn",
        );
      key = `m:${sid}:${m.from.getFullYear()}-${pad(m.from.getMonth() + 1)}`;
      url = CONFIG.N8N_MONTHLY_REPORT;
      text = L(
        `تم إرسال التقرير الشهري (متوسط ${avg(m.scores)}%) إلى ${s.parentEmail}`,
        `Monthly report (avg ${avg(m.scores)}%) sent to ${s.parentEmail}`,
      );
      payload = {
        type: "monthly",
        action: "send",
        to: s.parentEmail,
        student: s.name,
        parentName: s.parentName,
        month: `${m.from.getFullYear()}-${pad(m.from.getMonth() + 1)}`,
        avgScore: avg(m.scores),
        best: Math.max(...m.scores),
        lowest: Math.min(...m.scores),
        assessedDays: m.scores.length,
        studyDays: m.elapsed.length,
        distribution: {
          good: m.scores.filter((x) => x >= 70).length,
          fair: m.scores.filter((x) => x >= 45 && x < 70).length,
          low: m.scores.filter((x) => x < 45).length,
        },
        teacherName: state.user.name,
        days: m.byDay.map((x) => ({
          date: iso(x.d),
          avgScore: x.r ? x.r.totalScore : null,
          notes: x.r && x.r.notes ? [x.r.notes] : [],
        })),
      };
    }
    if (!validParentEmail(s.parentEmail)) return missingParentEmail();
    const go = async () => {
      const lockKey = kind + ":" + key;
      if (reportSendsInFlight.has(lockKey)) return;
      reportSendsInFlight.add(lockKey);
      try {
        const res = await sendToN8N(url, {
          ...payload,
          deliveryId: lockKey + ":" + Date.now(),
        });
        if (!res) return sendFail(url);
        markSent(key);
        toast(
          L(
            "قبل n8n طلب التقرير. تأكد أن الـ workflow بيرجع نجاح بعد إرسال البريد فعلًا.",
            "n8n accepted the report request. Configure the workflow to respond only after the email is sent.",
          ),
          "success",
        );
        if (state.rep && state.rep.id === sid) repRender();
      } finally {
        reportSendsInFlight.delete(lockKey);
      }
    };
    if (sentAt(key))
      return dialog({
        title: L("إعادة الإرسال؟", "Send again?"),
        msg: L(
          "تم إرسال هذا التقرير من قبل. إرساله مرة أخرى؟",
          "This report was already sent. Send it again?",
        ),
        type: "info",
        confirmText: L("إرسال", "Send"),
        cancelText: L("إلغاء", "Cancel"),
        onConfirm: go,
      });
    go();
  };

  /* ---------- بيانات الطالب + رابط ولي الأمر ---------- */
  const waNumber = (p) => {
    const d = String(p || "").replace(/\D/g, "");
    if (!d) return "";
    if (d.startsWith("0020")) return d.slice(2);
    if (d.startsWith("20")) return d;
    if (d.startsWith("0")) return "20" + d.slice(1);
    return d;
  };
  function infoHTML(s) {
    const all = reportsOf(s.id);
    const last = pickLast(all);
    const link = formLink(s);
    const sub = localSub(s.formToken);
    const cls = state.classes.find((c) => c.id === s.classId);
    return `
      <div class="link-card">
        <div class="lc-head">
          <div class="ic">${ico("heart")}</div>
          <div><h4>${L("رابط نموذج ولي الأمر", "Parent form link")}</h4>
          <p>${L("ابعت الرابط لولي الأمر ليوافق على الخصوصية ويجاوب عن أسئلة التقييم من أي متصفح، من غير إنشاء حساب. لكل طالب رابط خاص ومختلف.", "Send this link to the parent to consent and answer the assessment from any browser without creating an account. Every student has a separate, unique link.")}</p></div>
        </div>
        <div class="lc-row">
          <input class="lc-input" id="parentLink" readonly dir="ltr" value="${esc(link)}" onfocus="this.select()" aria-label="${L("رابط النموذج", "Form link")}" />
          <button class="btn btn-primary" id="copyLinkBtn" onclick="copyParentLink('${s.id}')">${ico("check")}<span>${L("نسخ الرابط", "Copy link")}</span></button>
        </div>
        <div class="lc-foot">
          <a class="btn btn-ghost btn-sm" target="_blank" rel="noopener noreferrer" onclick="registerParentLink('${s.id}')" href="https://wa.me/${waNumber(s.parentPhone)}?text=${encodeURIComponent(
            state.lang === "ar"
              ? `أهلاً بك أستاذ/ة ${s.parentName || ""} 👋\n\nمن فضلك املأ نموذج متابعة حالة *${s.name}* (ياخد حوالي ٣ دقايق):\n\n${link}\n\nشكرًا لتعاونك — فريق أنيس`
              : `Hello ${s.parentName || ""} 👋\n\nPlease fill in the wellbeing form for *${s.name}* (about 3 minutes):\n\n${link}\n\nThank you — Anees team`,
          )}">${ico("phone")} ${L("إرسال عبر واتساب", "Send via WhatsApp")}</a>
          <span class="sent-chip ${sub ? "" : "off"}">${sub ? ico("check") + " " + L("ولي الأمر ملأ النموذج", "Parent filled the form") : L("لم يُملأ النموذج بعد", "Not filled yet")}</span>
        </div>
      </div>
      <div class="info-grid">
        <div class="info-cell"><div class="k">${L("الاسم", "Name")}</div><div class="v">${esc(s.name)}</div></div>
        <div class="info-cell"><div class="k">${L("الفصل", "Class")}</div><div class="v">${cls ? esc(cls.name) : "—"}</div></div>
        <div class="info-cell"><div class="k">${L("ولي الأمر", "Parent")}</div><div class="v">${esc(s.parentName)}</div></div>
        <div class="info-cell"><div class="k">${L("هاتف ولي الأمر", "Parent phone")}</div><div class="v"><a class="lnk" dir="ltr" href="tel:${esc(s.parentPhone)}">${esc(s.parentPhone)}</a></div></div>
        <div class="info-cell"><div class="k">${L("إيميل ولي الأمر", "Parent email")}</div><div class="v"><a class="lnk" dir="ltr" href="mailto:${esc(s.parentEmail)}">${esc(s.parentEmail)}</a></div></div>
        <div class="info-cell"><div class="k">${L("عدد التقارير", "Reports")}</div><div class="v">${num(all.length)}${last ? ` · <span class="score-pill ${kindOf(last.totalScore)}">${num(last.totalScore)}%</span>` : ""}</div></div>
      </div>`;
  }
  window.copyParentLink = async (id) => {
    const s = stu(id);
    if (!s) return;
    const link = formLink(s);
    // Register the secret token in Supabase before sharing it with the parent.
    const registered = await registerLink(s).catch((error) => {
      console.warn("[Anees parent-link registration]", error);
      return false;
    });
    if (!registered) {
      toast(
        state.lang === "ar"
          ? "تعذر تجهيز الرابط في قاعدة البيانات. تحقق من اتصال Supabase وحاول مرة أخرى."
          : "Could not register the link in the database. Check Supabase and try again.",
        "error",
      );
      return;
    }
    let ok = false;
    try {
      await navigator.clipboard.writeText(link);
      ok = true;
    } catch {
      const el = $("#parentLink");
      if (el) {
        el.focus();
        el.select();
        try {
          ok = document.execCommand("copy");
        } catch {}
      }
    }
    const b = $("#copyLinkBtn");
    if (ok && b) {
      b.classList.add("copied");
      b.querySelector("span").textContent = L("تم النسخ", "Copied");
      setTimeout(() => {
        const bb = $("#copyLinkBtn");
        if (bb) {
          bb.classList.remove("copied");
          bb.querySelector("span").textContent = L("نسخ الرابط", "Copy link");
        }
      }, 1800);
    }
    toast(
      ok
        ? L("تم نسخ الرابط", "Link copied")
        : L("انسخ الرابط يدويًا", "Please copy the link manually"),
      ok ? "success" : "warn",
    );
  };

  /* ---------- تاب تقرير ولي الأمر (للمدرس) ---------- */
  function parentTabHTML(s, res) {
    const sub = res.sub;
    const refresh = `<button class="btn btn-ghost btn-sm" onclick="repGo('parent')">${ico("activity")} ${L("تحديث", "Refresh")}</button>`;
    if (!sub)
      return `
        ${res.failed ? `<div class="rep-note warn">${ico("alert")}<span>${L("تعذّر الاتصال بالخادم لجلب الإجابات. حاول التحديث مرة أخرى.", "Couldn't reach the server to fetch answers. Try refreshing.")}</span></div>` : ""}
        <div class="rep-card">${emptyCard(
          "heart",
          L(
            "ولي الأمر لسه ماملاش النموذج",
            "The parent hasn't filled the form yet",
          ),
          L(
            "ابعت رابط النموذج لولي الأمر من تاب «بيانات الطالب». أول ما يملاه هتلاقي إجاباته وتقريرًا مفصلًا عن حالة الطالب هنا.",
            "Send the form link from the “Student info” tab. Once filled, you'll find the answers and a detailed report on the student's condition here.",
          ),
          `<div class="empty-actions"><button class="btn btn-primary" onclick="repGo('info')">${ico("user")} ${L("نسخ الرابط", "Get the link")}</button>${refresh}</div>`,
        )}</div>`;
    const an = analyze(sub.answers);
    const lv = LEVELS[an.level];
    const parent = sub.parent || {};
    const byDomain = Object.keys(DOMAINS).filter((d) =>
      PQ.some((q) => q.d === d && an.answers[q.k] != null),
    );
    return `
      <div class="pr-top">
        <div class="pr-meta">
          <span>${ico("calendar")} ${L("وصل في", "Received")} ${dstr(sub.submittedAt || Date.now())}</span>
          ${refresh}
        </div>
      </div>
      <div class="pr-hero">
        <div class="pr-gauge ${lv.kind}" style="--p:${an.overall}"><div><b>${num(an.overall)}</b><span>%</span></div></div>
        <div class="pr-hero-txt">
          <div class="rep-card-tag">${ico("sparkle")} ${L("تقييم الحالة العامة", "Overall condition")}</div>
          <div class="score-pill ${lv.kind} big">${ar() ? lv.ar : lv.en}</div>
          <p>${L(`مبني على ${num(Object.keys(an.answers).length)} إجابة من ولي الأمر.`, `Based on ${num(Object.keys(an.answers).length)} answers from the parent.`)}</p>
        </div>
      </div>
      <div class="info-grid pr-contact">
        <div class="info-cell"><div class="k">${L("اسم الطفل (كما كتبه ولي الأمر)", "Child name (as entered)")}</div><div class="v">${esc(sub.child || s.name)}</div></div>
        <div class="info-cell"><div class="k">${L("ولي الأمر", "Parent")}</div><div class="v">${esc(parent.name || "—")}</div></div>
        <div class="info-cell"><div class="k">${L("الهاتف", "Phone")}</div><div class="v">${parent.phone ? `<a class="lnk" dir="ltr" href="tel:${esc(parent.phone)}">${esc(parent.phone)}</a>` : "—"}</div></div>
        <div class="info-cell"><div class="k">${L("الإيميل", "Email")}</div><div class="v">${parent.email ? `<a class="lnk" dir="ltr" href="mailto:${esc(parent.email)}">${esc(parent.email)}</a>` : "—"}</div></div>
      </div>

      <div class="rep-card"><div class="rep-card-tag">${ico("activity")} ${L("المحاور", "Domains")}</div>
        ${an.domains
          .map(
            (x) =>
              `<div class="wk-row"><span class="wk-name">${DOMAINS[x.d][ar() ? 0 : 1]}</span><div class="wk-bar"><i class="${kindOf(x.score)}" style="width:${x.score}%"></i></div><b>${num(x.score)}%</b></div>`,
          )
          .join("")}
      </div>

      <div class="rep-card detailed"><div class="rep-card-tag">${ico("brain")} ${L("التقرير التفصيلي", "Detailed report")}</div>
        <ul class="narr">
          ${an.domains
            .map((x) => {
              const i = x.score < 45 ? 0 : x.score < 70 ? 1 : 2;
              const t = NARR[x.d][i][ar() ? 0 : 1];
              return `<li class="${kindOf(x.score)}"><b>${DOMAINS[x.d][ar() ? 0 : 1]}:</b> ${t}</li>`;
            })
            .join("")}
        </ul>
        ${
          an.flags.length
            ? `<div class="flags"><b>${ico("alert")} ${L("نقاط تحتاج انتباه", "Points that need attention")}</b>${an.flags
                .map(
                  (q) =>
                    `<span class="flag">${esc(ar() ? q.ar : q.en)}: ${optLabel(q, an.answers[q.k])}</span>`,
                )
                .join("")}</div>`
            : ""
        }
        <div class="reco"><b>${L("التوصيات:", "Recommendations:")}</b><ul>${lv.reco.map((t) => `<li>${t[ar() ? 0 : 1]}</li>`).join("")}</ul></div>
        <p class="disc">${ico("info")} ${L("التقرير استرشادي مبني على إجابات ولي الأمر فقط، وليس تشخيصًا طبيًا.", "This report is advisory, based only on the parent's answers, and is not a medical diagnosis.")}</p>
      </div>
      ${(() => {
        const ai =
          typeof sub.aiAnalysis === "string"
            ? sub.aiAnalysis
            : sub.aiAnalysis?.summary ||
              sub.aiAnalysis?.overview ||
              sub.aiAnalysis?.recommendation ||
              "";
        return ai
          ? `<div class="rep-card"><div class="rep-card-tag">${ico("brain")} ${L("ملخص التحليل المساعد", "AI-assisted summary")}</div><p class="rc-text">${esc(ai)}</p><p class="disc">${L("محتوى استرشادي للمراجعة البشرية وليس تشخيصًا.", "Advisory content for human review, not a diagnosis.")}</p></div>`
          : "";
      })()}
      ${sub.followUpRequired ? `<div class="rep-note warn"><span>${L("نموذج المتابعة مطلوب حسب قواعد الأوتوميشن.", "A follow-up form is required by the automation rules.")}</span></div>` : ""}

      <div class="rep-card"><div class="rep-card-tag">${ico("edit")} ${L("إجابات ولي الأمر", "Parent's answers")}</div>
        ${byDomain
          .map(
            (d) => `<div class="qa-group"><h5>${DOMAINS[d][ar() ? 0 : 1]}</h5>
              ${PQ.filter((q) => q.d === d && an.answers[q.k] != null)
                .map(
                  (q) =>
                    `<div class="qa-row"><span class="qa-q">${esc(ar() ? q.ar : q.en)}</span><span class="score-pill ${riskKind(q, an.answers[q.k])}">${optLabel(q, an.answers[q.k])}</span></div>`,
                )
                .join("")}</div>`,
          )
          .join("")}
        ${sub.notes ? `<div class="rc-note"><b>${L("ملاحظات ولي الأمر", "Parent notes")}</b>${esc(sub.notes)}</div>` : ""}
      </div>`;
  }

  /* ============================================================
     4) صفحة نموذج ولي الأمر (عامة) #/parent/<token>
     ============================================================ */
  const PARENT_RE = /^#\/parent\/([A-Za-z0-9_-]{16,64})\/?(\?.*)?$/;
  // Volatile only: consent is never persisted to localStorage/sessionStorage.
  const parentConsentInMemory = new Map();
  const draftOf = (token) => {
    if (!state.parentDraft || state.parentDraft.token !== token)
      state.parentDraft = { token, v: {}, a: {} };
    return state.parentDraft;
  };
  function renderParentPage(token) {
    const d = draftOf(token);
    const v = d.v || {};
    const groups = Object.keys(DOMAINS);
    // New links contain only a secret token. Keep parsing legacy query parameters for old links,
    // but never generate or re-share personal data in URLs.
    let qMeta = {};
    try {
      const h = location.hash || "";
      const qi = h.indexOf("?");
      if (qi >= 0)
        qMeta = Object.fromEntries(new URLSearchParams(h.slice(qi + 1)));
    } catch (e) {}
    // Resolve student from local data (same browser) or draft or URL meta
    const linked = (state.students || []).find((s) => s.formToken === token);
    const childName = v.child || linked?.name || qMeta.c || "";
    const parentName = v.parent || linked?.parentName || qMeta.p || "";
    const phoneVal = v.phone || linked?.parentPhone || qMeta.ph || "";
    const emailVal = v.email || linked?.parentEmail || qMeta.e || "";
    const known = !!(childName && parentName);
    const greetTitle = known
      ? L(`أهلاً بك أستاذ/ة ${parentName}`, `Hello ${parentName}`)
      : L(
          "ساعدنا نفهم حالة ابنك",
          "Help us understand how your child is doing",
        );
    const greetSub = known
      ? L(
          `ساعدنا نفهم حالة ${childName}. إجاباتك بتساعد المدرس يدعم ابنك بشكل أفضل. الاستبيان بياخد حوالي ٣ دقايق، وإجاباتك بتوصل للمدرس فقط.`,
          `Help us understand how ${childName} is doing. Your answers help the teacher support your child better. It takes about 3 minutes and answers are shared with the teacher only.`,
        )
      : L(
          "إجاباتك بتساعد المدرس يدعم ابنك بشكل أفضل. الاستبيان بياخد حوالي ٣ دقايق، وإجاباتك بتوصل للمدرس فقط.",
          "Your answers help the teacher support your child better. It takes about 3 minutes and your answers are shared with the teacher only.",
        );
    // Consent is kept only in memory for this page session. A refresh requires consent again.
    const consented = parentConsentInMemory.has(token);
    if (!consented) {
      setTimeout(() => {
        const btn = document.getElementById("pfConsentContinue");
        if (!btn) return;
        btn.onclick = () => {
          const read = document.getElementById("pfReadLegal");
          const econs = document.getElementById("pfEConsent");
          const role = document.querySelector('input[name="pfRole"]:checked');
          if (!read || !read.checked) {
            toast(
              L(
                "من فضلك أكّد إنك قرأت السياسة والشروط",
                "Please confirm you read the policy and terms",
              ),
              "error",
            );
            return;
          }
          if (!role) {
            toast(L("اختَر صفة المشارك", "Select your role"), "error");
            return;
          }
          if (!econs || !econs.checked) {
            toast(
              L(
                "يلزم الموافقة الإلكترونية للمتابعة",
                "Electronic consent is required to continue",
              ),
              "error",
            );
            return;
          }
          parentConsentInMemory.set(token, role.value);
          navigate(location.hash || "#/parent/" + token);
        };
      }, 40);
      return `
<section class="parent-page"><div class="container">
  <div class="parent-hero">
    <div class="eyebrow">${L("نموذج ولي الأمر", "Parent form")}</div>
    <h1>${greetTitle}</h1>
    <p>${greetSub}</p>
  </div>
  <div class="form-card parent-consent-card" id="parentConsentCard">
    <div class="consent-icon">${ico("shield")}</div>
    <h2>${L("قبل ما نبدأ", "Before we start")}</h2>
    <p class="consent-lead">${L(
      "دقيقة واحدة بس: اقرأ السياسة والشروط، اختَر صفتك، ووافق على المشاركة. بعد كده هنبدأ النموذج مباشرة.",
      "One quick minute: read the policy & terms, choose your role, and consent. Then we open the form right away.",
    )}</p>
    <div class="consent-links">
      <a class="btn" href="#/privacy" target="_blank" rel="noopener">${ico("book")} ${L("سياسة الخصوصية", "Privacy Policy")}</a>
      <a class="btn" href="#/terms" target="_blank" rel="noopener">${ico("info")} ${L("الشروط والأحكام", "Terms & Conditions")}</a>
    </div>
    <div class="consent-step"><span>1</span> ${L("القراءة والموافقة", "Read & agree")}</div>
    <label class="consent-check" for="pfReadLegal">
      <input type="checkbox" id="pfReadLegal" />
      <span class="consent-box" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>
      <span class="consent-text">${L("قرأت سياسة الخصوصية والشروط والأحكام", "I read the Privacy Policy and Terms")}
        <small>${L("اضغط المربّع للتأكيد قبل المتابعة", "Tap the box to confirm before continuing")}</small>
      </span>
    </label>
    <div class="consent-step"><span>2</span> ${L("صفة المشارك", "Your role")}</div>
    <div class="consent-role-block">
      <label class="consent-role"><input type="radio" name="pfRole" value="parent" /><span class="consent-radio" aria-hidden="true"><i></i></span><span>${L("أحد الوالدين أو الوصي القانوني", "Parent or legal guardian")}</span></label>
      <label class="consent-role"><input type="radio" name="pfRole" value="teacher" /><span class="consent-radio" aria-hidden="true"><i></i></span><span>${L("معلم/معلمة مسؤول(ة) عن ملاحظة الطفل", "Teacher observing the child")}</span></label>
    </div>
    <div class="consent-step"><span>3</span> ${L("الموافقة الإلكترونية", "Electronic consent")}</div>
    <label class="consent-check" for="pfEConsent">
      <input type="checkbox" id="pfEConsent" />
      <span class="consent-box" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>
      <span class="consent-text">${L("أوافق على المشاركة في التقييم والمتابعة عبر المنصة", "I consent to participate in assessment & follow-up")}
        <small>${L("بعد فهم الغرض وحدود التقييم — مش تشخيص طبي نهائي", "After understanding purpose & limits — not a final medical diagnosis")}</small>
      </span>
    </label>
    <button type="button" class="btn btn-primary btn-lg btn-block" id="pfConsentContinue">${L("متابعة إلى النموذج", "Continue to the form")}</button>
    <p class="pf-privacy">${ico("shield")} ${L("بياناتك بتتشارك مع مدرس الطفل فقط.", "Your information is shared with the child's teacher only.")}</p>
  </div>
</div></section>`;
    }
    return `
<section class="parent-page"><div class="container">
  <div class="parent-hero">
    <div class="eyebrow">${L("نموذج ولي الأمر", "Parent form")}</div>
    <h1>${greetTitle}</h1>
    <p>${greetSub}</p>
  </div>
  <form class="form-card parent-form" id="parentForm" data-token="${token}" data-student-id="${linked?.id || qMeta.sid || ""}" onsubmit="submitParentForm(event)" novalidate autocomplete="off">
    <input type="hidden" id="pfChild" value="${esc(childName)}" />
    <input type="hidden" id="pfParent" value="${esc(parentName)}" />
    <input type="hidden" id="pfPhone" value="${esc(phoneVal)}" />
    <input type="hidden" id="pfEmail" value="${esc(emailVal)}" />
    <h3 class="pf-h">${L("أسئلة عن حالة طفلك", "Questions about your child")}</h3>
    <div class="pf-instructions">
      <p><strong>${L("تعليمات تطبيق المقياس", "How to complete the scale")}</strong></p>
      <p>${L("قيّم سلوك الطفل خلال الأسبوعين الماضيين بناءً على الملاحظة اليومية، واختر الإجابة التي تصف مدى تكرار كل سلوك.", "Rate the child's behavior over the past two weeks based on daily observation, and choose the answer that best describes how often each behavior occurred.")}</p>
      <div class="pf-scale-legend">
        <span><b>0</b> ${L("أبدًا", "Never")}</span>
        <span><b>1</b> ${L("نادرًا", "Rarely")}</span>
        <span><b>2</b> ${L("أحيانًا", "Sometimes")}</span>
        <span><b>3</b> ${L("غالبًا", "Often")}</span>
        <span><b>4</b> ${L("دائمًا", "Always")}</span>
      </div>
    </div>
${groups
  .map(
    (
      g,
    ) => `<div class="pf-domain"><div class="pf-dname">${DOMAINS[g][ar() ? 0 : 1]}</div>
        ${PQ.filter((q) => q.d === g)
          .map((q) => {
            const o = optsOf(q);
            return `<div class="question-block pf-q" id="pq-${q.k}" role="radiogroup" aria-label="${esc(ar() ? q.ar : q.en)}">
              <div class="q-label"><span>${esc(ar() ? q.ar : q.en)}</span></div>
              <div class="pf-opts n${o.length}">
                ${o.map((x) => `<label class="pf-opt"><input type="radio" name="${q.k}" value="${x.v}" ${d.a[q.k] === x.v ? "checked" : ""} /><span>${ar() ? x.ar : x.en}</span></label>`).join("")}
              </div>
              <div class="form-error">${ico("alert")} ${L("اختار إجابة", "Please choose an answer")}</div>
            </div>`;
          })
          .join("")}</div>`,
  )
  .join("")}
    <div class="form-group" style="margin-top:18px;">
      <label for="pfNotes">${L("ملاحظات إضافية (اختياري)", "Additional notes (optional)")}</label>
      <textarea id="pfNotes" placeholder="${L("أي حاجة تحب المدرس يعرفها عن طفلك...", "Anything you'd like the teacher to know about your child...")}">${esc(v.notes || "")}</textarea>
    </div>
    <input type="text" name="website" id="pfWebsite" tabindex="-1" autocomplete="off" aria-hidden="true" class="hp" />
    <button class="btn btn-primary btn-lg btn-block" type="submit" id="pfSubmit">${ico("check")} ${L("إرسال الإجابات", "Submit answers")}</button>
    <p class="pf-privacy">${ico("shield")} ${L("بياناتك بتتشارك مع مدرس طفلك فقط.", "Your information is shared with your child's teacher only.")}</p>
  </form>
</div></section>`;
  }
  const saveDraft = () => {
    const f = $("#parentForm");
    if (!f) return;
    const d = draftOf(f.dataset.token);
    d.v = {
      child: $("#pfChild")?.value || "",
      parent: $("#pfParent")?.value || "",
      phone: $("#pfPhone")?.value || "",
      email: $("#pfEmail")?.value || "",
      notes: $("#pfNotes").value,
    };
    d.a = {};
    PQ.forEach((q) => {
      const c = f.querySelector(`input[name="${q.k}"]:checked`);
      if (c) d.a[q.k] = Number(c.value);
    });
  };
  ["input", "change"].forEach((ev) =>
    document.addEventListener(ev, (e) => {
      if (!e.target.closest || !e.target.closest("#parentForm")) return;
      saveDraft();
      const g = e.target.closest(".form-group,.pf-q");
      if (g && e.target.value) g.classList.remove("invalid");
    }),
  );

  function showParentSubmissionLoading() {
    document.getElementById("parentSubmissionLoading")?.remove();
    const overlay = document.createElement("div");
    overlay.id = "parentSubmissionLoading";
    overlay.className = "parent-submission-loading";
    overlay.setAttribute("role", "status");
    overlay.setAttribute("aria-live", "polite");
    overlay.innerHTML = `<div class="parent-submission-loading-card"><div class="parent-submission-spinner" aria-hidden="true"></div><h2>${L("بنحفظ إجاباتك ونجهّز الرد...", "Saving your answers and preparing the response...")}</h2><p>${L("من فضلك ما تقفلش الصفحة. العملية ممكن تاخد شوية وقت.", "Please keep this page open. This may take a little while.")}</p></div>`;
    document.body.appendChild(overlay);
  }
  function hideParentSubmissionLoading() {
    document.getElementById("parentSubmissionLoading")?.remove();
  }
  window.submitParentForm = async (e) => {
    e.preventDefault();
    const f = $("#parentForm");
    if (!f) return;
    const token = f.dataset.token;
    const studentId = f.dataset.studentId || "";
    const child = ($("#pfChild")?.value || "").trim();
    const pname = ($("#pfParent")?.value || "").trim();
    const phone = ($("#pfPhone")?.value || "").trim().replace(/[\s\-()]/g, "");
    const email = ($("#pfEmail")?.value || "").trim();
    const notes = ($("#pfNotes")?.value || "").trim();
    const bad = [];
    const mark = (id, invalid) => {
      if (!$("#" + id)) return; // hidden fields skip visual mark
      markField(id, invalid);
      if (invalid) bad.push(id);
    };
    // Parent contact fields are intentionally not requested in this public questionnaire.
    // Student identity is resolved from the secret token by the registered workflow when configured.
    const answers = {};
    PQ.forEach((q) => {
      const c = f.querySelector(`input[name="${q.k}"]:checked`);
      if (c) answers[q.k] = Number(c.value);
      mark("pq-" + q.k, !c);
    });
    if (bad.length) {
      toast(
        L(
          "من فضلك أكمل الحقول المطلوبة",
          "Please complete the required fields",
        ),
        "error",
      );
      $("#" + bad[0])?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    if ($("#pfWebsite").value) return showParentThanks(false); // honeypot
    const an = analyze(answers);
    const resolvedSid =
      studentId || state.students.find((s) => s.formToken === token)?.id || "";
    if (f.dataset.submitting === "true") return;
    f.dataset.submitting = "true";
    const submissionId =
      f.dataset.submissionId ||
      "ps_" +
        Date.now().toString(36) +
        "_" +
        Math.random().toString(36).slice(2, 8);
    f.dataset.submissionId = submissionId;
    const submission = {
      id: submissionId,
      token,
      studentId: resolvedSid || undefined,
      submittedAt: Date.now(),
      lang: state.lang,
      child,
      parent: { name: pname, phone, email },
      answers,
      notes,
      qa: PQ.map((q) => ({
        key: q.k,
        domain: q.d,
        question_ar: q.ar,
        question_en: q.en,
        value: answers[q.k],
        answer_ar: optsOf(q).find((x) => x.v === answers[q.k])?.ar,
        answer_en: optsOf(q).find((x) => x.v === answers[q.k])?.en,
      })),
      // Keep full analysis fields so the parent result screen and teacher profile share the same data.
      analysis: {
        overall: an.overall,
        level: an.level,
        domains: an.domains,
        totalRaw: an.totalRaw,
        maxRaw: an.maxRaw,
        band: an.band,
        flags: an.flags,
        answered: an.answered,
      },
    };
    const btn = $("#pfSubmit");
    if (btn) {
      btn.disabled = true;
      btn.classList.add("loading");
    }
    showParentSubmissionLoading();
    let remote = false;
    let followUpUrl = "";
    let databaseSaved = false;
    try {
      if (window.AneesCloud?.submitParentForm) {
        const result = await window.AneesCloud.submitParentForm(
          token,
          submission,
        );
        databaseSaved = !!result?.ok;
        if (databaseSaved) {
          submission.studentId = result.studentId || submission.studentId;
          submission.child = result.studentName || submission.child;
          submission.syncStatus = "synced";
          remote = true;
        }
      }
    } catch (error) {
      console.error("[Anees parent form cloud save]", error);
    }
    if (!databaseSaved) {
      hideParentSubmissionLoading();
      if (btn) {
        btn.disabled = false;
        btn.classList.remove("loading");
      }
      f.dataset.submitting = "false";
      toast(
        L(
          "تعذر حفظ الرد في قاعدة البيانات. تأكد من اتصالك وحاول الإرسال مرة أخرى.",
          "The response could not be saved to the database. Check your connection and try again.",
        ),
        "error",
      );
      return;
    }
    const remoteConfigured = CONFIG.USE_N8N && !isPh(CONFIG.N8N_PARENT_FORM);
    if (remoteConfigured) {
      const res = await sendToN8N(CONFIG.N8N_PARENT_FORM, {
        action: "submit",
        eventId: submission.id,
        ...submission,
      });
      if (!res) {
        // Supabase has already saved the submission; only the optional n8n analysis is pending.
        submission.n8nStatus = "pending";
      } else {
        remote = true;
        submission.syncStatus = "synced";
        const body =
          res.data && typeof res.data === "object"
            ? { ...res, ...res.data }
            : res;
        if (body.analysis && typeof body.analysis === "object") {
          submission.analysis = {
            ...(submission.analysis || {}),
            ...body.analysis,
          };
        }
        const ai =
          body.aiAnalysis ??
          body.aiSummary ??
          body.analysis?.aiSummary ??
          body.analysis?.summary;
        if (ai != null) submission.aiAnalysis = ai;
        if (typeof body.followUpRequired === "boolean")
          submission.followUpRequired = body.followUpRequired;
        if (typeof body.followUpUrl === "string")
          followUpUrl = body.followUpUrl;
        if (body.submissionId)
          submission.serverSubmissionId = String(body.submissionId);
      }
    } else {
      submission.syncStatus = "synced";
    }

    // Parent-result email/report workflow intentionally removed. Results are shown in-site only.
    saveLocalSub(token, submission);
    state.parentDraft = null;
    f.dataset.submitting = "false";
    showParentThanks(remote, followUpUrl, submission);
  };
  function showParentThanks(remote, followUpUrl = "", submission = null) {
    hideParentSubmissionLoading();
    let safeFollowUpUrl = "";
    if (followUpUrl) {
      try {
        const parsed = new URL(followUpUrl, location.href);
        if (parsed.protocol === "https:" || parsed.protocol === "http:")
          safeFollowUpUrl = parsed.href;
      } catch (error) {}
    }
    const an = submission?.analysis || null;
    const answers = submission?.answers || an?.answers || {};
    // Rebuild full analysis if older submissions omitted totalRaw/band.
    const computed =
      an && (an.totalRaw != null || an.band)
        ? an
        : Object.keys(answers || {}).length
          ? analyze(answers)
          : an;
    const overallScore =
      computed?.overall != null && Number.isFinite(Number(computed.overall))
        ? Math.max(0, Math.min(100, Number(computed.overall)))
        : null;
    const band =
      computed?.band ||
      (computed?.totalRaw != null ? scoreBand(Number(computed.totalRaw)) : null);
    const meta = band ? bandMeta(band, ar()) : null;
    const resultTitle = meta?.title || "";
    const resultDescription = meta?.desc || "";
    // Domain view aligned with what the teacher sees on the student profile.
    const domainRows = (computed?.domains || [])
      .map((d) => {
        const key = d.d || d.domain || d.key || "";
        const label = DOMAINS[key] ? DOMAINS[key][ar() ? 0 : 1] : key;
        const scorePct =
          d.score != null && Number.isFinite(Number(d.score))
            ? Math.max(0, Math.min(100, Number(d.score)))
            : d.raw != null && d.max
              ? Math.round((Number(d.raw) / Number(d.max)) * 100)
              : null;
        const kind =
          scorePct == null
            ? "mid"
            : scorePct >= 70
              ? "good"
              : scorePct >= 40
                ? "mid"
                : "low";
        return `<div class="pr-domain ${kind}"><div class="pr-domain-head"><span>${esc(label)}</span><strong>${scorePct == null ? "—" : `${scorePct}%`}</strong></div><div class="pr-domain-bar" role="img" aria-label="${esc(label)}: ${scorePct == null ? "—" : scorePct + "%"}"><i style="width:${scorePct == null ? 0 : scorePct}%"></i></div></div>`;
      })
      .join("");
    const resultCard =
      meta || overallScore != null || domainRows
        ? `<div class="parent-result-card band-${meta?.cls || meta?.band || "mid"}">
          <div class="pr-hero">
            ${resultTitle ? `<span class="pr-badge">${esc(resultTitle)}</span>` : ""}
            <div class="pr-score-block">
              <div class="pr-score">${overallScore == null ? "—" : overallScore}<small>${overallScore == null ? "" : "%"}</small></div>
              <div class="pr-score-label">${L("مؤشر الاستبيان", "Questionnaire indicator")}</div>
            </div>
            ${resultDescription ? `<p class="pr-desc">${esc(resultDescription)}</p>` : ""}
          </div>
          ${domainRows ? `<div class="pr-domains"><div class="pr-domains-title">${L("تفصيل المجالات", "Domain breakdown")}</div>${domainRows}</div>` : ""}
          <p class="pr-disclaimer">${L("هذه النتيجة مساعدة للمتابعة وليست تشخيصًا طبيًا أو نفسيًا نهائيًا. سيراجعها المدرس مع ملاحظات المدرسة.", "This result supports follow-up and is not a final medical or psychological diagnosis. The teacher will review it with school observations.")}</p>
        </div>`
        : "";
    const token = String(submission?.token || "");
    const againHref = token
      ? `#/parent/${encodeURIComponent(token)}?again=${Date.now().toString(36)}`
      : "#/";
    $("#page").innerHTML = `
<section class="parent-page"><div class="container">
  <div class="form-card parent-thanks">
    <div class="thanks-ic">${ico("check")}</div>
    <h2>${L("شكرًا لك!", "Thank you!")}</h2>
    <p>${remote ? L("وصلت إجاباتك إلى النظام وسيتمكن المدرس من مراجعتها.", "Your answers reached the system and are ready for the teacher to review.") : L("لم يتم تأكيد حفظ الإجابات في قاعدة البيانات.", "The answers were not confirmed as saved to the database.")}</p>
    ${resultCard}
    ${safeFollowUpUrl ? `<a class="btn btn-primary btn-lg btn-block" href="${esc(safeFollowUpUrl)}" target="_blank" rel="noopener noreferrer">${L("استكمال نموذج المتابعة", "Continue to follow-up form")}</a>` : ""}
    <a class="btn btn-ghost btn-lg btn-block" href="${esc(againHref)}" data-link data-parent-again="1">${L("تقييم مرة أخرى", "Evaluate Again")}</a>
    ${remote ? "" : `<p class="pf-demo">${L("لم يتم تأكيد حفظ الرد في قاعدة البيانات. حاول الإرسال مرة أخرى.", "The response was not confirmed as saved to the database. Please try submitting again.")}</p>`}
  </div>
</div></section>`;
    // Force re-open of the form even when the hash token is unchanged (SPA same-route case).
    const againBtn = document.querySelector("[data-parent-again]");
    if (againBtn && token) {
      againBtn.addEventListener("click", (ev) => {
        ev.preventDefault();
        parentConsentInMemory.delete(token);
        state.parentDraft = null;
        const target = againHref;
        if (location.hash === target) {
          window.navigate(target);
        } else {
          location.hash = target;
        }
      });
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  /* ---------- الراوتر: #/parent/<token> ---------- */
  const _navR4 = window.navigate;
  window.navigate = (h) => {
    const m = (h || "").match(PARENT_RE);
    document.body.classList.toggle("parent-mode", !!m);
    if (!m) return _navR4(h);
    const token = m[1];
    // ?again=... means the parent explicitly asked to fill the form again.
    if (/\bagain=/i.test(m[2] || h || "")) {
      parentConsentInMemory.delete(token);
      state.parentDraft = null;
    }
    state.route = h;
    state.currentClass = null;
    closeMobile();
    $("#site").classList.remove("hidden");
    $("#dashboard").classList.remove("active");
    const page = $("#page");
    page.innerHTML = renderParentPage(token);
    page.classList.remove("leaving", "page-in");
    void page.offsetWidth;
    page.classList.add("page-in");
    bindPageEvents();
    window.scrollTo(0, 0);
    document.title =
      L("نموذج ولي الأمر", "Parent form") + " | " + L("أنيس", "Anees");
  };

  /* توافق مع أي استدعاء قديم */
  window.openStudentDetail = (id, tab) =>
    tab === "weekly"
      ? openStudentReports(id, "reports", "weekly")
      : openAssessModal(id);

  /* Route initialization is performed once, after all feature modules register. */

  /* ---------- Mobile back button: close overlays first ---------- */
  const overlayStack = [];
  const pushOverlay = (closeFn) => {
    if (typeof closeFn === "function") overlayStack.push(closeFn);
  };
  const popOverlay = () => {
    if (!overlayStack.length) return false;
    const fn = overlayStack.pop();
    try {
      fn && fn();
    } catch {}
    return true;
  };
  // Wrap modal openers to push history
  const wrapOpen = (name) => {
    const orig = window[name];
    if (typeof orig !== "function") return;
    window[name] = function (...args) {
      const r = orig.apply(this, args);
      // if a modal is open after call, push
      setTimeout(() => {
        if (
          $("#genericModal")?.classList.contains("open") ||
          $("#dialogOverlay")?.classList.contains("open") ||
          $("#chatPanel")?.classList.contains("open") ||
          $("#mobileMenu")?.classList.contains("open")
        ) {
          pushOverlay(() => {
            if ($("#dialogOverlay")?.classList.contains("open"))
              $("#dialogOverlay").classList.remove("open");
            else if ($("#genericModal")?.classList.contains("open"))
              closeGenericModal();
            else if ($("#chatPanel")?.classList.contains("open")) toggleChat();
            else if ($("#mobileMenu")?.classList.contains("open"))
              closeMobile();
          });
        }
      }, 30);
      return r;
    };
  };
  [
    "openAssessModal",
    "openStudentReports",
    "openClassForm",
    "openStudentForm",
  ].forEach(wrapOpen);

  // Also track dialog
  const _dialog = dialog;
  window.dialog = function (opts) {
    _dialog(opts);
    pushOverlay(() => $("#dialogOverlay")?.classList.remove("open"));
  };

  // menu toggle / chat
  const menuBtn = $("#menuToggle");
  if (menuBtn) {
    const prev = menuBtn.onclick;
    menuBtn.addEventListener("click", () => {
      setTimeout(() => {
        if ($("#mobileMenu")?.classList.contains("open"))
          pushOverlay(() => closeMobile());
      }, 20);
    });
  }
  const chatFab = $("#chatFab");
  if (chatFab) {
    chatFab.addEventListener("click", () => {
      setTimeout(() => {
        if ($("#chatPanel")?.classList.contains("open"))
          pushOverlay(() => {
            if ($("#chatPanel").classList.contains("open")) toggleChat();
          });
      }, 20);
    });
  }

  window.addEventListener("popstate", () => {
    const hasOpenOverlay = Boolean(
      $("#dialogOverlay")?.classList.contains("open") ||
      $("#genericModal")?.classList.contains("open") ||
      $("#chatPanel")?.classList.contains("open") ||
      $("#mobileMenu")?.classList.contains("open") ||
      ($("#dashSide")?.classList.contains("open") && innerWidth <= 1024),
    );

    if (hasOpenOverlay) {
      const closeTopOverlay = overlayStack.pop();
      try {
        closeTopOverlay?.();
      } catch {}
      // Overlay entries no longer own browser-history entries. Drop callbacks from
      // overlays already closed manually, and allow hashchange to restore the prior route.
      overlayStack.length = 0;
      if ($("#dialogOverlay")?.classList.contains("open"))
        $("#dialogOverlay").classList.remove("open");
      else if ($("#genericModal")?.classList.contains("open"))
        closeGenericModal();
      else if ($("#chatPanel")?.classList.contains("open")) toggleChat();
      else if ($("#mobileMenu")?.classList.contains("open")) closeMobile();
      else if ($("#dashSide")?.classList.contains("open") && innerWidth <= 1024)
        closeDashDrawer();
      return;
    }

    // Stale overlay callbacks must never consume a real browser Back action.
    overlayStack.length = 0;
  });
})();
/* ---------- Keep input focus & caret when the dashboard re-renders on typing ---------- */
(() => {
  const _rd = window.renderDashboard;
  window.renderDashboard = function (...a) {
    const el = document.activeElement;
    const inMain = el && el.tagName === "INPUT" && el.closest("#dashMain");
    const idx = inMain
      ? [...document.querySelectorAll("#dashMain input")].indexOf(el)
      : -1;
    const pos = inMain ? el.selectionStart : 0;
    const r = _rd.apply(this, a);
    if (idx >= 0) {
      const n = document.querySelectorAll("#dashMain input")[idx];
      if (n) {
        n.focus();
        try {
          n.setSelectionRange(pos, pos);
        } catch (e) {}
      }
    }
    return r;
  };
})();
/* CUSTOM SELECT BOOT */
(() => {
  const run = () => {
    try {
      enhanceCustomSelects(document);
    } catch (e) {}
  };
  if (document.readyState === "loading")
    document.addEventListener("DOMContentLoaded", run);
  else run();
  const _n = window.navigate;
  window.navigate = function (h) {
    const r = _n.apply(this, arguments);
    setTimeout(run, 40);
    return r;
  };
})();

/* Scroll position is not persisted in browser storage by design. */

/* ---------- Final route bootstrap (after every feature module is registered) ---------- */
(async () => {
  try {
    const authUser = await window.AneesCloud?.restoreState();
    if (authUser) {
      showAuthLoading("login");
      if (window.AneesCloud?.reloadIntoState) {
        await window.AneesCloud.reloadIntoState(state);
      }
      const cached = state.teachers.find(
        (x) => x.id === authUser.id || x.email === authUser.email,
      );
      const meta = authUser.user_metadata || {};
      let dbProfile = null;
      try {
        dbProfile = await window.AneesCloud.getProfile?.();
      } catch (profileError) {
        console.warn("[Anees profile restore]", profileError);
      }
      state.user = {
        ...(cached || {}),
        id: authUser.id,
        name:
          meta.full_name ||
          meta.name ||
          cached?.name ||
          authUser.email?.split("@")[0] ||
          "Teacher",
        email: authUser.email,
        phone: dbProfile?.phone || meta.phone || cached?.phone || "",
        avatar:
          dbProfile?.avatar_url ||
          meta.avatar_url ||
          meta.picture ||
          cached?.avatar ||
          null,
        experienceYears: Number(
          dbProfile?.experience_years ??
            meta.experience_years ??
            cached?.experienceYears ??
            0,
        ),
        specialty:
          dbProfile?.specialty ?? meta.specialty ?? cached?.specialty ?? "",
        school: dbProfile?.school ?? meta.school ?? cached?.school ?? "",
      };
      if (!cached) state.teachers.push(state.user);
      if (!state.user.phone) state.dashView = "profile";
      LS.set("anees.user", state.user);
      renderNavbar();
    } else {
      state.user = null;
      LS.set("anees.user", null);
    }
  } catch (error) {
    console.error("[Anees] Cloud session restore failed", error);
  }
  try {
    const recoveryHash = /type=recovery/.test(location.hash || "");
    const recoveryQuery =
      new URLSearchParams(location.search).get("recovery") === "1";
    if (recoveryHash || recoveryQuery)
      history.replaceState(
        null,
        "",
        location.pathname + location.search + "#/reset-password",
      );
    const requestedRoute = location.hash || "#/";
    const isPublicAuthRoute = ["#/", "#/login", "#/signup"].includes(
      requestedRoute,
    );
    const targetRoute =
      state.user && isPublicAuthRoute ? "#/dashboard" : requestedRoute;
    window.navigate(targetRoute);
    if (state.user && !state.user.phone) {
      toast(
        state.lang === "ar"
          ? "من فضلك أضف رقم هاتفك في الملف الشخصي لإكمال إعداد الحساب."
          : "Please add your phone number in your profile to complete account setup.",
        "warning",
      );
    }
    hideAuthLoading();
  } catch (error) {
    hideAuthLoading();
    console.error("[Anees] Initial route failed", error);
  }
})();

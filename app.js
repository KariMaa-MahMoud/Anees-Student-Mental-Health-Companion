/* ============================================================
   أنيس (Anees) – app.js
   الملف الكامل: Core + Dashboard + Assessment + Chatbot
   ============================================================ */

/* ============================================================
   أنيس – الجزء الثاني: JavaScript الكامل
   انسخ المحتوى ده بالكامل وحطه مكان الـ <script> في نهاية ملف Part 1
   ============================================================ */

/* ============================================================
   CONFIG – جاهز للفول ستاك + n8n
   استبدل الروابط دي بروابط الـ Webhooks الحقيقية من n8n
   ============================================================ */
const CONFIG = {
  N8N_CHAT: "https://mohamed-hatem-22.app.n8n.cloud/webhook/anees-chat", // حط اللينك الحقيقي هنا
  N8N_DAILY_REPORT: "https://your-n8n.example.com/webhook/anees-daily-report",
  N8N_WEEKLY_REPORT: "https://your-n8n.example.com/webhook/anees-weekly-report",
  N8N_MONTHLY_REPORT:
    "https://your-n8n.example.com/webhook/anees-monthly-report",
  USE_N8N: true, // خليها true
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
  facebook:
    '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2.5v-3h2.5V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 3h-2.3v7A10 10 0 0 0 22 12z"/></svg>',
  linkedin:
    '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34V9.66H5.67v8.68h2.67zM7 8.5a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1zm11.34 9.84v-4.76c0-2.55-1.36-3.73-3.17-3.73-1.46 0-2.12.8-2.48 1.37V9.66h-2.67v8.68h2.67v-4.85c0-1.28.24-2.52 1.83-2.52 1.56 0 1.58 1.46 1.58 2.6v4.77h2.67z"/></svg>',
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
};
const ico = (k) => I[k] || "";

/* ============================================================
   STORAGE LAYER (جاهز للاستبدال بـ API)
   ============================================================ */
const LS = {
  get: (k, d) => {
    try {
      const v = localStorage.getItem(k);
      return v ? JSON.parse(v) : d;
    } catch {
      return d;
    }
  },
  set: (k, v) => localStorage.setItem(k, JSON.stringify(v)),
};

/* ============================================================
   AGE STAGES (نفسية)
   ============================================================ */
const AGE_STAGES = {
  kg: { ar: "KG (4–6 سنوات)", en: "KG (4–6 years)", min: 4, max: 6 },
  early_primary: {
    ar: "ابتدائي مبكر (6–9)",
    en: "Early Primary (6–9)",
    min: 6,
    max: 9,
  },
  late_primary: {
    ar: "ابتدائي متأخر (9–12)",
    en: "Late Primary (9–12)",
    min: 9,
    max: 12,
  },
  preparatory: {
    ar: "إعدادي (12–15)",
    en: "Preparatory (12–15)",
    min: 12,
    max: 15,
  },
  secondary: { ar: "ثانوي (15–18)", en: "Secondary (15–18)", min: 15, max: 18 },
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
  route: "#/",
  currentClass: null,
  dashView: "classes",
  detailTab: "daily",
  classSearch: "",
  classFilter: "all",
};

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));
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
  if (state.user && $("#dashboard").classList.contains("active")) {
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

/* ============================================================
   ROUTING
   ============================================================ */
const ROUTES = {
  "#/": renderHome,
  "#/blog": renderBlog,
  "#/testimonials": renderTestimonials,
  "#/pricing": renderPricing,
  "#/about": renderAbout,
  "#/contact": renderContact,
};

function navigate(hash) {
  if (!hash) hash = "#/";
  state.route = hash;
  state.currentClass = null;
  if (hash.startsWith("#/dashboard")) {
    if (!state.user) {
      location.hash = "#/";
      setTimeout(() => openAuth("login"), 100);
      toast(
        state.lang === "ar"
          ? "لازم تسجل دخول الأول للوصول للداشبورد"
          : "Please login first",
        "warn",
      );
      return;
    }
    $("#site").classList.add("hidden");
    $("#dashboard").classList.add("active");
    renderDashboard();
    renderDashTopActions();
    // open sidebar by default so menu is visible; user can close via icon
    const side = $("#dashSide");
    const overlay = $("#dashOverlay");
    if (side) side.classList.add("open");
    if (overlay && window.innerWidth <= 1024) overlay.classList.add("open");
    window.scrollTo(0, 0);
    return;
  }
  $("#site").classList.remove("hidden");
  $("#dashboard").classList.remove("active");
  const render = ROUTES[hash] || ROUTES["#/"];
  $("#page").innerHTML = render();
  bindPageEvents();
  updateNavActive();
  window.scrollTo(0, 0);
  setupReveal();
}

function updateNavActive() {
  $$(".nav-links a, #mobileNavLinks a").forEach((a) =>
    a.classList.toggle("active", a.getAttribute("href") === state.route),
  );
}
window.addEventListener("hashchange", () => navigate(location.hash || "#"));

/* ============================================================
   NAVBAR (بدون صفحة الخدمات)
   ============================================================ */
function renderNavbar() {
  const isAr = state.lang === "ar";
  const links = [
    { href: "#/", label: isAr ? "الرئيسية" : "Home" },
    { href: "#/blog", label: isAr ? "المدونة" : "Blog" },
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
      <div class="user-menu" id="userMenu">
        <button class="user-trigger" id="userTrigger">
          <span class="user-avatar">${avatarContent}</span>
          <span class="name">${isAr ? "أهلا،" : "Hi,"} ${esc(state.user.name.split(" ")[0])}</span>
          <span class="chev">${ico("chev")}</span>
        </button>
        <div class="user-dropdown">
          <a href="#/dashboard" data-link>${ico("grid")}<span>${isAr ? "لوحة التحكم" : "Dashboard"}</span></a>
          <a href="#/dashboard" data-link onclick="state.dashView='profile';setTimeout(renderDashboard,50)">${ico("user")}<span>${isAr ? "الملف الشخصي" : "Profile"}</span></a>
          <div class="divider"></div>
          <button class="danger" onclick="logout()">${ico("logout")}<span>${isAr ? "تسجيل الخروج" : "Logout"}</span></button>
        </div>
      </div>`;
    $("#mobileActions").innerHTML = `
      <a href="#/dashboard" data-link class="btn btn-primary btn-lg btn-block">${ico("grid")} ${isAr ? "لوحة التحكم" : "Dashboard"}</a>
      <button class="btn btn-ghost btn-lg btn-block" onclick="toggleTheme()">${state.theme === "dark" ? ico("sun") + (isAr ? " الوضع الفاتح" : " Light mode") : ico("moon") + (isAr ? " الوضع الليلي" : " Dark mode")}</button>
      <button class="btn btn-ghost btn-lg btn-block" onclick="toggleLang()">${ico("globe")} ${isAr ? "English" : "العربية"}</button>
      <button class="btn btn-ghost btn-lg btn-block" style="color:var(--danger)" onclick="logout()">${ico("logout")} ${isAr ? "تسجيل الخروج" : "Logout"}</button>`;
  } else {
    $("#navActions").innerHTML = `
      ${langBtn}${themeBtn}
      <button class="btn btn-ghost btn-sm" onclick="openAuth('login')">${isAr ? "تسجيل الدخول" : "Login"}</button>
      <button class="btn btn-primary btn-sm" onclick="openAuth('signup')">${isAr ? "انضم إلينا" : "Join us"}</button>`;
    $("#mobileActions").innerHTML = `
      <button class="btn btn-ghost btn-lg btn-block" onclick="closeMobile();toggleTheme()">${state.theme === "dark" ? ico("sun") + (isAr ? " الوضع الفاتح" : " Light") : ico("moon") + (isAr ? " الوضع الليلي" : " Dark")}</button>
      <button class="btn btn-ghost btn-lg btn-block" onclick="closeMobile();toggleLang()">${ico("globe")} ${isAr ? "English" : "العربية"}</button>
      <button class="btn btn-ghost btn-lg btn-block" onclick="closeMobile();openAuth('login')">${isAr ? "تسجيل الدخول" : "Login"}</button>
      <button class="btn btn-primary btn-lg btn-block" onclick="closeMobile();openAuth('signup')">${isAr ? "انضم إلينا" : "Join us"}</button>`;
  }

  const trigger = $("#userTrigger");
  if (trigger)
    trigger.onclick = (e) => {
      e.stopPropagation();
      $("#userMenu").classList.toggle("open");
    };
}

document.addEventListener("click", (e) => {
  const menu = $("#userMenu");
  if (menu && !menu.contains(e.target)) menu.classList.remove("open");
});

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
              "خصوصية كاملة وتشفير لكل البيانات",
            ]
          : [
              "Scientific assessment based on expert questions, not guesswork",
              "Automatic reports delivered to parents with zero extra effort",
              "Real-time tracking for every student in class",
              "Simple Arabic content without complex jargon",
              "Full privacy and encryption for all data",
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
              "طبعًا. كل البيانات مشفرة، ومحدش يقدر يوصلها غير المدرس صاحب الحساب وولي أمر الطالب.",
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
              "Absolutely. All data is encrypted and only accessible by the teacher account owner and the student's parent.",
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
        <li><a class="contact-item" href="mailto:hello@anees.eg" aria-label="${isAr ? "أرسل بريدًا إلكترونيًا" : "Send an email"}"><div class="ic">${ico("mail")}</div><div><div class="cv" dir="ltr">hello@anees.eg</div><div style="font-size:.82rem;color:var(--text-muted);">${isAr ? "للرد خلال 24 ساعة" : "Reply within 24 hours"}</div></div><span class="go" aria-hidden="true">${ico("arrowL")}</span></a></li>
        <li><a class="contact-item" href="tel:+201000000000" aria-label="${isAr ? "اتصل بنا" : "Call us"}"><div class="ic">${ico("phone")}</div><div><div class="cv" dir="ltr">+20 100 000 0000</div><div style="font-size:.82rem;color:var(--text-muted);">${isAr ? "من 9ص لـ 6م" : "9 AM – 6 PM"}</div></div><span class="go" aria-hidden="true">${ico("arrowL")}</span></a></li>
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
function renderBlog() {
  const isAr = state.lang === "ar";
  const articles = isAr
    ? [
        {
          tag: "تربية",
          title: "كيف تتعامل مع طفل قلق الامتحانات؟",
          excerpt:
            "القلق الدراسي مشكلة شائعة، لكن في طرق عملية بسيطة تساعدك تسند طفلك قبل وبعد الامتحانات.",
          time: "6 دقائق",
        },
        {
          tag: "سلامة",
          title: "5 علامات تدل على تعرض طفلك للتنمر",
          excerpt:
            "التنمر بيظهر في علامات سلوكية ونفسية دقيقة. لو عرفت تلاحظها مبكر، تقدر تتصرف بسرعة.",
          time: "8 دقائق",
        },
        {
          tag: "دعم",
          title: "دور المدرس في دعم الطالب المكتئب",
          excerpt:
            "كيف تفرق بين الحزن الطبيعي والاكتئاب؟ وإمتى تحوّل الطالب لمتخصص؟",
          time: "7 دقائق",
        },
        {
          tag: "تركيز",
          title: "فرط الحركة وتشتت الانتباه: دليل عملي",
          excerpt:
            "دليل مختصر لأشهر العلامات وأفضل استراتيجيات التعامل داخل الفصل والبيت.",
          time: "10 دقائق",
        },
        {
          tag: "تواصل",
          title: "كيف تبني علاقة صحية مع طالبك؟",
          excerpt:
            "العلاقة اللي بتبنيها مع طالبك هي الأساس. أعرف إزاي تخلق بيئة يتكلم فيها معاك بحرية.",
          time: "5 دقائق",
        },
        {
          tag: "أسرة",
          title: "التربية الإيجابية في البيت: من أين تبدأ؟",
          excerpt:
            "خطوات عملية بسيطة تقدر تطبقها من النهاردة قبل بكرة، بدون تعقيد.",
          time: "9 دقائق",
        },
      ]
    : [
        {
          tag: "Parenting",
          title: "How to help a child with exam anxiety?",
          excerpt:
            "Exam anxiety is common, but there are simple practical ways to support your child.",
          time: "6 min",
        },
        {
          tag: "Safety",
          title: "5 signs your child may be bullied",
          excerpt:
            "Bullying shows in subtle behavioral and emotional signs. Early notice helps.",
          time: "8 min",
        },
        {
          tag: "Support",
          title: "The teacher's role with a depressed student",
          excerpt:
            "How to distinguish normal sadness from depression, and when to refer.",
          time: "7 min",
        },
        {
          tag: "Focus",
          title: "ADHD: a practical guide",
          excerpt: "Key signs and best strategies for class and home.",
          time: "10 min",
        },
        {
          tag: "Connection",
          title: "Building a healthy relationship with your student",
          excerpt:
            "The relationship you build is the foundation for open communication.",
          time: "5 min",
        },
        {
          tag: "Family",
          title: "Positive parenting at home: where to start?",
          excerpt: "Simple practical steps you can apply starting today.",
          time: "9 min",
        },
      ];
  return `
<section class="page-head"><div class="container">
  <div class="eyebrow">${isAr ? "المدونة" : "Blog"}</div>
  <h1 class="h1">${isAr ? "مقالات إرشادية موثوقة" : "Trusted guidance articles"}</h1>
  <p>${isAr ? "محتوى عربي مبسط عن الصحة النفسية للطلاب، التربية، والسلوك." : "Simple content about student mental health, parenting and behavior."}</p>
</div></section>
<section class="section"><div class="container"><div class="blog-grid">
${articles
  .map(
    (a) => `
  <a href="#" class="article-card reveal" onclick="event.preventDefault();toast('${isAr ? "صفحة المقال قيد التطوير" : "Article page coming soon"}','info')">
    <div class="article-thumb">${ico("book")}</div>
    <div class="article-body">
      <div class="article-meta"><span class="tag">${a.tag}</span><span>${a.time}</span></div>
      <h3>${a.title}</h3>
      <p>${a.excerpt}</p>
      <span class="more">${isAr ? "اقرأ المزيد" : "Read more"} ${ico("arrowL")}</span>
    </div>
  </a>`,
  )
  .join("")}
</div></div></section>`;
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
        { t: isAr ? "تقارير ذكية بالـ AI" : "AI smart reports", ok: false },
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
        { t: isAr ? "تقارير ذكية بالـ AI" : "AI smart reports", ok: true },
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
  else
    toast(
      state.lang === "ar"
        ? "هيتم تحويلك لصفحة الدفع قريبًا"
        : "Redirecting to payment soon",
      "info",
    );
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
      <li><a class="contact-item" href="mailto:hello@anees.eg" aria-label="${isAr ? "أرسل بريدًا إلكترونيًا" : "Send an email"}"><div class="ic">${ico("mail")}</div><div><div class="cv" dir="ltr">hello@anees.eg</div><div style="font-size:.82rem;color:var(--text-muted);">${isAr ? "للرد خلال 24 ساعة" : "Reply within 24h"}</div></div><span class="go" aria-hidden="true">${ico("arrowL")}</span></a></li>
      <li><a class="contact-item" href="tel:+201000000000" aria-label="${isAr ? "اتصل بنا" : "Call us"}"><div class="ic">${ico("phone")}</div><div><div class="cv" dir="ltr">+20 100 000 0000</div><div style="font-size:.82rem;color:var(--text-muted);">${isAr ? "من 9ص لـ 6م" : "9 AM – 6 PM"}</div></div><span class="go" aria-hidden="true">${ico("arrowL")}</span></a></li>
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
  const isAr = state.lang === "ar";
  const box = $("#authModalBody");
  const isSignup = mode === "signup";
  box.classList.remove("lg", "md");
  if (isSignup) box.classList.add("md");

  box.innerHTML = `
    <div class="modal-body">
      <button type="button" class="modal-close" onclick="closeAuth()">${ico("x")}</button>
      <div class="modal-step"><span class="dot"></span> ${isSignup ? (isAr ? "حساب جديد" : "New account") : isAr ? "مرحبًا بعودتك" : "Welcome back"}</div>
      <h2 style="font-size:1.4rem;margin-bottom:6px;">${isSignup ? (isAr ? "أنشئ حسابك كـ مدرس" : "Create your teacher account") : isAr ? "تسجيل الدخول" : "Login"}</h2>
      <p style="color:var(--text-muted);font-size:.9rem;margin-bottom:20px;">${isSignup ? (isAr ? "دقيقة واحدة وتكون جاهز تبدأ." : "One minute and you're ready.") : isAr ? "سجل دخولك عشان تدخل لوحة التحكم." : "Login to access your dashboard."}</p>
      <form onsubmit="handleAuth(event, '${mode}')" novalidate>
        ${
          isSignup
            ? `
          <div class="form-group" id="ag-name">
            <label for="aName">${isAr ? "الاسم بالكامل" : "Full name"}</label>
            <input id="aName" type="text" placeholder="${isAr ? "محمد أحمد" : "Mohamed Ahmed"}" autocomplete="name" />
            <div class="form-error">${ico("alert")} ${isAr ? "من فضلك اكتب اسمك (٣ أحرف على الأقل)" : "Name required (min 3 chars)"}</div>
          </div>
          <div class="form-group" id="ag-exp">
            <label for="aExp">${isAr ? "سنوات الخبرة" : "Years of experience"}</label>
            <input id="aExp" type="number" min="0" max="50" placeholder="5" />
          </div>
          <div class="form-group" id="ag-spec">
            <label for="aSpec">${isAr ? "التخصص" : "Specialty"}</label>
            <input id="aSpec" type="text" placeholder="${isAr ? "رياضيات / لغة عربية / ..." : "Math / Arabic / ..."}" />
          </div>
          <div class="form-group" id="ag-school">
            <label for="aSchool">${isAr ? "المدرسة (اختياري)" : "School (optional)"}</label>
            <input id="aSchool" type="text" placeholder="${isAr ? "اسم المدرسة" : "School name"}" />
          </div>
          <div class="form-group">
            <label for="aAvatar">${isAr ? "صورة شخصية (اختياري)" : "Profile photo (optional)"}</label>
            <input id="aAvatar" type="file" accept="image/*" onchange="previewAvatar(event)" />
            <div id="avatarPreview" style="margin-top:10px;display:none;">
              <img id="avatarImg" style="width:64px;height:64px;border-radius:50%;object-fit:cover;border:2px solid var(--border);" />
            </div>
          </div>`
            : ""
        }
        <div class="form-group" id="ag-email">
          <label for="aEmail">${isAr ? "البريد الإلكتروني" : "Email"}</label>
          <input id="aEmail" type="email" placeholder="you@example.com" autocomplete="email" />
          <div class="form-error">${ico("alert")} ${isAr ? "من فضلك اكتب بريد إلكتروني صحيح" : "Valid email required"}</div>
        </div>
        <div class="form-group" id="ag-pass">
          <label for="aPass">${isAr ? "كلمة السر" : "Password"}</label>
          <input id="aPass" type="password" placeholder="${isAr ? "٦ أحرف على الأقل" : "Min 6 characters"}" autocomplete="${isSignup ? "new-password" : "current-password"}" />
          <div class="form-error">${ico("alert")} ${isAr ? "كلمة السر لازم ٦ أحرف على الأقل" : "Password min 6 characters"}</div>
        </div>
        <button class="btn btn-primary btn-lg btn-block" type="submit">${isSignup ? (isAr ? "إنشاء الحساب" : "Create account") : isAr ? "دخول" : "Login"}</button>
        <div style="text-align:center;margin-top:14px;font-size:.86rem;color:var(--text-muted);">
          ${isSignup ? (isAr ? "عندك حساب؟" : "Already have an account?") : isAr ? "معندكش حساب؟" : "Don't have an account?"}
          <a href="#" onclick="event.preventDefault();openAuth('${isSignup ? "login" : "signup"}')" style="color:var(--primary);font-weight:600;">
            ${isSignup ? (isAr ? "سجّل دخول" : "Login") : isAr ? "أنشئ حساب" : "Sign up"}
          </a>
        </div>
      </form>
    </div>`;
  $("#authModal").classList.add("open");
  setTimeout(() => box.querySelector("input")?.focus(), 80);
}

let pendingAvatarData = null;
function previewAvatar(e) {
  const file = e.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (ev) => {
    pendingAvatarData = ev.target.result;
    $("#avatarPreview").style.display = "block";
    $("#avatarImg").src = pendingAvatarData;
  };
  reader.readAsDataURL(file);
}

function closeAuth() {
  const m = $("#authModal");
  if (m) m.classList.remove("open");
  pendingAvatarData = null;
}
const authOverlay = $("#authModal");
if (authOverlay) {
  authOverlay.addEventListener("click", (e) => {
    if (e.target.id === "authModal") closeAuth();
  });
}

function markField(groupId, invalid) {
  const g = $("#" + groupId);
  if (!g) return;
  g.classList.toggle("invalid", invalid);
}

function handleAuth(e, mode) {
  e.preventDefault();
  const isAr = state.lang === "ar";
  const email = $("#aEmail").value.trim().toLowerCase();
  const pass = $("#aPass").value;
  let ok = true;

  if (mode === "signup") {
    const name = $("#aName").value.trim();
    if (name.length < 3) {
      markField("ag-name", true);
      ok = false;
    } else markField("ag-name", false);
  }
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
      isAr ? "في حقول محتاجة تصحيح" : "Please fix the highlighted fields",
      "error",
    );
    return;
  }

  if (mode === "signup") {
    const name = $("#aName").value.trim();
    if (state.teachers.find((x) => x.email === email)) {
      markField("ag-email", true);
      return toast(
        isAr ? "الإيميل ده مسجل بالفعل" : "Email already registered",
        "error",
      );
    }
    const user = {
      id: "t_" + Date.now(),
      name,
      email,
      pass,
      avatar: pendingAvatarData || null,
      experienceYears: parseInt($("#aExp")?.value || "0", 10) || 0,
      specialty: $("#aSpec")?.value.trim() || "",
      school: $("#aSchool")?.value.trim() || "",
      plan: "free",
      createdAt: Date.now(),
    };
    state.teachers.push(user);
    LS.set("anees.teachers", state.teachers);
    state.user = user;
    LS.set("anees.user", user);
    closeAuth();
    renderNavbar();
    toast(
      isAr
        ? `أهلًا ${name.split(" ")[0]}، تم إنشاء حسابك بنجاح`
        : `Welcome ${name.split(" ")[0]}, account created`,
      "success",
    );
    setTimeout(() => (location.hash = "#/dashboard"), 600);
  } else {
    const user = state.teachers.find(
      (x) => x.email === email && x.pass === pass,
    );
    if (!user) {
      markField("ag-email", true);
      markField("ag-pass", true);
      return toast(
        isAr ? "الإيميل أو كلمة السر غير صحيحة" : "Incorrect email or password",
        "error",
      );
    }
    state.user = user;
    LS.set("anees.user", user);
    closeAuth();
    renderNavbar();
    toast(
      isAr
        ? `أهلًا ${user.name.split(" ")[0]}`
        : `Welcome ${user.name.split(" ")[0]}`,
      "success",
    );
  }
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
    onConfirm: () => {
      state.user = null;
      LS.set("anees.user", null);
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
  el.innerHTML = `
    ${langBtn}${themeBtn}
    <div class="user-menu" id="dashUserMenu">
      <button class="user-trigger" id="dashUserTrigger" aria-label="User menu">
        <span class="user-avatar">${avatarContent}</span>
        <span class="name">${esc(state.user.name.split(" ")[0])}</span>
        <span class="chev">${ico("chev")}</span>
      </button>
      <div class="user-dropdown">
        <a href="#/" data-link>${ico("arrowL")}<span>${isAr ? "الصفحة الرئيسية" : "Home"}</span></a>
        <button type="button" onclick="state.dashView='profile';closeDashDrawer();renderDashboard()">${ico("user")}<span>${isAr ? "الملف الشخصي" : "Profile"}</span></button>
        <div class="divider"></div>
        <button type="button" class="danger" onclick="logout()">${ico("logout")}<span>${isAr ? "تسجيل الخروج" : "Logout"}</span></button>
      </div>
    </div>`;
  const trigger = $("#dashUserTrigger");
  if (trigger) {
    trigger.onclick = (e) => {
      e.stopPropagation();
      $("#dashUserMenu").classList.toggle("open");
    };
  }
  $$("#dashUserMenu [data-link]").forEach(
    (a) =>
      (a.onclick = (e) => {
        e.preventDefault();
        location.hash = a.getAttribute("href");
      }),
  );
}

document.addEventListener("click", (e) => {
  const m = $("#dashUserMenu");
  if (m && !m.contains(e.target)) m.classList.remove("open");
});

function renderDashboard() {
  if (!state.user) return;
  renderDashSidebar();
  renderDashTopActions();
  // On wide screens keep sidebar usable; user toggles via icon
  const main = $("#dashMain");
  if (state.dashView === "reports") {
    main.innerHTML = renderReportsView();
    return;
  }
  if (state.dashView === "profile") {
    main.innerHTML = renderProfileView();
    return;
  }
  if (state.currentClass) {
    main.innerHTML = renderClassDetailView();
    return;
  }
  main.innerHTML = renderClassesView();
}

function renderDashSidebar() {
  const isAr = state.lang === "ar";
  const side = $("#dashSide");
  const isOpen = side.classList.contains("open");
  side.innerHTML = `
    <div class="side-label">${isAr ? "القائمة" : "Menu"}</div>
    <nav class="side-nav">
      <button type="button" class="side-link ${state.dashView === "classes" && !state.currentClass ? "active" : ""}" data-view="classes">${ico("grid")}<span>${isAr ? "الفصول" : "Classes"}</span></button>
      <button type="button" class="side-link ${state.dashView === "reports" ? "active" : ""}" data-view="reports">${ico("chart")}<span>${isAr ? "التقارير" : "Reports"}</span></button>
      <button type="button" class="side-link ${state.dashView === "profile" ? "active" : ""}" data-view="profile">${ico("user")}<span>${isAr ? "الملف الشخصي" : "Profile"}</span></button>
    </nav>
    <div style="flex:1;min-height:12px;"></div>
    <div class="side-label">${isAr ? "الحساب" : "Account"}</div>
    <a href="#/" data-link class="side-link">${ico("arrowL")}<span>${isAr ? "الصفحة الرئيسية" : "Home"}</span></a>
    <button type="button" class="side-link danger" onclick="logout()">${ico("logout")}<span>${isAr ? "تسجيل الخروج" : "Logout"}</span></button>`;
  if (isOpen) side.classList.add("open");
  side.querySelectorAll("[data-view]").forEach((b) => {
    b.onclick = () => {
      state.dashView = b.dataset.view;
      state.currentClass = null;
      closeDashDrawer();
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
  if (!side) return;
  const willOpen = !side.classList.contains("open");
  side.classList.toggle("open", willOpen);
  if (overlay) overlay.classList.toggle("open", willOpen);
  // prevent body scroll when drawer open on small screens
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
                    <div class="class-card" onclick="openClass('${c.id}')">
                      <div class="cc-head">
                        <div class="cc-icon">${ico("folder")}</div>
                        <button class="icon-btn" style="width:32px;height:32px;" onclick="event.stopPropagation();deleteClass('${c.id}')" aria-label="delete">${ico("trash")}</button>
                      </div>
                      <div>
                        <h3>${esc(c.name)}</h3>
                        <div class="cc-meta">${esc(c.schoolName || "")} · ${fmtDateShort(c.createdAt)}</div>
                        ${stageLabel ? `<div class="cc-stage">${stageLabel}</div>` : ""}
                      </div>
                      <div class="cc-stats"><div><b>${cnt}</b><span>${isAr ? "طالب" : "students"}</span></div></div>
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
  const clsStudents = teacherData().students.filter(
    (s) => s.classId === cls.id,
  );
  const { reports } = teacherData();
  const stageLabel = cls.ageStage
    ? isAr
      ? AGE_STAGES[cls.ageStage]?.ar
      : AGE_STAGES[cls.ageStage]?.en
    : "";

  return `
    <div class="detail-top">
      <button class="btn btn-ghost btn-sm" onclick="backToClasses()">${ico("arrowL")} ${isAr ? "رجوع للفصول" : "Back to classes"}</button>
      <button class="icon-btn icon-danger" onclick="deleteClass('${cls.id}')" aria-label="${isAr ? "حذف الفصل" : "Delete class"}" title="${isAr ? "حذف الفصل" : "Delete class"}">${ico("trash")}</button>
    </div>
    <div class="dash-pagehead">
      <div>
        <h1>${esc(cls.name)}</h1>
        <p>${clsStudents.length} ${isAr ? "طالب" : "students"} ${stageLabel ? "· " + stageLabel : ""} ${cls.schoolName ? "· " + esc(cls.schoolName) : ""}</p>
      </div>
      ${clsStudents.length ? `<div class="actions"><button class="btn btn-primary" onclick="openStudentForm('${cls.id}')">${ico("plus")} ${isAr ? "إضافة طالب" : "Add student"}</button></div>` : ""}
    </div>
    ${
      clsStudents.length === 0
        ? `<div class="empty-state">
            <div class="ic">${ico("users")}</div>
            <h3>${isAr ? "مفيش طلاب في الفصل ده لسه" : "No students in this class yet"}</h3>
            <p>${isAr ? "ابدأ بإضافة أول طالب. هتحتاج اسمه، اسم ولي أمره، رقمه، وإيميله عشان نرسل التقارير لولي الأمر تلقائيًا." : "Start by adding the first student. You'll need their name, parent name, phone and email for automatic reports."}</p>
            <button class="btn btn-primary btn-lg" onclick="openStudentForm('${cls.id}')">${ico("plus")} ${isAr ? "إضافة أول طالب" : "Add first student"}</button>
          </div>`
        : `<div class="students-grid">
            ${clsStudents
              .map((s) => {
                const sr = reports.filter((r) => r.studentId === s.id);
                const last = sr[sr.length - 1];
                const score = last ? last.totalScore : null;
                const kind =
                  score === null
                    ? "mid"
                    : score >= 70
                      ? "good"
                      : score >= 45
                        ? "mid"
                        : "low";
                return `
                  <div class="student-card">
                    <div class="student-head">
                      <div class="student-avatar">${esc(initials(s.name))}</div>
                      <div class="info">
                        <h4>${esc(s.name)}</h4>
                        <div class="sub">${esc(s.parentName)} — ${sr.length} ${isAr ? "تقييم" : "reports"}</div>
                      </div>
                    </div>
                    <div class="student-data">
                      <div><div class="k">${isAr ? "ولي الأمر" : "Parent"}</div><div class="v">${esc(s.parentName)}</div></div>
                      <div><div class="k">${isAr ? "الهاتف" : "Phone"}</div><div class="v">${esc(s.parentPhone)}</div></div>
                      <div><div class="k">${isAr ? "آخر تقييم" : "Last score"}</div><div class="v"><span class="score-pill ${kind}">${score !== null ? score + "%" : isAr ? "لا يوجد" : "None"}</span></div></div>
                      <div><div class="k">${isAr ? "عدد التقارير" : "Reports"}</div><div class="v">${sr.length}</div></div>
                    </div>
                    <div class="student-actions">
                      <button class="btn btn-soft btn-sm" onclick="openStudentDetail('${s.id}', 'daily')">${ico("edit")} ${isAr ? "تقييم اليوم" : "Assess today"}</button>
                      <button class="btn btn-ghost btn-sm" onclick="openStudentDetail('${s.id}', 'weekly')">${ico("chart")} ${isAr ? "التقرير الأسبوعي" : "Weekly report"}</button>
                    </div>
                  </div>`;
              })
              .join("")}
          </div>`
    }`;
}

function renderReportsView() {
  const isAr = state.lang === "ar";
  const { reports, students } = teacherData();
  if (reports.length === 0)
    return `
      <div class="dash-pagehead"><div><h1>${isAr ? "التقارير" : "Reports"}</h1><p>${isAr ? "كل التقارير اللي سجلتها لطلابك." : "All reports you recorded for your students."}</p></div></div>
      <div class="empty-state">
        <div class="ic">${ico("chart")}</div>
        <h3>${isAr ? "لسه مفيش تقارير" : "No reports yet"}</h3>
        <p>${isAr ? "التقارير بتتسجل لما تدخل على أي طالب وتسجل تقييم سلوكه." : "Reports are created when you assess a student's behavior."}</p>
        <button class="btn btn-primary" onclick="state.dashView='classes';state.currentClass=null;renderDashboard();">${ico("grid")} ${isAr ? "روح للفصول" : "Go to classes"}</button>
      </div>`;
  return `
    <div class="dash-pagehead"><div><h1>${isAr ? "التقارير" : "Reports"}</h1><p>${reports.length} ${isAr ? "تقرير مسجل" : "reports recorded"}</p></div></div>
    <div>
      ${reports
        .slice()
        .reverse()
        .map((r) => {
          const s = students.find((x) => x.id === r.studentId);
          const kind =
            r.totalScore >= 70 ? "good" : r.totalScore >= 45 ? "mid" : "low";
          const day =
            r.day || (isAr ? AR_DAYS : EN_DAYS)[new Date(r.date).getDay()];
          return `
            <div class="report-item">
              <div class="ri-head">
                <div>
                  <b>${esc(s?.name || (isAr ? "طالب محذوف" : "Deleted student"))}</b>
                  <div class="ri-date">${ico("calendar")} ${esc(day)} — ${fmtDate(r.date)}</div>
                </div>
                <span class="score-pill ${kind}">${r.totalScore}% · ${esc(r.status || "")}</span>
              </div>
              ${r.notes ? `<div class="ri-notes">${esc(r.notes)}</div>` : ""}
            </div>`;
        })
        .join("")}
    </div>`;
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
          <div class="info-cell"><div class="k">${isAr ? "الإيميل" : "Email"}</div><div class="v">${esc(u.email)}</div></div>
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
            <input id="profName" value="${esc(u.name)}" />
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
            <input type="file" accept="image/*" onchange="previewProfileAvatar(event)" />
          </div>
          <button class="btn btn-primary btn-lg" type="submit">${isAr ? "حفظ التغييرات" : "Save changes"}</button>
        </form>
        ${
          u.plan !== "pro"
            ? `<div style="margin-top:28px;padding-top:22px;border-top:1px solid var(--border);">
                <p style="color:var(--text-muted);font-size:.92rem;margin-bottom:14px;">${isAr ? "عايز فصول غير محدودة وتقارير AI؟" : "Want unlimited classes and AI reports?"}</p>
                <button class="btn btn-primary" onclick="location.hash='#/pricing'">${isAr ? "ترقية للباقة Pro" : "Upgrade to Pro"}</button>
              </div>`
            : ""
        }
      </div>
    </div>`;
}

let pendingProfileAvatar = null;
function previewProfileAvatar(e) {
  const file = e.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (ev) => {
    pendingProfileAvatar = ev.target.result;
  };
  reader.readAsDataURL(file);
}

function saveProfile() {
  const isAr = state.lang === "ar";
  state.user.name = $("#profName").value.trim() || state.user.name;
  state.user.experienceYears = parseInt($("#profExp").value, 10) || 0;
  state.user.specialty = $("#profSpec").value.trim();
  state.user.school = $("#profSchool").value.trim();
  if (pendingProfileAvatar) {
    state.user.avatar = pendingProfileAvatar;
    pendingProfileAvatar = null;
  }
  const idx = state.teachers.findIndex((t) => t.id === state.user.id);
  if (idx >= 0) state.teachers[idx] = state.user;
  LS.set("anees.user", state.user);
  LS.set("anees.teachers", state.teachers);
  toast(isAr ? "تم حفظ التغييرات" : "Changes saved", "success");
  renderDashboard();
  renderNavbar();
}

function backToClasses() {
  state.currentClass = null;
  renderDashboard();
}
function openClass(id) {
  state.currentClass = id;
  state.dashView = "classes";
  renderDashboard();
  closeDashDrawer();
}

/* ============================================================
   ADD CLASS (اسم + مدرسة + مرحلة عمرية)
   ============================================================ */
function openClassForm() {
  const isAr = state.lang === "ar";
  const box = $("#genericModalBody");
  box.classList.remove("lg");
  box.classList.add("md");
  box.innerHTML = `
    <div class="modal-body">
      <button type="button" class="modal-close" onclick="closeGenericModal()">${ico("x")}</button>
      <div class="modal-step"><span class="dot"></span> ${isAr ? "الخطوة ١" : "Step 1"}</div>
      <h2 style="font-size:1.3rem;margin-bottom:6px;">${isAr ? "إضافة فصل جديد" : "Add new class"}</h2>
      <p style="color:var(--text-muted);font-size:.88rem;margin-bottom:20px;">${isAr ? 'سمّي الفصل باسم يسهل عليك تمييزه لاحقًا، مثل "3/1 رياضيات".' : 'Name the class clearly, e.g. "3/1 Math".'}</p>
      <form onsubmit="event.preventDefault();saveClass();" novalidate>
        <div class="form-group" id="fg-class">
          <label for="newClassName">${isAr ? "اسم الفصل" : "Class name"}</label>
          <input id="newClassName" placeholder="${isAr ? "مثال: 3/1 رياضيات" : "e.g. 3/1 Math"}" autofocus />
          <div class="form-error">${ico("alert")} ${isAr ? "من فضلك اكتب اسم الفصل" : "Class name required"}</div>
        </div>
        <div class="form-group" id="fg-school">
          <label for="newClassSchool">${isAr ? "اسم المدرسة" : "School name"}</label>
          <input id="newClassSchool" placeholder="${isAr ? "مدرسة النور" : "Al-Noor School"}" />
          <div class="form-error">${ico("alert")} ${isAr ? "اكتب اسم المدرسة" : "School name required"}</div>
        </div>
        <div class="form-group" id="fg-stage">
          <label for="newClassStage">${isAr ? "المرحلة العمرية" : "Age stage"}</label>
          <select id="newClassStage">
            <option value="">${isAr ? "اختر المرحلة" : "Select stage"}</option>
            ${Object.entries(AGE_STAGES)
              .map(
                ([k, v]) =>
                  `<option value="${k}">${isAr ? v.ar : v.en}</option>`,
              )
              .join("")}
          </select>
          <div class="form-error">${ico("alert")} ${isAr ? "اختر المرحلة العمرية" : "Please select age stage"}</div>
        </div>
        <button class="btn btn-primary btn-lg btn-block" type="submit">${isAr ? "حفظ الفصل" : "Save class"}</button>
      </form>
    </div>`;
  $("#genericModal").classList.add("open");
}

function closeGenericModal() {
  $("#genericModal").classList.remove("open");
  $("#genericModalBody").classList.remove("lg", "md");
}
$("#genericModal").addEventListener("click", (e) => {
  if (e.target.id === "genericModal") closeGenericModal();
});

function saveClass() {
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
  if (!ok) return;

  state.classes.push({
    id: "c_" + Date.now(),
    teacherId: state.user.id,
    name,
    schoolName: school,
    ageStage: stage,
    createdAt: Date.now(),
  });
  LS.set("anees.classes", state.classes);
  closeGenericModal();
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
    onConfirm: () => {
      state.classes = state.classes.filter((c) => c.id !== id);
      const ids = state.students
        .filter((s) => s.classId === id)
        .map((s) => s.id);
      state.students = state.students.filter((s) => s.classId !== id);
      state.reports = state.reports.filter((r) => !ids.includes(r.studentId));
      LS.set("anees.classes", state.classes);
      LS.set("anees.students", state.students);
      LS.set("anees.reports", state.reports);
      if (state.currentClass === id) state.currentClass = null;
      toast(isAr ? "تم حذف الفصل" : "Class deleted", "success");
      renderDashboard();
    },
  });
}

/* ============================================================
   ADD STUDENT
   ============================================================ */
function openStudentForm(classId) {
  const isAr = state.lang === "ar";
  const box = $("#genericModalBody");
  box.classList.remove("lg");
  box.classList.add("md");
  box.innerHTML = `
    <div class="modal-body">
      <button type="button" class="modal-close" onclick="closeGenericModal()">${ico("x")}</button>
      <div class="modal-step"><span class="dot"></span> ${isAr ? "إضافة طالب" : "Add student"}</div>
      <h2 style="font-size:1.3rem;margin-bottom:6px;">${isAr ? "بيانات الطالب وولي الأمر" : "Student & parent details"}</h2>
      <p style="color:var(--text-muted);font-size:.88rem;margin-bottom:20px;">${isAr ? "سجّل بيانات الطالب وولي أمره لمتابعته وإرسال التقارير." : "Register student and parent data for tracking and reports."}</p>
      <form onsubmit="event.preventDefault();saveStudent('${classId}');" novalidate>
        <div class="form-group" id="fg-sname">
          <label for="sfName">${isAr ? "اسم الطالب" : "Student name"}</label>
          <input id="sfName" placeholder="${isAr ? "محمد أحمد" : "Mohamed Ahmed"}" autofocus />
          <div class="form-error">${ico("alert")} ${isAr ? "من فضلك اكتب اسم الطالب" : "Student name required"}</div>
        </div>
        <div class="form-group">
          <label for="sfEmail">${isAr ? "إيميل الطالب (اختياري)" : "Student email (optional)"}</label>
          <input id="sfEmail" type="email" placeholder="student@example.com" />
        </div>
        <div class="date-row">
          <div class="form-group" id="fg-parent">
            <label for="sfParent">${isAr ? "اسم ولي الأمر" : "Parent name"}</label>
            <input id="sfParent" placeholder="${isAr ? "أحمد محمد" : "Ahmed Mohamed"}" />
            <div class="form-error">${ico("alert")} ${isAr ? "اكتب اسم ولي الأمر" : "Parent name required"}</div>
          </div>
          <div class="form-group" id="fg-phone">
            <label for="sfPhone">${isAr ? "رقم ولي الأمر" : "Parent phone"}</label>
            <input id="sfPhone" placeholder="01xxxxxxxxx" inputmode="tel" />
            <div class="form-error">${ico("alert")} ${isAr ? "رقم غير صحيح" : "Invalid phone"}</div>
          </div>
        </div>
        <div class="form-group" id="fg-pemail">
          <label for="sfPEmail">${isAr ? "إيميل ولي الأمر" : "Parent email"}</label>
          <input id="sfPEmail" type="email" placeholder="parent@example.com" />
          <div class="form-error">${ico("alert")} ${isAr ? "إيميل غير صحيح" : "Invalid email"}</div>
        </div>
        <button class="btn btn-primary btn-lg btn-block" type="submit">${isAr ? "حفظ الطالب" : "Save student"}</button>
      </form>
    </div>`;
  $("#genericModal").classList.add("open");
}

function saveStudent(classId) {
  const isAr = state.lang === "ar";
  const name = $("#sfName").value.trim();
  const email = $("#sfEmail").value.trim();
  const parent = $("#sfParent").value.trim();
  const phone = $("#sfPhone").value.trim();
  const pemail = $("#sfPEmail").value.trim();
  let ok = true;
  markField("fg-sname", name.length < 2);
  if (name.length < 2) ok = false;
  markField("fg-parent", parent.length < 2);
  if (parent.length < 2) ok = false;
  const phoneOk = /^[0-9+\s\-()]{8,}$/.test(phone);
  markField("fg-phone", !phoneOk);
  if (!phoneOk) ok = false;
  const pemailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(pemail);
  markField("fg-pemail", !pemailOk);
  if (!pemailOk) ok = false;
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    ok = false;
    toast(isAr ? "إيميل الطالب غير صحيح" : "Invalid student email", "error");
  }
  if (!ok) {
    toast(isAr ? "في حقول محتاجة تصحيح" : "Please fix the fields", "error");
    return;
  }
  state.students.push({
    id: "s_" + Date.now(),
    teacherId: state.user.id,
    classId,
    name,
    email,
    parentName: parent,
    parentPhone: phone,
    parentEmail: pemail,
    createdAt: Date.now(),
  });
  LS.set("anees.students", state.students);
  closeGenericModal();
  toast(
    isAr ? "تم إضافة الطالب بنجاح" : "Student added successfully",
    "success",
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
    onConfirm: () => {
      state.students = state.students.filter((s) => s.id !== id);
      state.reports = state.reports.filter((r) => r.studentId !== id);
      LS.set("anees.students", state.students);
      LS.set("anees.reports", state.reports);
      toast(isAr ? "تم حذف الطالب" : "Student deleted", "success");
      closeGenericModal();
      renderDashboard();
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

const BEHAVIOR_QUESTIONS = [
  {
    key: "q1",
    ar: "المشاركة والتفاعل في الفصل",
    en: "Participation & engagement",
    scale: 5,
  },
  {
    key: "q2",
    ar: "التعاون مع الزملاء",
    en: "Cooperation with peers",
    scale: 5,
  },
  {
    key: "q3",
    ar: "الالتزام بالتعليمات",
    en: "Following instructions",
    scale: 5,
  },
  { key: "q4", ar: "التركيز والانتباه", en: "Focus & attention", scale: 5 },
  { key: "q5", ar: "الحالة المزاجية العامة", en: "Overall mood", scale: 7 },
  {
    key: "q6",
    ar: "مستوى القلق الظاهر",
    en: "Visible anxiety level",
    scale: 3,
    reverse: true,
  },
  {
    key: "q7",
    ar: "السلوك العام داخل الفصل",
    en: "Overall classroom behavior",
    scale: 5,
  },
];

function openStudentDetail(id, tab = "daily", weekOffset = 0) {
  const isAr = state.lang === "ar";
  const s = state.students.find((x) => x.id === id);
  if (!s) return;
  const allReports = state.reports.filter((r) => r.studentId === id);
  const box = $("#genericModalBody");
  box.classList.add("lg");
  box.classList.remove("md");

  const today = new Date();
  const defaultDate = today.toISOString().split("T")[0];
  const todayName = (isAr ? AR_DAYS : EN_DAYS)[today.getDay()];
  state.detailTab = tab;

  const thisWeekStart = getWeekStart(new Date());
  const weekStart = new Date(thisWeekStart);
  weekStart.setDate(weekStart.getDate() + weekOffset * 7);
  const weekDays = getReportsForWeek(id, weekStart);
  const validDays = weekDays.filter((d) => d.reports.length > 0);
  const allScores = validDays.flatMap((d) =>
    d.reports.map((r) => r.totalScore),
  );
  const avgScore = allScores.length
    ? (allScores.reduce((a, b) => a + b, 0) / allScores.length).toFixed(0)
    : null;
  const bestScore = allScores.length ? Math.max(...allScores).toFixed(0) : null;
  const isCurrentWeek = weekOffset === 0;
  const todayMidnight = new Date(today);
  todayMidnight.setHours(0, 0, 0, 0);

  box.innerHTML = `
    <div class="modal-body">
      <button type="button" class="modal-close" onclick="closeGenericModal()">${ico("x")}</button>
      <div class="modal-step"><span class="dot"></span> ${isAr ? "بيانات الطالب" : "Student details"}</div>
      <h2 style="font-size:1.3rem;margin-bottom:18px;">${esc(s.name)}</h2>
      <div class="info-grid">
        <div class="info-cell"><div class="k">${isAr ? "الاسم" : "Name"}</div><div class="v">${esc(s.name)}</div></div>
        <div class="info-cell"><div class="k">${isAr ? "ولي الأمر" : "Parent"}</div><div class="v">${esc(s.parentName)}</div></div>
        <div class="info-cell"><div class="k">${isAr ? "هاتف ولي الأمر" : "Parent phone"}</div><div class="v">${esc(s.parentPhone)}</div></div>
        <div class="info-cell"><div class="k">${isAr ? "إيميل ولي الأمر" : "Parent email"}</div><div class="v">${esc(s.parentEmail)}</div></div>
      </div>
      <div class="tabs">
        <button class="${tab === "daily" ? "active" : ""}" onclick="openStudentDetail('${id}', 'daily', ${weekOffset})">${ico("edit")} ${isAr ? "تقييم يومي" : "Daily"}</button>
        <button class="${tab === "weekly" ? "active" : ""}" onclick="openStudentDetail('${id}', 'weekly', ${weekOffset})">${ico("chart")} ${isAr ? "تقرير أسبوعي" : "Weekly"}</button>
      </div>
      ${tab === "daily" ? renderDailyTab(id, s, todayName, defaultDate, allReports) : renderWeeklyTab(id, s, weekStart, weekDays, avgScore, bestScore, validDays.length, isCurrentWeek, todayMidnight, weekOffset)}
    </div>`;
  $("#genericModal").classList.add("open");
}

function renderDailyTab(id, s, todayName, defaultDate, allReports) {
  const isAr = state.lang === "ar";
  const recentReports = allReports.slice().reverse().slice(0, 5);
  const days = isAr ? AR_DAYS : EN_DAYS;
  return `
    <div class="behavior-form">
      <div class="form-title">${ico("edit")} ${isAr ? "تسجيل تقييم سلوك جديد" : "New behavior assessment"}</div>
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
        ${BEHAVIOR_QUESTIONS.map((q) => {
          const label = isAr ? q.ar : q.en;
          const scaleHint =
            q.scale === 3
              ? isAr
                ? "١ = مرتفع · ٣ = منخفض"
                : "1 = High · 3 = Low"
              : q.scale === 7
                ? isAr
                  ? "١ = سيء جدًا · ٧ = ممتاز"
                  : "1 = Very poor · 7 = Excellent"
                : isAr
                  ? "١ = ضعيف · ٥ = ممتاز"
                  : "1 = Weak · 5 = Excellent";
          return `
            <div class="question-block">
              <div class="q-label">
                <span>${label}</span>
                <span class="q-scale">${scaleHint}</span>
              </div>
              <div class="radio-group">
                ${Array.from({ length: q.scale }, (_, i) => i + 1)
                  .map(
                    (n) => `
                  <label>
                    <input type="radio" name="${q.key}" value="${n}" ${n === Math.ceil(q.scale / 2) ? "checked" : ""} />
                    <span>${n}</span>
                  </label>`,
                  )
                  .join("")}
              </div>
            </div>`;
        }).join("")}
        <div class="form-group" style="margin-top:16px;">
          <label for="behaviorNotes">${isAr ? "ملاحظات إضافية (اختياري)" : "Additional notes (optional)"}</label>
          <textarea id="behaviorNotes" placeholder="${isAr ? "أي ملاحظات عن سلوك الطالب في اليوم ده..." : "Any notes about today's behavior..."}"></textarea>
        </div>
        <div style="display:flex;gap:10px;flex-wrap:wrap;">
          <button class="btn btn-primary btn-lg" type="submit" style="flex:1;min-width:180px;">${ico("check")} ${isAr ? "تقييم الطالب" : "Assess student"}</button>
          <button class="btn btn-ghost btn-lg" type="button" onclick="deleteStudent('${id}')" style="color:var(--danger);">${ico("trash")} ${isAr ? "حذف" : "Delete"}</button>
        </div>
      </form>
    </div>
    <h3 style="font-size:1.05rem;margin:26px 0 14px;">${isAr ? `آخر التقييمات اليومية (${allReports.length})` : `Recent daily assessments (${allReports.length})`}</h3>
    ${
      allReports.length === 0
        ? `<p style="color:var(--text-muted);font-size:.9rem;">${isAr ? "لسه مفيش تقارير. أول تقييم هيسجله وهيظهر هنا." : "No reports yet. The first assessment will appear here."}</p>`
        : recentReports
            .map((r) => {
              const kind =
                r.totalScore >= 70
                  ? "good"
                  : r.totalScore >= 45
                    ? "mid"
                    : "low";
              const day =
                r.day || (isAr ? AR_DAYS : EN_DAYS)[new Date(r.date).getDay()];
              return `
                <div class="report-item">
                  <div class="ri-head">
                    <div class="ri-date">${ico("calendar")} ${esc(day)} — ${fmtDate(r.date)}</div>
                    <span class="score-pill ${kind}">${r.totalScore}% · ${esc(r.status || "")}</span>
                  </div>
                  ${r.notes ? `<div class="ri-notes">${esc(r.notes)}</div>` : ""}
                  <button class="btn btn-ghost btn-sm" style="margin-top:10px;" onclick='sendReport("${r.id}")'>${ico("mail")} ${isAr ? "إرسال لولي الأمر" : "Send to parent"}</button>
                </div>`;
            })
            .join("")
    }`;
}

function renderWeeklyTab(
  id,
  s,
  weekStart,
  weekDays,
  avgScore,
  bestScore,
  validCount,
  isCurrentWeek,
  todayMidnight,
  weekOffset,
) {
  const isAr = state.lang === "ar";
  const canGoNext = !isCurrentWeek;
  const shortDays = isAr ? AR_DAYS_SHORT : EN_DAYS_SHORT;
  return `
    <div class="week-nav">
      <button class="icon-btn" onclick="openStudentDetail('${id}', 'weekly', ${weekOffset - 1})">${ico("chevR")}</button>
      <div style="text-align:center;">
        <div class="week-label">${isCurrentWeek ? (isAr ? "الأسبوع الحالي" : "Current week") : weekOffset === -1 ? (isAr ? "الأسبوع السابق" : "Previous week") : isAr ? "أسبوع سابق" : "Earlier week"}</div>
        <div class="week-sub">${formatWeekRange(weekStart)}</div>
      </div>
      <button class="icon-btn" ${canGoNext ? "" : "disabled"} onclick="openStudentDetail('${id}', 'weekly', ${weekOffset + 1})">${ico("chevL")}</button>
    </div>
    <div class="week-summary">
      <div class="summary-cell"><div class="k">${isAr ? "متوسط الأسبوع" : "Week average"}</div><div class="v">${avgScore !== null ? avgScore + "%" : "—"}</div></div>
      <div class="summary-cell"><div class="k">${isAr ? "أعلى تقييم" : "Best score"}</div><div class="v">${bestScore !== null ? bestScore + "%" : "—"}</div></div>
      <div class="summary-cell"><div class="k">${isAr ? "أيام مقيّمة" : "Days assessed"}</div><div class="v">${validCount} / 7</div></div>
    </div>
    <div class="week-grid">
      ${weekDays
        .map((wd) => {
          const isToday = wd.date.getTime() === todayMidnight.getTime();
          const hasReport = wd.reports.length > 0;
          const avg = hasReport
            ? (
                wd.reports.reduce((a, b) => a + b.totalScore, 0) /
                wd.reports.length
              ).toFixed(0)
            : null;
          const kind =
            avg === null ? "" : avg >= 70 ? "good" : avg >= 45 ? "mid" : "low";
          return `
            <div class="day-cell ${hasReport ? "has-report" : "empty"} ${isToday ? "today" : ""}">
              <div class="day-name">${shortDays[wd.date.getDay()]}</div>
              <div class="day-num">${wd.date.getDate()}</div>
              <div class="day-score ${kind}">${hasReport ? avg + "%" : "—"}</div>
            </div>`;
        })
        .join("")}
    </div>
    ${
      validCount === 0
        ? `<div class="weekly-info-note">
            ${ico("info")}
            <div><b>${isAr ? "لسه مفيش تقييمات في الأسبوع ده." : "No assessments this week yet."}</b><br/>${isAr ? "سجّل تقييمات يومية الأول، وبعدها هيتمكن النظام من توليد التقرير الأسبوعي." : "Record daily assessments first, then the weekly report can be generated."}</div>
          </div>
          <div style="display:flex;gap:10px;flex-wrap:wrap;">
            <button class="btn btn-primary btn-lg" style="flex:1;min-width:180px;" disabled>${ico("mail")} ${isAr ? "إرسال التقرير الأسبوعي" : "Send weekly report"}</button>
            <button class="btn btn-ghost btn-lg" onclick="openStudentDetail('${id}', 'daily')">${ico("edit")} ${isAr ? "روح للتقييم اليومي" : "Go to daily"}</button>
          </div>`
        : `
          <div class="ai-result" style="margin-bottom:18px;">
            <div class="ai-head">
              <div class="ic">${ico("sparkle")}</div>
              <div class="t"><b>${isAr ? "ملخص الأسبوع" : "Week summary"}</b><span>${isAr ? `مبني على ${validCount} أيام` : `Based on ${validCount} days`}</span></div>
            </div>
            <div class="ai-score-big">${avgScore}<span>%</span></div>
            <div style="color:var(--text-muted);font-size:.86rem;margin-bottom:12px;">${isAr ? `متوسط أداء ${esc(s.name)} خلال الأسبوع` : `Average performance of ${esc(s.name)} this week`}</div>
            <div class="ai-reco">
              <b>${isAr ? "ملاحظات سريعة:" : "Quick notes:"}</b>
              ${
                parseFloat(avgScore) >= 75
                  ? isAr
                    ? "أسبوع ممتاز! الطالب أظهر استقرارًا واضحًا في السلوك والتفاعل. استمر في الدعم."
                    : "Excellent week! Clear stability in behavior and engagement. Keep supporting."
                  : parseFloat(avgScore) >= 55
                    ? isAr
                      ? "أسبوع جيد بشكل عام، مع فرص لتحسين بعض الجوانب. ركّز على البنود الأقل تقييمًا."
                      : "Generally good week with room for improvement. Focus on lower-scoring items."
                    : parseFloat(avgScore) >= 40
                      ? isAr
                        ? "أسبوع متوسط، في تحديات واضحة محتاجة متابعة. حاول تتكلم مع الطالب وتفهم مصدر التحديات."
                        : "Average week with clear challenges. Talk with the student to understand the sources."
                      : isAr
                        ? "أسبوع صعب، المؤشرات منخفضة بشكل ملحوظ. ننصح بجلسة مع المرشد الطلابي والتواصل مع الأسرة."
                        : "Difficult week with notably low indicators. We recommend a counselor session and family contact."
              }
            </div>
          </div>
          <div style="display:flex;gap:10px;flex-wrap:wrap;">
            <button class="btn btn-primary btn-lg" style="flex:1;min-width:180px;" onclick='sendWeeklyReport("${id}", ${weekStart.getTime()})'>${ico("mail")} ${isAr ? "إرسال التقرير الأسبوعي لولي الأمر" : "Send weekly report to parent"}</button>
          </div>`
    }`;
}

function submitBehavior(studentId) {
  const isAr = state.lang === "ar";
  const scores = {};
  let totalPossible = 0;
  let totalGot = 0;

  BEHAVIOR_QUESTIONS.forEach((q) => {
    const checked = document.querySelector(`input[name="${q.key}"]:checked`);
    let val = checked ? parseInt(checked.value, 10) : Math.ceil(q.scale / 2);
    if (q.reverse) val = q.scale + 1 - val;
    scores[q.key] = val;
    totalPossible += q.scale;
    totalGot += val;
  });

  const notes = $("#behaviorNotes").value.trim();
  const day = $("#bDay").value;
  const dateVal = $("#bDate").value;
  const chosenDate = dateVal
    ? new Date(dateVal + "T12:00:00").getTime()
    : Date.now();
  const totalScore = Math.round((totalGot / totalPossible) * 100);

  let status, statusClass, rec;
  if (totalScore >= 80) {
    status = isAr ? "ممتاز" : "Excellent";
    statusClass = "excellent";
    rec = isAr
      ? "أداء الطالب ممتاز على كل المستويات. استمر في الدعم والتشجيع للحفاظ على المسار."
      : "Excellent performance across all levels. Keep supporting and encouraging.";
  } else if (totalScore >= 65) {
    status = isAr ? "جيد" : "Good";
    statusClass = "good";
    rec = isAr
      ? "أداء الطالب جيد بشكل عام، مع فرص بسيطة للتحسين. شجّعه على المشاركة أكثر."
      : "Generally good performance with minor room for improvement. Encourage more participation.";
  } else if (totalScore >= 45) {
    status = isAr ? "يحتاج متابعة" : "Needs monitoring";
    statusClass = "watch";
    rec = isAr
      ? "الطالب بيظهر سلوك متوسط مع بعض التحديات. يفضل متابعته بشكل أقرب."
      : "Average behavior with some challenges. Closer monitoring is recommended.";
  } else if (totalScore >= 30) {
    status = isAr ? "يحتاج انتباه" : "Needs attention";
    statusClass = "attention";
    rec = isAr
      ? "الطالب بيواجه تحديات واضحة في السلوك والتفاعل. ننصح بجلسة مع المرشد الطلابي."
      : "Clear challenges in behavior and interaction. A counselor session is advised.";
  } else {
    status = isAr ? "يحتاج تدخل" : "Needs intervention";
    statusClass = "critical";
    rec = isAr
      ? "المؤشرات خطيرة وتحتاج تدخل عاجل. يوصى بالتواصل مع الأسرة والمتخصص النفسي."
      : "Critical indicators requiring urgent intervention. Contact family and a mental health specialist.";
  }

  const box = $("#genericModalBody");
  box.innerHTML = `
    <div class="modal-body" style="text-align:center;padding:60px 32px;">
      <div class="spinner"></div>
      <h3 style="font-size:1.1rem;margin-bottom:6px;">${isAr ? "جاري تحليل البيانات" : "Analyzing data"}</h3>
      <p style="color:var(--text-muted);font-size:.9rem;">${isAr ? "الـ AI Agent بيقيّم سلوك الطالب وبيجهّز التقرير..." : "AI Agent is assessing behavior and preparing the report..."}</p>
    </div>`;

  setTimeout(() => {
    const report = {
      id: "r_" + Date.now(),
      studentId,
      teacherId: state.user.id,
      date: chosenDate,
      day,
      scores,
      notes,
      totalScore,
      status,
      recommendation: rec,
    };
    state.reports.push(report);
    LS.set("anees.reports", state.reports);

    if (CONFIG.USE_N8N) {
      sendToN8N(CONFIG.N8N_DAILY_REPORT, {
        type: "daily",
        report,
        student: state.students.find((x) => x.id === studentId),
        teacher: { name: state.user.name, email: state.user.email },
      });
    }

    const s = state.students.find((x) => x.id === studentId);
    box.innerHTML = `
      <div class="modal-body">
        <button type="button" class="modal-close" onclick="closeGenericModal()">${ico("x")}</button>
        <div class="modal-step"><span class="dot"></span> ${isAr ? "التقرير جاهز" : "Report ready"}</div>
        <h2 style="font-size:1.3rem;margin-bottom:18px;">${isAr ? "نتيجة التقييم الذكي" : "Smart assessment result"}</h2>
        <div class="ai-result">
          <div class="ai-head">
            <div class="ic">${ico("sparkle")}</div>
            <div class="t"><b>${isAr ? "تحليل AI Agent" : "AI Agent analysis"}</b><span>${esc(s.name)} — ${esc(day)}، ${fmtDate(chosenDate)}</span></div>
          </div>
          <div class="ai-score-big">${totalScore}<span>%</span></div>
          <div class="ai-status ${statusClass}">${status}</div>
          <div class="ai-reco"><b>${isAr ? "التوصيات:" : "Recommendations:"}</b>${rec}</div>
        </div>
        <div style="display:flex;gap:10px;margin-top:20px;flex-wrap:wrap;">
          <button class="btn btn-ghost" onclick="openStudentDetail('${studentId}','daily')">${isAr ? "إغلاق" : "Close"}</button>
          <button class="btn btn-primary" style="flex:1;" onclick='sendReport("${report.id}")'>${ico("mail")} ${isAr ? "إرسال لولي الأمر" : "Send to parent"}</button>
        </div>
      </div>`;
    toast(
      isAr ? "تم رفع التقرير بنجاح" : "Report saved successfully",
      "success",
    );
  }, 1400);
}

/* ============================================================
   n8n HELPERS + SEND REPORTS
   ============================================================ */
async function sendToN8N(url, payload) {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    return await res.json();
  } catch (err) {
    console.warn("[n8n] webhook failed, using local fallback", err);
    return null;
  }
}

function sendReport(reportId) {
  const isAr = state.lang === "ar";
  const r = state.reports.find((x) => x.id === reportId);
  const s = state.students.find((x) => x.id === r?.studentId);
  if (!r || !s) return;

  const payload = {
    type: "daily",
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
  };

  if (CONFIG.USE_N8N) {
    sendToN8N(CONFIG.N8N_DAILY_REPORT, payload).then(() => {
      toast(
        isAr
          ? `تم إرسال التقرير اليومي إلى ${s.parentEmail}`
          : `Daily report sent to ${s.parentEmail}`,
        "success",
      );
    });
  } else {
    console.log("[n8n webhook - daily report payload]", payload);
    toast(
      isAr
        ? `تم إرسال التقرير اليومي إلى ${s.parentEmail}`
        : `Daily report sent to ${s.parentEmail}`,
      "success",
    );
  }
}

function sendWeeklyReport(studentId, weekStartMs) {
  const isAr = state.lang === "ar";
  const s = state.students.find((x) => x.id === studentId);
  if (!s) return;
  const weekStart = new Date(weekStartMs);
  const days = getReportsForWeek(studentId, weekStart);
  const validDays = days.filter((d) => d.reports.length > 0);
  if (validDays.length === 0)
    return toast(
      isAr ? "مفيش تقييمات في الأسبوع ده" : "No assessments this week",
      "warn",
    );

  const allScores = validDays.flatMap((d) =>
    d.reports.map((r) => r.totalScore),
  );
  const avg = (allScores.reduce((a, b) => a + b, 0) / allScores.length).toFixed(
    0,
  );
  const weeklyData = days.map((d) => ({
    day: (isAr ? AR_DAYS : EN_DAYS)[d.date.getDay()],
    date: d.date.toISOString().split("T")[0],
    avgScore: d.reports.length
      ? (
          d.reports.reduce((a, b) => a + b.totalScore, 0) / d.reports.length
        ).toFixed(0)
      : null,
    notes: d.reports.flatMap((r) => (r.notes ? [r.notes] : [])),
  }));

  const payload = {
    type: "weekly",
    to: s.parentEmail,
    student: s.name,
    parentName: s.parentName,
    weekStart: weekStart.toISOString(),
    avgScore: avg,
    days: weeklyData,
    teacherName: state.user.name,
  };

  if (CONFIG.USE_N8N) {
    sendToN8N(CONFIG.N8N_WEEKLY_REPORT, payload).then(() => {
      toast(
        isAr
          ? `تم إرسال التقرير الأسبوعي (متوسط ${avg}%) إلى ${s.parentEmail}`
          : `Weekly report (avg ${avg}%) sent to ${s.parentEmail}`,
        "success",
      );
    });
  } else {
    console.log("[n8n webhook - weekly report payload]", payload);
    toast(
      isAr
        ? `تم إرسال التقرير الأسبوعي (متوسط ${avg}%) إلى ${s.parentEmail}`
        : `Weekly report (avg ${avg}%) sent to ${s.parentEmail}`,
      "success",
    );
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

  // sessionId بسيط للجلسة الحالية (ممكن تخزنه في localStorage لو حابب)
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
      // ... الكود القديم
    }, 900);
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
navigate(location.hash || "#/");

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

  /* ---------- 1) التخزين: try/catch + عدم حفظ كلمة السر في الجلسة ---------- */
  LS.set = (k, v) => {
    try {
      if (k === "anees.user" && v) {
        const { pass, ...safe } = v;
        v = safe;
      }
      localStorage.setItem(k, JSON.stringify(v));
      return true;
    } catch (e) {
      toast(
        T(
          "تعذر الحفظ: مساحة التخزين ممتلئة أو غير متاحة",
          "Could not save: storage is full or unavailable",
        ),
        "error",
      );
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
      $("#avatarPreview").style.display = "block";
      $("#avatarImg").src = d;
    });
  window.previewProfileAvatar = (e) =>
    shrink(e.target.files?.[0], (d) => {
      pendingProfileAvatar = d;
    });

  const _saveProfile = saveProfile;
  window.saveProfile = () => {
    const t = state.teachers.find((x) => x.id === state.user.id);
    if (t && !state.user.pass) state.user.pass = t.pass; // الجلسة المخزنة بلا كلمة سر
    _saveProfile();
  };

  /* ---------- 2) الشبكة: res.ok + timeout + لا نجاح كاذب ---------- */
  window.sendToN8N = async (url, payload) => {
    if (isPlaceholder(url)) return null;
    if (payload && payload.type === "daily" && payload.report) return null; // إزالة الإرسال التلقائي المزدوج عند الحفظ
    const ctl = new AbortController(),
      t = setTimeout(() => ctl.abort(), 15000);
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: ctl.signal,
      });
      if (!res.ok) throw new Error("HTTP " + res.status);
      const txt = await res.text();
      try {
        return JSON.parse(txt);
      } catch {
        return { ok: true, reply: txt || undefined };
      }
    } catch (e) {
      console.warn("[n8n]", e);
      return null;
    } finally {
      clearTimeout(t);
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
    const res = await sendToN8N(CONFIG.N8N_DAILY_REPORT, {
      type: "daily",
      action: "send",
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
        `تم إرسال التقرير اليومي إلى ${s.parentEmail}`,
        `Daily report sent to ${s.parentEmail}`,
      ),
      "success",
    );
  };

  window.sendWeeklyReport = async (sid, ms) => {
    const s = state.students.find((x) => x.id === sid);
    if (!s) return;
    const ws = new Date(ms),
      days = getReportsForWeek(sid, ws),
      valid = days.filter((d) => d.reports.length);
    if (!valid.length)
      return toast(
        T("مفيش تقييمات في الأسبوع ده", "No assessments this week"),
        "warn",
      );
    const avgOf = (a) => Math.round(a.reduce((x, y) => x + y, 0) / a.length);
    const avg = avgOf(valid.flatMap((d) => d.reports.map((r) => r.totalScore)));
    const res = await sendToN8N(CONFIG.N8N_WEEKLY_REPORT, {
      type: "weekly",
      action: "send",
      to: s.parentEmail,
      student: s.name,
      parentName: s.parentName,
      weekStart: localISO(ws),
      avgScore: avg,
      teacherName: state.user.name,
      days: days.map((d) => ({
        day: AR_DAYS[d.date.getDay()],
        date: localISO(d.date),
        avgScore: d.reports.length
          ? avgOf(d.reports.map((r) => r.totalScore))
          : null,
        notes: d.reports.flatMap((r) => (r.notes ? [r.notes] : [])),
      })),
    });
    if (!res) return sendFail(CONFIG.N8N_WEEKLY_REPORT);
    toast(
      T(
        `تم إرسال التقرير الأسبوعي (متوسط ${avg}%) إلى ${s.parentEmail}`,
        `Weekly report (avg ${avg}%) sent to ${s.parentEmail}`,
      ),
      "success",
    );
  };

  /* ---------- 3) الدرجات ---------- */
  BEHAVIOR_QUESTIONS.forEach((q) => delete q.reverse); // التلميح "3 = منخفض" يعني أن الأعلى هو الأفضل
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
    "#/blog": ["المدونة", "Blog"],
    "#/pricing": ["التسعير", "Pricing"],
    "#/about": ["من نحن", "About"],
    "#/contact": ["تواصل معنا", "Contact"],
    "#/dashboard": ["لوحة التحكم", "Dashboard"],
  };
  TITLES["#/testimonials"] = ["قالوا عنا", "Testimonials"];
  const setTitle = () => {
    const t = TITLES[state.route.split("?")[0]] || TITLES["#/"];
    document.title = "أنيس | " + T(t[0], t[1]);
  };
  const _nav = navigate;
  window.navigate = (h) => {
    _nav(h);
    if (innerWidth <= 1024) closeDashDrawer();
    setTitle();
  };

  /* حدود الباقة المجانية + تحقق الهاتف المصري */
  const overLimit = (kind) => {
    if (state.user.plan === "pro") return false;
    const d = teacherData();
    return kind === "class" ? d.classes.length >= 1 : d.students.length >= 10;
  };
  const _sc = saveClass;
  window.saveClass = () => {
    if (overLimit("class")) {
      closeGenericModal();
      toast(
        T(
          "الباقة المجانية تشمل فصلًا واحدًا. رقّي باقتك لإضافة المزيد",
          "Free plan includes 1 class. Upgrade for more",
        ),
        "warn",
      );
      return;
    }
    _sc();
  };
  const _ss = saveStudent;
  window.saveStudent = (cid) => {
    if (overLimit("student")) {
      closeGenericModal();
      toast(
        T(
          "الباقة المجانية تشمل 10 طلاب. رقّي باقتك لإضافة المزيد",
          "Free plan includes 10 students. Upgrade for more",
        ),
        "warn",
      );
      return;
    }
    const p = ($("#sfPhone").value || "").replace(/[\s\-()]/g, "");
    if (!/^(\+20|0020|0)?1[0125]\d{8}$/.test(p)) {
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
    _ss(cid);
  };

  /* ---------- 5) نصوص مضللة: إزالة ادعاء التشفير ---------- */
  const _home = ROUTES["#/"];
  ROUTES["#/"] = () =>
    _home()
      .replace(
        "خصوصية كاملة وتشفير لكل البيانات",
        "التزام بخصوصية بيانات الطلاب",
      )
      .replace(
        "Full privacy and encryption for all data",
        "Commitment to student data privacy",
      )
      .replace(
        "طبعًا. كل البيانات مشفرة، ومحدش يقدر يوصلها غير المدرس صاحب الحساب وولي أمر الطالب.",
        "في النسخة التجريبية بتتحفظ البيانات على متصفحك فقط، ولا تُشارك إلا مع ولي الأمر عند إرسال تقرير.",
      )
      .replace(
        "Absolutely. All data is encrypted and only accessible by the teacher account owner and the student's parent.",
        "In this demo, data stays in your browser and is only shared with the parent when you send a report.",
      );

  /* شريط النسخة التجريبية */
  const note = document.createElement("div");
  note.className = "demo-note";
  note.id = "demoNote";
  const setNote = () =>
    (note.textContent = T(
      "نسخة تجريبية: البيانات تُحفظ على هذا المتصفح فقط، لا تُدخل بيانات حقيقية لطلاب.",
      "Demo version: data is stored in this browser only. Do not enter real student data.",
    ));
  setNote();
  document.body.prepend(note);

  /* ---------- 6) إمكانية الوصول ---------- */
  $("#toasts").setAttribute("aria-live", "polite");
  $("#chatBody").setAttribute("aria-live", "polite");
  $("#chatFab").setAttribute("aria-label", "مساعد أنيس / Anees assistant");
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
    setNote();
    setTitle();
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

  /* ---------- سكرول ناعم (wheel) ---------- */
  let target = scrollY,
    cur = scrollY,
    raf = 0;
  const tick = () => {
    cur += (target - cur) * 0.12;
    if (Math.abs(target - cur) < 0.5) {
      cur = target;
      raf = 0;
      scrollTo(0, cur);
      return;
    }
    scrollTo(0, cur);
    raf = requestAnimationFrame(tick);
  };
  addEventListener(
    "wheel",
    (e) => {
      if (
        e.ctrlKey ||
        e.defaultPrevented ||
        matchMedia("(pointer:coarse)").matches
      )
        return;
      if (
        e.target.closest(
          ".modal-overlay.open,.dialog-overlay.open,.chat-panel,.dash-side.open,.mobile-menu.open,textarea,select",
        )
      )
        return;
      e.preventDefault();
      const d = e.deltaMode === 1 ? e.deltaY * 32 : e.deltaY;
      target = Math.max(
        0,
        Math.min(
          document.documentElement.scrollHeight - innerHeight,
          target + d,
        ),
      );
      if (!raf) raf = requestAnimationFrame(tick);
    },
    { passive: false },
  );
  addEventListener(
    "scroll",
    () => {
      if (!raf) target = cur = scrollY;
    },
    { passive: true },
  );

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
    <img class="fab-logo" src="Anees-Icon-Light-Transparent.png" alt="" />
    <span class="fab-dot"></span><span class="fab-tip"></span>`;

  /* ---------- الترجمة الكاملة: لوجو، فوتر، شات ---------- */
  const FUNNEL =
    '<svg class="f-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 3H2l8 9.46V19l4 2v-8.54z"/></svg>';
  const CHEV =
    '<svg class="f-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>';
  function i18n() {
    $$(".logo span").forEach((s) => (s.textContent = NAME()));
    $$(".logo-img").forEach((i) => (i.alt = NAME()));
    document.title = document.title.replace(/^(أنيس|Anees)/, NAME());
    const soon =
      "event.preventDefault();toast('" +
      L("الصفحة قيد الإعداد", "Page coming soon") +
      "','info')";
    $(".footer .container").innerHTML = `
      <div class="footer-grid">
        <div class="footer-col footer-brand"><a class="logo" href="#/"><img src="Anees-Icon-Light-Transparent.png" alt="${NAME()}" class="logo-img"/><span>${NAME()}</span></a>
          <p>${L("منصة مصرية بتساعد المدرسين وأولياء الأمور يتابعوا الصحة النفسية للطلاب بشكل مبسط.", "An Egyptian platform helping teachers and parents follow student mental wellbeing in a simple way.")}</p></div>
        <div class="footer-col"><h4>${L("المنصة", "Platform")}</h4><ul>
          <li><a href="#/pricing">${L("التسعير", "Pricing")}</a></li><li><a href="#/blog">${L("المدونة", "Blog")}</a></li><li><a href="#/testimonials">${L("قالوا عنا", "Testimonials")}</a></li></ul></div>
        <div class="footer-col"><h4>${L("الشركة", "Company")}</h4><ul>
          <li><a href="#/about">${L("من نحن", "About us")}</a></li><li><a href="#/contact">${L("تواصل معنا", "Contact")}</a></li></ul></div>
        <div class="footer-col"><h4>${L("قانوني", "Legal")}</h4><ul>
          <li><a href="#" onclick="${soon}">${L("سياسة الخصوصية", "Privacy policy")}</a></li><li><a href="#" onclick="${soon}">${L("الشروط والأحكام", "Terms & conditions")}</a></li></ul></div>
      </div>
      <div class="footer-bottom"><span>&copy; ${new Date().getFullYear()} ${NAME()}. ${L("جميع الحقوق محفوظة.", "All rights reserved.")}</span><span>${L("صُنع في مصر", "Made in Egypt")}</span></div>`;
    $(".chat-head .title").innerHTML =
      `<span class="online"></span> ${L("مساعد أنيس الذكي", "Anees smart assistant")}`;
    $("#chatInput").placeholder = L("اكتب سؤالك...", "Type your question...");
    $(".chat-quick").innerHTML = [
      [L("إزاي أضيف فصل؟", "How do I add a class?")],
      [L("الباقات", "Plans")],
      [L("التقارير", "Reports")],
    ]
      .map(
        ([q]) => `<button onclick="quickAsk(this.textContent)">${q}</button>`,
      )
      .join("");
    const msgs = $$("#chatBody .chat-msg");
    if (msgs.length <= 1 && msgs[0])
      msgs[0].textContent = L(
        "أهلاً بيك. أنا مساعد أنيس. اسألني أي حاجة عن المنصة أو الصحة النفسية للطلاب.",
        "Hi! I'm Anees assistant. Ask me anything about the platform or student wellbeing.",
      );
    $(".fab-tip").textContent = L("اسألني أي حاجة 👋", "Ask me anything 👋");
    $("#chatFab").setAttribute(
      "aria-label",
      L("افتح مساعد أنيس", "Open Anees assistant"),
    );
    bindPageEvents();
  }

  /* نصوص مخزّنة (حالة التقييم / أسماء الأيام) بلغة الواجهة الحالية */
  const PAIRS = [
    ["ممتاز", "Excellent"],
    ["يحتاج متابعة", "Needs monitoring"],
    ["يحتاج انتباه", "Needs attention"],
    ["يحتاج تدخل", "Needs intervention"],
    ["جيد", "Good"],
  ].concat(AR_DAYS.map((d, i) => [d, EN_DAYS[i]]));
  function fixStored(root) {
    if (!root) return;
    root.querySelectorAll(".score-pill,.ai-status,.ri-date").forEach((n) => {
      const w = document.createTreeWalker(n, NodeFilter.SHOW_TEXT);
      let x;
      while ((x = w.nextNode())) {
        let v = x.nodeValue;
        PAIRS.forEach(([a, e]) => {
          v = ar() ? v.split(e).join(a) : v.split(a).join(e);
        });
        if (v !== x.nodeValue) x.nodeValue = v;
      }
    });
  }
  new MutationObserver(() => fixStored($("#genericModalBody"))).observe(
    $("#genericModalBody"),
    { childList: true, subtree: true },
  );

  /* ---------- الداشبورد: فلتر + حركة العرض ---------- */
  function wrapFilter() {
    const s = $("#classFilterSelect");
    if (!s || s.parentElement.classList.contains("filter-select")) return;
    const w = document.createElement("div");
    w.className = "filter-select" + (s.value !== "all" ? " active" : "");
    s.before(w);
    w.append(s);
    w.insertAdjacentHTML("beforeend", FUNNEL + CHEV);
    s.setAttribute("aria-label", L("تصفية حسب المرحلة", "Filter by stage"));
  }
  let lastKey = "";
  const _rd = window.renderDashboard;
  window.renderDashboard = () => {
    _rd();
    wrapFilter();
    const m = $("#dashMain"),
      key = state.dashView + "|" + state.currentClass + "|" + state.lang;
    if (key !== lastKey) {
      lastKey = key;
      m.classList.remove("view-in");
      void m.offsetWidth;
      m.classList.add("view-in");
      setTimeout(() => m.classList.remove("view-in"), 1000);
    } else m.classList.remove("view-in");
    fixStored(m);
  };

  /* ---------- تبديل اللغة + init ---------- */
  const _tl = window.toggleLang;
  window.toggleLang = () => {
    _tl();
    i18n();
  };
  const note = $("#demoNote");
  if (note) $("#site").prepend(note);
  i18n();
  window.navigate(location.hash || "#/");
})();

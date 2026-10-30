const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const app = fs.readFileSync(path.join(root, 'app.js'), 'utf8');

test('login form does not reference signup draft or phone field', () => {
  const start = app.indexOf('function renderAuthPage(');
  const end = app.indexOf('function renderSignupSteps()', start);
  const login = app.slice(start, end);
  assert.ok(!login.includes('d.phone'));
  assert.ok(!login.includes('id="aPhone"'));
});

test('signup form contains optional phone field', () => {
  const start = app.indexOf('function renderSignupSteps()');
  const end = app.indexOf('function signupNextStep()', start);
  const signup = app.slice(start, end);
  assert.ok(signup.includes('id="aPhone"'));
  assert.ok(signup.includes('Phone number (optional)'));
});

test('login validation no longer references undefined phone variable', () => {
  const start = app.indexOf('async function handleAuth(');
  const end = app.indexOf('if (mode === "signup")', start);
  const login = app.slice(start, end);
  assert.ok(!login.includes('phone.replace'));
  assert.ok(login.includes('const email ='));
  assert.ok(login.includes('const pass ='));
});

test('class and student saves are guarded against repeated submissions', () => {
  assert.ok(app.includes('let _classSaveInFlight = false;'));
  assert.ok(app.includes('let _studentSaveInFlight = false;'));
  assert.ok(app.includes('async function saveClass(editId)'));
  assert.ok(app.includes('async function saveStudent(classId, editId)'));
  assert.ok(app.includes('button.disabled = true;'));
});

test('new class and student IDs use a random component', () => {
  assert.match(app, /const newClassId = "c_" \+ \(globalThis\.crypto\?\.randomUUID\?\./);
  assert.match(app, /const newStuId = "s_" \+ \(globalThis\.crypto\?\.randomUUID\?\./);
});

test('route renderer catches render exceptions instead of leaving a blank page', () => {
  assert.ok(app.includes('[Anees route render]'));
  assert.ok(app.includes('Unable to open this page'));
});

test('articles are loaded from Supabase rather than hardcoded sample cards', () => {
  const blogStart = app.indexOf('function renderBlog()');
  const blogEnd = app.indexOf('function renderTestimonials()', blogStart);
  const blog = app.slice(blogStart, blogEnd);
  assert.ok(blog.includes('id="blogArticlesGrid"'));
  assert.ok(blog.includes('loadBlogArticles'));
  assert.ok(!blog.includes('How to help a child with exam anxiety?'));
  assert.ok(!blog.includes('كيف تتعامل مع طفل قلق الامتحانات؟'));
  assert.ok(blog.includes('article-card-text-only'));
  assert.ok(blog.includes('اقرأ المقال'));
});

test('article content uses cloud reads and realtime subscriptions', () => {
  const cloud = fs.readFileSync(path.join(root, 'supabase-config.js'), 'utf8');
  assert.ok(cloud.includes('fetchPublishedArticles()'));
  assert.ok(cloud.includes('fetchPublishedArticle(driveFileId)'));
  assert.ok(cloud.includes('subscribeToArticles(callback)'));
  assert.ok(cloud.includes('.from("articles")'));
});

test('Telegram is the first direct contact card before email', () => {
  const start = app.indexOf('function renderContact()');
  const end = app.indexOf('function bindPageEvents()', start);
  const contact = app.slice(start, end);
  assert.ok(contact.includes('https://t.me/AneesMentalHealth_bot'));
  assert.ok(contact.indexOf('t.me/AneesMentalHealth_bot') < contact.indexOf('mailto:hello@anees.eg'));
});

test('parent result email is removed from the frontend and results can be retried in-site', () => {
  assert.ok(!app.includes('N8N_PARENT_RESULT_REPORT'));
  assert.ok(!app.includes('parent_result_report'));
  assert.ok(app.includes('Evaluate Again'));
  assert.ok(app.includes('تقييم مرة أخرى'));
  assert.ok(app.includes('function analyze(answersRaw)'));
});

test('parent form still has a blocking loading indicator during persistence', () => {
  assert.ok(app.includes('function showParentSubmissionLoading()'));
  assert.ok(app.includes('overlay.id = "parentSubmissionLoading"'));
});

test('article detail sanitizes rich HTML and does not render source-file download links', () => {
  assert.ok(app.includes('function sanitizeArticleHtml('));
  assert.ok(app.includes('function articleFilePreview(article, isAr)'));
  assert.ok(app.includes('article.content_html'));
  assert.ok(!app.includes('Download original file'));
  assert.ok(!app.includes('تحميل الملف الأصلي'));
});

test('parent result email workflow is disabled while daily teacher workflow remains untouched', () => {
  const workflow = JSON.parse(fs.readFileSync(path.join(root, 'Anees - Parent Result and Email (NEW).json'), 'utf8'));
  assert.equal(workflow.active, false);
  assert.ok(workflow.nodes.find(n => n.name === 'Send Report Email').disabled);
  const daily = JSON.parse(fs.readFileSync(path.join(root, 'Anees Weekly Parent Report.json'), 'utf8'));
  assert.equal(daily.active, true);
});

test('article sync protects cleanup from empty or invalid Drive listings and logs storage deletion failures', () => {
  const workflow = JSON.parse(fs.readFileSync(path.join(root, 'Anees - Google Drive Articles Sync (NEW).json'), 'utf8'));
  const names = new Set(workflow.nodes.map(n => n.name));
  assert.ok(names.has('Delete Removed Article File from Storage'));
  assert.ok(names.has('Storage Delete Failed?'));
  assert.ok(names.has('Log Storage Cleanup Error'));
  const normalize = workflow.nodes.find(n => n.name === 'Normalize Drive List').parameters.jsCode;
  assert.ok(normalize.includes('zero supported files'));
  assert.ok(normalize.includes('listSucceeded:true'));
  for (const [source, entry] of Object.entries(workflow.connections)) {
    assert.ok(names.has(source), `missing connection source ${source}`);
    for (const branch of entry.main || []) for (const edge of branch) assert.ok(names.has(edge.node), `missing connection target ${edge.node}`);
  }
});

test('language and theme preferences persist in localStorage and are bootstrapped before CSS', () => {
  assert.ok(app.includes('window.localStorage.getItem(key)'));
  assert.ok(app.includes('window.localStorage.setItem(key, String(value))'));
  const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  assert.ok(html.indexOf('localStorage.getItem("anees.lang")') < html.indexOf('style.css'));
  assert.ok(html.indexOf('localStorage.getItem("anees.theme")') < html.indexOf('style.css'));
});

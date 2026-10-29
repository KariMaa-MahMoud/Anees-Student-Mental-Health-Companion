const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
function workflow(name) { return JSON.parse(fs.readFileSync(path.join(root, name), 'utf8')); }
function runCodeNode(wfName, nodeName, mocked) {
  const node = workflow(wfName).nodes.find(n => n.name === nodeName);
  assert.ok(node, `missing node ${nodeName}`);
  const fn = new Function('$', node.parameters.jsCode);
  return fn((name) => ({ first: () => ({ json: mocked[name] || {} }), all: () => (mocked[name] || []).map(json => ({json})) }));
}
for (const file of ['Anees Weekly Parent Report.json', 'Anees - Monthly Parent Reports.json']) {
  test(`${file}: no-assessment report explicitly says there are no records`, () => {
    const period = {reportType: file.includes('Monthly') ? 'monthly' : 'weekly', periodStart:'2026-10-25T00:00:00.000Z', periodEnd:'2026-10-30T00:00:00.000Z', periodStartLabel:'period start', periodEndLabel:'period end'};
    const out = runCodeNode(file, 'Prepare Reports', {
      'Set Report Period': period,
      'Get Students': [{id:'student-1', full_name:'Test Student', parent_email:'parent@example.test'}],
      'Get Profiles': [], 'Get Assessments': [], 'Get Existing Report Logs': []
    });
    assert.equal(out.length, 1);
    assert.equal(out[0].json.noAssessments, true);
    assert.match(out[0].json.parentSummary, /لم تُسجَّل تقييمات/);
    assert.match(out[0].json.aiRecommendation, /لا يمكن تقديم توصية/);
  });
}
test('monthly period boundaries are exact Cairo month starts', () => {
  const node = workflow('Anees - Monthly Parent Reports.json').nodes.find(n => n.name === 'Set Report Period');
  const out = new Function(node.parameters.jsCode)();
  const period = out[0].json;
  const start = new Date(period.periodStart);
  const end = new Date(period.periodEnd);
  const localParts = (d) => Object.fromEntries(new Intl.DateTimeFormat('en-CA', {timeZone:'Africa/Cairo', year:'numeric', month:'2-digit', day:'2-digit', hour:'2-digit', minute:'2-digit', second:'2-digit', hourCycle:'h23'}).formatToParts(d).filter(x => x.type !== 'literal').map(x => [x.type, x.value]));
  const a = localParts(start); const b = localParts(end);
  assert.equal(a.day, '01'); assert.equal(a.hour, '00'); assert.equal(a.minute, '00'); assert.equal(a.second, '00');
  assert.equal(b.day, '01'); assert.equal(b.hour, '00'); assert.equal(b.minute, '00'); assert.equal(b.second, '00');
  assert.ok(start < end);
});

test('monthly Prepare Reports uses report assembly logic rather than period calculation', () => {
  const monthly = workflow('Anees - Monthly Parent Reports.json');
  const node = monthly.nodes.find(n => n.name === 'Prepare Reports');
  assert.ok(node.parameters.jsCode.includes('Get Students'));
  assert.ok(node.parameters.jsCode.includes('Get Assessments'));
  assert.ok(node.parameters.jsCode.includes('noAssessments'));
  assert.ok(!node.parameters.jsCode.includes('cairoMidnightToUTC'));
});
test('single assessment without notes is reported as limited information', () => {
  const period = {reportType:'weekly', periodStart:'2026-10-25T00:00:00.000Z', periodEnd:'2026-10-30T00:00:00.000Z', periodStartLabel:'period start', periodEndLabel:'period end'};
  const out = runCodeNode('Anees Weekly Parent Report.json', 'Prepare Reports', {
    'Set Report Period': period,
    'Get Students': [{id:'student-1', full_name:'Test Student', parent_email:'parent@example.test'}],
    'Get Profiles': [], 'Get Assessments': [{id:'a1', student_id:'student-1', status:'submitted', submitted_at:'2026-10-27T12:00:00.000Z', metadata:{}, notes:''}], 'Get Existing Report Logs': []
  });
  assert.equal(out.length, 1);
  assert.equal(out[0].json.assessmentCount, 1);
  assert.match(out[0].json.parentSummary, /نتيجة تقييم واحدة/);
  assert.match(out[0].json.aiRecommendation, /المعلومات المتاحة محدودة/);
});

test('monthly period calculation uses timezone-aware local midnight', () => {
  const node = workflow('Anees - Monthly Parent Reports.json').nodes.find(n => n.name === 'Set Report Period');
  assert.ok(node.parameters.jsCode.includes("timeZone: TZ"));
  assert.ok(node.parameters.jsCode.includes('localMidnightUtc'));
  assert.ok(!node.parameters.jsCode.includes('+03:00'));
});
test('assessment begins processing and final result RPC marks it submitted', () => {
  const wf = workflow('Anees - Assessment Analysis.json');
  const insert = wf.nodes.find(n => n.name === 'Insert Assessment');
  const status = insert.parameters.fieldsUi.fieldValues.find(f => f.fieldId === 'status');
  assert.equal(status.fieldValue, 'processing');
  const persist = wf.nodes.find(n => n.name === 'Persist Final Assessment');
  assert.ok(persist.parameters.jsonBody.includes("p_status: 'submitted'"));
});
test('weekly and monthly exports do not contain embedded Supabase secret key literals', () => {
  for (const file of ['Anees Weekly Parent Report.json', 'Anees - Monthly Parent Reports.json']) {
    const raw = fs.readFileSync(path.join(root, file), 'utf8');
    assert.doesNotMatch(raw, /sb_secret_[A-Za-z0-9_-]+/);
    assert.ok(raw.includes('REPLACE_WITH_SUPABASE_SECRET_KEY'));
  }
});

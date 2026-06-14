/* =========================================================================
   FORGE — Muscle Protocol
   Beginner · 4-day Upper/Lower · Equipment: 2x5kg + 2x8kg dumbbells
   Pure HTML/CSS/JS · localStorage · no build step.
   ========================================================================= */
"use strict";

/* ---------------------------------------------------------------------------
   ICONS (inline SVG, no emojis)
   --------------------------------------------------------------------------- */
function svg(p, sw) { return `<svg class="ic" viewBox="0 0 24 24" stroke-width="${sw||1.8}" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`; }
const IC = {
  calendar: svg('<rect x="3" y="4" width="18" height="18" rx="1"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>'),
  dumbbell: svg('<path d="m6.5 6.5 11 11"/><path d="m21 21-1-1"/><path d="m3 3 1 1"/><path d="m18 22 4-4"/><path d="m2 6 4-4"/><path d="m3 10 7-7"/><path d="m14 21 7-7"/>'),
  nutrition: svg('<path d="M12 2a3 3 0 0 0-3 3c0 1.5 1 2.5 1 2.5"/><path d="M11 7.5C9.5 6 7 6 5.5 7.5 3 10 3.5 15 6 18.5c1 1.4 2.2 2.5 3.5 2.5 1 0 1.4-.5 2.5-.5s1.5.5 2.5.5c1.3 0 2.5-1.1 3.5-2.5 1-1.4 1.6-2.9 1.8-4"/><path d="M17 8.5c1.5 0 3 1 3 3"/>'),
  chart: svg('<path d="M3 3v18h18"/><rect x="7" y="11" width="3" height="6"/><rect x="12" y="7" width="3" height="10"/><rect x="17" y="13" width="3" height="4"/>'),
  flame: svg('<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>'),
  bolt: svg('<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>'),
  check: svg('<polyline points="20 6 9 17 4 12"/>', 2.4),
  plus: svg('<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>', 2.2),
  bulb: svg('<path d="M9 18h6"/><path d="M10 22h4"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/>'),
  info: svg('<circle cx="12" cy="12" r="9"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>'),
  fork: svg('<path d="M4 3v6a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V3"/><path d="M6 11v10"/><path d="M18 3v18"/><path d="M18 9c1.5 0 3-1 3-3.5S19.5 2 18 2"/>'),
  rice: svg('<path d="M5 21h14l-1.5-7H6.5z"/><path d="M9 14c0-2 1.5-3 3-3s3 1 3 3"/><circle cx="9" cy="5" r="1"/><circle cx="13" cy="4" r="1"/><circle cx="15" cy="7" r="1"/>'),
  clock: svg('<circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 14"/>'),
  bed: svg('<path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/>'),
  leaf: svg('<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6"/>'),
  book: svg('<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>'),
};

/* ---------------------------------------------------------------------------
   PROGRAM — 4-day Upper/Lower, dumbbell only
   --------------------------------------------------------------------------- */
const WORKOUTS = {
  upperA: {
    name: "Upper A", title: "UPPER A", focus: "Chest · Shoulders · Triceps",
    badge: "b-upper", badgeTx: "Upper", color: "var(--upperA)",
    warmup: "5 min brisk walk or arm circles, shoulder rotations, then 1 light set of the floor press.",
    tip: "On presses, squeeze the dumbbells hard and pull your shoulder blades back and down before you lower. Control the weight down for 2–3 seconds.",
    exercises: [
      { n: "Dumbbell Floor Press", nt: "8kg ×2 — triceps lightly touch the floor", s: 3, r: "10–12", d: "75s", track: true },
      { n: "Seated Shoulder Press", nt: "8kg ×2 — drop to 5kg to finish if needed", s: 3, r: "10–12", d: "75s", track: true },
      { n: "Lateral Raise", nt: "5kg ×2 — lead with the elbows", s: 3, r: "14–18", d: "45s" },
      { n: "Incline Push-up", nt: "Bodyweight — lower the surface as you get stronger", s: 3, r: "AMRAP", d: "60s" },
      { n: "Overhead Triceps Ext.", nt: "8kg ×1 — both hands, elbows forward", s: 3, r: "12–15", d: "60s" },
      { n: "Dumbbell Curl", nt: "8kg ×2 — no swing, slow down", s: 3, r: "10–12", d: "60s" },
    ],
  },
  lowerA: {
    name: "Lower A", title: "LOWER A", focus: "Quads · Glutes · Calves",
    badge: "b-lower", badgeTx: "Lower", color: "var(--lowerA)",
    warmup: "5 min walk, 15 bodyweight squats, 10 glute bridges, hip circles.",
    tip: "Legs are your biggest lever for total muscle. With light dumbbells, slow the descent and squeeze hard at the top — chase reps, not just load.",
    exercises: [
      { n: "Goblet Squat", nt: "8kg ×1 — chest tall, sit deep", s: 4, r: "12–15", d: "75s", track: true },
      { n: "Romanian Deadlift", nt: "8kg ×2 — hips back, flat back", s: 3, r: "12–15", d: "75s", track: true },
      { n: "Reverse Lunge", nt: "8kg ×2 — step back, vertical shin", s: 3, r: "10 / leg", d: "60s" },
      { n: "Glute Bridge", nt: "8kg ×1 — squeeze 1s at the top", s: 3, r: "15–20", d: "45s" },
      { n: "Standing Calf Raise", nt: "8kg ×2 — pause at the top", s: 4, r: "18–22", d: "40s" },
    ],
  },
  upperB: {
    name: "Upper B", title: "UPPER B", focus: "Back · Rear Delts · Biceps",
    badge: "b-upper", badgeTx: "Upper", color: "var(--upperB)",
    warmup: "5 min walk, band or bodyweight rows, arm swings.",
    tip: "On rows, drive your elbows back and squeeze the shoulder blades together. Think about pulling with the back, not the arms.",
    exercises: [
      { n: "Bent-over Row", nt: "8kg ×2 — pull to the waist", s: 4, r: "10–12", d: "75s", track: true },
      { n: "Single-arm Row", nt: "8kg ×1 — brace on a chair", s: 3, r: "10–12 / arm", d: "60s" },
      { n: "Rear Delt Fly", nt: "5kg ×2 — hinge, soft elbows", s: 3, r: "15–18", d: "45s" },
      { n: "Pike Push-up", nt: "Bodyweight — hips high, head to floor", s: 3, r: "8–12", d: "60s" },
      { n: "Hammer Curl", nt: "8kg ×2 — palms facing in", s: 3, r: "10–12", d: "60s", track: true },
      { n: "Dumbbell Shrug", nt: "8kg ×2 — lift straight up, pause", s: 3, r: "15–18", d: "45s" },
    ],
  },
  lowerB: {
    name: "Lower B", title: "LOWER B", focus: "Glutes · Hamstrings · Core",
    badge: "b-lower", badgeTx: "Lower", color: "var(--lowerB)",
    warmup: "5 min walk, 10 bodyweight split squats per leg, leg swings.",
    tip: "Bulgarian split squats are brutal with light weight — that's the point. Keep the torso tall and drop straight down through the front leg.",
    exercises: [
      { n: "Bulgarian Split Squat", nt: "8kg ×2 — rear foot on a chair", s: 3, r: "10 / leg", d: "75s", track: true },
      { n: "Sumo Squat", nt: "8kg ×1 — wide stance, toes out", s: 3, r: "15–20", d: "60s" },
      { n: "Single-leg RDL", nt: "5kg ×2 — balance, hinge, reach down", s: 3, r: "10 / leg", d: "60s" },
      { n: "Walking / Static Lunge", nt: "8kg ×2 — long steps, control", s: 3, r: "12 / leg", d: "60s" },
      { n: "Seated Calf Raise", nt: "8kg ×2 — dumbbells on the knees", s: 3, r: "20–25", d: "40s" },
      { n: "Plank", nt: "Bodyweight — straight line, brace", s: 3, r: "30–45s", d: "45s" },
    ],
  },
};
const REST_INFO = {
  name: "Rest", title: "REST & RECOVERY", color: "var(--rest-col)", badge: "b-rest", badgeTx: "Recovery",
  restTx: "Walk 20–40 min · Light stretching · Mobility for hips and shoulders\n\nRecovery is when muscle is built. Protect your sleep and hit your protein on these days.",
};
/* weekly schedule: Mon..Sun */
const SCHEDULE = [
  { num: "01", day: "Monday",    w: "upperA" },
  { num: "02", day: "Tuesday",   w: "lowerA" },
  { num: "03", day: "Wednesday", w: "rest" },
  { num: "04", day: "Thursday",  w: "upperB" },
  { num: "05", day: "Friday",    w: "lowerB" },
  { num: "06", day: "Saturday",  w: "rest" },
  { num: "07", day: "Sunday",    w: "rest" },
];
const TYPE_ORDER = ["upperA", "lowerA", "upperB", "lowerB", "rest"];
function typeInfo(t) {
  if (t === "rest") return { label: "Rest", color: "var(--rest-col)" };
  return { label: WORKOUTS[t].name, color: WORKOUTS[t].color };
}
/* lifts tracked on the progression chart */
const TRACKED = [
  { key: "Dumbbell Floor Press", label: "Floor Press" },
  { key: "Seated Shoulder Press", label: "Shoulder Press" },
  { key: "Bent-over Row", label: "Bent-over Row" },
  { key: "Goblet Squat", label: "Goblet Squat" },
  { key: "Romanian Deadlift", label: "Romanian DL" },
  { key: "Bulgarian Split Squat", label: "Split Squat" },
  { key: "__bw", label: "Bodyweight" },
];

const PRINCIPLES = [
  { ic: IC.bolt, t: "Progressive overload", d: "With fixed weights, grow by adding reps, adding a set, slowing the lowering phase, or shortening rest. When the top of a rep range feels easy, make it harder." },
  { ic: IC.nutrition, t: "Eat in a surplus", d: "You can't build much muscle without enough food, especially when lean. Eating slightly more than you burn is the priority — see the Nutrition tab." },
  { ic: IC.bed, t: "Sleep & recover", d: "Muscle grows during rest. Sleep 7–9 hours and treat your rest days as part of the program, not time off from it." },
];
const PHASES = [
  { wk: "Weeks 1–3", t: "FOUNDATION", d: "Learn every movement. Controlled tempo, hit the rep targets, keep a log." },
  { wk: "Weeks 4–6", t: "VOLUME", d: "Add reps, then add a set. Reach the top of each rep range on every set." },
  { wk: "Weeks 7–9", t: "INTENSITY", d: "Slow eccentrics (3–4s), add pauses, shorten rest. Make light weight feel heavy." },
  { wk: "Weeks 10–12", t: "PEAK", d: "Week 10 easy (deload). Weeks 11–12 push for max reps; consider heavier dumbbells." },
];

/* ---------------------------------------------------------------------------
   EXERCISE LIBRARY — how to do each move with your dumbbells
   --------------------------------------------------------------------------- */
const EXERCISES = [
  { group: "Push", cls: "g-push", items: [
    { n: "Dumbbell Floor Press", equip: "8 kg ×2", target: "Chest · Triceps · Front delts",
      steps: ["Lie on your back on the floor, knees bent, a dumbbell in each hand at chest level with your elbows resting on the floor.",
        "Press both dumbbells straight up until your arms are fully extended over your chest.",
        "Lower slowly (2–3 seconds) until your upper arms lightly touch the floor.",
        "Pause for a moment, then press up again."],
      tip: "The floor stops your elbows, which protects your shoulders — ideal for pressing safely at home." },
    { n: "Seated Shoulder Press", equip: "8 kg ×2", target: "Shoulders · Triceps",
      steps: ["Sit tall on a chair, a dumbbell in each hand at shoulder height, palms facing forward.",
        "Brace your core so your lower back doesn't arch.",
        "Press the dumbbells overhead until your arms are straight.",
        "Lower under control back to shoulder height."],
      tip: "If 8 kg gives out mid-set, swap to the 5 kg pair and finish your reps." },
    { n: "Lateral Raise", equip: "5 kg ×2", target: "Side delts (shoulder width)",
      steps: ["Stand with a dumbbell in each hand at your sides, a slight bend in the elbows.",
        "Raise both arms out to the sides, leading with the elbows, up to shoulder height.",
        "Pause for a second at the top.",
        "Lower slowly back down."],
      tip: "Keep it strict — no swinging. Light weight and high reps build the side delts." },
    { n: "Incline Push-up", equip: "Bodyweight + raised surface", target: "Chest · Triceps · Shoulders",
      steps: ["Place your hands wider than your shoulders on a sturdy raised surface (table, sofa, counter).",
        "Walk your feet back into a straight plank line.",
        "Lower your chest to the edge under control.",
        "Push back up to the start."],
      tip: "The higher the surface, the easier. Lower it over time to work toward floor push-ups." },
    { n: "Pike Push-up", equip: "Bodyweight", target: "Shoulders · Triceps",
      steps: ["Start in a push-up, then walk your feet in and lift your hips into an inverted 'V'.",
        "Keep your head between your arms.",
        "Bend your elbows to lower the crown of your head toward the floor.",
        "Press back up."],
      tip: "The more vertical your torso, the more this hits the shoulders." },
    { n: "Overhead Triceps Extension", equip: "8 kg ×1", target: "Triceps",
      steps: ["Hold one dumbbell with both hands and raise it overhead.",
        "Keep your elbows pointing forward, close to your head.",
        "Lower the dumbbell behind your head by bending only at the elbows.",
        "Extend back up to the top."],
      tip: "Only your forearms move — keep the upper arms still." },
  ]},
  { group: "Pull", cls: "g-pull", items: [
    { n: "Bent-over Row", equip: "8 kg ×2", target: "Upper back · Lats · Biceps",
      steps: ["Hold a dumbbell in each hand, hinge at the hips to about 45°, flat back, knees soft.",
        "Let your arms hang straight down.",
        "Pull both dumbbells to your waist, driving the elbows back.",
        "Squeeze the shoulder blades, then lower slowly."],
      tip: "Keep your back flat and chest proud — never round your spine." },
    { n: "Single-arm Row", equip: "8 kg ×1", target: "Lats · Upper back",
      steps: ["Brace one hand and knee on a chair, back flat and roughly parallel to the floor.",
        "Hold a dumbbell in the other hand, hanging straight down.",
        "Row it up to your hip, keeping the elbow close to your body.",
        "Lower with control to a full stretch."],
      tip: "Working one side at a time lets you use a bigger range of motion." },
    { n: "Rear Delt Fly", equip: "5 kg ×2", target: "Rear delts · Upper back",
      steps: ["Hinge forward at the hips, flat back, dumbbells hanging below your chest.",
        "With soft elbows, raise both arms out to the sides.",
        "Squeeze the rear shoulders at the top.",
        "Lower slowly."],
      tip: "Light weight only — think 'spread your wings'." },
    { n: "Dumbbell Curl", equip: "8 kg ×2", target: "Biceps",
      steps: ["Stand with a dumbbell in each hand, palms facing forward.",
        "Keep your elbows pinned to your sides.",
        "Curl the dumbbells up, squeezing the biceps.",
        "Lower slowly over 2–3 seconds."],
      tip: "No swinging or leaning back — let the biceps do the work." },
    { n: "Hammer Curl", equip: "8 kg ×2", target: "Biceps · Brachialis · Forearms",
      steps: ["Hold the dumbbells with palms facing each other (neutral grip).",
        "Keep your elbows tight to your sides.",
        "Curl up while keeping the neutral grip.",
        "Lower under control."],
      tip: "Builds arm thickness and forearm strength." },
    { n: "Dumbbell Shrug", equip: "8 kg ×2", target: "Upper traps",
      steps: ["Stand tall, a dumbbell in each hand at your sides.",
        "Lift your shoulders straight up toward your ears.",
        "Pause and squeeze at the top.",
        "Lower slowly."],
      tip: "Straight up and down — don't roll the shoulders." },
  ]},
  { group: "Legs", cls: "g-legs", items: [
    { n: "Goblet Squat", equip: "8 kg ×1", target: "Quads · Glutes",
      steps: ["Hold one dumbbell vertically against your chest with both hands.",
        "Stand with feet shoulder-width, toes slightly out.",
        "Sit down between your knees, chest tall, until your thighs are about parallel.",
        "Drive through your heels to stand back up."],
      tip: "Holding the weight at your chest keeps you upright and protects your back." },
    { n: "Romanian Deadlift", equip: "8 kg ×2", target: "Hamstrings · Glutes",
      steps: ["Hold a dumbbell in each hand in front of your thighs, knees slightly bent.",
        "Push your hips back, sliding the dumbbells down your legs.",
        "Go until you feel a stretch in the hamstrings, keeping your back flat.",
        "Drive your hips forward to stand."],
      tip: "It's a hip hinge, not a squat — you should feel it in the hamstrings." },
    { n: "Reverse Lunge", equip: "8 kg ×2", target: "Quads · Glutes",
      steps: ["Stand tall with a dumbbell in each hand.",
        "Step one foot back and lower until both knees are about 90°.",
        "Keep the front shin vertical.",
        "Push through the front heel to return to standing."],
      tip: "Stepping back is easier on the knees than stepping forward." },
    { n: "Bulgarian Split Squat", equip: "8 kg ×2", target: "Quads · Glutes (single leg)",
      steps: ["Stand a stride in front of a chair and rest the top of your rear foot on it.",
        "Hold a dumbbell in each hand.",
        "Drop straight down through the front leg until the thigh is about parallel.",
        "Drive up through the front heel."],
      tip: "The best leg builder you can do with light weights — keep your torso tall." },
    { n: "Sumo Squat", equip: "8 kg ×1", target: "Inner thighs · Glutes · Quads",
      steps: ["Stand with a wide stance, toes turned out.",
        "Hold one dumbbell hanging between your legs.",
        "Squat straight down, knees tracking over your toes.",
        "Stand and squeeze the glutes."],
      tip: "The wide stance targets the inner thighs and glutes." },
    { n: "Single-leg RDL", equip: "5 kg ×2", target: "Hamstrings · Glutes · Balance",
      steps: ["Hold the dumbbells and stand on one leg with a soft knee.",
        "Hinge at the hip, reaching the dumbbells toward the floor as your back leg lifts behind you.",
        "Keep your back flat and hips level.",
        "Return to standing."],
      tip: "Go slow — the balance challenge is part of the exercise." },
    { n: "Walking / Static Lunge", equip: "8 kg ×2", target: "Quads · Glutes",
      steps: ["Hold a dumbbell in each hand.",
        "Take a long step forward and lower until both knees are about 90°.",
        "Either step through into the next lunge (walking) or push back to the start (static).",
        "Keep your torso upright throughout."],
      tip: "Control the descent — don't let the back knee slam down." },
    { n: "Glute Bridge", equip: "8 kg ×1", target: "Glutes",
      steps: ["Lie on your back, knees bent, feet flat on the floor.",
        "Rest one dumbbell across your hips, holding it in place.",
        "Drive through your heels and lift your hips until your body is in a straight line.",
        "Squeeze the glutes hard for a second, then lower."],
      tip: "Push your knees out slightly and squeeze hard at the top." },
    { n: "Standing Calf Raise", equip: "8 kg ×2", target: "Calves",
      steps: ["Stand tall with a dumbbell in each hand.",
        "Rise up onto the balls of your feet as high as you can.",
        "Pause at the top.",
        "Lower slowly for a full stretch."],
      tip: "Do it on the edge of a step for more range of motion." },
    { n: "Seated Calf Raise", equip: "8 kg ×2", target: "Calves (soleus)",
      steps: ["Sit on a chair, feet flat, balls of your feet on the floor or a thick book.",
        "Rest the dumbbells on top of your knees.",
        "Raise your heels as high as possible.",
        "Lower slowly."],
      tip: "The seated version hits the deeper soleus muscle." },
  ]},
  { group: "Core", cls: "g-core", items: [
    { n: "Plank", equip: "Bodyweight", target: "Core",
      steps: ["Rest on your forearms and toes, elbows directly under your shoulders.",
        "Make a straight line from your head to your heels.",
        "Brace your abs and squeeze your glutes.",
        "Hold for the target time, breathing steadily."],
      tip: "Don't let your hips sag or pike up — add a few seconds each week." },
  ]},
];

/* =========================================================================
   STATE
   ========================================================================= */
const SK = "forge_protocol_v1";
function defaultState() {
  return { logs: {}, bodyweight: [], profile: { weight: 58, height: 179, age: 28, sex: "male", activity: 1.5, goal: "gain" } };
}
function loadState() {
  try {
    const raw = localStorage.getItem(SK);
    if (!raw) return defaultState();
    const p = JSON.parse(raw), d = defaultState();
    return { ...d, ...p, profile: { ...d.profile, ...(p.profile || {}) } };
  } catch (e) { return defaultState(); }
}
function saveState() { try { localStorage.setItem(SK, JSON.stringify(state)); } catch (e) {} }
let state = loadState();

/* runtime */
let calY = new Date().getFullYear(), calM = new Date().getMonth();
let logDate = null, selType = null, delStep = false, curPR = "Dumbbell Floor Press";

/* =========================================================================
   DATE UTILS
   ========================================================================= */
const MONTHS = ["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"];
const MONTHS_S = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const WDAYS = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
function dateStr(d) { return d.getFullYear() + "-" + String(d.getMonth()+1).padStart(2,"0") + "-" + String(d.getDate()).padStart(2,"0"); }
function today() { return dateStr(new Date()); }
function dayOf(s) { const [y,m,d] = s.split("-").map(Number); const dt = new Date(y,m-1,d); dt.setHours(0,0,0,0); return dt; }
function noDays(a,b) { return Math.round(Math.abs(a-b)/86400000); }
function weekdayIndex(d) { return (d.getDay() + 6) % 7; }
function addDays(d,n) { const x = new Date(d); x.setDate(x.getDate()+n); return x; }
function startOfWeek(d) { return addDays(d, -weekdayIndex(d)); }
function fmtDate(s) {
  const dt = dayOf(s), td = new Date(); td.setHours(0,0,0,0);
  const yd = new Date(td - 86400000);
  if (dt.getTime() === td.getTime()) return "Today";
  if (dt.getTime() === yd.getTime()) return "Yesterday";
  return dt.getDate() + " " + MONTHS_S[dt.getMonth()];
}

/* =========================================================================
   STATS
   ========================================================================= */
function trainedDates() { return Object.keys(state.logs).filter(d => state.logs[d].type !== "rest"); }
function calcStreak() {
  const w = trainedDates().sort().reverse();
  if (!w.length) return { cur: 0, best: 0 };
  const td = new Date(); td.setHours(0,0,0,0);
  const gap0 = (td - dayOf(w[0])) / 86400000;
  let cur = 0;
  if (gap0 <= 2) { cur = 1; for (let i = 1; i < w.length; i++) { if (noDays(dayOf(w[i-1]), dayOf(w[i])) <= 2) cur++; else break; } }
  const asc = trainedDates().sort();
  let best = asc.length ? 1 : 0, tmp = 1;
  for (let i = 1; i < asc.length; i++) { if (noDays(dayOf(asc[i]), dayOf(asc[i-1])) <= 2) { tmp++; if (tmp > best) best = tmp; } else tmp = 1; }
  return { cur, best: Math.max(best, cur) };
}
function monthCount(y, m) { return trainedDates().filter(d => { const [dy,dm] = d.split("-").map(Number); return dy === y && dm-1 === m; }).length; }
function weekDone() {
  const start = startOfWeek(new Date()); let done = 0;
  for (let i = 0; i < 7; i++) { if (SCHEDULE[i].w !== "rest") { const iso = dateStr(addDays(start,i)); if (state.logs[iso] && state.logs[iso].type !== "rest") done++; } }
  return done;
}

/* =========================================================================
   NUTRITION
   ========================================================================= */
function nutrition() {
  const p = state.profile;
  const s = p.sex === "female" ? -161 : 5;
  const bmr = 10*p.weight + 6.25*p.height - 5*p.age + s;
  const tdee = bmr * p.activity;
  const adj = p.goal === "gain" ? 400 : p.goal === "lose" ? -400 : 0;
  const calories = Math.round((tdee + adj) / 10) * 10;
  const protein = Math.round(p.weight * 2.0);
  const fat = Math.round(p.weight * 0.9);
  const carbs = Math.max(0, Math.round((calories - protein*4 - fat*9) / 4));
  const bmi = p.weight / Math.pow(p.height/100, 2);
  return { bmr: Math.round(bmr), tdee: Math.round(tdee), calories, protein, fat, carbs, bmi: +bmi.toFixed(1) };
}

/* =========================================================================
   NAV
   ========================================================================= */
const TABS = [
  { id: "tracker", label: "Tracker", ic: IC.calendar },
  { id: "routine", label: "Routine", ic: IC.dumbbell },
  { id: "nutrition", label: "Nutrition", ic: IC.nutrition },
  { id: "progression", label: "Progression", ic: IC.chart },
  { id: "exercises", label: "Exercises", ic: IC.book },
];
function buildNav() {
  document.getElementById("nav-tabs").innerHTML = TABS.map((t,i) =>
    `<button class="nav-tab${i===0?" active":""}" data-tab="${t.id}" onclick="switchTab('${t.id}')">${t.ic}${t.label}</button>`).join("");
}
function switchTab(tab) {
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  document.querySelectorAll(".nav-tab").forEach(t => t.classList.toggle("active", t.dataset.tab === tab));
  document.getElementById("view-" + tab).classList.add("active");
  if (tab === "tracker") renderCalendar();
  if (tab === "nutrition") renderNutrition();
  if (tab === "progression") { buildProgression(); renderPR(curPR); }
}

/* =========================================================================
   REFRESH (tracker + header)
   ========================================================================= */
function refresh() {
  const { cur, best } = calcStreak();
  const total = trainedDates().length;
  const wk = weekDone();
  const n = new Date();
  const thisM = monthCount(n.getFullYear(), n.getMonth());
  const con = total ? Math.min(100, Math.round((wk / 4) * 100)) : null;

  document.getElementById("hdr-fire").innerHTML = IC.flame;
  document.getElementById("sh-fire").innerHTML = IC.flame;
  document.getElementById("hdr-streak-num").textContent = cur;
  document.getElementById("hdr-streak").classList.toggle("hot", cur >= 3);

  document.getElementById("s-total").textContent = total;
  document.getElementById("s-week").textContent = wk + "/4";
  document.getElementById("s-best").textContent = best;
  document.getElementById("s-consist").textContent = con !== null ? con + "%" : "—";

  document.getElementById("sh-num").textContent = cur;
  document.getElementById("ms-week").textContent = wk + "/4";
  document.getElementById("ms-best").textContent = best;
  document.getElementById("ms-total").textContent = total;

  const sub = document.getElementById("sh-sub");
  if (cur === 0) { sub.textContent = total > 0 ? "Train again to rebuild your streak" : "Log your first workout"; sub.style.color = "var(--muted)"; }
  else if (cur < 3) { sub.textContent = "Good start — keep the rhythm"; sub.style.color = "var(--muted)"; }
  else if (cur < 7) { sub.textContent = cur + " in a row · looking strong"; sub.style.color = "var(--accent2)"; }
  else { sub.textContent = cur + " sessions · unstoppable"; sub.style.color = "var(--accent)"; }
  document.getElementById("sh-fire").style.animationDuration = cur >= 5 ? "1s" : "2.5s";

  const btn = document.getElementById("log-today-btn");
  const t = today();
  if (state.logs[t]) { const ti = typeInfo(state.logs[t].type); btn.innerHTML = IC.check + " " + ti.label + " logged"; btn.className = "log-today-btn done"; }
  else { btn.innerHTML = IC.plus + " Log today's workout"; btn.className = "log-today-btn"; }

  renderRecent();
  renderCalendar();
}
function renderRecent() {
  const el = document.getElementById("recent-list");
  const entries = Object.keys(state.logs).sort().reverse().slice(0, 5);
  if (!entries.length) { el.innerHTML = '<div class="empty-note">No sessions logged yet</div>'; return; }
  el.innerHTML = entries.map(d => {
    const info = state.logs[d], ti = typeInfo(info.type);
    let lifts = "";
    if (info.lifts) {
      const parts = [];
      for (const k in info.lifts) { if (info.lifts[k] && info.lifts[k].kg) parts.push(shortName(k) + " " + info.lifts[k].kg + "kg"); }
      lifts = parts.slice(0, 2).join(" · ");
    }
    return `<div class="rec-item" onclick="openPanel('${d}')">
      <div class="rec-dot" style="background:${ti.color}"></div>
      <div style="flex:1;min-width:0">
        <div class="rec-type" style="color:${ti.color}">${ti.label}</div>
        ${lifts ? `<div class="rec-note">${lifts}</div>` : ""}
        ${info.note ? `<div class="rec-note">${esc(info.note).slice(0,38)}${info.note.length>38?"…":""}</div>` : ""}
      </div>
      <div class="rec-date">${fmtDate(d)}</div>
    </div>`;
  }).join("");
}
function shortName(n) { return n.replace("Dumbbell ","").replace("Seated ","").replace("Bent-over ","").replace(/ .*/, m => m.length > 8 ? "" : m).split(" ").slice(0,2).join(" "); }
function esc(s) { return String(s).replace(/[<>&]/g, c => ({ "<":"&lt;", ">":"&gt;", "&":"&amp;" }[c])); }

/* =========================================================================
   CALENDAR
   ========================================================================= */
function renderCalendar() {
  const grid = document.getElementById("cal-grid");
  if (!grid) return;
  document.getElementById("cal-lbl").textContent = MONTHS[calM] + " " + calY;
  document.getElementById("cal-legend").innerHTML =
    TYPE_ORDER.map(t => { const ti = typeInfo(t); return `<div class="leg-item"><div class="leg-dot" style="background:${ti.color}"></div>${ti.label}</div>`; }).join("");
  const first = new Date(calY, calM, 1), last = new Date(calY, calM+1, 0);
  let dow = first.getDay() - 1; if (dow < 0) dow = 6;
  const td = new Date(); td.setHours(0,0,0,0);
  let html = ["M","T","W","T","F","S","S"].map(h => `<div class="cal-wd">${h}</div>`).join("");
  for (let i = 0; i < dow; i++) html += `<div class="cal-cell"></div>`;
  for (let d = 1; d <= last.getDate(); d++) {
    const dt = new Date(calY, calM, d); dt.setHours(0,0,0,0);
    const ds = dateStr(dt), info = state.logs[ds];
    const isToday = dt.getTime() === td.getTime(), isFuture = dt > td;
    let cls = "cal-cell";
    if (isToday) cls += " today";
    if (isFuture) cls += " future";
    if (info && !isFuture) cls += " trained type-" + info.type;
    if (!isFuture) cls += " clickable";
    const onclick = isFuture ? "" : ` onclick="openPanel('${ds}')"`;
    html += `<div class="${cls}"${onclick}>${d}</div>`;
  }
  grid.innerHTML = html;
}
function changeMonth(dir) {
  calM += dir;
  if (calM > 11) { calM = 0; calY++; }
  if (calM < 0) { calM = 11; calY--; }
  renderCalendar();
}

/* =========================================================================
   LOG PANEL
   ========================================================================= */
function openPanel(ds) {
  logDate = ds || today(); selType = null; delStep = false;
  const td = new Date(); td.setHours(0,0,0,0);
  const isToday = dayOf(logDate).getTime() === td.getTime();
  document.getElementById("panel-title").textContent = isToday ? "LOG WORKOUT" : "EDIT DAY";
  const dt = dayOf(logDate);
  document.getElementById("panel-date").textContent = WDAYS[dt.getDay()] + ", " + dt.getDate() + " " + MONTHS_S[dt.getMonth()] + " " + dt.getFullYear();

  // type buttons
  document.getElementById("type-grid").innerHTML = TYPE_ORDER.map(t => {
    const ti = typeInfo(t);
    const span = t === "rest" ? ' style="grid-column:span 2"' : "";
    return `<button class="type-btn" data-type="${t}"${span} onclick="pickType('${t}',this)"><span class="tdot" style="background:${ti.color}"></span>${ti.label}</button>`;
  }).join("");
  document.getElementById("lifts-container").innerHTML = "";
  document.getElementById("log-notes").value = "";

  const ex = state.logs[logDate];
  if (ex) {
    pickType(ex.type, null);
    document.getElementById("log-notes").value = ex.note || "";
    if (ex.lifts) for (const k in ex.lifts) {
      const kg = document.getElementById("kg::" + k), rp = document.getElementById("rp::" + k);
      if (kg && ex.lifts[k].kg != null) kg.value = ex.lifts[k].kg;
      if (rp && ex.lifts[k].reps != null) rp.value = ex.lifts[k].reps;
    }
    const db = document.getElementById("del-btn"); db.classList.add("vis"); db.textContent = "Delete entry"; db.classList.remove("confirm");
  } else {
    document.getElementById("del-btn").classList.remove("vis");
  }
  const ov = document.getElementById("overlay");
  ov.style.display = "flex";
  requestAnimationFrame(() => requestAnimationFrame(() => ov.classList.add("vis")));
}
function closePanel() {
  const ov = document.getElementById("overlay");
  ov.classList.remove("vis");
  setTimeout(() => { ov.style.display = "none"; }, 360);
}
function handleOverlay(e) { if (e.target === document.getElementById("overlay")) closePanel(); }
function pickType(type, btn) {
  selType = type;
  document.querySelectorAll(".type-btn").forEach(b => b.className = "type-btn");
  const target = btn || document.querySelector('.type-btn[data-type="' + type + '"]');
  if (target) target.classList.add("sel-" + type);
  const cont = document.getElementById("lifts-container");
  if (type === "rest") {
    cont.innerHTML = `<div class="rest-panel-note">Active recovery day — no lifts to log. Add a note about your walk, stretching or how you feel.</div>`;
    return;
  }
  const w = WORKOUTS[type];
  cont.innerHTML = `<label class="flbl">Log your lifts (kg per dumbbell &amp; reps)</label>` +
    w.exercises.map(ex => {
      const kgPlace = (ex.nt.match(/(\d+)kg/) || [,""])[1] || "";
      return `<div class="lift-row">
        <div class="lift-name">${ex.n}</div>
        <div class="lift-grp"><input type="number" class="lift-input" id="kg::${ex.n}" placeholder="${kgPlace || "—"}" min="0" step="0.5"><div class="lift-ilbl">kg</div></div>
        <div class="lift-grp"><input type="number" class="lift-input" id="rp::${ex.n}" placeholder="${ex.r}" min="0"><div class="lift-ilbl">reps</div></div>
      </div>`;
    }).join("");
}
function saveLog() {
  if (!selType) { toast("Pick a workout type"); return; }
  const lifts = {};
  if (selType !== "rest") {
    WORKOUTS[selType].exercises.forEach(ex => {
      const kg = parseFloat((document.getElementById("kg::" + ex.n) || {}).value);
      const rp = parseFloat((document.getElementById("rp::" + ex.n) || {}).value);
      if (!isNaN(kg) || !isNaN(rp)) lifts[ex.n] = { kg: isNaN(kg) ? null : kg, reps: isNaN(rp) ? null : rp };
    });
  }
  state.logs[logDate] = { type: selType, note: document.getElementById("log-notes").value.trim(), lifts, ts: Date.now() };
  saveState();
  closePanel(); refresh();
  toast(IC.check + " Session saved");
}
function deleteLog() {
  const btn = document.getElementById("del-btn");
  if (!delStep) { delStep = true; btn.textContent = "Tap again to delete"; btn.classList.add("confirm");
    setTimeout(() => { delStep = false; btn.textContent = "Delete entry"; btn.classList.remove("confirm"); }, 3500); return; }
  delete state.logs[logDate]; saveState(); closePanel(); refresh(); toast("Entry deleted");
}

/* =========================================================================
   ROUTINE (accordion)
   ========================================================================= */
function buildRoutine() {
  const grid = document.getElementById("days-grid");
  grid.innerHTML = SCHEDULE.map(s => {
    const isRest = s.w === "rest";
    const w = isRest ? REST_INFO : WORKOUTS[s.w];
    let body;
    if (isRest) {
      body = `<div class="rest-content">${REST_INFO.restTx.replace(/\n/g, "<br>")}</div>`;
    } else {
      const exs = w.exercises.map(e => `<div class="ex-item">
        <div><div class="ex-name">${e.n}</div><div class="ex-note">${e.nt}</div></div>
        <div><div class="ex-chip s">${e.s}</div><div class="ex-chip-l">sets</div></div>
        <div><div class="ex-chip r">${e.r}</div><div class="ex-chip-l">reps</div></div>
        <div class="d-col"><div class="ex-chip d">${e.d}</div><div class="ex-chip-l">rest</div></div>
      </div>`).join("");
      body = `<div class="warmup"><div class="warmup-t">${IC.flame} Warm-up — 8 min</div><div class="warmup-tx">${w.warmup}</div></div>
        <div class="ex-list">${exs}</div>
        <div class="tip"><div class="tip-t">${IC.bulb} Coaching cue</div><div class="tip-tx">${w.tip}</div></div>
        <button class="log-this-btn" onclick="event.stopPropagation();openPanel(null)">${IC.plus} Log this workout today</button>`;
    }
    const sub = isRest ? "" : `<span class="day-sub"> — ${w.focus}</span>`;
    return `<div class="day-card">
      <div class="day-hdr" onclick="this.parentElement.classList.toggle('active')">
        <div class="day-num">${s.num}</div>
        <div class="day-info">
          <div class="day-dname">${s.day}</div>
          <div class="day-title">${w.title}${sub}</div>
        </div>
        <div class="dbadge ${w.badge}">${w.badgeTx}</div>
        <div class="day-chev">&#9662;</div>
      </div>
      <div class="day-body">${body}</div>
    </div>`;
  }).join("");
  document.getElementById("principles-grid").innerHTML = PRINCIPLES.map(p =>
    `<div class="principle">${p.ic}<h4>${p.t}</h4><p>${p.d}</p></div>`).join("");
}
function showSub(name, btn) {
  document.getElementById("sub-week").style.display = name === "week" ? "block" : "none";
  document.getElementById("sub-principles").style.display = name === "principles" ? "block" : "none";
  document.querySelectorAll(".sub-tab").forEach(t => t.classList.remove("active"));
  btn.classList.add("active");
}

function buildExercises() {
  const el = document.getElementById("ex-guide");
  if (!el) return;
  el.innerHTML = EXERCISES.map(grp => {
    const cards = grp.items.map(ex => `<div class="day-card guide-card">
      <div class="day-hdr" onclick="this.parentElement.classList.toggle('active')">
        <div class="day-info">
          <div class="day-dname">${grp.group} · ${ex.target}</div>
          <div class="day-title gtitle">${ex.n}</div>
        </div>
        <div class="dbadge ${grp.cls}">${ex.equip}</div>
        <div class="day-chev">&#9662;</div>
      </div>
      <div class="day-body">
        <div class="guide-equip">${IC.dumbbell} Equipment — ${ex.equip}</div>
        <ol class="guide-steps">${ex.steps.map(s => `<li>${s}</li>`).join("")}</ol>
        <div class="tip"><div class="tip-t">${IC.bulb} Key cue</div><div class="tip-tx">${ex.tip}</div></div>
      </div>
    </div>`).join("");
    return `<div class="sec-hdr" style="margin-top:8px">${grp.group}</div><div class="days-grid" style="margin-bottom:18px">${cards}</div>`;
  }).join("");
}

/* =========================================================================
   NUTRITION VIEW
   ========================================================================= */
function renderNutrition() {
  const n = nutrition(), p = state.profile;
  const grid = document.getElementById("nut-grid");
  grid.innerHTML = `
    <div class="nut-card">
      <h4>${IC.chart} Your stats</h4>
      <div class="stats-editor">
        <label>Weight (kg)<input type="number" step="0.5" id="pf-weight" value="${p.weight}"></label>
        <label>Height (cm)<input type="number" id="pf-height" value="${p.height}"></label>
        <label>Age<input type="number" id="pf-age" value="${p.age}"></label>
        <label>Sex<select id="pf-sex"><option value="male"${p.sex==="male"?" selected":""}>Male</option><option value="female"${p.sex==="female"?" selected":""}>Female</option></select></label>
        <label>Activity<select id="pf-act">
          <option value="1.2"${p.activity==1.2?" selected":""}>Sedentary</option>
          <option value="1.375"${p.activity==1.375?" selected":""}>Light</option>
          <option value="1.5"${p.activity==1.5?" selected":""}>Moderate</option>
          <option value="1.725"${p.activity==1.725?" selected":""}>Very active</option>
        </select></label>
        <label>Goal<select id="pf-goal">
          <option value="gain"${p.goal==="gain"?" selected":""}>Build muscle</option>
          <option value="maintain"${p.goal==="maintain"?" selected":""}>Maintain</option>
          <option value="lose"${p.goal==="lose"?" selected":""}>Lose fat</option>
        </select></label>
      </div>
      <button class="log-this-btn" style="margin-top:12px" onclick="saveProfile()">${IC.check} Update targets</button>
    </div>
    <div class="nut-card">
      <h4>${IC.bolt} Daily targets</h4>
      <div class="macro-row"><span>Calories</span><div><span class="macro-val">${n.calories.toLocaleString()}</span> <span class="macro-sub">kcal</span></div></div>
      <div class="macro-row"><span>Protein</span><div><span class="macro-val">${n.protein}g</span> <span class="macro-sub">2.0 g/kg</span></div></div>
      <div class="macro-row"><span>Carbs</span><div><span class="macro-val">${n.carbs}g</span></div></div>
      <div class="macro-row"><span>Fat</span><div><span class="macro-val">${n.fat}g</span></div></div>
      <div class="macro-row"><span>BMI</span><div><span class="macro-val">${n.bmi}</span> <span class="macro-sub">${n.bmi<18.5?"underweight":n.bmi<25?"healthy":"high"}</span></div></div>
    </div>
    <div class="nut-card">
      <h4>${IC.fork} Protein sources</h4>
      <ul>
        <li>Chicken / turkey breast <b>~35g / 150g</b></li>
        <li>Whole eggs (3–4 a day) <b>~6g each</b></li>
        <li>Salmon or tuna <b>~30g / 150g</b></li>
        <li>Greek yogurt / cottage cheese <b>~20g / 200g</b></li>
        <li>Whey protein (post-workout) <b>~24g / scoop</b></li>
        <li>Milk, legumes on the side</li>
      </ul>
    </div>
    <div class="nut-card">
      <h4>${IC.rice} Quality carbs</h4>
      <ul>
        <li>Rice (white or brown) — your base</li>
        <li>Oats at breakfast</li>
        <li>Pasta, potato, sweet potato</li>
        <li>Wholegrain or rye bread</li>
        <li>Bananas and mixed fruit</li>
        <li>Quinoa as an alternative</li>
      </ul>
    </div>`;
  const info = document.getElementById("nut-info");
  if (n.bmi < 18.5) {
    info.style.display = "block";
    info.innerHTML = `<div class="info-box-t">${IC.info} The lean lifter's #1 mistake</div>
      <div class="info-box-tx">Your BMI is ${n.bmi} — just below the healthy range. Without enough calories, no routine works. If you don't gain weight in 2 weeks, add 200 kcal/day. Weigh yourself fasted on the same weekday. Target: +0.3–0.5 kg per week.</div>`;
  } else { info.style.display = "none"; }
  document.getElementById("nut-disc").innerHTML = `${IC.info}<span>Estimates from the Mifflin-St Jeor formula — general guidance, not medical advice. If your low weight is unintentional, consider speaking with a doctor or dietitian.</span>`;
}
function saveProfile() {
  const g = id => document.getElementById(id);
  const newW = parseFloat(g("pf-weight").value) || state.profile.weight;
  const prevW = state.profile.weight;
  state.profile = {
    weight: newW, height: parseFloat(g("pf-height").value) || state.profile.height,
    age: parseInt(g("pf-age").value) || state.profile.age, sex: g("pf-sex").value,
    activity: parseFloat(g("pf-act").value), goal: g("pf-goal").value,
  };
  if (newW !== prevW) {
    const t = today(), ex = state.bodyweight.find(b => b.date === t);
    if (ex) ex.kg = newW; else state.bodyweight.push({ date: t, kg: newW });
    state.bodyweight.sort((a,b) => a.date.localeCompare(b.date));
  }
  saveState(); renderNutrition(); toast(IC.check + " Targets updated");
}

/* =========================================================================
   PROGRESSION
   ========================================================================= */
function buildProgression() {
  document.getElementById("prog-phases").innerHTML = PHASES.map(p =>
    `<div class="prog-ph"><div class="ph-week">${p.wk}</div><div class="ph-title">${p.t}</div><div class="ph-desc">${p.d}</div></div>`).join("");
  document.getElementById("pr-lift-tabs").innerHTML = TRACKED.map(t =>
    `<button class="pr-ltab${t.key===curPR?" active":""}" data-pr="${t.key}" onclick="showPR('${t.key}')">${t.label}</button>`).join("");
}
function showPR(key) {
  curPR = key;
  document.querySelectorAll(".pr-ltab").forEach(t => t.classList.toggle("active", t.dataset.pr === key));
  renderPR(key);
}
function renderPR(key) {
  const c = document.getElementById("pr-chart");
  const label = (TRACKED.find(t => t.key === key) || {}).label || key;
  let entries;
  if (key === "__bw") entries = state.bodyweight.map(b => ({ d: b.date, kg: b.kg }));
  else entries = Object.keys(state.logs).filter(d => state.logs[d].lifts && state.logs[d].lifts[key] && state.logs[d].lifts[key].kg != null)
        .sort().map(d => ({ d, kg: state.logs[d].lifts[key].kg }));
  if (!entries.length) {
    c.innerHTML = `<div class="pr-empty">Log ${key === "__bw" ? "your bodyweight in the Nutrition tab" : label + " in a workout"} to see your progression here.</div>`;
    return;
  }
  const max = Math.max(...entries.map(e => e.kg)), min = Math.min(...entries.map(e => e.kg)), range = max - min || 1;
  const latest = entries[entries.length - 1];
  const bars = entries.slice(-14).map(e => {
    const h = 18 + ((e.kg - min) / range) * 78;
    const [,m,d] = e.d.split("-").map(Number);
    return `<div class="pr-bar-w"><div class="pr-bar" style="height:${h}%"><div class="pr-bval">${e.kg}</div></div><div class="pr-bdate">${d}/${MONTHS_S[m-1]}</div></div>`;
  }).join("");
  c.innerHTML = `<div class="pr-head"><div class="pr-head-l">${label}</div><div class="pr-head-v">${latest.kg} kg <small>latest</small></div></div><div class="pr-bars">${bars}</div>`;
}

/* =========================================================================
   TOAST
   ========================================================================= */
let toastT;
function toast(msg) {
  const t = document.getElementById("toast");
  t.innerHTML = msg; t.classList.add("show");
  clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove("show"), 2600);
}

/* =========================================================================
   EXPORTS + INIT
   ========================================================================= */
window.switchTab = switchTab;
window.changeMonth = changeMonth;
window.openPanel = openPanel;
window.closePanel = closePanel;
window.handleOverlay = handleOverlay;
window.pickType = pickType;
window.saveLog = saveLog;
window.deleteLog = deleteLog;
window.showSub = showSub;
window.saveProfile = saveProfile;
window.showPR = showPR;

buildNav();
buildRoutine();
buildProgression();
buildExercises();
refresh();

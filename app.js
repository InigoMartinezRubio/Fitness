/* =========================================================================
   FORGE — Dumbbell Hypertrophy Tracker
   Beginner • 4-day Upper/Lower split • Equipment: 2x5kg + 2x8kg dumbbells
   Personal training app — no build step, pure HTML/CSS/JS.
   ========================================================================= */

"use strict";

/* ---------------------------------------------------------------------------
   ICONS (inline SVG, stroke-based — no emojis, no external requests)
   --------------------------------------------------------------------------- */
const ICONS = {
  dashboard: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="9"/><rect x="14" y="3" width="7" height="5"/><rect x="14" y="12" width="7" height="9"/><rect x="3" y="16" width="7" height="5"/></svg>',
  program: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
  progress: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>',
  nutrition: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3c0 1.5 1 2.5 1 2.5"/><path d="M11 7.5C9.5 6 7 6 5.5 7.5 3 10 3.5 15 6 18.5c1 1.4 2.2 2.5 3.5 2.5 1 0 1.4-.5 2.5-.5s1.5.5 2.5.5c1.3 0 2.5-1.1 3.5-2.5 1-1.4 1.6-2.9 1.8-4"/><path d="M17 8.5c1.5 0 3 1 3 3"/></svg>',
  tips: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/></svg>',
  dumbbell: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m6.5 6.5 11 11"/><path d="m21 21-1-1"/><path d="m3 3 1 1"/><path d="m18 22 4-4"/><path d="m2 6 4-4"/><path d="m3 10 7-7"/><path d="m14 21 7-7"/></svg>',
  flame: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 14"/></svg>',
  target: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></svg>',
  layers: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5"/><path d="m3 17 9 5 9-5"/></svg>',
  arrowRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
  rest: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/></svg>',
  plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',
  weight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="3"/><path d="M6.5 8h11l1.5 12H5z"/></svg>',
  reset: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>',
  edit: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>',
  info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>',
  bolt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
};

/* ---------------------------------------------------------------------------
   PROGRAM
   --------------------------------------------------------------------------- */
const PROGRAM = {
  meta: {
    title: "4-Day Upper / Lower",
    level: "Beginner",
    goal: "Muscle Growth",
    equipment: "2×5kg + 2×8kg dumbbells",
  },
  schedule: [
    { day: "Mon", short: "M", workout: "upperA" },
    { day: "Tue", short: "T", workout: "lowerA" },
    { day: "Wed", short: "W", workout: "rest" },
    { day: "Thu", short: "T", workout: "upperB" },
    { day: "Fri", short: "F", workout: "lowerB" },
    { day: "Sat", short: "S", workout: "rest" },
    { day: "Sun", short: "S", workout: "rest" },
  ],
  workouts: {
    upperA: {
      name: "Upper Body A", short: "Upper A",
      focus: "Chest • Shoulders • Triceps", accent: "blue", duration: "45–55 min",
      warmup: "5 min brisk walk or arm circles, then 1 light set of the floor press.",
      exercises: [
        { name: "Dumbbell Floor Press", load: "8kg ×2", sets: 3, reps: "10–12", rest: "75s",
          cue: "Lie on the floor, press both dumbbells up. The floor limits range so it is shoulder-friendly. Lower until your triceps lightly touch the ground." },
        { name: "Seated Shoulder Press", load: "8kg ×2", sets: 3, reps: "10–12", rest: "75s",
          cue: "Sit tall, press overhead without flaring the ribs. If 8kg gets too heavy late in a set, finish the reps with the 5kg pair." },
        { name: "Lateral Raise", load: "5kg ×2", sets: 3, reps: "14–18", rest: "45s",
          cue: "Lead with the elbows, raise to shoulder height. Light weight + high reps builds the side delts that widen your frame." },
        { name: "Incline Push-up", load: "Bodyweight", sets: 3, reps: "AMRAP", rest: "60s",
          cue: "Hands on a sofa or table to start; lower the surface as you get stronger. AMRAP = as many clean reps as possible." },
        { name: "Overhead Triceps Extension", load: "8kg ×1", sets: 3, reps: "12–15", rest: "60s",
          cue: "Hold one dumbbell with both hands behind the head. Keep elbows pointing forward, only the forearms move." },
        { name: "Dumbbell Curl", load: "8kg ×2", sets: 3, reps: "10–12", rest: "60s",
          cue: "Curl without swinging. Squeeze at the top, lower slowly over 2–3 seconds." },
      ],
    },
    lowerA: {
      name: "Lower Body A", short: "Lower A",
      focus: "Quads • Glutes • Calves", accent: "green", duration: "45–55 min",
      warmup: "5 min walk, 10 bodyweight squats, 10 glute bridges.",
      exercises: [
        { name: "Goblet Squat", load: "8kg ×1", sets: 4, reps: "12–15", rest: "75s",
          cue: "Hold one dumbbell at your chest, sit down between your knees, chest proud. Go as deep as your mobility allows." },
        { name: "Romanian Deadlift", load: "8kg ×2", sets: 3, reps: "12–15", rest: "75s",
          cue: "Soft knees, push hips back, slide the dumbbells down your thighs. Feel the hamstring stretch, then drive the hips forward." },
        { name: "Reverse Lunge", load: "8kg ×2", sets: 3, reps: "10 / leg", rest: "60s",
          cue: "Step back into a lunge, front shin vertical. Stepping back is easier on the knees than stepping forward." },
        { name: "Glute Bridge", load: "8kg ×1", sets: 3, reps: "15–20", rest: "45s",
          cue: "Dumbbell across the hips, drive through the heels, squeeze the glutes hard for a second at the top." },
        { name: "Standing Calf Raise", load: "8kg ×2", sets: 4, reps: "18–22", rest: "40s",
          cue: "Rise onto the balls of the feet, pause at the top, lower under control for a full stretch." },
      ],
    },
    upperB: {
      name: "Upper Body B", short: "Upper B",
      focus: "Back • Rear Delts • Biceps", accent: "purple", duration: "45–55 min",
      warmup: "5 min walk, 10 band/bodyweight rows or arm swings.",
      exercises: [
        { name: "Bent-over Row", load: "8kg ×2", sets: 4, reps: "10–12", rest: "75s",
          cue: "Hinge at the hips ~45°, flat back, pull the dumbbells to your waist, squeeze the shoulder blades together." },
        { name: "Single-arm Row", load: "8kg ×1", sets: 3, reps: "10–12 / arm", rest: "60s",
          cue: "One hand braced on a chair, row the dumbbell to your hip. Lets you use a full range on each side." },
        { name: "Rear Delt Fly", load: "5kg ×2", sets: 3, reps: "15–18", rest: "45s",
          cue: "Hinge forward, raise the dumbbells out to the sides with soft elbows. Targets the rear delts for balanced shoulders." },
        { name: "Pike Push-up", load: "Bodyweight", sets: 3, reps: "8–12", rest: "60s",
          cue: "Hips high in an inverted V, lower the crown of your head toward the floor. A bodyweight shoulder builder." },
        { name: "Hammer Curl", load: "8kg ×2", sets: 3, reps: "10–12", rest: "60s",
          cue: "Palms facing each other. Hits the brachialis and forearms for thicker-looking arms." },
        { name: "Dumbbell Shrug", load: "8kg ×2", sets: 3, reps: "15–18", rest: "45s",
          cue: "Lift the shoulders straight up toward the ears, pause, lower slowly. Builds the upper traps." },
      ],
    },
    lowerB: {
      name: "Lower Body B", short: "Lower B",
      focus: "Glutes • Hamstrings • Core", accent: "orange", duration: "45–55 min",
      warmup: "5 min walk, 10 bodyweight split squats per leg.",
      exercises: [
        { name: "Bulgarian Split Squat", load: "8kg ×2", sets: 3, reps: "10 / leg", rest: "75s",
          cue: "Rear foot on a chair, drop straight down through the front leg. The best leg builder you can do with light weights." },
        { name: "Sumo Squat", load: "8kg ×1", sets: 3, reps: "15–20", rest: "60s",
          cue: "Wide stance, toes out, hold one dumbbell between the legs. Targets the inner thighs and glutes." },
        { name: "Single-leg RDL", load: "5kg ×2", sets: 3, reps: "10 / leg", rest: "60s",
          cue: "Balance on one leg, hinge forward reaching the dumbbells down. Builds hamstrings, glutes and balance." },
        { name: "Walking / Static Lunge", load: "8kg ×2", sets: 3, reps: "12 / leg", rest: "60s",
          cue: "Long steps, control the descent, keep the torso upright throughout." },
        { name: "Seated Calf Raise", load: "8kg ×2", sets: 3, reps: "20–25", rest: "40s",
          cue: "Dumbbells resting on the knees while seated, raise the heels. Hits the deeper soleus muscle." },
        { name: "Plank", load: "Bodyweight", sets: 3, reps: "30–45s", rest: "45s",
          cue: "Forearms down, body in a straight line, brace the abs. Add a few seconds each week." },
      ],
    },
  },
  rest: {
    name: "Rest & Recovery", short: "Rest",
    focus: "Light movement • Sleep • Eat",
    tips: [
      "Take a 20–40 min walk to aid recovery and add easy activity.",
      "5–10 minutes of light stretching keeps you mobile.",
      "Recovery is when muscle is actually built — protect your sleep and hit your protein.",
    ],
  },
};

/* ---------------------------------------------------------------------------
   TIPS
   --------------------------------------------------------------------------- */
const TIPS = [
  { t: "Progressive overload", d: "With fixed weights, get stronger by adding reps, adding a set, slowing the lowering phase, or shortening rest. When the top of a rep range feels easy on every set, that is your signal to make the exercise harder." },
  { t: "Make light weights hard", d: "Your 5kg and 8kg pairs are plenty if you use tempo (3 seconds down), pauses at the hardest point, and high reps. A slow, controlled set of 15 beats a sloppy set of 8." },
  { t: "Train close to failure", d: "For growth, end most sets with 1–3 reps left in the tank. If you could have done 5+ more, the set was too easy — add reps or slow the tempo." },
  { t: "Eat in a surplus", d: "You cannot build much muscle without enough food, especially as a lighter lifter. Aim to eat slightly more than you burn — see the Nutrition tab for your numbers." },
  { t: "Protein first", d: "Aim for roughly 1.6–2.2g of protein per kg of bodyweight daily. It is the single biggest nutrition lever for building muscle." },
  { t: "Sleep is anabolic", d: "Target 7–9 hours. Poor sleep lowers strength, recovery and the hormones that drive muscle growth." },
  { t: "Warm up smart", d: "5 minutes of light cardio plus a couple of easy sets of your first exercise. Cold muscles perform worse and injure easier." },
  { t: "Be consistent, not perfect", d: "Four solid sessions every week for months beats occasional heroic workouts. Showing up is 80% of the result." },
];

/* =========================================================================
   STATE (persisted to localStorage)
   ========================================================================= */
const STORE_KEY = "forge.v2";

function defaultState() {
  return {
    profile: { weight: 58, height: 179, age: 28, sex: "male", activity: 1.5, goal: "gain" },
    logs: {},
    bodyweight: [],
    created: todayISO(),
  };
}
function loadState() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (!raw) {
      // migrate from v1 if present
      const old = localStorage.getItem("forge.v1");
      if (old) { const o = JSON.parse(old); const d = defaultState(); d.logs = o.logs||{}; d.bodyweight = o.bodyweight||[]; return d; }
      return defaultState();
    }
    const parsed = JSON.parse(raw);
    const d = defaultState();
    return { ...d, ...parsed, profile: { ...d.profile, ...(parsed.profile||{}) } };
  } catch (e) { return defaultState(); }
}
function saveState() { localStorage.setItem(STORE_KEY, JSON.stringify(state)); }
let state = loadState();

/* =========================================================================
   DATE HELPERS
   ========================================================================= */
function todayISO() { return new Date().toISOString().slice(0, 10); }
function dateISO(d) { return d.toISOString().slice(0, 10); }
function weekdayIndex(d) { return (d.getDay() + 6) % 7; }
function addDays(d, n) { const x = new Date(d); x.setDate(x.getDate() + n); return x; }
function startOfWeek(d) { return addDays(d, -weekdayIndex(d)); }
function prettyDate(iso) {
  return new Date(iso + "T00:00:00").toLocaleDateString(undefined, { weekday: "long", month: "short", day: "numeric" });
}

/* =========================================================================
   STATS
   ========================================================================= */
function todaysScheduled() { return PROGRAM.schedule[weekdayIndex(new Date())]; }
function isWorkoutDoneOn(iso) { return !!(state.logs[iso] && state.logs[iso].done); }
function currentStreak() {
  let streak = 0, d = new Date();
  for (let i = 0; i < 400; i++) {
    const iso = dateISO(d);
    const sched = PROGRAM.schedule[weekdayIndex(d)];
    if (sched.workout === "rest") { d = addDays(d, -1); continue; }
    if (isWorkoutDoneOn(iso)) { streak++; d = addDays(d, -1); }
    else if (iso === todayISO()) { d = addDays(d, -1); }
    else break;
  }
  return streak;
}
function workoutsThisWeek() {
  const start = startOfWeek(new Date());
  let done = 0, total = 0;
  for (let i = 0; i < 7; i++) {
    if (PROGRAM.schedule[i].workout !== "rest") { total++; if (isWorkoutDoneOn(dateISO(addDays(start, i)))) done++; }
  }
  return { done, total };
}
function totalWorkouts() { return Object.values(state.logs).filter(l => l.done).length; }
function totalVolume() {
  let v = 0;
  for (const log of Object.values(state.logs)) {
    if (!log.sets) continue;
    for (const arr of Object.values(log.sets)) for (const s of arr) v += (Number(s.reps)||0) * (Number(s.weight)||0);
  }
  return v;
}
function workoutCompletion(id) {
  const iso = currentISOForWorkout(id);
  const log = state.logs[iso];
  const total = PROGRAM.workouts[id].exercises.length;
  const done = log ? log.completed.length : 0;
  return { done, total, pct: total ? done/total : 0, finished: !!(log && log.done) };
}

/* =========================================================================
   NUTRITION
   ========================================================================= */
function nutrition() {
  const p = state.profile;
  const s = p.sex === "female" ? -161 : 5;
  const bmr = 10 * p.weight + 6.25 * p.height - 5 * p.age + s;
  const tdee = bmr * p.activity;
  const adj = p.goal === "gain" ? 400 : p.goal === "lose" ? -400 : 0;
  const calories = Math.round((tdee + adj) / 10) * 10;
  const protein = Math.round(p.weight * 2.0);
  const fat = Math.round(p.weight * 0.9);
  const carbs = Math.max(0, Math.round((calories - protein * 4 - fat * 9) / 4));
  const bmi = p.weight / Math.pow(p.height / 100, 2);
  return { bmr: Math.round(bmr), tdee: Math.round(tdee), calories, protein, fat, carbs, bmi };
}
function bmiBand(bmi) {
  if (bmi < 18.5) return { label: "Underweight", cls: "warn" };
  if (bmi < 25)   return { label: "Healthy", cls: "ok" };
  if (bmi < 30)   return { label: "Overweight", cls: "warn" };
  return { label: "Obese", cls: "warn" };
}

/* =========================================================================
   UI HELPERS
   ========================================================================= */
let RING_ID = 0;
function ring(pct, opts = {}) {
  const size = opts.size || 132, stroke = opts.stroke || 11;
  const r = size / 2 - stroke / 2;
  const circ = 2 * Math.PI * r;
  const off = circ * (1 - Math.max(0, Math.min(1, pct)));
  const id = "rg" + (RING_ID++);
  const c1 = opts.from || "var(--accent)", c2 = opts.to || "var(--accent-2)";
  return `<div class="ring" style="width:${size}px;height:${size}px">
    <svg viewBox="0 0 ${size} ${size}" class="ring__svg">
      <defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${c1}"/><stop offset="100%" stop-color="${c2}"/>
      </linearGradient></defs>
      <circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke="var(--ring-track)" stroke-width="${stroke}"/>
      <circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke="url(#${id})" stroke-width="${stroke}"
        stroke-linecap="round" stroke-dasharray="${circ}" stroke-dashoffset="${off}"
        transform="rotate(-90 ${size/2} ${size/2})" class="ring__bar"/>
    </svg>
    <div class="ring__center">${opts.center || ""}</div>
  </div>`;
}
function bar(pct, color) {
  return `<div class="mbar"><span style="width:${Math.min(100,pct*100)}%;background:${color}"></span></div>`;
}

/* =========================================================================
   ROUTER + RENDER
   ========================================================================= */
const app = document.getElementById("view");
const routes = { dashboard: renderDashboard, program: renderProgram, progress: renderProgress, nutrition: renderNutrition, tips: renderTips };
let activeWorkoutId = null;

function paint(html) { app.innerHTML = html; app.classList.remove("view--in"); void app.offsetWidth; app.classList.add("view--in"); }

function navigate(route) {
  document.querySelectorAll(".nav-item").forEach(n => n.classList.toggle("active", n.dataset.route === route));
  activeWorkoutId = null;
  (routes[route] || renderDashboard)();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ---------- Dashboard ---------- */
function renderDashboard() {
  const sched = todaysScheduled();
  const wk = workoutsThisWeek();
  const streak = currentStreak();
  const isRest = sched.workout === "rest";
  const w = isRest ? PROGRAM.rest : PROGRAM.workouts[sched.workout];
  const doneToday = !isRest && isWorkoutDoneOn(todayISO());
  const greeting = (() => { const h = new Date().getHours(); return h < 12 ? "Good morning" : h < 18 ? "Good afternoon" : "Good evening"; })();
  const wkPct = wk.total ? wk.done / wk.total : 0;

  paint(`
    <section class="hero">
      <div class="hero__bg"></div>
      <div class="hero__content">
        <div class="hero__left">
          <p class="hero__eyebrow">${greeting} • ${new Date().toLocaleDateString(undefined,{weekday:"long", day:"numeric", month:"long"})}</p>
          <h1 class="hero__title">${isRest ? "Recovery Day" : "Time to train"}</h1>
          <p class="hero__sub">${isRest ? "No lifting scheduled. Walk, stretch, eat well, sleep." : w.name + " — " + w.focus}</p>
          ${isRest ? "" : `<button class="btn btn--primary btn--lg" onclick="openWorkout('${sched.workout}')">${doneToday ? "Review session" : "Start session"} ${ICONS.arrowRight}</button>`}
        </div>
        <div class="hero__ring">
          ${ring(wkPct, { size: 150, stroke: 13, center: `<span class="ring__num">${wk.done}<small>/${wk.total}</small></span><span class="ring__lab">this week</span>` })}
        </div>
      </div>
    </section>

    <section class="stat-grid">
      ${statCard(ICONS.flame, streak, "day streak", "blue")}
      ${statCard(ICONS.dumbbell, totalWorkouts(), "sessions done", "green")}
      ${statCard(ICONS.weight, formatVolume(totalVolume()), "volume lifted", "purple")}
      ${statCard(ICONS.bolt, Math.round(wkPct*100) + "%", "week complete", "orange")}
    </section>

    ${coachNote()}

    <section class="block">
      <div class="block__head"><h3>This Week</h3><span class="block__meta">${PROGRAM.meta.title}</span></div>
      <div class="week-row">${renderWeekStrip()}</div>
    </section>
  `);
}

function coachNote() {
  const n = nutrition();
  if (n.bmi >= 18.5) return "";
  return `<section class="coach">
    <span class="coach__icon">${ICONS.info}</span>
    <div>
      <strong>Coach note</strong>
      <p>Your BMI is ${n.bmi.toFixed(1)} — a little lean. Lifting is only half the job: to build muscle, aim for about <b>${n.calories} kcal</b> and <b>${n.protein}g protein</b> a day. Open the Nutrition tab for the full breakdown.</p>
    </div>
    <button class="btn btn--ghost btn--sm" onclick="navigate('nutrition')">View ${ICONS.arrowRight}</button>
  </section>`;
}

function statCard(icon, value, label, accent) {
  return `<div class="stat accent-${accent}"><div class="stat__icon">${icon}</div>
    <div class="stat__value">${value}</div><div class="stat__label">${label}</div></div>`;
}
function formatVolume(v) {
  if (v >= 1000) return (v/1000).toFixed(1).replace(/\.0$/,"") + "t";
  return v + "kg";
}
function renderWeekStrip() {
  const start = startOfWeek(new Date());
  const todayIdx = weekdayIndex(new Date());
  return PROGRAM.schedule.map((s, i) => {
    const d = addDays(start, i), iso = dateISO(d);
    const isRest = s.workout === "rest";
    const done = !isRest && isWorkoutDoneOn(iso);
    const w = isRest ? null : PROGRAM.workouts[s.workout];
    const cls = ["week-day"];
    if (i === todayIdx) cls.push("week-day--today");
    if (done) cls.push("week-day--done");
    if (isRest) cls.push("week-day--rest"); else cls.push("accent-" + w.accent);
    return `<div class="${cls.join(" ")}" ${isRest?"":`onclick="openWorkout('${s.workout}')"`}>
        <span class="week-day__name">${s.day}</span>
        <span class="week-day__dot">${done ? ICONS.check : isRest ? ICONS.rest : ICONS.dumbbell}</span>
        <span class="week-day__label">${isRest ? "Rest" : w.short}</span>
      </div>`;
  }).join("");
}

/* ---------- Program ---------- */
function renderProgram() {
  if (activeWorkoutId) return renderWorkoutDetail(activeWorkoutId);
  const ids = ["upperA","lowerA","upperB","lowerB"];
  paint(`
    <header class="page-head">
      <p class="eyebrow">${PROGRAM.meta.level} • ${PROGRAM.meta.goal}</p>
      <h1>${PROGRAM.meta.title}</h1>
      <p class="page-sub">Train Mon, Tue, Thu, Fri. Rest Wed, Sat, Sun. Equipment: ${PROGRAM.meta.equipment}.</p>
    </header>
    <section class="program-grid">
      ${ids.map(id => {
        const w = PROGRAM.workouts[id];
        const comp = workoutCompletion(id);
        return `<button class="program-card accent-${w.accent}" onclick="openWorkout('${id}')">
          <div class="program-card__ring">${ring(comp.pct, { size: 56, stroke: 6, center: `<span class="pc-ring-icon">${comp.finished ? ICONS.check : ICONS.dumbbell}</span>` })}</div>
          <div class="program-card__body">
            <h2>${w.name}</h2>
            <p>${w.focus}</p>
            <div class="program-card__foot">
              <span>${ICONS.layers} ${w.exercises.length} exercises</span>
              <span>${ICONS.clock} ${w.duration}</span>
            </div>
          </div>
          <span class="program-card__go">${ICONS.arrowRight}</span>
        </button>`;
      }).join("")}
    </section>
  `);
}

function openWorkout(id) {
  activeWorkoutId = id;
  document.querySelectorAll(".nav-item").forEach(n => n.classList.toggle("active", n.dataset.route === "program"));
  renderWorkoutDetail(id);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function currentISOForWorkout(workoutId) {
  const start = startOfWeek(new Date());
  const dayIdx = PROGRAM.schedule.findIndex(s => s.workout === workoutId);
  return dateISO(addDays(start, dayIdx));
}

function renderWorkoutDetail(id) {
  const w = PROGRAM.workouts[id];
  const iso = currentISOForWorkout(id);
  const log = state.logs[iso] || { workoutId: id, completed: [], sets: {}, done: false };
  const comp = workoutCompletion(id);

  paint(`
    <header class="page-head page-head--detail accent-${w.accent}">
      <button class="btn btn--ghost btn--sm" onclick="navigate('program')">${backIcon()} Program</button>
      <div class="detail-hero">
        <div>
          <p class="eyebrow accent-text-${w.accent}">${w.focus}</p>
          <h1>${w.name}</h1>
          <p class="page-sub">${ICONS.clock} ${w.duration} &nbsp;•&nbsp; ${ICONS.layers} ${w.exercises.length} exercises</p>
        </div>
        <div class="detail-hero__ring">${ring(comp.pct, { size: 86, stroke: 8, center: `<span class="ring__num ring__num--sm">${comp.done}<small>/${comp.total}</small></span>` })}</div>
      </div>
      <div class="warmup">${ICONS.bolt}<span><b>Warm-up:</b> ${w.warmup}</span></div>
    </header>

    <section class="exercise-list">
      ${w.exercises.map((ex, i) => renderExercise(w, ex, i, log)).join("")}
    </section>

    <div class="finish-bar">
      <div class="finish-bar__progress">${log.completed.length}/${w.exercises.length} done</div>
      <button class="btn ${log.done ? "btn--done" : "btn--primary"}" onclick="toggleWorkoutDone('${id}','${iso}')">
        ${log.done ? `${ICONS.check} Completed` : "Finish workout"}
      </button>
    </div>
  `);
}

function renderExercise(w, ex, i, log) {
  const done = log.completed.includes(i);
  const sets = log.sets[i] || [];
  const setRows = Array.from({ length: ex.sets }).map((_, s) => {
    const v = sets[s] || {};
    return `<div class="set-row">
      <span class="set-row__n">${s+1}</span>
      <label>Reps<input type="number" inputmode="numeric" min="0" value="${v.reps ?? ""}" placeholder="${ex.reps}"
        onchange="logSet('${log.workoutId}',${i},${s},'reps',this.value)"></label>
      <label>Kg<input type="number" inputmode="decimal" min="0" step="0.5" value="${v.weight ?? ""}" placeholder="${defaultKg(ex.load)}"
        onchange="logSet('${log.workoutId}',${i},${s},'weight',this.value)"></label>
    </div>`;
  }).join("");

  return `<article class="exercise accent-${w.accent} ${done ? "exercise--done" : ""}">
    <div class="exercise__head">
      <button class="exercise__check ${done?"is-done":""}" onclick="toggleExercise('${log.workoutId}',${i})" aria-label="Mark done">${ICONS.check}</button>
      <div class="exercise__title">
        <h3>${ex.name}</h3>
        <div class="exercise__tags">
          <span class="tag tag--load">${ICONS.dumbbell} ${ex.load}</span>
          <span class="tag">${ex.sets} × ${ex.reps}</span>
          <span class="tag">${ICONS.clock} ${ex.rest}</span>
        </div>
      </div>
    </div>
    <p class="exercise__cue">${ex.cue}</p>
    <details class="exercise__log">
      <summary>${ICONS.plus} Log sets</summary>
      <div class="set-grid">${setRows}</div>
    </details>
  </article>`;
}

function defaultKg(load) { const m = load.match(/(\d+)kg/); return m ? m[1] : ""; }
function backIcon() { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>'; }

/* ---------- Mutations ---------- */
function ensureLog(workoutId, iso) {
  if (!state.logs[iso]) state.logs[iso] = { workoutId, completed: [], sets: {}, done: false };
  return state.logs[iso];
}
function toggleExercise(workoutId, i) {
  const log = ensureLog(workoutId, currentISOForWorkout(workoutId));
  const idx = log.completed.indexOf(i);
  if (idx === -1) log.completed.push(i); else log.completed.splice(idx, 1);
  saveState(); renderWorkoutDetail(workoutId);
}
function logSet(workoutId, exIndex, setIndex, field, value) {
  const log = ensureLog(workoutId, currentISOForWorkout(workoutId));
  if (!log.sets[exIndex]) log.sets[exIndex] = [];
  if (!log.sets[exIndex][setIndex]) log.sets[exIndex][setIndex] = {};
  log.sets[exIndex][setIndex][field] = value;
  saveState();
}
function toggleWorkoutDone(workoutId, iso) {
  const log = ensureLog(workoutId, iso);
  log.done = !log.done;
  saveState(); renderWorkoutDetail(workoutId);
}

/* ---------- Nutrition ---------- */
function renderNutrition() {
  const n = nutrition();
  const p = state.profile;
  const band = bmiBand(n.bmi);
  const pCal = n.protein * 4, cCal = n.carbs * 4, fCal = n.fat * 9;
  const tot = pCal + cCal + fCal || 1;
  const goalLabel = { gain: "Lean muscle gain (+400 kcal)", maintain: "Maintain weight", lose: "Fat loss (−400 kcal)" }[p.goal];

  paint(`
    <header class="page-head">
      <p class="eyebrow">Fuel the work</p>
      <h1>Nutrition</h1>
      <p class="page-sub">Personalized targets for ${goalLabel.toLowerCase()}.</p>
    </header>

    <section class="fuel-hero accent-green">
      <div class="fuel-hero__main">
        <span class="fuel-hero__num">${n.calories.toLocaleString()}</span>
        <span class="fuel-hero__unit">kcal / day</span>
      </div>
      <div class="fuel-hero__macros">
        <div class="macro">
          <div class="macro__top"><span>Protein</span><b>${n.protein} g</b></div>
          ${bar(pCal/tot, "var(--blue)")}
        </div>
        <div class="macro">
          <div class="macro__top"><span>Carbs</span><b>${n.carbs} g</b></div>
          ${bar(cCal/tot, "var(--green)")}
        </div>
        <div class="macro">
          <div class="macro__top"><span>Fat</span><b>${n.fat} g</b></div>
          ${bar(fCal/tot, "var(--orange)")}
        </div>
      </div>
    </section>

    <section class="stat-grid stat-grid--3">
      ${statCard(ICONS.flame, n.bmr.toLocaleString(), "BMR (at rest)", "purple")}
      ${statCard(ICONS.bolt, n.tdee.toLocaleString(), "maintenance", "blue")}
      ${statCard(ICONS.target, n.bmi.toFixed(1), "BMI · " + band.label, band.cls === "ok" ? "green" : "orange")}
    </section>

    <section class="panel">
      <div class="panel__head"><h3>Your profile</h3>
        <button class="btn btn--ghost btn--sm" onclick="toggleProfileEdit()">${ICONS.edit} Edit</button></div>
      <div id="profileBox">${renderProfileView(p)}</div>
    </section>

    <section class="panel">
      <h3>How to hit your protein</h3>
      <p class="panel__note">${n.protein}g is very doable. Rough examples per day:</p>
      <ul class="foodlist">
        <li><span>3 eggs</span><b>~18 g</b></li>
        <li><span>Greek yogurt (200g)</span><b>~20 g</b></li>
        <li><span>Chicken breast (150g)</span><b>~35 g</b></li>
        <li><span>Tin of tuna or 150g fish</span><b>~30 g</b></li>
        <li><span>Scoop of whey or 500ml milk</span><b>~17–24 g</b></li>
      </ul>
      <p class="panel__note">Spread protein across 3–4 meals for best results. Eat enough carbs to fuel training and recovery.</p>
    </section>

    <p class="disclaimer">${ICONS.info} These are estimates from the Mifflin-St Jeor formula, not medical advice. If your low weight is unintentional, consider speaking with a doctor or dietitian.</p>
  `);
}

function renderProfileView(p) {
  const act = { 1.2: "Sedentary", 1.375: "Light", 1.5: "Moderate", 1.725: "Very active" }[p.activity] || "Moderate";
  const goal = { gain: "Build muscle", maintain: "Maintain", lose: "Lose fat" }[p.goal];
  return `<div class="profile-grid">
    <div class="profile-item"><span>Weight</span><b>${p.weight} kg</b></div>
    <div class="profile-item"><span>Height</span><b>${p.height} cm</b></div>
    <div class="profile-item"><span>Age</span><b>${p.age}</b></div>
    <div class="profile-item"><span>Sex</span><b>${p.sex==="female"?"Female":"Male"}</b></div>
    <div class="profile-item"><span>Activity</span><b>${act}</b></div>
    <div class="profile-item"><span>Goal</span><b>${goal}</b></div>
  </div>`;
}
function toggleProfileEdit() {
  const p = state.profile;
  document.getElementById("profileBox").innerHTML = `
    <form id="profForm" class="prof-form">
      <label>Weight (kg)<input name="weight" type="number" step="0.5" value="${p.weight}" required></label>
      <label>Height (cm)<input name="height" type="number" value="${p.height}" required></label>
      <label>Age<input name="age" type="number" value="${p.age}" required></label>
      <label>Sex<select name="sex"><option value="male"${p.sex==="male"?" selected":""}>Male</option><option value="female"${p.sex==="female"?" selected":""}>Female</option></select></label>
      <label>Activity<select name="activity">
        <option value="1.2"${p.activity==1.2?" selected":""}>Sedentary</option>
        <option value="1.375"${p.activity==1.375?" selected":""}>Light</option>
        <option value="1.5"${p.activity==1.5?" selected":""}>Moderate (4×/wk)</option>
        <option value="1.725"${p.activity==1.725?" selected":""}>Very active</option>
      </select></label>
      <label>Goal<select name="goal">
        <option value="gain"${p.goal==="gain"?" selected":""}>Build muscle</option>
        <option value="maintain"${p.goal==="maintain"?" selected":""}>Maintain</option>
        <option value="lose"${p.goal==="lose"?" selected":""}>Lose fat</option>
      </select></label>
      <div class="prof-form__actions">
        <button type="submit" class="btn btn--primary btn--sm">Save</button>
        <button type="button" class="btn btn--ghost btn--sm" onclick="renderNutrition()">Cancel</button>
      </div>
    </form>`;
  document.getElementById("profForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    state.profile = {
      weight: parseFloat(f.get("weight")), height: parseFloat(f.get("height")),
      age: parseInt(f.get("age")), sex: f.get("sex"),
      activity: parseFloat(f.get("activity")), goal: f.get("goal"),
    };
    saveState(); renderNutrition();
  });
}

/* ---------- Progress ---------- */
function renderProgress() {
  const wk = workoutsThisWeek();
  paint(`
    <header class="page-head">
      <p class="eyebrow">Your trajectory</p>
      <h1>Progress</h1>
    </header>
    <section class="stat-grid">
      ${statCard(ICONS.dumbbell, totalWorkouts(), "sessions done", "green")}
      ${statCard(ICONS.flame, currentStreak(), "day streak", "blue")}
      ${statCard(ICONS.target, `${wk.done}/${wk.total}`, "this week", "purple")}
      ${statCard(ICONS.weight, formatVolume(totalVolume()), "volume lifted", "orange")}
    </section>
    <section class="panel"><h3>Sessions — last 8 weeks</h3><canvas id="sessionsChart" height="220"></canvas></section>
    <section class="panel">
      <div class="panel__head"><h3>Bodyweight</h3>
        <form id="bwForm" class="bw-form"><input type="number" step="0.1" min="0" id="bwInput" placeholder="kg" required>
          <button class="btn btn--primary btn--sm" type="submit">${ICONS.plus} Log</button></form></div>
      ${state.bodyweight.length ? `<canvas id="bwChart" height="220"></canvas>` : `<p class="empty">Log your weight regularly to see the trend here.</p>`}
    </section>
    <section class="panel panel--danger">
      <h3>Data</h3>
      <p class="panel__note">Everything is stored privately in this browser only. Nothing is sent anywhere.</p>
      <button class="btn btn--ghost btn--sm" onclick="resetData()">${ICONS.reset} Reset all progress</button>
    </section>
  `);
  drawSessionsChart();
  if (state.bodyweight.length) drawBodyweightChart();
  document.getElementById("bwForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const kg = parseFloat(document.getElementById("bwInput").value);
    if (!kg) return;
    const today = todayISO();
    const existing = state.bodyweight.find(b => b.date === today);
    if (existing) existing.kg = kg; else state.bodyweight.push({ date: today, kg });
    state.bodyweight.sort((a,b)=>a.date.localeCompare(b.date));
    saveState(); renderProgress();
  });
}
function weeklySessionCounts(weeks = 8) {
  const labels = [], data = [];
  const thisStart = startOfWeek(new Date());
  for (let w = weeks - 1; w >= 0; w--) {
    const ws = addDays(thisStart, -7 * w);
    let count = 0;
    for (let i = 0; i < 7; i++) if (isWorkoutDoneOn(dateISO(addDays(ws, i)))) count++;
    labels.push(ws.toLocaleDateString(undefined, { month: "short", day: "numeric" }));
    data.push(count);
  }
  return { labels, data };
}
function chartColors() {
  const cs = getComputedStyle(document.documentElement);
  return {
    accent: cs.getPropertyValue("--accent").trim() || "#5b8cff",
    accent2: cs.getPropertyValue("--accent-2").trim() || "#22d3a8",
    text: cs.getPropertyValue("--text-dim").trim() || "#8b93a7",
    grid: cs.getPropertyValue("--border").trim() || "#232838",
  };
}
let _sessionsChart, _bwChart;
function drawSessionsChart() {
  const ctx = document.getElementById("sessionsChart");
  if (!ctx || typeof Chart === "undefined") return;
  const { labels, data } = weeklySessionCounts(8);
  const c = chartColors();
  const g = ctx.getContext("2d").createLinearGradient(0,0,0,220);
  g.addColorStop(0, c.accent); g.addColorStop(1, c.accent2);
  if (_sessionsChart) _sessionsChart.destroy();
  _sessionsChart = new Chart(ctx, {
    type: "bar",
    data: { labels, datasets: [{ data, backgroundColor: g, borderRadius: 8, maxBarThickness: 34 }] },
    options: baseChartOptions(c, 4),
  });
}
function drawBodyweightChart() {
  const ctx = document.getElementById("bwChart");
  if (!ctx || typeof Chart === "undefined") return;
  const c = chartColors();
  const labels = state.bodyweight.map(b => new Date(b.date+"T00:00:00").toLocaleDateString(undefined,{month:"short",day:"numeric"}));
  const data = state.bodyweight.map(b => b.kg);
  if (_bwChart) _bwChart.destroy();
  _bwChart = new Chart(ctx, {
    type: "line",
    data: { labels, datasets: [{ data, borderColor: c.accent2, backgroundColor: "transparent",
      tension: 0.35, borderWidth: 3, pointRadius: 4, pointBackgroundColor: c.accent2 }] },
    options: baseChartOptions(c),
  });
}
function baseChartOptions(c, suggestedMax) {
  return {
    responsive: true, maintainAspectRatio: false,
    plugins: { legend: { display: false }, tooltip: { displayColors: false } },
    scales: {
      x: { grid: { display: false }, ticks: { color: c.text, font: { size: 11 } } },
      y: { beginAtZero: true, suggestedMax, grid: { color: c.grid }, ticks: { color: c.text, font: { size: 11 }, precision: 0 } },
    },
  };
}
function resetData() {
  if (confirm("Reset all progress, logs and bodyweight history? This cannot be undone.")) {
    const profile = state.profile;
    state = defaultState(); state.profile = profile;
    saveState(); navigate("dashboard");
  }
}

/* ---------- Tips ---------- */
function renderTips() {
  paint(`
    <header class="page-head">
      <p class="eyebrow">Train smarter</p>
      <h1>Tips & Principles</h1>
      <p class="page-sub">The few things that drive almost all of your results.</p>
    </header>
    <section class="tips-grid">
      ${TIPS.map((tip,i)=>`<article class="tip">
        <span class="tip__num">${String(i+1).padStart(2,"0")}</span>
        <h3>${tip.t}</h3><p>${tip.d}</p>
      </article>`).join("")}
    </section>
  `);
}

/* =========================================================================
   BOOT
   ========================================================================= */
function buildNav() {
  const items = [
    { route: "dashboard", label: "Today", icon: ICONS.dashboard },
    { route: "program", label: "Program", icon: ICONS.program },
    { route: "progress", label: "Progress", icon: ICONS.progress },
    { route: "nutrition", label: "Nutrition", icon: ICONS.nutrition },
    { route: "tips", label: "Tips", icon: ICONS.tips },
  ];
  document.querySelectorAll("[data-nav]").forEach(nav => {
    nav.innerHTML = items.map(it =>
      `<button class="nav-item${it.route==="dashboard"?" active":""}" data-route="${it.route}" onclick="navigate('${it.route}')">
        <span class="nav-item__icon">${it.icon}</span><span class="nav-item__label">${it.label}</span>
      </button>`).join("");
  });
}

window.navigate = navigate;
window.openWorkout = openWorkout;
window.toggleExercise = toggleExercise;
window.logSet = logSet;
window.toggleWorkoutDone = toggleWorkoutDone;
window.resetData = resetData;
window.toggleProfileEdit = toggleProfileEdit;
window.renderNutrition = renderNutrition;

buildNav();
navigate("dashboard");

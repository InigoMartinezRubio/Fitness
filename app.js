/* =========================================================================
   FORGE — Muscle Protocol  ·  Bilingual (EN / ES)
   Beginner · 4-day Upper/Lower · 2x5kg + 2x8kg dumbbells
   Pure HTML/CSS/JS · localStorage · no build step.
   ========================================================================= */
"use strict";

/* ---------- language ---------- */
let LANG = "en";
try { const s = localStorage.getItem("forge_lang"); if (s === "en" || s === "es") LANG = s; } catch (e) {}
function L(o) { return (o && typeof o === "object" && o.en !== undefined) ? (o[LANG] !== undefined ? o[LANG] : o.en) : o; }
function t(k) { const s = STRINGS[LANG]; return (s && s[k] !== undefined) ? s[k] : (STRINGS.en[k] !== undefined ? STRINGS.en[k] : k); }
function tReps(r) { if (LANG !== "es") return r; return r.replace("/ leg", "/ pierna").replace("/ arm", "/ brazo").replace("AMRAP", "máx."); }
function tEquip(e) { if (LANG !== "es") return e; return e.replace("Bodyweight + raised surface", "Peso corporal + superficie elevada").replace("Bodyweight", "Peso corporal"); }

/* ---------- icons ---------- */
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
  book: svg('<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>'),
};

/* ---------- UI strings ---------- */
const STRINGS = {
  en: {
    tagPlan: "Personalized plan", yrs: "yrs",
    streakLbl: "sessions<br>in a row",
    stTotal: "Total workouts", stWeek: "This week", stBest: "Best streak", stConsist: "Consistency",
    curStreak: "Current streak", msWeek: "This week", msBest: "Best streak", msTotal: "Total",
    recent: "Recent sessions", noSessions: "No sessions logged yet",
    logToday: "Log today's workout", logged: "logged",
    sub0a: "Log your first workout", sub0b: "Train again to rebuild your streak",
    sub1: "Good start — keep the rhythm", sub2: "in a row · looking strong", sub3: "sessions · unstoppable",
    subWeekly: "Weekly plan", subPrinciples: "Principles",
    secNutrition: "Macros & fuel", sec12: "12-week plan", secWeightProg: "Weight progression",
    guideIntro: "Tap any exercise for a step-by-step guide using your 5&nbsp;kg and 8&nbsp;kg dumbbells.",
    panelLog: "LOG WORKOUT", panelEdit: "EDIT DAY",
    fldWorkout: "Workout", fldLifts: "Log your lifts (kg per dumbbell &amp; reps)", fldNotes: "Session notes",
    notesPh: "How did it feel? Any progress? General sensations...",
    save: "Save session", del: "Delete entry", delConfirm: "Tap again to delete",
    pickType: "Pick a workout type", saved: "Session saved", deleted: "Entry deleted", updated: "Targets updated",
    restPanel: "Active recovery day — no lifts to log. Add a note about your walk, stretching or how you feel.",
    kg: "kg", reps: "reps",
    warmup: "Warm-up", cue: "Coaching cue", logThis: "Log this workout today",
    setsL: "sets", repsL: "reps", restL: "rest",
    nutStats: "Your stats", nutTargets: "Daily targets", nutProtein: "Protein sources", nutCarbs: "Quality carbs",
    fWeight: "Weight (kg)", fHeight: "Height (cm)", fAge: "Age", fSex: "Sex", fActivity: "Activity", fGoal: "Goal",
    male: "Male", female: "Female", sedentary: "Sedentary", lightAct: "Light", moderate: "Moderate", veryActive: "Very active",
    goalGain: "Build muscle", goalMaintain: "Maintain", goalLose: "Lose fat", update: "Update targets",
    mCalories: "Calories", mProtein: "Protein", mCarbs: "Carbs", mFat: "Fat", mBMI: "BMI",
    bmiUnder: "underweight", bmiHealthy: "healthy", bmiHigh: "high",
    infoT: "The lean lifter's #1 mistake",
    infoTx: "Your BMI is {bmi} — just below the healthy range. Without enough calories, no routine works. If you don't gain weight in 2 weeks, add 200 kcal/day. Weigh yourself fasted on the same weekday. Target: +0.3–0.5 kg per week.",
    disclaimer: "Estimates from the Mifflin-St Jeor formula — general guidance, not medical advice. If your low weight is unintentional, consider speaking with a doctor or dietitian.",
    equipment: "Equipment", keyCue: "Key cue", latest: "latest",
    rest: "Rest", recovery: "Recovery",
    today: "Today", yesterday: "Yesterday",
    navTracker: "Tracker", navRoutine: "Routine", navNutrition: "Nutrition", navProgression: "Progression", navExercises: "Exercises",
  },
  es: {
    tagPlan: "Plan personalizado", yrs: "años",
    streakLbl: "sesiones<br>seguidas",
    stTotal: "Entrenos totales", stWeek: "Esta semana", stBest: "Mejor racha", stConsist: "Consistencia",
    curStreak: "Racha actual", msWeek: "Esta semana", msBest: "Mejor racha", msTotal: "Total",
    recent: "Últimas sesiones", noSessions: "Aún no hay registros",
    logToday: "Registrar entreno de hoy", logged: "registrado",
    sub0a: "Registra tu primer entreno", sub0b: "Vuelve a entrenar para recuperar la racha",
    sub1: "Buen comienzo — mantén el ritmo", sub2: "seguidas · vas muy bien", sub3: "sesiones · imparable",
    subWeekly: "Plan semanal", subPrinciples: "Principios",
    secNutrition: "Macros y alimentación", sec12: "Plan de 12 semanas", secWeightProg: "Progresión de pesos",
    guideIntro: "Toca cualquier ejercicio para ver una guía paso a paso con tus mancuernas de 5&nbsp;kg y 8&nbsp;kg.",
    panelLog: "REGISTRAR", panelEdit: "EDITAR DÍA",
    fldWorkout: "Entreno", fldLifts: "Registra tus pesos (kg por mancuerna y reps)", fldNotes: "Notas de la sesión",
    notesPh: "¿Cómo te has sentido? ¿Algún avance? Sensaciones generales...",
    save: "Guardar sesión", del: "Eliminar registro", delConfirm: "Pulsa otra vez para borrar",
    pickType: "Elige un tipo de entreno", saved: "Sesión guardada", deleted: "Registro eliminado", updated: "Objetivos actualizados",
    restPanel: "Día de recuperación activa — no hay pesos que registrar. Añade una nota sobre tu paseo, estiramientos o cómo te sientes.",
    kg: "kg", reps: "reps",
    warmup: "Calentamiento", cue: "Consejo", logThis: "Registrar este entreno hoy",
    setsL: "series", repsL: "reps", restL: "desc.",
    nutStats: "Tus datos", nutTargets: "Objetivos diarios", nutProtein: "Fuentes de proteína", nutCarbs: "Carbohidratos de calidad",
    fWeight: "Peso (kg)", fHeight: "Altura (cm)", fAge: "Edad", fSex: "Sexo", fActivity: "Actividad", fGoal: "Objetivo",
    male: "Hombre", female: "Mujer", sedentary: "Sedentario", lightAct: "Ligero", moderate: "Moderado", veryActive: "Muy activo",
    goalGain: "Ganar músculo", goalMaintain: "Mantener", goalLose: "Perder grasa", update: "Actualizar objetivos",
    mCalories: "Calorías", mProtein: "Proteína", mCarbs: "Carbohidratos", mFat: "Grasas", mBMI: "IMC",
    bmiUnder: "bajo peso", bmiHealthy: "saludable", bmiHigh: "alto",
    infoT: "El error nº 1 del que está delgado",
    infoTx: "Tu IMC es {bmi}, justo por debajo del rango saludable. Sin suficientes calorías, ninguna rutina funciona. Si no ganas peso en 2 semanas, añade 200 kcal/día. Pésate en ayunas el mismo día de la semana. Objetivo: +0,3–0,5 kg por semana.",
    disclaimer: "Estimaciones según la fórmula de Mifflin-St Jeor: orientación general, no consejo médico. Si tu bajo peso no es intencionado, consulta con un médico o dietista.",
    equipment: "Material", keyCue: "Consejo clave", latest: "último",
    rest: "Descanso", recovery: "Recuperación",
    today: "Hoy", yesterday: "Ayer",
    navTracker: "Seguimiento", navRoutine: "Rutina", navNutrition: "Nutrición", navProgression: "Progresión", navExercises: "Ejercicios",
  },
};

const MONTHS = { en: ["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"],
  es: ["ENERO","FEBRERO","MARZO","ABRIL","MAYO","JUNIO","JULIO","AGOSTO","SEPTIEMBRE","OCTUBRE","NOVIEMBRE","DICIEMBRE"] };
const MONTHS_S = { en: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
  es: ["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"] };
const WDAYS = { en: ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
  es: ["domingo","lunes","martes","miércoles","jueves","viernes","sábado"] };
const WDL = { en: ["M","T","W","T","F","S","S"], es: ["L","M","X","J","V","S","D"] };

/* ---------- program ---------- */
const WORKOUTS = {
  upperA: {
    name: { en: "Upper A", es: "Superior A" }, title: { en: "UPPER A", es: "SUPERIOR A" },
    focus: { en: "Chest · Shoulders · Triceps", es: "Pecho · Hombros · Tríceps" },
    badge: "b-upper", badgeTx: { en: "Upper", es: "Superior" }, color: "var(--upperA)",
    warmup: { en: "5 min brisk walk or arm circles, shoulder rotations, then 1 light set of the floor press.",
      es: "5 min de caminata rápida o círculos de brazos, rotaciones de hombro y 1 serie ligera de press de suelo." },
    tip: { en: "On presses, squeeze the dumbbells hard and pull your shoulder blades back and down before you lower. Control the weight down for 2–3 seconds.",
      es: "En los press, aprieta fuerte las mancuernas y lleva los omóplatos atrás y abajo antes de bajar. Baja el peso de forma controlada 2–3 segundos." },
    exercises: [
      { key: "Dumbbell Floor Press", name: { en: "Dumbbell Floor Press", es: "Press de suelo con mancuernas" }, nt: { en: "8kg ×2 — triceps lightly touch the floor", es: "8kg ×2 — los tríceps rozan el suelo" }, s: 3, r: "10–12", d: "75s" },
      { key: "Seated Shoulder Press", name: { en: "Seated Shoulder Press", es: "Press de hombros sentado" }, nt: { en: "8kg ×2 — drop to 5kg to finish if needed", es: "8kg ×2 — baja a 5kg para terminar si hace falta" }, s: 3, r: "10–12", d: "75s" },
      { key: "Lateral Raise", name: { en: "Lateral Raise", es: "Elevaciones laterales" }, nt: { en: "5kg ×2 — lead with the elbows", es: "5kg ×2 — lidera con los codos" }, s: 3, r: "14–18", d: "45s" },
      { key: "Incline Push-up", name: { en: "Incline Push-up", es: "Flexiones inclinadas" }, nt: { en: "Bodyweight — lower the surface as you get stronger", es: "Peso corporal — baja la superficie al ganar fuerza" }, s: 3, r: "AMRAP", d: "60s" },
      { key: "Overhead Triceps Ext.", name: { en: "Overhead Triceps Ext.", es: "Extensión de tríceps" }, nt: { en: "8kg ×1 — both hands, elbows forward", es: "8kg ×1 — ambas manos, codos al frente" }, s: 3, r: "12–15", d: "60s" },
      { key: "Dumbbell Curl", name: { en: "Dumbbell Curl", es: "Curl con mancuernas" }, nt: { en: "8kg ×2 — no swing, slow down", es: "8kg ×2 — sin balanceo, baja lento" }, s: 3, r: "10–12", d: "60s" },
    ],
  },
  lowerA: {
    name: { en: "Lower A", es: "Inferior A" }, title: { en: "LOWER A", es: "INFERIOR A" },
    focus: { en: "Quads · Glutes · Calves", es: "Cuádriceps · Glúteos · Gemelos" },
    badge: "b-lower", badgeTx: { en: "Lower", es: "Inferior" }, color: "var(--lowerA)",
    warmup: { en: "5 min walk, 15 bodyweight squats, 10 glute bridges, hip circles.",
      es: "5 min de caminata, 15 sentadillas sin peso, 10 puentes de glúteo, círculos de cadera." },
    tip: { en: "Legs are your biggest lever for total muscle. With light dumbbells, slow the descent and squeeze hard at the top — chase reps, not just load.",
      es: "Las piernas son tu mayor palanca para ganar masa. Con mancuernas ligeras, baja despacio y aprieta arriba — busca reps, no solo peso." },
    exercises: [
      { key: "Goblet Squat", name: { en: "Goblet Squat", es: "Sentadilla goblet" }, nt: { en: "8kg ×1 — chest tall, sit deep", es: "8kg ×1 — pecho alto, baja profundo" }, s: 4, r: "12–15", d: "75s" },
      { key: "Romanian Deadlift", name: { en: "Romanian Deadlift", es: "Peso muerto rumano" }, nt: { en: "8kg ×2 — hips back, flat back", es: "8kg ×2 — cadera atrás, espalda recta" }, s: 3, r: "12–15", d: "75s" },
      { key: "Reverse Lunge", name: { en: "Reverse Lunge", es: "Zancada hacia atrás" }, nt: { en: "8kg ×2 — step back, vertical shin", es: "8kg ×2 — paso atrás, tibia vertical" }, s: 3, r: "10 / leg", d: "60s" },
      { key: "Glute Bridge", name: { en: "Glute Bridge", es: "Puente de glúteos" }, nt: { en: "8kg ×1 — squeeze 1s at the top", es: "8kg ×1 — aprieta 1s arriba" }, s: 3, r: "15–20", d: "45s" },
      { key: "Standing Calf Raise", name: { en: "Standing Calf Raise", es: "Gemelos de pie" }, nt: { en: "8kg ×2 — pause at the top", es: "8kg ×2 — pausa arriba" }, s: 4, r: "18–22", d: "40s" },
    ],
  },
  upperB: {
    name: { en: "Upper B", es: "Superior B" }, title: { en: "UPPER B", es: "SUPERIOR B" },
    focus: { en: "Back · Rear Delts · Biceps", es: "Espalda · Deltoides posterior · Bíceps" },
    badge: "b-upper", badgeTx: { en: "Upper", es: "Superior" }, color: "var(--upperB)",
    warmup: { en: "5 min walk, band or bodyweight rows, arm swings.",
      es: "5 min de caminata, remos con banda o peso corporal, balanceos de brazos." },
    tip: { en: "On rows, drive your elbows back and squeeze the shoulder blades together. Think about pulling with the back, not the arms.",
      es: "En los remos, lleva los codos atrás y junta los omóplatos. Piensa en tirar con la espalda, no con los brazos." },
    exercises: [
      { key: "Bent-over Row", name: { en: "Bent-over Row", es: "Remo inclinado" }, nt: { en: "8kg ×2 — pull to the waist", es: "8kg ×2 — tira hacia la cintura" }, s: 4, r: "10–12", d: "75s" },
      { key: "Single-arm Row", name: { en: "Single-arm Row", es: "Remo a una mano" }, nt: { en: "8kg ×1 — brace on a chair", es: "8kg ×1 — apóyate en una silla" }, s: 3, r: "10–12 / arm", d: "60s" },
      { key: "Rear Delt Fly", name: { en: "Rear Delt Fly", es: "Aperturas posteriores" }, nt: { en: "5kg ×2 — hinge, soft elbows", es: "5kg ×2 — bisagra, codos blandos" }, s: 3, r: "15–18", d: "45s" },
      { key: "Pike Push-up", name: { en: "Pike Push-up", es: "Flexiones pica" }, nt: { en: "Bodyweight — hips high, head to floor", es: "Peso corporal — cadera alta, cabeza al suelo" }, s: 3, r: "8–12", d: "60s" },
      { key: "Hammer Curl", name: { en: "Hammer Curl", es: "Curl martillo" }, nt: { en: "8kg ×2 — palms facing in", es: "8kg ×2 — palmas enfrentadas" }, s: 3, r: "10–12", d: "60s" },
      { key: "Dumbbell Shrug", name: { en: "Dumbbell Shrug", es: "Encogimientos" }, nt: { en: "8kg ×2 — lift straight up, pause", es: "8kg ×2 — sube recto, pausa" }, s: 3, r: "15–18", d: "45s" },
    ],
  },
  lowerB: {
    name: { en: "Lower B", es: "Inferior B" }, title: { en: "LOWER B", es: "INFERIOR B" },
    focus: { en: "Glutes · Hamstrings · Core", es: "Glúteos · Isquiotibiales · Core" },
    badge: "b-lower", badgeTx: { en: "Lower", es: "Inferior" }, color: "var(--lowerB)",
    warmup: { en: "5 min walk, 10 bodyweight split squats per leg, leg swings.",
      es: "5 min de caminata, 10 sentadillas búlgaras sin peso por pierna, balanceos de pierna." },
    tip: { en: "Bulgarian split squats are brutal with light weight — that's the point. Keep the torso tall and drop straight down through the front leg.",
      es: "Las sentadillas búlgaras son durísimas con poco peso — esa es la idea. Mantén el torso erguido y baja recto sobre la pierna delantera." },
    exercises: [
      { key: "Bulgarian Split Squat", name: { en: "Bulgarian Split Squat", es: "Sentadilla búlgara" }, nt: { en: "8kg ×2 — rear foot on a chair", es: "8kg ×2 — pie trasero en una silla" }, s: 3, r: "10 / leg", d: "75s" },
      { key: "Sumo Squat", name: { en: "Sumo Squat", es: "Sentadilla sumo" }, nt: { en: "8kg ×1 — wide stance, toes out", es: "8kg ×1 — piernas abiertas, puntas afuera" }, s: 3, r: "15–20", d: "60s" },
      { key: "Single-leg RDL", name: { en: "Single-leg RDL", es: "Peso muerto a una pierna" }, nt: { en: "5kg ×2 — balance, hinge, reach down", es: "5kg ×2 — equilibrio, bisagra, baja" }, s: 3, r: "10 / leg", d: "60s" },
      { key: "Walking / Static Lunge", name: { en: "Walking / Static Lunge", es: "Zancadas caminando" }, nt: { en: "8kg ×2 — long steps, control", es: "8kg ×2 — pasos largos, control" }, s: 3, r: "12 / leg", d: "60s" },
      { key: "Seated Calf Raise", name: { en: "Seated Calf Raise", es: "Gemelos sentado" }, nt: { en: "8kg ×2 — dumbbells on the knees", es: "8kg ×2 — mancuernas en las rodillas" }, s: 3, r: "20–25", d: "40s" },
      { key: "Plank", name: { en: "Plank", es: "Plancha" }, nt: { en: "Bodyweight — straight line, brace", es: "Peso corporal — línea recta, aprieta" }, s: 3, r: "30–45s", d: "45s" },
    ],
  },
};
const REST_INFO = {
  title: { en: "REST & RECOVERY", es: "DESCANSO Y RECUPERACIÓN" }, color: "var(--rest-col)", badge: "b-rest",
  badgeTx: { en: "Recovery", es: "Recuperación" },
  restTx: { en: "Walk 20–40 min · Light stretching · Mobility for hips and shoulders\n\nRecovery is when muscle is built. Protect your sleep and hit your protein on these days.",
    es: "Camina 20–40 min · Estiramientos suaves · Movilidad de cadera y hombros\n\nLa recuperación es cuando se construye el músculo. Cuida el sueño y cumple tu proteína estos días." },
};
const SCHEDULE = [
  { num: "01", day: { en: "Monday", es: "Lunes" }, w: "upperA" },
  { num: "02", day: { en: "Tuesday", es: "Martes" }, w: "lowerA" },
  { num: "03", day: { en: "Wednesday", es: "Miércoles" }, w: "rest" },
  { num: "04", day: { en: "Thursday", es: "Jueves" }, w: "upperB" },
  { num: "05", day: { en: "Friday", es: "Viernes" }, w: "lowerB" },
  { num: "06", day: { en: "Saturday", es: "Sábado" }, w: "rest" },
  { num: "07", day: { en: "Sunday", es: "Domingo" }, w: "rest" },
];
const TYPE_ORDER = ["upperA", "lowerA", "upperB", "lowerB", "rest"];
function typeInfo(tp) { if (tp === "rest") return { label: t("rest"), color: "var(--rest-col)" }; return { label: L(WORKOUTS[tp].name), color: WORKOUTS[tp].color }; }

const TRACKED = [
  { key: "Dumbbell Floor Press", label: { en: "Floor Press", es: "Press de suelo" } },
  { key: "Seated Shoulder Press", label: { en: "Shoulder Press", es: "Press hombro" } },
  { key: "Bent-over Row", label: { en: "Bent-over Row", es: "Remo inclinado" } },
  { key: "Goblet Squat", label: { en: "Goblet Squat", es: "Sentadilla goblet" } },
  { key: "Romanian Deadlift", label: { en: "Romanian DL", es: "P. M. rumano" } },
  { key: "Bulgarian Split Squat", label: { en: "Split Squat", es: "S. búlgara" } },
  { key: "__bw", label: { en: "Bodyweight", es: "Peso corporal" } },
];
const KEY2NAME = {};
Object.values(WORKOUTS).forEach(w => w.exercises.forEach(ex => { KEY2NAME[ex.key] = ex.name; }));

const PRINCIPLES = [
  { ic: IC.bolt, t: { en: "Progressive overload", es: "Sobrecarga progresiva" },
    d: { en: "With fixed weights, grow by adding reps, adding a set, slowing the lowering phase, or shortening rest. When the top of a rep range feels easy, make it harder.",
      es: "Con pesos fijos, progresa añadiendo reps, una serie más, bajando más lento o acortando el descanso. Cuando la parte alta del rango te resulte fácil, hazlo más difícil." } },
  { ic: IC.nutrition, t: { en: "Eat in a surplus", es: "Come en superávit" },
    d: { en: "You can't build much muscle without enough food, especially when lean. Eating slightly more than you burn is the priority — see the Nutrition tab.",
      es: "No se construye músculo sin comer suficiente, sobre todo estando delgado. Comer algo más de lo que gastas es la prioridad — mira la pestaña de Nutrición." } },
  { ic: IC.book, t: { en: "Sleep & recover", es: "Duerme y recupera" },
    d: { en: "Muscle grows during rest. Sleep 7–9 hours and treat your rest days as part of the program, not time off from it.",
      es: "El músculo crece descansando. Duerme 7–9 horas y trata los días de descanso como parte del plan, no como tiempo libre." } },
];
const PHASES = [
  { wk: { en: "Weeks 1–3", es: "Semanas 1–3" }, t: { en: "FOUNDATION", es: "ADAPTACIÓN" },
    d: { en: "Learn every movement. Controlled tempo, hit the rep targets, keep a log.", es: "Aprende cada movimiento. Tempo controlado, alcanza las reps objetivo y lleva un registro." } },
  { wk: { en: "Weeks 4–6", es: "Semanas 4–6" }, t: { en: "VOLUME", es: "VOLUMEN" },
    d: { en: "Add reps, then add a set. Reach the top of each rep range on every set.", es: "Añade reps y luego una serie. Llega a la parte alta de cada rango en todas las series." } },
  { wk: { en: "Weeks 7–9", es: "Semanas 7–9" }, t: { en: "INTENSITY", es: "INTENSIDAD" },
    d: { en: "Slow eccentrics (3–4s), add pauses, shorten rest. Make light weight feel heavy.", es: "Excéntricas lentas (3–4s), añade pausas, acorta el descanso. Haz que el peso ligero pese." } },
  { wk: { en: "Weeks 10–12", es: "Semanas 10–12" }, t: { en: "PEAK", es: "PICO" },
    d: { en: "Week 10 easy (deload). Weeks 11–12 push for max reps; consider heavier dumbbells.", es: "Semana 10 suave (descarga). Semanas 11–12 busca máximas reps; plantéate mancuernas más pesadas." } },
];

const NUT = {
  protein: { en: ["Chicken / turkey breast <b>~35g / 150g</b>", "Whole eggs (3–4 a day) <b>~6g each</b>", "Salmon or tuna <b>~30g / 150g</b>", "Greek yogurt / cottage cheese <b>~20g / 200g</b>", "Whey protein (post-workout) <b>~24g / scoop</b>", "Milk, legumes on the side"],
    es: ["Pechuga de pollo o pavo <b>~35g / 150g</b>", "Huevos enteros (3–4 al día) <b>~6g c/u</b>", "Salmón o atún <b>~30g / 150g</b>", "Yogur griego / requesón <b>~20g / 200g</b>", "Proteína whey (post-entreno) <b>~24g / cazo</b>", "Leche y legumbres como acompañamiento"] },
  carbs: { en: ["Rice (white or brown) — your base", "Oats at breakfast", "Pasta, potato, sweet potato", "Wholegrain or rye bread", "Bananas and mixed fruit", "Quinoa as an alternative"],
    es: ["Arroz (blanco o integral) — tu base", "Avena en el desayuno", "Pasta, patata, boniato", "Pan integral o de centeno", "Plátanos y fruta variada", "Quinoa como alternativa"] },
};

/* ---------- exercise library ---------- */
const EXERCISES = [
  { group: { en: "Push", es: "Empuje" }, cls: "g-push", items: [
    { equip: "8 kg ×2", n: { en: "Dumbbell Floor Press", es: "Press de suelo con mancuernas" }, target: { en: "Chest · Triceps · Front delts", es: "Pecho · Tríceps · Deltoides anterior" },
      steps: { en: ["Lie on your back on the floor, knees bent, a dumbbell in each hand at chest level with your elbows resting on the floor.", "Press both dumbbells straight up until your arms are fully extended over your chest.", "Lower slowly (2–3 seconds) until your upper arms lightly touch the floor.", "Pause for a moment, then press up again."],
        es: ["Túmbate boca arriba en el suelo, rodillas flexionadas, una mancuerna en cada mano a la altura del pecho y los codos apoyados en el suelo.", "Empuja ambas mancuernas hacia arriba hasta estirar los brazos sobre el pecho.", "Baja despacio (2–3 segundos) hasta que la parte superior de los brazos roce el suelo.", "Haz una breve pausa y vuelve a empujar."] },
      tip: { en: "The floor stops your elbows, which protects your shoulders — ideal for pressing safely at home.", es: "El suelo frena los codos y protege los hombros — ideal para empujar con seguridad en casa." } },
    { equip: "8 kg ×2", n: { en: "Seated Shoulder Press", es: "Press de hombros sentado" }, target: { en: "Shoulders · Triceps", es: "Hombros · Tríceps" },
      steps: { en: ["Sit tall on a chair, a dumbbell in each hand at shoulder height, palms facing forward.", "Brace your core so your lower back doesn't arch.", "Press the dumbbells overhead until your arms are straight.", "Lower under control back to shoulder height."],
        es: ["Siéntate erguido en una silla, una mancuerna en cada mano a la altura de los hombros, palmas al frente.", "Aprieta el abdomen para que la zona lumbar no se arquee.", "Empuja las mancuernas por encima de la cabeza hasta estirar los brazos.", "Baja con control hasta la altura de los hombros."] },
      tip: { en: "If 8 kg gives out mid-set, swap to the 5 kg pair and finish your reps.", es: "Si las de 8 kg fallan a media serie, cambia a las de 5 kg y termina las reps." } },
    { equip: "5 kg ×2", n: { en: "Lateral Raise", es: "Elevaciones laterales" }, target: { en: "Side delts (shoulder width)", es: "Deltoides lateral (anchura de hombros)" },
      steps: { en: ["Stand with a dumbbell in each hand at your sides, a slight bend in the elbows.", "Raise both arms out to the sides, leading with the elbows, up to shoulder height.", "Pause for a second at the top.", "Lower slowly back down."],
        es: ["De pie, una mancuerna en cada mano a los lados, con una ligera flexión en los codos.", "Eleva ambos brazos hacia los lados, liderando con los codos, hasta la altura de los hombros.", "Haz una pausa de un segundo arriba.", "Baja despacio."] },
      tip: { en: "Keep it strict — no swinging. Light weight and high reps build the side delts.", es: "Hazlo estricto, sin balanceo. Peso ligero y muchas reps construyen el deltoides lateral." } },
    { equip: "Bodyweight + raised surface", n: { en: "Incline Push-up", es: "Flexiones inclinadas" }, target: { en: "Chest · Triceps · Shoulders", es: "Pecho · Tríceps · Hombros" },
      steps: { en: ["Place your hands wider than your shoulders on a sturdy raised surface (table, sofa, counter).", "Walk your feet back into a straight plank line.", "Lower your chest to the edge under control.", "Push back up to the start."],
        es: ["Coloca las manos, más abiertas que los hombros, sobre una superficie elevada y firme (mesa, sofá, encimera).", "Lleva los pies atrás hasta formar una línea recta de plancha.", "Baja el pecho hasta el borde de forma controlada.", "Empuja para volver al inicio."] },
      tip: { en: "The higher the surface, the easier. Lower it over time to work toward floor push-ups.", es: "Cuanto más alta la superficie, más fácil. Bájala con el tiempo para progresar hacia las flexiones en el suelo." } },
    { equip: "Bodyweight", n: { en: "Pike Push-up", es: "Flexiones pica" }, target: { en: "Shoulders · Triceps", es: "Hombros · Tríceps" },
      steps: { en: ["Start in a push-up, then walk your feet in and lift your hips into an inverted 'V'.", "Keep your head between your arms.", "Bend your elbows to lower the crown of your head toward the floor.", "Press back up."],
        es: ["Empieza en posición de flexión, lleva los pies hacia las manos y sube la cadera formando una 'V' invertida.", "Mantén la cabeza entre los brazos.", "Flexiona los codos para bajar la coronilla hacia el suelo.", "Empuja para volver a subir."] },
      tip: { en: "The more vertical your torso, the more this hits the shoulders.", es: "Cuanto más vertical el torso, más trabajan los hombros." } },
    { equip: "8 kg ×1", n: { en: "Overhead Triceps Extension", es: "Extensión de tríceps sobre la cabeza" }, target: { en: "Triceps", es: "Tríceps" },
      steps: { en: ["Hold one dumbbell with both hands and raise it overhead.", "Keep your elbows pointing forward, close to your head.", "Lower the dumbbell behind your head by bending only at the elbows.", "Extend back up to the top."],
        es: ["Sujeta una mancuerna con ambas manos y levántala por encima de la cabeza.", "Mantén los codos apuntando al frente y cerca de la cabeza.", "Baja la mancuerna por detrás de la cabeza flexionando solo los codos.", "Estira de nuevo hasta arriba."] },
      tip: { en: "Only your forearms move — keep the upper arms still.", es: "Solo se mueven los antebrazos — los brazos quedan quietos." } },
  ]},
  { group: { en: "Pull", es: "Tirón" }, cls: "g-pull", items: [
    { equip: "8 kg ×2", n: { en: "Bent-over Row", es: "Remo inclinado" }, target: { en: "Upper back · Lats · Biceps", es: "Espalda alta · Dorsales · Bíceps" },
      steps: { en: ["Hold a dumbbell in each hand, hinge at the hips to about 45°, flat back, knees soft.", "Let your arms hang straight down.", "Pull both dumbbells to your waist, driving the elbows back.", "Squeeze the shoulder blades, then lower slowly."],
        es: ["Sujeta una mancuerna en cada mano, inclínate desde la cadera unos 45°, espalda recta y rodillas blandas.", "Deja que los brazos cuelguen rectos.", "Tira de ambas mancuernas hacia la cintura llevando los codos atrás.", "Aprieta los omóplatos y baja despacio."] },
      tip: { en: "Keep your back flat and chest proud — never round your spine.", es: "Mantén la espalda recta y el pecho alto — nunca redondees la columna." } },
    { equip: "8 kg ×1", n: { en: "Single-arm Row", es: "Remo a una mano" }, target: { en: "Lats · Upper back", es: "Dorsales · Espalda alta" },
      steps: { en: ["Brace one hand and knee on a chair, back flat and roughly parallel to the floor.", "Hold a dumbbell in the other hand, hanging straight down.", "Row it up to your hip, keeping the elbow close to your body.", "Lower with control to a full stretch."],
        es: ["Apoya una mano y una rodilla en una silla, espalda recta y casi paralela al suelo.", "Sujeta una mancuerna con la otra mano, colgando recta.", "Rema hasta la cadera, manteniendo el codo cerca del cuerpo.", "Baja con control hasta un estiramiento completo."] },
      tip: { en: "Working one side at a time lets you use a bigger range of motion.", es: "Trabajar un lado cada vez te permite usar más recorrido." } },
    { equip: "5 kg ×2", n: { en: "Rear Delt Fly", es: "Aperturas posteriores" }, target: { en: "Rear delts · Upper back", es: "Deltoides posterior · Espalda alta" },
      steps: { en: ["Hinge forward at the hips, flat back, dumbbells hanging below your chest.", "With soft elbows, raise both arms out to the sides.", "Squeeze the rear shoulders at the top.", "Lower slowly."],
        es: ["Inclínate desde la cadera, espalda recta, mancuernas colgando bajo el pecho.", "Con los codos algo flexionados, eleva ambos brazos hacia los lados.", "Aprieta la parte posterior de los hombros arriba.", "Baja despacio."] },
      tip: { en: "Light weight only — think 'spread your wings'.", es: "Solo peso ligero — imagina que 'abres las alas'." } },
    { equip: "8 kg ×2", n: { en: "Dumbbell Curl", es: "Curl de bíceps con mancuernas" }, target: { en: "Biceps", es: "Bíceps" },
      steps: { en: ["Stand with a dumbbell in each hand, palms facing forward.", "Keep your elbows pinned to your sides.", "Curl the dumbbells up, squeezing the biceps.", "Lower slowly over 2–3 seconds."],
        es: ["De pie, una mancuerna en cada mano, palmas al frente.", "Mantén los codos pegados a los costados.", "Sube las mancuernas apretando los bíceps.", "Baja despacio durante 2–3 segundos."] },
      tip: { en: "No swinging or leaning back — let the biceps do the work.", es: "Sin balanceo ni echarse atrás — que trabaje el bíceps." } },
    { equip: "8 kg ×2", n: { en: "Hammer Curl", es: "Curl martillo" }, target: { en: "Biceps · Brachialis · Forearms", es: "Bíceps · Braquial · Antebrazos" },
      steps: { en: ["Hold the dumbbells with palms facing each other (neutral grip).", "Keep your elbows tight to your sides.", "Curl up while keeping the neutral grip.", "Lower under control."],
        es: ["Sujeta las mancuernas con las palmas enfrentadas (agarre neutro).", "Codos pegados a los costados.", "Sube manteniendo el agarre neutro.", "Baja con control."] },
      tip: { en: "Builds arm thickness and forearm strength.", es: "Desarrolla el grosor del brazo y la fuerza de antebrazo." } },
    { equip: "8 kg ×2", n: { en: "Dumbbell Shrug", es: "Encogimientos con mancuernas" }, target: { en: "Upper traps", es: "Trapecio superior" },
      steps: { en: ["Stand tall, a dumbbell in each hand at your sides.", "Lift your shoulders straight up toward your ears.", "Pause and squeeze at the top.", "Lower slowly."],
        es: ["De pie, una mancuerna en cada mano a los lados.", "Sube los hombros rectos hacia las orejas.", "Haz una pausa y aprieta arriba.", "Baja despacio."] },
      tip: { en: "Straight up and down — don't roll the shoulders.", es: "Recto arriba y abajo — no gires los hombros." } },
  ]},
  { group: { en: "Legs", es: "Piernas" }, cls: "g-legs", items: [
    { equip: "8 kg ×1", n: { en: "Goblet Squat", es: "Sentadilla goblet" }, target: { en: "Quads · Glutes", es: "Cuádriceps · Glúteos" },
      steps: { en: ["Hold one dumbbell vertically against your chest with both hands.", "Stand with feet shoulder-width, toes slightly out.", "Sit down between your knees, chest tall, until your thighs are about parallel.", "Drive through your heels to stand back up."],
        es: ["Sujeta una mancuerna en vertical contra el pecho con ambas manos.", "Pies a la anchura de los hombros, puntas algo hacia fuera.", "Baja entre las rodillas, pecho alto, hasta que los muslos estén casi paralelos.", "Empuja con los talones para subir."] },
      tip: { en: "Holding the weight at your chest keeps you upright and protects your back.", es: "Llevar el peso en el pecho te mantiene erguido y protege la espalda." } },
    { equip: "8 kg ×2", n: { en: "Romanian Deadlift", es: "Peso muerto rumano" }, target: { en: "Hamstrings · Glutes", es: "Isquiotibiales · Glúteos" },
      steps: { en: ["Hold a dumbbell in each hand in front of your thighs, knees slightly bent.", "Push your hips back, sliding the dumbbells down your legs.", "Go until you feel a stretch in the hamstrings, keeping your back flat.", "Drive your hips forward to stand."],
        es: ["Sujeta una mancuerna en cada mano frente a los muslos, rodillas algo flexionadas.", "Lleva la cadera atrás deslizando las mancuernas por las piernas.", "Baja hasta notar el estiramiento en los isquios, espalda recta.", "Lleva la cadera al frente para subir."] },
      tip: { en: "It's a hip hinge, not a squat — you should feel it in the hamstrings.", es: "Es una bisagra de cadera, no una sentadilla — debes notarlo en los isquios." } },
    { equip: "8 kg ×2", n: { en: "Reverse Lunge", es: "Zancada hacia atrás" }, target: { en: "Quads · Glutes", es: "Cuádriceps · Glúteos" },
      steps: { en: ["Stand tall with a dumbbell in each hand.", "Step one foot back and lower until both knees are about 90°.", "Keep the front shin vertical.", "Push through the front heel to return to standing."],
        es: ["De pie, una mancuerna en cada mano.", "Da un paso atrás y baja hasta que ambas rodillas estén a unos 90°.", "Mantén la tibia delantera vertical.", "Empuja con el talón delantero para volver."] },
      tip: { en: "Stepping back is easier on the knees than stepping forward.", es: "Dar el paso atrás es más amable con las rodillas que hacia delante." } },
    { equip: "8 kg ×2", n: { en: "Bulgarian Split Squat", es: "Sentadilla búlgara" }, target: { en: "Quads · Glutes (single leg)", es: "Cuádriceps · Glúteos (una pierna)" },
      steps: { en: ["Stand a stride in front of a chair and rest the top of your rear foot on it.", "Hold a dumbbell in each hand.", "Drop straight down through the front leg until the thigh is about parallel.", "Drive up through the front heel."],
        es: ["Colócate a un paso por delante de una silla y apoya el empeine del pie trasero en ella.", "Sujeta una mancuerna en cada mano.", "Baja recto sobre la pierna delantera hasta que el muslo esté casi paralelo.", "Sube empujando con el talón delantero."] },
      tip: { en: "The best leg builder you can do with light weights — keep your torso tall.", es: "El mejor ejercicio de pierna con poco peso — mantén el torso erguido." } },
    { equip: "8 kg ×1", n: { en: "Sumo Squat", es: "Sentadilla sumo" }, target: { en: "Inner thighs · Glutes · Quads", es: "Aductores · Glúteos · Cuádriceps" },
      steps: { en: ["Stand with a wide stance, toes turned out.", "Hold one dumbbell hanging between your legs.", "Squat straight down, knees tracking over your toes.", "Stand and squeeze the glutes."],
        es: ["Piernas bien abiertas, puntas hacia fuera.", "Sujeta una mancuerna colgando entre las piernas.", "Baja recto, con las rodillas siguiendo la línea de los pies.", "Sube y aprieta los glúteos."] },
      tip: { en: "The wide stance targets the inner thighs and glutes.", es: "La postura abierta enfatiza los aductores y los glúteos." } },
    { equip: "5 kg ×2", n: { en: "Single-leg RDL", es: "Peso muerto rumano a una pierna" }, target: { en: "Hamstrings · Glutes · Balance", es: "Isquiotibiales · Glúteos · Equilibrio" },
      steps: { en: ["Hold the dumbbells and stand on one leg with a soft knee.", "Hinge at the hip, reaching the dumbbells toward the floor as your back leg lifts behind you.", "Keep your back flat and hips level.", "Return to standing."],
        es: ["Sujeta las mancuernas y ponte sobre una pierna con la rodilla blanda.", "Inclínate desde la cadera bajando las mancuernas hacia el suelo mientras la pierna de atrás se eleva.", "Mantén la espalda recta y la cadera nivelada.", "Vuelve a la posición de pie."] },
      tip: { en: "Go slow — the balance challenge is part of the exercise.", es: "Hazlo lento — el reto de equilibrio es parte del ejercicio." } },
    { equip: "8 kg ×2", n: { en: "Walking / Static Lunge", es: "Zancadas caminando / estáticas" }, target: { en: "Quads · Glutes", es: "Cuádriceps · Glúteos" },
      steps: { en: ["Hold a dumbbell in each hand.", "Take a long step forward and lower until both knees are about 90°.", "Either step through into the next lunge (walking) or push back to the start (static).", "Keep your torso upright throughout."],
        es: ["Sujeta una mancuerna en cada mano.", "Da un paso largo al frente y baja hasta que ambas rodillas estén a unos 90°.", "Avanza a la siguiente zancada (caminando) o vuelve al inicio (estática).", "Mantén el torso erguido."] },
      tip: { en: "Control the descent — don't let the back knee slam down.", es: "Controla la bajada — no dejes caer la rodilla de atrás." } },
    { equip: "8 kg ×1", n: { en: "Glute Bridge", es: "Puente de glúteos" }, target: { en: "Glutes", es: "Glúteos" },
      steps: { en: ["Lie on your back, knees bent, feet flat on the floor.", "Rest one dumbbell across your hips, holding it in place.", "Drive through your heels and lift your hips until your body is in a straight line.", "Squeeze the glutes hard for a second, then lower."],
        es: ["Túmbate boca arriba, rodillas flexionadas, pies apoyados.", "Coloca una mancuerna sobre la cadera, sujetándola.", "Empuja con los talones y sube la cadera hasta que el cuerpo forme una línea recta.", "Aprieta fuerte los glúteos un segundo y baja."] },
      tip: { en: "Push your knees out slightly and squeeze hard at the top.", es: "Empuja las rodillas algo hacia fuera y aprieta fuerte arriba." } },
    { equip: "8 kg ×2", n: { en: "Standing Calf Raise", es: "Elevación de gemelos de pie" }, target: { en: "Calves", es: "Gemelos" },
      steps: { en: ["Stand tall with a dumbbell in each hand.", "Rise up onto the balls of your feet as high as you can.", "Pause at the top.", "Lower slowly for a full stretch."],
        es: ["De pie, una mancuerna en cada mano.", "Sube sobre las puntas de los pies todo lo que puedas.", "Haz una pausa arriba.", "Baja despacio para un estiramiento completo."] },
      tip: { en: "Do it on the edge of a step for more range of motion.", es: "Hazlo en el borde de un escalón para más recorrido." } },
    { equip: "8 kg ×2", n: { en: "Seated Calf Raise", es: "Elevación de gemelos sentado" }, target: { en: "Calves (soleus)", es: "Gemelos (sóleo)" },
      steps: { en: ["Sit on a chair, feet flat, balls of your feet on the floor or a thick book.", "Rest the dumbbells on top of your knees.", "Raise your heels as high as possible.", "Lower slowly."],
        es: ["Siéntate en una silla, pies apoyados, las puntas en el suelo o en un libro grueso.", "Apoya las mancuernas sobre las rodillas.", "Sube los talones todo lo posible.", "Baja despacio."] },
      tip: { en: "The seated version hits the deeper soleus muscle.", es: "La versión sentada trabaja el sóleo, más profundo." } },
  ]},
  { group: { en: "Core", es: "Core" }, cls: "g-core", items: [
    { equip: "Bodyweight", n: { en: "Plank", es: "Plancha" }, target: { en: "Core", es: "Core" },
      steps: { en: ["Rest on your forearms and toes, elbows directly under your shoulders.", "Make a straight line from your head to your heels.", "Brace your abs and squeeze your glutes.", "Hold for the target time, breathing steadily."],
        es: ["Apóyate sobre los antebrazos y las puntas de los pies, codos bajo los hombros.", "Forma una línea recta de la cabeza a los talones.", "Aprieta el abdomen y los glúteos.", "Mantén el tiempo objetivo respirando de forma constante."] },
      tip: { en: "Don't let your hips sag or pike up — add a few seconds each week.", es: "No dejes que la cadera caiga ni suba — añade unos segundos cada semana." } },
  ]},
];

/* ---------- state ---------- */
const SK = "forge_protocol_v1";
function defaultState() { return { logs: {}, bodyweight: [], profile: { weight: 58, height: 179, age: 28, sex: "male", activity: 1.5, goal: "gain" } }; }
function loadState() { try { const raw = localStorage.getItem(SK); if (!raw) return defaultState(); const p = JSON.parse(raw), d = defaultState(); return { ...d, ...p, profile: { ...d.profile, ...(p.profile || {}) } }; } catch (e) { return defaultState(); } }
function saveState() { try { localStorage.setItem(SK, JSON.stringify(state)); } catch (e) {} }
let state = loadState();
let calY = new Date().getFullYear(), calM = new Date().getMonth();
let logDate = null, selType = null, delStep = false, curPR = "Dumbbell Floor Press", curTab = "tracker";

/* ---------- dates ---------- */
function dateStr(d) { return d.getFullYear() + "-" + String(d.getMonth()+1).padStart(2,"0") + "-" + String(d.getDate()).padStart(2,"0"); }
function today() { return dateStr(new Date()); }
function dayOf(s) { const [y,m,d] = s.split("-").map(Number); const dt = new Date(y,m-1,d); dt.setHours(0,0,0,0); return dt; }
function noDays(a,b) { return Math.round(Math.abs(a-b)/86400000); }
function weekdayIndex(d) { return (d.getDay() + 6) % 7; }
function addDays(d,n) { const x = new Date(d); x.setDate(x.getDate()+n); return x; }
function startOfWeek(d) { return addDays(d, -weekdayIndex(d)); }
function fmtDate(s) { const dt = dayOf(s), td = new Date(); td.setHours(0,0,0,0); const yd = new Date(td - 86400000);
  if (dt.getTime() === td.getTime()) return t("today"); if (dt.getTime() === yd.getTime()) return t("yesterday");
  return dt.getDate() + " " + MONTHS_S[LANG][dt.getMonth()]; }

/* ---------- stats ---------- */
function trainedDates() { return Object.keys(state.logs).filter(d => state.logs[d].type !== "rest"); }
function calcStreak() {
  const w = trainedDates().sort().reverse(); if (!w.length) return { cur: 0, best: 0 };
  const td = new Date(); td.setHours(0,0,0,0); const gap0 = (td - dayOf(w[0])) / 86400000; let cur = 0;
  if (gap0 <= 2) { cur = 1; for (let i = 1; i < w.length; i++) { if (noDays(dayOf(w[i-1]), dayOf(w[i])) <= 2) cur++; else break; } }
  const asc = trainedDates().sort(); let best = asc.length ? 1 : 0, tmp = 1;
  for (let i = 1; i < asc.length; i++) { if (noDays(dayOf(asc[i]), dayOf(asc[i-1])) <= 2) { tmp++; if (tmp > best) best = tmp; } else tmp = 1; }
  return { cur, best: Math.max(best, cur) };
}
function weekDone() { const start = startOfWeek(new Date()); let done = 0; for (let i = 0; i < 7; i++) { if (SCHEDULE[i].w !== "rest") { const iso = dateStr(addDays(start,i)); if (state.logs[iso] && state.logs[iso].type !== "rest") done++; } } return done; }

/* ---------- nutrition ---------- */
function nutrition() { const p = state.profile; const s = p.sex === "female" ? -161 : 5; const bmr = 10*p.weight + 6.25*p.height - 5*p.age + s; const tdee = bmr * p.activity; const adj = p.goal === "gain" ? 400 : p.goal === "lose" ? -400 : 0; const calories = Math.round((tdee + adj) / 10) * 10; const protein = Math.round(p.weight * 2.0); const fat = Math.round(p.weight * 0.9); const carbs = Math.max(0, Math.round((calories - protein*4 - fat*9) / 4)); const bmi = p.weight / Math.pow(p.height/100, 2); return { bmr: Math.round(bmr), tdee: Math.round(tdee), calories, protein, fat, carbs, bmi: +bmi.toFixed(1) }; }

/* ---------- nav ---------- */
const TABS = [
  { id: "tracker", key: "navTracker", ic: IC.calendar },
  { id: "routine", key: "navRoutine", ic: IC.dumbbell },
  { id: "nutrition", key: "navNutrition", ic: IC.nutrition },
  { id: "progression", key: "navProgression", ic: IC.chart },
  { id: "exercises", key: "navExercises", ic: IC.book },
];
function buildNav() { document.getElementById("nav-tabs").innerHTML = TABS.map(tb => `<button class="nav-tab${tb.id===curTab?" active":""}" data-tab="${tb.id}" onclick="switchTab('${tb.id}')">${tb.ic}${t(tb.key)}</button>`).join(""); }
function switchTab(tab) {
  curTab = tab;
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  document.querySelectorAll(".nav-tab").forEach(tb => tb.classList.toggle("active", tb.dataset.tab === tab));
  document.getElementById("view-" + tab).classList.add("active");
  if (tab === "tracker") renderCalendar();
  if (tab === "nutrition") renderNutrition();
  if (tab === "progression") { buildProgression(); renderPR(curPR); }
}

/* ---------- tracker refresh ---------- */
function refresh() {
  const { cur, best } = calcStreak(); const total = trainedDates().length; const wk = weekDone(); const con = total ? Math.min(100, Math.round((wk / 4) * 100)) : null;
  document.getElementById("hdr-fire").innerHTML = IC.flame; document.getElementById("sh-fire").innerHTML = IC.flame;
  document.getElementById("hdr-streak-num").textContent = cur; document.getElementById("hdr-streak").classList.toggle("hot", cur >= 3);
  document.getElementById("s-total").textContent = total; document.getElementById("s-week").textContent = wk + "/4"; document.getElementById("s-best").textContent = best; document.getElementById("s-consist").textContent = con !== null ? con + "%" : "—";
  document.getElementById("sh-num").textContent = cur; document.getElementById("ms-week").textContent = wk + "/4"; document.getElementById("ms-best").textContent = best; document.getElementById("ms-total").textContent = total;
  const sub = document.getElementById("sh-sub");
  if (cur === 0) { sub.textContent = total > 0 ? t("sub0b") : t("sub0a"); sub.style.color = "var(--muted)"; }
  else if (cur < 3) { sub.textContent = t("sub1"); sub.style.color = "var(--muted)"; }
  else if (cur < 7) { sub.textContent = cur + " " + t("sub2"); sub.style.color = "var(--accent2)"; }
  else { sub.textContent = cur + " " + t("sub3"); sub.style.color = "var(--accent)"; }
  document.getElementById("sh-fire").style.animationDuration = cur >= 5 ? "1s" : "2.5s";
  const btn = document.getElementById("log-today-btn"); const tdy = today();
  if (state.logs[tdy]) { const ti = typeInfo(state.logs[tdy].type); btn.innerHTML = IC.check + " " + ti.label + " " + t("logged"); btn.className = "log-today-btn done"; }
  else { btn.innerHTML = IC.plus + " " + t("logToday"); btn.className = "log-today-btn"; }
  renderRecent(); renderCalendar();
}
function renderRecent() {
  const el = document.getElementById("recent-list");
  const entries = Object.keys(state.logs).sort().reverse().slice(0, 5);
  if (!entries.length) { el.innerHTML = `<div class="empty-note">${t("noSessions")}</div>`; return; }
  el.innerHTML = entries.map(d => {
    const info = state.logs[d], ti = typeInfo(info.type);
    let lifts = "";
    if (info.lifts) { const parts = []; for (const k in info.lifts) { if (info.lifts[k] && info.lifts[k].kg) parts.push(L(KEY2NAME[k] || { en: k, es: k }) + " " + info.lifts[k].kg + "kg"); } lifts = parts.slice(0, 2).join(" · "); }
    return `<div class="rec-item" onclick="openPanel('${d}')"><div class="rec-dot" style="background:${ti.color}"></div><div style="flex:1;min-width:0"><div class="rec-type" style="color:${ti.color}">${ti.label}</div>${lifts ? `<div class="rec-note">${lifts}</div>` : ""}${info.note ? `<div class="rec-note">${esc(info.note).slice(0,38)}</div>` : ""}</div><div class="rec-date">${fmtDate(d)}</div></div>`;
  }).join("");
}
function esc(s) { return String(s).replace(/[<>&]/g, c => ({ "<":"&lt;", ">":"&gt;", "&":"&amp;" }[c])); }

/* ---------- calendar ---------- */
function renderCalendar() {
  const grid = document.getElementById("cal-grid"); if (!grid) return;
  document.getElementById("cal-lbl").textContent = MONTHS[LANG][calM] + " " + calY;
  document.getElementById("cal-legend").innerHTML = TYPE_ORDER.map(tp => { const ti = typeInfo(tp); return `<div class="leg-item"><div class="leg-dot" style="background:${ti.color}"></div>${ti.label}</div>`; }).join("");
  const first = new Date(calY, calM, 1), last = new Date(calY, calM+1, 0); let dow = first.getDay() - 1; if (dow < 0) dow = 6;
  const td = new Date(); td.setHours(0,0,0,0);
  let html = WDL[LANG].map(h => `<div class="cal-wd">${h}</div>`).join("");
  for (let i = 0; i < dow; i++) html += `<div class="cal-cell"></div>`;
  for (let d = 1; d <= last.getDate(); d++) {
    const dt = new Date(calY, calM, d); dt.setHours(0,0,0,0); const ds = dateStr(dt), info = state.logs[ds];
    const isToday = dt.getTime() === td.getTime(), isFuture = dt > td; let cls = "cal-cell";
    if (isToday) cls += " today"; if (isFuture) cls += " future"; if (info && !isFuture) cls += " trained type-" + info.type; if (!isFuture) cls += " clickable";
    html += `<div class="${cls}"${isFuture ? "" : ` onclick="openPanel('${ds}')"`}>${d}</div>`;
  }
  grid.innerHTML = html;
}
function changeMonth(dir) { calM += dir; if (calM > 11) { calM = 0; calY++; } if (calM < 0) { calM = 11; calY--; } renderCalendar(); }

/* ---------- log panel ---------- */
function openPanel(ds) {
  logDate = ds || today(); selType = null; delStep = false;
  const td = new Date(); td.setHours(0,0,0,0); const isToday = dayOf(logDate).getTime() === td.getTime();
  document.getElementById("panel-title").textContent = isToday ? t("panelLog") : t("panelEdit");
  const dt = dayOf(logDate);
  document.getElementById("panel-date").textContent = WDAYS[LANG][dt.getDay()] + ", " + dt.getDate() + " " + MONTHS_S[LANG][dt.getMonth()] + " " + dt.getFullYear();
  document.getElementById("type-grid").innerHTML = TYPE_ORDER.map(tp => { const ti = typeInfo(tp); const span = tp === "rest" ? ' style="grid-column:span 2"' : ""; return `<button class="type-btn" data-type="${tp}"${span} onclick="pickType('${tp}',this)"><span class="tdot" style="background:${ti.color}"></span>${ti.label}</button>`; }).join("");
  document.getElementById("lifts-container").innerHTML = ""; document.getElementById("log-notes").value = "";
  const ex = state.logs[logDate];
  if (ex) {
    pickType(ex.type, null);
    document.getElementById("log-notes").value = ex.note || "";
    if (ex.lifts) for (const k in ex.lifts) { const kg = document.getElementById("kg::" + k), rp = document.getElementById("rp::" + k); if (kg && ex.lifts[k].kg != null) kg.value = ex.lifts[k].kg; if (rp && ex.lifts[k].reps != null) rp.value = ex.lifts[k].reps; }
    const db = document.getElementById("del-btn"); db.classList.add("vis"); db.textContent = t("del"); db.classList.remove("confirm");
  } else { document.getElementById("del-btn").classList.remove("vis"); }
  const ov = document.getElementById("overlay"); ov.style.display = "flex"; requestAnimationFrame(() => requestAnimationFrame(() => ov.classList.add("vis")));
}
function closePanel() { const ov = document.getElementById("overlay"); ov.classList.remove("vis"); setTimeout(() => { ov.style.display = "none"; }, 360); }
function handleOverlay(e) { if (e.target === document.getElementById("overlay")) closePanel(); }
function pickType(type, btn) {
  selType = type;
  document.querySelectorAll(".type-btn").forEach(b => b.className = "type-btn");
  const target = btn || document.querySelector('.type-btn[data-type="' + type + '"]'); if (target) target.classList.add("sel-" + type);
  const cont = document.getElementById("lifts-container");
  if (type === "rest") { cont.innerHTML = `<div class="rest-panel-note">${t("restPanel")}</div>`; return; }
  const w = WORKOUTS[type];
  cont.innerHTML = `<label class="flbl">${t("fldLifts")}</label>` + w.exercises.map(ex => {
    const kgPlace = (ex.nt.en.match(/(\d+)kg/) || [,""])[1] || "";
    return `<div class="lift-row"><div class="lift-name">${L(ex.name)}</div><div class="lift-grp"><input type="number" class="lift-input" id="kg::${ex.key}" placeholder="${kgPlace || "—"}" min="0" step="0.5"><div class="lift-ilbl">${t("kg")}</div></div><div class="lift-grp"><input type="number" class="lift-input" id="rp::${ex.key}" placeholder="${tReps(ex.r)}" min="0"><div class="lift-ilbl">${t("reps")}</div></div></div>`;
  }).join("");
}
function saveLog() {
  if (!selType) { toast(t("pickType")); return; }
  const lifts = {};
  if (selType !== "rest") { WORKOUTS[selType].exercises.forEach(ex => { const kg = parseFloat((document.getElementById("kg::" + ex.key) || {}).value); const rp = parseFloat((document.getElementById("rp::" + ex.key) || {}).value); if (!isNaN(kg) || !isNaN(rp)) lifts[ex.key] = { kg: isNaN(kg) ? null : kg, reps: isNaN(rp) ? null : rp }; }); }
  state.logs[logDate] = { type: selType, note: document.getElementById("log-notes").value.trim(), lifts, ts: Date.now() };
  saveState(); closePanel(); refresh(); toast(IC.check + " " + t("saved"));
}
function deleteLog() {
  const btn = document.getElementById("del-btn");
  if (!delStep) { delStep = true; btn.textContent = t("delConfirm"); btn.classList.add("confirm"); setTimeout(() => { delStep = false; btn.textContent = t("del"); btn.classList.remove("confirm"); }, 3500); return; }
  delete state.logs[logDate]; saveState(); closePanel(); refresh(); toast(t("deleted"));
}

/* ---------- routine ---------- */
function buildRoutine() {
  document.getElementById("days-grid").innerHTML = SCHEDULE.map(s => {
    const isRest = s.w === "rest"; const w = isRest ? REST_INFO : WORKOUTS[s.w]; let body;
    if (isRest) { body = `<div class="rest-content">${L(REST_INFO.restTx).replace(/\n/g, "<br>")}</div>`; }
    else {
      const exs = w.exercises.map(e => `<div class="ex-item"><div><div class="ex-name">${L(e.name)}</div><div class="ex-note">${L(e.nt)}</div></div><div><div class="ex-chip s">${e.s}</div><div class="ex-chip-l">${t("setsL")}</div></div><div><div class="ex-chip r">${tReps(e.r)}</div><div class="ex-chip-l">${t("repsL")}</div></div><div class="d-col"><div class="ex-chip d">${e.d}</div><div class="ex-chip-l">${t("restL")}</div></div></div>`).join("");
      body = `<div class="warmup"><div class="warmup-t">${IC.flame} ${t("warmup")}</div><div class="warmup-tx">${L(w.warmup)}</div></div><div class="ex-list">${exs}</div><div class="tip"><div class="tip-t">${IC.bulb} ${t("cue")}</div><div class="tip-tx">${L(w.tip)}</div></div><button class="log-this-btn" onclick="event.stopPropagation();openPanel(null)">${IC.plus} ${t("logThis")}</button>`;
    }
    const sub = isRest ? "" : `<span class="day-sub"> — ${L(w.focus)}</span>`;
    return `<div class="day-card"><div class="day-hdr" onclick="this.parentElement.classList.toggle('active')"><div class="day-num">${s.num}</div><div class="day-info"><div class="day-dname">${L(s.day)}</div><div class="day-title">${L(w.title)}${sub}</div></div><div class="dbadge ${w.badge}">${L(w.badgeTx)}</div><div class="day-chev">&#9662;</div></div><div class="day-body">${body}</div></div>`;
  }).join("");
  document.getElementById("principles-grid").innerHTML = PRINCIPLES.map(p => `<div class="principle">${p.ic}<h4>${L(p.t)}</h4><p>${L(p.d)}</p></div>`).join("");
}
function showSub(name, btn) { document.getElementById("sub-week").style.display = name === "week" ? "block" : "none"; document.getElementById("sub-principles").style.display = name === "principles" ? "block" : "none"; document.querySelectorAll(".sub-tab").forEach(tb => tb.classList.remove("active")); btn.classList.add("active"); }

/* ---------- exercises ---------- */
function buildExercises() {
  const el = document.getElementById("ex-guide"); if (!el) return;
  el.innerHTML = EXERCISES.map(grp => {
    const cards = grp.items.map(ex => `<div class="day-card guide-card"><div class="day-hdr" onclick="this.parentElement.classList.toggle('active')"><div class="day-info"><div class="day-dname">${L(grp.group)} · ${L(ex.target)}</div><div class="day-title gtitle">${L(ex.n)}</div></div><div class="dbadge ${grp.cls}">${tEquip(ex.equip)}</div><div class="day-chev">&#9662;</div></div><div class="day-body"><div class="guide-equip">${IC.dumbbell} ${t("equipment")} — ${tEquip(ex.equip)}</div><ol class="guide-steps">${L(ex.steps).map(s => `<li>${s}</li>`).join("")}</ol><div class="tip"><div class="tip-t">${IC.bulb} ${t("keyCue")}</div><div class="tip-tx">${L(ex.tip)}</div></div></div></div>`).join("");
    return `<div class="sec-hdr" style="margin-top:8px">${L(grp.group)}</div><div class="days-grid" style="margin-bottom:18px">${cards}</div>`;
  }).join("");
}

/* ---------- nutrition view ---------- */
function renderNutrition() {
  const n = nutrition(), p = state.profile;
  document.getElementById("nut-grid").innerHTML = `
    <div class="nut-card">
      <h4>${IC.chart} ${t("nutStats")}</h4>
      <div class="stats-editor">
        <label>${t("fWeight")}<input type="number" step="0.5" id="pf-weight" value="${p.weight}"></label>
        <label>${t("fHeight")}<input type="number" id="pf-height" value="${p.height}"></label>
        <label>${t("fAge")}<input type="number" id="pf-age" value="${p.age}"></label>
        <label>${t("fSex")}<select id="pf-sex"><option value="male"${p.sex==="male"?" selected":""}>${t("male")}</option><option value="female"${p.sex==="female"?" selected":""}>${t("female")}</option></select></label>
        <label>${t("fActivity")}<select id="pf-act"><option value="1.2"${p.activity==1.2?" selected":""}>${t("sedentary")}</option><option value="1.375"${p.activity==1.375?" selected":""}>${t("lightAct")}</option><option value="1.5"${p.activity==1.5?" selected":""}>${t("moderate")}</option><option value="1.725"${p.activity==1.725?" selected":""}>${t("veryActive")}</option></select></label>
        <label>${t("fGoal")}<select id="pf-goal"><option value="gain"${p.goal==="gain"?" selected":""}>${t("goalGain")}</option><option value="maintain"${p.goal==="maintain"?" selected":""}>${t("goalMaintain")}</option><option value="lose"${p.goal==="lose"?" selected":""}>${t("goalLose")}</option></select></label>
      </div>
      <button class="log-this-btn" style="margin-top:12px" onclick="saveProfile()">${IC.check} ${t("update")}</button>
    </div>
    <div class="nut-card">
      <h4>${IC.bolt} ${t("nutTargets")}</h4>
      <div class="macro-row"><span>${t("mCalories")}</span><div><span class="macro-val">${n.calories.toLocaleString()}</span> <span class="macro-sub">kcal</span></div></div>
      <div class="macro-row"><span>${t("mProtein")}</span><div><span class="macro-val">${n.protein}g</span> <span class="macro-sub">2.0 g/kg</span></div></div>
      <div class="macro-row"><span>${t("mCarbs")}</span><div><span class="macro-val">${n.carbs}g</span></div></div>
      <div class="macro-row"><span>${t("mFat")}</span><div><span class="macro-val">${n.fat}g</span></div></div>
      <div class="macro-row"><span>${t("mBMI")}</span><div><span class="macro-val">${n.bmi}</span> <span class="macro-sub">${n.bmi<18.5?t("bmiUnder"):n.bmi<25?t("bmiHealthy"):t("bmiHigh")}</span></div></div>
    </div>
    <div class="nut-card"><h4>${IC.fork} ${t("nutProtein")}</h4><ul>${L(NUT.protein).map(x => `<li>${x}</li>`).join("")}</ul></div>
    <div class="nut-card"><h4>${IC.rice} ${t("nutCarbs")}</h4><ul>${L(NUT.carbs).map(x => `<li>${x}</li>`).join("")}</ul></div>`;
  const info = document.getElementById("nut-info");
  if (n.bmi < 18.5) { info.style.display = "block"; info.innerHTML = `<div class="info-box-t">${IC.info} ${t("infoT")}</div><div class="info-box-tx">${t("infoTx").replace("{bmi}", n.bmi)}</div>`; }
  else { info.style.display = "none"; }
  document.getElementById("nut-disc").innerHTML = `${IC.info}<span>${t("disclaimer")}</span>`;
}
function saveProfile() {
  const g = id => document.getElementById(id);
  const newW = parseFloat(g("pf-weight").value) || state.profile.weight; const prevW = state.profile.weight;
  state.profile = { weight: newW, height: parseFloat(g("pf-height").value) || state.profile.height, age: parseInt(g("pf-age").value) || state.profile.age, sex: g("pf-sex").value, activity: parseFloat(g("pf-act").value), goal: g("pf-goal").value };
  if (newW !== prevW) { const tdy = today(), ex = state.bodyweight.find(b => b.date === tdy); if (ex) ex.kg = newW; else state.bodyweight.push({ date: tdy, kg: newW }); state.bodyweight.sort((a,b) => a.date.localeCompare(b.date)); }
  saveState(); renderNutrition(); setTag(); toast(IC.check + " " + t("updated"));
}

/* ---------- progression ---------- */
function buildProgression() {
  document.getElementById("prog-phases").innerHTML = PHASES.map(p => `<div class="prog-ph"><div class="ph-week">${L(p.wk)}</div><div class="ph-title">${L(p.t)}</div><div class="ph-desc">${L(p.d)}</div></div>`).join("");
  document.getElementById("pr-lift-tabs").innerHTML = TRACKED.map(tk => `<button class="pr-ltab${tk.key===curPR?" active":""}" data-pr="${tk.key}" onclick="showPR('${tk.key}')">${L(tk.label)}</button>`).join("");
}
function showPR(key) { curPR = key; document.querySelectorAll(".pr-ltab").forEach(tb => tb.classList.toggle("active", tb.dataset.pr === key)); renderPR(key); }
function renderPR(key) {
  const c = document.getElementById("pr-chart"); const label = L((TRACKED.find(tk => tk.key === key) || {}).label) || key;
  let entries;
  if (key === "__bw") entries = state.bodyweight.map(b => ({ d: b.date, kg: b.kg }));
  else entries = Object.keys(state.logs).filter(d => state.logs[d].lifts && state.logs[d].lifts[key] && state.logs[d].lifts[key].kg != null).sort().map(d => ({ d, kg: state.logs[d].lifts[key].kg }));
  if (!entries.length) {
    const what = key === "__bw" ? (LANG === "es" ? "tu peso corporal en la pestaña de Nutrición" : "your bodyweight in the Nutrition tab") : (LANG === "es" ? label + " en un entreno" : label + " in a workout");
    c.innerHTML = `<div class="pr-empty">${LANG === "es" ? "Registra " + what + " para ver tu progresión aquí." : "Log " + what + " to see your progression here."}</div>`;
    return;
  }
  const max = Math.max(...entries.map(e => e.kg)), min = Math.min(...entries.map(e => e.kg)), range = max - min || 1; const latest = entries[entries.length - 1];
  const bars = entries.slice(-14).map(e => { const h = 18 + ((e.kg - min) / range) * 78; const [,m,d] = e.d.split("-").map(Number); return `<div class="pr-bar-w"><div class="pr-bar" style="height:${h}%"><div class="pr-bval">${e.kg}</div></div><div class="pr-bdate">${d}/${MONTHS_S[LANG][m-1]}</div></div>`; }).join("");
  c.innerHTML = `<div class="pr-head"><div class="pr-head-l">${label}</div><div class="pr-head-v">${latest.kg} kg <small>${t("latest")}</small></div></div><div class="pr-bars">${bars}</div>`;
}

/* ---------- toast ---------- */
let toastT;
function toast(msg) { const el = document.getElementById("toast"); el.innerHTML = msg; el.classList.add("show"); clearTimeout(toastT); toastT = setTimeout(() => el.classList.remove("show"), 2600); }

/* ---------- i18n apply / language switch ---------- */
function applyI18n() {
  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-html]").forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); });
  document.querySelectorAll("[data-i18n-ph]").forEach(el => { el.placeholder = t(el.dataset.i18nPh); });
  setTag();
}
function setTag() { const p = state.profile; document.getElementById("tag").textContent = `${t("tagPlan")} · ${p.age} ${t("yrs")} · ${p.height} cm · ${p.weight} kg`; }
function updateLangBtns() { document.querySelectorAll(".lang-btn").forEach(b => b.classList.toggle("active", b.dataset.lang === LANG)); }
function setLang(lang) {
  if (lang !== "en" && lang !== "es") return;
  LANG = lang; try { localStorage.setItem("forge_lang", lang); } catch (e) {}
  document.documentElement.lang = lang;
  updateLangBtns(); applyI18n();
  buildNav(); buildRoutine(); buildExercises(); buildProgression(); renderNutrition(); renderPR(curPR); refresh();
}

/* ---------- exports ---------- */
window.switchTab = switchTab; window.changeMonth = changeMonth; window.openPanel = openPanel; window.closePanel = closePanel;
window.handleOverlay = handleOverlay; window.pickType = pickType; window.saveLog = saveLog; window.deleteLog = deleteLog;
window.showSub = showSub; window.saveProfile = saveProfile; window.showPR = showPR; window.setLang = setLang;

/* ---------- init ---------- */
document.documentElement.lang = LANG;
buildNav(); buildRoutine(); buildExercises(); buildProgression(); renderNutrition(); renderPR(curPR);
applyI18n(); updateLangBtns(); refresh();

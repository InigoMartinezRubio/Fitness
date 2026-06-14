# FORGE — Muscle Protocol

A bold, mobile-friendly web app to run and track a beginner muscle-building
program built around **2×5kg + 2×8kg dumbbells** plus bodyweight. Dark, squared,
high-contrast design (Bebas Neue + DM Sans). All progress is saved privately in
your browser. No accounts, no servers, no emojis — clean line icons throughout.

## Languages

Use the **EN / ES** switch in the top-right to flip the entire app between English
and Spanish — every label, workout, exercise tutorial and nutrition string is
translated. Your choice is remembered on the device.

## Tabs

- **Tracker** — a color-coded calendar of your training, current/best streak,
  this-week count, total workouts and consistency. Tap any past day (or "Log
  today's workout") to open the logging panel.
- **Routine** — the 4-day Upper/Lower split (Mon Upper A, Tue Lower A, Thu Upper B,
  Fri Lower B; Wed/Sat/Sun rest) as expandable cards with warm-ups, form cues and
  every exercise's sets/reps/rest. A "Principles" sub-tab covers the essentials.
- **Nutrition** — personalized daily calorie and protein/carb/fat targets computed
  from your stats (editable), with BMI, protein/carb sources and a note for lean
  lifters.
- **Progression** — a 12-week plan plus a weight-progression bar chart for your key
  lifts and bodyweight, drawn from what you log.
- **Exercises** — a library of every move in the program, grouped by Push / Pull /
  Legs / Core. Tap any exercise to expand a step-by-step how-to written for your
  5kg and 8kg dumbbells, with a key coaching cue.

## Logging

Open the panel from the calendar or the routine. Pick the workout (Upper A, Lower A,
Upper B, Lower B or Rest); the matching dumbbell exercises appear with kg + reps
fields. Add a note, save. Edit or delete any day by tapping it on the calendar.

## Run locally

Open `index.html` in a browser. (Fonts load from Google Fonts, so keep a connection
for the exact typeface.)

## Deploy to GitHub Pages

1. Create a new GitHub repository.
2. Upload `index.html`, `styles.css`, `app.js` and this `README.md`.
3. Repo **Settings → Pages → Build and deployment → Source → Deploy from a branch**.
4. Pick branch **main**, folder **/ (root)**, **Save**.
5. After ~1 minute it's live at `https://<your-username>.github.io/<repo-name>/`.

On your phone, open the URL and use "Add to Home Screen" for a full-screen app.

## Your data

Progress lives in your browser's local storage per device. Clearing browser data, or
switching device/browser, starts fresh.

## Customising

Edit the data objects near the top of `app.js`: `WORKOUTS` (exercises, sets, reps,
cues), `SCHEDULE` (weekly layout), `PHASES`, `PRINCIPLES`. Colors live in `:root`
inside `styles.css`. No build step.

## Note

The program and nutrition figures are general fitness guidance, not medical advice.
If your low weight is unintentional, consider speaking with a doctor or dietitian.

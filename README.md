# FORGE — Personal Training Tracker

A clean, mobile-friendly web app to run and track a beginner muscle-building
program built around **2×5kg + 2×8kg dumbbells** plus bodyweight. Works on phone,
tablet and desktop. All progress is saved privately in your browser.

## Features

- **Today** — see the day's session, your streak, weekly progress and totals.
- **Program** — a 4-day Upper/Lower split (Mon, Tue, Thu, Fri) with form cues for every exercise.
- **Logging** — tick off exercises and record reps/weight per set; a finish button marks the session done.
- **Progress** — sessions-per-week chart, bodyweight tracking, lifetime volume.
- **Tips** — the core principles that drive most of your results.

No accounts, no servers, no tracking. Custom inline SVG icons, no emojis.

## Run locally

Just open `index.html` in a browser. (Charts and fonts load from a CDN, so keep an internet connection for those.)

## Deploy to GitHub Pages

1. Create a new repository on GitHub (e.g. `fitness`).
2. Upload `index.html`, `styles.css`, `app.js` and this `README.md` to the repo
   (drag-and-drop in the GitHub web UI, or `git push`).
3. In the repo go to **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
5. Select branch **main** and folder **/ (root)**, then **Save**.
6. Wait ~1 minute. Your app will be live at
   `https://<your-username>.github.io/<repo-name>/`.

### Tip: add it to your phone home screen
Open the live URL in your phone browser, then "Add to Home Screen". It opens
full-screen like a native app.

## Your data

Progress lives in your browser's local storage on each device. Clearing browser
data, or using a different device/browser, starts fresh. Use **Progress → Reset
all progress** to wipe it deliberately.

## Customising the program

Open `app.js` and edit the `PROGRAM` object near the top — change exercises,
sets, reps, loads or the weekly `schedule`. Edit the `TIPS` array to change the
tips page. No build step required.

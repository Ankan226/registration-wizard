## Session 1 — Architecture Planning

**What I asked:** How to structure a multi-step form in React so that data 
entered in an earlier step isn't lost when navigating back to it.

**What I learned:** The correct pattern is "lifting state up" — instead of 
each step component managing its own local `useState`, a single `formData` 
object lives in the parent (`App.jsx`). Each step receives the shared state 
and an `updateField` function as props, so all steps read from and write to 
the same source of truth. This is why the Back button correctly retains 
previously entered data.

**What I implemented:** `App.jsx` holds `formData`, `step`, and `submitted` 
state. `StepOne`, `StepTwo`, and `StepThree` are presentational components 
that receive props and call `updateField` on change.

---

## Session 2 — Environment Setup: EPERM Crash

**Problem:** `npm run dev` crashed intermittently with:
              Error: EPERM: operation not permitted, rmdir '...\node_modules.vite\deps_temp_...'

**What I asked:** Why this happens and how to fix it permanently.

**What I learned:** The project was located inside a OneDrive-synced folder 
(`Desktop`). OneDrive actively locks/scans files while Vite writes its 
dependency cache, causing file-system race conditions. The fix is to move 
development projects outside any cloud-synced directory.

**What I did:** Recreated the project at `C:\Users\ankan\Projects\registration-wizard`, 
outside OneDrive's sync scope. Confirmed the dev server ran cleanly afterward 
with no further EPERM errors.

---

## Session 3 — Real-Time Validation Logic

**What I asked:** How to validate email format and password rules using 
`onChange` instead of waiting for form submission, and how to conditionally 
disable a button based on multiple field states.

**What I learned:** 
- Regex pattern `^[^\s@]+@[^\s@]+\.[^\s@]+$` checks for a valid email shape.
- Validation booleans (`emailValid`, `passwordValid`, `confirmValid`) can be 
  computed inline on every render from current state, and combined into a 
  single `isValid` flag.
- The `disabled` prop on a button can be bound directly to `!isValid`, so 
  React re-evaluates it automatically on every keystroke without extra event 
  handlers.

**What I implemented:** Live error messages under Email/Password/Confirm 
Password fields in `StepTwo.jsx`, and a disabled `Next` button until all 
three pass validation.

---

## Session 4 — Password Visibility Toggle

**What I asked:** How to implement a show/hide password eye icon.

**What I learned:** Bind the input's `type` attribute to a boolean state 
(`showPassword`), toggling between `"password"` and `"text"`. Used the 
`lucide-react` icon library for the Eye/EyeOff icons.

---

## Session 5 — Git Workflow

**What I asked:** How to push a project to GitHub file-by-file for a cleaner 
commit history, and what should/shouldn't be committed.

**What I learned:** Source files, configs (`package.json`, `vite.config.js`), 
and `.gitignore` itself belong in version control. `node_modules` and `dist` 
should never be committed — they're regenerated via `npm install` / 
`npm run build`, and `.gitignore` prevents them from being tracked.

---

## Session 6 — Vercel Deployment Failure

**Problem:** Deployment failed with:
            [UNRESOLVED_IMPORT] Could not resolve './App.css' in src/App.jsx

**What I asked:** Why the app built fine locally but failed on Vercel.

**What I learned:** Vercel builds from a fresh clone of the GitHub repo, not 
my local file system. `App.css` existed locally but had not actually been 
committed and pushed in an earlier step, so the import had nothing to 
resolve against on the server. This taught me to always verify a repo's 
remote file tree matches my local project before assuming a deployment 
will work.

**What I did:** Ran `git status` to confirm `App.css` was untracked, then 
added, committed, and pushed it, which resolved the build error.

---
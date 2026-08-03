#  Registration Wizard

A multi-step, client-side validated registration form built in React — architected with a segmented UI, centralized state management, and real-time validation, following modern SaaS/FinTech onboarding patterns.

**Live Demo:**  https://registration-wizard-ad54.vercel.app/

---

## 📸 Screenshots

### Step 1 — Personal Info
![Step 1 - Personal Info](./screenshots/step1-personal-info.png)

### Step 2 — Account Details with Real-Time Validation
![Step 2 - Account Details](./screenshots/step2-account-details.png)

### Step 3 — Review & Submit
![Step 3 - Review and Submit](./screenshots/step3-review-submit.png)

### Success State
![Success Screen](./screenshots/success-screen.png)

> **Note:** Create a `screenshots/` folder in the project root and add your own PNG captures with these exact filenames (or update the paths above to match your files) before pushing.

---

## ✨ Features

### Core Functionality (Phase 1)
- **3-step wizard** — Personal Info → Account Details → Review & Submit, controlled entirely via conditional rendering (no router)
- **Lifted state architecture** — a single `formData` object lives in the parent `App` component and is passed down via props, so data typed in Step 1 persists correctly when navigating back from Step 2 or 3
- **Next / Back navigation** — with `type="button"` on all triggers to avoid unwanted form submission/page refresh
- **Submission payload** — final data is logged to the console and triggers a success UI state

### Validation & UX Polish (Phase 2)
- **Real-time validation** — triggered on `onChange`, not on submit
  - Email format checked against `^[^\s@]+@[^\s@]+\.[^\s@]+$`
  - Password requires a minimum of 8 characters
  - Confirm Password must exactly match Password
- **Conditional button disabling** — the `Next` button stays disabled until all fields in the current step pass validation
- **Show/Hide password toggle** — eyeball icon switches input type between `password` and `text`
- **Dynamic progress bar** — visually reflects current step (e.g., "Step 2 of 3")

---

## 🛠 Tech Stack

| Tool | Purpose |
|---|---|
| [React](https://react.dev) | UI library |
| [Vite](https://vitejs.dev) | Build tool & dev server |
| [lucide-react](https://lucide.dev) | Icon library (eye/eye-off toggle) |
| Vanilla CSS | Styling (no framework) |

---

---

##  Getting Started Locally

### Prerequisites
- [Node.js](https://nodejs.org) (LTS version)

### Installation

```bash
git clone https://github.com/Ankan226/registration-wizard.git
cd registration-wizard
npm install
```

### Run the development server

```bash
npm run dev
```

Open the printed local URL (typically `http://localhost:5173`) in your browser.

### Build for production

```bash
npm run build
```

---

## 🤖 AI Usage

This project was built with AI-assisted debugging and architectural guidance under a "Learn, Don't Copy" policy. Full session logs are documented in [`Prompts.md`](./Prompts.md).

---

## 📄 License

This project was built as part of a training sprint and is not licensed for commercial reuse.

---

**Author:** Ankan Pal
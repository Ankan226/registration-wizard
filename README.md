#  Registration Wizard

A multi-step, client-side validated registration form built in React — architected with a segmented UI, centralized state management, and real-time validation, following modern SaaS/FinTech onboarding patterns.

**Live Demo:**  https://registration-wizard-ad54.vercel.app/

---

## 📸 Screenshots

### Step 1 — Personal Info
<img width="532" height="796" alt="image" src="https://github.com/user-attachments/assets/cf1e4b61-52e6-4337-8810-690881aca0df" />


### Step 2 — Account Details with Real-Time Validation
<img width="501" height="801" alt="image" src="https://github.com/user-attachments/assets/3808bf6c-75a3-4fa4-b937-469caf77524d" />


### Step 3 — Review & Submit
<img width="528" height="670" alt="image" src="https://github.com/user-attachments/assets/02d41df0-c512-4400-8164-b4bfa4a2980e" />


### Success State
<img width="1605" height="684" alt="image" src="https://github.com/user-attachments/assets/a428015c-c204-472f-8dbb-cfb8c9b2dcba" />


---

##  Features

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

<div align="center">

# ✚ OPD Saathi

### A Smart OPD Queue Management System with ML-Powered Wait Time Predictions

[![React Native](https://img.shields.io/badge/React%20Native-0.74.5-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-51.0-000020?style=for-the-badge&logo=expo&logoColor=white)](https://expo.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React Navigation](https://img.shields.io/badge/React%20Navigation-6.x-6B52AE?style=for-the-badge&logo=react&logoColor=white)](https://reactnavigation.org/)

*Reducing patient wait times. Improving hospital efficiency. One token at a time.*

</div>

---

## 📖 Overview

**OPD Saathi** is a cross-platform mobile application (Android & Web) built for public and private hospitals to digitize and intelligently manage their Outpatient Department (OPD) queue system. Patients can track their real-time queue position, book time-slotted appointments, and receive proactive notifications — all from a beautifully designed mobile interface.

On the administrative side, hospital staff get a live dashboard with key operational metrics, doctor availability management, system alerts, and the analytical tools needed to plan for peak hours and optimize resource allocation.

The platform's core differentiator is its **ML-powered intelligence layer** — integrating predictive wait time estimation and patient inflow forecasting to move hospital management from reactive to proactive.

---

## ✨ Features

### 🧑‍⚕️ Patient Side

| Feature | Description |
|---|---|
| **Authentication** | Login and account creation via phone number and password |
| **Hospital Selection** | Browse nearby hospitals with live queue sizes and wait-level indicators (Low / Moderate / High) |
| **Department Selection** | Grid view of all OPD departments with doctor count and next available slot; includes AI-assisted triage prompt for undecided patients |
| **Doctor Selection** | Browse available doctors by specialty; each card shows experience, live queue depth, ML-estimated wait time, and a traffic-level badge (Medium / Heavy) |
| **Time-Slot Booking** | Interactive date picker with morning and afternoon slot grids showing real-time slot availability and estimated wait time per slot |
| **Appointment Confirmation** | Summarized booking review screen showing patient, doctor, date/time, and ML-estimated wait time before final confirmation; hospital policy note included |
| **Booking Success** | Post-confirmation screen displaying the generated token number, appointment date/time, and ML estimated wait — with quick links to Track Queue or go back to Dashboard |
| **Live Queue Tracking** | Visual token card showing your token number, currently serving number, and estimated wait time; animated queue progress timeline with Completed / Inside / You / Next states |
| **Appointment History** | View all past and upcoming consultations |
| **Medical Records** | Access to prescriptions and test results |
| **Real-time Notifications** | Push-style notifications for turn alerts, booking confirmations, queue updates, and system advisories |
| **User Profile** | View and edit personal information; access account activity and logout |

> **Note:** Patient accounts are created and registered by staff members at the hospital counter. The registration process is counter-managed to ensure data integrity.

---

### 🖥️ Admin Side

| Feature | Description |
|---|---|
| **Live Dashboard Metrics** | At-a-glance KPI cards for Total Patients Today, Average Wait Time, Consultations Done, and Active Doctors |
| **Live Queue Management** | Real-time tabular view of all patients in queue across departments, with token number, status (Waiting / Next / In Consultation), and wait time |
| **Doctor Status Panel** | Live availability status for each doctor (Available / In Surgery / On Break) with color-coded indicators |
| **System Alerts** | Real-time operational alerts for high wait times, department congestion, and scheduled maintenance events |
| **Walk-in Patient Addition** | Quickly add walk-in patients directly to the live queue from the admin panel |

---

### 🧠 Intelligence Layer

| Feature | Description |
|---|---|
| **ML Wait Time Prediction** | Each time slot and appointment confirmation is augmented with an ML-estimated wait time, factoring in real-time queue depth and historical patterns |
| **Patient Inflow Forecasting** | Predictive model for estimating patient volume to help hospitals staff appropriately |
| **AI-Assisted Triage** | Smart symptom-to-department routing to direct patients to the correct specialty without needing to know medical terminology |
| **Peak Hour Analysis** | Heatmap visualization of high-traffic periods to assist resource planning |

---

## 🛠 Tech Stack

### Frontend (Mobile App)

| Technology | Version | Purpose |
|---|---|---|
| **React Native** | 0.74.5 | Core cross-platform mobile UI framework |
| **Expo** | ~51.0.35 | Development toolchain, build system, and app hosting |
| **TypeScript** | ~5.9.2 | Static type safety across all screens and components |
| **React Navigation** | ^6.1.17 | Stack-based navigation with fade animations |
| `@react-navigation/native-stack` | ^6.9.26 | Native stack navigator for performance |
| **react-native-screens** | ~3.31.1 | Native screen container optimization |
| **react-native-safe-area-context** | 4.10.5 | Safe-area inset handling for notch/punch-hole devices |
| **react-native-svg** | 15.2.0 | SVG rendering support |
| **react-native-web** | ~0.19.10 | Web target support via Expo |
| **twrnc** | ^4.16.0 | Tailwind-style utility classes (used in shared `TopNav` and `BottomNav` components) |
| **lucide-react-native** | ^0.378.0 | Icon library |
| **clsx** + **tailwind-merge** | ^2.1.1 / ^3.5.0 | Utility class merging helpers |
| **Babel Preset Expo** | ~11.0.14 | Transpilation and JSX support |

### Styling

All UI is built using **React Native `StyleSheet.create`** — the platform's native styling API. The design system follows **Material Design 3** (MD3) color tokens:
- Primary: `#6750A4` (Deep Purple)
- Accent / Interactive: `#0057FF` (Action Blue)
- Surface, error, warning states follow MD3 conventions

### Backend / API *(Referred in codebase)*

The mobile app is designed to integrate with:
- A **REST API backend** for appointment management, queue state, and user records
- A **FastAPI (Python)** ML server for real-time wait time prediction and inflow forecasting

### ML / AI *(Intelligence Layer)*

- **Python** — ML model training and serving
- **FastAPI** — ML inference API server
- Predictive models for wait time estimation, peak hour heatmaps, and patient inflow forecasting

---

## 🗂 Project Structure

```
mobile/
├── src/
│   ├── screens/               # All application screens (25 screens)
│   │   ├── Splash.tsx         # Initial loading / branding screen
│   │   ├── Onboarding.tsx     # Feature showcase & app intro
│   │   ├── Landing.tsx        # Welcome landing page
│   │   ├── Auth.tsx           # Login / Sign-up (phone + password)
│   │   ├── SelectHospital.tsx # Nearby hospital selection with live wait indicators
│   │   ├── Departments.tsx    # OPD department grid with search & AI triage
│   │   ├── Doctors.tsx        # Doctor listing with live queue depth & traffic badges
│   │   ├── Schedule.tsx       # Date picker + time-slot grid with availability
│   │   ├── Confirm.tsx        # Appointment summary and final confirmation
│   │   ├── Success.tsx        # Token card shown after booking confirmation
│   │   ├── Queue.tsx          # Live queue tracker with timeline & token card
│   │   ├── Dashboard.tsx      # Patient home (queue status + quick action cards)
│   │   ├── Admin.tsx          # Admin live dashboard (metrics, queue, doctors, alerts)
│   │   ├── Notifications.tsx  # In-app notification feed (unread, mark read, clear)
│   │   ├── Profile.tsx        # User profile, edit, logout, account activity
│   │   ├── AppointmentHistory.tsx  # Past appointment records
│   │   ├── Records.tsx        # Medical records and prescriptions
│   │   ├── Emergency.tsx      # Emergency information screen
│   │   ├── AccessDenied.tsx   # 403 access denied screen
│   │   ├── NotFound.tsx       # 404 not found screen
│   │   ├── SkeletonBooking.tsx     # Loading skeleton for booking flow
│   │   ├── SkeletonDashboard.tsx   # Loading skeleton for dashboard
│   │   └── SkeletonQueue.tsx       # Loading skeleton for queue screen
│   │
│   ├── components/            # Shared UI components
│   │   ├── TopNav.tsx         # Context-aware top navigation bar (route-based title)
│   │   ├── BottomNav.tsx      # 5-tab bottom navigation (Home/Schedule/Queue/History/Profile)
│   │   ├── Layout.tsx         # Screen layout wrapper
│   │   └── PWAPrompt.tsx      # Progressive Web App install prompt
│   │
│   ├── navigation/
│   │   └── AppNavigator.tsx   # Central stack navigator (19 routes, fade animation)
│   │
│   └── lib/
│       └── utils.ts           # cn() utility — safe clsx wrapper
│
├── android/                   # Android native project files
├── public/                    # Static web assets
├── app.json                   # Expo app config (slug: opd-saathi, package: com.vaibhavguptahere.opdsaathi)
├── babel.config.js            # Babel transpilation config (babel-preset-expo)
├── metro.config.js            # Metro bundler configuration
├── tsconfig.json              # TypeScript compiler options (target: ES2022)
└── package.json               # Dependencies and npm scripts
```

### Screen Quick Reference

| Screen | Route Name | Nav Shown | Purpose |
|---|---|---|---|
| Splash | `Splash` | None | App launch / branding |
| Onboarding | `Onboarding` | None | Feature intro carousel |
| Landing | `Landing` | Top only | Marketing landing |
| Auth | `Auth` | None | Login / register |
| Dashboard | `Dashboard` | Top + Bottom | Patient home |
| Select Hospital | `SelectHospital` | Top + Bottom | Hospital picker |
| Departments | `Departments` | Top + Bottom | Specialty chooser |
| Doctors | `Doctors` | Top + Bottom | Doctor listing |
| Schedule | `Schedule` | Top + Bottom | Time slot picker |
| Confirm | `Confirm` | Top + Bottom | Booking review |
| Success | `Success` | Top only | Token display |
| Queue | `Queue` | Top + Bottom | Live queue tracker |
| Admin | `Admin` | Top only | Admin dashboard |
| Notifications | `Notifications` | Top + Bottom | Notification feed |
| Profile | `Profile` | Top + Bottom | User settings |
| History | `History` | Top + Bottom | Appointment history |
| Records | `Records` | Top + Bottom | Medical records |

---

## ⚙️ Installation & Setup

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** — v18 or higher ([Download](https://nodejs.org/))
- **npm** — v9 or higher (bundled with Node.js)
- **Expo CLI** — Install globally:
  ```bash
  npm install -g expo-cli
  ```
- **Android Studio** (for Android emulator) or a physical Android device with **Expo Go** installed
- **Python 3.10+** (for the ML/FastAPI inference server)

---

### Step 1: Clone the Repository

```bash
git clone https://github.com/vaibhavguptahere/OPD_Saathi_DTI_Project.git
cd OPD_Saathi_DTI_Project/mobile
```

---

### Step 2: Install Dependencies

```bash
npm install
```

---

### Step 3: Configure Environment Variables

Create a `.env` file in the `mobile/` directory (based on `.env.example` if present):

```env
# API Configuration
API_BASE_URL=http://localhost:8000
ML_SERVER_URL=http://localhost:8001

# App Configuration
APP_ENV=development
```

> **Note:** If you are running the app on a physical device, replace `localhost` with your machine's local network IP address (e.g., `192.168.1.x`).

---

### Step 4: Run the Development Server

**Start the Expo development server:**

```bash
npm start
```

This will open the Expo DevTools in your browser. From here you can:
- Press `a` to open on a connected Android device or emulator
- Press `w` to open in the browser (web build)

**Alternatively, target a specific platform directly:**

```bash
# Android
npm run android

# Web
npm run web
```

---

### Step 5: Run the ML / FastAPI Server *(Optional — for live predictions)*

Navigate to the backend directory and install Python dependencies:

```bash
# From the project root
cd ml_server   # adjust path as needed
pip install -r requirements.txt

# Start the FastAPI server
uvicorn main:app --reload --port 8001
```

The ML server will be available at `http://localhost:8001`.

---

## 📱 Usage

### Patient Interface

1. **Launch the app** — The Splash screen loads, followed by the Onboarding flow.
2. **Get Started** → Tap "Get Started" on the onboarding screen.
3. **Login** — Use your credentials registered at the hospital counter.
4. **Book an Appointment:**
   - **Select Hospital** → Choose a nearby hospital (live wait levels shown)
   - **Select Department** → Pick your OPD specialty (or use AI Triage)
   - **Select Doctor** → Browse available doctors
   - **Pick a Time Slot** → Choose from morning or afternoon slots with live availability counts and ML wait estimates
   - **Confirm** → Review appointment summary and confirm booking
5. **Track Your Queue** → Tap "Track Queue" on the Dashboard to see your live token card and queue progress timeline.
6. **Notifications** → Receive real-time alerts when your turn approaches.

---

### Admin Dashboard

1. **Login** with admin credentials.
2. **Navigate to Admin** screen via the admin route.
3. **View Live Metrics** — KPI cards update in real-time.
4. **Manage Queue** — View all active queue entries; add walk-in patients via "+ Add Walk-in".
5. **Monitor Doctors** — Check real-time availability status for each doctor.
6. **System Alerts** — Review active operational alerts and act on congestion warnings.

> **Default Admin Credentials (Demo):**
> - Phone: `+91 00000 00000`
> - Password: `admin123`
>
> *(Change these credentials before deploying to production.)*

---

## 🗺️ App Navigation Flow

```
Splash → Onboarding → Landing → Auth
                                  ↓
                             Dashboard
                            ↙         ↘
               Track Queue           Book Appointment
                   ↓                       ↓
                Queue            SelectHospital → Departments
                                               → Doctors
                                               → Schedule
                                               → Confirm → Success
                                                              ↓
                                                           Queue (Live)
```

---

## 📸 Screenshots

> *Screenshots coming soon. Run the app locally to preview all screens.*

| Onboarding | Dashboard | Queue Tracker |
|---|---|---|
| *(placeholder)* | *(placeholder)* | *(placeholder)* |

| Hospital Selection | Time Slot Booking | Admin Dashboard |
|---|---|---|
| *(placeholder)* | *(placeholder)* | *(placeholder)* |

---

## 🚀 Future Enhancements

- [ ] **Backend API Integration** — Connect all screens to a live REST API (Node.js / Django / FastAPI)
- [ ] **Real-time Push Notifications** — Firebase Cloud Messaging (FCM) for native push alerts
- [ ] **Live Queue WebSocket** — Replace polling with WebSocket for instant queue updates
- [ ] **Doctor Profile Pages** — Full profiles with specialization, consultation fee, and patient reviews
- [ ] **Multi-language Support** — Hindi and regional language localization (i18n)
- [ ] **Appointment Rescheduling** — In-app rescheduling and cancellation flow
- [ ] **Peak Hour Heatmap** — Visual analytics for admin to view daily/weekly patient volume trends
- [ ] **Queue Simulation Tool** — Admin tool for resource planning by simulating different queue scenarios
- [ ] **Reports & Export** — Downloadable reports (PDF/CSV) of appointment and queue data
- [ ] **iOS Support** — Currently targeting Android and Web; iOS build via Expo EAS
- [ ] **Map Integration** — Replace placeholder map view with real geolocation using `react-native-maps`
- [ ] **Biometric Authentication** — Fingerprint / Face ID login support

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository.
2. **Create a feature branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**, ensuring all new screens follow the existing `StyleSheet.create` pattern and Material Design 3 color tokens.
4. **Test** your changes on both Android and Web targets.
5. **Commit** with a clear, descriptive message:
   ```bash
   git commit -m "feat: add appointment rescheduling flow"
   ```
6. **Push** to your fork and open a **Pull Request**.

### Code Style Guidelines

- Use **TypeScript** for all new files — no `any` types unless unavoidable.
- Use **`React Native StyleSheet.create`** for all styling — no inline styles.
- Follow the Material Design 3 color palette as defined in each screen's `C` / `COLORS` constant.
- Separate platform-specific shadow styles using `Platform.select({ ios: {...}, android: { elevation: n } })`.

---

## 📄 License

This project is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2026 OPD Saathi — DTI Project

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

<div align="center">

Built with ❤️ for better healthcare — **OPD Saathi DTI Project**

</div>

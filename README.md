#  AidRoute — AI Tissue Triage Platform  

[![React](https://img.shields.io/badge/React-18-blue?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-Build-FCC72C?logo=vite)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-Design-38BDF8?logo=tailwindcss)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Deployed](https://img.shields.io/badge/Live_Demo-Available-success)](https://aidroute12git-70156665-389aa.web.app/)

---

A **modern, interactive, and responsive frontend** for an **AI-powered tissue triage and logistics coordination platform**.  
Built to streamline healthcare operations through intelligent routing, triage automation, and real-time analytics.

---

## ✨ Features  

### 🎨 **Modern UI/UX**  
- Clean, futuristic **medical-tech design**  
- Cool **blue-white palette** with **cyan–indigo gradients**  
- Smooth **Framer Motion** animations  
- **Dark mode** support for accessibility  

---

### 📊 **Pages & Components**  

| Page / Module | Description |
|----------------|--------------|
| **Login / Signup** | Role-based authentication with animated AI background |
| **Dashboard** | Overview cards, AI status indicators, urgent requests, and recommendations |
| **Request Management** | Live requests with table/card view toggle, filters, and AI triage triggers |
| **Route Optimization** | Interactive map interface with live route updates *(Google Maps ready)* |
| **Reports** | Visual analytics using **Recharts** (trends, distributions, response times) |
| **Ethics & Compliance** | AI fairness checks, compliance monitoring, and audit reports |
| **Settings** | Notification preferences, theme toggles, and privacy controls |

---

## 🔧 Tech Stack  

- ⚛️ **React 18** — Component-based UI  
- ⚡ **Vite** — Lightning-fast build tool  
- 🎨 **TailwindCSS** — Utility-first styling  
- 💫 **Framer Motion** — Animations and transitions  
- 🌐 **React Router v6** — Routing and navigation  
- 📈 **Recharts** — Data visualization  
- 🔔 **React Hot Toast** — Real-time notifications  
- 🧭 **Lucide React Icons** — Modern icon set  
- ⚙️ **Axios** — HTTP client for backend API integration  


src/
├── components/          # Reusable components
│   ├── Layout.jsx
│   ├── Sidebar.jsx
│   ├── Header.jsx
│   ├── EmergencyModal.jsx
│   └── NotificationPanel.jsx
│
├── contexts/            # React contexts
│   └── ThemeContext.jsx
│
├── pages/               # Page components
│   ├── Login.jsx
│   ├── Dashboard.jsx
│   ├── Requests.jsx
│   ├── Routes.jsx
│   ├── Reports.jsx
│   ├── Ethics.jsx
│   └── Settings.jsx
│
├── App.jsx              # Main app component
├── main.jsx             # Entry point
└── index.css            # Global styles


 | Method | Endpoint          | Description                           |
| ------ | ----------------- | ------------------------------------- |
| `POST` | `/api/auth/login` | User authentication                   |
| `GET`  | `/api/requests`   | Fetch tissue requests                 |
| `POST` | `/api/triage`     | Trigger AI triage                     |
| `GET`  | `/api/routes`     | Fetch delivery routes                 |
| `POST` | `/api/optimize`   | Optimize delivery routes              |
| `GET`  | `/api/reports`    | Retrieve analytics data               |
| `GET`  | `/api/ethics`     | Fetch compliance and fairness metrics |

---
##  Getting Started 

**Development**

AidRoute is an AI-powered triage and logistics coordination system designed to streamline the distribution of critical medical tissue, organs, and blood supplies across hospitals and community clinics during emergencies. Built on NVIDIA Nemotron (nano-9B-v2) via NVIDIA NIM. Anyone can access this by click on this :

https://aidroute12git-70156665-389aa.web.app/





###  Installation  
```bash
npm install





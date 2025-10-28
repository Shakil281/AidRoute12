# AidRoute - AI Tissue Triage Platform

A modern, interactive, and responsive frontend for AI-powered tissue triage and logistics coordination platform.

## Features

✨ **Modern UI/UX**
- Clean, futuristic medical-tech design
- Cool blue-white palette with cyan-indigo gradients
- Smooth animations with Framer Motion
- Dark mode support

📊 **Pages & Components**

- **Login/Signup Page**: Role-based authentication with animated AI background
- **Dashboard**: Overview cards, AI status indicators, urgent requests, and recommendations
- **Request Management**: Live requests with table/card view toggle, filters, and AI triage triggers
- **Route Optimization**: Interactive map interface with live route updates (Google Maps ready)
- **Reports**: Visual analytics with Recharts (trends, distribution, response times)
- **Ethics & Compliance**: AI fairness checks, compliance monitoring, and audit reports
- **Settings**: Notification preferences, theme toggles, privacy controls

🔧 **Tech Stack**

- React 18
- Vite
- TailwindCSS
- Framer Motion
- React Router v6
- Recharts
- React Hot Toast
- Lucide React Icons
- Axios

## Getting Started

### Installation

\`\`\`bash
npm install
\`\`\`

### Development

\`\`\`bash
npm run dev
\`\`\`

Visit http://localhost:3000

The app should automatically open in your browser. If not, navigate to the URL manually.

### Build

\`\`\`bash
npm run build
\`\`\`

## Environment Variables

Copy `.env.example` to `.env` and configure:

\`\`\`bash
cp .env.example .env
\`\`\`

Then update the values:

\`\`\`
VITE_API_URL=http://localhost:8000/api
VITE_GOOGLE_MAPS_API_KEY=your_api_key_here
\`\`\`

## Project Structure

\`\`\`
src/
├── components/          # Reusable components
│   ├── Layout.jsx
│   ├── Sidebar.jsx
│   ├── Header.jsx
│   ├── EmergencyModal.jsx
│   └── NotificationPanel.jsx
├── contexts/            # React contexts
│   └── ThemeContext.jsx
├── pages/               # Page components
│   ├── Login.jsx
│   ├── Dashboard.jsx
│   ├── Requests.jsx
│   ├── Routes.jsx
│   ├── Reports.jsx
│   ├── Ethics.jsx
│   └── Settings.jsx
├── App.jsx              # Main app component
├── main.jsx             # Entry point
└── index.css            # Global styles
\`\`\`

## Design Highlights

### Color Palette
- **Primary**: Cyan (#06b6d4) to Blue (#3b82f6)
- **Accent**: Indigo (#6366f1) to Purple (#8b5cf6)
- **Dark**: Slate 800-900
- **Glass Effect**: White with backdrop blur

### Animations
- Page transitions with Framer Motion
- Hover effects on interactive elements
- Loading states and toast notifications
- Pulse animations for active indicators

## Backend Integration

The frontend expects the following API endpoints:

- \`POST /api/auth/login\` - User authentication
- \`GET /api/requests\` - Fetch tissue requests
- \`POST /api/triage\` - Trigger AI triage
- \`GET /api/routes\` - Fetch delivery routes
- \`POST /api/optimize\` - Optimize routes
- \`GET /api/reports\` - Analytics data
- \`GET /api/ethics\` - Compliance metrics

## License

MIT

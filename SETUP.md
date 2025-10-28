# AidRoute Frontend - Setup Guide

## Quick Start

### 1. Install Dependencies

\`\`\`bash
cd aidroute-frontend
npm install
\`\`\`

### 2. Create Environment File

Create a `.env` file in the root directory:

\`\`\`env
# Backend API URL
VITE_API_URL=http://localhost:8000/api

# Google Maps API Key (optional)
VITE_GOOGLE_MAPS_API_KEY=your_api_key_here
\`\`\`

### 3. Run Development Server

\`\`\`bash
npm run dev
\`\`\`

Open http://localhost:3000 in your browser.

### 4. Build for Production

\`\`\`bash
npm run build
\`\`\`

## Project Structure

\`\`\`
aidroute-frontend/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable React components
│   │   ├── Layout.jsx      # Main app layout
│   │   ├── Sidebar.jsx     # Navigation sidebar
│   │   ├── Header.jsx      # Top header bar
│   │   ├── EmergencyModal.jsx
│   │   └── NotificationPanel.jsx
│   ├── contexts/            # React contexts
│   │   └── ThemeContext.jsx
│   ├── pages/              # Page components
│   │   ├── Login.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Requests.jsx
│   │   ├── Routes.jsx
│   │   ├── Reports.jsx
│   │   ├── Ethics.jsx
│   │   └── Settings.jsx
│   ├── utils/              # Utilities
│   │   └── api.js          # API configuration
│   ├── App.jsx             # Root component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
\`\`\`

## Key Features

### 🔐 Authentication
- Role-based login (Admin/Hospital)
- Persistent authentication state
- Protected routes

### 📊 Dashboard
- Real-time stats overview
- AI agent status indicators
- Urgent requests panel
- AI recommendations feed
- Emergency override modal

### 📋 Request Management
- Table and card view toggle
- Search and filter functionality
- Urgency color coding
- One-click AI triage trigger

### 🗺️ Route Optimization
- Map visualization (Google Maps ready)
- Live route tracking
- Route optimization button
- Detailed route information panel

### 📈 Reports & Analytics
- Interactive charts (Recharts)
- Request trends over time
- Tissue distribution pie chart
- Response time analytics
- PDF/CSV export

### 🛡️ Ethics & Compliance
- Fairness score metrics
- Bias detection monitoring
- Recent fairness checks
- Compliance guidelines
- Audit history

### ⚙️ Settings
- Notification preferences
- Dark/light theme toggle
- Privacy controls
- Data sharing options

## Customization

### Colors & Theme

Edit `tailwind.config.js` to customize color schemes:

\`\`\`js
colors: {
  primary: { ... },  // Cyan-blue scale
  accent: { ... },   // Indigo-purple scale
}
\`\`\`

### API Integration

Update `src/utils/api.js` to connect to your backend:

\`\`\`js
const API_URL = 'http://your-backend-url/api'
\`\`\`

### Google Maps

1. Get API key from Google Cloud Console
2. Add to `.env`: `VITE_GOOGLE_MAPS_API_KEY=...`
3. Uncomment map components in Routes.jsx
4. Install: `npm install @googlemaps/js-api-loader`

## Demo Credentials

Any email/password combination works for demo purposes.

## Browser Support

- Chrome (recommended)
- Firefox
- Edge
- Safari

## Development Tips

- Use React DevTools for component debugging
- Check browser console for API errors
- Network tab shows API calls
- Enable hot reload (automatic with Vite)

## Troubleshooting

### Port 3000 already in use

\`\`\`bash
# Use a different port
npm run dev -- --port 3001
\`\`\`

### Module not found errors

\`\`\`bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
\`\`\`

### Tailwind styles not applying

\`\`\`bash
# Restart dev server
npm run dev
\`\`\`

import { NavLink } from 'react-router-dom'
import { 
  LayoutDashboard, 
  FileText, 
  Route, 
  BarChart3, 
  ShieldCheck, 
  Settings,
  Activity
} from 'lucide-react'
import { motion } from 'framer-motion'

const navItems = [
  { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/requests', label: 'Requests', icon: FileText },
  { path: '/routes', label: 'Routes', icon: Route },
  { path: '/reports', label: 'Reports', icon: BarChart3 },
  { path: '/ethics', label: 'Ethics', icon: ShieldCheck },
  { path: '/settings', label: 'Settings', icon: Settings },
]

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-800/50 border-r border-slate-700/50 flex flex-col">
      <div className="p-6 border-b border-slate-700/50">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
            <Activity className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              AidRoute
            </h1>
            <p className="text-xs text-slate-400">AI Tissue Triage</p>
          </div>
        </div>
      </div>
      
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item, index) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-400'
                  : 'text-slate-400 hover:bg-slate-700/50 hover:text-white'
              }`
            }
          >
            {({ isActive }) => (
              <motion.div
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                className="flex items-center space-x-3 flex-1"
              >
                <item.icon className={`w-5 h-5 ${isActive ? 'text-cyan-400' : ''}`} />
                <span className="font-medium">{item.label}</span>
              </motion.div>
            )}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}

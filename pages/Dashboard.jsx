import { motion } from 'framer-motion'
import { 
  Activity, 
  Heart, 
  Zap, 
  CheckCircle, 
  Clock, 
  AlertCircle,
  TrendingUp,
  Users,
  MapPin
} from 'lucide-react'
import { useState } from 'react'
import EmergencyModal from '../components/EmergencyModal'

const stats = [
  { 
    label: 'Active Requests', 
    value: 24, 
    icon: Heart, 
    color: 'text-red-400',
    bg: 'bg-red-500/20',
    trend: '+12%'
  },
  { 
    label: 'AI Recommendations', 
    value: 18, 
    icon: Activity, 
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/20',
    trend: '+8%'
  },
  { 
    label: 'Optimized Routes', 
    value: 15, 
    icon: MapPin, 
    color: 'text-green-400',
    bg: 'bg-green-500/20',
    trend: '+23%'
  },
  { 
    label: 'Triage Actions', 
    value: 142, 
    icon: Zap, 
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/20',
    trend: '+5%'
  },
]

const urgentRequests = [
  { id: 1, hospital: 'City Hospital', tissue: 'Heart', urgency: 'high', time: '5 min ago', status: 'pending' },
  { id: 2, hospital: 'General Hospital', tissue: 'Kidney', urgency: 'medium', time: '12 min ago', status: 'processing' },
  { id: 3, hospital: 'Emergency Center', tissue: 'Liver', urgency: 'high', time: '8 min ago', status: 'pending' },
]

const aiRecommendations = [
  { id: 1, type: 'Route Optimization', description: 'Suggested faster route for delivery #1234', priority: 'high' },
  { id: 2, type: 'Ethics Check', description: 'Review completed for case #5678', priority: 'medium' },
  { id: 3, type: 'Hospital Update', description: 'Status updated for General Hospital', priority: 'low' },
]

export default function Dashboard() {
  const [showEmergency, setShowEmergency] = useState(false)

  return (
    <div className="space-y-6">
      {/* AI Status Bar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-4 flex items-center justify-between"
      >
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Activity className="w-6 h-6 text-cyan-400" />
              <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Triage Agent: Active</p>
              <p className="text-xs text-slate-400">Processing 3 requests</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Zap className="w-6 h-6 text-yellow-400" />
              <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Route Optimizer: Active</p>
              <p className="text-xs text-slate-400">2 routes pending</p>
            </div>
          </div>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowEmergency(true)}
          className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 text-red-400 rounded-lg transition-colors flex items-center space-x-2"
        >
          <AlertCircle className="w-4 h-4" />
          <span className="text-sm font-medium">Emergency Override</span>
        </motion.button>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass-card p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg ${stat.bg}`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <span className="text-xs text-green-400 flex items-center space-x-1">
                <TrendingUp className="w-3 h-3" />
                <span>{stat.trend}</span>
              </span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
            <p className="text-sm text-slate-400">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Urgent Requests */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="glass-card p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white flex items-center space-x-2">
            <Heart className="w-6 h-6 text-red-400" />
            <span>Urgent Requests</span>
          </h2>
          <button className="text-sm text-cyan-400 hover:text-cyan-300">View All</button>
        </div>
        <div className="space-y-3">
          {urgentRequests.map((request) => (
            <motion.div
              key={request.id}
              whileHover={{ x: 4 }}
              className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg border border-slate-600 hover:border-slate-500 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div className={`p-2 rounded-lg ${
                  request.urgency === 'high' ? 'bg-red-500/20' : 'bg-yellow-500/20'
                }`}>
                  <Heart className={`w-5 h-5 ${
                    request.urgency === 'high' ? 'text-red-400' : 'text-yellow-400'
                  }`} />
                </div>
                <div>
                  <p className="font-medium text-white">{request.tissue}</p>
                  <p className="text-sm text-slate-400">{request.hospital}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  request.urgency === 'high' 
                    ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                    : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                }`}>
                  {request.urgency === 'high' ? '🔴 High' : '🟡 Medium'}
                </span>
                <span className="text-sm text-slate-400">{request.time}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* AI Recommendations */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="glass-card p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white flex items-center space-x-2">
            <Activity className="w-6 h-6 text-cyan-400" />
            <span>AI Recommendations</span>
          </h2>
          <button className="text-sm text-cyan-400 hover:text-cyan-300">View All</button>
        </div>
        <div className="space-y-3">
          {aiRecommendations.map((rec) => (
            <motion.div
              key={rec.id}
              whileHover={{ x: 4 }}
              className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg border border-slate-600 hover:border-slate-500 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div className="p-2 rounded-lg bg-cyan-500/20">
                  <Activity className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <p className="font-medium text-white">{rec.type}</p>
                  <p className="text-sm text-slate-400">{rec.description}</p>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                rec.priority === 'high' 
                  ? 'bg-red-500/20 text-red-400'
                  : rec.priority === 'medium'
                  ? 'bg-yellow-500/20 text-yellow-400'
                  : 'bg-blue-500/20 text-blue-400'
              }`}>
                {rec.priority}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <EmergencyModal isOpen={showEmergency} onClose={() => setShowEmergency(false)} />
    </div>
  )
}

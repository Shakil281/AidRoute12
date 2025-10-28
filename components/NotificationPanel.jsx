import { motion, AnimatePresence } from 'framer-motion'
import { X, AlertCircle, CheckCircle, Info, AlertTriangle } from 'lucide-react'

const notifications = [
  { id: 1, type: 'info', message: 'New tissue request received from City Hospital', time: '2 min ago', icon: Info },
  { id: 2, type: 'success', message: 'Route optimized for delivery #1234', time: '5 min ago', icon: CheckCircle },
  { id: 3, type: 'warning', message: 'Ethics review completed for case #5678', time: '10 min ago', icon: AlertTriangle },
  { id: 4, type: 'error', message: 'High priority request needs immediate attention', time: '15 min ago', icon: AlertCircle },
]

const iconMap = {
  info: Info,
  success: CheckCircle,
  warning: AlertTriangle,
  error: AlertCircle,
}

const colorMap = {
  info: 'text-blue-400',
  success: 'text-green-400',
  warning: 'text-yellow-400',
  error: 'text-red-400',
}

export default function NotificationPanel({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
          />
          <motion.div
            initial={{ x: 400 }}
            animate={{ x: 0 }}
            exit={{ x: 400 }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed right-0 top-0 h-full w-96 bg-slate-800 border-l border-slate-700 z-50 flex flex-col"
          >
            <div className="p-6 border-b border-slate-700 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">Notifications</h3>
              <button
                onClick={onClose}
                className="p-1 rounded-lg hover:bg-slate-700 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {notifications.map((notif, index) => {
                const Icon = iconMap[notif.type]
                return (
                  <motion.div
                    key={notif.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 rounded-lg bg-slate-700/50 border border-slate-600 hover:bg-slate-700 transition-colors"
                  >
                    <div className="flex items-start space-x-3">
                      <Icon className={`w-5 h-5 ${colorMap[notif.type]} mt-0.5`} />
                      <div className="flex-1">
                        <p className="text-sm text-slate-200">{notif.message}</p>
                        <p className="text-xs text-slate-400 mt-1">{notif.time}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

import { motion, AnimatePresence } from 'framer-motion'
import { X, AlertCircle, CheckCircle } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'react-hot-toast'

export default function EmergencyModal({ isOpen, onClose }) {
  const [selectedAction, setSelectedAction] = useState('')

  const handleSubmit = () => {
    if (selectedAction) {
      toast.success('Emergency override processed successfully')
      onClose()
    } else {
      toast.error('Please select an action')
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
          >
            <div className="bg-slate-800 rounded-2xl shadow-2xl max-w-2xl w-full border border-slate-700">
              <div className="p-6 border-b border-slate-700 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-red-500/20 rounded-lg">
                    <AlertCircle className="w-6 h-6 text-red-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Emergency Override</h3>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-slate-700 text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="p-6 space-y-6">
                <p className="text-slate-300">
                  Override AI recommendation for emergency medical situations. Select your decision:
                </p>
                
                <div className="space-y-3">
                  <button
                    onClick={() => setSelectedAction('approve')}
                    className={`w-full p-4 rounded-lg border-2 transition-all text-left flex items-center space-x-3 ${
                      selectedAction === 'approve'
                        ? 'border-green-500 bg-green-500/10'
                        : 'border-slate-600 hover:border-slate-500'
                    }`}
                  >
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <div>
                      <p className="font-semibold text-white">Approve AI Decision</p>
                      <p className="text-sm text-slate-400">Accept the AI recommendation</p>
                    </div>
                  </button>
                  
                  <button
                    onClick={() => setSelectedAction('reject')}
                    className={`w-full p-4 rounded-lg border-2 transition-all text-left flex items-center space-x-3 ${
                      selectedAction === 'reject'
                        ? 'border-red-500 bg-red-500/10'
                        : 'border-slate-600 hover:border-slate-500'
                    }`}
                  >
                    <AlertCircle className="w-6 h-6 text-red-400" />
                    <div>
                      <p className="font-semibold text-white">Reject AI Decision</p>
                      <p className="text-sm text-slate-400">Override with manual decision</p>
                    </div>
                  </button>
                </div>

                <div className="flex space-x-3 pt-4">
                  <button
                    onClick={onClose}
                    className="flex-1 px-4 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="flex-1 px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-lg transition-all"
                  >
                    Confirm Override
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

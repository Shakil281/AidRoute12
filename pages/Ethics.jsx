import { motion } from 'framer-motion'
import { ShieldCheck, CheckCircle, AlertTriangle, XCircle, FileText, Eye, Clock } from 'lucide-react'

const complianceMetrics = [
  { label: 'Fairness Score', value: '98%', icon: ShieldCheck, color: 'text-green-400', bg: 'bg-green-500/20' },
  { label: 'Bias Detection', value: '0 Cases', icon: XCircle, color: 'text-red-400', bg: 'bg-red-500/20' },
  { label: 'Verified Cases', value: '342', icon: CheckCircle, color: 'text-cyan-400', bg: 'bg-cyan-500/20' },
  { label: 'Flagged Cases', value: '8', icon: AlertTriangle, color: 'text-yellow-400', bg: 'bg-yellow-500/20' },
]

const recentChecks = [
  {
    id: 1,
    caseId: '#5678',
    hospital: 'City Hospital',
    tissue: 'Heart',
    status: 'verified',
    fairnessScore: 95,
    checkDate: '2024-01-15',
    explanation: 'All demographic groups represented equally in allocation decision.'
  },
  {
    id: 2,
    caseId: '#5679',
    hospital: 'General Hospital',
    tissue: 'Kidney',
    status: 'flagged',
    fairnessScore: 72,
    checkDate: '2024-01-15',
    explanation: 'Minor imbalance detected in priority assignment. Manual review recommended.'
  },
  {
    id: 3,
    caseId: '#5680',
    hospital: 'Emergency Center',
    tissue: 'Liver',
    status: 'verified',
    fairnessScore: 98,
    checkDate: '2024-01-14',
    explanation: 'AI recommendation fully compliant with ethical guidelines.'
  },
]

export default function Ethics() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Ethics & Compliance</h1>
          <p className="text-slate-400 mt-1">AI fairness checks and compliance monitoring</p>
        </div>
      </div>

      {/* Compliance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {complianceMetrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass-card p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg ${metric.bg}`}>
                <metric.icon className={`w-6 h-6 ${metric.color}`} />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-white mb-1">{metric.value}</h3>
            <p className="text-sm text-slate-400">{metric.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Recent Fairness Checks */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="glass-card p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white flex items-center space-x-2">
            <ShieldCheck className="w-6 h-6 text-cyan-400" />
            <span>Recent Fairness Checks</span>
          </h2>
        </div>
        <div className="space-y-4">
          {recentChecks.map((check, index) => (
            <motion.div
              key={check.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="p-5 rounded-lg bg-slate-700/30 border border-slate-600 hover:border-slate-500 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg ${
                    check.status === 'verified' ? 'bg-green-500/20' : 'bg-yellow-500/20'
                  }`}>
                    {check.status === 'verified' ? (
                      <CheckCircle className="w-6 h-6 text-green-400" />
                    ) : (
                      <AlertTriangle className="w-6 h-6 text-yellow-400" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Case {check.caseId}</h3>
                    <p className="text-sm text-slate-400">{check.hospital} • {check.tissue}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="text-2xl font-bold text-white">{check.fairnessScore}%</p>
                    <p className="text-xs text-slate-400">Fairness Score</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
                    check.status === 'verified' 
                      ? 'bg-green-500/20 text-green-400 border-green-500/30'
                      : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                  }`}>
                    {check.status}
                  </span>
                </div>
              </div>
              
              <div className="mt-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                <div className="flex items-start space-x-2">
                  <FileText className="w-4 h-4 text-slate-400 mt-0.5" />
                  <p className="text-sm text-slate-300">{check.explanation}</p>
                </div>
              </div>
              
              <div className="mt-4 flex items-center space-x-4 text-sm text-slate-400">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>Checked on {check.checkDate}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Eye className="w-4 h-4" />
                  <button className="text-cyan-400 hover:text-cyan-300">View Full Report</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Compliance Guidelines */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="glass-card p-6"
        >
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
            <ShieldCheck className="w-6 h-6 text-cyan-400" />
            <span>Fairness Principles</span>
          </h3>
          <ul className="space-y-3">
            {[
              'Equal treatment across demographic groups',
              'Transparent allocation criteria',
              'Non-discriminatory priority scoring',
              'Regular bias audits and corrections'
            ].map((principle, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="flex items-center space-x-3 text-slate-300"
              >
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span>{principle}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="glass-card p-6"
        >
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
            <FileText className="w-6 h-6 text-cyan-400" />
            <span>Compliance Monitoring</span>
          </h3>
          <div className="space-y-4">
            {[
              { label: 'Last Audit Date', value: '2024-01-10', status: 'passed' },
              { label: 'Next Scheduled Audit', value: '2024-02-10', status: 'pending' },
              { label: 'Policy Version', value: 'v2.1.0', status: 'current' },
              { label: 'Compliance Rate', value: '99.8%', status: 'excellent' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0 + index * 0.1 }}
                className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg"
              >
                <span className="text-slate-400">{item.label}</span>
                <div className="flex items-center space-x-2">
                  <span className="font-semibold text-white">{item.value}</span>
                  {item.status === 'passed' || item.status === 'excellent' || item.status === 'current' ? (
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  ) : (
                    <Clock className="w-4 h-4 text-yellow-400" />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

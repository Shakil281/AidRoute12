import { useState } from 'react'
import { motion } from 'framer-motion'
import { Download, FileText, Calendar, TrendingUp, BarChart3, PieChart } from 'lucide-react'
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  PieChart as RechartsPieChart, 
  Pie,
  Cell,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  ResponsiveContainer 
} from 'recharts'
import { toast } from 'react-hot-toast'

const triageData = [
  { month: 'Jan', requests: 45, processed: 42 },
  { month: 'Feb', requests: 52, processed: 50 },
  { month: 'Mar', requests: 48, processed: 47 },
  { month: 'Apr', requests: 61, processed: 58 },
  { month: 'May', requests: 55, processed: 54 },
  { month: 'Jun', requests: 67, processed: 65 },
]

const tissueDistribution = [
  { name: 'Heart', value: 24, color: '#ef4444' },
  { name: 'Kidney', value: 35, color: '#3b82f6' },
  { name: 'Liver', value: 28, color: '#22d3ee' },
  { name: 'Lung', value: 18, color: '#10b981' },
  { name: 'Cornea', value: 15, color: '#f59e0b' },
]

const avgResponseTime = [
  { hospital: 'City Hospital', avgTime: 18 },
  { hospital: 'General Hospital', avgTime: 25 },
  { hospital: 'Emergency Center', avgTime: 12 },
  { hospital: 'Medical Center', avgTime: 30 },
]

export default function Reports() {
  const [dateRange, setDateRange] = useState('weekly')

  const handleExport = (format) => {
    toast.success(`Exporting report as ${format.toUpperCase()}...`)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Reports & Analytics</h1>
          <p className="text-slate-400 mt-1">Triage and logistics data insights</p>
        </div>
        <div className="flex items-center space-x-3">
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleExport('pdf')}
            className="px-4 py-2 bg-slate-700/50 hover:bg-slate-700 border border-slate-600 rounded-lg transition-colors flex items-center space-x-2"
          >
            <FileText className="w-5 h-5" />
            <span>Export PDF</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleExport('csv')}
            className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg transition-all flex items-center space-x-2"
          >
            <Download className="w-5 h-5" />
            <span>Export CSV</span>
          </motion.button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-red-500/20 rounded-lg">
              <BarChart3 className="w-6 h-6 text-red-400" />
            </div>
            <TrendingUp className="w-5 h-5 text-green-400" />
          </div>
          <h3 className="text-3xl font-bold text-white mb-1">342</h3>
          <p className="text-sm text-slate-400">Total Requests</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-500/20 rounded-lg">
              <PieChart className="w-6 h-6 text-green-400" />
            </div>
            <TrendingUp className="w-5 h-5 text-green-400" />
          </div>
          <h3 className="text-3xl font-bold text-white mb-1">329</h3>
          <p className="text-sm text-slate-400">Processed</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-cyan-500/20 rounded-lg">
              <BarChart3 className="w-6 h-6 text-cyan-400" />
            </div>
            <TrendingUp className="w-5 h-5 text-green-400" />
          </div>
          <h3 className="text-3xl font-bold text-white mb-1">96%</h3>
          <p className="text-sm text-slate-400">Success Rate</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-yellow-500/20 rounded-lg">
              <Calendar className="w-6 h-6 text-yellow-400" />
            </div>
            <span className="text-xs text-green-400">-5%</span>
          </div>
          <h3 className="text-3xl font-bold text-white mb-1">2.4h</h3>
          <p className="text-sm text-slate-400">Avg Response Time</p>
        </motion.div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Triage Trends */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="glass-card p-6"
        >
          <h3 className="text-lg font-semibold text-white mb-4">Request Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={triageData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="month" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1e293b', 
                  border: '1px solid #374151',
                  borderRadius: '8px',
                  color: '#fff'
                }}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="requests" 
                stroke="#ef4444" 
                strokeWidth={2}
                name="Received"
              />
              <Line 
                type="monotone" 
                dataKey="processed" 
                stroke="#22d3ee" 
                strokeWidth={2}
                name="Processed"
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Tissue Distribution */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="glass-card p-6"
        >
          <h3 className="text-lg font-semibold text-white mb-4">Tissue Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <RechartsPieChart>
              <Pie
                data={tissueDistribution}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {tissueDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1e293b', 
                  border: '1px solid #374151',
                  borderRadius: '8px',
                  color: '#fff'
                }}
              />
            </RechartsPieChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Response Time Chart */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="glass-card p-6"
      >
        <h3 className="text-lg font-semibold text-white mb-4">Average Response Time by Hospital</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={avgResponseTime}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="hospital" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1e293b', 
                border: '1px solid #374151',
                borderRadius: '8px',
                color: '#fff'
              }}
            />
            <Bar dataKey="avgTime" fill="#06b6d4" />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
  )
}

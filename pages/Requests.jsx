import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Search, 
  Filter, 
  Heart, 
  List, 
  Grid,
  Play,
  AlertCircle,
  CheckCircle
} from 'lucide-react'
import { toast } from 'react-hot-toast'

const requests = [
  { id: 1, hospital: 'City Hospital', tissue: 'Heart', urgency: 'high', status: 'pending', time: '5 min ago', eta: '2 hours' },
  { id: 2, hospital: 'General Hospital', tissue: 'Kidney', urgency: 'medium', status: 'processing', time: '12 min ago', eta: '4 hours' },
  { id: 3, hospital: 'Emergency Center', tissue: 'Liver', urgency: 'high', status: 'pending', time: '8 min ago', eta: '1.5 hours' },
  { id: 4, hospital: 'Medical Center', tissue: 'Lung', urgency: 'low', status: 'completed', time: '2 hours ago', eta: '6 hours' },
  { id: 5, hospital: 'City Hospital', tissue: 'Cornea', urgency: 'medium', status: 'processing', time: '30 min ago', eta: '3 hours' },
]

export default function Requests() {
  const [viewMode, setViewMode] = useState('table')
  const [selectedUrgency, setSelectedUrgency] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const handleRunTriage = (requestId) => {
    toast.success(`AI Triage initiated for request #${requestId}`)
  }

  const urgencyColor = {
    high: { bg: 'bg-red-500/20', text: 'text-red-400', border: 'border-red-500/30', icon: '🔴' },
    medium: { bg: 'bg-yellow-500/20', text: 'text-yellow-400', border: 'border-yellow-500/30', icon: '🟡' },
    low: { bg: 'bg-green-500/20', text: 'text-green-400', border: 'border-green-500/30', icon: '🟢' },
  }

  const statusColor = {
    pending: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    processing: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    completed: 'bg-green-500/20 text-green-400 border-green-500/30',
  }

  const filteredRequests = requests.filter(req => {
    const matchesUrgency = selectedUrgency === 'all' || req.urgency === selectedUrgency
    const matchesSearch = req.hospital.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         req.tissue.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesUrgency && matchesSearch
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Request Management</h1>
          <p className="text-slate-400 mt-1">Manage tissue and organ requests</p>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="glass-card p-4 flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search by hospital or tissue type..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
          />
        </div>
        <div className="flex items-center space-x-2">
          <Filter className="w-5 h-5 text-slate-400" />
          <select
            value={selectedUrgency}
            onChange={(e) => setSelectedUrgency(e.target.value)}
            className="px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
          >
            <option value="all">All Urgency</option>
            <option value="high">High 🔴</option>
            <option value="medium">Medium 🟡</option>
            <option value="low">Low 🟢</option>
          </select>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setViewMode('table')}
            className={`p-2 rounded-lg transition-colors ${
              viewMode === 'table' ? 'bg-cyan-500/20 text-cyan-400' : 'bg-slate-700/50 text-slate-400 hover:text-white'
            }`}
          >
            <List className="w-5 h-5" />
          </button>
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded-lg transition-colors ${
              viewMode === 'grid' ? 'bg-cyan-500/20 text-cyan-400' : 'bg-slate-700/50 text-slate-400 hover:text-white'
            }`}
          >
            <Grid className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Content */}
      {viewMode === 'table' ? (
        <div className="glass-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-700/50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">Tissue</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">Hospital</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">Urgency</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">ETA</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                {filteredRequests.map((request) => (
                  <motion.tr
                    key={request.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="hover:bg-slate-700/30 transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${urgencyColor[request.urgency].bg}`}>
                          <Heart className={`w-5 h-5 ${urgencyColor[request.urgency].text}`} />
                        </div>
                        <span className="font-medium text-white">{request.tissue}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-slate-300">{request.hospital}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${urgencyColor[request.urgency].bg} ${urgencyColor[request.urgency].text} ${urgencyColor[request.urgency].border}`}>
                        {urgencyColor[request.urgency].icon} {request.urgency}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${statusColor[request.status]}`}>
                        {request.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-slate-400">{request.eta}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        onClick={() => handleRunTriage(request.id)}
                        className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-lg transition-all flex items-center space-x-2"
                      >
                        <Play className="w-4 h-4" />
                        <span>Run AI Triage</span>
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRequests.map((request) => (
            <motion.div
              key={request.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card p-6 space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className={`p-3 rounded-lg ${urgencyColor[request.urgency].bg}`}>
                  <Heart className={`w-6 h-6 ${urgencyColor[request.urgency].text}`} />
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium border ${urgencyColor[request.urgency].bg} ${urgencyColor[request.urgency].text} ${urgencyColor[request.urgency].border}`}>
                  {urgencyColor[request.urgency].icon} {request.urgency}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{request.tissue}</h3>
                <p className="text-slate-400">{request.hospital}</p>
              </div>
              <div className="flex items-center justify-between pt-2">
                <span className={`px-3 py-1 rounded-full text-xs font-medium border ${statusColor[request.status]}`}>
                  {request.status}
                </span>
                <span className="text-sm text-slate-400">ETA: {request.eta}</span>
              </div>
              <button
                onClick={() => handleRunTriage(request.id)}
                className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-lg transition-all flex items-center justify-center space-x-2"
              >
                <Play className="w-4 h-4" />
                <span>Run AI Triage</span>
              </button>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  )
}

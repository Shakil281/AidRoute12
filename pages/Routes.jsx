import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Navigation, Zap, Truck, Clock } from 'lucide-react'
import { toast } from 'react-hot-toast'
import RoutesMap3DFallback from '../components/RoutesMap3DFallback'

const activeRoutes = [
  {
    id: 1,
    destination: 'City Hospital',
    distance: '12.5 km',
    eta: '18 min',
    priority: 'high',
    status: 'in-transit',
    currentDriver: 'Driver #123',
    tissueType: 'Heart',
    estimatedDeliver: '2:30 PM'
  },
  {
    id: 2,
    destination: 'General Hospital',
    distance: '25.3 km',
    eta: '32 min',
    priority: 'medium',
    status: 'scheduled',
    currentDriver: 'Driver #456',
    tissueType: 'Kidney',
    estimatedDeliver: '3:15 PM'
  },
  {
    id: 3,
    destination: 'Emergency Center',
    distance: '8.7 km',
    eta: '12 min',
    priority: 'high',
    status: 'optimizing',
    currentDriver: 'Driver #789',
    tissueType: 'Liver',
    estimatedDeliver: '1:45 PM'
  },
]

export default function Routes() {
  const [selectedRoute, setSelectedRoute] = useState(activeRoutes[0])

  const handleOptimize = () => {
    toast.success('Route optimization initiated. Analyzing traffic and conditions...')
    // Simulate API call
    setTimeout(() => {
      toast.success('Route optimized! Estimated time reduced by 15%.')
    }, 2000)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Route Optimization</h1>
          <p className="text-slate-400 mt-1">Real-time delivery routes and logistics</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleOptimize}
          className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-lg transition-all flex items-center space-x-2"
        >
          <Zap className="w-5 h-5" />
          <span>Optimize All Routes</span>
        </motion.button>
      </div>

      {/* 3D Interactive Map */}
      <RoutesMap3DFallback routeData={activeRoutes} />

      {/* Route Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass-card p-6 space-y-4">
          <h2 className="text-xl font-semibold text-white mb-4">Active Routes</h2>
          <div className="space-y-3">
            {activeRoutes.map((route) => (
              <motion.div
                key={route.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={() => setSelectedRoute(route)}
                className={`p-5 rounded-lg cursor-pointer transition-all ${
                  selectedRoute.id === route.id
                    ? 'bg-cyan-500/10 border-2 border-cyan-500/30'
                    : 'bg-slate-700/30 border-2 border-transparent hover:border-slate-600'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-cyan-500/20 rounded-lg">
                      <Navigation className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{route.destination}</h3>
                      <p className="text-sm text-slate-400">{route.tissueType}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
                    route.priority === 'high' 
                      ? 'bg-red-500/20 text-red-400 border-red-500/30'
                      : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                  }`}>
                    {route.priority} priority
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2 text-slate-400">
                    <Truck className="w-4 h-4" />
                    <span>{route.currentDriver}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-400">
                    <Clock className="w-4 h-4" />
                    <span>ETA: {route.eta}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-400">
                    <Navigation className="w-4 h-4" />
                    <span>{route.distance}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-green-400">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="capitalize">{route.status}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Route Info Panel */}
        <div className="glass-card p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Route Details</h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-slate-400 mb-1">Current Route</p>
              <p className="text-xl font-bold text-white">{selectedRoute.destination}</p>
            </div>
            <div className="pt-4 border-t border-slate-700 space-y-3">
              <div className="flex justify-between">
                <span className="text-slate-400">Tissue</span>
                <span className="text-white font-medium">{selectedRoute.tissueType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Distance</span>
                <span className="text-white font-medium">{selectedRoute.distance}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Estimated Arrival</span>
                <span className="text-cyan-400 font-medium">{selectedRoute.eta}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Delivery Time</span>
                <span className="text-green-400 font-medium">{selectedRoute.estimatedDeliver}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Driver</span>
                <span className="text-white font-medium">{selectedRoute.currentDriver}</span>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleOptimize()}
              className="w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-lg transition-all flex items-center justify-center space-x-2"
            >
              <Zap className="w-5 h-5" />
              <span>Re-optimize Route</span>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  )
}

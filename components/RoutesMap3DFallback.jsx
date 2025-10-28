import { motion } from 'framer-motion'
import { MapPin, Navigation } from 'lucide-react'

export default function RoutesMap3DFallback({ routeData = null }) {
  return (
    <div className="relative h-96 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden border border-slate-700">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center space-y-4 p-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-cyan-500/20 rounded-full animate-pulse">
            <MapPin className="w-10 h-10 text-cyan-400" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-1">Interactive Route Map</h3>
            <p className="text-slate-400">3D visualization feature coming soon</p>
          </div>
          
          {/* Simulated route visualization */}
          <div className="mt-8 flex items-center justify-center space-x-8">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center border-2 border-green-500">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <span className="text-xs text-slate-400">Warehouse</span>
            </div>
            
            <div className="flex-1 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"></div>
            
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center border-2 border-red-500">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              </div>
              <span className="text-xs text-slate-400">Hospitals</span>
            </div>
          </div>
        </div>
      </div>

      {/* Info overlay */}
      <div className="absolute top-4 left-4 bg-slate-800/90 backdrop-blur-sm rounded-lg p-3 border border-slate-700">
        <div className="flex items-center space-x-2 text-green-400">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium">3 Active Routes</span>
        </div>
      </div>

      {/* Route stats */}
      <div className="absolute bottom-4 left-4 right-4 bg-slate-800/90 backdrop-blur-sm rounded-lg p-4 border border-slate-700">
        <div className="grid grid-cols-3 gap-4">
          {routeData?.slice(0, 3).map((route, idx) => (
            <div key={route.id} className="text-center">
              <div className={`w-3 h-3 rounded-full mx-auto mb-2 ${
                idx === 0 ? 'bg-cyan-400' : idx === 1 ? 'bg-yellow-500' : 'bg-purple-500'
              }`}></div>
              <p className="text-xs text-slate-400">{route.destination}</p>
              <p className="text-sm font-semibold text-white mt-1">{route.eta}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


import { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Text, Sphere, Cylinder, Billboard } from '@react-three/drei'
import { motion } from 'framer-motion'
import { Camera, MapPin, Navigation, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react'

const RoutePath = ({ points, color = '#06b6d4', active, animated }) => {
  const ref = useRef()
  const [progress, setProgress] = useState(0)
  
  useFrame((state) => {
    if (ref.current && active && animated) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.05
      // Animated progress along the route
      setProgress((Math.sin(state.clock.elapsedTime * 0.5) + 1) / 2)
    }
  })

  return (
    <group ref={ref}>
      {points.map((point, index) => {
        if (index === points.length - 1) return null
        const nextPoint = points[index + 1]
        
        return (
          <Cylinder
            key={index}
            args={[0.05, 0.05, Math.sqrt(
              Math.pow(nextPoint.x - point.x, 2) +
              Math.pow(nextPoint.y - point.y, 2) +
              Math.pow(nextPoint.z - point.z, 2)
            ), 32]}
            position={[
              (point.x + nextPoint.x) / 2,
              (point.y + nextPoint.y) / 2 + 0.1,
              (point.z + nextPoint.z) / 2
            ]}
            rotation={[
              Math.atan2(
                nextPoint.x - point.x,
                nextPoint.z - point.z
              ),
              Math.acos(
                (nextPoint.y - point.y) /
                Math.sqrt(
                  Math.pow(nextPoint.x - point.x, 2) +
                  Math.pow(nextPoint.y - point.y, 2) +
                  Math.pow(nextPoint.z - point.z, 2)
                )
              ),
              0
            ]}
          >
            <meshStandardMaterial color={color} emissive={active ? color : '#000'} emissiveIntensity={active ? 0.5 : 0} />
          </Cylinder>
        )
      })}
    </group>
  )
}

const Marker = ({ position, label, type = 'hospital' }) => {
  const [hovered, setHovered] = useState(false)
  
  const color = type === 'start' ? '#22c55e' : type === 'hospital' ? '#ef4444' : '#3b82f6'
  
  return (
    <group position={position}>
      <Sphere
        args={[0.3, 32, 32]}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
      >
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
      </Sphere>
      <Billboard position={[0, 1, 0]}>
        <Text
          fontSize={0.2}
          color={hovered ? '#ffffff' : '#94a3b8'}
          anchorY="bottom"
        >
          {label}
        </Text>
      </Billboard>
    </group>
  )
}

const GroundPlane = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color="#1e293b" roughness={0.8} />
    </mesh>
  )
}

const GridHelper = () => {
  return (
    <gridHelper args={[100, 100, '#334155', '#1e293b']} position={[0, -0.45, 0]} />
  )
}

// Animated vehicle marker
const VehicleMarker = ({ position, route }) => {
  return (
    <group position={position}>
      <Sphere args={[0.4, 32, 32]}>
        <meshStandardMaterial color="#f59e0b" emissive="#f59e0b" emissiveIntensity={1.5} />
      </Sphere>
      <Billboard position={[0, 1.5, 0]}>
        <Text fontSize={0.15} color="#f59e0b" anchorY="bottom">
          {route?.currentDriver || 'Vehicle'}
        </Text>
      </Billboard>
    </group>
  )
}

function RoutesMap3DContent({ routeData, viewMode, cameraPosition, setCameraPosition }) {
  const controlsRef = useRef()
  const [isAnimated, setIsAnimated] = useState(true)
  
  // Example route points with 3D coordinates
  const routes = {
    1: [
      { x: 0, y: 0, z: 0 },
      { x: 10, y: 2, z: 5 },
      { x: 15, y: 1, z: 8 },
      { x: 20, y: 3, z: 12 }
    ],
    2: [
      { x: 5, y: 0, z: 10 },
      { x: 15, y: 4, z: 15 },
      { x: 25, y: 2, z: 20 }
    ],
    3: [
      { x: -5, y: 0, z: -5 },
      { x: 5, y: 3, z: 0 },
      { x: 8, y: 1, z: 5 },
      { x: 12, y: 2, z: 8 }
    ]
  }

  const vehiclePositions = {
    1: { x: 10, y: 1.5, z: 5 },
    2: { x: 15, y: 2.5, z: 15 },
    3: { x: 6, y: 1.5, z: 2 }
  }

  const handleReset = () => {
    if (controlsRef.current) {
      controlsRef.current.reset()
      setCameraPosition([0, 15, 20])
    }
  }

  return (
    <group>
      <PerspectiveCamera makeDefault position={cameraPosition} fov={50} />
      <OrbitControls 
        ref={controlsRef}
        minDistance={5}
        maxDistance={100}
        maxPolarAngle={Math.PI / 2.1}
      />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} />
      <pointLight position={[-10, 10, -10]} intensity={0.5} color="#06b6d4" />
      
      <GroundPlane />
      <GridHelper />
      
      {/* Render active routes */}
      {Object.keys(routes).map((routeId, idx) => (
        <RoutePath
          key={routeId}
          points={routes[routeId]}
          color={idx === 0 ? '#06b6d4' : idx === 1 ? '#f59e0b' : '#8b5cf6'}
          active={true}
          animated={isAnimated}
        />
      ))}
      
      {/* Vehicle markers */}
      {Object.keys(vehiclePositions).map((routeId) => (
        <VehicleMarker
          key={routeId}
          position={[
            vehiclePositions[routeId].x,
            vehiclePositions[routeId].y,
            vehiclePositions[routeId].z
          ]}
          route={routeData?.find(r => r.id === parseInt(routeId))}
        />
      ))}
      
      {/* Location markers */}
      <Marker position={[0, 0, 0]} label="Warehouse" type="start" />
      <Marker position={[20, 0, 12]} label="City Hospital" type="hospital" />
      <Marker position={[25, 0, 20]} label="General Hospital" type="hospital" />
      <Marker position={[12, 0, 8]} label="Emergency Center" type="hospital" />
    </group>
  )
}

export default function RoutesMap3D({ routeData = null }) {
  const [viewMode, setViewMode] = useState('3d')
  const [cameraPosition, setCameraPosition] = useState([0, 15, 20])
  const [showControls, setShowControls] = useState(true)
  const [error, setError] = useState(null)

  if (error) {
    return (
      <div className="relative h-96 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden border border-slate-700 flex items-center justify-center">
        <div className="text-center space-y-4 p-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-cyan-500/20 rounded-full">
            <MapPin className="w-10 h-10 text-cyan-400" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-1">3D Route Visualization</h3>
            <p className="text-slate-400">3D map loading issue detected</p>
            <p className="text-sm text-slate-500 mt-2">Using simplified map view</p>
            <button
              onClick={() => setError(null)}
              className="mt-4 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg"
            >
              Retry 3D View
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative h-96 bg-slate-900 rounded-xl overflow-hidden border border-slate-700">
      {/* 3D Canvas */}
      <Canvas shadows gl={{ antialias: true }}>
        <Suspense fallback={null}>
          <RoutesMap3DContent
            routeData={routeData}
            viewMode={viewMode}
            cameraPosition={cameraPosition}
            setCameraPosition={setCameraPosition}
          />
        </Suspense>
      </Canvas>

      {/* Control Panel */}
      <div className="absolute top-4 left-4 bg-slate-800/90 backdrop-blur-sm rounded-lg p-3 border border-slate-700">
        <div className="flex items-center space-x-2 mb-2">
          <MapPin className="w-4 h-4 text-cyan-400" />
          <span className="text-sm font-medium text-white">3D Route View</span>
        </div>
        <div className="flex flex-col space-y-2">
          <button
            onClick={() => setCameraPosition([0, 20, 25])}
            className="text-xs px-3 py-1.5 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 rounded transition-colors flex items-center space-x-1"
          >
            <Camera className="w-3 h-3" />
            <span>Top View</span>
          </button>
          <button
            onClick={() => setCameraPosition([15, 10, 15])}
            className="text-xs px-3 py-1.5 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded transition-colors flex items-center space-x-1"
          >
            <Camera className="w-3 h-3" />
            <span>Side View</span>
          </button>
          <button
            onClick={() => setCameraPosition([-15, 15, -15])}
            className="text-xs px-3 py-1.5 bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 rounded transition-colors flex items-center space-x-1"
          >
            <Camera className="w-3 h-3" />
            <span>Diagonal View</span>
          </button>
        </div>
      </div>

      {/* Info Panel */}
      <div className="absolute bottom-4 left-4 bg-slate-800/90 backdrop-blur-sm rounded-lg p-3 border border-slate-700">
        <div className="flex items-center space-x-2 text-sm text-slate-300">
          <Navigation className="w-4 h-4 text-cyan-400" />
          <span>3 Active Routes</span>
        </div>
        <div className="mt-2 space-y-1">
          <div className="flex items-center space-x-2 text-xs">
            <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
            <span className="text-slate-400">Route 1: 18 min</span>
          </div>
          <div className="flex items-center space-x-2 text-xs">
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <span className="text-slate-400">Route 2: 32 min</span>
          </div>
          <div className="flex items-center space-x-2 text-xs">
            <div className="w-3 h-3 rounded-full bg-purple-500"></div>
            <span className="text-slate-400">Route 3: 12 min</span>
          </div>
        </div>
      </div>

      {/* Help Panel */}
      <div className="absolute top-4 right-4 bg-slate-800/90 backdrop-blur-sm rounded-lg p-3 border border-slate-700 max-w-xs">
        <h4 className="text-sm font-semibold text-white mb-2">Controls</h4>
        <ul className="text-xs text-slate-400 space-y-1">
          <li>🖱️ Left Click + Drag: Rotate</li>
          <li>🔍 Scroll: Zoom In/Out</li>
          <li>🖱️ Right Click + Drag: Pan</li>
          <li>📸 Click view buttons for preset angles</li>
        </ul>
        <button
          onClick={() => setIsAnimated(!isAnimated)}
          className="mt-3 w-full px-3 py-1.5 bg-slate-700/50 hover:bg-slate-700 rounded text-xs text-slate-300 transition-colors"
        >
          {isAnimated ? '⏸️ Pause Animation' : '▶️ Play Animation'}
        </button>
      </div>
    </div>
  )
}


import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Settings as SettingsIcon, 
  Bell, 
  User, 
  Key, 
  Globe, 
  Save,
  Moon,
  Sun,
  Volume2,
  Mail,
  Smartphone
} from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'
import { toast } from 'react-hot-toast'

export default function Settings() {
  const { isDark, toggleTheme } = useTheme()
  const [settings, setSettings] = useState({
    notifications: {
      email: true,
      push: false,
      sms: true
    },
    privacy: {
      dataSharing: false,
      analytics: true
    },
    appearance: {
      theme: 'dark'
    }
  })

  const handleSave = () => {
    toast.success('Settings saved successfully!')
    // Here you would save to backend
  }

  const toggleNotification = (type) => {
    setSettings({
      ...settings,
      notifications: {
        ...settings.notifications,
        [type]: !settings.notifications[type]
      }
    })
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Settings</h1>
        <p className="text-slate-400 mt-1">Manage your preferences and preferences</p>
      </div>

      {/* Notifications */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-6"
      >
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-2 bg-cyan-500/20 rounded-lg">
            <Bell className="w-6 h-6 text-cyan-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Notifications</h3>
            <p className="text-sm text-slate-400">Configure how you receive alerts</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-slate-400" />
              <div>
                <p className="font-medium text-white">Email Notifications</p>
                <p className="text-sm text-slate-400">Receive alerts via email</p>
              </div>
            </div>
            <button
              onClick={() => toggleNotification('email')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.notifications.email ? 'bg-cyan-500' : 'bg-slate-600'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.notifications.email ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
          <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
            <div className="flex items-center space-x-3">
              <Volume2 className="w-5 h-5 text-slate-400" />
              <div>
                <p className="font-medium text-white">Push Notifications</p>
                <p className="text-sm text-slate-400">Browser push notifications</p>
              </div>
            </div>
            <button
              onClick={() => toggleNotification('push')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.notifications.push ? 'bg-cyan-500' : 'bg-slate-600'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.notifications.push ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
          <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
            <div className="flex items-center space-x-3">
              <Smartphone className="w-5 h-5 text-slate-400" />
              <div>
                <p className="font-medium text-white">SMS Notifications</p>
                <p className="text-sm text-slate-400">Text message alerts</p>
              </div>
            </div>
            <button
              onClick={() => toggleNotification('sms')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.notifications.sms ? 'bg-cyan-500' : 'bg-slate-600'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.notifications.sms ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Appearance */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glass-card p-6"
      >
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-2 bg-cyan-500/20 rounded-lg">
            {isDark ? <Moon className="w-6 h-6 text-cyan-400" /> : <Sun className="w-6 h-6 text-cyan-400" />}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Appearance</h3>
            <p className="text-sm text-slate-400">Customize the theme and colors</p>
          </div>
        </div>
        <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
          <div className="flex items-center space-x-3">
            {isDark ? <Moon className="w-5 h-5 text-slate-400" /> : <Sun className="w-5 h-5 text-slate-400" />}
            <div>
              <p className="font-medium text-white">Theme</p>
              <p className="text-sm text-slate-400">Currently using {isDark ? 'dark' : 'light'} mode</p>
            </div>
          </div>
          <button
            onClick={toggleTheme}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              isDark ? 'bg-cyan-500' : 'bg-yellow-500'
            }`}
          >
            <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1">
              {isDark ? <Moon className="w-3 h-3 text-slate-700" /> : <Sun className="w-3 h-3 text-slate-700" />}
            </span>
          </button>
        </div>
      </motion.div>

      {/* Privacy & Security */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="glass-card p-6"
      >
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-2 bg-cyan-500/20 rounded-lg">
            <Key className="w-6 h-6 text-cyan-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Privacy & Security</h3>
            <p className="text-sm text-slate-400">Control your data and privacy settings</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
            <div>
              <p className="font-medium text-white">Data Sharing</p>
              <p className="text-sm text-slate-400">Allow anonymized data sharing</p>
            </div>
            <button
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.privacy.dataSharing ? 'bg-cyan-500' : 'bg-slate-600'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.privacy.dataSharing ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
          <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
            <div>
              <p className="font-medium text-white">Analytics</p>
              <p className="text-sm text-slate-400">Help improve the platform</p>
            </div>
            <button
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.privacy.analytics ? 'bg-cyan-500' : 'bg-slate-600'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.privacy.analytics ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Save Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex justify-end"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSave}
          className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-lg transition-all flex items-center space-x-2"
        >
          <Save className="w-5 h-5" />
          <span>Save Changes</span>
        </motion.button>
      </motion.div>
    </div>
  )
}

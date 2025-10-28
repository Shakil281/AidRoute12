import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api'

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// API endpoints
export const authAPI = {
  login: (credentials) => api.post('/auth/login', credentials),
  logout: () => api.post('/auth/logout'),
}

export const requestsAPI = {
  getAll: () => api.get('/requests'),
  getById: (id) => api.get(`/requests/${id}`),
  create: (data) => api.post('/requests', data),
  update: (id, data) => api.put(`/requests/${id}`, data),
  runTriage: (id) => api.post(`/triage/${id}`),
}

export const routesAPI = {
  getAll: () => api.get('/routes'),
  getById: (id) => api.get(`/routes/${id}`),
  optimize: (data) => api.post('/routes/optimize', data),
  updateStatus: (id, status) => api.put(`/routes/${id}/status`, { status }),
}

export const reportsAPI = {
  getSummary: () => api.get('/reports/summary'),
  getTrends: (dateRange) => api.get(`/reports/trends?range=${dateRange}`),
  getTissueDistribution: () => api.get('/reports/distribution'),
  exportPDF: () => api.get('/reports/export/pdf'),
  exportCSV: () => api.get('/reports/export/csv'),
}

export const ethicsAPI = {
  getMetrics: () => api.get('/ethics/metrics'),
  getFairnessChecks: () => api.get('/ethics/checks'),
  getAuditHistory: () => api.get('/ethics/audits'),
}

export default api

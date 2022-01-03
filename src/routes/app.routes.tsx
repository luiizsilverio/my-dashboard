import { Route, Routes } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Details from '../pages/Details'
import Layout from '../components/Layout'

function AppRoutes() {
  return (
    <Layout>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/list/:type" element={<Details />} />
      </Routes>
    </Layout>
  )
}

export default AppRoutes
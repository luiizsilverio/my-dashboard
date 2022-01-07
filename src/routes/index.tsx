import { BrowserRouter } from 'react-router-dom'

import AppRoutes from './app.routes'
import AuthRoutes from './auth.routes'

export default function Routes() {
  return (
    <BrowserRouter>
      <AuthRoutes />
      {/* <AppRoutes /> */}
    </BrowserRouter>
  )
}

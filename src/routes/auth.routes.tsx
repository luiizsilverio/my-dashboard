import { Route, Routes } from 'react-router-dom'

import SignIn from '../pages/SignIn'

function AuthRoutes() {
  return (
    <Routes>
      <Route path="*" element={<SignIn />} />
    </Routes>
  )
}

export default AuthRoutes
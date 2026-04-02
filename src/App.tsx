import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import SignIn from './pages/sign-in/SignIn'
import SignUp from './pages/sign-up/SignUp'
import ForgotPassword from './pages/forgot-password/ForgotPassword'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/sign-in" replace />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

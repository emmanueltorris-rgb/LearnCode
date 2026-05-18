import { Routes, Route, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import Explore from './pages/Explore'
import SkillDetails from './pages/SkillDetails'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'

function App() {
  const navigate = useNavigate()

  useEffect(() => {
    // Handle GitHub Pages 404 redirect
    const params = new URLSearchParams(window.location.search)
    const redirect = params.get('redirect')
    
    if (redirect) {
      // Remove the redirect parameter and navigate to the intended route
      window.history.replaceState(null, '', window.location.pathname)
      navigate(redirect)
    }
  }, [navigate])

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/skill/:id" element={<SkillDetails />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
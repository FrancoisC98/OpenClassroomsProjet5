import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Error from './pages/Error'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<Error />} /> {/* page 404 */}
    </Routes>
  )
}

export default App

import { Routes, Route } from 'react-router-dom'
import Layout from '../components/Layout'
import Home from '../pages/Home'
import About from '../pages/About'
import Logement from '../pages/Logement'
import Error from '../components/Error'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/logement/:id" element={<Logement />} />
      <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  )
}

export default App

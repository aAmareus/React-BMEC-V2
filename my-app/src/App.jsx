import {Routes, Route} from 'react-router-dom'

import Index from './pages/Index/index.jsx'
import Catalogo from './pages/Catalogo/index.jsx'
import Usuario from './pages/User/dashboard.jsx'
import Admin from './pages/Admin/admindashboard.jsx'
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/catalogo" element={<Catalogo />}/>
        <Route path="/register"/>
        <Route path='/user/dashboard' element={<Usuario />}/>
        <Route path='/admin/dashboard' element={<Admin />}/>
        <Route path='/support'/>
      </Routes>
    </>
  )
}

export default App

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Aga from './pages/Aga'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Skincare from './pages/Skincare'
import Datsumo from './pages/Datsumo'
import NotFound from './pages/NotFound'
import Diet from './pages/Diet'
import Smellcare from './pages/Smellcare'
import Homecare from './pages/Homecare'

function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="datsumo" element={<Datsumo />} />
          <Route path="aga" element={<Aga />} />
          <Route path="skincare" element={<Skincare />} />
          <Route path="diet" element={<Diet />} />
          <Route path="smellcare" element={<Smellcare />} />
          <Route path="homecare" element={<Homecare />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App

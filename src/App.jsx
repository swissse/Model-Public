import './App.css'
import Home from './pages/Home'
import Catalog from "./pages/Catalog/Catalog"
import { Route, Routes } from 'react-router'
import ModelPage from './pages/ModelPage/ModelPage'
import RootLayout from './components/RootLayout'


function App() {

  return (
    <>
      <Routes>
        <Route index element={<Home />} />

        <Route path='/' element={<RootLayout />}>
          <Route path='catalog' element={<Catalog />} />
          <Route path='model/:id' element={<ModelPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App


import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Details from './pages/details/Details'
import { CustomMouse } from './components/customMouse/CustomMouse'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Category from './pages/category/Category'

function App() {

  return (
    <>
      <BrowserRouter>
        <CustomMouse /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detalhes" element={<Details />} />
          <Route path="/categorias/:categoria" element={<Category />} />


        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App

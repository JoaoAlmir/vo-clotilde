import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CustomMouse } from './components/customMouse/CustomMouse'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from './pages/home/Home'
import Details from './pages/details/Details'
import Category from './pages/category/Category'
import AddItem from './pages/add/AddItem'
import Login from './pages/login/Login';

function App() {

  return (
    <>
      <BrowserRouter>
        <CustomMouse /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detalhes/:id" element={<Details />} />
          <Route path="/categorias/:categoria" element={<Category />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin/add" element={<AddItem />} />



        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App

import { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from './pages/home/Home'
import Details from './pages/details/Details'
import Category from './pages/category/Category'
import AddItem from './pages/addItem/AddItem'
import Login from './pages/login/Login';
import Signin from './pages/signin/Signin';
import Admin from './pages/admin/Admin';
import EditItem from './pages/editItem/EditItem';

export const AuthContext = createContext(null);

function App() {

  const [token, setToken] = useState({token: localStorage.getItem('token'), nome: localStorage.getItem('nome'), funcao: localStorage.getItem('funcao'), idUser: localStorage.getItem('idUser')})

  const setTokenLS = (newToken) => {
    setToken(newToken)
    localStorage.setItem("token", newToken.token)
    localStorage.setItem("nome", newToken.nome)
    localStorage.setItem("funcao", newToken.funcao)
    localStorage.setItem("idUser", newToken.idUser)
  }


  return (
    <>
      <BrowserRouter>
        <AuthContext.Provider value={{ token: token, setToken: setTokenLS}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detalhes/:id" element={<Details />} />
            <Route path="/categorias/:categoria" element={<Category />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<Signin/>} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/add" element={<AddItem />} />
            <Route path="/admin/edit/:id" element={<EditItem />} />



          </Routes>
        </AuthContext.Provider>

      </BrowserRouter>

    </>
  )
}

export default App

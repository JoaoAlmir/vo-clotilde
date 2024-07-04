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

export const AuthContext = createContext(null);

function App() {

  const [token, setToken] = useState()
  const [nome, setNome] = useState()
  const [funcao, setFuncao] = useState()
  const [idUser, setIdUser] = useState()
  return (
    <>
      <BrowserRouter>
        <AuthContext.Provider value={{ token: token, setToken: setToken, nome: nome, setNome: setNome, funcao: funcao, setFuncao: setFuncao, idUser:idUser, setIdUser:setIdUser}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detalhes/:id" element={<Details />} />
            <Route path="/categorias/:categoria" element={<Category />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<Signin/>} />
            <Route path="/admin/add" element={<AddItem />} />



          </Routes>
        </AuthContext.Provider>

      </BrowserRouter>

    </>
  )
}

export default App

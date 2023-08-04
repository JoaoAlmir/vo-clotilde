import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./pages/home/Home" ;
import Details from "./pages/details/Details";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Details />} />

        </Routes>

      </BrowserRouter>
      
    </>
  )
}

export default App

import { NavLink } from "react-router-dom"
import "./Header.css"

function Header() {
    return (
        <>
            <header className="d-flex justify-content-evenly position-sticky d-block shadow">
                 <NavLink end to="/login">
                    <h5 className="p-4 text-danger header-buttom rounded-5 border-danger">Login</h5>
                </NavLink>
                <NavLink end to="/">
                    <img id="header-icon" width="80px" height="80px" src="../src/assets/headerIcon.png" alt="icon" />
                </NavLink>
                <NavLink end to="/categorias/be">
                    <h5 className="p-4 text-danger header-buttom rounded-5 rounded-bottom border-danger border border-bottom-0">Bebidas</h5>
                </NavLink>
                <NavLink end to="/categorias/bo">
                    <h5 className="p-4 text-danger header-buttom rounded-5 rounded-bottom border-danger border border-bottom-0">Bolos &amp; Tortas</h5>
                </NavLink>
                <NavLink end to="/categorias/ca">
                    <h5 className="p-4 text-danger header-buttom rounded-5 rounded-bottom border-danger border border-bottom-0">Carnes</h5>
                </NavLink>
                <NavLink end to="/categorias/do">
                    <h5 className="p-4 text-danger header-buttom rounded-5 rounded-bottom border-danger border border-bottom-0">Doces &amp; Sobremesas</h5>
                </NavLink>
                <NavLink end to="/categorias/ma">
                    <h5 className="p-4 text-danger header-buttom rounded-5 rounded-bottom border-danger border border-bottom-0">Massas</h5>
                </NavLink>
                <NavLink end to="/categorias/pe">
                    <h5 className="p-4 text-danger header-buttom rounded-5 rounded-bottom border-danger border border-bottom-0">Peixes &amp; Frutos do Mar  </h5>
                </NavLink>
                <NavLink end to="/admin/add">
                    <h5 className="p-4 text-danger header-buttom rounded-5  border-danger border ">+ </h5>
                </NavLink>
                
            </header>
        </>
    );
}

export default Header

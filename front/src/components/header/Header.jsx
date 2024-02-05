import { NavLink } from "react-router-dom"
import "./Header.css"

function Header() {
    return (
        <>
            <header className="d-flex justify-content-evenly position-sticky d-block shadow">
                <NavLink end to="/">
                    <img width="80px" height="80px" src="../src/assets/headerIcon.png" alt="icon" />
                </NavLink>
                <NavLink end to="/categorias/be">
                    <h5 className="p-4 text-danger header-buttom rounded-5 rounded-bottom border-danger border border-bottom-0">BEBIDAS</h5>
                </NavLink>
                <NavLink end to="/categorias/bo">
                    <h5 className="p-4 text-danger header-buttom rounded-5 rounded-bottom border-danger border border-bottom-0">BOLOS &amp; TORTAS</h5>
                </NavLink>
                <NavLink end to="/categorias/ca">
                    <h5 className="p-4 text-danger header-buttom rounded-5 rounded-bottom border-danger border border-bottom-0">CARNES</h5>
                </NavLink>
                <NavLink end to="/categorias/do">
                    <h5 className="p-4 text-danger header-buttom rounded-5 rounded-bottom border-danger border border-bottom-0">DOCES &amp; SOBREMESAS</h5>
                </NavLink>
                <NavLink end to="/categorias/ma">
                    <h5 className="p-4 text-danger header-buttom rounded-5 rounded-bottom border-danger border border-bottom-0">MASSAS</h5>
                </NavLink>
                <NavLink end to="/categorias/pe">
                    <h5 className="p-4 text-danger header-buttom rounded-5 rounded-bottom border-danger border border-bottom-0">PEIXES &amp; FRUTOS DO MAR</h5>
                </NavLink>
            </header>
        </>
    );
}

export default Header

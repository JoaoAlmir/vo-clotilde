import { NavLink } from "react-router-dom"

function Header() {
    return (
        <>
            <header className="d-flex justify-content-evenly position-fixed d-block">
                <NavLink end to="/">
                    <img width="80px" height="80px" src="src/assets/headerIcon.png" alt="icon" />
                </NavLink>
                <NavLink end to="/categoria/bebidas">
                    <h5 className="p-4 text-danger rounded-bottom border-danger border border-bottom-0">BEBIDAS</h5>
                </NavLink>
                <NavLink end to="/categoria/bolosetortas">
                    <h5 className="p-4 text-danger rounded-bottom border-danger border border-bottom-0">BOLOS &amp; TORTAS</h5>
                </NavLink>
                <NavLink end to="/categoria/carnes">
                    <h5 className="p-4 text-danger rounded-bottom border-danger border border-bottom-0">CARNES</h5>
                </NavLink>
                <NavLink end to="/categoria/doces">
                    <h5 className="p-4 text-danger rounded-bottom border-danger border border-bottom-0">DOCES &amp; SOBREMESAS</h5>
                </NavLink>
                <NavLink end to="/categoria/massas">
                    <h5 className="p-4 text-danger rounded-bottom border-danger border border-bottom-0">MASSAS</h5>
                </NavLink>
                <NavLink end to="/categoria/peixes">
                    <h5 className="p-4 text-danger rounded-bottom border-danger border border-bottom-0">PEIXES &amp; FRUTOS DO MAR</h5>
                </NavLink>
            </header>
        </>
    );
}

export default Header

import { NavLink } from "react-router-dom"

function Header() {
    

    return (
        <>
            <header className="d-flex justify-content-evenly position-fixed d-block">
                
                <h5 className="p-4 text-danger rounded-bottom border-danger border border-bottom-0">AVES</h5>
                <h5 className="p-4 text-danger rounded-bottom border-danger border border-bottom-0">BEBIDAS</h5>
                <h5 className="p-4 text-danger rounded-bottom border-danger border border-bottom-0">BOLOS & TORTAS</h5>
                <h5 className="p-4 text-danger rounded-bottom border-danger border border-bottom-0">CARNES VERMELHAS</h5>
                <NavLink end to="/"><img width="80px" height="80px" src="src/assets/headerIcon.png" alt="icon" /></NavLink>
                <h5 className="p-4 text-danger rounded-bottom border-danger border border-bottom-0">DOCES & SOBEMESAS</h5>
                <h5 className="p-4 text-danger rounded-bottom border-danger border border-bottom-0">MASSAS</h5>
                <h5 className="p-4 text-danger rounded-bottom border-danger border border-bottom-0">PEIXES & FRUTOS DO MAR</h5>

            </header>


        </>
    )
}

export default Header

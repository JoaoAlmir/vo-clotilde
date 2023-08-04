import { NavLink } from "react-router-dom"

function Header() {
    

    return (
        <>
            <header className="d-flex justify-content-center position-absolute">
                <h5 className="text-light p-5 border-bottom border-danger-subtle rounded-5"style={{backgroundColor:"#ff000026"}} >AVES</h5>
                <h5 className="text-light p-5 border-bottom border-danger-subtle rounded-5"style={{backgroundColor:"#ff000026"}}>BEBIDAS</h5>
                <h5 className="text-light p-5 border-bottom border-danger-subtle rounded-5"style={{backgroundColor:"#ff000026"}}>BOLOS & TORTAS</h5>
                <h5 className="text-light p-5 border-bottom border-danger-subtle rounded-5"style={{backgroundColor:"#ff000026"}}>CARNES VERMELHAS</h5>
                <NavLink end to="/"><img width="120px" height="120px" src="src/assets/headerIcon.png" alt="icon" /></NavLink>
                <h5 className="text-light p-5 border-bottom border-danger-subtle rounded-5"style={{backgroundColor:"#ff000026"}}>DOCES & SOBEMESAS</h5>
                <h5 className="text-light p-5 border-bottom border-danger-subtle rounded-5"style={{backgroundColor:"#ff000026"}}>MASSAS</h5>
                <h5 className="text-light p-5 border-bottom border-danger-subtle rounded-5"style={{backgroundColor:"#ff000026"}}>PEIXES & FRUTOS DO MAR</h5>

            </header>


        </>
    )
}

export default Header

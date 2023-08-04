import { NavLink } from "react-router-dom"

function Header() {
    

    return (
        <>
            <header className="d-flex justify-content-center position-absolute">
                <h5 className="text-light p-5 border-bottom border-danger-subtle rounded-bottom-5"style={{backgroundColor:"RGBA(59,0,0,0.56)"}} >AVES</h5>
                <h5 className="text-light p-5 border-bottom border-danger-subtle rounded-bottom-5"style={{backgroundColor:"RGBA(59,0,0,0.56)"}}>BEBIDAS</h5>
                <h5 className="text-light p-5 border-bottom border-danger-subtle rounded-bottom-5"style={{backgroundColor:"RGBA(59,0,0,0.56)"}}>BOLOS & TORTAS</h5>
                <h5 className="text-light p-5 border-bottom border-danger-subtle rounded-bottom-5"style={{backgroundColor:"RGBA(59,0,0,0.56)"}}>CARNES VERMELHAS</h5>
                <NavLink end to="/"><img width="120px" height="120px" src="src/assets/headerIcon.png" alt="icon" /></NavLink>
                <h5 className="text-light p-5 border-bottom border-danger-subtle rounded-bottom-5"style={{backgroundColor:"RGBA(59,0,0,0.56)"}}>DOCES & SOBEMESAS</h5>
                <h5 className="text-light p-5 border-bottom border-danger-subtle rounded-bottom-5"style={{backgroundColor:"RGBA(59,0,0,0.56)"}}>MASSAS</h5>
                <h5 className="text-light p-5 border-bottom border-danger-subtle rounded-bottom-5"style={{backgroundColor:"RGBA(59,0,0,0.56)"}}>PEIXES & FRUTOS DO MAR</h5>

            </header>


        </>
    )
}

export default Header

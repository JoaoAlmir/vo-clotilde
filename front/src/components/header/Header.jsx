import { NavLink } from "react-router-dom"
import "./Header.css"
import { useContext, useEffect } from "react"
import { AuthContext } from "../../App"

function Header() {
    let login = document.getElementsByName("login")
    let conta = document.getElementsByName("conta")
    let logout = document.getElementsByName("logout")
    let create = document.getElementsByName("create")

    const auth = useContext(AuthContext);
    

    useEffect(() => {

        if (auth.token) {
            login[0].classList.add("d-none")
            conta[0].classList.remove("d-none")
            logout[0].classList.remove("d-none")
        }
        else {
            login[0].classList.remove("d-none")
            conta[0].classList.add("d-none")
            logout[0].classList.add("d-none")
        }

        if(auth.funcao == 1){
            create[0].classList.remove("d-none")
        }
        else{
            create[0].classList.add("d-none")
        }
    }, [auth.token, auth.funcao])
    

    return (
        <>
            <header className="d-flex justify-content-evenly position-sticky d-block shadow">
                <NavLink end to="/login" name="login">
                    <h5 className="p-4 text-danger header-buttom rounded-5 border-danger">Login</h5>
                </NavLink>
                <div className="p-4" name="conta">
                    <h5>Olá {auth.nome}</h5>
                </div>
                <div className="p-4 text-danger header-buttom rounded-5 border-danger" name="logout">
                    <h5 onClick={() => {
                        auth.setToken(null)
                        auth.setNome(null)
                        auth.setFuncao(null)
                    }}>Logout</h5>
                </div>
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
                <NavLink end to="/admin/add" name="create" className={"d-none"}>
                    <h5 className="p-4 text-danger header-buttom rounded-5  border-danger border">+ </h5>
                </NavLink>

            </header>
        </>
    );
}

export default Header

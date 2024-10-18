import { NavLink } from "react-router-dom"
import "./Header.css"
import { useContext, useEffect, useRef } from "react"
import { AuthContext } from "../../App"
import imgIcon from "../../assets/headerIcon.png"
function Header() {
    const login = useRef(null);
    const conta = useRef(null);
    const logout = useRef(null);
    const create = useRef(null);

    const auth = useContext(AuthContext);

    function showOff() {

        login.current.classList.remove("d-none")
        conta.current.classList.add("d-none")
        logout.current.classList.add("d-none")

    }

    function showOn() {
        login.current.classList.add("d-none")
        conta.current.classList.remove("d-none")
        logout.current.classList.remove("d-none")
    }

    useEffect(() => {

        //deslogado
        if (auth.token.token == "null" || auth.token.token == null) {
            showOff()
        }
        //logado
        else {
            showOn()
        }

        if (auth.token.funcao == 1) {
            create.current.classList.remove("d-none")
        }
        else {
            create.current.classList.add("d-none")
        }
    }, [auth.token.token])


    return (
        <>
            <header className="d-flex justify-content-evenly position-sticky d-block">
                <NavLink end to="/login" ref={login} className="header-button">
                    <h5 className="text-danger header-buttom rounded-5 rounded-bottom border-danger border border-bottom-0">Login</h5>
                </NavLink>
                <div className="p-4 d-none" ref={conta}>
                    <h5>Olá {auth.token.nome}</h5>
                </div>
                <div className="text-danger header-buttom rounded-5 rounded-bottom border-danger border border-bottom-0" ref={logout}>
                    <h5 onClick={() => {
                        auth.setToken({ token: null, nome: null, funcao: null, idUser: null })
                    }}>Logout</h5>
                </div>
                <NavLink end to="/">
                    <img id="header-icon" width="75px" height="75px" src={imgIcon} alt="icon" />
                </NavLink>
                <NavLink end to="/categorias/be">
                    <h5 className="text-danger header-buttom rounded-5 rounded-bottom border-danger border border-bottom-0">Bebidas</h5>
                </NavLink>
                <NavLink end to="/categorias/bo">
                    <h5 className="text-danger header-buttom rounded-5 rounded-bottom border-danger border border-bottom-0">Bolos &amp; Tortas</h5>
                </NavLink>
                <NavLink end to="/categorias/ca">
                    <h5 className="text-danger header-buttom rounded-5 rounded-bottom border-danger border border-bottom-0">Carnes</h5>
                </NavLink>
                <NavLink end to="/categorias/do">
                    <h5 className="text-danger header-buttom rounded-5 rounded-bottom border-danger border border-bottom-0">Doces &amp; Sobremesas</h5>
                </NavLink>
                <NavLink end to="/categorias/ma">
                    <h5 className="text-danger header-buttom rounded-5 rounded-bottom border-danger border border-bottom-0">Massas</h5>
                </NavLink>
                <NavLink end to="/categorias/pe">
                    <h5 className="text-danger header-buttom rounded-5 rounded-bottom border-danger border border-bottom-0">Peixes &amp; Frutos do Mar  </h5>
                </NavLink>
                <NavLink end to="/admin" ref={create} className={"d-none pt-2 px-3 admin-buttom rounded-5 rounded-cirle"}>
                    <i style={{color:"red"}} className="bi bi-pen rounded-5 h1"></i>
                </NavLink>

            </header>
        </>
    );
}

export default Header

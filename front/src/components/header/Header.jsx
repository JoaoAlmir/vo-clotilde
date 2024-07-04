import { NavLink } from "react-router-dom"
import "./Header.css"
import { useContext, useEffect, useRef } from "react"
import { AuthContext } from "../../App"

function Header() {
    const login = useRef(null);
    const conta = useRef(null);
    const logout = useRef(null);
    const create = useRef(null);

    const auth = useContext(AuthContext);


    useEffect(() => {

        if (auth.token) {
            login.current.classList.add("d-none");
            conta.current.classList.remove("d-none");
            logout.current.classList.remove("d-none");
            create.current.classList.remove("d-none");
        }
        else {
            login.current.classList.remove("d-none")
            conta.current.classList.add("d-none")
            logout.current.classList.add("d-none")
        }

        if (auth.funcao == 1) {
            create.current.classList.remove("d-none")
        }
        else {
            create.current.classList.add("d-none")
        }
    }, [auth.token, auth.funcao])


    return (
        <>
            <header className="d-flex justify-content-evenly position-sticky d-block shadow">
                <NavLink end to="/login" ref={login} className="header-button">
                    <h5 className="p-4 text-danger header-buttom rounded-5 border-danger ">Login</h5>
                </NavLink>
                <div className="p-4" ref={conta}>
                    <h5>Olá {auth.nome}</h5>
                </div>
                <div className="p-4 text-danger header-buttom rounded-5 border-danger" ref={logout}>
                    <h5 onClick={() => {
                        auth.setToken(null)
                        auth.setNome(null)
                        auth.setFuncao(null)
                        auth.setIdUser(null)
                    }}>Logout</h5>
                </div>
                <NavLink end to="/">
                    <img id="header-icon" width="75px" height="75px" src="../src/assets/headerIcon.png" alt="icon" />
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
                <NavLink end to="/admin/add" ref={create} className={"d-none"}>
                    <h5 className="text-danger header-buttom rounded-5  border-danger border">+ </h5>
                </NavLink>

            </header>
        </>
    );
}

export default Header

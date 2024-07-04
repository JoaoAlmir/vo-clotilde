import { NavLink, useNavigate } from "react-router-dom";
import Header from "../../components/header/Header"
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { postLogin } from "../../api/user";
import { AuthContext } from "../../App";


function Login() {
    const { register, handleSubmit } = useForm();
    const nav = useNavigate();
    const auth = useContext(AuthContext);

    const onSubmit = (data) => {
        postLogin(data.email, data.senha).then((response)=>{
        auth.setToken(response.data.token)
        auth.setNome(response.data.nome)
        auth.setFuncao(response.data.funcao)
        auth.setIdUser(response.data.idUser)
        nav("/")

        }).catch((error)=>console.log(error))
    };

    return (
        <>

            <Header />



            <div className="d-flex p-5 justify-content-center">
                <div className="flex-column border-danger border rounded p-5">
                    <h2 className="mb-4 text-center mb-3">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)} >

                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" {...register("email")} />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Senha</label>
                            <input type="password" className="form-control" {...register("senha")} />
                        </div>

                        <NavLink to="/signin" className="text-danger mt-3 d-block text-center">Não possuo conta</NavLink>
                        
                        <button type="submit" className="btn btn-danger mx-auto d-block mt-5">Enviar</button>


                    </form>
                </div>

            </div >
            

        </>
    )
}

export default Login

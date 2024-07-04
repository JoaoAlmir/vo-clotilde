import { NavLink, useNavigate } from "react-router-dom";
import Header from "../../components/header/Header"
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { postLogin, postUser } from "../../api/user";
import { AuthContext } from "../../App";


function Signin() {
    const { register, handleSubmit } = useForm();
    const nav = useNavigate();
    const auth = useContext(AuthContext);

    const onSubmit = (data) => {
        postUser(data.email, data.name, data.senha).then((response) => {
            postLogin(data.email, data.senha).then((response) => {
                auth.setToken({ token: response.data.token, nome: response.data.nome, funcao: response.data.funcao, idUser: response.data.idUser })

            }).catch((error) => console.log(error))
        }).catch((error) => console.log(error))
        nav("/")
    };

    return (
        <>

            <Header />



            <div className="d-flex p-5 justify-content-center">
                <div className="flex-column border-danger border rounded p-5">
                    <h2 className="mb-4 text-center mb-3">Cadastro</h2>

                    <form onSubmit={handleSubmit(onSubmit)} >

                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" {...register("email")} />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Apelido</label>
                            <input type="text" className="form-control" {...register("name")} />
                        </div>


                        <div className="mb-3">
                            <label className="form-label">Senha</label>
                            <input type="password" className="form-control" {...register("senha")} />
                        </div>

                        <button type="submit" className="btn btn-danger mx-auto d-block mt-5">Enviar</button>

                    </form>
                </div>

            </div >


        </>
    )
}

export default Signin

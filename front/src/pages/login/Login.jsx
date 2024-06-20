import Header from "../../components/header/Header"
import { useForm } from "react-hook-form";


function Login() {
    const { register, handleSubmit } = useForm();

    // const nav = useNavigate();
    // const auth = useContext(AuthContext);

    const onSubmit = (data) => {
        enviarLogin(data.email, data.senha).then((response)=>{
        auth.setToken(response.data.token)
        auth.setNome(response.data.nome)
        auth.setFuncao(response.data.funcao)
        nav("/")

        }).catch((error)=>console.log(error))
    };

    return (
        <>

            <Header />



            <div className="d-flex p-5 justify-content-center">
                <div className="flex-column border-danger border rounded p-5">
                    <h2 className="mb-4">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)} >

                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" {...register("email")} />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Senha</label>
                            <input type="email" className="form-control" {...register("senha")} />
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>

                    </form>
                </div>

            </div >


        </>
    )
}

export default Login

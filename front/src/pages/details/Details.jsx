import { useContext, useEffect, useState } from "react";
import Header from "../../components/header/Header"
import "./Details.css"
import { useParams } from "react-router-dom";
import { fetchItem } from "../../api/item";
import Comment from "../../components/comment/Comment";
import { fetchCommentByItemId, postComment } from "../../api/comment";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../App";


function Details() {

    const [item, setItem] = useState([]);
    const [comments, setComments] = useState([]);

    let id = useParams().id;

    const { register, handleSubmit } = useForm();
    const auth = useContext(AuthContext);



    const onSubmit = (data) => {
        postComment(data.texto, id, auth.token).then((res) => {
            setComments([...comments, res.data])
        }
        ).catch((err) => {
            console.log(err)
        })


    };

    useEffect(() => {
        fetchItem(id).then((res) => {

            let horas = Math.floor(res.data.tempoPreparo / 60);
            let minutos = res.data.tempoPreparo % 60;
            if (horas > 0 && minutos > 0) {
                if (horas === 1) {
                    res.data.tempoPreparo = horas + " hora e " + minutos + " minutos";
                }
                else {
                    res.data.tempoPreparo = horas + " horas e " + minutos + " minutos";
                }
            }
            else if (horas > 0) {
                if (horas === 1) {
                    res.data.tempoPreparo = horas + " hora";
                } else {
                    res.data.tempoPreparo = horas + " horas";
                }
            }
            else {
                res.data.tempoPreparo = minutos + " minutos";
            }

            res.data.rendimento = res.data.rendimento + " porções";

            res.data.ingredientes = res.data.ingredientes.split('\n').map((ingrediente) => {
                if (ingrediente !== "") {
                    return <li>{ingrediente}</li>
                }
            }
            )

            res.data.preparo = res.data.preparo.split('.').map((preparo) => {
                if (preparo !== "") {
                    return <li>{preparo}</li>
                }
            }
            )
            setItem(res.data)


        }
        ).catch((err) => {
            console.log(err)
        })
    }, [])

    useEffect(() => {
        fetchCommentByItemId(id).then((com) => {
            setComments(com.data)
        }
        ).catch((err) => {
            console.log(err)
        })
    }, [])


    return (
        <>
            <Header />


            <h1 className=" text-danger text-center titulo mt-3">{item.titulo}</h1>

            <img src={item.imagem} alt="imagem" className="w-25 mx-auto d-block rounded-pill" />

            <div className="d-flex justify-content-center shadow mt-3">
                <div>
                    <i style={{ color: "red", fontSize: "2em" }} className="bi bi-alarm p-5"></i>
                    <p className="d-inline text-danger">{item.tempoPreparo}</p>
                </div>
                <div>
                    <i style={{ color: "red", fontSize: "2em" }} className="bi bi-fullscreen-exit p-5"></i>
                    <p className="d-inline text-danger">{item.rendimento}</p>
                </div>
                <div>
                    <i style={{ color: "red", fontSize: "2em" }} className="bi bi-suit-diamond p-5"></i>
                    <p className="d-inline text-danger">{item.dificuldade}</p>
                </div>
            </div>

            <div className="my-5 w-50 mx-auto fs-5">
                <h2 className="text-danger">Ingredientes</h2>

                {item.ingredientes}

            </div>


            <div className="my-5 w-50 mx-auto fs-5">
                <h2 className="text-danger">Preparo</h2>
                <ol>
                    {item.preparo}
                </ol>
            </div>

            <h2 className="text-danger text-center mb-3">Comentários</h2>

            {comments?.map((c) => (
                (auth.token.idUser === c.idUser) || (auth.token.funcao) === 1 ? (
                    <Comment user={c.user} texto={c.texto} idComment={c._id} perm={true} comments={comments} setComments={setComments} />

                ) : (
                    <Comment user={c.user} texto={c.texto} idComment={c._id} perm={false} />
                )
            ))
            }

            {(comments.length === 0) &&
                <h4 className="text-center mt-4 mb-4">Sem comentarios</h4>}


            {(auth.token.token) &&
                <form onSubmit={handleSubmit(onSubmit)} >

                    <textarea id="com"className="form-control w-50 mx-auto mb-2" rows="3" {...register("texto")}></textarea>

                    <button onClick={()=>{document.getElementById("com").value = ""}} type="submit" className="btn btn-danger w-50 mx-auto d-block mb-2">Adicionar Comentário</button>

                </form>
            }


        </>
    )
}

export default Details

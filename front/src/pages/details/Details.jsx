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
    const [Comments, setComments] = useState([]);

    let id = useParams().id;

    const { register, handleSubmit } = useForm();
    const auth = useContext(AuthContext);

    const onSubmit = (data) => {
        console.log(auth.idUser)
        postComment(data.texto, id, auth.nome, auth.idUser, auth.token).then((res) => {
            setComments([...Comments, res.data])
        }
        ).catch((err) => {
            console.log(err)
        })


    };
    


    useEffect(() => {
        fetchItem(id).then((res) => {

            res.data.ingredientes = res.data.ingredientes.split(',').map((ingrediente) => {

                return <li>{ingrediente}</li>

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

            {Comments?.map((c) => (
                <Comment user={c.user} texto={c.texto} idComment={c._id} />
            ))
            }

            {(Comments.length === 0) &&
                <h4 className="text-center mt-4 mb-4">Sem comentarios</h4>}


            {(auth.token) &&
                <form onSubmit={handleSubmit(onSubmit)} >

                    <textarea className="form-control w-50 mx-auto mb-2" rows="3" {...register("texto")}></textarea>

                    <button type="submit" className="btn btn-danger w-50 mx-auto d-block mb-2">Adicionar Comentário</button>

                </form>
            }









        </>
    )
}

export default Details

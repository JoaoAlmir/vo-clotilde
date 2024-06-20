import { useEffect, useState } from "react";
import Header from "../../components/header/Header"
import { SearchBar } from "../../components/searchBar/SearchBar"
import "./Details.css"
import { useParams } from "react-router-dom";
import { fetchItem } from "../../api/item";

function Details() {

    const [item, setItem] = useState([]);

    let id = useParams().id;


    useEffect(() => {
        fetchItem(id).then((res) => {
            console.log(res.data)

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


            console.log(ingredientes)

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


        </>
    )
}

export default Details

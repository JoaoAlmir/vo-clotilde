import { useEffect, useState } from "react";
import { fetchCategory } from "../../api/item";
import Header from "../../components/header/Header"
import { useParams } from "react-router-dom";
import { ItemCard } from "../../components/item/ItemCard";

function Category() {
    const [itens, setItens] = useState([]);

    let categoria = useParams().categoria;
    const url = window.location.pathname.split('/').pop();

    useEffect(() => {
        fetchCategory(categoria).then((res) => {
            console.log(res.data)
            setItens(res.data)
        }
        ).catch((err) => {
            console.log(err)
        })
    }, [url])

    return (
        <>
            <Header />

            <div className="m-5">

                {
                    itens?.map((i) => (
                        <span key={i._id}>
                            {i != undefined &&
                                <div className="d-flex mb-5">
                                    <ItemCard titulo={i.titulo} tempo={i.tempoPreparo} porcoes={i.rendimento} dificuldade={i.dificuldade} imagem={i.imagem} link={i._id} />


                                </div>
                            }

                        </span>
                    ))
                }
            </div>

        </>
    )
}

export default Category

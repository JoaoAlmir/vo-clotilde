import { useEffect, useState } from "react";
import { fetchCategory } from "../../api/item";
import Header from "../../components/header/Header"
import { useParams } from "react-router-dom";
import "./Category.css"
import { ItemCard } from "../../components/itemCard/ItemCard";

function Category() {
    const [itens, setItens] = useState([]);
    const [loading, setLoading] = useState(true);

    let categoria = useParams().categoria;
    const url = window.location.pathname.split('/').pop();

    useEffect(() => {
        fetchCategory(categoria).then((res) => {
            setItens(res.data)
            setLoading(false);
        }
        ).catch((err) => {
            console.log(err)
        })
    }, [url])

    return (
        <>
            <Header />

            <div className="d-flex mb-5">
                <div className="category-container">

                    {loading ? <div className="loading"></div> :
                        itens?.map((i) => (
                            <div className="category-item" key={i._id}>
                                {i != undefined &&
                                    <ItemCard titulo={i.titulo} tempo={i.tempoPreparo} porcoes={i.rendimento} dificuldade={i.dificuldade} imagem={i.imagem} link={i._id} />
                                }
                            </div>

                        ))
                    }
                </div>
            </div>

        </>
    )
}

export default Category

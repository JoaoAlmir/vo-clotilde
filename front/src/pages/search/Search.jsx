import Header from "../../components/header/Header"
import { useEffect, useState } from "react";
import { fetchCategory, searchItem } from "../../api/item";
import { useParams } from "react-router-dom";
import { ItemCard } from "../../components/itemCard/ItemCard";



function Search() {
    const [itens, setItens] = useState([]);

    let texto = useParams().texto;
    const url = window.location.pathname.split('/').pop();

    useEffect(() => {
        searchItem(texto).then((res) => {
            setItens(res.data)
        }
        ).catch((err) => {
            console.log(err)
        })
    }, [url])

    return (
        <>
            <Header />

            <div className="d-flex mb-5 p-5">
                <div className="category-container">

                    {
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

export default Search

import { useEffect, useState } from "react";
import { fetchCategory } from "../../api/item";
import Header from "../../components/header/Header"
import { useParams } from "react-router-dom";
import { ItemCard } from "../../components/item/ItemCard";

function Category() {
    const [itens, setItens] = useState([]);

    let categoria = useParams().categoria;

    useEffect(() => {
        fetchCategory(categoria).then((res) => {
            console.log(res.data)
            setItens(res.data)
        }
        ).catch((err) => {
            console.log(err)
        })  
    }, [])  

    return (
        <>
            <Header/>

            {
                itens?.map((i) => (
                    <span key={i._id}>
                        {i != undefined &&
                            <div className="d-flex mb-5">
                                <ItemCard titulo={i.titulo} tempo={i.tempoPreparo} porcoes={i.rendimento} dificuldade={i.dificuldade} imagem={i.imagem} />

                                
                            </div>
                        }

                    </span>
                ))
            }

        </>
    )
}

export default Category

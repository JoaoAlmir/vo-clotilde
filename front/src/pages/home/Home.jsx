import { useEffect, useState } from "react";
import { fetchItens } from "../../api/item";
import "./Home.css"
import Header from "../../components/header/Header";
import { SearchBar } from "../../components/searchBar/SearchBar";
import { ItemCard } from "../../components/item/ItemCard";

// let a = {

//     main: <ItemCard detalhado titulo={i.titulo} tempo={i.tempoPreparo} porcoes={i.rendimento} dificuldade={i.dificuldade} imagem={i.imagem} link={i._id} />,
//     others: [
//         <ItemCard titulo={i.titulo} tempo={i.tempoPreparo} porcoes={i.rendimento} dificuldade={i.dificuldade} imagem={i.imagem} link={i._id} />,
//         <ItemCard titulo={i.titulo} tempo={i.tempoPreparo} porcoes={i.rendimento} dificuldade={i.dificuldade} imagem={i.imagem} link={i._id} />,
//         <ItemCard titulo={i.titulo} tempo={i.tempoPreparo} porcoes={i.rendimento} dificuldade={i.dificuldade} imagem={i.imagem} link={i._id} />,
//         <ItemCard titulo={i.titulo} tempo={i.tempoPreparo} porcoes={i.rendimento} dificuldade={i.dificuldade} imagem={i.imagem} link={i._id} />
//     ]
// }

function Home() {
    const [itens, setItens] = useState([]);

    const adjustList = (myList) => {
        const res = []

        for (let index = 0; index < myList.length; index++) {
            const element = myList[index];
            if (index % 5 == 0) {
                res.push({
                    main: element,
                    others: myList.slice(index + 1, index + 5)
                })
            }
        }
        return res;
    }
    useEffect(() => {
        fetchItens().then((res) => {
            console.log('data', res.data)
            const dataAdjust = adjustList(res.data)
            console.log(dataAdjust)
            setItens(dataAdjust)
            console.log('itens', itens)
        }
        ).catch((err) => {
            console.log(err)
        })
    }, [])


    return (
        <>
            <Header />
            <SearchBar />


            {
                itens?.map((item, index) =>
                    <div className="d-flex justify-content-center mb-5">
                        <ItemCard  className="" detalhado titulo={item.main.titulo} tempo={item.main.tempoPreparo} porcoes={item.main.rendimento} dificuldade={item.main.dificuldade} imagem={item.main.imagem} link={item.main._id} />
                        <div className="d-flex flex-column ">
                            <div className="row">
                                {item.others.map((otherItem, _index) => {

                                    return (<><ItemCard
                                        titulo={otherItem.titulo}
                                        tempo={otherItem.tempoPreparo}
                                        porcoes={otherItem.rendimento}
                                        dificuldade={otherItem.dificuldade}
                                        imagem={otherItem.imagem}
                                        link={otherItem._id} />
                                        {_index > 0 && _index % 2 == 1 && <div className="w-100"></div>}

                                    </>)
                                }
                                )}
                            </div>
                        </div>
                    </div>
                )
            }


        </>
    )
}

export default Home

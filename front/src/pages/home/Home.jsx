import { useEffect, useState } from "react";
import "./Home.css"
import Header from "../../components/header/Header";
import { SearchBar } from "../../components/searchBar/SearchBar";
import { ItemCard } from "../../components/item/ItemCard";
import { fetchItens } from "../../api/item";



function Home() {
    const [itens, setItens] = useState([]);

    const adjustList = (myList) => {
        const res = []

        for (let index = 0; index < 10; index++) {
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
            const dataAdjust = adjustList(res.data.reverse())
            setItens(dataAdjust)
        }
        ).catch((err) => {
            console.log(err)
        })
    }, [])


    return (
        <>
            <Header />
            <SearchBar />

            <div className="w-75 mx-auto">
                {
                    itens?.map((item, index) =>
                        <div key={item._id} className="d-flex mb-5">
                            <ItemCard detalhado titulo={item.main.titulo} tempo={item.main.tempoPreparo} porcoes={item.main.rendimento} dificuldade={item.main.dificuldade} imagem={item.main.imagem} link={item.main._id} />

                            <div className="grid-container">
                                {item.others.map((otherItem, _index) => {

                                    return (
                                        <div key={otherItem._id} className="grid-item">
                                            <ItemCard className="col" detalhado={false}
                                                titulo={otherItem.titulo}
                                                tempo={otherItem.tempoPreparo}
                                                porcoes={otherItem.rendimento}
                                                dificuldade={otherItem.dificuldade}
                                                imagem={otherItem.imagem}
                                                link={otherItem._id} />
                                        </div>
                                    )

                                }
                                )}
                            </div>
                        </div>


                    )
                }


            </div>



        </>
    )
}

export default Home

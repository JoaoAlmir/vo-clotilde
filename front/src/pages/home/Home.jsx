import { useEffect, useState } from "react";
import { fetchItens } from "../../api/item";
import "./Home.css"
import Header from "../../components/header/Header";
import { SearchBar } from "../../components/searchBar/SearchBar";
import { ItemCard } from "../../components/item/ItemCard";


function Home() {
    const [itens, setItens] = useState([]);


    useEffect(() => {
        fetchItens().then((res) => {
            console.log(res.data)
            setItens(res.data)
        }
        ).catch((err) => {
            console.log(err)
        })
    }, [])


    return (
        <>
            <Header />

            <SearchBar />

            <div className="d-flex justify-content-center mb-5">
                <ItemCard detalhado titulo="Donuts tradicional: aprenda a fazer versão sem cobertura" tempo="1h (+1h20 de descanso)" porcoes="10 Porções" dificuldade="Facil" imagem="https://guiadacozinha.com.br/wp-content/uploads/2020/10/donuts-simples-350x230.jpg" />

                <div className="d-flex flex-column">
                    <div className="d-flex">
                        <ItemCard titulo="Cuscuz branco: faça o delicioso cuscuz de tapioca com calda" imagem="https://guiadacozinha.com.br/wp-content/uploads/2019/10/panqueca-banana-aveia-e-mel-350x230.jpg" />
                        <ItemCard titulo="Panqueca fit de banana, aveia e mel para o café da manhã " imagem="https://guiadacozinha.com.br/wp-content/uploads/2022/07/Cuscuz-branco-350x230.jpg" />
                    </div>
                    <div className="d-flex">
                        <ItemCard titulo="Taco de tapioca: experimente essa versão diferente e acessível" imagem="https://guiadacozinha.com.br/wp-content/uploads/2004/01/taco-de-tapioca-350x230.jpg" />
                        <ItemCard titulo="Broa de fubá simples, fácil e com gosto de casa da vovó" imagem="https://guiadacozinha.com.br/wp-content/uploads/2011/01/broa-de-fuba-simples-350x230.jpg" />
                    </div>
                </div>
            </div>



            <h4>....</h4>
            {
                itens?.map((i,index) => (
                    <span key={index}>
                        {i != undefined &&
                            <div className="d-flex justify-content-center mb-5">
                                <ItemCard detalhado titulo={i.titulo} tempo={i.tempoPreparo} porcoes={i.rendimento} dificuldade={i.dificuldade} imagem={i.imagem} link={i._id} />
                                <h1>{}</h1>
                                <div className="d-flex flex-column">
                                    <div className="d-flex">
                                        <ItemCard titulo={i.titulo} tempo={i.tempoPreparo} porcoes={i.rendimento} dificuldade={i.dificuldade} imagem={i.imagem} />
                                        <ItemCard titulo={i.titulo} tempo={i.tempoPreparo} porcoes={i.rendimento} dificuldade={i.dificuldade} imagem={i.imagem} />
                                    </div>
                                    <div className="d-flex">
                                        <ItemCard titulo={i.titulo} tempo={i.tempoPreparo} porcoes={i.rendimento} dificuldade={i.dificuldade} imagem={i.imagem} />
                                        <ItemCard titulo={i.titulo} tempo={i.tempoPreparo} porcoes={i.rendimento} dificuldade={i.dificuldade} imagem={i.imagem} />
                                    </div>
                                </div>
                            </div>
                        }

                    </span>
                ))
            }
        </>
    )
}

export default Home

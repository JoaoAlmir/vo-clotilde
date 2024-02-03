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

            <div className="bg-danger bg-gradient text-center fs-2 text-light opacity-75 mb-5"> Dicas </div>

            <div className="d-flex justify-content-center mb-5">
                <ItemCard detalhado titulo="Antes de ir as compras saiba o que vai estar mais barato em agosto para que você possa garantir os melhores alimentos." imagem="https://guiadacozinha.com.br/wp-content/uploads/2023/07/alimentos-baratos-em-agosto-540x350.jpg" />

                <div className="d-flex flex-column">
                    <div className="d-flex">
                        <ItemCard titulo="7 ideias de receitas com doce de leite para te inspirar na cozinha" imagem="https://guiadacozinha.com.br/wp-content/uploads/2023/07/Cheesecake-de-doce-de-leite-350x230.jpg" />
                        <ItemCard titulo="Sobrou massa de lasanha? Confira 3 receitas para aproveitar!" imagem="https://guiadacozinha.com.br/wp-content/uploads/2023/07/canelone-frango-e-bacon-350x230.jpg" />
                    </div>
                    <div className="d-flex">
                        <ItemCard titulo="Laranja é tudo igual? Saiba as diferenças entre as mais populares" imagem="https://guiadacozinha.com.br/wp-content/uploads/2023/07/Diferentes-tipos-de-laranja-em-supermercado-350x230.jpg" />
                        <ItemCard titulo="8 receitas simples para aproveitar alimentos em promoção" imagem="https://guiadacozinha.com.br/wp-content/uploads/2023/01/couve-flor-de-frigideira-350x230.jpg" />

                    </div>
                </div>

            </div>


            <h4>Teste</h4>
            {
                itens?.map((i) => (
                    <span key={i._id}>
                        {i != undefined &&
                            <div className="d-flex justify-content-center mb-5">
                                <ItemCard detalhado titulo={i.titulo} tempo={i.tempoPreparo} porcoes={i.rendimento} dificuldade={i.dificuldade} imagem={i.imagem} link={i._id} />

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

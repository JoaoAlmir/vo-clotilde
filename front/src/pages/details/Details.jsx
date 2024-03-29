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
            setItem(res.data)
            let ig = res.data.ingredientes.split(",")
            
            let ingredientes = ig.map((item, index) => {
                return <li key={index}>{item}</li>
            })
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
                <ul>
                    {item.ingrediente}
                </ul>
            </div>

            <div className="w-50 mx-auto">

                <h2 className="text-danger">Ingredientes</h2>

                <ul className="fs-5">
                    <li>3 e 1/2 xícaras (chá) de farinha de trigo</li>
                    <li>1 envelope de fermento biológico seco granulado</li>
                    <li>1 colher (chá) de sal</li>
                    <li>1/2 xícara (chá) de água morna</li>
                    <li>1/2 xícara (chá) de leite morno</li>
                    <li>1/4 de xícara (chá) de margarina</li>
                    <li>1 ovo</li>
                    <li>1/4 de xícara (chá) de açúcar</li>
                    <li>Farinha de trigo para enfarinhar</li>
                    <li>Óleo para fritar</li>
                    <li>1/2 xícara (chá) de açúcar</li>
                    <li>2 colheres (chá) de canela em pó</li>
                </ul>
            </div>


            <div className="w-50 mx-auto">

                <h2 className="text-danger">Modo de preparo:</h2>

                <ol className="fs-5 mb-5">
                    <li>Na tigela grande da batedeira adicione 1 xícara (chá) de farinha, o açúcar, o fermento e o sal.</li>
                    <li>Logo depois adicione gradualmente a água, o leite e a margarina misturados, batendo por 2 minutos em potência média limpando a tigela com uma espátula ocasionalmente.</li>
                    <li>Adicione o ovo e mais 1 xícara (chá) de farinha e bata por mais 2 minutos.</li>
                    <li>Sem bater, acrescente o restante da farinha misture, transfira para uma superfície lisa enfarinhada sove até obter uma massa elástica e macia.</li>
                    <li>Cubra e deixe descansar 20 minutos.</li>
                    <li>Com um rolo abra a massa com 2cm de espessura e corte usando um copo ou cortador redondo com aproximadamente 5cm de diâmetro e com um objeto menor retire 2cm de miolo formando uma rosca.</li>
                    <li>Sove o restante da massa e abra novamente até cortar toda ela.</li>
                    <li>Transfira os donuts para uma assadeira, cubra e deixe descansar por 1 hora ou até dobrar de tamanho.</li>
                    <li>Frite, aos poucos, em óleo quente por 3 minutos ou até dourar.</li>
                    <li>Escorra sobre papel-toalha e passe pelo açúcar misturando com canela.</li>
                    <li>Por fim deixe esfriar e sirva em seguida.</li>
                </ol>
            </div>


        </>
    )
}

export default Details

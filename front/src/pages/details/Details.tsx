import Header from "../../components/header/Header"
import "./Details.css"

function Details() {


    return (
        <>
            <Header />
            <div className="top-50 mb-2 home-search" style={{ backgroundImage: `url(https://guiadacozinha.com.br/wp-content/uploads/2020/10/donuts-simples-768x619.jpg)`,pointerEvents:'none' ,height: '500px', backgroundSize: 'cover' }}>
                <div className="input-group input-group-lg top-50 w-50 mx-auto">
                    <input type="text" className="form-control " placeholder="Pesquisar Receita" aria-label="Pesquisar Receita" aria-describedby="button-addon2" />
                    <button className="btn d-inline" type="button" id="search"> <i className="bi bi-search-heart-fill"></i> </button>
                </div>
            </div>

            <h1 className="text-danger text-center">Donuts tradicional: aprenda a fazer versão sem cobertura</h1>

            <div className="d-flex justify-content-center shadow">
                <div>
                    <i style={{ color: "red", fontSize: "2em" }} className="bi bi-alarm p-5"></i>
                    <p className="d-inline text-danger">1h (+1h20 de descanso)</p>
                </div>
                <div>
                    <i style={{ color: "red", fontSize: "2em" }} className="bi bi-fullscreen-exit p-5"></i>
                    <p className="d-inline text-danger">10 Porções</p>
                </div>
                <div>
                    <i style={{ color: "red", fontSize: "2em" }} className="bi bi-suit-diamond p-5"></i>
                    <p className="d-inline text-danger">Facil</p>
                </div>
            </div>

            <div className="my-5 w-50 mx-auto fs-5">
                Os donuts são um doce bem popular nos Estados Unidos. A famosa rosquinha com uma cobertura colorida aparece em filmes, séries e até desenhos animados. Apesar de sua origem incerta, esse snack ganhou destaque nas padarias, confeitarias e lanchonetes do Brasil. Mas você conhece a versão tradicional?
                
                Salpicada com canela e açúcar, o donuts tradicional pode te lembrar bastante uma receita de bolinho de chuva. Além disso, essa é a opção perfeita para quem gosta de inovar nas coberturas. Assim você pode testar as mais saborosas e de sua preferência! Curtiu a ideia?

                Aprenda a fazer o donuts tradicional em casa e para surpreender as visitas e os familiares quando quiser!
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

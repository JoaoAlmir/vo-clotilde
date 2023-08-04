import Header from "../../components/Header"
import "./Home.css"
function Home() {

    return (
        <>
            <Header />

            <div className="top-50 mb-5 home-search" style={{ backgroundImage: `url(src/assets/searchBackground.png)`, height: '500px', backgroundSize: 'cover' }}>
                <div className="input-group input-group-lg top-50 w-50 mx-auto">
                    <input type="text" className="form-control" placeholder="Pesquisar Receita" aria-label="Pesquisar Receita" aria-describedby="button-addon2" />
                    <button className="btn d-inline" type="button" id="search"> <i className="bi bi-search-heart-fill"></i> </button>
                </div>
            </div>

            <div className="d-flex justify-content-center mb-5">
                <a href="/detail" className="border-bottom border-5 rounded-5 shadow-lg border-danger-subtle me-5 label" style={{ width: "380px", height: "700px" }}>
                    <img width="380px" height="250px" src="https://guiadacozinha.com.br/wp-content/uploads/2020/10/donuts-simples-350x230.jpg" alt="icon" />
                    <h3 className="p-5 text-danger">Donuts tradicional: aprenda a fazer versão sem cobertura   </h3>
                    <span className="d-flex flex-column ">
                        <div>
                            <i style={{ color: "red", fontSize: "2em" }} className="bi bi-alarm p-5"></i>
                            <p className="d-inline text-danger">1h (+1h20 de descanso)</p>
                        </div>
                        <div className="mt-4">
                            <i style={{ color: "red", fontSize: "2em" }} className="bi bi-fullscreen-exit p-5"></i>
                            <p className="d-inline text-danger">10 Porções</p>
                        </div>
                        <div className="mt-4">
                            <i style={{ color: "red", fontSize: "2em" }} className="bi bi-suit-diamond p-5"></i>
                            <p className="d-inline text-danger">Facil</p>
                        </div>
                    </span>


                </a>

                <div className="d-flex flex-column">
                    <div className="d-flex">
                            <div className="border-bottom border-5 rounded-5 border-danger-subtle shadow-lg me-3 mb-3 label" style={{ width: "320px", height: "380px" }}>
                            <img width="320px" height="200px" src="https://guiadacozinha.com.br/wp-content/uploads/2022/07/Cuscuz-branco-350x230.jpg" alt="icon" />
                            <h5 className="p-5 text-danger">Cuscuz branco: faça o delicioso cuscuz de tapioca com calda</h5>
                        </div>
                        <div className="border-bottom border-5 rounded-5 border-danger-subtle shadow-lg me-3 mb-3 label" style={{ width: "320px", height: "380px" }}>
                            <img width="320px" height="200px" src="https://guiadacozinha.com.br/wp-content/uploads/2019/10/panqueca-banana-aveia-e-mel-350x230.jpg" alt="icon" />
                            <h5 className="p-5 text-danger">Panqueca fit de banana, aveia e mel para o café da manhã   </h5>
                        </div>
                    </div>
                    <div className="d-flex">
                    <div className="border-bottom border-5 rounded-5 border-danger-subtle shadow-lg me-3 mb-3 label" style={{ width: "320px", height: "380px" }}>
                            <img width="320px" height="200px" src="https://guiadacozinha.com.br/wp-content/uploads/2004/01/taco-de-tapioca-350x230.jpg" alt="icon" />
                            <h5 className="p-5 text-danger">Taco de tapioca: experimente essa versão diferente e acessível   </h5>
                        </div>
                        <div className="border-bottom border-5 rounded-5 border-danger-subtle shadow-lg me-3 mb-3 label" style={{ width: "320px", height: "380px" }}>
                            <img width="320px" height="200px" src="https://guiadacozinha.com.br/wp-content/uploads/2011/01/broa-de-fuba-simples-350x230.jpg" alt="icon" />
                            <h5 className="p-5 text-danger">Broa de fubá simples, fácil e com gosto de casa da vovó   </h5>
                        </div>
                    </div>
                </div>

            </div>

            <div className="bg-danger bg-gradient text-center fs-2 text-light opacity-75 mb-5"> Dicas </div>

            <div className="d-flex justify-content-center mb-5">
                <div className="border-bottom border-5 rounded-5 shadow-lg border-danger-subtle me-5 label" style={{ width: "380px", height: "630px" }}>
                    <img width="380px" height="250px" src="https://guiadacozinha.com.br/wp-content/uploads/2023/07/alimentos-baratos-em-agosto-540x350.jpg" alt="icon" />
                    <h3 className="px-5 pt-5 pb-3 text-danger">Saiba quais frutas, legumes e verduras estarão baratos em agosto</h3>
                    <h5 className="px-5">Antes de ir as compras saiba o que vai estar mais barato em agosto para que você possa garantir os melhores alimentos.</h5>


                </div>

                <div className="d-flex flex-column">
                    <div className="d-flex">
                            <div className="border-bottom border-5 rounded-5 border-danger-subtle shadow-lg me-3 mb-3 label" style={{ width: "320px", height: "380px" }}>
                            <img width="320px" height="200px" src="https://guiadacozinha.com.br/wp-content/uploads/2023/07/Cheesecake-de-doce-de-leite-350x230.jpg" alt="icon" />
                            <h5 className="p-5 text-danger">7 ideias de receitas com doce de leite para te inspirar na cozinha</h5>
                        </div>
                        <div className="border-bottom border-5 rounded-5 border-danger-subtle shadow-lg me-3 mb-3 label" style={{ width: "320px", height: "380px" }}>
                            <img width="320px" height="200px" src="https://guiadacozinha.com.br/wp-content/uploads/2023/07/canelone-frango-e-bacon-350x230.jpg" alt="icon" />
                            <h5 className="p-5 text-danger">Sobrou massa de lasanha? Confira 3 receitas para aproveitar!</h5>
                        </div>
                    </div>
                    <div className="d-flex">
                    <div className="border-bottom border-5 rounded-5 border-danger-subtle shadow-lg me-3 mb-3 label" style={{ width: "320px", height: "380px" }}>
                            <img width="320px" height="200px" src="https://guiadacozinha.com.br/wp-content/uploads/2023/07/Diferentes-tipos-de-laranja-em-supermercado-350x230.jpg" alt="icon" />
                            <h5 className="p-5 text-danger">Laranja é tudo igual? Saiba as diferenças entre as mais populares</h5>
                        </div>
                        <div className="border-bottom border-5 rounded-5 border-danger-subtle shadow-lg me-3 mb-3 label" style={{ width: "320px", height: "380px" }}>
                            <img width="320px" height="200px" src="https://guiadacozinha.com.br/wp-content/uploads/2023/01/couve-flor-de-frigideira-350x230.jpg" alt="icon" />
                            <h5 className="p-5 text-danger">8 receitas simples para aproveitar alimentos em promoção</h5>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Home

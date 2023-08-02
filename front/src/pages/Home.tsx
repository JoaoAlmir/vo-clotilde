import Header from "../components/Header"

function Home() {

    return (
        <>
            <Header />

            <div className="mb-3" style={{ backgroundImage: `url(src/assets/searchBackground.png)`, height: '500px', backgroundSize: 'cover' }}>
                <div className="input-group top-50 w-50 mx-auto">
                    <input type="text" className="form-control" placeholder="Pesquisar Receita" aria-label="Pesquisar Receita" aria-describedby="button-addon2" />
                    <button className="btn btn-outline-light d-inline" type="button" id="search">Pesquisar</button>
                </div>
            </div>

            <div className="d-flex justify-content-center">
                <div className="border border-danger-subtle" style={{width:"380px",height:"780px"}}>
                    <img width="380px" height="250px" src="https://guiadacozinha.com.br/wp-content/uploads/2020/10/donuts-simples-350x230.jpg" alt="icon" />
                    <h3 className="p-5 text-danger">Donuts tradicional: aprenda a fazer versão sem cobertura   </h3>
                    
                    <span className="d-flex">
                        <i className="bi bi-alarm"></i>
                    </span>

                </div>
                <div></div>
            </div>

        </>
    )
}

export default Home

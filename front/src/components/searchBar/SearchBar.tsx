
export function SearchBar() {

    return (

        <div className="top-50 mb-5 home-search" style={{ backgroundImage: `url(src/assets/searchBackground.png)`, height: '500px', backgroundSize: 'cover' }}>
            <div className="input-group input-group-lg top-50 w-50 mx-auto">
                <input type="text" className="form-control" placeholder="Pesquisar Receita" aria-label="Pesquisar Receita" aria-describedby="button-addon2" />
                <button className="btn d-inline" type="button" id="search"> <i className="bi bi-search-heart-fill"></i> </button>
            </div>
        </div>

    )
}
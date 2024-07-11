import { useNavigate } from "react-router-dom"
import "./SearchBar.css"
export function SearchBar() {
    const nav = useNavigate()
    function redirect() {
        if (document.getElementById('search').value !== '') {
            nav('/busca/' + document.getElementById('search').value)
        }
    }

    return (

        <div className="top-50 mb-5 home-search" style={{ backgroundImage: `url(src/assets/searchBackground.png)`, height: '500px', backgroundSize: 'cover' }}>
            <div className="input-group input-group-lg top-50 w-50 mx-auto">
                <input type="text" id="search" className="form-control rounded-5" placeholder="Pesquisar Receita" aria-label="Pesquisar Receita" aria-describedby="button-addon2" />
                <button onClick={redirect} className="d-inline search-button rounded-5" type="button" id="search"> <i style={{ color: "pink", padding: "12px" }} className="bi bi-search-heart-fill text-dark"></i> </button>
            </div>
        </div>

    )
}
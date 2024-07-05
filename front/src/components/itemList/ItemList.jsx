import { NavLink } from "react-router-dom";
import "./ItemList.css";
export function ItemList({ titulo, data, imagem, link }) {
    titulo = "Capuccino de chocolate"
    data = "15/15/2000"
    imagem = "https://www.rbsdirect.com.br/imagesrc/23490969.jpg?version=1575255600"
    link = "6686648ea9c80558b6712d5d"
    return (
        <>
            <div className="d-flex rounded bg-danger-subtle">
                <NavLink end to={"/detalhes/" + link} className="rounded" style={{ width: "120px", height: "80px" }}>
                    <img width="120px" height="85em" src={imagem} alt="icon" />
                </NavLink>
                <h4 className="p-4 ">  {titulo} </h4>
                <h4 className="p-4"> {data} </h4>
                <NavLink end to={"/edit/" + link} className="p-4 btn buttom-list border-black border-bottom">
                    <i style={{ color: "blue"}}className="bi bi-pencil-square h3"></i>
                </NavLink>
                <button className="btn p-4 buttom-list border-black ">
                    <i style={{ color: "red"}} className="bi bi-trash h3"></i>
                </button>
            </div>


        </>
    )

}
import { NavLink } from "react-router-dom";
import "./ItemList.css";
export function ItemList({ titulo, data, imagem, link }) {
    return (
        <>
            <div className="d-flex rounded list-container justify-content-between">
                <span>
                <NavLink end to={"/detalhes/" + link} className="rounded" style={{ width: "120px", height: "80px" }}>
                    <img width="120px" height="85em" src={imagem} alt="icon" />
                </NavLink>
                <h4 className="p-4 d-inline">  {titulo} </h4>
                </span>
                <span>
                    <h4 className="p-4 text-end d-inline"> {data} </h4>

                    <NavLink end to={"/edit/" + link} className="p-4 btn buttom-list border-black border-bottom">
                        <i style={{ color: "blue" }} className="bi bi-pencil-square h3"></i>
                    </NavLink>
                    <button className="btn p-4 buttom-list border-black ">
                        <i style={{ color: "red" }} className="bi bi-trash h3"></i>
                    </button>
                </span>
            </div>


        </>
    )

}
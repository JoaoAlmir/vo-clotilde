import { NavLink } from "react-router-dom";
import "./ItemCard.css";

export function ItemCard({ detalhado, titulo, tempo, porcoes, dificuldade, imagem, link }) {

    return (
        (detalhado) ? (
            <NavLink end to={"/detalhes/" + link} className="border-bottom border-5 rounded-5 shadow-lg border-danger-subtle me-5 item-card label" style={{ width: "380px", height: "700px"}}>
                <img width="380px" height="250px" src={imagem} alt="icon" />
                <h3 className="p-5 text-danger">  {titulo} </h3>
                {dificuldade && <span className="d-flex flex-column ">
                    <div>
                        <i style={{ color: "red", fontSize: "2em" }} className="bi bi-alarm p-5"></i>
                        <p className="d-inline text-danger">{tempo}</p>
                    </div>
                    <div className="mt-4">
                        <i style={{ color: "red", fontSize: "2em" }} className="bi bi-fullscreen-exit p-5"></i>
                        <p className="d-inline text-danger">{porcoes}</p>
                    </div>
                    <div className="mt-4">
                        <i style={{ color: "red", fontSize: "2em" }} className="bi bi-suit-diamond p-5"></i>
                        <p className="d-inline text-danger">{dificuldade}</p>
                    </div>
                </span>}


            </NavLink>
        ) : (
            <NavLink end to={"/detalhes/" + link}>
                <div className="border-bottom border-5 rounded-5 border-danger-subtle shadow-lg me-3 mb-3 label item-card" style={{ width: "320px", height: "380px" }}>

                    <img width="320px" height="200px" src={imagem} alt="icon" />
                    <h5 className="p-5 text-danger">{titulo}</h5>

                </div>
            </NavLink>
        )
    )
}
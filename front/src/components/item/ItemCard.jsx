import { NavLink } from "react-router-dom";

export function ItemCard({detalhado,titulo, tempo, porcoes, dificuldade, imagem}) {

    return (
        (detalhado) ? (
            <NavLink end to="/detalhes" className="border-bottom border-5 rounded-5 shadow-lg border-danger-subtle me-5 label" style={{ width: "380px", height: "700px" }}>
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
        ) : (<div className="border-bottom border-5 rounded-5 border-danger-subtle shadow-lg me-3 mb-3 label" style={{ width: "320px", height: "380px" }}>
            <img width="320px" height="200px" src={imagem} alt="icon" />
            <h5 className="p-5 text-danger">{titulo}</h5>
        </div>
        )
    )
}
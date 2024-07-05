import { NavLink } from "react-router-dom";
import "./ItemList.css";
import { delAllCommentByItem } from "../../api/comment";
import { delItem } from "../../api/item";
import { useContext } from "react";
import { AuthContext } from "../../App";


export function ItemList({ titulo, data, imagem, idItem, itens, setItens }) {

    const auth = useContext(AuthContext);


    function deleteItem() {
        delAllCommentByItem(idItem,auth.token).then((res) => {
            delItem(idItem,auth.token).then((res) => {
                let it = itens.filter((i) => {
                    return i._id !== idItem
                }
                )
                setItens(it)
            }
            ).catch((err) => {
                console.log(err)
            })
        }
        ).catch((err) => {
            console.log(err)
        })

    }

    return (
        <>
            <div className="d-flex rounded list-container justify-content-between">
                <span>
                    <NavLink end to={"/detalhes/" + idItem} className="rounded" style={{ width: "120px", height: "80px" }}>
                        <img width="120px" height="85em" src={imagem} alt="icon" />
                    </NavLink>
                    <NavLink end to={"/detalhes/" + idItem} className="rounded" style={{ width: "120px", height: "80px" }}>

                        <h4 className="p-4 d-inline">  {titulo} </h4>
                    </NavLink>

                </span>
                <span>
                    <h4 className="p-4 text-end d-inline"> {data} </h4>

                    <NavLink end to={"/admin/edit/" + idItem} className="p-4 btn buttom-list border-black border-bottom">
                        <i style={{ color: "blue" }} className="bi bi-pencil-square h3"></i>
                    </NavLink>
                    <button onClick={deleteItem} className="btn p-4 buttom-list border-black ">
                        <i style={{ color: "red" }} className="bi bi-trash h3"></i>
                    </button>
                </span>
            </div>


        </>
    )

}
import { NavLink, useNavigate } from "react-router-dom";
import Header from "../../components/header/Header"
import { useEffect, useState } from "react";
import { ItemList } from "../../components/itemList/ItemList";
import { delItem, fetchItens } from "../../api/item";
import { delAllCommentByItem } from "../../api/comment";


function Admin() {
    const [itens, setItens] = useState([]);

    // function handleDelete(id) {
    //     console.log(id)

    //     // delAllCommentByItem(id).then((res) => {
    //     //     delItem(id).then((res) => {
    //     //         let it = itens.filter((i) => {
    //     //             return i._id !== id
    //     //         }
    //     //         )
    //     //         setItens(it)
    //     //     }
    //     //     ).catch((err) => {
    //     //         console.log(err)
    //     //     })
    //     // }
    //     // ).catch((err) => {
    //     //     console.log(err)
    //     // })

    // }

    useEffect(() => {
        fetchItens().then((res) => {
            setItens(res.data)
        }
        ).catch((err) => {
            console.log(err)
        })
    }, [itens])

    return (
        <>

            <Header />


            <div className="d-flex p-5 justify-content-center">


                <div className="flex-column border-danger border rounded p-5">

                    <div className="d-flex justify-content-center mb-2">
                        <NavLink to="/admin/add" className="btn btn-danger rounded rounded-circle">
                            <i className="bi bi-plus-circle h1 p-3"></i>
                        </NavLink>
                    </div>

                    {
                        itens?.map((i) => (
                            <div className="" key={i._id}>
                                {i != undefined &&
                                    <ItemList titulo={i.titulo} data={i.dataCriacao} imagem={i.imagem} idItem={i._id}  />

                                }




                            </div>

                        ))
                    }




                </div>

            </div >


        </>
    )
}

export default Admin

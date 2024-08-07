import { NavLink, useNavigate } from "react-router-dom";
import Header from "../../components/header/Header"
import { useEffect, useState } from "react";
import { ItemList } from "../../components/itemList/ItemList";
import { fetchItens } from "../../api/item";


function Admin() {
    const [itens, setItens] = useState([]);

    useEffect(() => {
        fetchItens().then((res) => {
            setItens(res.data)
        }
        ).catch((err) => {
            console.log(err)
        })
    }, [])

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
                                    <ItemList titulo={i.titulo} data={i.dataCriacao} imagem={i.imagem} idItem={i._id} itens={itens} setItens={setItens} />

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

import { NavLink, useNavigate } from "react-router-dom";
import Header from "../../components/header/Header"
import { useContext } from "react";
import { AuthContext } from "../../App";
import { ItemList } from "../../components/itemList/ItemList";


function Admin() {
    const nav = useNavigate();
    const auth = useContext(AuthContext);

    // nav("/")


    return (
        <>

            <Header />



            <div className="d-flex p-5 justify-content-center">
                <div className="flex-column border-danger border rounded p-5">
                    <ItemList />
                    <ItemList />
                    <ItemList />




                    
                </div>

            </div >
            

        </>
    )
}

export default Admin

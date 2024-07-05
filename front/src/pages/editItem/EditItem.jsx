import { useNavigate, useParams } from "react-router-dom";
import { fetchItem, postItem, putItem } from "../../api/item";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../App";
import { useContext, useEffect, useState } from "react";
import Header from "../../components/header/Header";


function EditItem() {
    const [itens, setItens] = useState([]);

    const { register, handleSubmit } = useForm();
    const nav = useNavigate();
    const auth = useContext(AuthContext);


    let idItem = useParams().id;

    function fillInputs() {
        if(itens.length === 0) return;

        document.querySelector('input[name="titulo"]').value = itens.titulo;
        document.querySelector('input[name="tempoPreparo"]').value = itens.tempoPreparo;
        document.querySelector('input[name="rendimento"]').value = itens.rendimento;
        document.querySelector('textarea[name="introducao"]').value = itens.introducao;
        document.querySelector('textarea[name="ingredientes"]').value = itens.ingredientes;
        document.querySelector('textarea[name="preparo"]').value = itens.preparo;
        document.querySelector('input[name="imagem"]').value = itens.imagem;
        document.querySelector('select[name="categoria"]').value = itens.categoria;
        document.querySelector('input[name="dificuldade"][value="' + itens.dificuldade + '"]').checked = true;

    }


    useEffect(() => {
        fetchItem(idItem).then((res) => {
            setItens(res.data)

        }).catch((err) => {
            console.log(err)
        })
    }, [idItem])


    useEffect(() => {
        fetchItem(idItem).then((res) => {
            fillInputs()
        }).catch((err) => {
            console.log(err)
        })
    }, [itens])



    const onSubmit = (data) => {
        data.rendimento = data.rendimento;
        // let horas = Math.floor(data.tempoPreparo / 60);
        // let minutos = data.tempoPreparo % 60;
        // if (horas > 0 && minutos > 0) {
        //     data.tempoPreparo = horas + " horas e " + minutos + " minutos";
        // }
        // else if (horas > 0) {
        //     data.tempoPreparo = horas + " horas";
        // }
        // else {
        //     data.tempoPreparo = minutos + " minutos";
        // }
        data.tempoPreparo = data.tempoPreparo;


        putItem(data.titulo, data.tempoPreparo, data.rendimento, data.dificuldade, data.introducao, data.ingredientes, data.preparo, data.categoria, data.imagem, auth.token, idItem).then((response) => {
            alert('Receita editada com sucesso')
            nav('/admin')

        }).catch((error) => console.log(error))
    };

    return (
        <>

            <Header />

            <div className="d-flex p-5 justify-content-center">
                <div className="flex-column border-danger border rounded p-5 w-50">
                    <h2 className="mb-4 text-center">Editar Receita</h2>

                    <form onSubmit={handleSubmit(onSubmit)} >

                        <div className="mb-3">
                            <label className="form-label">Titulo</label>
                            <input type="text" className="form-control" {...register("titulo")} />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Tempo de preparo (minutos)</label>
                            <input type="number" min="0" className="form-control" {...register("tempoPreparo")} />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Rendimento (porções)</label>
                            <input type="number" min="0" className="form-control" {...register("rendimento")} />
                        </div>

                        <label className="form-label ">Dificuldade</label><br />

                        <div className="form-check form-check-inline" >
                            <input className="form-check-input " type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Fácil" {...register("dificuldade")} />
                            <label className="form-check-label" >Fácil</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input " type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Média" {...register("dificuldade")} />
                            <label className="form-check-label" >Média</label>
                        </div>
                        <div className="form-check form-check-inline mb-3">
                            <input className="form-check-input " type="radio" name="inlineRadioOptions" id="inlineRadio3" value="Difícil" {...register("dificuldade")} />
                            <label className="form-check-label " >Difícil</label>
                        </div>

                        <div className="form-group mb-3 ">
                            <label >Introdução</label>
                            <textarea className="form-control" rows="5" {...register("introducao")}></textarea>
                        </div>

                        <div className="form-group mb-3" >
                            <label >Ingredientes</label>
                            <textarea className="form-control" rows="5" {...register("ingredientes")}></textarea>
                        </div>

                        <div className="form-group mb-3">
                            <label >Preparo</label>
                            <textarea className="form-control" rows="5" {...register("preparo")}></textarea>
                        </div>

                        <label className="form-label">Categoria</label>

                        <div className="input-group mb-3">
                            <select className="custom-select form-control" {...register("categoria")}>
                                <option value="be">Bebida</option>
                                <option value="bo">Bolo/Torta</option>
                                <option value="ca">Carne</option>
                                <option value="do">Doce/Sobremesa</option>
                                <option value="ma">Massa</option>
                                <option value="pe">Peixe/Fruto do mar</option>
                            </select>
                        </div>



                        <div className="mb-3">
                            <label className="form-label">Link imagem</label>
                            <input type="text" className="form-control" {...register("imagem")} />
                        </div>

                        <button type="submit" className="btn btn-danger d-block mx-auto mt-5">Submit</button>

                    </form>
                </div>

            </div >


        </>
    )
}

export default EditItem

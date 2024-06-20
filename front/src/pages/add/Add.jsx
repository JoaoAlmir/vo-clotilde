import Header from "../../components/header/Header"
import { useForm } from "react-hook-form";


function Add() {
    const { register, handleSubmit } = useForm();

    let res;

    return (
        <>

            <Header />



            <div className="d-flex p-5 justify-content-center">
                <div className="flex-column border-danger border rounded p-5">
                    <h2 className="mb-4">Adicionar Receita</h2>

                    <form onSubmit={handleSubmit(res)} >

                        <div className="mb-3">
                            <label className="form-label">Titulo</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" />
                        </div>

                        <label className="form-label">Tempo de preparo</label>

                        <div className="input-group mb-3">
                            <select className="custom-select form-control" id="inputGroupSelect01">
                                <option value="5 minutos">5 min</option>
                                <option value="15 minutos">15 min</option>
                                <option value="30 minutos">30 min</option>
                                <option value="45 minutos">45 min</option>
                                <option value="1 hora">1 hora</option>
                                <option value="1 hora e 30 minutos">1 hora e meia</option>
                                <option value="2 horas">2 horas</option>
                                <option value="3 horas">3 horas</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Rendimento</label>
                            <input type="number" min="0" className="form-control" id="exampleInputEmail1" />
                        </div>

                        <label className="form-label ">Dificuldade</label><br />

                        <div className="form-check form-check-inline">
                            <input className="form-check-input " type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Fácil" />
                            <label className="form-check-label" >Fácil</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input " type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Média" />
                            <label className="form-check-label" >Média</label>
                        </div>
                        <div className="form-check form-check-inline mb-3">
                            <input className="form-check-input " type="radio" name="inlineRadioOptions" id="inlineRadio3" value="Difícil" />
                            <label className="form-check-label " >Difícil</label>
                        </div>

                        <div className="form-group mb-3 ">
                            <label >Introdução</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <div className="form-group mb-3">
                            <label >Ingredientes</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <div className="form-group mb-3">
                            <label >Preparo</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <label className="form-label">Categoria</label>

                        <div className="input-group mb-3">
                            <select className="custom-select form-control" id="inputGroupSelect01">
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
                            <input type="email" className="form-control" id="exampleInputEmail1" />
                        </div>
                        
                        <button type="submit" className="btn btn-primary">Submit</button>

                    </form>
                </div>

            </div >


        </>
    )
}

export default Add

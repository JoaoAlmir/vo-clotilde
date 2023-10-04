import axios from "axios"

const url_base = "http://localhost:3000"

export function login(matricula, senha){
    return axios({
        method:"POST",
        url:url_base+"/alunos/login",
        data:{
            matricula:matricula,
            senha:senha
        }
    })
}

export function criarAluno(nome, matricula, senha){
    console.log({nome,matricula,senha})
    return axios({
        method:"POST",
        url:url_base+"/alunos",
        data:{
            nome,matricula,senha
        }
    });
}

export function fetchAlunos(token){
    return axios({
        method: "GET",
        url: url_base+"/alunos",
        headers:{
            token: token
        }
    })
}
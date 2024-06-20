import axios from "axios"

const url_base = "http://localhost:9999"

// export function login(matricula, senha){
//     return axios({
//         method:"POST",
//         url:url_base+"/alunos/login",
//         data:{
//             matricula:matricula,
//             senha:senha
//         }
//     })
// }

export function PostItem(titulo, tempoPreparo, rendimento, dificuldade, introducao, ingredientes, preparo, categoria, imagem) {
    return (axios({
        method: 'POST',
        url: url_base+"/itens",
        data: { titulo: titulo, tempoPreparo: tempoPreparo,rendimento:rendimento, dificuldade:dificuldade, introducao:introducao, ingredientes:ingredientes, preparo:preparo, categoria:categoria, imagem:imagem }
    })
    )
}

export function fetchItens(){
    return axios({
        method: "GET",
        url: url_base+"/itens",
        // headers:{
        //     token: token
        // }
    })
}

export function fetchItem(id){
    return axios({
        method: "GET",
        url: url_base+"/itens/"+ id,
        // headers:{
        //     token: token
        // }
    })
}

export function fetchCategory(category){
    return axios({
        method: "GET",
        url: url_base+"/itens/categoria/"+category,
        // headers:{
        //     token: token
        // }
    })
}
import axios from "axios"

const url_base = "https://vo-receitas.onrender.com"

export function postItem(titulo, tempoPreparo, rendimento, dificuldade, introducao, ingredientes, preparo, categoria, imagem, token) {
    return (axios({
        method: 'POST',
        url: url_base+"/itens",
        data: { titulo: titulo, tempoPreparo: tempoPreparo,rendimento:rendimento, dificuldade:dificuldade, introducao:introducao, ingredientes:ingredientes, preparo:preparo, categoria:categoria, imagem:imagem },
        headers:{
            token: token.token
        }
    })
    )
}

export function putItem(titulo, tempoPreparo, rendimento, dificuldade, introducao, ingredientes, preparo, categoria, imagem, token, id) {
    return (axios({
        method: 'PUT',
        url: url_base+"/itens/"+id,
        data: { titulo: titulo, tempoPreparo: tempoPreparo,rendimento:rendimento, dificuldade:dificuldade, introducao:introducao, ingredientes:ingredientes, preparo:preparo, categoria:categoria, imagem:imagem },
        headers:{
            token: token.token
        }
    })
    )
}

export function fetchItens(){
    return axios({
        method: "GET",
        url: url_base+"/itens",
        
    })
}

export function fetchItem(id){
    return axios({
        method: "GET",
        url: url_base+"/itens/"+ id,
    })
}

export function fetchCategory(category){
    return axios({
        method: "GET",
        url: url_base+"/itens/categoria/"+category,
    })
}

export function delItem(id, token){
    return axios({
        method: "DELETE",
        url: url_base+"/itens/"+id,
        headers:{
            token: token.token
        }
    })
}

export function searchItem(text){
    return axios({
        method: "GET",
        url: url_base+"/itens/busca/"+text,
    })
}
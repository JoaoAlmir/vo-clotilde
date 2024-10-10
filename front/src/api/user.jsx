import axios from "axios"

const url_base = "https://vo-receitas.onrender.com"

export function postLogin(email, senha){ {
    return (axios({
        method: 'POST',
        url: url_base+"/login",
        data: { email: email, senha: senha }
    })
    )
}}

export function postUser(email, nome, senha){ {
    return (axios({
        method: 'POST',
        url: url_base+"/users",
        data: { email: email, nome:nome, senha: senha }
    })
    )
}}
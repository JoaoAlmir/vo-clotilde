import axios from "axios"

const url_base = "http://localhost:9999"

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
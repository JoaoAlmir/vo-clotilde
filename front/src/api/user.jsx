import axios from "axios"

const url_base = "http://localhost:9999"

export function PostLogin(email, senha){ {
    return (axios({
        method: 'POST',
        url: url_base+"/login",
        data: { email: email, senha: senha }
    })
    )
}}
import axios from "axios"

const url_base = "http://localhost:9999"

export function fetchCommentByItemId(id) {
    {
        return (axios({
            method: 'GET',
            url: url_base + "/Comments/item/" + id,
        })
        )
    }
}

export function postComment(texto, idItem, user, token) {
    return (axios({
        method: 'POST',
        url: url_base + "/comments",
        data: { texto: texto, idItem: idItem, user: user},
        headers: {
            token: token
        }
    })
    )
}
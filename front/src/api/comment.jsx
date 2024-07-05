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

export function postComment(texto, idItem, token) {
    return (axios({
        method: 'POST',
        url: url_base + "/comments",
        data: { texto: texto, idItem: idItem, user: token.nome, idUser: token.idUser},
        headers: {
            token: token.token
        }
    })
    )
}

export function delComment(id, token) {
    return (axios({
        method: 'DELETE',
        url: url_base + "/comments/" + id,
        headers: {
            token: token.token
        }
    })
    )
}

export function delAllCommentByItem(id, token) {
    return (axios({
        method: 'DELETE',
        url: url_base + "/comments/item/" + id,
        headers: {
            token: token.token
        }
    })
    )
}
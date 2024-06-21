import axios from "axios"

const url_base = "http://localhost:9999"

export function fetchCommentByItemId(id){ {
    return (axios({
        method: 'GET',
        url: url_base+"/Comments/item/"+id,
    })
    )
}}
import { useContext } from "react";
import { AuthContext } from "../../App";
import { delComment } from "../../api/comment";


function Comment({ user, texto, idComment, perm, comments, setComments}) {
    const auth = useContext(AuthContext);

    function deleteComment() {
        delComment(idComment, auth.token).then((res) => {
            let co = comments.filter((c) => {
                return c._id !== idComment
            })
            setComments(co)

        }
        ).catch((err) => {
            console.log(err)
        })
    }

    return (
        <>
            <div className="d-flex">

                <div className="d-flex flex-column mx-auto w-50 border rounded border-danger mb-4">

                    <div className="d-flex flex-column m-3">
                        <div className="d-flex justify-content-between">
                            <h3> <i className="bi bi-person-circle color: #ff0000"></i> {user}</h3>
                            { (perm) &&<button onClick={deleteComment}><i style={{ color: "red" }} className="bi bi-trash3-fill p-2"></i></button>}
                        </div>

                        <h4 className="p-3">{texto}</h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Comment

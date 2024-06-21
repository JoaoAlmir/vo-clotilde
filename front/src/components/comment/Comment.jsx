

function Comment({ user, texto }) {
    return (
        <>
            <div className="d-flex">
                
                <div className="d-flex flex-column mx-auto w-50 border rounded border-danger mb-4">
                    
                            <div className="d-flex flex-column m-3">
                                <h3> <i className="bi bi-person-circle color: #ff0000"></i> {user}</h3>
                                <h4 className="p-3">{texto}</h4>
                            </div>
                    </div>
                </div>
        </>
    )
}

export default Comment

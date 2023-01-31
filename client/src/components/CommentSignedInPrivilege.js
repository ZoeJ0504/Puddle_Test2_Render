import React, { useState } from "react";

function CommentSignedInPrivilege({ handleDelete, commentId, handleCommentUpdate }) {
    const [commentUpdateForm, setCommentUpdateForm] = useState(false)
    const [updatedComment, setUpdatedComment] = useState("")

    const handleDeleteButton = () => {
        handleDelete(commentId)
    }

    const handleUpdateButton = () => {
        setCommentUpdateForm(!commentUpdateForm)
    }

    const handleCommentChange = (event) => {
        setUpdatedComment(event.target.value)
    }

    const handleCommentSubmit = (event) => {
        handleCommentUpdate(event, { commentId, setUpdatedComment, updatedComment })
        setCommentUpdateForm(!commentUpdateForm)
    }


    return (
        <div>
            <button onClick={handleUpdateButton}>Update?</button>
            <button onClick={handleDeleteButton}>Delete</button>
            {commentUpdateForm === true ?
                <form onSubmit={handleCommentSubmit}>
                    <input type="text" value={updatedComment} onChange={handleCommentChange} />
                    <button>Post</button>
                </form> : ""}
        </div>
    )
}

export default CommentSignedInPrivilege
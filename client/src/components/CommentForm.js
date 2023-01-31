import React, { useState } from "react"

function CommentForm({ handleCommentSubmit }) {
    const [newComment, setNewComment] = useState("")

    const handleSubmit = (event) => {
        handleCommentSubmit(event, { newComment })
    }

    const handleChange = (event) => {
        setNewComment(event.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={newComment} />
                <button>Submit</button>
            </form>
        </div>
    )
}
export default CommentForm
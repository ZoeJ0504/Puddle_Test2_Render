import React, { useState } from "react"

function CommentForm({ postComment, userId, postId }) {
    const [newComment, setNewComment] = useState("")

    console.log(postId)
    const handleSubmit = (event) => {
        event.preventDefault()
        fetch("/cpost", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    message: newComment,
                    user_id: userId,
                    puzzle_id: postId
                }
            ),
        })
            .then(res => res.json())
            .then(data => console.log(data))
        event.target.reset()
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
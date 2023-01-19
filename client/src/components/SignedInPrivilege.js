import React, { useState } from "react";

function SignedInPrivilege({ handleDelete, postId, setComments }) {
    const [updatePost, setUpdatePost] = useState(false)
    const [updatedText, setUpdatedText] = useState("")



    const handleClick = () => {
        setUpdatePost(!updatePost)
    }

    const handleChange = (event) => {
        setUpdatedText(event.target.value)
    }


    const handleSubmit = (event) => {
        event.preventDefault()

        fetch(`/worldpuzzleupdate/${postId}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                post: updatedText
            }),
        })
            .then(res => res.json())
            .then(data => setComments((comments) => comments?.map((comment) => comment.id === data.id ? data : comment)))

        setUpdatePost(!updatePost)
        setUpdatedText("")
    }

    const handleDeleteClick = () => {
        handleDelete(postId)
    }

    return (
        <div>
            <button onClick={handleClick}>Update</button>
            <button onClick={handleDeleteClick}>Delete</button>
            {updatePost === true ?
                <form onSubmit={handleSubmit}>
                    <input type="text" value={updatedText} onChange={handleChange} />
                    <button>Update!</button>
                </form> : ""}

        </div>
    )
}

export default SignedInPrivilege
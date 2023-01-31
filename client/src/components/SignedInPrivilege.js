import React, { useState } from "react";

function SignedInPrivilege({ handleDelete, handleSubmit, postId }) {
    const [updatePost, setUpdatePost] = useState(false)
    const [updatedText, setUpdatedText] = useState("")

    const handleFormSubmit = (event) => {
        handleSubmit(event, {postId, setUpdatedText, updatedText})
        setUpdatePost(!updatePost)
    }

    const handleClick = () => {
        setUpdatePost(!updatePost)
    }

    const handleChange = (event) => {
        setUpdatedText(event.target.value)
    }

    const handleDeleteClick = () => {
        handleDelete(postId)
    }

    return (
        <div>
            <button onClick={handleClick}>Update</button>
            <button onClick={handleDeleteClick}>Delete</button>
            {updatePost === true ?
                <form onSubmit={handleFormSubmit}>
                    <input type="text" value={updatedText} onChange={handleChange} />
                    <button>Update!</button>
                </form> : ""}

        </div>
    )
}

export default SignedInPrivilege
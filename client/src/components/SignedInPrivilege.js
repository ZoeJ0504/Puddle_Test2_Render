import React, { useState } from "react";

function SignedInPrivilege({ currentPost }) {
    const [updatePost, setUpdatePost] = useState(false)
    const [updatedText, setUpdatedText] = useState("")


    const handleClick = () => {
        setUpdatePost(!updatePost)
    }

    const handleChange = (event) => {
        console.log(updatedText)
        setUpdatedText(event.target.value)
    }


    const handleSubmit = (event) => {
        event.preventDefault()

        fetch(`/posts/${currentPost}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                text: updatedText
            }),
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    const handleDelete = () => {
        fetch(`/posts/${currentPost}`, {
            method: "DELETE"
        })
            .then(res => res.json())

    }

    return (
        <div>
            <button onClick={handleClick}>Update</button>
            <button onClick={handleDelete}>Delete</button>
            {updatePost === true ?
                <form onSubmit={handleSubmit}>
                    <input type="text" value={updatedText} onChange={handleChange} />
                    <button>Update!</button>
                </form> : ""}

        </div>
    )
}

export default SignedInPrivilege
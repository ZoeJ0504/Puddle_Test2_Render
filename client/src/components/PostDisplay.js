import React, { useEffect, useState } from "react";
import SignedInPrivilege from "./SignedInPrivilege";

function PostDisplays({ text, id, user, postId }) {
    const [username, setUsername] = useState([])

    useEffect(() => {
        fetch(`/users/${id}`)
            .then(res => res.json())
            .then(data => setUsername(data.username))
    }, [id])

    return (
        <div>
            <p>{text}</p>
            <p>-{username}</p>
            {user && (user?.username === username ? <SignedInPrivilege currentPost={postId} /> : <p>Enjoy the Post!</p>)}
        </div>
    )
}

export default PostDisplays
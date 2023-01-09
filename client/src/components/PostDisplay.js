import React, { useEffect, useState } from "react";
import SignedInPrivilege from "./SignedInPrivilege";

function PostDisplays({ text, id, user, postId }) {
    const [maybe, setMaybe] = useState([])

    useEffect(() => {
        fetch(`/users/${id}`)
            .then(res => res.json())
            .then(data => setMaybe(data.username))
    }, [id])

    return (
        <div>
            <p>{text}</p>
            <p>-{maybe}</p>
            {user && (user?.username === maybe ? <SignedInPrivilege currentPost={postId} /> : <p>Enjoy the Post!</p>)}
        </div>
    )
}

export default PostDisplays
import React, { useEffect, useState } from "react";
import SignedInPrivilege from "./SignedInPrivilege";

function PostDisplays({ text, id, user, postId, handleDelete, setComments }) {
    const [postUsername, setPostUsername] = useState("")

    useEffect(() => { id === undefined ? setPostUsername("") : setPostUsername(id.username) }, [])


    return (
        <div>
            <p>{text}</p>
            <p>-{postUsername}</p>
            {user && (user?.username === postUsername ? <SignedInPrivilege setComments={setComments} handleDelete={handleDelete} postId={postId} /> : <p>Enjoy the Post!</p>)}
        </div>
    )
}

export default PostDisplays
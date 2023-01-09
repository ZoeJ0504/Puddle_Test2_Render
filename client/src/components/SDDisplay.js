import React, { useEffect, useState } from "react";
import SignedInPrivilege from "./SignedInPrivilege";

function SDDisplay({ text, user, id, postId }) {
    const [maybe, setMaybe] = useState([])

    console.log(text)

    useEffect(() => {
        fetch(`/users/${id}`)
            .then(res => res.json())
            .then(data => setMaybe(data.username))
    }, [id])
    console.log(text)
    return (
        <div>
            <img src={text} alt={text} />
            <p>-{maybe}</p>
            {user && (user?.username === maybe ? <SignedInPrivilege currentPost={postId} /> : <p>Enjoy the Post!</p>)}
        </div>
    )
}
export default SDDisplay
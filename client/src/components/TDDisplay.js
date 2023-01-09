import React, { useState, useEffect } from "react";
import SignedInPrivilege from "./SignedInPrivilege";

function TDDisplay({ text, user, id, postId }) {
    const [maybe, setMaybe] = useState([])


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

export default TDDisplay
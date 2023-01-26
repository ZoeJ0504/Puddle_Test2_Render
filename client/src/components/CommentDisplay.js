import React from "react"
import SignedInPrivilege from "./SignedInPrivilege"

function CommentDisplay({ comment, }) {


    return (

        <div>
            <p>{comment}</p>
            <SignedInPrivilege />
        </div>
    )
}

export default CommentDisplay
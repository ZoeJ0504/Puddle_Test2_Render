import React, { useEffect, useState } from "react";
import SignedInPrivilege from "./SignedInPrivilege";
import CommentForm from "./CommentForm";
import CommentDisplay from "./CommentDisplay";

function PostDisplays({ text, id, user, postId, handleDelete, setRiddles, postComment }) {
    const [postUsername, setPostUsername] = useState("")
    const [showComment, setShowComment] = useState(false)
    const [postComments, setPostComments] = useState([])

    useEffect(() => { id === undefined ? setPostUsername("") : setPostUsername(id.username) }, [id])

    const handleClick = () => { setShowComment(!showComment) }

    useEffect(() => {
        fetch(`/postcomment/${postId}`)
            .then(res => res.json())
            .then(data => setPostComments(data))
    }, [postId])
    console.log(postComments)
    return (
        <div>
            <p>{text}</p>
            <p>-{postUsername}</p>
            {user && (user?.username === postUsername ? <SignedInPrivilege setRiddles={setRiddles} handleDelete={handleDelete} postId={postId} /> : <p>Enjoy the Post!</p>)}
            <button onClick={handleClick}>Comment</button>
            {(showComment === true ? <CommentForm postComment={postComment} userId={user.id} postId={postId} /> : <p></p>)}
            {postComments.map(postComment => <CommentDisplay key={postComment.id} comment={postComment.message} />)}
        </div>
    )
}

export default PostDisplays
import React, { useEffect, useState } from "react";
import SignedInPrivilege from "./SignedInPrivilege";
import CommentForm from "./CommentForm";
import CommentDisplay from "./CommentDisplay";

function PostDisplays({ text, id, user, postId, handleDelete, setRiddles, postComment, handleSubmit, comments }) {
    const [postUsername, setPostUsername] = useState("")
    const [showComment, setShowComment] = useState(false)
    const [postComments, setPostComments] = useState([])

    useEffect(() => { id === undefined ? setPostUsername("") : setPostUsername(id.username) }, [id])

    const handleClick = () => { setShowComment(!showComment) }

    useEffect(() => {
        fetch(`/postcommentriddle/${postId}`)
            .then(res => res.json())
            .then(data => setPostComments(data))
    }, [postId])

    console.log(comments)
    const handleCommentDelete = (commentId) => {
        fetch(`/commentremove/${commentId}`, {
            method: "DELETE"
        })
            .then(res => res.json())
        setPostComments(postComments.filter(comment => comment.id !== commentId))
    }

    const handleCommentSubmit = (event, { newComment }) => {
        event.preventDefault()
        fetch("/cpost", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    message: newComment,
                    user_id: user.id,
                    worldpuzzle_id: postId,
                    sd_puzzle_id: 0,
                    threedpuzzle_id: 0
                }
            ),
        })
            .then(res => res.json())
            .then(data => setPostComments([data, ...postComments]))
        event.target.reset()
        setShowComment(!showComment)
    }

    const handleCommentUpdate = (event, { commentId, setUpdatedComment, updatedComment }) => {
        event.preventDefault()

        fetch(`/commentupdate/${commentId}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                message: updatedComment
            }),
        })
            .then(res => res.json())
            .then(data => setPostComments((comment) => comment?.map((comment) => comment.id === data.id ? data : comment)))

        setUpdatedComment("")
    }

    return (
        <div>
            <p>{text}</p>
            <p>-{postUsername}</p>
            {user && (user?.username === postUsername ? <SignedInPrivilege setRiddles={setRiddles} handleDelete={handleDelete} postId={postId} handleSubmit={handleSubmit} /> : <p>Enjoy the Post!</p>)}
            <button onClick={handleClick}>Comment</button>
            {(showComment === true ? <CommentForm postComment={postComment} handleCommentSubmit={handleCommentSubmit} /> : <p></p>)}
            {postComments.map(postComment => <CommentDisplay key={postComment.id} comment={postComment.message} commentId={postComment.id} postUser={postComment.user.username} loggedInUser={user} handleCommentDelete={handleCommentDelete} handleCommentUpdate={handleCommentUpdate} />)}
        </div>
    )
}

export default PostDisplays
import React, { useEffect, useState } from "react";
import SignedInPrivilege from "./SignedInPrivilege";
import CommentForm from "./CommentForm";
import CommentDisplay from "./CommentDisplay";

function SDDisplay({ imgUrl, postUser, currentUser, postId, handleDelete, handleSubmit }) {
    const [showComment, setShowComment] = useState(false)
    const [postComments, setPostComments] = useState([])



    const handleClick = () => { setShowComment(!showComment) }

    useEffect(() => {
        fetch(`/postcomment/${postId}`)
            .then(res => res.json())
            .then(data => setPostComments(data))
    }, [postId])


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
                    user_id: currentUser.id,
                    puzzle_id: postId
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
            <img src={imgUrl} alt="Spot The Difference" />
            <p>- {postUser.username}</p>
            {currentUser && (currentUser?.username === postUser.username ? <SignedInPrivilege postId={postId} handleDelete={handleDelete} handleSubmit={handleSubmit} /> : <p>Enjoy the Post!</p>)}
            <button onClick={handleClick}>Comment</button>
            {(showComment === true ? <CommentForm postComment={postComments} handleCommentSubmit={handleCommentSubmit} /> : <p></p>)}
            {postComments.map(postComment => <CommentDisplay key={postComment.id} comment={postComment.message} commentId={postComment.id} postUser={postComment.user.username} loggedInUser={currentUser} handleCommentDelete={handleCommentDelete} handleCommentUpdate={handleCommentUpdate} />)}
        </div>
    )
}
export default SDDisplay
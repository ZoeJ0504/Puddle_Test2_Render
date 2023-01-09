import React, { useEffect, useState } from 'react'
import PostDisplays from '../components/PostDisplay'
import RiddlePostForm from '../components/RiddlePostForm'

function Riddle({ user }) {
    const [comments, setComments] = useState([])
    const [newPost, setNewPost] = useState({})
    const [riddle, setRiddle] = useState("")



    useEffect(() => {
        fetch("/wordpuzzles")
            .then(r => r.json())
            .then(data => {
                console.log(data)
                // setComments(data.posts)
            })
    }, [])



    const handleHandler = (e) => {
        e.preventDefault()
        setNewPost({
            user_id: user.id,
            post: riddle
        })
        handleSubmit()
    }

    console.log(newPost)

    const handleSubmit = () => {
        fetch("/rposts", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newPost),
        })
            .then(res => res.json())
        setComments([newPost, ...comments])
    }


    const handleChange = (e) => {
        setRiddle(e.target.value)
    }

    return (
        <div>
            <RiddlePostForm handleHandler={handleHandler} handleChange={handleChange} riddle={riddle} />
            {comments?.map(comment => { return <PostDisplays key={comment.id} text={comment.post} id={comment.user_id} user={user} postId={comment.id} /> })}
        </div>
    )
}

export default Riddle
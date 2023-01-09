import React, { useState, useEffect } from 'react'
import SDDisplay from '../components/SDDisplay'
import SDForm from '../components/SDForm'

function SpotDifference({ user }) {
    const [posts, setPost] = useState([])
    const id = 2
    const [newPost, setNewPost] = useState({})
    const [updatedText, setUpdatedText] = useState("")



    useEffect(() => {
        fetch(`/groups/${id}`)
            .then(res => res.json())
            .then(data => setPost(data.posts))
    }, [])



    const handleHandler = (e) => {
        e.preventDefault()
        setNewPost({
            group_id: 2,
            user_id: user.id,
            text: updatedText
        })
        handleSubmit()
    }

    const handleSubmit = () => {
        fetch("/posts", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newPost),
        })
            .then(res => res.json())
        setPost([newPost, ...posts])
    }


    const handleChange = (e) => {
        setUpdatedText(e.target.value)
    }

    return (
        <div>
            <SDForm user={user} handleHandler={handleHandler} handleChange={handleChange} updatedText={updatedText} />
            {posts.map(post => { return <SDDisplay key={post.id} text={post.text} id={post.user_id} user={user} postId={post.id} /> })}
        </div>
    )
}

export default SpotDifference
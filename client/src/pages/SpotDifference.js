import React, { useState, useEffect } from 'react'
import SDDisplay from '../components/SDDisplay'

function SpotDifference({ user }) {
    const [sDPosts, setSDPosts] = useState([])
    const [newSDPost, setNewSDPost] = useState({})
    const [newPostForm, setNewPostForm] = useState(false)

    useEffect(() => {
        fetch("/sds")
            .then(r => r.json())
            .then(data => {
                setSDPosts(data)
            })
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault()

        fetch("/spost", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newSDPost),
        })
            .then(res => res.json())
            .then(data => setSDPosts([data, ...sDPosts]))
        event.target.reset()
        setNewPostForm(!newPostForm)
    }

    const handleChange = (e) => {
        setNewSDPost({
            user_id: user.id,
            url: e.target.value
        })
    }

    const handleDelete = (postId) => {
        fetch(`/sdremove/${postId}`, {
            method: "DELETE"
        })
            .then(res => res.json())
        setSDPosts(sDPosts?.filter(sDPost => sDPost.id !== postId))
    }

    const handlePostSubmit = (event, { postId, updatedText, setUpdatedText }) => {
        event.preventDefault()

        fetch(`/sdupdate/${postId}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                url: updatedText
            }),
        })
            .then(res => res.json())
            .then(data => setSDPosts((sDPosts) => sDPosts?.map((post) => post.id === data.id ? data : post)))

        setUpdatedText("")
    }



    return (
        <div>
            <button onClick={() => setNewPostForm(!newPostForm)}>Have a Spot The Differece Image?</button>
            {newPostForm === true ? <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} />
                <button type="submit">Post?</button>
            </form> : ""
            }
            {sDPosts?.map(post => { return <SDDisplay key={post.id} imgUrl={post.url} postUser={post.user} currentUser={user} postId={post.id} handleDelete={handleDelete} handleSubmit={handlePostSubmit} /> })}
        </div>
    )
}

export default SpotDifference
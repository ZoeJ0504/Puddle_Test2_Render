import React, { useState, useEffect } from 'react'
import TDDisplay from '../components/TDDisplay'

function ThreeDPuzzle({ user }) {
    const [opticalI, setOpticalI] = useState([])
    const [newOpticalI, setNewOpticalI] = useState({})
    const [newPostForm, setNewPostForm] = useState(false)

    useEffect(() => {
        fetch("/threedpuzzles")
            .then(r => r.json())
            .then(data => {
                setOpticalI(data)
            })
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault()

        fetch("/tpost", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newOpticalI),
        })
            .then(res => res.json())
            .then(data => setOpticalI([data, ...opticalI]))
        event.target.reset()
        setNewPostForm(!newPostForm)
    }

    const handleChange = (e) => {
        setNewOpticalI({
            user_id: user.id,
            url: e.target.value
        })
    }

    const handleDelete = (postId) => {
        fetch(`/threedpuzzleremove/${postId}`, {
            method: "DELETE"
        })
            .then(res => res.json())
        setOpticalI(opticalI?.filter(opticalI => opticalI.id !== postId))
    }

    const handlePostSubmit = (event, { postId, updatedText, setUpdatedText }) => {
        event.preventDefault()

        fetch(`/threedpuzzleupdate/${postId}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                url: updatedText
            }),
        })
            .then(res => res.json())
            .then(data => setOpticalI((opticalI) => opticalI?.map((optical) => optical.id === data.id ? data : optical)))

        setUpdatedText("")
    }



    return (
        <div>
            <button onClick={() => setNewPostForm(!newPostForm)}>Have an Optical Illusion?</button>
            {newPostForm === true ? <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} />
                <button type="submit">Post?</button>
            </form> : ""
            }
            {opticalI?.map(post => { return <TDDisplay key={post.id} imgUrl={post.url} postUser={post.user} currentUser={user} postId={post.id} handleDelete={handleDelete} handleSubmit={handlePostSubmit} /> })}
        </div>
    )
}

export default ThreeDPuzzle
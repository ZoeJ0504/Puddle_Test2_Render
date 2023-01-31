import React, { useEffect, useState } from 'react'
import PostDisplays from '../components/PostDisplay'
import RiddlePostForm from '../components/RiddlePostForm'
import styled from 'styled-components'

function Riddle({ user }) {
    const [riddles, setRiddles] = useState([])
    const [newPost, setNewPost] = useState({})
    const [show, setShow] = useState(false)




    useEffect(() => {
        fetch("/wordpuzzle")
            .then(r => r.json())
            .then(data => {
                setRiddles(data)
            })
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault()
        fetch("/rpost", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newPost),
        })
            .then(res => res.json())
            .then(data => setRiddles([data, ...riddles]))
        event.target.reset()
        setShow(!show)
    }

    const handleChange = (e) => {
        setNewPost({
            user_id: user.id,
            post: e.target.value
        })
    }

    const handleDelete = (postId) => {
        fetch(`/worldpuzzleremove/${postId}`, {
            method: "DELETE"
        })
            .then(res => res.json())
        setRiddles(riddles?.filter(riddle => riddle.id !== postId))
    }

    const changeShow = () => setShow(!show)

    const handlePostSubmit = (event, { postId, updatedText, setUpdatedText }) => {
        event.preventDefault()

        fetch(`/worldpuzzleupdate/${postId}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                post: updatedText
            }),
        })
            .then(res => res.json())
            .then(data => setRiddles((riddles) => riddles?.map((riddle) => riddle.id === data.id ? data : riddle)))

        setUpdatedText("")
    }

    return (
        <div>
            <PageTitle>Riddles!</PageTitle>
            <ShowButton onClick={changeShow}>Have a Riddle?</ShowButton>
            {show === true ?
                <RiddlePostForm handleSubmit={handleSubmit} handleChange={handleChange} />
                : <p></p>
            }
            {riddles?.map(riddle => { return <PostDisplays key={riddle.id} text={riddle.post} id={riddle.user} user={user} postId={riddle.id} postComment={riddle.comment} handleDelete={handleDelete} setRiddles={setRiddles} handleSubmit={handlePostSubmit} comments={riddle.comments} /> })}

        </div>
    )
}

export default Riddle;

const PageTitle = styled.p`
font-size: 40px;
text-decoration: underline;
`
const ShowButton = styled.button`
width: 150px;
height: 30px;
padding: 5px;
font-size: 15px;
border-color: #008037;
&:hover{
  background-color: #008037;
  color: white;
} 
`
import React, { useEffect, useState } from 'react'
import PostDisplays from '../components/PostDisplay'
import RiddlePostForm from '../components/RiddlePostForm'
import styled from 'styled-components'

function Riddle({ user }) {
    const [comments, setComments] = useState([])
    const [newPost, setNewPost] = useState({})
    const [riddle, setRiddle] = useState("")
    const [show, setShow] = useState(false)



    useEffect(() => {
        fetch("/wordpuzzle")
            .then(r => r.json())
            .then(data => {
                console.log(data)
                // setComments(data)
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
        fetch("/rpost", {
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
    console.log(riddle)
    const changeShow = () => setShow(!show)
    return (
        <div>
            <PageTitle>Riddles!</PageTitle>
            <ShowButton onClick={changeShow}>Have a Riddle?</ShowButton>
            {show === true ?
                <RiddlePostForm handleHandler={handleHandler} handleChange={handleChange} riddle={riddle} />
                : <p></p>
            }
            {comments?.map(comment => { return <PostDisplays key={comment.id} text={comment.post} id={comment.user_id} user={user} postId={comment.id} /> })}

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
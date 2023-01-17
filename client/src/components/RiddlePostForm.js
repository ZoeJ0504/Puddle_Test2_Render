import React from "react";
import styled from "styled-components";


function RiddlePostForm({ riddle, handleHandler, handleChange }) {






    return (
        <PostFormDiv>
            <form onSubmit={handleHandler}>
                <Post type="text" onChange={handleChange} value={riddle} />
                <p></p>
                <PostButton type="submit">Post</PostButton>
            </form>
        </PostFormDiv>
    )
}

export default RiddlePostForm

const PostFormDiv = styled.div`
padding: 15px;
`

const Post = styled.input`
font-size: 20px;
text-align: center;
width: 300px; 
height: auto; 
border-color: #008037;
border-size: 5px;
`
const PostButton = styled.button`
padding: 5px;
width: 100px; 
height: 30px;
font-size: 15px;
border-color: #008037;
&:hover{
  background-color: #008037;
  color: white;
} 
`
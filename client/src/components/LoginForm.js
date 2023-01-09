import React, { useState } from "react";
import styled from "styled-components";

function LoginForm({ setUser, setIsVisible }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleClick(e) {
    setIsVisible(true)
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }
  return (
    <div>
      <TitleP>Login</TitleP>
      <form onSubmit={handleSubmit}>
        <p></p>
        <FormInput
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <p></p>
        <FormInput
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <p></p>
        <LoginButton type="submit">Login</LoginButton>
      </form>
      <p></p>
      <SignupButton onClick={handleClick}>Dont have an account?  Sign up!</SignupButton>
    </div>
  );
}

export default LoginForm;


const FormInput = styled.input`
font-size: 20px;
text-align: center;
width: 150px; 
height: 30px; 
border-color: darkgreen;
border-size: 5px;
`

const TitleP = styled.p`
font-size: 40px; 
`

const LoginButton = styled.button`
padding: 5px;
width: 100px; 
height: 30px;
font-size: 15px;
border-color: darkgreen;
&:hover{
  background-color: darkgreen;
  color: white;
} 
`

const SignupButton = styled.button`
width: 200px;
height: 30px;
padding: 5px;
font-size: 15px;
border-color: darkgreen;
&:hover{
  background-color: darkgreen;
  color: white;
} 

`
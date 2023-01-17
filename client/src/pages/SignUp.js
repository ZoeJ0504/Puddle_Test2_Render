import React, { useState } from "react";
import styled from "styled-components";
import logo from "../image/logo.png"

function SignUp({ setUser, setIsVisible }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  function handleClick(e) {
    setIsVisible(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
    setIsVisible(true);
  }

  return (
    <div>
      <Logo src={logo} alt="Priddle Logo" />
      <Title>Sign Up!</Title>
      <form onSubmit={handleSubmit}>
        <p></p>
        <Inputlabel htmlFor="username">Username:</Inputlabel>
        <Inputs
          type="text"
          id="username"
          value={username}
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <p></p>
        <Inputlabel htmlFor="password">Password:</Inputlabel>
        <Inputs
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        required
        />
        <p></p>
        <Inputlabel htmlFor="password_confirmation">Confirm Password:</Inputlabel>
        <Inputs
          type="password"
          id="password_confirmation"
          placeholder="Password"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          required
        />
        <p></p>
        <SubmitButton type="submit">Submit</SubmitButton>
      </form>
      <LoginButton onClick={handleClick}>Have an account already? Login!</LoginButton>
    </div>
  );
}

export default SignUp;

const Logo = styled.img`
width: 400px;
height: 200px;
margin: 15px;
`
const Title = styled.h1`
font-size: 50px;
`
const SubmitButton = styled.button`
padding: 5px;
width: 100px; 
height: 30px;
font-size: 15px;
border-color: #008037;
margin: 15px;
&:hover{
  background-color: #008037;
  color: white;
} 
`

const LoginButton = styled.button`
width: 200px;
height: 30px;
padding: 5px;
font-size: 15px;
border-color: #008037;
&:hover{
  background-color: #008037;
  color: white;
} 
`
const Inputs = styled.input`
font-size: 20px;
text-align: center;
width: 150px; 
height: 30px; 
border-color: #008037;
border-size: 5px;
`
const Inputlabel = styled.label`
font-size: 25px;
padding: 10px;
`


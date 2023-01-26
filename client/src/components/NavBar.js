import React from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import logo from "../image/Puddle.png"

function NavBar({ logout }) {
    const navigate = useNavigate()


    function handleClick(e) {
        fetch("/logout", {
            method: "DELETE",
        }).then((r) => {
            if (r.ok) {
                logout(null);
            }
        });
        navigate("/")
    }

    const handleRiddleClick = () => {
        navigate("/riddles")
    }

    const handleHomeClick = () => {
        navigate("/home")
    }

    const handleSDClick = () => {
        navigate("/spot_the_difference")
    }

    const handle3DPuzzle = () => {
        navigate("/3d_puzzle")
    }

    return (
        <NavBarDiv>
            <div>
                <Logo src={logo} alt="Priddle Logo" />
            </div>
            <NavTab onClick={handleHomeClick}>Home</NavTab>
            <NavTab onClick={handleRiddleClick}>Riddles</NavTab>
            <NavTab onClick={handleSDClick}>Spot The Difference</NavTab>
            <NavTab onClick={handle3DPuzzle}>3D Puzzle</NavTab>
            <NavButton onClick={handleClick}>Logout</NavButton>
        </NavBarDiv>
    )
}

export default NavBar;

const NavBarDiv = styled.div`
display: flex; 
flex-direction: row;
justify-content: space-around;
`

const Logo = styled.img`
width: 200px;
height: auto;
`

const NavTab = styled.div`
font-size: 30px;
padding: 30px;
color: #008037;
&:hover{
    color: white;
    cursor: pointer;
}
`

const NavButton = styled.button`
width: 75px;
height: 30px;
margin: 30px;
border-color: #008037;
&:hover{
  background-color: #008037;
  color: white;
} 
`


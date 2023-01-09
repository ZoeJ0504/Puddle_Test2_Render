import React from "react";


function RiddlePostForm({riddle, handleHandler, handleChange }) {






    return (
        <div>
            <form onSubmit={handleHandler}>
                <input type="text" onChange={handleChange} value={riddle} />
                <button type="submit">Post</button>
            </form>
        </div>
    )
}

export default RiddlePostForm
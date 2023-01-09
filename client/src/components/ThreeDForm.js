import React from "react";

function ThreeDForm({ handleChange, handleHandler, updateText }) {

    return (
        <div>
            <form onSubmit={handleHandler}>
                <input type="text" value={updateText} onChange={handleChange} />
                <button type="submit" >Post</button>
            </form>
        </div>
    )
}

export default ThreeDForm
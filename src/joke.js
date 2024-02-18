import React from "react";
export default function Joke({prop}){
    return(
        <div className="jokecontainer">
            <p className="setup">setup:{prop.setup} </p>
            <p className="punchline">punchline:{prop.punchline} </p>
            <p className="fun">fun:{prop.fun}</p>
        </div>
    )
}
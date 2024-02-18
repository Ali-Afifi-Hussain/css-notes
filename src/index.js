import React from 'react';
import ReactDOM  from 'react-dom';
import Joke from './joke';
import {joketext} from './joketext';
import "./index.css";
function App(){
    const jokeelements=joketext.map((item)=>{
        return(
            <Joke prop={item}/>
        )
    })
return(
    <div className='app'>
        {jokeelements}
    </div>
)
}
ReactDOM.render(<App/>,document.getElementById("root1"))
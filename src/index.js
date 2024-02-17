import React from 'react';
import ReactDOM  from 'react-dom';
import { Header } from './Header';
import "./index.css";
function App(){
return(
    <div>
        {Header}
    </div>
)
}
ReactDOM.render(<App/>,document.getElementById("root1"))
import React from 'react';
import ReactDOM  from 'react-dom';
// import { Header } from './Header';
// import Navbar from './Navbar';
// import Content from './Content';
import "./index.css";
import Card from './Card';
function App(){
return(
    <div>
        <Card/>
    </div>
)
}

ReactDOM.render(<App/>,document.getElementById("root1"))
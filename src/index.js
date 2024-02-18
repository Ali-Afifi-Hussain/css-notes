import React from 'react';
import ReactDOM  from 'react-dom';
// import { Header } from './Header';
// import Navbar from './Navbar';
// import Content from './Content';
import "./index.css";
import Card from './Card';
function App(){
return(
    <div className='app'>
        <Card
        img="./olla.png"
        imgalt="olla"
        phone="1111111111"
        email="olla@gmail.com"
        />
        <Card
        img="./ali.png"
        imgalt="ali"
        phone="22222222222"
        email="ali@gmail.com"
        />
        <Card
        img="./mohammed.png"
        imgalt="mohammed"
        phone="3333333333"
        email="mohammed@gmail.com"
        />
        <Card
        img="./yousef.png"
        imgalt="yousef"
        phone="44444444444"
        email="yousef@gmail.com"
        />
        
    </div>
)
}

ReactDOM.render(<App/>,document.getElementById("root1"))
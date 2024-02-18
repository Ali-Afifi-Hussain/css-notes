import React from "react";
export default function Card(prob){
    return(
        <div className="cardcontainer">
            <div >
                <img src={prob.img} alt={prob.imgalt}/>
                <p className="phone">{prob.phone}</p>
                <p className="email">{prob.email}</p>
            </div>
        </div>
    )
}
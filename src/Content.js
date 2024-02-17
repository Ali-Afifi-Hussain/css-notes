import React from "react";
export default function Content(){
    return(
        <div className="content">
            <div className="section1">
            <img src="./ali.png" alt="alias" className="firstphoto"/>
            </div>
            <p>this is a rainbow photo and it will be the text content of this website </p>
            <div className="section2">
                <ul>
                    <li>
                    <img src="./ali.png" alt="alias" className="photos" />
                    <p> mohammed afifi</p>
                    </li>
                    <li>
                    <img src="./ali.png" alt="alias" className="photos" />
                    <p> yousef afifi</p>
                    </li>
                    <li>
                    <img src="./ali.png" alt="alias" className="photos" />
                    <p>ali afifi</p>
                    </li>
                </ul>
            </div>
        </div>
    )

}
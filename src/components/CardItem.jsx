import React from "react";


const CardItem = ({item})=>{
    console.log(item.name)
    return(
       
        <div className="card">
            <div className="card-inner">
                <div className="card-front">
                    <img src={item.img_url} alt="character" />
                </div>
                <div className="card-back">
                    <h1>{item.name}</h1>
                    <ul>
                        <li>{item.name}</li>
                        <li>{item.origin}</li>
                        <li>{item.status}</li>
                        <li>{item.species}</li>
                        <li>{item.abilities[0]}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CardItem;
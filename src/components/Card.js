import React, {useState} from "react";
import "../styles/Card.css";
// import crab from "../img/crab.jpg";

const Card = props => {
    const {cardName, onCardClick} = props;

    // const [selected, setSelected] = useState(false);

    const imageSrc = require(`../img/${cardName.toLowerCase()}.jpg`);

    return(
        <div className="card" onClick={onCardClick}>
            <img className="image" src={imageSrc}/>
            <div className="cardName">{cardName}</div>
        </div>
    );
};

export default Card;
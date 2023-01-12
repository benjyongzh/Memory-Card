import React, {useState} from "react";
import "../styles/Card.css";

const Card = props => {
    const {cardName, onCardClick} = props;

    // const [selected, setSelected] = useState(false);

    return(
        <div className="card" onClick={onCardClick}>
            <div className="image"></div>
            <div className="cardName">{cardName}</div>
        </div>
    );
};

export default Card;
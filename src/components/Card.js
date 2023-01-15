import React from "react";
import "../styles/Card.css";

const Card = props => {
    const {cardName, onCardClick, cardSrc} = props;

    // const [selected, setSelected] = useState(false);

    

    return(
        <div className="card" onClick={onCardClick}>
            <img className="image" src={cardSrc} alt={cardName}/>
            <div className="cardName">{cardName}</div>
        </div>
    );
};

export default Card;
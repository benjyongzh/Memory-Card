import React, {useState} from "react";

const Card = props => {
    const {name} = props;

    return(
        <div className="card">
            {name}
        </div>
    );
};
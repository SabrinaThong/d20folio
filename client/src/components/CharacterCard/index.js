import React from "react";

var CharacterCard = props => (
    <div>
        {props.characters.name}
        <img src={props.characters.imageUrl} alt=""></img>
    </div>
);
export default CharacterCard;
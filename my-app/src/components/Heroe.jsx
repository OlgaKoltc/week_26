import './../style/Heroe.css';
import React from 'react';

export default function Heroe (props) {
    return (
<div className="heroes">
    <div className="heroes__photo">
    <img src={props.image}/></div>
    <div className="heroes__about">
    <div className="heroes__name">{props.name}</div>
    <div class="heroes__universe">{props.universe}</div>
    <div class="heroes__alterego">{props.alterego}</div>
    <div class="heroes__occupation">{props.occupation}</div>
    <div class="heroes__characteristics">{props.characteristics}</div>
    </div>
</div>
    )
}

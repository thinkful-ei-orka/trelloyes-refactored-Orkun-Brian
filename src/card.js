import React from 'react';
import './card.css';
import List from './List'

export default function Cards (props) {
    return (
        <div className="Card">
            <button onClick={() => props.handleClick(props.cardId)}>delete</button>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    );
}





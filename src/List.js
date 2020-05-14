import React from 'react';
import Card from './card.js';
import './List.css';


export default function List(props) {
   console.log(props);
    const listOfCards = props.cards.map(card => (
      <Card handleClick={props.handleClick} key={card.id} title={card.title} content={card.content} />
    ));
    
    return (
        <section className="List">
            <header className="List-header">
             <h3>{props.header}</h3>
            </header>
            <div className="List-cards">
             {listOfCards}
            </div>
    </section>  

    );
  }



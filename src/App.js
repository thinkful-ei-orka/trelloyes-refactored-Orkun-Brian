import React, { Children } from 'react';
import List from './List';
import './App.css';


class App extends React.Component {
    //for each list in store.list we need to generate a 
    //list of cards from store.list.cardIds
    

    state = {
      lists: [
        {
          id: '1',
          header: 'First list',
          cardIds: [ 'a', 'b', 'e', 'f', 'g', 'j', 'l', 'm' ],
        },
        {
          id: '2',
          header: 'Second list',
          cardIds: ['b', 'c', 'd', 'f', 'h', 'i', 'k'],
        },
        {
          id: '3',
          header: 'Third list',
          cardIds: [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm' ],
        },
        {
          id: '4',
          header: 'Fourth list',
          cardIds: [ 'l', 'm' ],
        },
      ],
      allCards: {
        'a': { id: 'a', title: 'First card', content: 'lorem ipsum' },
        'b': { id: 'b', title: 'Second card', content: 'lorem ipsum' },
        'c': { id: 'c', title: 'Third card', content: 'lorem ipsum' },
        'd': { id: 'd', title: 'Fourth card', content: 'lorem ipsum' },
        'e': { id: 'e', title: 'Fifth card', content: 'lorem ipsum' },
        'f': { id: 'f', title: 'Sixth card', content: 'lorem ipsum' },
        'g': { id: 'g', title: 'Seventh card', content: 'lorem ipsum' },
        'h': { id: 'h', title: 'Eighth card', content: 'lorem ipsum' },
        'i': { id: 'i', title: 'Ninth card', content: 'lorem ipsum' },
        'j': { id: 'j', title: 'Tenth card', content: 'lorem ipsum' },
        'k': { id: 'k', title: 'Eleventh card', content: 'lorem ipsum' },
        'l': { id: 'l', title: 'Twelfth card', content: 'lorem ipsum' },
        'm': { id: 'm', title: 'Thirteenth card', content: 'lorem ipsum' },
      },
    }


    HandleDeleteClicked = (id) => {
     
          const {[id]:omit, ...rest} = this.state.allCards; 
     
           let arrayList = [];
           for (let i = 0; i < this.state.lists.length; i++) {
             let list = this.state.lists[i]
            const filteredcardIds = this.state.lists[i].cardIds.filter(card => card !== id)
            console.log(filteredcardIds)

            const updatedList = {...list, cardIds: filteredcardIds}
            arrayList.push(updatedList)
        //Loop through lists.cardIds to delete cardId
        //Loop through allCards to delete card.  
      }
      this.setState({lists: arrayList, allCards: rest})
    }

    handleAddClicked = () => {
      
      let randomList = Math.floor(Math.random()* Math.floor(4))+1;
      console.log(randomList)
      const id = Math.random().toString(36).substring(2, 4)
      + Math.random().toString(36).substring(2, 4); 
      console.log(id)
      let obj= {
      id,
      title: `Random Card ${id}`,
      content: 'lorem ipsum',
    }
      this.createNewCard(randomList + '', obj)
    
    }

    createNewCard = (listId, newCard) => {
      const listItem = this.state.lists.find((list) => list.id === listId);
      listItem.cardIds.push(newCard.id)
      this.setState ({allCards: {...this.state.allCards, [newCard.id] : newCard}}) 
    }

    render() {
      
    // console.log(this.state);
    let holdList = this.state.lists
    // console.log(holdList);
    let arrayList = [];
    for (let i = 0; i < this.state.lists.length; i++) {
      let myList = [];
      let list = this.state.lists[i]
      for (let e = 0; e < list.cardIds.length; e++){
          let cardId = list.cardIds[e];
          myList.push(this.state.allCards[cardId]);
      }
      arrayList.push(<List handleClick={this.HandleDeleteClicked} key={list.id} header = {list.header} cards = {myList} />)
    }



    return (
      <>
      
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <button onClick={this.handleAddClicked}>Add Random Card</button>
        <div className="App-list">
          {arrayList}
        </div>

      </main>
      </>
    );

      
    }

  };

export default App;



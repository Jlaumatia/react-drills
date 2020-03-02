import React, { Component } from 'react'

class List extends Component {
  constructor() {
    super();
    this.state = {
    stringFilter: '',
    foodie: ["Chicken", "Sushi", "Pork Chops", "Steak", "Rib", "Salmon"]
    };
    

  };

  newList(filter) {
    this.setState({stringFilter: filter});
  }

  render() {
    let foodList = this.state.foodie
    .filter((element,index) => {
      return element.includes(this.state.stringFilter);
    })
    .map((element,index) => {
      return <h2 key={index}>{element}</h2>;
    });
    
    
    return (
      <div className="List">
        <input onChange={e => this.newList(e.target.value)} type="text"/>
        {foodList}
      </div>

    );
  }
}

export default List;

import React, { Component } from 'react'

class Food extends Component{
  constructor() {
    super();
    this.state = {
      foodie: ['Chicken', 'Sushi', 'Pork Chops', 'Steak', 'Rib']
    };

  }

  render() {
    let foodList = this.state.foodie.map((element,index) => {
    return <h2 key={index}>{element}</h2>;
    });

    return <div className="Food">{foodList}</div>;
  }


}
export default Food;
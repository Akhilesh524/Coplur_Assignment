import React, { Component } from 'react'
import Greating from './Greating'

export default class Parent extends Component {
constructor(props){
  super(props)
  this.state={show:true}
}

removeGreating=()=>{
  this.setState({show:false})
}
  render() {
  let greating;
    if(this.state.show){
    greating=<Greating remove={this.removeGreating}/>
    }
    return (
      <div>
       {greating}

      </div>
    )

  }
}


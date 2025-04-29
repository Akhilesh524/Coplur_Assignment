import React, { Component } from 'react'

export default class Greating extends Component {
  constructor(props){
    super(props)
    this.state={
      username:'',
      message:'Hello Guest!!',
    }
  }

  changeMessage =(e)=>{
    this.setState({username:e.target.value})
  }

  handleClick=()=>{
    const {username} = this.state;
    this.setState({
      message:username?`Hello ${username}`:'Hello Guest!!'   })
    
  }
 componentWillUnmount(){
  document.body.style.marginTop='90px'
  alert('component unmounted!')
 }

  render() {
 
    return (
      <>
      <br></br>
      <br></br>
       <div style={{display:'flex', gap:'10px', justifyContent:'center'}}>
      <input type='text' value={this.state.username} onChange={this.changeMessage} placeholder='Enter your name here!'/>
      <button type='button' onClick={this.handleClick}>click Me!</button>
        {this.state.message}
        <button type='button' onClick={this.props.remove}>removeGreating</button>
      </div>
      <br></br>
      </>
     
    )
  }
}



import React from "react"
import Entry from "./Entry"

class Entries extends React.Component{
  render(){
    return(
      <div>
        <Entry name={this.props.contacts[0].name} phone={this.props.contacts[0].phonenumber}/>
        <Entry name={this.props.contacts[1].name} phone={this.props.contacts[1].phonenumber}/>
        <Entry name={this.props.contacts[2].name} phone={this.props.contacts[2].phonenumber}/>
      </div>
    )   
  }
}

export default Entries
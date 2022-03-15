import React from "react"
import './entry.css';


class Entry extends React.Component{
  render(){
    return(
      <table>
          <tbody>
          <tr>
              <td>Name: {this.props.name}</td>
              <td>Phonenumber: {this.props.phone}</td>
          </tr>
          </tbody>
      </table>
    )
  }
}

export default Entry
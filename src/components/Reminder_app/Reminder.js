import React from 'react';
import axios from 'axios';
import reminderService from '../../Services/Reminders.js'

class Reminder extends React.Component {
  constructor(props) {
    super(props)
    const remindersURL = axios.get('https://sql-reminder.herokuapp.com/api/reminders')
    this.state = {
      reminders: [],
      newNote: '',
      newTime: ''
    }
  }
  componentDidMount() {
    console.log('Mounted')
    reminderService
      .getAll()
      .then(reminders => {
        this.setState({ reminders })
      })
  }
   addReminder = (event) =>{
       event.preventDefault()
       console.log("Add note")
       const newObject = {
        note: this.state.newNote,
        timestamp: this.state.newTime,
      } 
    axios
    .post('https://sql-reminder.herokuapp.com/api/reminders', newObject)
    .then(response => {
      this.setState({
        reminders: this.state.reminders.concat(response.data),
        newNote: '',
        newTime: ''
      })
    })
}

   handleNoteChange = (event) => {
    console.log(event.target.value)
    console.log("New note")
    this.setState({newNote: event.target.value})
   }

   handleTimeChange = (event) =>{
    console.log(event.target.value)
    console.log("New time")
    this.setState({newTime: event.target.value})
   }

   deleteReminder = (id) => {
    
    return() => {
    console.log("Delete'd note")
    const url = `https://sql-reminder.herokuapp.com/api/reminders/${id}`
    if (window.confirm("Are you sure you want to delete this reminder?")){
      axios
      .delete(url)
      alert("Reminder was deleted.");
      (reminderService
        .getAll()
        .then(reminders => {
          this.setState({ reminders })
        })
        
        )
   } }
  }

  render() {
    return (
      <div>
        <h2><u>Add Reminder</u></h2>
        <form onSubmit={this.addReminder}>
        <div>
          <b>Note:</b> <input value={this.state.newNote} onChange={this.handleNoteChange} />
        </div>
        <div>
          <b>Time:</b> <input type="datetime-local" value={this.state.newTime} onChange={this.handleTimeChange} />
        </div>
        <div>
          <button type="submit">Add Reminder</button>
        </div>
        </form>
        <h2>Reminders:</h2>
        {this.state.reminders.map(reminders => { return (
            <div key={reminders.id}>
              <p>{reminders.timestamp} &emsp; 
                  {reminders.note}&emsp;
              <button onClick={this.deleteReminder(reminders.id)}>
                Delete
              </button></p>
            </div>  
        )})}
      
      </div>
      
    )
  }
}

export default Reminder


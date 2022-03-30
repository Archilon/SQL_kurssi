
import React from 'react'
import ReactDOM from 'react-dom'
import Phonebook from './src/components/Phonebook_app/Phonebook.js'
import Feedback from './src/components/Feedback_app/Feedback.js'

import Reminder from './src/components/Reminder_app/Reminder.js'
const Main = () => {


  return (
    <div>
      <Phonebook />
      <Feedback />
      <Reminder />
    </div>
  )
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
)

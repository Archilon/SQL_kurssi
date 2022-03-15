import React from 'react'
import ReactDOM from 'react-dom'
import Feedback from './components/Feedback_app/Feedback.js'
import Phonebook from './components/Phonebook/Phonebook.js'
const Main = () => {


  return (
    <div>
      <Phonebook />
      <Feedback />
    </div>
  )
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
)

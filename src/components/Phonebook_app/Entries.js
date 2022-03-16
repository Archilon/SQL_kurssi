
import React from 'react'
import Entry from "./Entry"
import { phonebook } from './Phonebook'
import './entry.css';

const Entries = () => {
  return (
      <table>
        <tbody>
        {
          phonebook.contacts.map(x => <Entry key={x.id} id={x.id} name={x.name} number={x.phonenumber} />)
        }
        </tbody>
      </table>
  )
}

export default Entries

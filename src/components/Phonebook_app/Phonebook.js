import React from 'react'
import Entries from './Entries'
import PhoneTitle from './PhoneTitle'


export const phonebook = {
  name: 'Superadvanced web phonebook app',
  contacts: [
  {
    name: 'John Doe',
    phonenumber: '358401234567',
    id: 0,
  },
  {
    name: 'Jane Doe',
    phonenumber: '44551234567',
    id: 1
  },
  {
    name: 'Foo bar',
    phonenumber: '000',
    id: 2
  },
  {
    name:'testing add-more',
    phonenumber: '123456789',
    id: 3
  }
  ]
}

const Phonebook = () => {
  

  var result = phonebook.contacts.length;

  return (
    <div>
      <PhoneTitle title={phonebook.name} />
      <Entries contacts={phonebook.contacts} />
      <h4>Number of entries: { result }</h4>
    </div>
  )
}
export default Phonebook
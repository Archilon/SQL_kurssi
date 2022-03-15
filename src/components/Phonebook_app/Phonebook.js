import React from 'react'
import Entries from './Entries'
import PhoneTitle from './PhoneTitle'


const Phonebook = () => {
  
  const phonebook = {
    name: 'Superadvanced web phonebook app',
    contacts: [
    {
      name: 'John Doe',
      phonenumber: '358401234567'
    },
    {
      name: 'Jane Doe',
      phonenumber: '44551234567'
    },
    {
      name: 'Foo bar',
      phonenumber: '000'
    }
    ]

  }

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
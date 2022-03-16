import React from 'react'

const Entry = ({name, number}) => {
  return (
    <tr>
      <td>Name: {name}</td>
      <td>Number: {number}</td>
    </tr>
  )
}

export default Entry

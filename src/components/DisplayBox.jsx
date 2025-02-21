import React from 'react'
import './DisplayBox.css'

const DisplayBox = ({ name, age, complete, display}) => {
  if (name !== "" && age !== ""){
    return (
      <div className='display-container'>Hi! My name is <strong>{name}</strong> and I am <strong>{age} years old</strong>.</div>
    )
  }
}

export default DisplayBox
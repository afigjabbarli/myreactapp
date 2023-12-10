import React from 'react'
import './WelcomeMessage.css'

const WelcomeMessage = (props) => {
 
  return (
    <div>
       
        <h1>Xoş gəlmisiniz, {props.name}!</h1>
        
    </div>
  )
}

export default WelcomeMessage
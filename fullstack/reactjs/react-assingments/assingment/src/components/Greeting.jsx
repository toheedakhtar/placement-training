import React from 'react'

const Greeting = (props) => {
  return (
    <div>
        {/* 1. assingment */}
      {`Hello, ${props.name}`}      
    </div>
  )
}

export default Greeting

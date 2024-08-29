// rfce --> normal function 
// rafce --> arrow function 

import React from 'react'
import Image from "./assets/1.jpeg"

// ----------------- with props ---------------------------------
// const Card = (props) => {
//   console.log(props.color)
//   return (
//     <div className={`flex flex-col items-center ${props.color} rounded shadow-lg`}>
//     {/* <img src='https://avatars.githubusercontent.com/u/112681289?v=4' alt='' className='w-48' /> */}
//       <img src={Image} alt='' className='w-48' />
      
//       <h1 className="text-2xl font-medium">{props.heading}</h1>
//       <p className="text-gray-600">{props.desc}</p>
//     </div>
//   )
// }


// ------------------------ with obj params ---------------------------------
// const Card = ({heading, desc, image, color}) => {
//   return (
//     <div className={`flex flex-col items-center ${color} rounded shadow-lg`}>
//     {/* <img src='https://avatars.githubusercontent.com/u/112681289?v=4' alt='' className='w-48' /> */}
//       <img src={image} alt='' className='w-48' />
      
//       <h1 className="text-2xl font-medium">{heading}</h1>
//       <p className="text-gray-600">{desc}</p>
//     </div>
//   )
// }

//  --------------------------- with destructor -------------------------------
const Card = ({item}) => {  
  const {heading, desc, color, image} = item
  return (

    <div className={`flex flex-col items-center ${color} rounded shadow-lg`}>
        {/* <img src='https://avatars.githubusercontent.com/u/112681289?v=4' alt='' className='w-48' /> */}
        <img src={image} alt='' className='w-48' />

        <h1 className="text-2xl font-medium">{heading}</h1>
        <p className="text-gray-600">{desc}</p>
    </div>
  )
}

export default Card

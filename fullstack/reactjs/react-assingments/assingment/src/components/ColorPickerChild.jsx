import React from 'react'

const ColorPickerChild = ({callback}) => {

    const changecolor = () => {
        const newcolor = prompt("enter color : ")
        callback(newcolor)
    }

  return (
    <div>
        {/* <input type='text' placeholder='update color' onChange={(e)=>setcolor(e.target.value)}></input> */}
        {/* <input type='text' placeholder='update color' onChange={callback("red")}></input> */}
        Child element | 
        <button onClick={changecolor}>change color</button>

    </div>
  )
}

export default ColorPickerChild

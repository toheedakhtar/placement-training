import React, {useState} from 'react'
import ColorPickerChild from './ColorPickerChild'


const ColorPicker = ({color}) => {
    const [color1, setcolour] = useState(color)

  return (
    <div>
    <p>Parent Element |  COLOR : {color1}</p>
      <ColorPickerChild callback={setcolour}/>
    </div>
  )
}

export default ColorPicker

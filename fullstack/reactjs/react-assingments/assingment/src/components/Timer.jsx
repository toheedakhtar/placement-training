import React, {useState} from 'react'

const Timer = (props) => {
    const {start} = props
    const [time, setTime] = useState(start)
    setInterval(()=>{
        setTime(time+1)
    }, 1000)


  return (
    <div>
      <p> TIME : {time} sec</p>
    </div>
  )
}

export default Timer

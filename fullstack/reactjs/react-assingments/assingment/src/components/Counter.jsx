import { useState } from 'react'




const Counter = () => {
    const [count, setCount] = useState(0)
    
    const incrementCount = () => {
      setCount(count + 1 )
    }
    const decrementCount = () => {
      setCount(count - 1 )
    }

    return (
    <div>
    <br></br>
        <div>
        COUNT : {count}
        <br></br>
        <button onClick={incrementCount}>COUNT ++</button>
        <button onClick={decrementCount}>COUNT --</button>
        </div>
    </div>
    )
}

export default Counter

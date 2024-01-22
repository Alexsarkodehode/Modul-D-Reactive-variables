import {useState} from 'react'

function CounterButtons(){
    const [count, setCount] = useState(0);
    return (
        <>
          <button className="increment" onClick={() => setCount(count+1)}>Increment</button>
          <button className="decrement" onClick={() => setCount(count-1)}>Decrement</button>
          <button className="reset" onClick={() => setCount(count == 0)}>Reset</button>
          <p>{count}</p>
        </>
    )
}

export default CounterButtons

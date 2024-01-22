import {useState} from 'react'

function CounterButtons(){
    const [count, setIncrement, setDecrement, doReset] = useState(0);
    return (
        <>
          <button className="increment" onClick={() => setIncrement(count+1)}>Increment</button>
          <button className="decrement" onClick={() => setDecrement(count-1)}>Decrement</button>
          <button className="reset" onClick={() => doReset(count == 0)}>Reset</button>
          <p>{count}</p>
        </>
    )
}

export default CounterButtons

//usestate gjør sånn at vi kan bruke state i komponentene våre 
import {useState} from 'react'

//funksjon for CounterButtons
function CounterButtons(){
    const [count, setCount] = useState(0);
    //For å bruke en counter så trenger vi tre knapper. Økende, senkende og restartende. 
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

import { useState } from "react";
import './App.css';

const App = () => {
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count+1);
    }

    const decrease = () => {
        if(count >= 1){
            setCount(count-1);
        }
    }

  return (
   <>
    <h1 className= 'head'> count here</h1>
    <div className='parent'>
        <button className='inc' onClick = {increase}>+</button>
        <div className='count'>{count}</div>
        <button className='inc' onClick={decrease}>-</button>
    </div>
    <div>
        
    </div>
   </>
  )
}

export default App
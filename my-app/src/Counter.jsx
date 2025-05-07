import React, { useEffect, useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);
  const [seconds, setSeconds] = useState(new Date().getSeconds());

 
const handleCounter=()=>{
  setCounter(counter+1);
}


  useEffect(() => {
    const secInterval = setInterval(() => {
      setSeconds(new Date().getSeconds());
    }, 5000);

});

  return (
    <div>
      <p>Counter: {counter}</p>
      <p>Seconds: {seconds}</p>
      <button onClick={handleCounter}>Count</button>
    </div>
  );
}

export default Counter;


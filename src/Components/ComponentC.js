import React from 'react';
import { useState } from 'react';
function ComponentC(props) {
  const [increment, setincrement] = useState(0);
  const sum = () => {
    setincrement(increment + 1);
    };
    {console.log(props)}
  return (
    <div>
      <h2>
        Component A <br></br>counter={props.props.counter}
      </h2>
      <button onClick={props.props.add}>add</button>
      <h1>
        component B <br />
        counter={props.increment}
      </h1>

      <button onClick={props.sum}>add</button>
      <h1>
        component c <br />
        counter={increment}
      </h1>

      <button onClick={sum}>add</button>
    </div>
  );
}

export default ComponentC;

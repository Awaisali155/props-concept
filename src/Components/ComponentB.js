import React, { Component, useState } from 'react';
import ComponentC from './ComponentC';
function ComponentB(props) {
    const [increment, setincrement] = useState(0);
    const sum = () => {
        setincrement(increment+1)
    }

    return (
      <div>
        <h2>
          Component A <br></br>counter={props.counter}
            </h2>
            
            
        <button onClick={props.add}>add</button>
        <h1>
          component B <br />
          counter={increment}
        </h1>

        <button onClick={sum}>add</button>
        <hr />
        <ComponentC increment={increment} sum={sum} props={props} />
      </div>
    );
}

export default ComponentB;

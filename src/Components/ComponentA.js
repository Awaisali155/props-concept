import React, { Component } from 'react';
import { useState } from "react";
import ComponentB from './ComponentB';
const ComponentA = (props) => {

  
    return (
      <div>
        <h2>
          Component A <br></br>counter={props.counter}
        </h2>
        <button onClick={props.add}>add</button>
        <hr />
        {/* <h2>
          Component A <br></br>counter={props.counter}
        </h2>
        <button onClick={props.add}>add</button> */}
        <ComponentB counter={props.counter} add={props.add} />
      </div>
    );
};

export default ComponentA;

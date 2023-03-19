import React, { useState } from 'react';
import Child from './Child';

const Parent = () => {
    const [text, setText] = useState("Type to See");

  return (
    <div>
        <h2>{text}</h2>
        <Child data={e => setText(e.target.value)}/>
    </div>
  )
}

export default Parent
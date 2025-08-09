"use client"

import { useState } from "react";

export const Counter = () => {
    const [count,setCounter] = useState(0);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={()=> setCounter(count+1)}>Increment</button>
        </div>
    );
}
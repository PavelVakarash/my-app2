import React from 'react';
import { useState } from 'react';
function Counter() {
    let [count, setCount] = useState(0);
    let [food, setFood] = useState("яблоко");

    function handlePlusClick():void {
        setCount(count+1);
    }
        function handleMinusClick():void {
            setCount(count-1);
}

function handleEatApple():void {
    if (food === "яблоко") {
        setFood("огрызок");
    } else {
        setFood("яблоко");
    }
}


return(
    <div>
    <h1>Добро пожаловать в React</h1>
    <button onClick={handleMinusClick}>-</button>
    <span>{count}</span>
    <button onClick={handlePlusClick}>+</button>
    <br />
    <span>{food}</span>
   
    <button onClick={handleEatApple}>
  {food === "яблоко" ? "съесть яблоко" : "выбросить огрызок"}
</button>

    </div>
);
}

export default Counter;
import { FC, useState } from "react";


const Counter: FC    = () => {
    const [count, setCount] = useState<number>(1);
    

    const handleIncrement = () => {
        setCount(i => i + 1)
    };

    const handleDecrement = () => {
        if (count === 0) {
            return;}
        setCount(prev => prev - 1)
    };

    return (
        <div className="flex">
            <h1>Counter</h1>
            <p>count: <span className="font-bold text-red-600">{count}</span></p>
            <button onClick={handleIncrement} className="px-4 py-2 border-double">Increment</button>
            <button onClick={handleDecrement} className="px-4 py-2 border-double">Decrement</button>
        </div>

    )
}

export default Counter
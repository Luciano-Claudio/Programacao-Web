import React, { useEffect, useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevCount) => prevCount + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const handleReset = () => {
        setCount(0);
    };

    return (
        <div>
            <h1>Tempo: {count}</h1>
            <button onClick={handleReset}>Reiniciar</button>
        </div>
    );
}

export default Counter;

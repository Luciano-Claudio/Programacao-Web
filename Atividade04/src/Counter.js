import React, { useEffect, useState } from "react";

function Timer() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const resetTimer = () => {
        setSeconds(0);
    };

    return (
        <div>
            <h1>Contador: {seconds}</h1>
            <button onClick={resetTimer}>Zerar</button>
        </div>
    );
}

export default Timer;

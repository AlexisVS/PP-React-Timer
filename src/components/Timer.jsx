import React, { useState } from 'react';

const Timer = () => {

    const [timer, setTimer] = useState(new Date ().toLocaleString())


    const setTiming = () => {
        setInterval(() => {
            setTimer(new Date().toLocaleString())
        }, 1000);
        return timer
    }

    return (
        <div>
            {setTiming()}
        </div>
    );
}

export default Timer;
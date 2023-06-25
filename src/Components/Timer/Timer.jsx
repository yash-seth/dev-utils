import React from 'react'
import { useState, useEffect } from 'react'
import "./Timer.css"

function Timer() {
    const [count, setCount] = useState(0);
    const [timerState, setTimerState] = useState(0);
  
    useEffect(() => {
  
        //Implementing the setInterval method
        const interval = setInterval(() => {
            if(timerState === "start") {
                setCount(count + 1);
            } else if(timerState === "stop"){
                
            } else if(timerState === 'reset') {
                clearInterval(interval)
            }
        }, 1000);
  
        //Clearing the interval
        return () => clearInterval(interval);
    }, [count, timerState]);

    const startTimer = () => {
        setTimerState("start")
    }

    const stopTimer = () => {
        setTimerState("stop")
    }

    const resetTimer = () => {
        setTimerState("reset")
        setCount(0)
    }
  return (
    <div className='timer-main'>
        <h1>Timer Component</h1>
        <p>Time Elapsed: {count}</p>
        <div className='timer-controls'>
            <button className="timer-control-btn" onClick={() => startTimer()}>Start</button>
            <button className="timer-control-btn" onClick={() => stopTimer()}>Stop</button>
            <button className="timer-control-btn" onClick={() => resetTimer()}>Reset</button>
        </div>
    </div>
  )
}

export default Timer
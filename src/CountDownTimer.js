import React, { useState } from 'react'

const CountdownTimer = () => {
  const [duration, setDuration] = useState(0)
  const [timer, setTimer] = useState(null)

  const handleInputChange = (e) => {
    setDuration(parseInt(e.target.value, 10))
  }

  const startCountdown = () => {
    setTimer(
      setInterval(() => {
        setDuration((prevDuration) => Math.max(prevDuration - 1, 0))
      }, 1000)
    )
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const stopCountdown = () => {
    clearInterval(timer)
    setTimer(null)
  }

  React.useEffect(() => {
    if (duration === 0) {
      stopCountdown()
    }
  }, [duration, stopCountdown])

  return (
    <div>
      <h2>Countdown Timer</h2>
      <div>
        <label>
          Set Duration (seconds): {''}
          <input type='number' value={duration} onChange={handleInputChange} />
        </label>
      </div>
      <div>
        <button onClick={startCountdown} disabled={timer !== null}>
          Start
        </button>
        <button onClick={stopCountdown}>Stop</button>
      </div>
      <div>
        <p>Time remaining: {duration} seconds</p>
      </div>
    </div>
  )
}

export default CountdownTimer

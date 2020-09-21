import React, {useState, useRef, useEffect} from 'react';

const Timer = (props) => {
  const [time, setTime] = useState((new Date().getTime() + 25*60*1000));
  const [mins, setMins] = useState(0);
  const [secs, setSecs] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const now = new Date().getTime();
      const timeleft = time - now;
          
      // Calculating the days, hours, minutes and seconds left
      const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

      setMins(minutes);
      setSecs(seconds);

    }, 1000);
    return () => {
      clearTimeout(timeout);
    }
  }, [mins, secs]);

  return (
    <div>
      <div><p>{mins} : {secs}</p></div>
    </div>
  )
}

export default Timer;
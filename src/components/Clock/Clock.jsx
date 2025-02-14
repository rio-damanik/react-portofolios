import React, { useState, useEffect } from 'react';
import './Clock.css';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDay = (date) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
  };

  const formatDate = (date) => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${month} ${day}, ${year}`;
  };

  const getTimeUnit = (unit) => {
    return unit < 10 ? `0${unit}` : unit;
  };

  return (
    <div className="clock-wrapper">
      <div className="clock-container">
        <div className="day">{formatDay(time)}</div>
        <div className="time-container">
          <div className="time-unit">
            <div className="time-value">{getTimeUnit(time.getHours())}</div>
            <div className="time-label">Hours</div>
          </div>
          <div className="time-separator">:</div>
          <div className="time-unit">
            <div className="time-value">{getTimeUnit(time.getMinutes())}</div>
            <div className="time-label">Minutes</div>
          </div>
          <div className="time-separator">:</div>
          <div className="time-unit">
            <div className="time-value">{getTimeUnit(time.getSeconds())}</div>
            <div className="time-label">Seconds</div>
          </div>
        </div>
        <div className="date">{formatDate(time)}</div>
      </div>
    </div>
  );
};

export default Clock;

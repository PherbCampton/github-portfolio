import s from "./Time.module.css";
import { useState, useEffect } from "react";

const Time = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    // Update the current date and time every minute
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 30000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

  function getSuffix(day) {
    if (day >= 11 && day <= 13) {
      return "th";
    }
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }

  const dayOfMonth = currentDateTime.getDate();
  const surfix = getSuffix(dayOfMonth);

  const date = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };

  const time = {
    hour: "2-digit",
    minute: "2-digit",
  };

  const formattedDate = new Intl.DateTimeFormat("en-US", date).format(
    currentDateTime
  );
  const formattedTime = new Intl.DateTimeFormat("en-US", time).format(
    currentDateTime
  );

  return (
    <div>
      <div className={s.card}>
        <p className={s.timeText}>
          <span>{formattedTime.slice(0, 5)}</span>
          <span className={s.timeSubText}>{formattedTime.slice(5)}</span>
        </p>
        <p className={s.dayText}>{formattedDate + surfix}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          strokeWidth="0"
          fill="currentColor"
          stroke="currentColor"
          className={s.moon}
        >
          <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"></path>
          <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Time;

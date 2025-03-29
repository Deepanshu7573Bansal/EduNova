import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import searchIcon from "../../../assets/images/Search.png";
import styles from "./calender.module.css"; // Ensure the filename matches!
import Events from '../events/Search';
const Calender = () => {
  const [inputValue, setInputValue] = useState("");
  const [activeDate, setActiveDate] = useState(null);

  // November 2023 data
  const weeks = [
    [null, null, 1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10, { day: 11, event: "Physics workshop" }, 12],
    [13, 14, { day: 15, event: "Maths Assignment Deadline" }, 16, 17, 18, 19],
    [20, 21, 22, 23, 24, 25, 26],
    [27, 28, 29, 30, null, null, null]
  ];

  const handleDateClick = (day) => {
    if (day && typeof day === 'object') {
      setActiveDate(day.day);
    } else if (day) {
      setActiveDate(day);
    }
  };

  return (
    <div className={styles.calender} >
      <h1>Calendar</h1>
      
      <div className={styles.searchWrapper}>
      <img 
          src={searchIcon} 
          alt="Search" 
          className={styles.searchIcon} 
        />
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      
      </div>

      <div className={styles.calendarContainer}>
      <div className={styles.calendarHeader}>
        <h1>NOVEMBER 2025</h1>
        
      </div>

      <table className={styles.calendarTable}>
        <thead>
          <tr>
            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
        {weeks.map((week, weekIndex) => (
            <tr key={weekIndex}>
              {week.map((day, dayIndex) => (
                <td 
                  key={dayIndex}
                  className={`${styles.calendarDay} ${activeDate === (day?.day || day) ? styles.active : ''}`}
                  onClick={() => handleDateClick(day)}
                >
                  <div className={styles.dayNumber}>{day?.day || day || ''}</div>
                  {day?.event && <div className={styles.eventIndicator}>{day.event}</div>}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className={styles.events}>
    <Events></Events>
    </div>
   
    </div>
  );
};

export default Calender;
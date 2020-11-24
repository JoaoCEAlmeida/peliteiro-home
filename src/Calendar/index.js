import React from "react";
import Calendar from "@ericz1803/react-google-calendar";
import { css } from "@emotion/core";
import { API_KEY, CALENDAR_ID } from "../secrets";
import "./index.css";

const styles = {
  eventCircle: {
    color: "#B241D1",
  },
  multiEvent: css`
    background: #b241d1;
    &:hover {
      background: #86319e;
    }
    &:after {
      border-left-color: #b241d1;
    }
    &:hover::after {
      border-left-color: #86319e;
    }
    &:before {
      border-right-color: #b241d1;
    }
    &:hover::before {
      border-right-color: #86319e;
    }
  `,
};

const MyCalendar = () => {
  return (
    <section id="calendar">
      <div className="calendar__wrapper">
        <h2>Availability</h2>
        <Calendar apiKey={API_KEY} calendarId={CALENDAR_ID} styles={styles} />
      </div>
    </section>
  );
};

export default MyCalendar;

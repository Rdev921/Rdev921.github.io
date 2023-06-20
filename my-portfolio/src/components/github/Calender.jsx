import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Tooltip } from 'react-tooltip'
import "./calender.css";

function Calender() {
  const selectLast12Months = (contributions) => {
    const today = new Date();
    const startTimestamp = new Date(
      today.getFullYear(),
      today.getMonth() - 11,
      1
    ).getTime();
    const endTimestamp =
      new Date(today.getFullYear(), today.getMonth() + 1, 1).getTime() - 1;

    return contributions.filter((day) => {
      const contributionTimestamp = new Date(day.date).getTime();

      return (
        contributionTimestamp >= startTimestamp &&
        contributionTimestamp <= endTimestamp
      );
    });
  };

  return (
    <div className="github-main">
      <h1 className="github-heading">GitHub</h1>
      <div className="github-calender">
        <GitHubCalendar
          className="github-calendar-class"
          transformData={selectLast12Months}
          username="Rdev921"
          color={"red"}
          blockSize={14}
          fontSize={20}
          showColorLegend
          hideTotalCount
        >
          <Tooltip delayShow={20} html />
        </GitHubCalendar>
      </div>
      <div className="github-stats">
        <div>
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=rdev921&"
            id="github-streak-stats"
          />
        </div>
        <div>
          <img
            src="https://camo.githubusercontent.com/c55882aa8c64bd4dfad49ae6a5afb3c7e46be79899dd385946f8ffb57e639145/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67733f757365726e616d653d726465763932312673686f775f69636f6e733d74727565266c6f63616c653d656e266c61796f75743d636f6d70616374"
            id="github-top-langs"
          />
        </div>
        <div>
          <img
            src="https://camo.githubusercontent.com/f09182a711e7bab3ff3924a9d40c369ac5c77cdeca500075bc63a7875204f60b/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d726465763932312673686f775f69636f6e733d74727565266c6f63616c653d656e"
            id="github-stats-card"
          />
        </div>
      </div>
    </div>
  );
}

export default Calender;
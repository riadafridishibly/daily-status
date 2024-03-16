import { format } from "date-fns";
import React from "react";
import { formatDate } from "../utils/utils";

const LOCAL_WEEK = "W";
const ISO_WEEK = "Io";

function convertUTCDateToLocalDate(date) {
  let newDate = new Date(date.getTime() - date.getTimezoneOffset() * 60 * 1000);
  return newDate;
}

function Header({ dateString, setCurrentDate, getTotal }) {
  let date = new Date(Date.parse(dateString));
  let formattedDate = formatDate(date);
  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-3xl font-semibold p-4">DailyStatus</h1>
      <p className="text-slate-500">Track Your Daily Status</p>
      <div className="flex flex-row items-center justify-center gap-12 pt-8">
        <div className="flex items-center justify-center">
          <input
            className="text-2xl"
            type="date"
            name="date"
            defaultValue={formattedDate}
            onClick={(e) => e.currentTarget.showPicker()}
            onChange={(e) => setCurrentDate(e.target.value)}
          />
          <span className="text-2xl">{format(date, "dd LLL yyyy")}</span>
        </div>
        <span>
          <span className="text-2xl"> {format(date, ISO_WEEK)}</span> Week
        </span>
        <span>
          <span className="text-2xl">{format(date, "Do")}</span> day of year
        </span>
      </div>
      <div className="flex items-baseline pt-8 gap-2">
        <span className="text-2xl text-gray-500">Total</span>
        <span className="text-4xl font-semibold">{getTotal() || "0h"}</span>
      </div>
    </div>
  );
}

export default Header;

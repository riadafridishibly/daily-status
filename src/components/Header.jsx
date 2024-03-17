import { addDays, format, subDays } from "date-fns";
import React, { useRef } from "react";
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
  const datePickerRef = useRef(null);
  return (
    <div className="flex w-full flex-col items-center">
      <h1 className="p-4 text-3xl font-semibold">DailyStatus</h1>
      <p className="text-slate-500">Track Your Daily Status</p>
      <div className="flex flex-col items-center justify-center pt-8 md:flex-row md:gap-12">
        <div className="flex items-center justify-center">
          <input
            ref={datePickerRef}
            className="text-2xl"
            type="date"
            name="date"
            defaultValue={formattedDate}
            onClick={(e) => e.currentTarget.showPicker()}
            onChange={(e) => setCurrentDate(e.target.value)}
          />
          <button
            onClick={() => datePickerRef.current?.showPicker()}
            className="text-2xl"
          >
            {format(date, "dd LLL yyyy")}
          </button>
        </div>
        <span>
          <span className="text-2xl"> {format(date, ISO_WEEK)}</span> week
        </span>
        <span>
          <span className="text-2xl">{format(date, "Do")}</span> day of the year
        </span>
      </div>
      <div className="flex w-full max-w-screen-lg flex-row items-baseline justify-around px-8 pt-8">
        <button
          className="rounded-md border border-black px-8 py-2"
          onClick={() => {
            setCurrentDate((curr) => {
              return formatDate(subDays(curr, 1));
            });
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <div className="flex w-1/3 items-baseline justify-center gap-2">
          <span className="text-2xl text-gray-500">Total</span>
          <span className="text-4xl font-semibold">{getTotal() || "0h"}</span>
        </div>
        <button
          className="rounded-md border border-black px-8 py-2"
          onClick={() => {
            setCurrentDate((curr) => {
              return formatDate(addDays(curr, 1));
            });
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Header;

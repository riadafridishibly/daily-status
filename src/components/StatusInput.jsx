import React from "react";

function DeleteButton() {
  return (
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
        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
      />
    </svg>
  );
}

function Checkbox({ onChecked, getChecked }) {
  return (
    <div className="inline-flex items-center">
      <label
        className="relative flex cursor-pointer items-center rounded-full p-3"
        htmlFor="customStyle"
      >
        <input
          type="checkbox"
          defaultChecked={getChecked() === 1}
          className="before:content[''] before:bg-blue-gray-500 peer relative h-8 w-8 cursor-pointer appearance-none rounded-full border border-gray-900/20 bg-gray-900/10 transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-12 before:w-12 before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:scale-105 hover:before:opacity-0"
          id="customStyle"
          onChange={(e) => onChecked(e)}
        />
        <span className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5"
            viewBox="0 0 20 20"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
      </label>
    </div>
  );
}

function StatusInput({
  onChecked,
  getChecked,
  onTitleChange,
  onTimeChange,
  onRemove,
  getTimeSum,
  getTitle,
  getTimeString,
}) {
  return (
    <div className="flex w-full flex-row items-center gap-1 md:gap-4">
      <div className="flex basis-3/5 flex-row items-center">
        <Checkbox getChecked={getChecked} onChecked={onChecked} />
        <div className="relative flex w-full flex-row items-center justify-center">
          <input
            tabIndex={1}
            className="block w-full rounded-md border border-slate-300 bg-white px-3 py-2 pr-9 text-sm placeholder-slate-400
      shadow-sm invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500
      focus:outline-none focus:ring-1 focus:ring-sky-500 focus:invalid:border-pink-500
      focus:invalid:ring-pink-500 disabled:border-slate-200
      disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none"
            type="text"
            placeholder="Name of the task"
            onChange={onTitleChange}
            defaultValue={getTitle()}
          ></input>
          <button
            className="absolute end-0 px-2 py-2 text-red-500"
            onClick={() => {
              let del = confirm("Are you sure?");
              if (del) {
                onRemove();
              }
            }}
            tabIndex={0}
          >
            <DeleteButton />
          </button>
        </div>
      </div>
      <div className="basis-2/5">
        <div className="flex flex-row items-center">
          <input
            className="block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder-slate-400 shadow-sm
      invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline-none
      focus:ring-1 focus:ring-sky-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500
      disabled:border-slate-200 disabled:bg-slate-50
      disabled:text-slate-500 disabled:shadow-none"
            type="text"
            tabIndex={1}
            placeholder="2h + 3h35m - 25m"
            onChange={onTimeChange}
            defaultValue={getTimeString()}
          ></input>
          <span className="ml-1 h-full w-4/12 rounded-md bg-slate-300 py-2 text-center">
            {getTimeSum() || "0h"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default StatusInput;

import React from "react";

function DeleteButton() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
      />
    </svg>
  );
}

function StatusInput({
  index,
  onTitleChange,
  onTimeChange,
  onRemove,
  getTimeSum,
  getTitle,
  getTimeString,
}) {
  return (
    <div className="w-full flex flex-row justify-start items-center gap-x-10 py-1">
      <div className="basis-3/5 flex flex-row items-center">
        <div className="mr-3 text-xl">{index + 1}.</div>
        <div className="flex flex-row w-full relative items-center justify-center">
          <input
            className="block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 pr-9"
            type="text"
            placeholder="Name of the task"
            onChange={onTitleChange}
            defaultValue={getTitle()}
          ></input>
          <button
            className="text-red-500 px-2 py-2 absolute end-0"
            onClick={() => {
              let del = confirm("Are you sure?");
              if (del) {
                onRemove();
              }
            }}
          >
            <DeleteButton />
          </button>
        </div>
      </div>
      <div className="basis-2/5">
        <div className="flex flex-row items-center">
          <input
            className="block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            type="text"
            placeholder="2h + 3h35m - 25m"
            onChange={onTimeChange}
            defaultValue={getTimeString()}
          ></input>
          <span className="py-2 text-center bg-slate-300 rounded-md outline outline-slate-400 ml-1 w-4/12 h-full">
            {getTimeSum() || "0h"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default StatusInput;

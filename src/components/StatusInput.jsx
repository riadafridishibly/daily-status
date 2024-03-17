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
    <div className="flex w-full flex-row items-center gap-1 py-1 md:gap-4">
      <div className="flex basis-3/5 flex-row items-center">
        <div className="mr-3 text-xl">{index + 1}.</div>
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

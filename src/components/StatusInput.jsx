import React from "react";

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
      <div className="flex-1 flex flex-row">
        <button
          className="rounded px-2 mr-3 bg-red-500 hover:bg-red-700 text-white"
          onClick={() => {
            let del = confirm("Are you sure?");
            if (del) {
              onRemove();
            }
          }}
        >
          X
        </button>
        <div className="mr-3">{index + 1}</div>
        <input
          className="border-b border-black w-full"
          type="text"
          onChange={onTitleChange}
          value={getTitle()}
        ></input>
      </div>
      <div className="flex-1 flex flex-row">
        <input
          className="border-b border-black flex-1"
          type="text"
          onChange={onTimeChange}
          value={getTimeString()}
        ></input>
        <span className="text-xl w-2/12 mx-4">{getTimeSum()}</span>
      </div>
    </div>
  );
}

export default StatusInput;

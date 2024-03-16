import { useState } from "react";
import Header from "./components/Header";
import StatusInput from "./components/StatusInput";
import {
  today,
  formatDuration,
  calculateTotal,
  replaceAllWhiteSpace,
  duration,
} from "./utils/utils";
import { useApplicationState } from "./hooks/hooks";
import { useDebouncedCallback } from "use-debounce";

function App() {
  const [currentDate, setCurrentDate] = useState(today());
  const { items, add, remove, update } = useApplicationState(currentDate);

  const debouncedUpdate = useDebouncedCallback((id, object) => {
    update(id, object);
  }, 100);

  const handleTitleChange = (id) => {
    return (event) => {
      debouncedUpdate(id, { title: event.target.value });
    };
  };

  const handleTimeChange = (id) => {
    return (event) => {
      debouncedUpdate(id, { time: event.target.value });
    };
  };
  const handleRemove = (id) => {
    return () => remove(id);
  };

  const getDuration = (id) => {
    return () => {
      let durString = replaceAllWhiteSpace(items.values[id].time);
      return formatDuration(duration(durString));
    };
  };

  return (
    <>
      <Header
        dateString={currentDate}
        setCurrentDate={setCurrentDate}
        getTotal={() => {
          return formatDuration(calculateTotal(items.values));
        }}
      />
      <div className="pt-10 w-full flex flex-col items-center justify-center">
        <div className="py-8 px-10 w-full flex flex-col items-center justify-center">
          {items.orders.map((id, index) => (
            <StatusInput
              key={id}
              index={index}
              onTitleChange={handleTitleChange(id)}
              onTimeChange={handleTimeChange(id)}
              getTimeSum={getDuration(id)}
              getTitle={() => {
                return items?.values[id]?.title || "";
              }}
              getTimeString={() => {
                return items?.values[id]?.time || "";
              }}
              onRemove={handleRemove(id)}
            />
          ))}
        </div>
        <button
          className="text-xl px-10 py-2 rounded bg-blue-500 hover:bg-blue-700 text-white"
          onClick={add}
        >
          + Add
        </button>
      </div>
    </>
  );
}

export default App;

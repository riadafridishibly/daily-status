import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
export function useApplicationState(dateStr) {
  if (!dateStr) {
    dateStr = today();
  }

  const [items, setItems] = useState({
    orders: [],
    values: {},
  });

  const sentinel = { orders: [], values: {} };
  const retrieveFromLocalStorage = () => {
    let savedValue = localStorage.getItem(`status-${dateStr}`);
    if (savedValue) {
      return JSON.parse(savedValue);
    }
    return structuredClone(sentinel);
  };

  const getId = () => nanoid(8);
  const saveToLocalStorage = (data) => {
    localStorage.setItem(`status-${dateStr}`, JSON.stringify(data));
  };

  const add = () => {
    setItems((curr) => {
      const nextId = getId();
      const orders = [...curr.orders, nextId];
      const values = { ...curr.values, [nextId]: { title: "", time: "" } };
      console.log({ orders, values });
      return { orders, values };
    });
  };

  const remove = (id) => {
    setItems((curr) => {
      const orders = [...curr.orders];
      const values = { ...curr.values };
      const index = orders.indexOf(id);
      if (index > -1) {
        orders.splice(index, 1);
        delete values[id];
      }
      return { orders, values };
    });
  };

  const update = (id, value) => {
    setItems((curr) => {
      const values = { ...curr.values };
      if (id in values) {
        const currValue = values[id];
        if ("title" in value) {
          currValue["title"] = value["title"];
        }
        if ("time" in value) {
          currValue["time"] = value["time"];
        }
        values[id] = currValue;
      }
      return { ...curr, values };
    });
  };

  useEffect(() => {
    setItems(retrieveFromLocalStorage());
    return () => {
      setItems((curr) => {
        saveToLocalStorage(curr);
        return structuredClone(sentinel);
      });
    };
  }, [dateStr]);

  return { items, add, remove, update };
}

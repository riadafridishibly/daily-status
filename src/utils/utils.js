import { format } from "date-fns";
import parse from "parse-duration";

export function today() {
  let date = new Date();
  return format(date, "yyyy-MM-dd");
}

export function formatDate(date) {
  if (!date) {
    return;
  }
  return format(date, "yyyy-MM-dd");
}

export function replaceAllWhiteSpace(str) {
  return str.replace(/\s+/g, "");
}

export function formatDuration(ms) {
  let neg = false;
  if (ms < 0) {
    ms = -ms;
    neg = true;
  }
  const time = {
    d: Math.floor(ms / 86400000),
    h: Math.floor(ms / 3600000) % 24,
    m: Math.floor(ms / 60000) % 60,
    s: Math.floor(ms / 1000) % 60,
    ms: Math.floor(ms) % 1000,
  };
  let str = Object.entries(time)
    .filter((val) => val[1] !== 0)
    .map(([key, val]) => `${val}${key}`)
    .join("");
  if (neg) {
    str = `-${str}`;
  }
  return str;
}

export function calculateTotal(values) {
  let sum = 0;
  if (!values) {
    return sum;
  }
  for (let key in values) {
    sum += duration(values[key]["time"]);
  }
  return sum;
}

export function duration(durLine) {
  const regex = /[-+]?(?:[0-9]*(?:\.[0-9]*)?[a-z]+)+/g;
  const found = durLine.match(regex);
  if (!found) {
    return 0;
  }
  let sum = 0;
  for (let d of found) {
    sum += parse(d);
  }
  return sum;
}

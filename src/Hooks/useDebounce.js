import { useState, useEffect } from "react";

export const useDebounce = (value, delay) => {
  const [debounceValue, SetDebounceValue] = useState(value);

  useEffect(() => {
    const handeler = setTimeout(() => {
      SetDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(handeler);
    };
  }, [value, delay]);

  return debounceValue;
};

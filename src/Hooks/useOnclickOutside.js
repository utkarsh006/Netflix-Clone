import React, { useEffect } from "react";

const useOnclickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (e) => {
      console.log(ref.current);
      if (!ref.current || ref.current.contains(e.target)) {
        return;
      }
      handler();
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.addEventListener("mousedown", listener);
    };
  }, []);
};

export default useOnclickOutside;

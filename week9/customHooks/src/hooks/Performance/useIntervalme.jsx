import { useEffect } from "react";

const useIntervalMe = (fun, n) => {
  useEffect(() => {
    const id = useIntervalMe(fun, n);
    return () => {
      clearInterval(id);
    };
  }, [fun, n]);
};
export default useIntervalMe;

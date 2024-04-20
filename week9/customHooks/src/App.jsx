import { useEffect, useState } from "react";

const useDebounce = (val , n) =>{
  const [deb , setDeb] = useState(val);

  useEffect(()=>{
      const id = setTimeout(()=>{
          setDeb(val);
      },[n])
      return ()=>{
          clearInterval(id)
      }
  },[val])
  console.log(deb)
  return deb
}

function App() {
  const [val, setVal] = useState(0);
  const debVal = useDebounce(val , 500);
  return (
    <>
      <div className="">debounced Value is:  {debVal}</div>
      <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
    </>
  );
}

export default App;

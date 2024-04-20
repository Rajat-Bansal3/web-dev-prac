import { useState } from "react";
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";

function App() {
  console.log("app rerender")
  return (
    <>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </>
  );
}
function Count() {
  console.log("count rerender")

  return (
    <>
      <CountRender />
      <Buttons />
      <StateEvenOrOdd />
    </>
  );
}
function CountRender() {
  console.log("countrenderer rerender")

  const count = useRecoilValue(countAtom);
  return <>{count}</>;
}
function Buttons() {
  console.log("button rerender")

  const  setCount = useSetRecoilState(countAtom);
  return (
    <>
      <button
        onClick={() => {
          setCount(count =>count+1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount(count => count-1);
        }}
      >
        Decrement
      </button>
    </>
  );
}
function StateEvenOrOdd(){
  const count = useRecoilValue(evenSelector);
  return(
    <div>
      {count ? <>is odd </>:<>is even</>}
    </div> 
  )
}

export default App;

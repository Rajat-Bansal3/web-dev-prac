import { useState } from "react";

export function Header() {
  const [title, setTitle] = useState("");
  function ChangeTitle() {
    setTitle(Math.random());
  }
  return (
    <>
      <div>
        <button onClick={ChangeTitle}>click to change title</button>
        <div className="">title is : {title}</div>
      </div>
    </>
  );
}

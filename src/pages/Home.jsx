import { useState } from "react";

export default function Home() {

  const [counter, setCounter] = useState(0)

  const clickMe = () => {
    setCounter(counter + 1)
  }

  return (
    <div>
      <h2>Home</h2>
      <button onClick= { clickMe }>{ counter }</button>
    </div>
  );
}
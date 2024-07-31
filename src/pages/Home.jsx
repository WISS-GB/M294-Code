import { useState, useEffect } from "react";

export default function Home() {

  const [count, setCount] = useState(0);

    useEffect(() => {
      setTimeout(() => {
        setCount((count) => count + 1);
      }, 1000);
    }, []); // <- add empty brackets here

  return (
    <div>
      <h1>Home</h1>
      <h4>I've rendered {count} times!</h4>
    </div>
  );
}
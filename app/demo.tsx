import { useEffect, useState } from "react";
import Dashboard from "./dashBoard";

export interface User {
  name: string;
}

interface DemoProps {}

export default function Demo({}: DemoProps) {
  const [count, setCount] = useState(0);
  const [user] = useState({ name: "Your name is" });

  useEffect(() => {
    console.log("The count is", count);

    return () => {
      console.log("I am being cleaned up");
    };
  }, [count]);

  return (
    <>
      <div>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count - 1)}>Decrement</button>

        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>

      <div>
        <Dashboard user={user} />
      </div>
    </>
  );
}

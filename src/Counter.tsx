import React from "react";
import { useStore } from "./hooks/useStore";

const Counter = () => {
  const { useStateSelector } = useStore();
  const [count, setCount] = useStateSelector<number>("counter", 0);
  const [mom, setMom] = useStateSelector<string>("himom", "");
  return (
    <div>
      <button onClick={() => setCount(count + 2)}>
        add more 2 "current:{count}"{" "}
      </button>
      <button onClick={() => setMom(mom !== "himom" ? "himom" : "hidad")}>
        {mom}
      </button>
    </div>
  );
};

export default Counter;

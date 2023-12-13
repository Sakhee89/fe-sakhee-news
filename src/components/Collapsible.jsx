import { useState } from "react";

export function Collapsible({ children, descriptor }) {
  const [isHidden, setIsHidden] = useState(true);

  function toggleIsHidden() {
    setIsHidden(!isHidden);
  }

  return (
    <div>
      <button onClick={toggleIsHidden}>
        {isHidden ? "Show" : "Hide"} {descriptor}
      </button>
      {isHidden ? null : children}
    </div>
  );
}

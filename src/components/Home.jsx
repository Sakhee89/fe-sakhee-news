import { useState } from "react";
import { Articles } from "./Articles";

export function Home() {
  const [sortbyQuery, setSortbyQuery] = useState("votes");
  const [orderQuery, setOrderQuery] = useState("desc");

  return (
    <section className="main-section">
      <Articles
        topicQuery={undefined}
        sortbyQuery={sortbyQuery}
        orderQuery={orderQuery}
        setSortbyQuery={setSortbyQuery}
        setOrderQuery={setOrderQuery}
      />
    </section>
  );
}

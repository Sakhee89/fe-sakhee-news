import { useState } from "react";
import { Articles } from "./Articles";
import { Topics } from "./Topics";

export function Home() {
  const [sortbyQuery, setSortbyQuery] = useState("votes");
  const [orderQuery, setOrderQuery] = useState("desc");

  return (
    <section>
      <h2>Home</h2>
      <Topics sortbyQuery={sortbyQuery} orderQuery={orderQuery} />
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

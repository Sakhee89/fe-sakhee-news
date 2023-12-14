import { Articles } from "./Articles";
import { Topics } from "./Topics";

export function Home() {
  return (
    <section>
      <h2>Home</h2>
      <Topics />
      <Articles />
    </section>
  );
}

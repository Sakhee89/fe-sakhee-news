import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export function Header() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  return (
    <header>
      <h1>Sakhee News</h1>
      <h2>Welcome {currentUser}</h2>
    </header>
  );
}

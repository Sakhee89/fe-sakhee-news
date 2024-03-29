import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import { Articles } from "./components/Articles";
import { Home } from "./components/Home";
import { Header } from "./components/Header";
import { Article } from "./components/Article";
import { Topics } from "./components/Topics";
import { Error } from "./components/Error";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:article_id" element={<Article />} />
        <Route path="/topics/:topic" element={<Topics />} />
        <Route path="/*" element={<Error message="Route not found" />} />
      </Routes>
    </Container>
  );
}

export default App;

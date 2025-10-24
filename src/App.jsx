import { useState, useEffect } from "react";
import "./App.css";
import { api } from "./api";
import MemeList from "./components/MemeList";
import LoginForm from "./components/LoginForm";
import AddMemeForm from "./components/AddMemeForm";

function App() {
  const [auth, setAuth] = useState(null);
  const [memes, setMemes] = useState([]);

  return (
    <>
      <header className="mb-5">
        <h1 className="font-bold font text-4xl">March 2025 Cohort Dev Memes</h1>
      </header>
      <main className="min-h-[100vw]">
        {!auth ? (
          <LoginForm setAuth={setAuth} />
        ) : (
          <p>Welcome, {auth.username} </p>
        )}
        <h2>Meme Gallery</h2>

        {auth?.token && <AddMemeForm setMemes={setMemes} auth={auth} />}

        <MemeList memes={memes} setMemes={setMemes} />
      </main>
      <footer className="text-center">&copy; March 2025 Cohort</footer>
    </>
  );
}

export default App;

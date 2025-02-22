import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import Game from "../game/game";
import { Howl } from "howler";

export default function Main({ reactRoot, user }) {
  const [theme] = useState(
    new Howl({
      src: ["./audio/title_theme.wav"],
      loop: false,
      volume: 0.1,
    })
  );

  useEffect(() => {
    theme.play();
    window.addEventListener("keydown", (event) => {
      if (["ArrowUp", "ArrowDown"].includes(event.code)) {
        event.preventDefault();
      }
    });
  }, [theme]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  const handleSubmit = () => {
    const player = user ? user : undefined;
    theme.pause();
    if (reactRoot) {
      reactRoot.render(<Game player={player} reactRoot={reactRoot} />);
    } else {
      const root = ReactDOM.createRoot(document.getElementById("subRoot"));
      root.render(<Game player={player} reactRoot={root} />);
    }
  };

  const header = () => {
    return user ? (
      <h1>Welcome back {user.username}!</h1>
    ) : (
      <h1>Welcome to Pac-Man!</h1>
    );
  };

  const buttons = () => {
    return user ? (
      <button className="logout-button" onClick={handleLogout}>
      </button>
    ) : (
      <div>
       
      </div>
    );
  };

  const signupInstructions = () => {
    return user ? null : (
      <p className="signup-instructions">
      </p>
    );
  };

  return (
    <div className="main" id="main">
      {header()}
      {buttons()}
      <br></br>
      <br></br>
      <img
        className="title-gif"
        src="https://i.gifer.com/wau.gif"
        alt="Pac-Man gif"
        style={{
          width: "400px",
          height: "400px",
        }}
      />
      {signupInstructions()}
      <div className="register">
        <button className="play-button" id="play-button" onClick={handleSubmit}>
          Play
        </button>
      </div>
      <p className="name-error" id="name-error"></p>
      <p className="instructions">
        Use the directional keys to move Pac-Man around the board while avoiding
        the ghosts as best you can. Pick up a power up and then attack the
        ghosts! Eat all the pellets on the board to level up. Press esc to pause
        and unpause the game at any time. 
      </p>
    </div>
  );
}

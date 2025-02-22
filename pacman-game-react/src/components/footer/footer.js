import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer>
      <p className="footer-text" data-testid="footer-text">
        This project was created by{" "}
        <a href="https://github.com/ujjwaljha77">Ujjwal Jha</a> and stored on{" "}
        <a href="https://github.com/ujjwaljha77/Pacman-game.git">GitHub</a>.
        A big thank you to Bandai Namco Entertainment for creating Pac-Man in 1980.

        {/* In 1980 the Japanese arcade game manufacturer Namco Limited introduced the world to Pac-Man.
         The lead designer was Iwatani Tohru, who intended to create a game that did not emphasize violence. */}

      </p>

      {/* Ms. PAC-MAN was born in the United States, featuring a female PAC-MAN with a ribbon on top.
       The game system is the same as PAC-MAN, and comes with added features,
        such as an alternating maze design system with 2 warp tunnels. */}
    </footer>
  );
}

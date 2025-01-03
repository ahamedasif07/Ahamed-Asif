import React from "react";
import styles from "./Bubbles.module.css";

const Bubbles = () => {
  const bubbleCount = 50; // Number of bubbles

  return (
    <div className={styles.bubbles}>
      {Array.from({ length: bubbleCount }).map((_, index) => (
        <div
          key={index}
          className={styles.bubble}
          style={{
            "--bubble-left-offset": `${Math.random() * 100}`, // Random offset for each bubble
            "--bubble-radius": `${Math.random() * 3 + 1}`, // Random size between 1vw and 4vw
            "--bubble-float-duration": `${Math.random() * 7 + 6}`, // Random float duration
            "--bubble-sway-duration": `${Math.random() * 3 + 4}`, // Random sway duration
          }}
        ></div>
      ))}
    </div>
  );
};

export default Bubbles;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import miauAudio from './assets/miau.mp3';
import calamardoAudio from './assets/calamardo.mp3';

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

export default function SanValentin() {
  const [noPosition, setNoPosition] = useState({ top: "50%", left: "50%" });
  const [yesSize, setYesSize] = useState(1);
  const [noText, setNoText] = useState("ño");
  const [gifIndex, setGifIndex] = useState(0);
  const [isCalamardo, setIsCalamardo] = useState(true); // Comienza con calamardo.mp3


  const navigate = useNavigate();


  const messages = ["UwUn't", "me odias", ":c", "pipipi"];
  const gifEmbeds = [
    "https://giphy.com/embed/c76IJLufpNwSULPk77", // Principal
    "https://giphy.com/embed/eGrYr7UkywqhIBlWth",
    "https://giphy.com/embed/lSgou3lYPvFA9w2fz3",
    "https://giphy.com/embed/TpsuCxwsNH8gatbpR5",
    "https://giphy.com/embed/eGrYr7UkywqhIBlWth",
    "https://giphy.com/embed/lSgou3lYPvFA9w2fz3",
    "https://giphy.com/embed/TpsuCxwsNH8gatbpR5",
    "https://giphy.com/embed/eGrYr7UkywqhIBlWth",
    "https://giphy.com/embed/lSgou3lYPvFA9w2fz3",
    "https://giphy.com/embed/TpsuCxwsNH8gatbpR5",
    "https://giphy.com/embed/eGrYr7UkywqhIBlWth",
    "https://giphy.com/embed/lSgou3lYPvFA9w2fz3",
    "https://giphy.com/embed/TpsuCxwsNH8gatbpR5",
    "https://giphy.com/embed/eGrYr7UkywqhIBlWth",
    "https://giphy.com/embed/lSgou3lYPvFA9w2fz3",
    "https://giphy.com/embed/TpsuCxwsNH8gatbpR5",
    "https://giphy.com/embed/eGrYr7UkywqhIBlWth",
    "https://giphy.com/embed/lSgou3lYPvFA9w2fz3",
    "https://giphy.com/embed/TpsuCxwsNH8gatbpR5",
    "https://giphy.com/embed/eGrYr7UkywqhIBlWth",
    "https://giphy.com/embed/lSgou3lYPvFA9w2fz3",
    "https://giphy.com/embed/TpsuCxwsNH8gatbpR5",
    "https://giphy.com/embed/eGrYr7UkywqhIBlWth",
    "https://giphy.com/embed/lSgou3lYPvFA9w2fz3",
    "https://giphy.com/embed/TpsuCxwsNH8gatbpR5",
    "https://giphy.com/embed/eGrYr7UkywqhIBlWth",
    "https://giphy.com/embed/lSgou3lYPvFA9w2fz3",
    "https://giphy.com/embed/TpsuCxwsNH8gatbpR5",
    "https://giphy.com/embed/eGrYr7UkywqhIBlWth",
    "https://giphy.com/embed/lSgou3lYPvFA9w2fz3",
    "https://giphy.com/embed/TpsuCxwsNH8gatbpR5",
    "https://giphy.com/embed/eGrYr7UkywqhIBlWth",
    "https://giphy.com/embed/lSgou3lYPvFA9w2fz3",
    "https://giphy.com/embed/TpsuCxwsNH8gatbpR5",
  ];

  // 

  const moveNoButton = () => {
    const maxDisplacement = 150;
    const randomTop = Math.floor(Math.random() * (maxDisplacement * 2 + 1)) - maxDisplacement;
    const randomLeft = Math.floor(Math.random() * (maxDisplacement * 2 + 1)) - maxDisplacement;

    setNoPosition({
      top: `${50 + randomTop}%`,
      left: `${50 + randomLeft}%`,
    });
  };

  const handleClickNo = () => {
    // Reproducir el audio actual
    const audio = new Audio(isCalamardo ? calamardoAudio : miauAudio);
    audio.play();
  
    // Alternar entre los audios
    setIsCalamardo((prev) => !prev);
  
    // Mover el botón "No" y cambiar el texto y el gif
    moveNoButton();
    setYesSize((prevSize) => prevSize + 0.1);
  
    setNoText((prevText) => {
      const currentIndex = messages.indexOf(prevText);
      return messages[(currentIndex + 1) % messages.length];
    });
  
    setGifIndex((prevIndex) => (prevIndex + 1) % gifEmbeds.length);
  };
  
  

  return (
<div className="valentine-container d-flex flex-column align-items-center justify-content-start text-center vh-100 pt-5">

      <h1 className="valentine-title mt-3">¿mi princesa, querés ser mi San Valentín?</h1>

      {/* GIF CENTRADO */}
      <div className="gif-container mt-3">
        <iframe
          src={gifEmbeds[gifIndex]}
          width="300"
          height="300"
          style={{ pointerEvents: "none", border: "none" }}
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
        ></iframe>
      </div>

      <div className="position-relative w-100 d-flex justify-content-center mt-4">
      <button
  className="btn btn-yes me-3 text-white"
  style={{
    transform: `scale(${yesSize})`,
    transition: "0.2s",
  }}
  onClick={() => navigate("/ti")}
>
  ti :3
</button>

        <button
          className="btn btn-no position-absolute text-white"
          style={{
            top: noPosition.top,
            left: noPosition.left,
            transition: "0.2s",
          }}
          onClick={handleClickNo}
        >
          {noText}
        </button>
      </div>
    </div>
  );
}

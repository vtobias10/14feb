import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

export default function Ti() {
  return (
    <div className="valentine-container d-flex flex-column align-items-center justify-content-center text-center vh-100">
      <h1 className="valentine-title">⋆｡🎔° gracias, va a ser un dia genial ˚🎔⋆</h1>

      <div className="gif-container mt-3">
        <iframe
          src="https://giphy.com/embed/iGqP4DYXe4zVJbCY5N"
          width="300"
          height="300"
          style={{ pointerEvents: "none", border: "none" }}
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
        ></iframe>
      </div>

      <p className="mt-3 text-white fw-bold">
        TE KIER♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡ MUCH♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡
      </p> {/* Texto debajo del GIF */}

      {/* Texto discreto en la esquina inferior derecha */}
      <p className="position-absolute bottom-0 end-0 small mb-2 me-2 fw-bold text-white">
        mugrosita ♥
      </p>
    </div>
  );
}

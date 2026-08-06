import { useEffect, useRef } from "react";
import "./Intro.css";
import "./IntroResponsividade.css";

function Intro({ fecharIntro }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log("Autoplay bloqueado:", err);
      });
    }
  }, []);

  return (
    <section className="container-intro-fixo">
      <div className="caixa-intro">
        <video
          ref={videoRef}
          className="video-intro"
          src="./intro-re.mp4"
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={fecharIntro}
        />
      </div>
    </section>
  );
}

export default Intro;

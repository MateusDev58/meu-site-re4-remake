import { useEffect, useRef } from "react";
import "./Intro.css";
import "./IntroResponsividade.css";

function Intro({ fecharIntro }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Força o play assim que o vídeo tiver dados suficientes
    const iniciarVideo = () => {
      video.play().catch((err) => {
        console.log("Autoplay bloqueado pelo navegador:", err);
      });
    };

    if (video.readyState >= 3) {
      iniciarVideo();
    } else {
      video.addEventListener("canplay", iniciarVideo);
    }

    return () => {
      video.removeEventListener("canplay", iniciarVideo);
    };
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
          controls={false} // Garante que o Safari não renderize botões nativos
          webkit-playsinline="true" // Suporte extra para versões antigas do iOS
          preload="auto"
          onEnded={fecharIntro}
        />
      </div>
    </section>
  );
}

export default Intro;

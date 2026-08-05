import "./Intro.css";
import "./IntroResponsividade.css";

function Intro({ fecharIntro }) {
  return (
    // Adicionada a classe container-intro-fixo aqui
    <section className="container-intro-fixo">
      <div className="caixa-intro">
        <video
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

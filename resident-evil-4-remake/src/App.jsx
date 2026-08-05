import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Intro from "./Componentes/0-Intro/Intro";
import { Cabecalho } from "./Componentes/1-Cabecalho/Cabecalho";
import { Hero } from "./Componentes/2-Hero/Hero";
import { ConteudoBaixavel } from "./Componentes/3-ConteudoBaixavel/ConteudoBaixavel";
import { BackgroundVideo } from "./Componentes/2-Hero/BackgroundVideo";
import { Topicos } from "./Componentes/4-Topicos/Topicos";
import { Trailer } from "./Componentes/5-Trailer/Trailer";
import Sobre from "./Componentes/6-Sobre/Sobre";
import { Personagem } from "./Componentes/7-Personagem/Personagem";
import { Localizacao } from "./Componentes/8-Localizacao/Localizacao";
import { Jogabilidade } from "./Componentes/9-Jogabilidade/Jogabilidade";
import { Dlc } from "./Componentes/10-Dlc/Dlc";
import { Loja } from "./Componentes/11-Loja/Loja";
import { ClassificacaoIndicativa } from "./Componentes/12-ClassificacaoIndicativa/ClassificacaoIndicativa";
import { LinksRelacionados } from "./Componentes/13-LinksRelacionados/LinksRelacionados";
import { Footer } from "./Componentes/14-Footer/Footer";

function App() {
  const [intro, setIntro] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      easing: "ease-out",
      offset: 200,
    });

    window.addEventListener("scroll", AOS.refresh);

    return () => {
      window.removeEventListener("scroll", AOS.refresh);
    };
  }, []);

  return (
    <>
      {intro && <Intro fecharIntro={() => setIntro(false)} />}

      <BackgroundVideo />

      <header>
        <Cabecalho />
      </header>

      <main>
        <section id="top">
          <Hero />
        </section>

        <section>
          <ConteudoBaixavel />
        </section>

        <section id="topicos">
          <Topicos />
        </section>

        <section id="trailer">
          <Trailer />
        </section>

        <section id="sobre">
          <Sobre />
        </section>

        <section id="personagem">
          <Personagem />
        </section>

        <section id="localizacao">
          <Localizacao />
        </section>

        <section id="jogabilidade">
          <Jogabilidade />
        </section>

        <section id="dlc">
          <Dlc />
        </section>

        <section id="comprar">
          <Loja />
        </section>

        <section>
          <ClassificacaoIndicativa />
        </section>

        <section>
          <LinksRelacionados />
        </section>

        <footer>
          <Footer />
        </footer>
      </main>
    </>
  );
}

export default App;

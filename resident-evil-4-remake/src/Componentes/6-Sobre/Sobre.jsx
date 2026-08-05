import "./Sobre.css";
import "./SobreResponsividade.css";
import { useEffect, useRef } from "react";

const Sobre = () => {
  const stageRef = useRef(null);

  useEffect(() => {
    const el = stageRef.current;
    const bg = document.getElementById("bg-sobre");
    if (!el || !bg) return;

    const handleScroll = () => {
      const rect = el.getBoundingClientRect();

      const pontoViewport = window.innerHeight * 0.1;

      if (rect.top <= pontoViewport) {
        bg.classList.add("ativo");
      } else {
        bg.classList.remove("ativo");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section className="caixa-sobre">
      <div className="caixa-conteudo-sobre">
        <div className="sobre-stage" ref={stageRef}>
          <div className="sobre-bg-layer">
            <img
              className="sobre-bg"
              src="./sobre-img.jpg"
              alt="sobre desktop"
              data-aos="fade-up"
            />

            <img
              className="sobre-bg-mobile"
              src="./img-sobre-mobile.jpg"
              alt="sobre mobile"
              data-aos="fade-up"
            />
          </div>

          <div className="sobre-content">
            <div className="caixa-texto-sobre">
              <span className="sobre-span">SOBRE</span>

              <span
                className="sobreviver-span"
                data-aos="fade-up"
                data-aos-duration="750"
                data-aos-delay="120"
                data-aos-easing="ease-out-cubic"
                data-aos-anchor-placement="top-center"
              >
                Sobreviver é <br /> só o começo
              </span>

              <div className="caixa-texto" data-aos="fade-up">
                <p className="texto-sobre-p">
                  Resident Evil 4 é um remake do Resident Evil 4 original de
                  2005.
                </p>

                <p className="texto-sobre-p">
                  Reimaginado para 2023 para trazer horror de sobrevivência de
                  última geração.
                </p>

                <p className="texto-sobre-p">
                  Resident Evil 4 preserva a essência do jogo original enquanto
                  apresenta jogabilidade modernizada, <br />
                  enredo reimaginado e gráficos vívidamente detalhados para
                  fazer deste o mais recente jogo de horror de <br />
                  sobrevivência, onde a vida e a morte, o terror e a catarse se
                  cruzam.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="historia-stage">
          <img
            className="sobre-img-2"
            src="./sobre-img.jpg-2.png"
            alt="sobre-img-2"
          />

          <img
            className="sobre-img-2-mobile"
            src="./sobre-moblile-img-2.jpg"
            alt="img mobile"
            data-aos="fade-in"
            data-aos-duration="700"
            data-aos-easing="ease-out-cubic"
            data-aos-anchor-placement="top-center"
          />

          <div className="caixa-sobre-extra">
            <div className="caixa-img-sobre">
              <img
                className="img-pequena-sobre"
                src="./img-sobre-1.jpg"
                alt="img pequena"
              />

              <img
                className="img-pequena-sobre"
                src="./img-sobre-2.jpg"
                alt="img pequena"
              />

              <img
                className="img-pequena-sobre"
                src="./img-sobre-3.jpg"
                alt="img pequena"
              />
            </div>

            <div
              className="caixa-historia"
              data-aos="fade-up"
              data-aos-duration="750"
              data-aos-delay="120"
              data-aos-easing="ease-out-cubic"
              data-aos-anchor-placement="top-center"
            >
              <span className="sobre-span">HISTÓRIA</span>

              <p className="texto-sobre-p">
                Seis anos se passaram desde o desastre biológico em Raccoon
                City.
              </p>

              <p className="texto-sobre-p">
                Leon S. Kennedy, um dos sobreviventes do incidente, foi
                recrutado como agente, <br />
                respondendo diretamente ao presidente dos Estados Unidos.
              </p>

              <p className="texto-sobre-p">
                Com a experiência de várias missões em suas costas, <br />
                Leon é enviado para resgatar a filha sequestrada do presidente.
              </p>

              <p className="texto-sobre-p">
                Ele a rastreia até uma vila europeia isolada, <br />
                onde há algo terrivelmente errado com os aldeões.
              </p>

              <p className="texto-sobre-p">
                E a cortina se abre nessa história de um ousado resgate e horror
                de sobrevivência extenuante.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;

import "./ConteudoBaixavel.css";
import "./ConteudoBaixavelResponsividade.css";

export const ConteudoBaixavel = () => {
  return (
    <section className="caixa-baixavel">
      <div className="caixa-conteudo-baixavel" data-aos="fade-left">
        <div className="caixa-vertical">
          <span className="span-conteudo-baixavel">CONTEÚDO BAIXÁVEL</span>
          <span className="linha-pattern"></span>
        </div>

        <ul className="caixa-conteudo-baixavel-ul">
          <li>
            <a href="#separate-ways-dlc">
              <picture>
                <source
                  media="(max-width: 768px)"
                  srcSet="./separateways-longa.jpg"
                />
                <img
                  className="imagem-modo"
                  src="./separateways.jpg"
                  alt="separate ways img"
                />
              </picture>
            </a>
          </li>

          <li>
            <a href="#caixa-the-mercenaries">
              <picture>
                <source
                  media="(max-width: 768px)"
                  srcSet="./mercenaries-longa.jpg"
                />
                <img
                  className="imagem-modo"
                  src="./mercenaries.jpg"
                  alt="the mercenaries img"
                />
              </picture>
            </a>
          </li>

          <li>
            <a href="#caixa-vr">
              <picture>
                <source
                  media="(max-width: 768px)"
                  srcSet="./vr-mode-longa.jpg"
                />
                <img
                  className="imagem-modo"
                  src="./vr-mode.jpg"
                  alt="vr mode img"
                />
              </picture>
            </a>
          </li>
        </ul>
      </div>

      <div className="caixa-demo" data-aos="fade-right" data-aos-delay="300">
        <div className="caixa-texto-demo">
          <a
            href="https://www.residentevil.com/re4/pt-br/topics/demo/"
            target="_blank"
          >
            <img
              className="logo-demo-img"
              src="./logo-demo.png"
              alt="logo demo"
            />
          </a>

          <div>
            <span className="demo-disponivel">Demo Já Disponível!</span>

            <p className="sem-limite-p">
              Sem limite de tempo; sem limite de partidas.
            </p>
          </div>
        </div>

        <div className="caixa-linha">
          <span className="linha-vermelha-curta"></span>

          <span className="demo">DEMO</span>

          <span className="linha-vermelha-longa"></span>
        </div>
      </div>
    </section>
  );
};

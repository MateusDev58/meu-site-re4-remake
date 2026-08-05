import "./Hero.css";
import "./HeroResponsividade.css";

export const Hero = () => {
  return (
    <section className="caixa-hero">
      <div className="caixa-playstation-panther">
        <img
          className="playstation-panther"
          src="./playstation-panther-award-2023.png"
          alt="img playstation panther award 2023"
        />

        <img
          className="playstation-panther-user"
          src="./playstation-panther-award-user-2023.png"
          alt="img playstation panther award user 2023"
        />
      </div>

      <div className="caixa-info-hero">
        <div className="pattern-inside-top-hero"></div>

        <div className="caixa-info-hero-conteudo">
          <p className="texto-info-hero">
            Mais de <span className="texto-info-hero-destaque">10 Milhões</span>{" "}
            de unidades vendidas em todo o mundo!
          </p>
        </div>

        <div className="pattern-inside-bottom-hero"></div>
      </div>

      <div className="caixa-logo-marca">
        <img
          className="logo-resident-evil-4-remake-img"
          src="./logo-resident-evil-4-remake.svg"
          alt="Logo Resident Evil 4 Remake"
        />

        <span className="ja-disponivel-span">Já Disponível</span>

        <div className="caixa-plataforma">
          <img
            className="logo-marca-playstation-hero"
            src="./logo-ps5.svg"
            alt="PS5"
          />

          <img
            className="logo-marca-playstation-hero"
            src="./logo-ps4.svg"
            alt="PS4"
          />

          <img
            className="logo-marca-xbox-hero"
            src="./logo-xboxxs.svg"
            alt="Xbox Series X|S"
          />

          <img
            className="logo-marca-steam"
            src="./logo-steam.svg"
            alt="Steam"
          />
        </div>
      </div>

      <div className="caixa-rede-social">
        <p className="siga-nos-p">SIGA-NOS</p>
        <div className="linha-horizontal"></div>

        <a
          href="https://www.youtube.com/user/ResidentEvil"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="icone-rede-social"
            src="./img-youtube.svg"
            alt="YouTube"
          />
        </a>

        <a href="https://twitter.com/RE_games" target="_blank" rel="noreferrer">
          <img
            className="icone-rede-social"
            src="./img-twitter.svg"
            alt="Twitter"
          />
        </a>

        <a
          href="https://www.facebook.com/residentevil"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="icone-rede-social"
            src="./img-facebook.svg"
            alt="Facebook"
          />
        </a>

        <a
          href="https://www.instagram.com/re_games/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="icone-rede-social"
            src="./img-instagram.svg"
            alt="Instagram"
          />
        </a>
      </div>
    </section>
  );
};

import { useState } from "react";
import "./Cabecalho.css";
import "./CabecalhoResponsividade.css";

export const Cabecalho = () => {
  const [abrirBotaoHamburgerMenu, setAbrirBotaoHamburgerMenu] = useState(false);

  function botaoHamburgerMenu() {
    setAbrirBotaoHamburgerMenu((aberto) => !aberto);
  }

  return (
    <header className="header">
      <div className="caixa-lista-cabecalho">
        <ul className="lista-ul-cabecalho">
          <li className="lista-li-cabecalho">
            <a className="titulos-a-cabecalho" href="#top">
              TOP
            </a>
          </li>

          <li className="lista-li-cabecalho">
            <a className="titulos-a-cabecalho" href="#topicos">
              TÓPICOS
            </a>
          </li>

          <li className="lista-li-cabecalho">
            <a className="titulos-a-cabecalho" href="#trailer">
              TRAILER
            </a>
          </li>

          <li className="lista-li-cabecalho">
            <a className="titulos-a-cabecalho" href="#sobre">
              SOBRE
            </a>
          </li>

          <li className="lista-li-cabecalho">
            <a className="titulos-a-cabecalho" href="#personagem">
              PERSONAGEM
            </a>
          </li>

          <li className="lista-li-cabecalho">
            <a className="titulos-a-cabecalho" href="#localizacao">
              LOCALIZAÇÃO
            </a>
          </li>

          <li className="lista-li-cabecalho">
            <a className="titulos-a-cabecalho" href="#jogabilidade">
              JOGABILIDADE
            </a>
          </li>

          <li className="lista-li-cabecalho">
            <a className="titulos-a-cabecalho" href="#dlc">
              DLC
            </a>
          </li>
        </ul>
        <a className="comprar" href="#comprar">
          COMPRAR
        </a>

        <button
          type="button"
          className={`botao-hamburger-menu ${
            abrirBotaoHamburgerMenu ? "ativo" : ""
          }`}
          onClick={botaoHamburgerMenu}
        >
          <span className="linha-horizontal-botao"></span>
          <span className="linha-horizontal-botao"></span>

          <span className="menu-span">
            {abrirBotaoHamburgerMenu ? "FECHAR" : "MENU"}
          </span>
        </button>
      </div>

      {/* MENU MOBILE */}

      {abrirBotaoHamburgerMenu && (
        <nav className="menu-mobile ativo">
          <ul className="lista-moblile-ul">
            <li className="lista-moblile-li">
              <a className="lista-moblile-a" href="#top">
                TOP
              </a>
            </li>

            <li className="lista-moblile-li">
              <a className="lista-moblile-a" href="#topicos">
                TÓPICOS
              </a>
            </li>

            <li className="lista-moblile-li">
              <a className="lista-moblile-a" href="#trailer">
                TRAILER
              </a>
            </li>

            <li className="lista-moblile-li">
              <a className="lista-moblile-a" href="#sobre">
                SOBRE
              </a>
            </li>

            <li className="lista-moblile-li">
              <a className="lista-moblile-a" href="#personagem">
                PERSONAGEM
              </a>
            </li>

            <li className="lista-moblile-li">
              <a className="lista-moblile-a" href="#localizacao">
                LOCALIZAÇÃO
              </a>
            </li>

            <li className="lista-moblile-li">
              <a className="lista-moblile-a" href="#jogabilidade">
                JOGABILIDADE
              </a>
            </li>

            <li className="lista-moblile-li">
              <a className="lista-moblile-a" href="#dlc">
                DLC
              </a>
            </li>

            <li className="lista-moblile-li">
              <a className="lista-moblile-a" href="#comprar">
                COMPRAR
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

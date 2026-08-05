import React from "react";
import "./LinksRelacionados.css";
import "./LinksRelacionadosResponsividade.css";

export const LinksRelacionados = () => {
  return (
    <div className="caixa-links-relacionados">
      <div className="caixa-conteudo-links-relacionados">
        <a
          className="a-links-relacionados"
          href="https://game.capcom.com/residentevil/en/four.html"
          target="_blank"
        >
          <img
            className="capa-links-relacionados"
            src="./capa-resident-evil-net.jpg"
            alt="Resident Evil.net"
          />
        </a>

        <a href="https://www.residentevil.com/7-re2-re3/pt-br/" target="_blank">
          <img
            className="capa-links-relacionados"
            src="./capa-resident-evil-trilogia.jpg"
            alt="Resident Evil 2, Resident Evil 3 e Resident Evil 4 Remake"
          />
        </a>

        <a
          href="https://www.residentevil.com/village/ge/pt-br/"
          target="_blank"
        >
          <img
            className="capa-links-relacionados"
            src="./capa-resident-evil-village.jpg"
            alt="Resident Evil Village Gold Edition"
          />
        </a>

        <a href="https://game.capcom.com/residentevil/en/" target="_blank">
          <img
            className="capa-links-relacionados"
            src="./capa-resident-evil-portal.jpg"
            alt="Resident Evil Portal"
          />
        </a>
      </div>
    </div>
  );
};

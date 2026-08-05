import React from "react";
import "./Footer.css";
import "./FooterResponsividade.css";

export const Footer = () => {
  return (
    <div className="caixa-footer">
      <div className="caixa-conteudo-footer">
        <div className="caixa-logo-footer">
          <img
            className="logo-marca-capcom"
            src="./capcom_logo.png"
            alt="logo marca capcom"
          />
          <ul className="lista-ul-footer">
            <li className="lista-li-footer">
              <a
                className="lista-a-footer"
                href="https://www.capcom-games.com/en/terms/"
                target="_blank"
              >
                Terms
              </a>
            </li>

            <li className="lista-li-footer">
              <a
                className="lista-a-footer"
                href="https://www.capcom.com/capcom/legal_privacy/privacy.html"
                target="_blank"
              >
                Privacy Policy
              </a>
            </li>

            <li className="lista-li-footer">
              <a
                className="lista-a-footer"
                href="https://www.residentevil.com/cookie-policy.html"
                target="_blank"
              >
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>

        <div className="caixa-direitos-footer">
          <p className="footer-p">
            All{" "}
            <span>
              <a
                className="trademarks-a"
                href="https://www.capcom-games.com/en/legal/tm/"
                target="_blank"
                rel="noopener noreferrer"
              >
                trademarks
              </a>
            </span>{" "}
            referenced herein are the properties of their respective owners.
          </p>

          <p className="capcom">©CAPCOM</p>
        </div>
      </div>
    </div>
  );
};

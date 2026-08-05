import "./Loja.css";
import "./LojaResponsividade.css";
import { useState } from "react";
import { createPortal } from "react-dom";

export const Loja = () => {
  const [edicaoSelecionada, setEdicaoSelecionada] = useState("Edição Padrão");

  function trocarEdicao(edicao) {
    setEdicaoSelecionada(edicao);
  }

  const [plataformaSelecionada, setPlataformaSelecionada] = useState("ps5");

  function trocarPlataforma(plataforma) {
    setPlataformaSelecionada(plataforma);
  }

  const [abrirModalGoldEdition, setAbrirModalGoldEdition] = useState(false);

  function modalGoldEdition() {
    setAbrirModalGoldEdition(true);
  }

  function fecharModalGoldEdition() {
    setAbrirModalGoldEdition(false);
  }

  // modal gold edition

  const itensGoldEdition = [
    {
      titulo: 'Trajes de Leon e Ashley: "Casual"',
      imagem: " ./img-modal-gold-edition-1.png",
    },

    {
      titulo: 'Trajes de Leon e Ashley: "Romântico"',
      imagem: " ./img-modal-gold-edition-2.png",
    },

    {
      titulo: 'Traje e Filtro de Leon: "Herói"',
      imagem: " ./img-modal-gold-edition-3.png",
    },

    {
      titulo: 'Traje e Filtro de Leon: "Vilão"',
      imagem: "./img-modal-gold-edition-4.png",
    },

    {
      titulo: 'Arma Especial: "Sentinel Nine"',
      imagem: "./img-modal-gold-edition-5.png",
    },

    {
      titulo: 'Arma Especial: "Chacoalha-Crânio',
      imagem: "./img-modal-gold-edition-6.png",
    },

    {
      titulo: "Mapa do Tesouro: Expansão",
      imagem: "./img-modal-gold-edition-7.png",
    },

    {
      titulo: 'Acessório de Leon: "Óculos de Sol (Esporte)"',
      imagem: "./img-modal-gold-edition-8.png",
    },

    {
      titulo: 'Mudança de Trilha Sonora "Ver. Original"',
      imagem: "./img-modal-gold-edition-9.png",
    },
  ];

  return (
    <div className="caixa-loja" id="loja">
      <div className="caixa-titulo-loja" data-aos="fade-up">
        <span className="produto-span">PRODUTO</span>

        <div className="divisor-produto"></div>

        <p className="disponivel-produto">Já Disponível</p>
      </div>

      <div className="caixa-escolha-edicao">
        <div className="caixa-escolha">
          <span className="numero-1">1</span>

          <p className="escolha-uma-edicao-p">Escolha uma edição</p>
        </div>

        <div className="caixa-botao-edicao">
          <button
            onClick={() => trocarEdicao("Edição Padrão")}
            className={`botao-edicao-jogo padrao ${
              edicaoSelecionada === "Edição Padrão" ? "ativo" : ""
            }`}
          >
            Edição Padrão
          </button>

          <button
            onClick={() => trocarEdicao("Gold Edition")}
            className={`botao-edicao-jogo gold ${
              edicaoSelecionada === "Gold Edition" ? "ativo" : ""
            }`}
          >
            Gold Edition
          </button>

          <button
            onClick={() => trocarEdicao("SEPARATE WAYS")}
            className={`botao-edicao-jogo separate ${
              edicaoSelecionada === "SEPARATE WAYS" ? "ativo" : ""
            }`}
          >
            SEPARATE WAYS
            <small className="botao-edicao-jogo-small">(DLC)</small>
          </button>
        </div>

        {/*  ESCOLHER PLATAFORMA  */}

        <div className="caixa-escolha-plataforma">
          <span className="numero-1">2</span>

          <p className="escolha-uma-edicao-p">Escolha uma plataforma</p>
        </div>

        <div className="caixa-botao-edicao-plataforma">
          <button
            onClick={() => trocarPlataforma("ps5")}
            className={`botao-edicao-plataforma ps5 ${
              plataformaSelecionada === "ps5" ? "ativo" : ""
            }`}
          >
            <img
              className="logo-lojas-ps5-img"
              src="./logo-ps5-loja.svg"
              alt="logo ps5"
            />
          </button>

          <button
            onClick={() => trocarPlataforma("ps4")}
            className={`botao-edicao-plataforma ps4 ${
              plataformaSelecionada === "ps4" ? "ativo" : ""
            }`}
          >
            <img
              className="logo-lojas-ps4-img"
              src="./logo-ps4-loja.svg"
              alt="logo ps4"
            />
          </button>

          <button
            onClick={() => trocarPlataforma("xbox")}
            className={`botao-edicao-plataforma xbox ${
              plataformaSelecionada === "xbox" ? "ativo" : ""
            }`}
          >
            <img
              className="logo-lojas-xbox-img"
              src="./logo-xbox-loja.svg"
              alt="logo xbox"
            />
          </button>

          <button
            onClick={() => trocarPlataforma("steam")}
            className={`botao-edicao-plataforma steam ${
              plataformaSelecionada === "steam" ? "ativo" : ""
            }`}
          >
            <img
              className="logo-lojas-steam-img"
              src="./logo-steam-loja.svg"
              alt="logo steam"
            />
          </button>
        </div>

        {edicaoSelecionada === "Edição Padrão" && (
          <div className="caixa-edicao-padrao">
            <div className="caixa-titulo-edicao">
              <h3 className="edicoes-h3">Edição Padrão</h3>
            </div>

            {/*  PS5 */}

            {plataformaSelecionada === "ps5" && (
              <>
                <div className="caixa-versao-didital">
                  <img
                    className="capa-edicao"
                    src="./capa-standard-ps5.jpg"
                    alt="Capa Edição Padrão PS5"
                  />

                  <div className="caixa-didital-loja">
                    <div className="caixa-conteudo-didital">
                      <h4 className="versao-didital-h4">Versão Digital</h4>

                      <a
                        className="botao-loja playstation-store"
                        href="https://store.playstation.com/pt-br/product/UP0102-PPSA07411_00-RE4RMAINGAME0000"
                        target="_blank"
                      >
                        PlayStation®Store
                      </a>
                    </div>

                    <div className="caixa-edicao-padrao-conteudos">
                      <h4 className="conteudos-incluidos-h4">
                        [Edição Padrão Conteúdos Incluídos]
                      </h4>

                      <p className="resident-evil-4-remake-loja">
                        ・Resident Evil 4
                      </p>
                    </div>

                    <div className="caixa-como-fazer-upgrade">
                      <div className="caixa-upgrade">
                        <a
                          className="como-fazer-upgrade-a"
                          href="https://www.playstation.com/ja-jp/support/games/upgrade-ps4-game-to-ps5-version/"
                          target="_blank"
                        >
                          Como Fazer o Upgrade do Jogo do PlayStation®4 para o
                          PlayStation®5
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="caixa-bonus">
                  <h4 className="pre-venda-h4">
                    Bônus de Pré-venda
                    <small className="pre-venda-small">(Edição Padrão)</small>
                  </h4>

                  <div className="caixa-de-ouro">
                    <img
                      className="maleta-img"
                      src="./maleta.jpg"
                      alt="maleta img"
                    />

                    <div>
                      <div className="caixa-maleta-municao">
                        <p className="maleta-municao-p">・Maleta: "Ouro"</p>

                        <p className="maleta-municao-p">
                          ・Amuleto: "Munição para Pistola"
                        </p>
                      </div>

                      <p className="amuleto-p">
                        Maleta e amuleto com efeitos especiais no jogo.
                      </p>

                      <ul className="personalizar-maleta-ul">
                        <li className="personalizar-maleta-li">
                          Nota: A maleta pode ser alterada selecionando "Máquina
                          de Escrever" e depois "Personalizar Maleta".
                        </li>

                        <li className="personalizar-maleta-li">
                          O amuleto pode ser alterado selecionando "Máquina de
                          Escrever" e depois "Personalizar Maleta".
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="caixa-jogo-completo">
                    <ul>
                      <li className="personalizar-maleta-li">
                        Nota: Você deve ter o jogo completo de Resident Evil 4
                        para acessar este conteúdo.
                      </li>

                      <li className="personalizar-maleta-li">
                        O conteúdo pode ser baixado na loja onde sua versão
                        digital foi comprada.
                      </li>

                      <li className="personalizar-maleta-li">
                        Bônus especiais limitados podem estar disponíveis
                        separadamente no futuro.
                      </li>

                      <li className="personalizar-maleta-li">
                        A compra de conteúdo lhe dará a licença para ele das
                        versões PlayStation 5 e PlayStation 4.
                      </li>

                      <li className="personalizar-maleta-li">
                        Comprar conteúdo para a versão do PlayStation®4 e
                        atualizar o jogo para a versão do PlayStation®5 exigirá
                        que você baixe novamente esse conteúdo com a mesma conta
                        da PlayStation™Network.
                      </li>
                    </ul>
                  </div>

                  <p className="para-quem-p">
                    Para quem comprar a Versão Digital:
                  </p>

                  <ul>
                    <li className="sao-elegiveis-li">
                      São elegíveis todos que comprarem a versão PlayStation®4,
                      PlayStation®5 até 23 de Março de 2023, 23:59 da manhã
                      (horário de Brasília).
                    </li>
                    <li className="sao-elegiveis-li">
                      Para aqueles que compram a versão física:
                    </li>
                  </ul>
                </div>

                <p className="deluxe-indisponivel-compra-p">
                  Resident Evil 4 Deluxe Edition não está mais disponível para
                  compra.
                </p>

                <h3 className="informacoes-importantes-h3">
                  Informações Importantes
                </h3>

                <ul>
                  <li className="personalizar-maleta-li">
                    *Conteúdos e especificações podem sofrer alterações sem
                    aviso prévio.
                  </li>
                  <li className="personalizar-maleta-li">
                    *As imagens são usadas para fins ilustrativos.
                  </li>
                </ul>
              </>
            )}

            {/*  PS4  */}

            {plataformaSelecionada === "ps4" && (
              <>
                <div className="caixa-versao-didital">
                  <img
                    className="capa-edicao"
                    src="./capa-standard-ps4.jpg"
                    alt="Capa Edição Padrão PS4"
                  />

                  <div>
                    <div className="caixa-conteudo-didital">
                      <h4 className="versao-didital-h4">Versão Digital</h4>

                      <a
                        className="botao-loja playstation-store"
                        href="https://store.playstation.com/pt-br/product/UP0102-PPSA07411_00-RE4RMAINGAME0000"
                        target="_blank"
                      >
                        PlayStation®Store
                      </a>
                    </div>

                    <div className="caixa-edicao-padrao-conteudos">
                      <h4 className="conteudos-incluidos-p">
                        [Edição Padrão Conteúdos Incluídos]
                      </h4>

                      <p className="resident-evil-4-remake-loja">
                        ・Resident Evil 4
                      </p>
                    </div>

                    <div className="caixa-como-fazer-upgrade">
                      <div className="caixa-upgrade">
                        <a
                          className="como-fazer-upgrade-a"
                          href="https://www.playstation.com/ja-jp/support/games/upgrade-ps4-game-to-ps5-version/"
                          target="_blank"
                        >
                          Como Fazer o Upgrade do Jogo do PlayStation®4 para o
                          PlayStation®5
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="caixa-bonus">
                  <h4 className="pre-venda-h4">
                    Bônus de Pré-venda
                    <small className="pre-venda-small">(Edição Padrão)</small>
                  </h4>

                  <div className="caixa-de-ouro">
                    <img
                      className="maleta-img"
                      src="./maleta.jpg"
                      alt="maleta img"
                    />

                    <div>
                      <div className="caixa-maleta-municao">
                        <p className="maleta-municao-p">・Maleta: "Ouro"</p>

                        <p className="maleta-municao-p">
                          ・Amuleto: "Munição para Pistola"
                        </p>
                      </div>

                      <p className="amuleto-p">
                        Maleta e amuleto com efeitos especiais no jogo.
                      </p>

                      <ul className="personalizar-maleta-ul">
                        <li className="personalizar-maleta-li">
                          Nota: A maleta pode ser alterada selecionando "Máquina
                          de Escrever" e depois "Personalizar Maleta".
                        </li>

                        <li className="personalizar-maleta-li">
                          O amuleto pode ser alterado selecionando "Máquina de
                          Escrever" e depois "Personalizar Maleta".
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="caixa-jogo-completo">
                    <ul>
                      <li className="personalizar-maleta-li">
                        Nota: Você deve ter o jogo completo de Resident Evil 4
                        para acessar este conteúdo.
                      </li>

                      <li className="personalizar-maleta-li">
                        O conteúdo pode ser baixado na loja onde sua versão
                        digital foi comprada.
                      </li>

                      <li className="personalizar-maleta-li">
                        Bônus especiais limitados podem estar disponíveis
                        separadamente no futuro.
                      </li>

                      <li className="personalizar-maleta-li">
                        A compra de conteúdo lhe dará a licença para ele das
                        versões PlayStation 5 e PlayStation 4.
                      </li>

                      <li className="personalizar-maleta-li">
                        Comprar conteúdo para a versão do PlayStation®4 e
                        atualizar o jogo para a versão do PlayStation®5 exigirá
                        que você baixe novamente esse conteúdo com a mesma conta
                        da PlayStation™Network.
                      </li>
                    </ul>
                  </div>

                  <p className="para-quem-p">
                    Para quem comprar a Versão Digital:
                  </p>

                  <ul>
                    <li className="sao-elegiveis-li">
                      São elegíveis todos que comprarem a versão PlayStation®4,
                      PlayStation®5 até 23 de Março de 2023, 23:59 da manhã
                      (horário de Brasília).
                    </li>

                    <li className="sao-elegiveis-li">
                      Para aqueles que compram a versão física:
                    </li>
                  </ul>
                </div>

                <p className="deluxe-indisponivel-compra-p">
                  Resident Evil 4 Deluxe Edition não está mais disponível para
                  compra.
                </p>

                <h3 className="informacoes-importantes-h3">
                  Informações Importantes
                </h3>

                <ul>
                  <li className="personalizar-maleta-li">
                    *Conteúdos e especificações podem sofrer alterações sem
                    aviso prévio.
                  </li>
                  <li className="personalizar-maleta-li">
                    *As imagens são usadas para fins ilustrativos.
                  </li>
                </ul>
              </>
            )}

            {/*  XBOX  */}

            {plataformaSelecionada === "xbox" && (
              <>
                <div className="caixa-versao-didital">
                  <img
                    className="capa-edicao"
                    src="./capa-standard-xbox.jpg"
                    alt="Capa Edição Padrão Xbox"
                  />

                  <div>
                    <div className="caixa-conteudo-didital">
                      <h4 className="versao-didital-h4">Versão Digital</h4>

                      <a
                        className="botao-loja xbox-store"
                        href="https://www.xbox.com/pt-br/games/store/resident-evil-4/9N7JCPPCPN37/"
                        target="_blank"
                      >
                        Microsoft Store
                      </a>
                    </div>

                    <div className="caixa-edicao-padrao-conteudos-xbox">
                      <h4 className="conteudos-incluidos-p">
                        [Edição Padrão Conteúdos Incluídos]
                      </h4>

                      <p className="resident-evil-4-remake-loja">
                        ・Resident Evil 4
                      </p>
                    </div>
                  </div>
                </div>

                <div className="caixa-deluxe-indisponivel-compra">
                  <p className="deluxe-indisponivel-compra-p">
                    Resident Evil 4 Deluxe Edition não está mais disponível para
                    compra.
                  </p>

                  <h3 className="informacoes-importantes-h3">
                    Informações Importantes
                  </h3>

                  <ul>
                    <li className="personalizar-maleta-li">
                      *Conteúdos e especificações podem sofrer alterações sem
                      aviso prévio.
                    </li>
                    <li className="personalizar-maleta-li">
                      *As imagens são usadas para fins ilustrativos.
                    </li>
                  </ul>
                </div>
              </>
            )}

            {/* steam */}

            {plataformaSelecionada === "steam" && (
              <>
                <div className="caixa-versao-didital">
                  <img
                    className="capa-edicao"
                    src="./capa-standard-steam.jpg"
                    alt="Capa Edição Padrão Steam"
                  />

                  <div>
                    <div className="caixa-conteudo-didital">
                      <h4 className="versao-didital-h4">Versão Digital</h4>

                      <a
                        className="botao-loja steam-store"
                        href="https://store.steampowered.com/app/2050650"
                        target="_blank"
                      >
                        Steam
                      </a>
                    </div>

                    <div className="caixa-edicao-padrao-conteudos-steam">
                      <h4 className="conteudos-incluidos-p">
                        [Edição Padrão Conteúdos Incluídos]
                      </h4>

                      <p className="resident-evil-4-remake-loja">
                        ・Resident Evil 4
                      </p>
                    </div>
                  </div>
                </div>

                <div className="caixa-deluxe-indisponivel-compra">
                  <p className="deluxe-indisponivel-compra-p">
                    Resident Evil 4 Deluxe Edition não está mais disponível para
                    compra.
                  </p>

                  <h3 className="informacoes-importantes-h3">
                    Informações Importantes
                  </h3>

                  <ul>
                    <li className="personalizar-maleta-li">
                      *Conteúdos e especificações podem sofrer alterações sem
                      aviso prévio.
                    </li>
                    <li className="personalizar-maleta-li">
                      *As imagens são usadas para fins ilustrativos.
                    </li>
                  </ul>
                </div>
              </>
            )}
          </div>
        )}

        {/*  GOLD EDITION  */}

        {edicaoSelecionada === "Gold Edition" && (
          <div className="caixa-edicao-gold">
            <div className="caixa-titulo-edicao">
              <h3 className="edicoes-h3">Gold Edition</h3>
            </div>

            {/*  GOLD EDITION PS5  */}

            {plataformaSelecionada === "ps5" && (
              <>
                <div className="caixa-versao-didital">
                  <img
                    className="capa-edicao"
                    src="./capa-gold-ps5.jpg"
                    alt="Capa Gold Edition PS5"
                  />

                  <div className="caixa-info">
                    <div className="caixa-conteudo-didital">
                      <h4 className="versao-didital-h4">Versão Digital</h4>

                      <a
                        className="botao-loja playstation-store"
                        href="https://store.playstation.com/pt-br/product/UP0102-PPSA07411_00-RE4GOLDEDITION00"
                        target="_blank"
                      >
                        PlayStation®Store
                      </a>
                    </div>

                    <div className="caixa-edicao-gold-edition">
                      <h4 className="conteudos-incluidos-p">
                        [Conteúdo incluso na Gold Edition]
                      </h4>

                      <p className="conteudo-gold-edition-p">
                        [Conteúdo incluso na Gold Edition]
                      </p>

                      <p className="resident-evil-4-remake-loja">
                        ・Resident Evil 4
                      </p>

                      <p className="resident-evil-4-remake-loja">
                        ・Separate Ways
                      </p>

                      <p className="resident-evil-4-remake-loja">
                        ・Pacote DLC Extra
                      </p>

                      <div className="caixa-veja-aqui">
                        <a className="veja-aqui-a" href="#separate-ways-dlc">
                          Veja aqui para mais detalhes sobre Caminhos Distintos
                        </a>

                        <button
                          className="veja-aqui-button"
                          onClick={modalGoldEdition}
                        >
                          Veja aqui para mais detalhes sobre o Pacote de DLC
                          Extra
                        </button>
                      </div>
                    </div>

                    <div className="caixa-como-fazer-upgrade">
                      <div className="caixa-upgrade">
                        <a
                          className="como-fazer-upgrade-a"
                          href="https://www.playstation.com/ja-jp/support/games/upgrade-ps4-game-to-ps5-version/"
                          target="_blank"
                        >
                          Como Fazer o Upgrade do Jogo do PlayStation®4 para o
                          PlayStation®5
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="caixa-observacao">
                  <ul>
                    <li className="observacao-li">
                      Observação: você deve estar conectado à
                      PlayStation™Network para resgatar conteúdos.
                    </li>

                    <li className="observacao-li">
                      A compra de conteúdo lhe dará a licença ao mesmo nas
                      versões PlayStation 5 e PlayStation 4.
                    </li>

                    <li className="observacao-li">
                      Comprar conteúdo para a versão PlayStation®4 e depois
                      atualizar o jogo para a versão PlayStation®5 exigirá que
                      você baixe novamente esse conteúdo com a mesma conta para
                      a PlayStation™Network.
                    </li>
                  </ul>
                </div>

                <p className="deluxe-indisponivel-compra-p">
                  Resident Evil 4 Deluxe Edition não está mais disponível para
                  compra.
                </p>

                <h3 className="informacoes-importantes-h3">
                  Informações Importantes
                </h3>

                <ul>
                  <li className="personalizar-maleta-li">
                    *Conteúdos e especificações podem sofrer alterações sem
                    aviso prévio.
                  </li>

                  <li className="personalizar-maleta-li">
                    *As imagens são usadas para fins ilustrativos.
                  </li>
                </ul>
              </>
            )}

            {/*  GOLD EDITION PS4 */}

            {plataformaSelecionada === "ps4" && (
              <>
                <div className="caixa-versao-didital">
                  <img
                    className="capa-edicao"
                    src="./capa-gold-ps4.jpg"
                    alt="Capa Gold Edition PS4"
                  />

                  <div>
                    <div className="caixa-conteudo-didital">
                      <h4 className="versao-didital-h4">Versão Digital</h4>

                      <a
                        className="botao-loja playstation-store"
                        href="https://store.playstation.com/pt-br/product/UP0102-PPSA07411_00-RE4GOLDEDITION00"
                        target="_blank"
                      >
                        PlayStation®Store
                      </a>
                    </div>

                    <div className="caixa-edicao-gold-edition">
                      <h4 className="conteudos-incluidos-p">
                        [Conteúdo incluso na Gold Edition]
                      </h4>

                      <p className="conteudo-gold-edition-p">
                        [Conteúdo incluso na Gold Edition]
                      </p>

                      <p className="resident-evil-4-remake-loja">
                        ・Resident Evil 4
                      </p>

                      <p className="resident-evil-4-remake-loja">
                        ・Separate Ways
                      </p>

                      <p className="resident-evil-4-remake-loja">
                        ・Pacote DLC Extra
                      </p>

                      <div className="caixa-veja-aqui">
                        <a className="veja-aqui-a" href="" target="_blank">
                          Veja aqui para mais detalhes sobre Caminhos Distintos
                        </a>

                        <button
                          className="veja-aqui-button"
                          onClick={modalGoldEdition}
                        >
                          Veja aqui para mais detalhes sobre o Pacote de DLC
                          Extra
                        </button>
                      </div>
                    </div>

                    <div className="caixa-como-fazer-upgrade">
                      <div className="caixa-upgrade">
                        <a
                          className="como-fazer-upgrade-a"
                          href="https://www.playstation.com/ja-jp/support/games/upgrade-ps4-game-to-ps5-version/"
                          target="_blank"
                        >
                          Como Fazer o Upgrade do Jogo do PlayStation®4 para o
                          PlayStation®5
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="caixa-observacao">
                  <ul>
                    <li className="observacao-li">
                      Observação: você deve estar conectado à
                      PlayStation™Network para resgatar conteúdos.
                    </li>

                    <li className="observacao-li">
                      A compra de conteúdo lhe dará a licença ao mesmo nas
                      versões PlayStation 5 e PlayStation 4.
                    </li>

                    <li className="observacao-li">
                      Comprar conteúdo para a versão PlayStation®4 e depois
                      atualizar o jogo para a versão PlayStation®5 exigirá que
                      você baixe novamente esse conteúdo com a mesma conta para
                      a PlayStation™Network.
                    </li>
                  </ul>
                </div>

                <p className="deluxe-indisponivel-compra-p">
                  Resident Evil 4 Deluxe Edition não está mais disponível para
                  compra.
                </p>

                <h3 className="informacoes-importantes-h3">
                  Informações Importantes
                </h3>

                <ul>
                  <li className="personalizar-maleta-li">
                    *Conteúdos e especificações podem sofrer alterações sem
                    aviso prévio.
                  </li>

                  <li className="personalizar-maleta-li">
                    *As imagens são usadas para fins ilustrativos.
                  </li>
                </ul>
              </>
            )}

            {/*  GOLD EDITION XBOX  */}

            {plataformaSelecionada === "xbox" && (
              <>
                <div className="caixa-versao-didital">
                  <img
                    className="capa-edicao"
                    src="./capa-gold-xbox.jpg"
                    alt="Capa Gold Edition Xbox"
                  />

                  <div>
                    <div className="caixa-conteudo-didital">
                      <h4 className="versao-didital-h4">Versão Digital</h4>

                      <a
                        className="botao-loja xbox-store"
                        href="https://www.xbox.com/pt-BR/games/store/resident-evil-4-gold-edition/9P2G4PSMPBR7/"
                        target="_blank"
                      >
                        Microsoft Store
                      </a>
                    </div>

                    <div className="caixa-edicao-gold-edition">
                      <h4 className="conteudos-incluidos-p">
                        [Conteúdo incluso na Gold Edition]
                      </h4>

                      <p className="conteudo-gold-edition-p">
                        [Conteúdo incluso na Gold Edition]
                      </p>

                      <p className="resident-evil-4-remake-loja">
                        ・Resident Evil 4
                      </p>

                      <p className="resident-evil-4-remake-loja">
                        ・Separate Ways
                      </p>

                      <p className="resident-evil-4-remake-loja">
                        ・Pacote DLC Extra
                      </p>

                      <div className="caixa-veja-aqui">
                        <a className="veja-aqui-a" href="" target="_blank">
                          Veja aqui para mais detalhes sobre Caminhos Distintos
                        </a>

                        <button
                          className="veja-aqui-button"
                          onClick={modalGoldEdition}
                        >
                          Veja aqui para mais detalhes sobre o Pacote de DLC
                          Extra
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="caixa-observacao">
                  <ul>
                    <li className="observacao-li">
                      Você precisa estar conectado à Xbox Live para resgatar
                      conteúdos.
                    </li>
                  </ul>
                </div>

                <p className="deluxe-indisponivel-compra-p">
                  Resident Evil 4 Deluxe Edition não está mais disponível para
                  compra.
                </p>

                <h3 className="informacoes-importantes-h3">
                  Informações Importantes
                </h3>

                <ul>
                  <li className="personalizar-maleta-li">
                    *Conteúdos e especificações podem sofrer alterações sem
                    aviso prévio.
                  </li>

                  <li className="personalizar-maleta-li">
                    *As imagens são usadas para fins ilustrativos.
                  </li>
                </ul>
              </>
            )}

            {/*  GOLD STEAM  */}

            {plataformaSelecionada === "steam" && (
              <>
                <div className="caixa-versao-didital">
                  <img
                    className="capa-edicao"
                    src="./capa-gold-steam.jpg"
                    alt="Capa Gold Edition Steam"
                  />

                  <div>
                    <div className="caixa-conteudo-didital">
                      <h4 className="versao-didital-h4">Versão Digital</h4>

                      <a
                        className="botao-loja steam-store"
                        href="https://store.steampowered.com/app/2050650/Resident_Evil_4/"
                        target="_blank"
                      >
                        Steam
                      </a>
                    </div>

                    <div className="caixa-edicao-gold-edition-steam">
                      <h4 className="conteudos-incluidos-p">
                        [Conteúdo incluso na Gold Edition]
                      </h4>

                      <p className="conteudo-gold-edition-p">
                        [Conteúdo incluso na Gold Edition]
                      </p>

                      <p className="resident-evil-4-remake-loja">
                        ・Resident Evil 4
                      </p>

                      <p className="resident-evil-4-remake-loja">
                        ・Separate Ways
                      </p>

                      <p className="resident-evil-4-remake-loja">
                        ・Pacote DLC Extra
                      </p>

                      <div className="caixa-veja-aqui">
                        <a className="veja-aqui-a" href="" target="_blank">
                          Veja aqui para mais detalhes sobre Caminhos Distintos
                        </a>

                        <button
                          className="veja-aqui-button"
                          onClick={modalGoldEdition}
                        >
                          Veja aqui para mais detalhes sobre o Pacote de DLC
                          Extra
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="caixa-observacao"></div>

                <p className="deluxe-indisponivel-compra-p">
                  Resident Evil 4 Deluxe Edition não está mais disponível para
                  compra.
                </p>

                <h3 className="informacoes-importantes-h3">
                  Informações Importantes
                </h3>

                <ul>
                  <li className="personalizar-maleta-li">
                    *Conteúdos e especificações podem sofrer alterações sem
                    aviso prévio.
                  </li>

                  <li className="personalizar-maleta-li">
                    *As imagens são usadas para fins ilustrativos.
                  </li>
                </ul>
              </>
            )}
          </div>
        )}

        {/*  SEPARATE WAYS  */}

        {edicaoSelecionada === "SEPARATE WAYS" && (
          <div className="caixa-edicao-separate">
            <div className="caixa-titulo-edicao">
              <h3 className="edicoes-h3">
                SEPARATE WAYS
                <small className="edicoes-h3-small">(DLC)</small>
              </h3>
            </div>

            {/*  SEPARATE Ways PS5*/}

            {plataformaSelecionada === "ps5" && (
              <>
                <div className="caixa-versao-didital">
                  <img
                    className="capa-edicao"
                    src="./separate-dlc-capa.jpg"
                    alt="Separate Ways PS5"
                  />

                  <div className="caixa-conteudo-didital-separate-ways">
                    <h4 className="versao-didital-h4">Versão Digital</h4>

                    <a
                      className="botao-loja playstation-store"
                      href="https://store.playstation.com/pt-br/product/UP0102-PPSA07411_00-RE4RDLC000000001"
                      target="_blank"
                    >
                      PlayStation®Store
                    </a>
                  </div>
                </div>

                <div className="caixa-deluxe-indisponivel-compra">
                  <p className="deluxe-indisponivel-compra-p">
                    Resident Evil 4 Deluxe Edition não está mais disponível para
                    compra.
                  </p>

                  <h3 className="informacoes-importantes-h3">
                    Informações Importantes
                  </h3>

                  <ul>
                    <li className="personalizar-maleta-li">
                      *Conteúdos e especificações podem sofrer alterações sem
                      aviso prévio.
                    </li>

                    <li className="personalizar-maleta-li">
                      *As imagens são usadas para fins ilustrativos.
                    </li>
                  </ul>
                </div>
              </>
            )}

            {/*  SEPARATE PS4  */}

            {plataformaSelecionada === "ps4" && (
              <>
                <div className="caixa-versao-didital">
                  <img
                    className="capa-edicao"
                    src="./separate-dlc-capa.jpg"
                    alt="Separate Ways PS4"
                  />

                  <div className="caixa-conteudo-didital-separate-ways">
                    <h4 className="versao-didital-h4">Versão Digital</h4>

                    <a
                      className="botao-loja playstation-store"
                      href="https://store.playstation.com/pt-br/product/UP0102-PPSA07411_00-RE4RDLC000000001"
                      target="_blank"
                    >
                      PlayStation®Store
                    </a>
                  </div>
                </div>

                <div className="caixa-deluxe-indisponivel-compra">
                  <p className="deluxe-indisponivel-compra-p">
                    Resident Evil 4 Deluxe Edition não está mais disponível para
                    compra.
                  </p>

                  <h3 className="informacoes-importantes-h3">
                    Informações Importantes
                  </h3>

                  <ul>
                    <li className="personalizar-maleta-li">
                      *Conteúdos e especificações podem sofrer alterações sem
                      aviso prévio.
                    </li>

                    <li className="personalizar-maleta-li">
                      *As imagens são usadas para fins ilustrativos.
                    </li>
                  </ul>
                </div>
              </>
            )}

            {/*  SEPARATE XBOX */}

            {plataformaSelecionada === "xbox" && (
              <>
                <div className="caixa-versao-didital">
                  <img
                    className="capa-edicao"
                    src="./separate-dlc-capa.jpg"
                    alt="Separate Ways Xbox"
                  />

                  <div className="caixa-conteudo-didital-separate-ways">
                    <h4 className="versao-didital-h4">Versão Digital</h4>

                    <a
                      className="botao-loja xbox-store"
                      href="https://www.xbox.com/pt-br/games/store/resident-evil-4-caminhos-distintos/9pd2m9470n1p"
                      target="_blank"
                    >
                      Microsoft Store
                    </a>
                  </div>
                </div>

                <div className="caixa-deluxe-indisponivel-compra">
                  <p className="deluxe-indisponivel-compra-p">
                    Resident Evil 4 Deluxe Edition não está mais disponível para
                    compra.
                  </p>

                  <h3 className="informacoes-importantes-h3">
                    Informações Importantes
                  </h3>

                  <ul>
                    <li className="personalizar-maleta-li">
                      *Conteúdos e especificações podem sofrer alterações sem
                      aviso prévio.
                    </li>

                    <li className="personalizar-maleta-li">
                      *As imagens são usadas para fins ilustrativos.
                    </li>
                  </ul>
                </div>
              </>
            )}

            {/* SEPARATE STEAM */}

            {plataformaSelecionada === "steam" && (
              <>
                <div className="caixa-versao-didital">
                  <img
                    className="capa-edicao"
                    src="./separate-dlc-capa.jpg"
                    alt="Separate Ways Steam"
                  />

                  <div className="caixa-conteudo-didital-separate-ways">
                    <h4 className="versao-didital-h4">Versão Digital</h4>

                    <a
                      className="botao-loja steam-store"
                      href="https://store.steampowered.com/app/2109300/Resident_Evil_4__Separate_Ways/"
                      target="_blank"
                    >
                      Steam
                    </a>
                  </div>
                </div>

                <div className="caixa-deluxe-indisponivel-compra">
                  <p className="deluxe-indisponivel-compra-p">
                    Resident Evil 4 Deluxe Edition não está mais disponível para
                    compra.
                  </p>

                  <h3 className="informacoes-importantes-h3">
                    Informações Importantes
                  </h3>

                  <ul>
                    <li className="personalizar-maleta-li">
                      *Conteúdos e especificações podem sofrer alterações sem
                      aviso prévio.
                    </li>

                    <li className="personalizar-maleta-li">
                      *As imagens são usadas para fins ilustrativos.
                    </li>
                  </ul>
                </div>
              </>
            )}
          </div>
        )}
      </div>

      <div className="caixa-resident-evil-trilogy">
        <a
          href="https://game.capcom.com/residentevil/en/news-4270.html"
          target="_blank"
        >
          <picture>
            <source
              media="(max-width: 768px)"
              srcSet="./resident-evil-trilogy-img-mobile.jpg"
            />

            <img
              className="resident-evil-trilogy-capa-img"
              src="./resident-evil-trilogy-img.jpg"
              alt=""
            />
          </picture>
        </a>
      </div>

      {abrirModalGoldEdition &&
        createPortal(
          <div className="modal-gold-edition">
            <button
              className="botao-fechar-modal-gold-edition"
              onClick={fecharModalGoldEdition}
            >
              X
            </button>
            <div className="caixa-modal-gold-edition">
              <span className="produto-modal-span">PRODUTO</span>
              <h3 className="pacote-h3">Pacote de DLC Extra</h3>

              <div className="caixa-conteudo-modal-gold-edition">
                {itensGoldEdition.map((item, index) => (
                  <div key={index} className="item-modal-gold-edition">
                    <p className="item-modal-gold-edition-p">{item.titulo}</p>

                    <img
                      className="img-modal-gold-edition"
                      src={item.imagem}
                      alt={item.titulo}
                    />
                  </div>
                ))}
              </div>
              <div className="caixa-Observacao-modal">
                <ul>
                  <li className="observacao-modal-li">
                    Observação: você deve estar conectado à PlayStation™Network
                    para resgatar conteúdos.
                  </li>

                  <li className="observacao-modal-li">
                    A compra de conteúdo lhe dará a licença ao mesmo nas versões
                    PlayStation 5 e PlayStation 4.
                  </li>

                  <li className="observacao-modal-li">
                    Comprar conteúdo para a versão PlayStation®4 e depois
                    atualizar o jogo para a versão PlayStation®5 exigirá que
                    você baixe novamente esse conteúdo com a mesma conta para a
                    PlayStation™Network.
                  </li>
                </ul>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
};

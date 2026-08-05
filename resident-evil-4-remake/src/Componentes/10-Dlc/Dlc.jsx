import "./Dlc.css";
import "./DlcReponsividade.css";
import { useState } from "react";
import { TheMercenaries } from "./Mercenaries";
import { Vrmode } from "./Vrmode";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

export const Dlc = () => {
  const [modalSeparateways, setmodalSeparateways] = useState(false);
  const [modalGameplay, setModalGameplay] = useState(false);

  const [slideAtivo, setSlideAtivo] = useState(0);
  const [slideAtivo2, setSlideAtivo2] = useState(0);

  const imagensModalSeparateways = [
    "./separateways-img01.jpg",
    "./separateways-albert-wesker-img02.jpg",
    "./separateways-img03.jpg",
  ];

  const imagensGameplayModal = [
    "./separateways-gameplay_img01.jpg",
    "./separateways-gameplay_img02.jpg",
    "./separateways-gameplay_img03.jpg",
  ];

  function caixaModalseparateways() {
    setmodalSeparateways(true);
  }

  function btnFecharModalSeparateWays1() {
    setmodalSeparateways(false);
  }

  function abrirModalGameplay() {
    setModalGameplay(true);
  }

  function fecharModalGameplay() {
    setModalGameplay(false);
  }

  return (
    <>
      <div className="caixa-dlc" id="separate-ways-dlc">
        <div className="caixa-conteudo-baixavel-dlc" data-aos="fade-up">
          <span className="conteudo-baixavel-span-dlc">CONTEÚDO BAIXÁVEL</span>

          <div className="vertical-dlc"></div>

          <p className="texto-dlcs">
            O modo adicional frenético Os Mercenários será acompanhado de
            Caminhos Distintos, um novo modo de história que estrela Ada como a
            personagem principal! <br />
            Você também poderá curtir a história principal no PlayStation®VR2 em
            Resident Evil 4 Modo VR, que já se encontra disponível!
          </p>
        </div>

        <div className="caixa-separate-ways">
          <div className="caixa-titulo-dlc">
            <div className="caixa-dlc-pago">
              <div className="pattern-inside-top"></div>

              <div className="caixa-pago-disponivel">
                <span className="dlc-pago-span">DLC Pago</span>

                <div className="divisor"></div>

                <span className="Ja-disponivel-dlc">Já disponível</span>
              </div>

              <div className="pattern-inside-bottom"></div>
            </div>

            <img
              className="separateways_logo"
              src="./separateways_logo.png"
              alt="Separateways Logo"
            />

            <p className="missao-exige-p">
              Essa missão exige sigilo. Falhar não é uma opção.
              <br />
              <br />
              Jogue como Ada Wong nesse modo adicional e testemunhe os eventos
              de Resident Evil 4 pela perspectiva dela, o que responderá a
              perguntas que ficaram em aberto na história principal.
            </p>
          </div>

          {/* PRIMEIRO BLOCO */}
          <div className="caixa-swiper-dlc" data-aos="zoom-out">
            <div className="caixa-swiper-img">
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                effect="fade"
                fadeEffect={{ crossFade: false }}
                onSlideChange={(swiper) => {
                  setSlideAtivo(swiper.activeIndex);
                }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                allowTouchMove={false}
                pagination={{
                  clickable: true,
                  bulletClass: "bullet-dlc",
                  bulletActiveClass: "bullet-dlc-active",
                  renderBullet: (index, className) => {
                    return `<span class="${className}">${index + 1}</span>`;
                  },
                }}
                modules={[Autoplay, Pagination, EffectFade]}
                className="swiper-dlc"
              >
                <SwiperSlide className="slide-img-dlc">
                  <img
                    className="img-swiper-dlc"
                    src="./separateways-img01.jpg"
                    alt="IMG Ada"
                  />
                </SwiperSlide>

                <SwiperSlide className="slide-img-dlc">
                  <img
                    className="img-swiper-dlc"
                    src="./separateways-albert-wesker-img02.jpg"
                    alt="img Albert Wesker"
                  />
                </SwiperSlide>

                <SwiperSlide className="slide-img-dlc">
                  <img
                    className="img-swiper-dlc"
                    src="./separateways-img03.jpg"
                    alt="IMG Luis e Ada"
                  />
                </SwiperSlide>
              </Swiper>

              <button className="botao-modal" onClick={caixaModalseparateways}>
                <img
                  className="botao-abrir-modal-separateways"
                  src="./botao-de-abrir-img.svg"
                  alt="Abrir imagem"
                />
              </button>
            </div>

            <div className="caixa-texto-historia-dlc">
              <span className="historia-span-dlc">História</span>

              <p className="texto-dlc">
                Antes mesmo de Leon S. Kennedy chegar àquele vilarejo
                amaldiçoado, ela estava lá. Sua missão? Obter o segredo mais
                sombrio do culto: o Âmbar.
              </p>

              <p className="texto-dlc">
                Agora, ela precisa lidar com uma ameaça desconhecida que a
                devora de dentro pra fora, um cúmplice de passado sombrio e
                segundas intenções, além de um reencontro com o homem que ela
                menos esperava: Leon S. Kennedy.
              </p>

              <p className="texto-dlc">
                Por que ela aceitou essa missão? <br />E que caminho ela
                trilhará enquanto estiver nas sombras da investigação de Leon
                sobre o rapto da filha do presidente?
              </p>
            </div>
          </div>

          {/* SEGUNDO BLOCO */}
          <div className="caixa-swiper-dlc-2" data-aos="zoom-out">
            <div className="caixa-swiper-img-2">
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                onSlideChange={(swiper) => {
                  setSlideAtivo2(swiper.activeIndex);
                }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                  bulletClass: "bullet-dlc-2",
                  bulletActiveClass: "bullet-dlc-2-active",
                  renderBullet: (index, className) => {
                    return `<span class="${className}">${index + 1}</span>`;
                  },
                }}
                modules={[Autoplay, Pagination, EffectFade]}
                className="swiper-dlc-2"
              >
                <SwiperSlide className="slide-img-dlc">
                  <img
                    className="img-swiper-dlc"
                    src="./separateways-gameplay_img01.jpg"
                    alt="IMG 1"
                  />
                </SwiperSlide>

                <SwiperSlide className="slide-img-dlc">
                  <img
                    className="img-swiper-dlc"
                    src="./separateways-gameplay_img02.jpg"
                    alt="IMG 2"
                  />
                </SwiperSlide>

                <SwiperSlide className="slide-img-dlc">
                  <img
                    className="img-swiper-dlc"
                    src="./separateways-gameplay_img03.jpg"
                    alt="IMG 3"
                  />
                </SwiperSlide>
              </Swiper>

              <button className="botao-modal-2" onClick={abrirModalGameplay}>
                <img
                  className="botao-abrir-modal-separateways"
                  src="./botao-de-abrir-img.svg"
                  alt="Abrir imagem"
                />
              </button>
            </div>

            <div className="caixa-texto-historia-dlc-2">
              <span className="caminhos-distintos-span">
                CAMINHOS DISTINTOS
              </span>

              <p className="jogabilidade-dlc">Jogabilidade</p>

              <p className="texto-dlc">
                Jogabilidade Além da ação já vista no jogo base com Leon, é
                possível utilizar uma arma de gancho para alcançar vários
                locais. A arma também pode ser usada para eliminar inimigos de
                longe e executar golpes corpo a corpo a distância. Isso
                possibilita uma experiência de jogo mais empolgante e frenética.
              </p>
            </div>
          </div>
        </div>

        {/* THE MERCENARIES */}
        <TheMercenaries />

        {/* VR MODE */}
        <div className="caixa-vr-mode">
          <Vrmode />
        </div>
      </div>

      {modalSeparateways && (
        <div className="modal-separateways">
          <button
            className="botaofecharmodalSeparateWays-1"
            onClick={btnFecharModalSeparateWays1}
          >
            X
          </button>

          <img
            className="img-modal-separateways"
            src={imagensModalSeparateways[slideAtivo]}
            alt=""
          />
        </div>
      )}

      {/* bloco 2 */}
      {modalGameplay && (
        <div className="modal-separateways">
          <button
            className="botaofecharmodalSeparateWays-2"
            onClick={fecharModalGameplay}
          >
            X
          </button>

          <img
            className="img-modal-separateways"
            src={imagensGameplayModal[slideAtivo2]}
            alt=""
          />
        </div>
      )}
    </>
  );
};

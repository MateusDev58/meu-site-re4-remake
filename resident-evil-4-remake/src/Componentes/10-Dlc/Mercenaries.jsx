import "./Mercenaries.css";
import "./MercenariesResponsividade.css";

import { createPortal } from "react-dom";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

export const TheMercenaries = () => {
  const [MercenariesModal, setMercenariesModal] = useState(null);

  const [slideAtivo, setSlideAtivo] = useState(0);

  const [slideModalMercenaries, setSlideModalMercenaries] = useState(0);

  function caixaModaTheMercenariesSlides(index) {
    setMercenariesModal(index);
    setSlideModalMercenaries(0);
  }

  function botaoFhecharModalMercenaries() {
    setMercenariesModal(null);
  }

  const TheMercenariesSlides = [
    {
      imagens: ["./mercenaries-1.jpg", "./mercenaries-2.jpg"],

      titulo: "OS MERCENÁRIOS",

      subtitulo: 'O que é "Os Mercenários"?',

      texto:
        "Os Mercenários é um modo baseado em tempo em que você derrota hordas de inimigos para marcar uma pontuação alta. A princípio, você terá acesso a somente algumas armas, então se quiser fazer muitos pontos, é melhor saber quais armas são melhores para cada situação. Apenas o estágio do Vilarejo estará disponível no começo, mas você desbloqueará mais estágios e conteúdo à medida que jogar melhor.",
    },

    {
      imagens: [
        "./mercenaries-3.jpg",
        "./mercenaries-4.jpg",
        "./mercenaries-5.jpg",
      ],

      titulo: "Os Mercenários",

      subtitulo: "Orbes de Bônus de Tempo",

      texto:
        "Lembre-se: sua pontuação só sobe enquanto houver tempo no relógio. Para ganhar mais tempo, use golpes corpo a corpo em seus inimigos ou derrote poderosos oponentes específicos. Os orbes verdes de tempo vão prolongar o seu tempo, então colete-os como parte da sua estratégia.",
    },

    {
      imagens: ["./mercenaries-6.jpg", "./mercenaries-7.jpg"],

      titulo: "Os Mercenários",

      subtitulo: "Modo Caótico",

      texto:
        "Ative o Modo Caótico para ganhar um bônus temporário no seu ataque, velocidade e outros atributos. Você também ganhará mais pontos ao atacar inimigos e mais tempo ao derrotá-los. Seu medidor do Modo Caótico se preenche com o tempo, ao derrotar oponentes e ao aparar ataques. Além disso, você também pode preenchê-lo imediatamente ao coletar um Orbe de Reforço do Modo Caótico!",
    },
  ];

  const imagensModalMercenaries = [
    ["./mercenaries-1.jpg", "./mercenaries-2.jpg"],

    ["./mercenaries-3.jpg", "./mercenaries-4.jpg", "./mercenaries-5.jpg"],

    ["./mercenaries-6.jpg", "./mercenaries-7.jpg"],
  ];

  useEffect(() => {
    if (MercenariesModal === null) return;

    const intervalo = setInterval(() => {
      setSlideModalMercenaries((prev) => {
        return (prev + 1) % imagensModalMercenaries[MercenariesModal].length;
      });
    }, 3000);

    return () => clearInterval(intervalo);
  }, [MercenariesModal]);

  const swiperMercenariesRef = useRef(null);

  return (
    <>
      <div
        className="caixa-the-mercenaries"
        data-aos="fade-up"
        id="caixa-the-mercenaries"
      >
        <div className="caixa-titulo-dlc-2">
          <div className="caixa-info-dlc">
            <div className="pattern-inside-top"></div>

            <div className="caixa-pago-disponivel">
              <span className="dlc-gratuito-span">DLC Gratuito</span>

              <div className="divisor-2"></div>

              <span className="Ja-disponivel-dlc-2">Já disponível</span>
            </div>

            <div className="pattern-inside-bottom"></div>
          </div>

          <p className="atualizacao-p">Atualização liberada em 21/09/2023</p>

          <div className="caixa-texto-mercenaries">
            <img
              className="logo-the-mercenaries"
              src="./mercenaries_logo-titilo.png"
              alt="logo"
            />

            <p className="modo-mercenaries-p">
              A pedidos, o modo de jogo adicional "Os Mercenários" está de volta
              e disponível como DLC gratuito! <br />
              Curta a jogabilidade dinâmica que surpreendeu os fãs na época e
              retorna para surpreendê-los novamente!
            </p>
          </div>
        </div>

        <div className="caixa-conteudo-the-mercenaries" data-aos="zoom-out">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            effect="fade"
            fadeEffect={{ crossFade: false }}
            onSwiper={(swiper) => {
              console.log("SWIPER PRINCIPAL CARREGOU", swiper);
              swiperMercenariesRef.current = swiper;
            }}
            onSlideChange={(swiper) => {
              console.log("MUDOU SLIDE", swiper.activeIndex);
              setSlideAtivo(swiper.activeIndex);
            }}
            modules={[EffectFade]}
            className="swiper-dlc"
          >
            {TheMercenariesSlides.map((slide, index) => (
              <SwiperSlide className="slide-img-dlc" key={index}>
                <Swiper
                  effect="fade"
                  fadeEffect={{
                    crossFade: false,
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
                  className="swiper-imagens-mercenaries"
                >
                  {slide.imagens.map((img, imgIndex) => (
                    <SwiperSlide key={imgIndex}>
                      <img
                        className="img-swiper-dlc"
                        src={img}
                        alt={slide.subtitulo}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>

                <button
                  className="botao-modal"
                  onClick={() => caixaModaTheMercenariesSlides(index)}
                >
                  <img
                    className="botao-abrir-modal-the-mercenaries"
                    src="./botao-de-abrir-img.svg"
                    alt="Abrir imagem"
                  />
                </button>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="caixa-texto-mercenaries-slide">
            <span className="titulo-slide-mercenaries">
              {TheMercenariesSlides[slideAtivo].titulo}
            </span>

            <h2 className="subtitulo-slide-mercenaries">
              {TheMercenariesSlides[slideAtivo].subtitulo}
            </h2>

            <p className="texto-slide-mercenaries">
              {TheMercenariesSlides[slideAtivo].texto}
            </p>

            <div className="caixa-controles-mercenaries">
              <button
                className="seta-mercenaries seta-mercenaries-left"
                onClick={() => swiperMercenariesRef.current?.slidePrev()}
              >
                <img
                  className="seta-mercenaries-img"
                  src="./arrow_ic-r.svg"
                  alt="seta esquerda img"
                />
              </button>

              <div className="radios-mercenaries">
                {TheMercenariesSlides.map((_, index) => (
                  <span
                    key={index}
                    onClick={() => swiperMercenariesRef.current?.slideTo(index)}
                    className={`radio-mercenaries ${
                      slideAtivo === index ? "radio-mercenaries-active" : ""
                    }`}
                  ></span>
                ))}
              </div>

              <button
                className="seta-mercenaries seta-mercenaries-right"
                onClick={() => swiperMercenariesRef.current?.slideNext()}
              >
                <img
                  className="seta-mercenaries-img"
                  src="./arrow_ic-r.svg"
                  alt="seta direita img"
                />
              </button>
            </div>
          </div>
        </div>

        <div className="caixa-atualizacao-liberada" data-aos="fade-up">
          <div className="caixa-titulo-atualizacao">
            <span className="titulo-atualizacao-span">Atualização</span>

            <div className="caixa-titulo-edivisor ">
              <div className="divisor-3"></div>

              <p className="atualizacao-liberada">
                Atualização liberada em 21/09/2023
              </p>
            </div>
          </div>

          <div className="caixa-modos">
            <p className="titilo-ada">
              Ada Wong e Albert Wesker são os novos personagens do modo Os
              Mercenários!
            </p>

            <ul>
              <li className="caminhos-distintos-li">
                *Não é necessário ter o DLC Caminhos Distintos para comprar esta
                atualização.
              </li>

              <li className="caminhos-distintos-li">
                *Alguns personagens serão desbloqueados somente se certas
                condições no jogo forem cumpridas.
              </li>
            </ul>
          </div>

          <div className="caixa-titulo-atualizacao">
            <span className="titulo-atualizacao-span">Personagens</span>

            <div className="caixa-titulo-edivisor ">
              <div className="divisor-3"></div>

              <p className="atualizacao-liberada">Personagens Jogáveis</p>
            </div>
          </div>

          <div
            className="caixa-personagens-mercenaries-dlc"
            data-aos="zoom-out"
          >
            <div className="caixa-personagens-jogaveis">
              <img
                className="Personagens-mercenaries-img"
                src="./mercenaries_img-leon.png"
                alt="leon mercenaries img "
              />

              <p className="nome-personagens-mercenaries">Leon S. Kennedy</p>
            </div>

            <div className="caixa-personagens-jogaveis">
              <img
                className="Personagens-mercenaries-img"
                src="./mercenaries_img-luis.png"
                alt="luis mercenaries img "
              />

              <p className="nome-personagens-mercenaries">Luis Serra</p>
            </div>

            <div className="caixa-personagens-jogaveis">
              <img
                className="Personagens-mercenaries-img"
                src="./mercenaries_img-krauser.png"
                alt="krauser mercenaries img "
              />

              <p className="nome-personagens-mercenaries">Jack Krauser</p>
            </div>

            <div className="caixa-personagens-jogaveis">
              <img
                className="Personagens-mercenaries-img"
                src="./mercenaries_img-hunk.png"
                alt="hunk mercenaries img "
              />

              <p className="nome-personagens-mercenaries">Hunk</p>
            </div>

            <div className="caixa-personagens-jogaveis">
              <img
                className="Personagens-mercenaries-img"
                src="./mercenaries_img-ada.png"
                alt="ada mercenaries img "
              />

              <div className="caixa-bolinha">
                <div className="bolinha-vermelha"></div>

                <p className="nome-personagens-mercenaries-marcado">Ada Wong</p>
              </div>
            </div>

            <div className="caixa-personagens-jogaveis">
              <img
                className="Personagens-mercenaries-img"
                src="./mercenaries_img-wesker.png"
                alt="wesker mercenaries img "
              />

              <div className="caixa-bolinha">
                <div className="bolinha-vermelha"></div>

                <p className="nome-personagens-mercenaries-marcado">
                  Albert Wesker
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {MercenariesModal !== null &&
        createPortal(
          <div className="modal-mercenaries">
            <button
              className="botaofecharmodalMercenaries"
              onClick={botaoFhecharModalMercenaries}
            >
              X
            </button>

            <img
              className="img-modal-mercenaries"
              src={
                imagensModalMercenaries[MercenariesModal][slideModalMercenaries]
              }
              alt="Imagem modal mercenaries"
            />
          </div>,
          document.body,
        )}
    </>
  );
};

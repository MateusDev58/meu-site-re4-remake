import "./Vrmode.css";
import { useRef, useState } from "react";
import "./VrmodeResponsividade.css";
import { createPortal } from "react-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

const ListaVrMode = [
  {
    titulo: "Resident Evil 4 VR Mode",
    subtitulo: "Vivencie a imersão em VR",
    texto:
      "Curta o jogo em gráficos detalhados em 360°. Além disso, o áudio 3D realista eleva ainda mais a experiência imersiva do jogo.",
    imagens: ["./vrmode1_img.jpg", "./vrmode2_img.jpg", "./vrmode3_img.jpg"],
  },
  {
    titulo: "Resident Evil 4 VR Mode",
    subtitulo: "Manejo realista de armas",
    texto:
      "Com os controles Sense do PlayStation®VR2, você agora pode ver todas as características das armas, como as pistolas, escopetas, rifles e a sua faca. Aprecie a experiência realista de entrar em ação.",
    imagens: ["./vrmode4_img.jpg", "./vrmode5_img.jpg", "./vrmode6_img.jpg"],
  },
];

const listaModalVr = [
  {
    imagens: [
      "./modal-vrmode-01.jpg",
      "./modal-vrmode-02.jpg",
      "./modal-vrmode-03.jpg",
      "./modal-vrmode-04.jpg",
      "./modal-vrmode-05.jpg",
      "./modal-vrmode-06.jpg",
    ],
  },
];

export const Vrmode = () => {
  const [slideAtivo, setSlideAtivo] = useState(0);
  const [modalVr, setModalVr] = useState(false);
  const [slideModalVr, setSlideModalVr] = useState(0);

  const swiperVrRef = useRef(null);

  function btnAbrirModalVr(index) {
    setModalVr(true);
    setSlideModalVr(index);
  }

  function fecharModalVr() {
    setModalVr(false);
  }

  return (
    <div className="caixa-vr" data-aos="fade-up" id="caixa-vr">
      <div className="caixa-titulo-vr">
        <div className="caixa-info-dlc">
          <div className="pattern-inside-top"></div>

          <div className="caixa-pago-disponivel">
            <span className="dlc-gratuito-span">DLC Gratuito</span>

            <div className="divisor-2"></div>

            <span className="Ja-disponivel-dlc-2">Já disponível</span>
          </div>

          <div className="pattern-inside-bottom"></div>
        </div>

        <div className="caixa-logo-vr">
          <img
            className="logo-vrmode-img"
            src="./logo-vrmode.png"
            alt="logo vr mode"
          />

          <img
            className="logo-playstation-vr-img"
            src="./logo-playstation-vr.png"
            alt="logo playstation vr"
          />
        </div>

        <div className="caixa-botao-vr">
          <p className="PlayStation-vr2-p">
            Assuma o papel de Leon S. Kennedy e entre em uma missão de resgate
            terrível e assustadora, com a chegada de Resident Evil 4 para o
            PlayStation®VR2 como um DLC gratuito.
          </p>

          <a
            className="baixe-aqui"
            href="https://store.playstation.com/pt-br/product/UP0102-PPSA07411_00-RE4RDLC000000028"
            target="_blank"
          >
            PlayStation®Store | Baixe aqui
          </a>
        </div>
      </div>

      <div className="caixa-demo-gratuita">
        <div className="caixa-demo-vr" data-aos="zoom-out">
          <h3 className="titulo-demo-h3">
            Jogue a <span className="titulo-demo-h3-span">demo</span> gratuita
            para testar antes de comprar o jogo completo!
          </h3>

          <div className="caixa-texto-vr">
            <p className="demo-gratuita-p">
              Uma demo gratuita para todos será disponibilizada na PS Store no
              mesmo dia!
              <br />
              Experimente a sequência de abertura do jogo e a galeria de tiro;
              sinta o quão intuitivo é o manejo de armas cada vez que recarregar
              um tiro em VR!
            </p>

            <a
              className="download-da-demo"
              href="https://store.playstation.com/pt-br/product/UP0102-PPSA18999_00-RE4RDEMOVR000000"
              target="_blank"
            >
              PlayStation®Store | Download da Demo
            </a>
          </div>
        </div>

        <div className="caixa-conteudo-vr" data-aos="zoom-out">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            effect="fade"
            fadeEffect={{ crossFade: false }}
            onSwiper={(swiper) => {
              swiperVrRef.current = swiper;
            }}
            onSlideChange={(swiper) => {
              setSlideAtivo(swiper.realIndex);
            }}
            modules={[EffectFade]}
            className="swiper-dlc"
          >
            {ListaVrMode.map((slide, index) => (
              <SwiperSlide className="slide-img-dlc" key={index}>
                <Swiper
                  // nested={true}
                  effect="fade"
                  fadeEffect={{ crossFade: false }}
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

                      <button
                        className="botao-modal-vr"
                        onClick={() => btnAbrirModalVr(imgIndex + index * 3)}
                      >
                        <img
                          className="botao-abrir-modal-vr"
                          src="./botao-de-abrir-img.svg"
                          alt="Abrir imagem"
                        />
                      </button>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="caixa-texto-mercenaries-slide">
            <span className="titulo-slide-mercenaries">
              {ListaVrMode[slideAtivo].titulo}
            </span>

            <h2 className="subtitulo-slide-mercenaries">
              {ListaVrMode[slideAtivo].subtitulo}
            </h2>

            <p className="texto-slide-mercenaries">
              {ListaVrMode[slideAtivo].texto}
            </p>

            <div className="caixa-controles-mercenaries">
              <button
                className="seta-mercenaries seta-mercenaries-left"
                onClick={() => swiperVrRef.current?.slidePrev()}
              >
                <img
                  className="seta-mercenaries-img"
                  src="./arrow_ic-r.svg"
                  alt="seta esquerda img"
                />
              </button>

              <div className="radios-mercenaries">
                {ListaVrMode.map((_, index) => (
                  <span
                    key={index}
                    onClick={() => swiperVrRef.current?.slideTo(index)}
                    className={`radio-mercenaries ${
                      slideAtivo === index ? "radio-mercenaries-active" : ""
                    }`}
                  ></span>
                ))}
              </div>

              <button
                className="seta-mercenaries seta-mercenaries-right"
                onClick={() => swiperVrRef.current?.slideNext()}
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

        <div className="caixa-resident-evil-4-vr">
          <div className="caixa-traco">
            <div className="traco-vr"></div>

            <h3 className="resident-evil-4-h3">
              Resident Evil 4 VR Mode <br className="resident-evil-4-h3-br" />
              <small className="resident-evil-4-h3-small">
                (Conteúdo baixável de Resident Evil 4 no PlayStation®5)
              </small>
            </h3>
          </div>

          <ul className="lista-sistema-ul">
            <li className="lista-sistema-li">
              Sistema: PlayStation®VR2 (PlayStation®5)
            </li>

            <li className="lista-sistema-li">Gênero: Survival Horror</li>

            <li className="lista-sistema-li">
              Data de Lançamento: Já disponível
            </li>

            <li className="lista-sistema-li">Preço: Gratuito</li>
          </ul>

          <ul className="lista-acesso-ul">
            <li className="lista-acesso-li">
              *Para acessar este conteúdo, você deve possuir o jogo Resident
              Evil 4.
            </li>

            <li className="lista-acesso-li">
              *Este DLC não é compatível com os modos Caminhos Distintos e Os
              Mercenários.
            </li>
          </ul>
        </div>

        {modalVr &&
          createPortal(
            <div className="modal-vr">
              <button className="botao-fechar-modal-vr" onClick={fecharModalVr}>
                X
              </button>

              <img
                className="img-modal-vr"
                src={listaModalVr[0].imagens[slideModalVr]}
                alt="Imagem modal VR"
              />
            </div>,
            document.body,
          )}
      </div>
    </div>
  );
};

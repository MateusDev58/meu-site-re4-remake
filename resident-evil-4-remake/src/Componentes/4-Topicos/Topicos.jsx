import "./Topicos.css";
import "./TopicosResponsividade.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef, useEffect } from "react";
import AOS from "aos";

import "swiper/css";
import "swiper/css/navigation";

export const Topicos = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.params.navigation.nextEl =
        document.querySelector(".botao-proximo");

      swiperRef.current.params.navigation.prevEl =
        document.querySelector(".botao-anterior");

      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }

    AOS.refresh();
  }, []);

  return (
    <section className="caixa-topicos" data-aos="fade-left">
      <div className="caixa-conteudo-topicos">
        <div className="topicos-navegacao">
          <span className="topico-span">TÓPICOS</span>

          <div className="grupo-botoes">
            <div className="barra-carrossel">
              <div className="barra-progresso"></div>
            </div>

            <div className="botao-anterior">
              <svg
                className="seta"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="16 4 8 12 16 20" />
              </svg>
            </div>

            <div className="botao-proximo">
              <svg
                className="seta"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="8 4 16 12 8 20" />
              </svg>
            </div>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          slidesPerView={"auto"}
          spaceBetween={30}
          slidesOffsetAfter={30}
          centeredSlidesBounds={true}
          watchOverflow={true}
          grabCursor={true}
          navigation={{
            nextEl: ".botao-proximo",
            prevEl: ".botao-anterior",
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.nextEl = ".botao-proximo";
            swiper.params.navigation.prevEl = ".botao-anterior";
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;

            if (swiper.navigation) {
              swiper.navigation.update();
            }

            // Barra de progresso
            const updateBar = () => {
              const barra = document.querySelector(".barra-progresso");
              const container = document.querySelector(".barra-carrossel");

              if (!barra || !container) return;

              const progress = swiper.progress;
              const maxMove = container.offsetWidth - barra.offsetWidth;

              barra.style.transform = `translateX(${progress * maxMove}px)`;
            };

            updateBar();
            swiper.on("progress", updateBar);
            swiper.on("slideChange", updateBar);
            swiper.on("setTranslate", updateBar);
          }}
        >
          {/* CARD 1 */}
          <SwiperSlide>
            <div className="caixa-noticias">
              <a
                className="link-card"
                href="https://game.capcom.com/residentevil/en/news-4270.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="img-topicos-wrapper">
                  <img
                    className="img-topicos"
                    src="./imagens-topicos-1.jpg"
                    alt="imagens topicos"
                  />
                </p>

                <div className="caixa-texto-topicos">
                  <p className="texto-topicos-p">
                    Este pacote de grande valor contém três <br /> títulos
                    remake de Resident Evil, e <br /> conteúdo adicional.
                  </p>

                  <p className="caixa-topicos-anos">
                    <span className="data">22/11</span>
                    <small className="data-small">2024</small>
                  </p>
                </div>
              </a>
            </div>
          </SwiperSlide>

          {/* CARD 2 */}
          <SwiperSlide>
            <div className="caixa-noticias">
              <a className="link-card" href="#loja" rel="noopener noreferrer">
                <p className="img-topicos-wrapper">
                  <img
                    className="img-topicos"
                    src="./imagens-topicos-2.jpg"
                    alt="imagens topicos 2"
                  />
                </p>

                <div className="caixa-texto-topicos">
                  <p className="texto-topicos-p">
                    Resident Evil 4 Gold Edition já está disponível e inclui o
                    modo história adicional Caminhos Distintos e o conjunto de
                    DLC extra!
                  </p>

                  <p className="caixa-topicos-anos">
                    <span className="data">8/2</span>
                    <small className="data-small">2024</small>
                  </p>
                </div>
              </a>
            </div>
          </SwiperSlide>

          {/* CARD 3 */}
          <SwiperSlide>
            <div className="caixa-noticias">
              <a
                className="link-card"
                href="#caixa-vr"
                rel="noopener noreferrer"
              >
                <p className="img-topicos-wrapper">
                  <img
                    className="img-topicos"
                    src="./imagens-topicos-3.jpg"
                    alt="imagens topicos 3"
                  />
                </p>

                <div className="caixa-texto-topicos">
                  <p className="texto-topicos-p">
                    Resident Evil 4 VR Mode para PSVR2 está disponível! Não
                    possui o jogo principal? Sem problemas! Teste a demo
                    gratuita antes de comprar o jogo completo!
                  </p>

                  <p className="caixa-topicos-anos">
                    <span className="data">7/12</span>
                    <small className="data-small">2023</small>
                  </p>
                </div>
              </a>
            </div>
          </SwiperSlide>

          {/* CARD 4 */}
          <SwiperSlide>
            <div className="caixa-noticias">
              <a
                className="link-card"
                href="https://www.residentevil.com/re4/pt-br/topics/update/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="img-topicos-wrapper">
                  <img
                    className="img-topicos"
                    src="./imagens-topicos-4.jpg"
                    alt="imagens topicos 4"
                  />
                </p>

                <div className="caixa-texto-topicos">
                  <p className="texto-topicos-p">
                    Resident Evil 4 - Atualização de Jogo
                  </p>

                  <p className="caixa-topicos-anos">
                    <span className="data">7/12</span>
                    <small className="data-small">2023</small>
                  </p>
                </div>
              </a>
            </div>
          </SwiperSlide>

          {/* CARD 5 */}
          <SwiperSlide>
            <div className="caixa-noticias">
              <a
                className="link-card"
                href="https://www.capcom-games.com/apple/pt-br/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="img-topicos-wrapper">
                  <img
                    className="img-topicos"
                    src="./imagens-topicos-5.jpg"
                    alt="imagens topicos 5"
                  />
                </p>

                <div className="caixa-texto-topicos">
                  <p className="texto-topicos-p">
                    Resident Evil 4 está chegando aos dispositivos Apple no fim
                    deste ano!
                  </p>

                  <p className="caixa-topicos-anos">
                    <span className="data">12/9</span>
                    <small className="data-small">2023</small>
                  </p>
                </div>
              </a>
            </div>
          </SwiperSlide>

          {/* CARD 6 */}
          <SwiperSlide>
            <div className="caixa-noticias">
              <a
                className="link-card"
                href="https://www.capcom-games.com/tgs/pt-br/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="img-topicos-wrapper">
                  <img
                    className="img-topicos"
                    src="./imagens-topicos-6.jpg"
                    alt="imagens topicos 6"
                  />
                </p>

                <div className="caixa-texto-topicos">
                  <p className="texto-topicos-p">
                    Presença confirmada na Tokyo Game Show 2023!
                  </p>

                  <p className="caixa-topicos-anos">
                    <span className="data">16/8</span>
                    <small className="data-small">2023</small>
                  </p>
                </div>
              </a>
            </div>
          </SwiperSlide>

          {/* CARD 7 */}
          <SwiperSlide>
            <div className="caixa-noticias">
              <a
                className="link-card"
                href="#caixa-the-mercenaries"
                rel="noopener noreferrer"
              >
                <p className="img-topicos-wrapper">
                  <img
                    className="img-topicos"
                    src="./imagens-topicos-7.jpg"
                    alt="imagens topicos 7"
                  />
                </p>

                <div className="caixa-texto-topicos">
                  <p className="texto-topicos-p">
                    O modo de jogo adicional "Os Mercenários" já está disponível
                    como DLC gratuito!
                  </p>

                  <p className="caixa-topicos-anos">
                    <span className="data">6/4</span>
                    <small className="data-small">2023</small>
                  </p>
                </div>
              </a>
            </div>
          </SwiperSlide>

          {/* CARD 8 */}
          <SwiperSlide>
            <div className="caixa-noticias">
              <a className="link-card" href="#loja" rel="noopener noreferrer">
                <p className="img-topicos-wrapper">
                  <img
                    className="img-topicos"
                    src="./imagens-topicos-8.jpg"
                    alt="imagens topicos 8"
                  />
                </p>

                <div className="caixa-texto-topicos">
                  <p className="texto-topicos-p">
                    A pré-venda de Resident Evil 4 já está disponível!
                  </p>

                  <p className="caixa-topicos-anos">
                    <span className="data">20/10</span>
                    <small className="data-small">2022</small>
                  </p>
                </div>
              </a>
            </div>
          </SwiperSlide>

          {/* CARD 9 */}
          <SwiperSlide>
            <div className="caixa-noticias">
              <a
                className="link-card"
                href="https://www.residentevil.com/showcase/pt-br/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="img-topicos-wrapper">
                  <img
                    className="img-topicos"
                    src="./imagens-topicos-9.jpg"
                    alt="imagens topicos 9"
                  />
                </p>

                <div className="caixa-texto-topicos">
                  <p className="texto-topicos-p">
                    O vídeo arquivado do Resident Evil Showcase transmitido em
                    21 de outubro já está disponível!
                  </p>

                  <p className="caixa-topicos-anos">
                    <span className="data">20/10</span>
                    <small className="data-small">2022</small>
                  </p>
                </div>
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

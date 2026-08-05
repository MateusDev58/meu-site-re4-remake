import "./Trailer.css";
import "./TrailerResponsividade.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";

export const Trailer = () => {
  const swiperRef = useRef(null);
  const barraRef = useRef(null);
  const barraContainerRef = useRef(null);

  return (
    <section className="caixa-trailer trailer">
      <div className="caixa-conteudo-topicos" data-aos="fade-left">
        <div className="topicos-navegacao">
          <span className="topico-span">TRAILER</span>

          <div className="grupo-botoes">
            <div ref={barraContainerRef} className="barra-carrossel">
              <div ref={barraRef} className="barra-progresso"></div>
            </div>

            <div className="botao-anterior-trailer">
              <svg
                className="seta"
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="16 4 8 12 16 20" />
              </svg>
            </div>

            <div className="botao-proximo-trailer">
              <svg
                className="seta"
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
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
            prevEl: ".botao-anterior-trailer",
            nextEl: ".botao-proximo-trailer",
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;

            const updateBar = () => {
              const barra = barraRef.current;
              const container = barraContainerRef.current;

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
          <SwiperSlide>
            <div className="caixa-trailer-card">
              <a
                className="link-card"
                href="https://www.youtube.com/watch?v=KtxuN93e0ps"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="./trailer-1.jpg"
                  alt="Trailer 1"
                  className="img-trailer"
                />
                <img
                  src="./logo-youtube.svg"
                  alt="Play"
                  className="play-icon"
                />
                <img
                  src="./logo-youtube-vermelha.svg"
                  alt="Play"
                  className="play-icon-hover"
                />
                <span className="trailer-legenda">
                  Resident Evil 4 Gold Edition - Trailer de Lançamento
                </span>
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="caixa-trailer-card">
              <a
                className="link-card"
                href="https://www.youtube.com/watch?v=Pfn8M1dKTWo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="./trailer-2.jpg"
                  alt="Trailer 2"
                  className="img-trailer"
                />
                <img
                  src="./logo-youtube.svg"
                  alt="Play"
                  className="play-icon"
                />
                <img
                  src="./logo-youtube-vermelha.svg"
                  alt="Play"
                  className="play-icon-hover"
                />
                <span className="trailer-legenda">
                  Resident Evil 4 VR Mode - Trailer de Lançamento
                </span>
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="caixa-trailer-card">
              <a
                className="link-card"
                href="https://www.youtube.com/watch?v=LHe_FY1OCsc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="./trailer-3.jpg"
                  alt="Trailer 3"
                  className="img-trailer"
                />
                <img
                  src="./logo-youtube.svg"
                  alt="Play"
                  className="play-icon"
                />
                <img
                  src="./logo-youtube-vermelha.svg"
                  alt="Play"
                  className="play-icon-hover"
                />
                <span className="trailer-legenda">
                  Resident Evil 4 Separate Ways - Trailer de Lançamento
                </span>
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="caixa-trailer-card">
              <a
                className="link-card"
                href="https://www.youtube.com/watch?v=p64mGfwGqrA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="./trailer-4.jpg"
                  alt="Trailer 4"
                  className="img-trailer"
                />
                <img
                  src="./logo-youtube.svg"
                  alt="Play"
                  className="play-icon"
                />
                <img
                  src="./logo-youtube-vermelha.svg"
                  alt="Play"
                  className="play-icon-hover"
                />
                <span className="trailer-legenda">
                  Resident Evil 4 - Trailer de revelação do DLC
                </span>
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="caixa-trailer-card">
              <a
                className="link-card"
                href="https://www.youtube.com/watch?v=fhEycOmuZ3s"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="./trailer-5.jpg"
                  alt="Trailer 5"
                  className="img-trailer"
                />
                <img
                  src="./logo-youtube.svg"
                  alt="Play"
                  className="play-icon"
                />
                <img
                  src="./logo-youtube-vermelha.svg"
                  alt="Play"
                  className="play-icon-hover"
                />
                <span className="trailer-legenda">
                  Resident Evil 4 VR Mode - Teaser Trailer
                </span>
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="caixa-trailer-card">
              <a
                className="link-card"
                href="https://www.youtube.com/watch?v=jTfqTNE6nG4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="./trailer-6.jpg"
                  alt="Trailer 6"
                  className="img-trailer"
                />
                <img
                  src="./logo-youtube.svg"
                  alt="Play"
                  className="play-icon"
                />
                <img
                  src="./logo-youtube-vermelha.svg"
                  alt="Play"
                  className="play-icon-hover"
                />
                <span className="trailer-legenda">
                  Resident Evil 4 - The Mercenaries Trailer
                </span>
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="caixa-trailer-card">
              <a
                className="link-card"
                href="https://www.youtube.com/watch?v=6SKxK-mf81k"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="./trailer-7.jpg"
                  alt="Trailer 7"
                  className="img-trailer"
                />
                <img
                  src="./logo-youtube.svg"
                  alt="Play"
                  className="play-icon"
                />
                <img
                  src="./logo-youtube-vermelha.svg"
                  alt="Play"
                  className="play-icon-hover"
                />
                <span className="trailer-legenda">
                  Resident Evil 4 - Trailer de Lançamento
                </span>
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="caixa-trailer-card">
              <a
                className="link-card"
                href="https://www.youtube.com/watch?v=q2iqM5RRhMU&t=2013s"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="./trailer-8.jpg"
                  alt="Trailer 8"
                  className="img-trailer"
                />
                <img
                  src="./logo-youtube.svg"
                  alt="Play"
                  className="play-icon"
                />
                <img
                  src="./logo-youtube-vermelha.svg"
                  alt="Play"
                  className="play-icon-hover"
                />
                <span className="trailer-legenda">
                  Capcom Spotlight | 2023.3.10
                </span>
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="caixa-trailer-card">
              <a
                className="link-card"
                href="https://www.youtube.com/watch?v=hfUssEhfg0k"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="./trailer-9.jpg"
                  alt="Trailer 9"
                  className="img-trailer"
                />
                <img
                  src="./logo-youtube.svg"
                  alt="Play"
                  className="play-icon"
                />
                <img
                  src="./logo-youtube-vermelha.svg"
                  alt="Play"
                  className="play-icon-hover"
                />
                <span className="trailer-legenda">
                  Resident Evil 4 - 3º Trailer
                </span>
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="caixa-trailer-card">
              <a
                className="link-card"
                href="https://www.youtube.com/watch?v=JT2puUySAXk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="./trailer-10.jpg"
                  alt="Trailer 10"
                  className="img-trailer"
                />
                <img
                  src="./logo-youtube.svg"
                  alt="Play"
                  className="play-icon"
                />
                <img
                  src="./logo-youtube-vermelha.svg"
                  alt="Play"
                  className="play-icon-hover"
                />
                <span className="trailer-legenda">
                  Resident Evil 4 - 2º Trailer
                </span>
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="caixa-trailer-card">
              <a
                className="link-card"
                href="https://www.youtube.com/watch?v=YnQfJvSf4BI&t=3456s"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="./trailer-11.jpg"
                  alt="Trailer 11"
                  className="img-trailer"
                />
                <img
                  src="./logo-youtube.svg"
                  alt="Play"
                  className="play-icon"
                />
                <img
                  src="./logo-youtube-vermelha.svg"
                  alt="Play"
                  className="play-icon-hover"
                />
                <span className="trailer-legenda">Capcom Showcase 2022</span>
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="caixa-trailer-card">
              <a
                className="link-card"
                href="https://www.youtube.com/watch?v=135k8MFJ_nM"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="./trailer-12.jpg"
                  alt="Trailer 12"
                  className="img-trailer"
                />
                <img
                  src="./logo-youtube.svg"
                  alt="Play"
                  className="play-icon"
                />
                <img
                  src="./logo-youtube-vermelha.svg"
                  alt="Play"
                  className="play-icon-hover"
                />
                <span className="trailer-legenda">Trailer de Anúncio</span>
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

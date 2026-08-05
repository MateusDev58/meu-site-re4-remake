import "./Localizacao.css";
import "./LocalizacaoResponsividade.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const Localizacao = () => {
  const BREAKPOINT = 768;

  return (
    <div className="caixa-localizacao">
      <div className="caixa-conteudo-localizacao">
        <div className="caixa-titulo-localizacao">
          <span className="localizacao-span">LOCALIZAÇÃO</span>
          <div className="vertical-localizacao"></div>
          <p
            className="vila-p"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="120"
          >
            Uma vila europeia isolada cercada por uma floresta.
            <br className="quebra-linha" />
            Há rumores de ser o lar de um culto misterioso.
          </p>
        </div>

        <div
          className="caixa-carrossel-localizacao"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="120"
        >
          <Swiper
            breakpoints={{
              0: {
                slidesPerView: "auto",
                centeredSlides: true,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: "auto",
                centeredSlides: true,
                spaceBetween: 30,
              },
            }}
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            speed={1000}
            loop={true}
            rewind={true}
            initialSlide={0}
            preloadImages={true}
            updateOnImagesReady={true}
            navigation={{
              nextEl: ".btn-next-direita",
              prevEl: ".btn-prev-esquerda",
            }}
            pagination={{
              el: ".custom-pagination",
              clickable: true,
            }}
            className="mySwiper swiper-centered"
          >
            <SwiperSlide className="slide-localizacao">
              <img
                className="imagens-localizacao"
                src="./localizacao_img01.jpg"
              />
            </SwiperSlide>

            <SwiperSlide className="slide-localizacao">
              <img
                className="imagens-localizacao"
                src="./localizacao_img02.jpg"
              />
            </SwiperSlide>

            <SwiperSlide className="slide-localizacao">
              <img
                className="imagens-localizacao"
                src="./localizacao_img03.jpg"
              />
            </SwiperSlide>

            <SwiperSlide className="slide-localizacao">
              <img
                className="imagens-localizacao"
                src="./localizacao_img04.jpg"
              />
            </SwiperSlide>

            <SwiperSlide className="slide-localizacao">
              <img
                className="imagens-localizacao"
                src="./localizacao_img05.jpg"
              />
            </SwiperSlide>

            <SwiperSlide className="slide-localizacao">
              <img
                className="imagens-localizacao"
                src="./localizacao_img06.jpg"
              />
            </SwiperSlide>

            <SwiperSlide className="slide-localizacao">
              <img
                className="imagens-localizacao"
                src="./localizacao_img07.jpg"
              />
            </SwiperSlide>
          </Swiper>

          <div className="controles-carrossel">
            <button className="btn-prev-esquerda">‹</button>
            <div className="custom-pagination"></div>
            <button className="btn-next-direita">›</button>
          </div>
        </div>
      </div>
    </div>
  );
};

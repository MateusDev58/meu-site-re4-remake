import "./Jogabilidade.css";
import "./JogabilidadeResponsividade.css";
import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";
import "swiper/css";

const listaGameplay = [
  {
    titulo: "AÇÃO",
    descricao: "Perspectiva em Terceira Pessoa",
    texto:
      "A perspectiva da câmera é em terceira pessoa, como você se lembra do Resident Evil 4 original. Com gráficos atualizados, a sensação de isolamento e estranheza do jogo original se intensifica ainda mais. Os controles foram refinados para padrões modernos que aprimoram a jogabilidade, enfatizando a luta do Leon pela sobrevivência.",
    video: "./video-acao-01.mp4",
    poster: "./poster-acao-1.jpg",
  },

  {
    titulo: "AÇÃO",
    descricao: "Combate a Distância",
    texto:
      " Mire e atire através da Perspectiva em Terceira Pessoa. Mire bem e escolha seus alvos com cuidado para economizar munição. \n Enfraqueça seus inimigos atirando na cabeça e nas pernas, dando abertura para ataques corpo a corpo, e execute-os sem consumir munição.",
    video: "./video-acao-02.mp4",
    poster: "./poster-acao-2.jpg",
  },

  {
    titulo: "AÇÃO",
    descricao: "Ações com a Faca",
    texto:
      "Além de atacar, agora você pode aparar ataques e finalizar inimigos caídos utilizando a sua faca. \n Porém, qualquer ação com a faca reduzirá sua durabilidade. Só use quando for realmente necessário; é melhor guardá-la para circunstâncias extremas, ou você pode acabar ficando sem ter como se defender.",
    video: "./video-acao-03.mp4",
    poster: "./poster-acao-3.jpg",
  },
];

const listaRecursos = [
  {
    titulo: "GESTÃO DE RECURSOS",
    descricao: "Maleta",
    texto:
      "Carregue armas, munições, ervas curativas e outros itens úteis na maleta. \n  O gerenciamento eficaz dos itens no espaço limitado fornecido é essencial para a sua sobrevivência.",
    video: "./video-recursos-01.mp4",
    poster: "./poster-recursos-01.jpg",
  },

  {
    titulo: "GESTÃO DE RECURSOS",
    descricao: "Criação de Itens",
    texto:
      "Além de combinar ervas curativas, agora você pode criar munição e outros itens úteis. \n Se a sua maleta estiver ficando cheia, criar itens é uma boa maneira de liberar espaço.",
    video: "./video-recursos-02.mp4",
    poster: "./poster-recursos-02.jpg",
  },

  {
    titulo: "GESTÃO DE RECURSOS",
    descricao: "O Mercador",
    texto:
      "Compre armas e itens, melhore suas armas ou negocie mercadorias especiais na loja do Mercador. \n O Mercador consegue até consertar facas quebradas. \n *(Aplica-se apenas à faca padrão do Leon.)",
    video: "./video-recursos-03.mp4",
    poster: "./poster-recursos-03.jpg",
  },

  {
    titulo: "GESTÃO DE RECURSOS",
    descricao: "Negociação",
    texto:
      "Itens que não podem ser comprados com dinheiro normal podem ser trocados por gemas.",
    video: "./video-recursos-04.mp4",
    poster: "./poster-recursos-04.jpg",
  },
];

export const Jogabilidade = () => {
  const [tocando, setTocando] = useState({});
  const swiperRef = useRef(null);
  const swiperRef2 = useRef(null);
  const [recursoAtivo, setRecursoAtivo] = useState(0);
  const [gameplayAtivo, setGameplayAtivo] = useState(0);

  const handlePlay = (e, index, tipo) => {
    const video = e.currentTarget.querySelector("video");
    if (!video) return;

    const chave = `${tipo}-${index}`;

    const todosVideos = e.currentTarget
      .closest(".caixa-acao")
      .querySelectorAll(".video-acao");

    todosVideos.forEach((v) => {
      if (v !== video) {
        v.pause();
      }
    });

    if (video.paused) {
      video.play();

      setTocando((prev) => ({
        ...prev,
        [chave]: true,
      }));
    } else {
      video.pause();

      setTocando((prev) => ({
        ...prev,
        [chave]: false,
      }));
    }
  };

  return (
    <div className="caixa-jogabilidade">
      <div className="caixa-conteudo-jogabilidade">
        <div className="caixa-titulo-jogabilidade">
          <span className="jogabilidade-span">JOGABILIDADE</span>

          <div className="caixa-linha-e-texto" data-aos="fade-up">
            <div className="vertical-localizacao"></div>

            <p className="caminho-p">
              Abra caminho entre os horrores ao seu redor utilizando
              contra-ataques armados, golpes corpo a corpo e a nova manobra de
              aparar com a faca, além de várias outras ações à sua disposição.
              Garanta a sua sobrevivência com táticas inteligentes, bom
              gerenciamento de itens e melhorias estratégicas de armas.
            </p>
          </div>
        </div>

        <div className="caixa-acao" data-aos="fade-up">
          <Swiper
            className="swiper-jogabilidade "
            modules={[EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            slidesPerView={1}
            watchSlidesProgress={true}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => {
              setGameplayAtivo(swiper.activeIndex);
              setTimeout(() => {
                swiper.update();
              }, 50);
            }}
          >
            {listaGameplay.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="conteudo-acao">
                  <div className="caixa-texto-acao">
                    <h3 className="titulo-acao">{item.titulo}</h3>

                    <p className="descricao-acao">{item.descricao}</p>

                    <p className="texto-acao">{item.texto}</p>

                    <div className="caixa-controle-acao">
                      <button
                        className="seta-acao esquerda"
                        onClick={() => swiperRef.current?.slidePrev()}
                      >
                        ‹
                      </button>

                      <div className="barras-acao">
                        {listaGameplay.map((_, index) => (
                          <span
                            key={index}
                            className={`barra ${
                              gameplayAtivo === index ? "ativa" : ""
                            }`}
                            onClick={() => swiperRef.current?.slideTo(index)}
                          />
                        ))}
                      </div>

                      <button
                        className="seta-acao direita"
                        onClick={() => swiperRef.current?.slideNext()}
                      >
                        ›
                      </button>
                    </div>
                  </div>

                  <div
                    className="container-video"
                    onClick={(e) => handlePlay(e, i, "gameplay")}
                  >
                    <div className="video-wrapper">
                      <img
                        src={item.poster}
                        className="poster-img"
                        style={{
                          opacity: tocando[`gameplay-${i}`] ? 0 : 1,
                        }}
                      />

                      <video
                        className="video-acao"
                        src={item.video}
                        preload="none"
                        playsInline
                        muted
                        style={{
                          opacity: tocando[`gameplay-${i}`] ? 1 : 0,
                        }}
                        onEnded={(e) => {
                          const video = e.target;

                          video.pause();
                          video.currentTime = 0;

                          const chave = `gameplay-${i}`;

                          setTocando((prev) => ({
                            ...prev,
                            [chave]: false,
                          }));
                        }}
                      ></video>

                      {!tocando[`gameplay-${i}`] && (
                        <div className="overlay-play">
                          <img
                            className="gameplay-icone-play"
                            src="./gameplay-icone-play.svg"
                            alt="icone play"
                          />
                          <p className="preview">preview</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* GESTÃO DE RECURSOS */}

        <div className="caixa-acao caixa-recursos" data-aos="fade-up">
          <Swiper
            className="swiper-jogabilidade"
            modules={[EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: false }}
            slidesPerView={1}
            onSwiper={(swiper) => (swiperRef2.current = swiper)}
            onSlideChange={(swiper) => setRecursoAtivo(swiper.activeIndex)}
          >
            {listaRecursos.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="conteudo-acao invertido">
                  <div className="caixa-texto-recursos">
                    <h3 className="titulo-acao">{item.titulo}</h3>

                    <p className="descricao-acao">{item.descricao}</p>

                    <p className="texto-acao">{item.texto}</p>

                    <div className="caixa-controle-acao">
                      <button
                        className="seta-acao esquerda"
                        onClick={() => swiperRef2.current?.slidePrev()}
                      >
                        ‹
                      </button>

                      <div className="barras-acao">
                        {listaRecursos.map((_, index) => (
                          <span
                            key={index}
                            className={`barra ${
                              recursoAtivo === index ? "ativa" : ""
                            }`}
                            onClick={() => swiperRef2.current?.slideTo(index)}
                          />
                        ))}
                      </div>

                      <button
                        className="seta-acao direita"
                        onClick={() => swiperRef2.current?.slideNext()}
                      >
                        ›
                      </button>
                    </div>
                  </div>

                  <div
                    className="container-video"
                    onClick={(e) => handlePlay(e, i, "recursos")}
                  >
                    <img
                      src={item.poster}
                      className="poster-img"
                      style={{
                        opacity: tocando[`recursos-${i}`] ? 0 : 1,
                      }}
                    />

                    <video
                      className="video-acao"
                      src={item.video}
                      preload="none"
                      playsInline
                      muted
                      style={{
                        opacity: tocando[`recursos-${i}`] ? 1 : 0,
                      }}
                      onEnded={(e) => {
                        const video = e.target;

                        video.pause();
                        video.currentTime = 0;

                        const chave = `recursos-${i}`;

                        setTocando((prev) => ({
                          ...prev,
                          [chave]: false,
                        }));
                      }}
                    ></video>

                    {!tocando[`recursos-${i}`] && (
                      <div className="overlay-play">
                        <img
                          className="gameplay-icone-play"
                          src="./gameplay-icone-play.svg"
                          alt="icone play"
                        />
                        <p className="preview">preview</p>
                      </div>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

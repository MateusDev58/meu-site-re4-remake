import "./Personagem.css";
import "./PersonagemResponsividade.css";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";
import { Navigation } from "swiper/modules";

const listaCarrossel = [
  {
    nome: "Item 1",
    personagem: "Leon S. Kennedy",
    descricao:
      "Leon S. Kennedy, um policial novato quando o incidente de Raccoon City ocorreu há 6 anos, tornou-se um agente trabalhando diretamente sob o presidente. \n Tendo passado por diversas missões desde o incidente, Leon amadureceu significativamente.",
    imagens: ["./carrossel-img-leon-01.jpg", "./carrossel-img-leon-02.jpg"],
    imagensMobile: ["./Mobile-leon-01.png", "./Mobile-leon-02.png"],
    modal: ["./modal-leon-01.jpg", "./modal-leon-02.jpg"],
  },

  {
    nome: "Item 2",
    personagem: "Ashley Graham",
    descricao:
      "A filha desaparecida do presidente dos Estados Unidos. Leon parte para uma vila isolada na Europa em busca dela.",
    imagens: ["./carrossel-img-ashley-01.jpg", "./carrossel_img-ashley-02.jpg"],
    imagensMobile: ["./Mobile-ashley-01.png", "./Mobile-ashley-02.png"],
    modal: ["./modal-ashley-01.jpg", "./modal-ashley-02.jpg"],
  },

  {
    nome: "Item 3",
    personagem: "Ada Wong",
    descricao:
      "Juntou-se a Leon durante o Incidente em Raccoon City, mas desapareceu durante a destruição do laboratório subterrâneo da Umbrella. Ela reaparece subitamente, mas seu verdadeiro objetivo permanece um mistério.",
    imagens: ["./carrossel-img-ada.jpg"],
    imagensMobile: ["./Mobile-ada.png"],
    modal: "./modal-ada.jpg",
  },

  {
    nome: "Item 4",
    personagem: "Aldeão com  \n motosserra",
    imagens: ["./carrossel_img-chainsaw.jpg"],
    imagensMobile: ["./Mobile-chainsaw-01.png"],
    modal: "./modal-chainsaw.jpg",
  },

  {
    nome: "Item 5",
    personagem: "Ramón Salazar",
    descricao:
      "O oitavo líder da família Salazar, que tem governado a região onde Ashley parece ter desaparecido.",
    imagens: [
      "./carrossel-img-salazar-01.jpg",
      "./carrossel_img-salazar-02.jpg",
    ],

    imagensMobile: ["./Mobile-salazar-01.png", "./Mobile-salazar-02.png"],
    modal: ["./modal-salazar-01.jpg", "./modal-salazar-02.jpg"],
  },

  {
    nome: "Item 6",
    personagem: "Mercador",
    descricao:
      "Um misterioso comerciante de armas que aparece em vários locais. Ele não apenas compra e vende armas e itens, mas também é capaz de aprimorar as armas que já estão em posse de Leon, bem como trocar por mercadorias especiais.",
    imagens: ["./carrossel_img-merchant.jpg"],

    imagensMobile: ["./Mobile-merchant-01.png"],
    modal: "./modal-merchant.jpg",
  },

  {
    nome: "Item 7",
    personagem: "Osmund Saddler",
    descricao:
      "O atual líder de Los Iluminados, um poderoso culto religioso que há muito existe na região.",
    imagens: [
      "./carrossel_img-saddler-01.jpg",
      "./carrossel_img-saddler-02.jpg",
    ],

    imagensMobile: ["./Mobile-saddler-01.png", "./Mobile-saddler-02.png"],
    modal: ["./modal-saddler-01.jpg", "./modal-saddler-02.jpg"],
  },

  {
    nome: "Item 8",
    personagem: "Luis Serra",
    descricao:
      "Leon se depara com este homem misterioso na vila. Ele parece saber algo sobre o paradeiro da filha do presidente dos Estados Unidos, mas será que ele é confiável...?",
    imagens: ["./carrossel_img-luis-01.jpg", "./carrossel-img-luis-02.jpg"],
    modal: ["./modal-luis-01.jpg", "./modal-luis-02.jpg"],
    imagensMobile: ["./Mobile-luis-01.png", "./Mobile-luis-02.png"],
  },

  {
    nome: "Item 9",
    personagem: "Aldeões",
    tipo: "Ganado",
    descricao:
      "Uma vez humanos, os Ganado veneram o líder de um culto religioso, e agora só há loucura em seus olhos...",
    imagens: ["./carrossel_img-ganad-01.jpg", "./carrossel_img-ganad-02.jpg"],
    modal: ["./modal-ganad-01.jpg", "./modal-ganad-02.jpg"],
    imagensMobile: ["./Mobile-ganad-01.png", "./Mobile-ganad-02.png"],
  },

  {
    nome: "Item 10",
    personagem: "Bitores Mendez",
    descricao:
      "O chefe da vila que Leon investiga. Assim como os outros habitantes locais, ele venera o líder de um culto religioso.",
    imagens: ["./carrossel_img-bitores.jpg"],

    imagensMobile: ["./Mobile-bitores-01.png"],
    modal: "./modal-bitores.jpg",
  },

  {
    nome: "Item 11",
    personagem: "Ingrid Hunnigan",
    descricao:
      "Uma coordenadora de missões que dá suporte aos agentes do governo dos Estados Unidos. Ela será o contato de Leon e o ajudará nesta missão. ",
    imagens: ["./carrossel_img-hannigan.jpg"],

    imagensMobile: ["./Mobile-hannigan-01.png"],
    modal: "./modal-hannigan.jpg",
  },

  {
    nome: "Item 12",
    personagem: "Jack Krauser",
    descricao:
      "Um ex-membro das forças militares dos Estados Unidos. Ele e Leon desenvolveram um vínculo após este tornar-se um agente. ",
    imagens: [
      "./carrossel_img-krauser-01.jpg",
      "./carrossel_img-krauser-02.jpg",
    ],

    imagensMobile: ["./Mobile-krauser-01.png", "./Mobile-krauser-02.png"],
    modal: ["./modal-krauser-01.jpg", "./modal-krauser-02.jpg"],
  },

  {
    nome: "Item 13",
    personagem: "Fanático",
    imagens: ["./carrossel_img-ezalot.jpg"],
    imagensMobile: ["./Mobile-ezalot-01.png"],
    modal: "./modal-ezalot.jpg",
  },
];

export const Personagem = () => {
  const [ativo, setAtivo] = useState(0);
  const [indexImg, setIndexImg] = useState(0);
  const swiperRef = useRef(null);

  const [abrirCaixaExpandirPersonagem, setAbrirCaixaExpandirPersonagem] =
    useState(false);

  function caixaExpandirPersonagem() {
    setAbrirCaixaExpandirPersonagem((prev) => !prev);
  }

  function fecharPersonagem() {
    setAbrirCaixaExpandirPersonagem(false);
  }

  useEffect(() => {
    const item = listaCarrossel[ativo];

    if (!item || item.imagens.length <= 1) return;

    const interval = setInterval(() => {
      setIndexImg((prev) => (prev + 1) % item.imagens.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [ativo]);

  // Pré-carrega todas as imagens do carrossel assim que o componente é montado.
  // Isso faz com que o navegador baixe as imagens em segundo plano,
  // evitando atrasos quando o usuário troca de personagem pela primeira vez.

  useEffect(() => {
    listaCarrossel.forEach((item) => {
      // Pré-carrega as imagens da versão desktop
      item.imagens.forEach((src) => {
        const img = new Image();
        img.src = src;
      });

      // Pré-carrega as imagens da versão mobile (caso existam)
      item.imagensMobile?.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    });
  }, []);

  return (
    <>
      <section className="caixa-personagem">
        <div
          className="caixa-foto-personagem"
          data-aos="fade-left"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <span className="personagem-span">PERSONAGEM</span>

          <ul className="lista-galeria-personagem">
            <li className={`item-personagem ${ativo === 0 ? "ativo" : ""}`}>
              <img
                className="personagem-galeria-img"
                src="./personagem-leon-img-pequena.jpg"
                alt="Leon"
                onClick={() => {
                  setAtivo(0);
                  setIndexImg(0);
                  swiperRef.current.slideTo(0);
                }}
              />
              <span className="nome-miminiatura">Leon S. Kennedy</span>
            </li>

            <li className="espaco-vazio"></li>

            <li className={`item-personagem ${ativo === 1 ? "ativo" : ""}`}>
              <img
                className="personagem-galeria-img"
                src="./personagem-ashley.jpg"
                alt="Ashley"
                onClick={() => {
                  setAtivo(1);
                  setIndexImg(0);
                  swiperRef.current.slideTo(1);
                }}
              />
              <span className="nome-miminiatura">Ashley Graham</span>
            </li>

            <li className={`item-personagem ${ativo === 7 ? "ativo" : ""}`}>
              <img
                className="personagem-galeria-img"
                src="./personagem-luis.jpg"
                alt="Luis"
                onClick={() => {
                  setAtivo(7);
                  setIndexImg(0);
                  swiperRef.current.slideTo(7);
                }}
              />
              <span className="nome-miminiatura">Luis Serra</span>
            </li>

            <li className={`item-personagem ${ativo === 2 ? "ativo" : ""}`}>
              <img
                className="personagem-galeria-img"
                src="./personagem-ada.jpg"
                alt="Ada"
                onClick={() => {
                  setAtivo(2);
                  setIndexImg(0);
                  swiperRef.current.slideTo(2);
                }}
              />
              <span className="nome-miminiatura">Ada Wong</span>
            </li>

            <li className={`item-personagem ${ativo === 8 ? "ativo" : ""}`}>
              <img
                className="personagem-galeria-img"
                src="./personagem-ganad.jpg"
                alt="Ganado"
                onClick={() => {
                  setAtivo(8);
                  setIndexImg(0);
                  swiperRef.current.slideTo(8);
                }}
              />
              <span className="nome-miminiatura">Aldeões</span>
            </li>

            <li className={`item-personagem ${ativo === 3 ? "ativo" : ""}`}>
              <img
                className="personagem-galeria-img"
                src="./personagem-doctor-salvador.jpg"
                alt="Salvador"
                onClick={() => {
                  setAtivo(3);
                  setIndexImg(0);
                  swiperRef.current.slideTo(3);
                }}
              />
              <span className="nome-miminiatura">Aldeão com motosserra</span>
            </li>

            <li className={`item-personagem ${ativo === 9 ? "ativo" : ""}`}>
              <img
                className="personagem-galeria-img"
                src="./personagem-bitores.jpg"
                alt="Bitores"
                onClick={() => {
                  setAtivo(9);
                  setIndexImg(0);
                  swiperRef.current.slideTo(9);
                }}
              />
              <span className="nome-miminiatura">Bitores Méndez</span>
            </li>

            <li className={`item-personagem ${ativo === 4 ? "ativo" : ""}`}>
              <img
                className="personagem-galeria-img"
                src="./personagem-salazar.jpg"
                alt="Salazar"
                onClick={() => {
                  setAtivo(4);
                  setIndexImg(0);
                  swiperRef.current.slideTo(4);
                }}
              />
              <span className="nome-miminiatura">Ramón Salazar</span>
            </li>

            <li className={`item-personagem ${ativo === 10 ? "ativo" : ""}`}>
              <img
                className="personagem-galeria-img"
                src="./personagem-hannigan.jpg"
                alt="Hannigan"
                onClick={() => {
                  setAtivo(10);
                  setIndexImg(0);
                  swiperRef.current.slideTo(10);
                }}
              />
              <span className="nome-miminiatura">Ingrid Hunnigan</span>
            </li>

            <li className={`item-personagem ${ativo === 5 ? "ativo" : ""}`}>
              <img
                className="personagem-galeria-img"
                src="./personagem-mercador.jpg"
                alt="Mercador"
                onClick={() => {
                  setAtivo(5);
                  setIndexImg(0);
                  swiperRef.current.slideTo(5);
                }}
              />
              <span className="nome-miminiatura">Mercador</span>
            </li>

            <li className={`item-personagem ${ativo === 11 ? "ativo" : ""}`}>
              <img
                className="personagem-galeria-img"
                src="./personagem-krauser.jpg"
                alt="Krauser"
                onClick={() => {
                  setAtivo(11);
                  setIndexImg(0);
                  swiperRef.current.slideTo(11);
                }}
              />
              <span className="nome-miminiatura">Jack Krauser</span>
            </li>

            <li className={`item-personagem ${ativo === 6 ? "ativo" : ""}`}>
              <img
                className="personagem-galeria-img"
                src="./personagem-saddler.jpg"
                alt="Saddler"
                onClick={() => {
                  setAtivo(6);
                  setIndexImg(0);
                  swiperRef.current.slideTo(6);
                }}
              />
              <span className="nome-miminiatura">Osmund Saddler</span>
            </li>

            <li className={`item-personagem ${ativo === 12 ? "ativo" : ""}`}>
              <img
                className="personagem-galeria-img"
                src="./personagem-ezalot.jpg"
                alt="Ezalot"
                onClick={() => {
                  setAtivo(12);
                  setIndexImg(0);
                  swiperRef.current.slideTo(12);
                }}
              />
              <span className="nome-miminiatura">Fanático</span>
            </li>
          </ul>
        </div>

        <div className="caixa-swiper" data-aos="zoom-out">
          <Swiper
            modules={[EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            slidesPerView={1}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => {
              setAtivo(swiper.activeIndex);
              setIndexImg(0);

              setTimeout(() => {
                swiper.update();
              }, 50);
            }}
          >
            {listaCarrossel.map((item, i) => {
              const isAtivo = i === ativo;
              const idx = isAtivo ? indexImg : 0;

              const imgAtual =
                item.imagens.length > 1 ? item.imagens[idx] : item.imagens[0];

              const imgMobile = item.imagensMobile
                ? item.imagensMobile[idx]
                : imgAtual;

              return (
                <SwiperSlide key={i}>
                  <div className="container-slide">
                    {/* SETA ESQUERDA */}
                    <button
                      className="seta-personagem esquerda-personagem"
                      onClick={() => swiperRef.current?.slidePrev()}
                    >
                      ‹
                    </button>

                    {/* SETA DIREITA */}
                    <button
                      className="seta-personagem direita-personagem"
                      onClick={() => swiperRef.current?.slideNext()}
                    >
                      ›
                    </button>

                    <div className="caixa-titulo-personagem">
                      {/* IMAGEM RESPONSIVA */}
                      <picture>
                        <source media="(max-width: 768px)" srcSet={imgMobile} />

                        <img
                          className="imagens-carrossel"
                          src={imgAtual}
                          alt={item.nome}
                        />
                      </picture>

                      {/* TEXTO */}
                      <div
                        className="info-personagem"
                        data-aos="fade-up"
                        data-aos-delay="300"
                        data-aos-duration="120"
                      >
                        <span
                          className={`nome-personagem-carrossel ${
                            item.personagem.includes("\n")
                              ? "quebrar-linha"
                              : ""
                          }`}
                        >
                          {item.personagem}
                          {item.tipo && (
                            <span className="tipo">({item.tipo})</span>
                          )}
                        </span>

                        <div>
                          <p className="descricao">{item.descricao}</p>
                        </div>
                      </div>
                    </div>

                    {/* BOTÃO EXPANDIR */}
                    <button
                      onClick={() => setAbrirCaixaExpandirPersonagem(true)}
                      className="botao-expandir-imagem"
                    >
                      <img
                        className="expandir-imagem"
                        src="./botao-de-abrir-img.svg"
                        alt="botao de abrir img"
                      />
                    </button>

                    {/* INDICADOR */}
                    <div className="indicador-imagens">
                      <div className="caixa-barras">
                        {item.imagens.length > 1 && (
                          <>
                            <p className="imagem-p">IMAGES</p>

                            <div className="grupo-numero">
                              <span
                                className={indexImg === 0 ? "ativo-numero" : ""}
                              >
                                1
                              </span>

                              {indexImg === 0 && (
                                <svg width="40" height="40">
                                  <circle
                                    className="bg"
                                    cx="20"
                                    cy="20"
                                    r="16"
                                  />
                                  <circle
                                    className="progress"
                                    cx="20"
                                    cy="20"
                                    r="16"
                                  />
                                </svg>
                              )}
                            </div>

                            <span>-</span>

                            <div className="grupo-numero">
                              <span
                                className={indexImg === 1 ? "ativo-numero" : ""}
                              >
                                2
                              </span>

                              {indexImg === 1 && (
                                <svg width="40" height="40">
                                  <circle
                                    className="bg"
                                    cx="20"
                                    cy="20"
                                    r="16"
                                  />
                                  <circle
                                    className="progress"
                                    cx="20"
                                    cy="20"
                                    r="16"
                                  />
                                </svg>
                              )}
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>

      {abrirCaixaExpandirPersonagem && (
        <div className="caixa-galeria-expandir">
          <img
            className="img-modal-personagem"
            src={
              Array.isArray(listaCarrossel[ativo].modal)
                ? (listaCarrossel[ativo].modal[indexImg] ??
                  listaCarrossel[ativo].modal[0])
                : listaCarrossel[ativo].modal
            }
            alt="imagem do personagem"
          />

          <button
            className="botao-fechar-Personagem-modal"
            onClick={fecharPersonagem}
          >
            X
          </button>
        </div>
      )}
    </>
  );
};

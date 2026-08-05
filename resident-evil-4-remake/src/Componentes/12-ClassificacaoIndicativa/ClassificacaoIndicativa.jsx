import "./ClassificacaoIndicativa.css";
import "./ClassificacaoIndicativaResponsividade.css";

export const ClassificacaoIndicativa = () => {
  return (
    <div className="caixa-classificacao-indicativa" data-aos="fade-up">
      <div className="caixa-conteudo-classificacao-indicativa">
        <img
          className="logo-resident-evil-4-remake-classificacao"
          src="./logo-resident-evil-4-remake.svg"
          alt="logo resident-evil 4 remake"
        />

        <ul className="lista-classificacao-ul">
          <li className="item-classificacao">Gênero: Survival Horror</li>

          <li className="item-classificacao">Jogadores: 1</li>
        </ul>

        <ul className="lista-2-classificacao-ul">
          <li className="item-classificacao">
            Data de Lançamento: Já Disponível
          </li>

          <li className="item-classificacao">
            Classificação Indicativa: 18 ANOS
          </li>
        </ul>

        <img
          className="img-classificacao-18-anos"
          src="./img-18.png"
          alt="img classificacao 18 anos"
        />
      </div>

      <p className="jaqueta-bomber">
        A jaqueta bomber de couro marrom com gola de pele de carneiro de Leon é
        utilizada sob licença da Schott NYC.
      </p>
    </div>
  );
};

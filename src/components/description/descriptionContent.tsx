import styles from "./style.module.css";

export function DescriptionContent() {
  return (
    <section className={styles.descriptionSection}>
      <div className={styles.descriptionContainer}>
        <p className={styles.descriptionParagraph}>
          Este projeto foi desenvolvido para a Pós-Graduação em Arquitetura de
          Software Distribuído, na disciplina de Arquitetura de Frontend, ainda
          no primeiro módulo. A proposta principal é construir uma SPA e
          entender na prática como seu funcionamento acontece dentro de um
          framework moderno. Foi escolhida a API de spaceflightnewsapi
          aleatoriamente, somente para que houvesse similiaridade com o
          protótipo apresentado no curso (por motivos de direitos autorais,
          preferi não inserir aqui a foto da proposta, todavia se tratava de uma
          página inicial contendo informações idêntica em layout a que realizei
          e foi pedido a criação de mais duas páginas)
        </p>
        <p className={styles.descriptionParagraph}>
          Como já tive contato com React no passado, optei por essa ferramenta
          por familiaridade e pela facilidade em desenvolver páginas mais
          simples como esta, sem abrir mão de uma estrutura organizada e
          escalável.
        </p>
      </div>
    </section>
  );
}

import styles from "./style.module.css";

export function AboutContent() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutContainer}>

        <div className={styles.aboutTextBlock}>
          <p className={styles.aboutParagraph}>
            Sou alguém movido pela curiosidade e pelo desejo constante de entender
            o porquê das coisas. Gosto de filosofia, de livros e de conversas que
            atravessam a superfície do óbvio. Acredito que nem tudo é tão simples
            quanto parece, e que questionar é uma forma de respeito pela verdade.
            Tenho apreço por reflexões profundas, ideias bem construídas e
            perspectivas diferentes da minha. Prefiro duvidas honestas a certezas
            rasas. Pensar, para mim, não é só um hábito, é parte de quem eu sou.
          </p>

          <p className={styles.aboutParagraph}>
            Tento levar esse olhar para tudo o que faço: ouvir com atenção, observar
            contextos e evitar respostas rápidas para perguntas complexas. Interessa-me
            mais compreender do que apenas opinar, mais construir sentido do que
            repetir fórmulas prontas. Vejo valor no silêncio que antecede uma boa
            ideia e na paciência necessária para amadurecer um pensamento.
          </p>

          <p className={styles.aboutParagraph}>
            Também acredito que crescer exige desconforto intelectual: aceitar que
            podemos estar errados, revisar convicções e aprender com quem enxerga o
            mundo por outro ângulo. No fim, o que me move é essa busca contínua por
            profundidade, coerência e verdade, mesmo quando ela vem acompanhada de
            novas perguntas.
          </p>
        </div>
      </div>
    </section>
  );
}

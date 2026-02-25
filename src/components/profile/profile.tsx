import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ProfileImage from "@/assets/profileimage.webp";
import { getInitials } from "@/utils/stringUtils";
import styles from "./style.module.css";

const PROFILE = {
  name: "Rafael Carvalho",
  description: `Sou alguém movido(a) pela curiosidade e pelo desejo constante de entender o porquê das coisas.
Gosto de filosofia, de livros e de conversas que atravessam a superfície do óbvio.
Acredito que nem tudo é tão simples quanto parece, e que questionar é uma forma de respeito pela verdade.
Tenho apreço por reflexões profundas, ideias bem construídas e perspectivas diferentes da minha.
Prefiro dúvidas honestas a certezas rasas.
Pensar, para mim, não é só um hábito — é parte de quem eu sou.`,
  imageUrl: "",
};

export function Profile() {
  return (
    <div className={styles.containerProfile}>
      <div className={styles.contentProfile}>
        <Avatar className={styles.pictureProfile}>
          <AvatarImage src={ProfileImage} />
          <AvatarFallback>{getInitials(PROFILE.name)}</AvatarFallback>
        </Avatar>
        <div className={styles.textInformationsProfile}>
          <h1>{PROFILE.name}</h1>
          <p>{PROFILE.description}</p>
        </div>
      </div>
    </div>
  );
}

import { Link } from "react-router";
import styles from './style.module.css';

export default function Header() {

  const navigationOptionsMenu = {
    Blog: {
      id: 1,
      name: "Blog",
      route: "/blog"
    },
    Sobre: {
      id: 2,
      name: "Sobre",
      route: "/about"
    },
    Descricao: {
      id: 3,
      name: "Descricao",
      route: "/description"
    }
  }
  
  return (
    <header className={styles.containerHeader}>
      <nav className={styles.contentHeader}>
        {Object.values(navigationOptionsMenu).map((option) => (
          <Link key={option.id} to={option.route} className={styles.itemHeader}>
            {option.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
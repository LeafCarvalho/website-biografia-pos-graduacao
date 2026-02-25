import { getNews } from "@/services/newsServices";
import type { Article } from "@/types/newsDto";
import { useEffect, useState } from "react";
import styles from "./style.module.css";

type NewsProps = {
  limit?: number;
};

export default function News({ limit }: NewsProps) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await getNews(limit);
        setArticles(data.results);
      } catch (e) {
        setError("Erro ao buscar artigos");
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [limit]);

  if (loading) return <p>Carregando notícias...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.containerBlog}>
      {articles.map((article) => (
        <div
          key={article.id}
          className={styles.newsItem}
          onClick={() =>
            window.open(article.url, "_blank", "noopener,noreferrer")
          }
        >
          <h4 className={styles.newsTitle}>{article.title}</h4>

          <p>{article.summary}</p>
        </div>
      ))}

      <a href="/blog">Ver tudo</a>
    </div>
  );
}

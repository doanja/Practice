import articleStyles from '../styles/Article.module.css';
import ArticleItem from './ArticleItem';

interface ArticleListProps {
  articles: Article[];
}

export default function ArticleList({ articles }: ArticleListProps) {
  return (
    <div className={articleStyles.grid}>
      {articles.map((article: any) => (
        <ArticleItem article={article} key={article.id} />
      ))}
    </div>
  );
}

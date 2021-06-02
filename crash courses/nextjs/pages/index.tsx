import ArticleList from '../components/ArticleList';

interface HomeProps {
  articles: any;
}

export default function Home({ articles }: HomeProps) {
  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};

import { server } from '../../../config/';
import Link from 'next/link';
import Meta from '../../../components/Meta';

interface articleProps {
  article: Article;
}

export default function article({ article }: articleProps) {
  return (
    <>
      <Meta title={article.title} description={article.body} />
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href='/'>Go Back</Link>
    </>
  );
}

// export const getStaticProps = async (context: any) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);

//   const article = await res.json();

//   return {
//     props: {
//       article,
//     },
//   };
// };

// use getStaticPProps to get data if data is available before the user's request
// docs: https://nextjs.org/blog/next-9-3#getstaticpaths
export const getStaticProps = async (context: any) => {
  const res = await fetch(`${server}/api/articles/${context.params.id}`);

  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

//   const articles: Article[] = await res.json();

//   const ids: number[] = articles.map((article: Article) => article.id);
//   const paths = ids.map((id: number) => ({ params: { id: id.toString() } }));

//   return {
//     paths,
//     fallback: false, // if you go to http://localhost:3000/article/${some number} and it does not exist, redirects to 404
//   };
// };

// used to dynamically build all paths for dynamic routes (ex: paths with /${id})
export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles`);

  const articles = await res.json();

  const ids: number[] = articles.map((article: Article) => article.id);
  const paths = ids.map((id: number) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false, // fallback to 404 if path does not exist
  };
};

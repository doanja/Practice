import Head from 'next/head';

interface MetaProps {
  title?: string;
  keywords?: string;
  description?: string;
}

const Meta = ({ title = 'WebDev News', keywords = 'web development, programming', description = 'get the latest news in web dev' }: MetaProps) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      <title>{title}</title>
    </Head>
  );
};

export default Meta;

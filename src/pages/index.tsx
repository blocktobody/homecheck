import type { NextPage } from 'next';

// export async function getStaticProps() {
//   return {
//     props: { contentType: process.env.CONTENT_TYPE },
//   };
// }

interface Props {
  contentType: string;
}

const Home: NextPage<Props> = function Home({ contentType }: Props) {
  return (
    <div>
      <h1>{contentType}</h1>
    </div>
  );
};

Home.getInitialProps = async ({ query }) => {
  return { contentType: query.contentType as string };
};

export default Home;

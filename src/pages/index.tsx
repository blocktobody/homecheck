/* eslint-disable react/jsx-no-constructed-context-values */
import type { NextPage } from 'next';
import useSWR from 'swr';

import { MainContext } from './context';

const fetcher = async (url: never) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

// export async function getStaticProps() {
//   return {
//     props: { contentType: process.env.CONTENT_TYPE },
//   };
// }

interface Props {
  contentType: string;
}

const Home: NextPage<Props> = function Home({ contentType }: Props) {
  const { data, error } = useSWR(
    `/api/data?contentType=${contentType}`,
    fetcher,
  );

  if (error) {
    return null;
  }

  return (
    <MainContext.Provider value={{ data }}>
      <div>
        <h1>{contentType}</h1>
      </div>
    </MainContext.Provider>
  );
};

Home.getInitialProps = async ({ query }) => {
  return { contentType: query.contentType as string };
};

export default Home;

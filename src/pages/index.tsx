/* eslint-disable react/jsx-no-constructed-context-values */
import type { NextPage } from 'next';
import useSWR from 'swr';

import VideoOverlay from '../components/VideoOverlay';
import Main from '../sections/Main';
import Estimate from '../sections/Estimate';
import Benefit from '../sections/Benefit';
import Caution from '../sections/Caution';
import FixedButtons from '../components/FixedButtons';

import { MainContext } from '../context';
import { BREAK_POINT } from '../styles/global';

async function fetcher(url: never) {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
}

// 운영 빌드용 (yarn export-dongheng, yarn export-interior)
export async function getStaticProps() {
  const contentType = process.env.CONTENT_TYPE;

  return {
    props: { contentType },
  };
}

interface Props {
  contentType: string;
}

const Home: NextPage<Props> = function Home({ contentType }: Props) {
  const { data, error } = useSWR(
    `/api/data?contentType=${contentType}`,
    fetcher,
  );

  if (error || !data) {
    return null;
  }

  const isMobile = window.innerWidth <= BREAK_POINT;

  return (
    <MainContext.Provider value={{ data, isMobile }}>
      <VideoOverlay />
      <Main />
      <Estimate />
      <Benefit />
      <Caution />
      <FixedButtons />
    </MainContext.Provider>
  );
};

// 개발 환경용 (yarn dev)
// Home.getInitialProps = async ({ query }) => {
//   return { contentType: query.contentType as string };
// };

export default Home;

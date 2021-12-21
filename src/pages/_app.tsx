import type { AppProps } from 'next/app';
import Head from 'next/head';

import { ContentType, CONTENT_TYPE } from '../types';
import GlobalStyle from '../styles/GlobalStyle';

const defaultMetaInfos = {
  description:
    'KCSI 2년 연속1위, 누적점검세대 20,000세대, 벤처 ISO 9001인증, 2년 연속 정부지원사업선정, 아파트 사전점검 대행 업체 홈체크',
  keyword:
    '아파트 사전점검, 아파트 사전점검 대행, 사전점검 대행, 홈체크, 사전점검 업체',
  ogImageUrl: '"http://homecheck.kr/img/common/homecheck.png"',
};

const metaInfos: Record<ContentType, { title: string; linkUrl: string }> = {
  dongheng: {
    title: '홈체크 무료 체험 이벤트 - 동행 서비스',
    linkUrl: 'http://www.homecheck.kr', // TODO: OG URL 반영
  },
  interior: {
    title: '홈체크 무료 체험 이벤트 - 인테리어 점검 서비스',
    linkUrl: 'http://www.homecheck.kr', // TODO: OG URL 반영
  },
};

interface Props {
  contentType: string;
}

function MyApp({ Component, pageProps }: AppProps<Props>) {
  const { contentType = CONTENT_TYPE.DONGHENG } = pageProps;
  const { title, linkUrl } = metaInfos[contentType as ContentType];
  const { description, keyword, ogImageUrl } = defaultMetaInfos;

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keyword" content={keyword} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:keyword" content={keyword} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:url" content={linkUrl} />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

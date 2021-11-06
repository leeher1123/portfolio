import Head from 'next/head';

import HomeContainer from '../src/home/containers/HomeContainer';

export default function Home() {
  return (
    <div>
      <Head>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <title>Jimin's portfolio</title>
      </Head>
      <HomeContainer />
    </div>
  );
}

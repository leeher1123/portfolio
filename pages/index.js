import Head from 'next/head';

import HomeContainer from '../src/home/containers/HomeContainer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jimin's portfolio</title>
      </Head>
      <HomeContainer />
    </div>
  );
}

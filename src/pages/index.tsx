import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Whack a mole!</title>
        <meta name="description" content="Classic game of whack a mole" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-red-500">Whack a mole!</h1>
      </main>
    </>
  );
}

import Head from 'next/head';
import Container from '@/components/CustomComponents/Gridlesh/Container';

export default function Home() {
  return (
    <Container mode='app-style'>
      <Head>
        <title>Css is important...</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <h1>First Stage of The Project "Css Layout"</h1>
    </Container>
  );
}

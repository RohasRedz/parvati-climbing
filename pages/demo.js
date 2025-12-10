import Head from 'next/head';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import ParallaxDemo from '../components/ui/parallax-scrolling';

export default function Demo() {
  return (
    <div className="page-wrapper">
      <Head>
        <title>Parvati Climbing Foundation | Parallax Demo</title>
        <meta name="description" content="Experience our new parallax scrolling effects" />
      </Head>
      
      <Nav />
      
      <main className="main-content" style={{ marginTop: '70px' }}>
        <ParallaxDemo />
      </main>
      
      <Footer />
    </div>
  );
}


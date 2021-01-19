import Head from 'next/head';
import Footer from '../components/navigation/Footer';
import NavBar from '../components/navigation/NavBar';
import '../styles/scss/styles.scss';

function MyApp({ Component, pageProps }: any) {
    return (
        <>
            <Head>
                <title>React-Online-Shop</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <main>
                <Component {...pageProps} />
            </main>
            <Footer />
        </>
    );
}

export default MyApp;

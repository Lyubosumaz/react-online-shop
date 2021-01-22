import Head from 'next/head';
import Footer from '../components/navigation/Footer';
import Header from '../components/navigation/Header';
import '../styles/scss/styles.scss';

function MyApp({ Component, pageProps }: any) {
    return (
        <>
            <Head>
                <title>React-Online-Shop</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main>
                <Component {...pageProps} />
            </main>
            <Footer />
        </>
    );
}

export default MyApp;

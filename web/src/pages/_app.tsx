import Head from 'next/head';
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
            <footer>Footer</footer>
        </>
    );
}

export default MyApp;

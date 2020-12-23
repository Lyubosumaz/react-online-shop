import NavBar from '../components/navigation/NavBar';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }: any) {
    return (
        <>
            <NavBar />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;

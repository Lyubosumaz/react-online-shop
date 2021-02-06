import { CSSReset, ThemeProvider } from '@chakra-ui/core';
import Footer from '../components/navigation/Footer';
import theme from '../theme';

function MyApp({ Component, pageProps }: any) {
    return (
        <ThemeProvider theme={theme}>
            <CSSReset />
            <Component {...pageProps} />
            <Footer />
        </ThemeProvider>
    );
}

export default MyApp;

import { CSSReset, ThemeProvider } from '@chakra-ui/core';
import { extendTheme } from '@chakra-ui/react';
import Fonts from '../components/Fonts';
import Footer from '../components/navigation/Footer';
import myTheme from '../theme';

const theme = extendTheme({
    ...myTheme,
    fonts: {
        heading: 'Open Sans',
        body: 'Poppins, sans-serif',
    },
} as any);

function MyApp({ Component, pageProps }: any) {
    return (
        <ThemeProvider theme={theme}>
            <CSSReset />
            <Fonts />
            <Component {...pageProps} />
            <Footer />
        </ThemeProvider>
    );
}

export default MyApp;

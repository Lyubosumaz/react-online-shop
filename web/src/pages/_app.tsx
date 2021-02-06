import { ChakraProvider } from '@chakra-ui/react';
import Footer from '../components/navigation/Footer';
import theme from '../theme';

function MyApp({ Component, pageProps }: any) {
    return (
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
            <Footer />
        </ChakraProvider>
    );
}

export default MyApp;

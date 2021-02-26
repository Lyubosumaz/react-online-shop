import theme from '@/theme';
import { ColorModeScript } from '@chakra-ui/react';
import { NextPageContext } from 'next';
import { RenderPage } from 'next/dist/next-server/lib/utils';
import Document, { Head, Html, Main, NextScript } from 'next/document';

interface Context extends NextPageContext {
    renderPage: RenderPage;
}
class MyDocument extends Document {
    static async getInitialProps(ctx: Context) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="UTF-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
export default MyDocument;

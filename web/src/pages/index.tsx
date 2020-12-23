import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import { withUrqlClient } from 'next-urql';
import { createUrqlClient } from '../utils/createUrqlClient';

const Home = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Next test</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}></main>

            <footer className={styles.footer}></footer>
        </div>
    );
};

export default withUrqlClient(createUrqlClient)(Home);

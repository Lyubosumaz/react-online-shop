import Head from 'next/head';
import styles from '~/styles/Home.module.scss';

export default function Home() {
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
}

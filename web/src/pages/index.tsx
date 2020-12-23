import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import { withUrqlClient } from 'next-urql';
import { createUrqlClient } from '../utils/createUrqlClient';
import { useItemsQuery } from '../generated/graphql';

const Home = () => {
    const [{ data }] = useItemsQuery();

    return (
        <div className={styles.container}>
            <Head>
                <title>Next test</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>{!data ? <div>doesn't fetch anything</div> : data.items.map((p) => <div key={p.id}>{p.title}</div>)}</main>

            <footer className={styles.footer}></footer>
        </div>
    );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Home);

import { withUrqlClient } from 'next-urql';
import { useState } from 'react';
import AboutUs from '../components/index/AboutUs';
import BestDesign from '../components/index/BestDesign';
import OurWork from '../components/index/OurWork';
import { useItemsQuery } from '../generated/graphql';
import styles from '../styles/scss/4-pages/Home.module.scss';
import { createUrqlClient } from '../utils/createUrqlClient';

const Home = () => {
    const [variables, setVariables] = useState({ limit: 10, cursor: null as string | null });
    const [{ data, fetching }] = useItemsQuery({
        variables,
    });

    if (!fetching && !data) {
        return <div>you got query failed for some reason</div>;
    }
    if (!fetching && !data) {
    }

    return (
        <div className={styles.container}>
            <BestDesign />

            <AboutUs />

            <OurWork />

            {!data && fetching ? (
                <div>Loading...</div>
            ) : (
                data!.items.map((item) => (
                    <div key={item.id}>
                        <h5>{item.title}</h5>
                        <p>{item.description}</p>
                        <p>{item.textSnippet}</p>
                    </div>
                ))
            )}

            {data ? (
                <button
                    onClick={() => {
                        setVariables({
                            limit: variables.limit,
                            cursor: data.items[data.items.length - 1].createdAt,
                        });
                    }}
                >
                    Load more
                </button>
            ) : null}
        </div>
    );
};

export default withUrqlClient(createUrqlClient, { ssr: false })(Home);

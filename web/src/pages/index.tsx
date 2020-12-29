import styles from '../styles/scss/4-pages/Home.module.scss';
import { withUrqlClient } from 'next-urql';
import { createUrqlClient } from '../utils/createUrqlClient';
import { useItemsQuery } from '../generated/graphql';
import BestDesign from '../components/index/BestDesign';
import AboutUs from '../components/index/AboutUs';
import OurWork from '../components/index/OurWork';

const Home = () => {
    const [{ data }] = useItemsQuery();

    return (
        <div className={styles.container}>
            <BestDesign />

            <AboutUs />

            <OurWork />

            <div className={styles.main}>{!data ? <div>doesn't fetch anything</div> : data.items.map((p) => <div key={p.id}>{p.title}</div>)}</div>
        </div>
    );
};

export default withUrqlClient(createUrqlClient, { ssr: false })(Home);

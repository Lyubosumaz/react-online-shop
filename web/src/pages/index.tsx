import { withUrqlClient } from 'next-urql';
import AboutUs from '../components/index/AboutUs';
import BestDesign from '../components/index/BestDesign';
import OurWork from '../components/index/OurWork';
import { useItemsQuery } from '../generated/graphql';
import styles from '../styles/scss/4-pages/Home.module.scss';
import { createUrqlClient } from '../utils/createUrqlClient';

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

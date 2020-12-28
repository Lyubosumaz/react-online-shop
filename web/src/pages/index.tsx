import styles from '../styles/Home.module.scss';
import { withUrqlClient } from 'next-urql';
import { createUrqlClient } from '../utils/createUrqlClient';
import { useItemsQuery } from '../generated/graphql';
import ContactUs from '../components/index/ContactUs';
import AboutUs from '../components/index/AboutUs';
import OurWork from '../components/index/OurWork';

const Home = () => {
    const [{ data }] = useItemsQuery();

    return (
        <div className={styles.container}>
            <ContactUs />
            <AboutUs />
            <OurWork />
            <div className={styles.main}>{!data ? <div>doesn't fetch anything</div> : data.items.map((p) => <div key={p.id}>{p.title}</div>)}</div>
        </div>
    );
};

export default withUrqlClient(createUrqlClient, { ssr: false })(Home);

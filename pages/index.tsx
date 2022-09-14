import type { NextPage } from 'next';
import Content from '../components/atoms/Layout/Content';
import Footer from '../components/molecules/Footer';
import Header from '../components/molecules/Header';

const Home: NextPage = () => {
    return (
        <>
            <Header/>
			<Content>Content</Content>
			<Footer/>
        </>
    );
};

export default Home;

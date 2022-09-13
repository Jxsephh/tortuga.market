import type { NextPage } from 'next';
import Content from '../components/atoms/Layout/Content';
import FooterContainer from '../components/atoms/Layout/FooterContainer';
import Header from '../components/molecules/Header';

const Home: NextPage = () => {
    return (
        <>
            <Header/>
			<Content>Content</Content>
			<FooterContainer>Footer</FooterContainer>
        </>
    );
};

export default Home;

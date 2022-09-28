import type { NextPage } from 'next';
import Script from 'next/script';
import Content from '../components/atoms/Layout/Content';
import Footer from '../components/molecules/Footer';
import Header from '../components/molecules/Header';

const Home: NextPage = () => {
    return (
        <>
            <Header />
            <Content>
                <p className='ml-12 w-[25%] font-serif self-start'>
                    &#123;
                    <br />
                    <br />
                    music: shit im dreaming by peter cat recording co. <br />
                    stills: apocolypse now , ...
                    <br />
					<br />
                    collectors: ___.eth , ___.eth , ___.eth , ___.eth ,___.eth ,
                    ___.eth
                    <br />
                    <br />
                    &#125;
                </p>
				
            </Content>
            <Footer />
        </>
    );
};

export default Home;

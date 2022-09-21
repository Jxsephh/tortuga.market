import type { NextPage } from 'next';
import Script from 'next/script';
import Content from '../components/atoms/Layout/Content';
import Footer from '../components/molecules/Footer';
import Header from '../components/molecules/Header';

const Home: NextPage = () => {
	
    return (
        <>
            <Header/>
			<Content>
				<div className='rounded overflow-hidden max-w-[800px] m-auto bg-white'>
					<iframe id='embed' width='100%' className='width:1px;min-width:100%;' frameBorder='0' src='https://create.zora.co/editions/0x02dee6907a23bb3976b255c7013612ea2fcce4fa/frame?padding=20px&showDetails=true&theme=light&showPresale=true&showMedia=true'></iframe>	
				</div>
				<Script src='https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.2/iframeResizer.min.js' integrity='sha512-dnvR4Aebv5bAtJxDunq3eE8puKAJrY9GBJYl9GC6lTOEC76s1dbDfJFcL9GyzpaDW4vlI/UjR8sKbc1j6Ynx6w==' crossOrigin='anonymous' referrerPolicy='no-referrer'></Script>
				{/* <Script>iFrameResize({ log: false }, '#embed')</Script> */}
			</Content>
			<Footer/>
        </>
    );
};

export default Home;

import HeaderContainer from '../atoms/Layout/HeaderContainer';
import ConnectWallet from './ConnectWallet';

export default function Header(): JSX.Element {
    return (
        <HeaderContainer>
            <div className="flex justify-between items-end w-full mx-8 -mt-8">
                <div className="font-sans text-[34px] tracking-wide">
                    WELCOME
                </div>
                <ConnectWallet />
            </div>
        </HeaderContainer>
    );
}

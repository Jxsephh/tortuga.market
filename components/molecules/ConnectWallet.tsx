import {
    ConnectButton,
    useConnectModal,
    useAccountModal,
    useChainModal,
} from '@rainbow-me/rainbowkit';
import { useAccount, useDisconnect } from 'wagmi';

export default function ConnectWallet(): JSX.Element {
    const { address } = useAccount();
	const { disconnect } = useDisconnect();
	const { openConnectModal } = useConnectModal();
	const { openAccountModal } = useAccountModal();

    return (
        <button
            className="font-serif text-4 border rounded border-outlineGrey-100 py-3 px-4 hover:bg-outlineGrey-50 transition-all"
            onClick={!address ? openConnectModal : openAccountModal}
        >
            {address ? `${address.substring(0, 5)}...${address.substring(address.length-4)}` : 'connect wallet'}
        </button>
    );
}

{
    /* <button
                    className="font-serif text-4 border rounded border-outlineGrey-100 py-3 px-4 hover:bg-outlineGrey-50 transition-all"
                    onClick={() => {
                        console.log('connect wallet');
                    }}
                >
                    connect wallet
                </button> */
}

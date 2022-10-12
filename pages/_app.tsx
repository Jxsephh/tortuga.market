import '../styles/globals.css';
import type { AppProps } from 'next/app';
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  lightTheme,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains, provider } = configureChains(
  [chain.mainnet, chain.rinkeby],
  [
    alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
    publicProvider()
  ]
);
const { connectors } = getDefaultWallets({
  appName: 'Tortuga Market',
  chains
});
const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
});

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <WagmiConfig client={wagmiClient}>
            <RainbowKitProvider 
				chains={chains}
				modalSize="compact"
				theme={lightTheme({
					accentColor: 'white',
					accentColorForeground: 'black',
					fontStack: 'rounded',
					borderRadius: 'medium',
				})}>
                    <Component {...pageProps} />
            </RainbowKitProvider>
        </WagmiConfig>
    );
}

export default MyApp;

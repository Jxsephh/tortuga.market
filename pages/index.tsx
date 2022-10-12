import type { NextPage } from 'next';

const Home: NextPage = () => {
    return (
        <>
            <div className="flex min-h-screen">
                <div className="flex p-2 gap-12 items-center justify-center m-auto w-full min-h-[80vh] max-w-[1360px]">
                    <div className="flex-1 p-2">
                        <img className="rounded-2xl" src="/roger.svg" alt="Jolly Roger(s)" />
                    </div>
                    <div className="flex flex-col flex-1 p-4 gap-2 mb-8">
                        <div className="mb-6">
                            <p className="font-sans gap-2 mb-2 text-4xl">
                                JOLLY ROGER(S)™
                            </p>
                            <p className="mb-2 font-serif text-xl">
                                The official logo, symbol, meme, mascot, and
                                image of TORTUGA. <br />
                                <br /> ↳ Year: 2022 <br /> ↳ Medium: Pixels on
                                Digital Canvas ↳ Dimensions: 3000 × 3000 px{' '}
                                <br /> ↳ License: Creative Commons Zero (CC0){' '}
                                <br />↳ Artist: Saucedo.eth <br />↳
                                Reference(s): <br />
                                Black Square by Kazimir Malevich <br />
                                DONDA by Ye <br />
                                One Piece by Eiichiro Oda <br />
                                X-ray of CryptoPunk 130 by PIV
                            </p>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex flex-wrap gap-3 items-center justify-between w-full">
                                <div>
                                    <p className="text-lg font-serif">
                                        Current bid
                                    </p>
                                    <p className="text-3xl font-serif">
                                        1.40 eth
                                    </p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <input
                                        type="text"
                                        placeholder="1.41 eth or more"
                                        className="font-serif text-xl px-4 py-3 rounded border border-"
                                    />
                                    <button className="bg-black text-white text-xl font-serif px-12 py-3 rounded text-center">
                                        bid
                                    </button>
                                </div>
                            </div>
                            <button className="bg-black text-white text-xl font-serif p-4 rounded text-center w-full mt-3 mb-8">
                                connect wallet
                            </button>
							<div className="border border-black rounded flex flex-col gap-8"> 
								<div className="flex items-center justify-between px-6 pt-4">
									<p className="text-lg font-serif">current bid</p>
									<p className="text-lg font-serif">1.40 eth</p>
								</div>
								<div className="flex items-center justify-between px-6 pb-4">
									<p className="text-lg font-serif">time left</p>
									<p className="text-lg font-serif">11h 10m 23s</p>
								</div>
							</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;

import FooterContainer from '../atoms/Layout/FooterContainer';

export default function Footer(): JSX.Element {
    return (
        <FooterContainer>
            <div className="flex justify-between items-end w-full mx-8">
                <button
                    className="font-serif text-4 border rounded border-outlineGrey-100 py-3 px-4 hover:bg-outlineGrey-50 transition-all mb-[17px]"
                    onClick={() => {
                        console.log('mint film');
                    }}
                >
                    mint film
                </button>
                <p className="font-serif underline -mb-[19px] tracking-wide text-hyperlinkGrey-100 hover:cursor-pointer">
                    public and &quot;luxury&quot; goods
                </p>
                <div className="flex gap-3 mb-[17px]">
                    <button
                        className="font-serif text-4 border rounded border-outlineGrey-100 py-3 px-4 hover:bg-outlineGrey-50 transition-all"
                        onClick={() => {
                            console.log('left');
                        }}
                    >
                        {'<'}
                    </button>

                    <button
                        className="font-serif text-4 border rounded border-outlineGrey-100 py-3 px-4 hover:bg-outlineGrey-50 transition-all"
                        onClick={() => {
                            console.log('right');
                        }}
                    >
                        {'>'}
                    </button>
                </div>
            </div>
        </FooterContainer>
    );
}

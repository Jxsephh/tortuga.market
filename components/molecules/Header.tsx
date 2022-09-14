import HeaderContainer from '../atoms/Layout/HeaderContainer';

export default function Header(): JSX.Element {
    return (
        <HeaderContainer>
            <div className="flex justify-between items-end w-full mx-8 -mt-8">
                <div className="font-sans text-[34px] tracking-wide">
                    WELCOME
                </div>
                <button
                    className="font-serif text-4 border rounded border-outlineGrey-100 py-3 px-4 hover:bg-outlineGrey-50 transition-all"
                    onClick={() => {
                        console.log('connect wallet');
                    }}
                >
                    connect wallet
                </button>
            </div>
        </HeaderContainer>
    );
}

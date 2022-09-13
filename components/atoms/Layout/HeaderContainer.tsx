import { LayoutProps } from "../../../types/ui";

export default function HeaderContainer({children}: LayoutProps) {
	return <div className="w-screen h-36 flex justify-center items-center">
		{children}
	</div>
}
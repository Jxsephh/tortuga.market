import { LayoutProps } from "../../../types/ui";

export default function Header({children}: LayoutProps) {
	return <div className="w-screen h-36 bg-blue-600 flex justify-center items-center">
		{children}
	</div>
}
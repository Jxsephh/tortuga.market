import { LayoutProps } from "../../../types/ui";

export default function Footer({children}: LayoutProps) {
	return <div className="w-screen h-36 bg-green-600 absolute bottom-0 flex justify-center items-center">
		{children}
	</div>
}
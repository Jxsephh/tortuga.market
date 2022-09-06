import { LayoutProps } from "../../../types/ui";

export default function Layout({children}: LayoutProps) {
	return (
		<div className="w-screen h-screen bg-red-600">
			{children}
		</div>
	)
}
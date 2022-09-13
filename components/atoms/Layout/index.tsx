import { LayoutProps } from "../../../types/ui";

export default function Layout({children}: LayoutProps) {
	return (
		<div className="w-screen h-screen">
			{children}
		</div>
	)
}
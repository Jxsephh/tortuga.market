import { LayoutProps } from "../../../types/ui";

export default function Content({children}: LayoutProps) {
	return <div className="bg-purple-600 flex justify-center items-center h-[calc(100%-288px)]">
		{children}
	</div>
}
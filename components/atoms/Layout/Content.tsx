import { LayoutProps } from "../../../types/ui";

export default function Content({children}: LayoutProps) {
	return <div className="border rounded border-outlineGrey-100 flex justify-center items-center h-[calc(100%-288px)] mx-8">
		{children}
	</div>
}
import { LayoutProps } from "../../../types/ui";

export default function FooteContainer({children}: LayoutProps) {
	return <div className="w-screen h-36 absolute bottom-0 flex justify-center items-center">
		{children}
	</div>
}
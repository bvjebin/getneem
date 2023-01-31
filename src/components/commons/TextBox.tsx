import clsx from "clsx";
import { InputHTMLAttributes } from "react";

export function TextBox({ className = "", children, ...rest }: InputHTMLAttributes<{}>) {
	return (
		<input
			type="text"
			{...rest}
			className={clsx([
				"w-full border border-blue-disabled rounded-lg p-3",
				className,
				{ "bg-gray-secondary opacity-50": rest.disabled },
			])}
		/>
	);
}

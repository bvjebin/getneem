import clsx from "clsx";
import { SelectHTMLAttributes } from "react";

export function DropDown({ className = "", children, ...rest }: SelectHTMLAttributes<{}>) {
	return (
		<select
			className={clsx([
				`p-3 border border-blue-disabled rounded-lg w-full ${className}`,
				{ "bg-gray-secondary opacity-50": rest.disabled },
			])}
			{...rest}
		>
			{children}
		</select>
	);
}

import clsx from "clsx";
import { InputHTMLAttributes } from "react";

export function Checkbox({ id, className = "", checked, ...rest }: InputHTMLAttributes<{}>) {
	return (
		<span>
			<input id={id} type="checkbox" {...rest} className={`opacity-0 absolute h-4 w-4 peer focus:outline-blue-500`} />
			<label
				htmlFor={id}
				className={clsx([
					`inline-block rounded-sm w-4.5 h-4.5 peer-focus:outline outline-blue-600 cursor-pointer border-2`,
					className,
					{ "bg-green-primary border-green-primary": checked, "border-blue-secondary": !checked },
				])}
			>
				<svg
					className={clsx(["fill-current w-4 h-4 text-white-200 pointer-events-none", {"hidden": !checked}])}
					version="1.1"
					viewBox="-1 0 17 12"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M1.50311 4.22L4.83645 8L11.5031 1"
						stroke="white"
						strokeWidth="2"
						fill="transparent"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</label>
		</span>
	);
}

import clsx from "clsx";
import { InputHTMLAttributes } from "react";

export function Radio({ id, className = "", ...rest }: InputHTMLAttributes<{}>) {
	return (
		<span>
			<input id={id} type="radio" {...rest} className={`opacity-0 absolute h-4 w-4 peer focus:outline-blue-500`} />
			<label
				htmlFor={id}
				className={clsx([
					`inline-block rounded-full w-4.5 h-4.5 peer-focus:outline outline-blue-600 cursor-pointer border-2 border-blue-secondary peer-checked:border-green-primary relative`,
					className,
					"peer-checked:before:content-[''] peer-checked:before:absolute peer-checked:before:w-[10px] peer-checked:before:h-[10px] peer-checked:before:bg-green-primary peer-checked:before:rounded-full peer-checked:before:-translate-x-1/2 peer-checked:before:-translate-y-1/2 peer-checked:before:left-1/2 peer-checked:before:top-1/2"
					// { "bg-green-primary border-green-primary": checked, "border-blue-secondary": !checked },
				])}
			></label>
		</span>
	);
}

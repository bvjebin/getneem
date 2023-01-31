import { ChangeEvent, useCallback, useId } from "react";
import { Checkbox } from "../commons/Checkbox";
import { DropDown } from "../commons/DropDown";
import { Radio } from "../commons/Radio";
import { TextBox } from "../commons/TextBox";
import { IHouseHoldMember } from "./types";

type Props = {
	householdMember: IHouseHoldMember;
	idx: number;
	onChange: Function;
};
export function Member({ householdMember, idx, onChange }: Props) {
	const id = useId();
	// const onChange = useCallback(() => {});
	return (
		<div className="grid grid-cols-[50px_minmax(200px,_1fr)_60px_150px_150px] gap-3 text-sm">
			<div className="flex justify-center items-center">
				<Checkbox
					checked={householdMember.isCovered}
					name={`Covered_${id}`}
					onChange={(event: ChangeEvent) => {
						const target = event.target as HTMLInputElement;
						onChange({ ...householdMember, isCovered: target.checked }, idx);
					}}
				/>
			</div>
			<div className="flex items-center">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="min-w-min h-6">
					<path
						fillRule="evenodd"
						d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
						clipRule="evenodd"
					/>
				</svg>

				<span className="ml-2 truncate">
					{[householdMember.firstName, householdMember.lastName].join(" ")}
					<span className="ml-2 text-blue-secondary">({householdMember.preferredName})</span>
				</span>
			</div>
			<div className="flex justify-center items-center">
				<Radio id={id} name="Subscriber" />
			</div>
			<div>
				<DropDown name="" disabled={householdMember.isCovered === false} defaultValue={householdMember.type}>
					<option>Type</option>
					<option value="PRIMARY">Primary</option>
					<option value="Secondary">Secondary</option>
				</DropDown>
			</div>
			<div>
				<TextBox
					name={`ID_${id}`}
					id={`ID_${id}`}
					placeholder="Ins ID/SSN"
					disabled={householdMember.isCovered === false}
					// onChange={(e) => {}}
					// value={householdMember.ID || ""}
				/>
			</div>
		</div>
	);
}

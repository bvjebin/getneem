import { useCallback, useState } from "react";
import { Member } from "./Member";
import { IHouseHoldMember } from "./types";

type Props = {
	householdMembers: IHouseHoldMember[];
};

export function HouseHold({ householdMembers }: Props) {
	const [members, setMembers] = useState([...householdMembers]);

	const addMember = useCallback(() => {
		setMembers((members) => {
			const _members = [...members];
			const firstName = `Test ${_members.length}`;
			_members.push({
				firstName,
				lastName: "Bell",
				preferredName: firstName,
				isCovered: false,
				isSubscriber: false,
				type: "",
				ID: "",
			});
			return _members;
		});
	}, []);

	const onChange = useCallback((member: IHouseHoldMember, idx: number) => {
		setMembers((members) => {
			const _members = [...members];
			_members[idx] = member;
			return _members;
		});
	}, []);

	return (
		<form>
			<div className="grid gap-y-3">
				<h2 className="text-base font-medium">Household</h2>
				<div className="grid grid-cols-[50px_minmax(200px,_1fr)_60px_150px_150px] gap-3 text-xs">
					<div>Coverage</div>
					<div>Name</div>
					<div>Subscriber</div>
					<div>Insurance</div>
					<div>ID</div>
				</div>
				{members.map((member, idx) => {
					return <Member key={`member-${member.firstName}`} householdMember={member} idx={idx} onChange={onChange} />;
				})}
				<div className="text-right">
					<button onClick={addMember} type="button" className="text-green-primary text-sm">
						+ Add new member
					</button>
				</div>
			</div>
		</form>
	);
}

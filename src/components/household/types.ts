export interface IHouseHoldMember {
	firstName: string;
	lastName: string;
	preferredName: string;
	isCovered: boolean;
	isSubscriber: boolean;
	type?: "PRIMARY" | "SECONDARY" | "";
	ID?: string;
}
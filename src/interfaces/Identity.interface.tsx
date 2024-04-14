import { Address } from "./Address.interface";
import { Name } from "./Name.interface";

export interface Identity {
	lastname: string;
	firstname: string;
	birthdate: Date;
	address: Address;
	phoneNumber: string;
	email: string;
	extras: Array<Name>;
	softskills: Array<Name>;
	bio: string;
	picture: { url: string };
	role: string;
}

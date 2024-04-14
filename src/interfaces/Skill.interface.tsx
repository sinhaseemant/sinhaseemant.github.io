import { Name } from "./Name.interface";

export interface Skill {
	name: string;
	comment: string;
	keywords: Array<Name>;
}

import { Name } from "./Name.interface";

export interface Education {
	diploma: string;
	school: string;
	city: string;
	startDate: Date;
	endDate: Date;
	current: boolean;
	courses: Array<Name>;
	keywords: Array<Name>;
}

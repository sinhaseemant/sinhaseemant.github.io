import { Name } from "./Name.interface";

export interface Role {
	title: string;
	company: string;
	city: string;
	startDate: Date;
	endDate: Date;
	current: boolean;
	missions: Array<Name>;
	keywords: Array<Name>;
}

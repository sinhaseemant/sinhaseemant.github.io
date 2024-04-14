import { Icon } from "./Icon.interface";

export interface Link {
	name: string;
	pseudo?: string;
	url: string;
	icon: Icon;
}

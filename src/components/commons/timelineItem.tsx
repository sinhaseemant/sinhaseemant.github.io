import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Name } from "../../interfaces/Name.interface";
import {useTranslation} from 'react-i18next';

interface Props {
	title: string;
	name: string;
	city: string;
	startDate: Date;
	endDate: Date;
	current: boolean;
	formatDate: boolean;
	details: Array<Name>;
	keywords: Array<Name>;
}

function TimelineItem(props: Props) {
	const { t, i18n } = useTranslation();
	let details;
	let renderDetails = props.details.map((detail, i) => (
		<li key={i + "-d"}>{detail.name}</li>
	));
	if (renderDetails != null && renderDetails.length > 0) {
		details = (
			<div className="details trim">
				<ul>{renderDetails}</ul>
			</div>
		);
	}
	let keywords;
	let renderKeywords = props.keywords.map((keyword, i) => (
		<li key={i + "-k"}>
			<span className="tag">{keyword.name}</span>
		</li>
	));
	if (renderKeywords != null && renderKeywords.length > 0) {
		keywords = (
			<div className="keywords">
				<ul className="tags">{renderKeywords}</ul>
			</div>
		);
	}

	function renderDate() {
		const formatter = new Intl.DateTimeFormat(i18n.language, { month: "long" });
		if (props.formatDate) {
			return (
				<>
					{props.formatDate ? formatter.format(props.startDate) + " " : ""}
					{props.startDate.getFullYear()} -{" "}
					{props.current
						? t("currently")
						: formatter.format(props.endDate) +
						  " " +
						  props.endDate.getFullYear()}
				</>
			);
		} else {
			return (
				<>
					{props.startDate.getFullYear()} -{" "}
					{props.current ? t("currently") : props.endDate.getFullYear()}
				</>
			);
		}
	}

	return (
		<div className="timeline-item">
			<div className="h5 w-auto text-capitalize">{renderDate()}</div>
			<div>
				<div className="h5 my-3 font-weight-bolder">{props.title}</div>
				<p className="font-weight-bold">
					{props.name}{" "}
					<span className="text-success">
						<FontAwesomeIcon icon={["fas", "map-marker-alt"]} /> {props?.city}
					</span>
				</p>
				{details}
				{keywords}
			</div>
		</div>
	);
}

export default TimelineItem;

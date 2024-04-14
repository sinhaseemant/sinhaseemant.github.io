import React from "react";
import Container from "react-bootstrap/Container";
import { Role } from "../../interfaces/Role.interface";
import TimelineItem from "../commons/timelineItem";
import {useTranslation} from 'react-i18next';

interface Props {
	roles: Array<Role>;
}
function Roles(props: Props) {
	const {t} = useTranslation();
	const { roles } = props;
	const list = roles.map((role, i) => (
		<TimelineItem
			key={i}
			title={role.title}
			name={role.company}
			city={role.city}
			startDate={new Date(role.startDate)}
			endDate={new Date(role.endDate)}
			current={role.current}
			formatDate={true}
			details={role.missions}
			keywords={role.keywords}
		/>
	));
	return (
		<div id="roles" className="bg-light">
			<Container className="py-5">
				<h2 className="text-center mt-5 display-4">{t("roles")}</h2>
				<hr />
				<div className="row mt-4">
					<div className="col-md-10 mx-auto">
						<div className="timeline">{list}</div>
					</div>
				</div>
			</Container>
		</div>
	);
}

export default Roles;

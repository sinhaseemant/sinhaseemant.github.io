import React from "react";
import Col from "react-bootstrap/Col";
import { Skill } from "../../interfaces/Skill.interface";

interface Props {
	skill: Skill;
}

function SkillDetail(props: Props) {
	const skill = props.skill;
	let details = skill.keywords.map((keyword, i) => (
		<li key={i}>
			<span>{keyword.name}</span>
		</li>
	));
	return (
		<Col md={4} xs={12}>
			<div className="tree mb-3 p-3 border border-grey rounded">
				<ul>
					<li className="parent_li">
						<div className="h5">{skill.name}</div>
						<ul>{details}</ul>
					</li>
				</ul>
			</div>
		</Col>
	);
}

export default SkillDetail;

import React from "react";
import SkillDetail from "./SkillDetail";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Skill } from "./../../interfaces/Skill.interface";
import {useTranslation} from 'react-i18next';

interface Props {
	skills: Array<Skill>;
}

function Skills(props: Props) {
	const {t} = useTranslation();
	const { skills } = props;

	let renderSkills = skills.map((skill, i) => (
		<SkillDetail key={i} skill={skill}></SkillDetail>
	));
	return (
		<div id="skills" className="bg-brown text-light">
			<Container className="py-5">
				<h2 className="text-center mt-5 display-4">{t("skills")}</h2>
				<hr className="bg-light" />
				<Row>{renderSkills}</Row>
			</Container>
		</div>
	);
}

export default Skills;

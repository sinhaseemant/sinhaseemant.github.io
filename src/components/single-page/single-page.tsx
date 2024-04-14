import React, { useState, useEffect } from "react";
import { Data as DataEn } from "../../i18n/en/Data.class";
import { Link } from "../../interfaces/Link.interface";


import Navigation from "../navigation/Navigation";
import Educations from "../educations/Educations";
import Roles from "../roles/Roles";
import Skills from "../skills/Skills";
import Hobbies from "../hobbies/Hobbies";
import Footer from "../footer/Footer";
import Info from "../info/Info";

import styles from "./single-page.module.css";
import {useTranslation} from 'react-i18next';
import {Resume} from "../../interfaces/Resume.interface";

function SinglePage() {
	const { t, i18n } = useTranslation();
	let locale;
	let init: Resume;
	if( i18n.language.toLowerCase().startsWith( "en" ) ) {
		locale = "en";
		init = new DataEn();
	} else {
		locale = i18n.language;
		init = new DataEn();
	}
	let initNavLinks: Array<Link> = createNavLinks(init);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [resume, setResume] = useState<Resume>(init);
	const [navLinks, setNavLinks] = useState<Array<Link>>(initNavLinks);
	
	useEffect(() => {
			setResume(init)
			setNavLinks(createNavLinks(init));
			setIsLoading(false);
	}, []);

	if (isLoading) {
		return (
			<div className={styles.loading}>
				<div className={styles.loader}></div>
			</div>
		);
	}

	function createNavLinks(res: Resume): Array<Link> {
		let newNavLinks: Array<Link> = [];

		if (res.identity != null) {
			newNavLinks.push({
				name: res.identity.firstname + " " + res.identity.lastname,
				url: "#bio",
				icon: { class: "fas", name: "angle-right" },
			});
		}
		if (res.jobs.length > 0) {
			newNavLinks.push({
				name: t('roles'),
				url: "#roles",
				icon: { class: "fas", name: "angle-right" },
			});
		}
		if (res.educations.length > 0) {
			newNavLinks.push({
				name: t('educations'),
				url: "#educations",
				icon: { class: "fas", name: "angle-right" },
			});
		}
		if (res.skills.length > 0) {
			newNavLinks.push({
				name: t('skills'),
				url: "#skills",
				icon: { class: "fas", name: "angle-right" },
			});
		}
		if (res.hobbies.length > 0) {
			newNavLinks.push({
				name: t('hobbies'),
				url: "#hobbies",
				icon: { class: "fas", name: "angle-right" },
			});
		}

		return newNavLinks;
	}

	return (
		<div>
			<Navigation links={navLinks} identity={resume.identity} />
			<Info identity={resume.identity} contact={resume.contact} />
			<Roles roles={resume.jobs} />
			<Educations educations={resume.educations} />
			<Skills skills={resume.skills} />
			<Hobbies hobbies={resume.hobbies} />
			<Footer links={resume.links} contact={resume.contact} />
		</div>
	);
}

export default SinglePage;

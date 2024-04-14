import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "../../interfaces/Link.interface";

import styles from "./Footer.module.css";
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

interface Props {
	links: Array<Link>;
	contact: Link;
}
function Footer(props: Props) {
	const [clickedLinks, setClickedLinks] = useState<any>({});

  const handleLinkClick = (linkName:any) => {
    setClickedLinks({ ...clickedLinks, [linkName]: true });
    // You can add any custom tracking logic here if needed
    // Track the social media link click event
  };
	const [clicked, setClicked] = useState(false);

	const handleContactClick = () => {
		setClicked(true);
		// You can add any custom tracking logic here if needed
		// Track the contact link click event
	};

	const handleGitHubClick = () => {
		// You can add any custom tracking logic here if needed
		// Track the GitHub link click event
	};
	const { t } = useTranslation();
	const { links, contact } = props;
	let enActive = "";
	enActive = i18n.language.toLowerCase().startsWith("en") ? styles.langActive : "";


	function changeLanguage(lng: string) {
		i18n.changeLanguage(lng);
	}

	return (
		<footer className={styles.textColor + " bg-dark py-1 border-top border-warning"}>
			<Container className="py-4 text-center">
				<Row>
					<Col md={6} className="pb-2">
						<span>{t("contactme")}</span>
						<OverlayTrigger
							key={contact.name}
							placement="right"
							overlay={<Tooltip id={`tooltip-right`}>{contact.name}</Tooltip>}
						>
							<a
								href={contact.url}
								aria-label={contact.name}
								target="_blank"
								rel="noopener noreferrer"
								className="align-baseline text-light"
								onClick={handleContactClick}
							>
								<FontAwesomeIcon
									icon={[contact.icon.class, contact.icon.name]}
									className="size-2"
								/>
							</a>
						</OverlayTrigger>
					</Col>
				<Col md={6} className="pb-2">
						<span>{ t("onrs" ) }</span>
						{links.map((link, i) => (
        <OverlayTrigger
          key={link.name}
          placement="right"
          overlay={<Tooltip id={`tooltip-right`}>{link.name}</Tooltip>}
        >
          <a
            href={link.url}
            aria-label={link.name}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-secondary align-baseline mr-1 text-light ${clickedLinks[link.name] ? 'disabled' : ''}`}
            onClick={() => handleLinkClick(link.name)}
          >
            <FontAwesomeIcon
              icon={[link.icon.class, link.icon.name]}
              className="size-2"
            />
          </a>
        </OverlayTrigger>
      ))}
					</Col>
				</Row>

				<Row className="pt-2">
					<Col xs={12}>
						{t('projectOnGitHub')}
						<a
							href="https://github.com/sinhaseemant/sinhaseemant.github.io"
							aria-label="GitHub repository"
							target="_blank"
							rel="noopener noreferrer"
							className="text-decoration-none align-baseline text-light"
							onClick={handleGitHubClick}
						>
							GitHub <FontAwesomeIcon icon={["fab", "github"]} />
						</a>
					</Col>
				</Row>

			</Container>
		</footer>
	);
}

export default Footer;

import React from "react";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Hobby } from "../../interfaces/Hobby.interface";

interface Props {
	hobby: Hobby;
}

function HobbyDetail(props: Props) {
	const { hobby } = props;
	return (
		<Col md={6} xs={12} className="text-center">
			<div className="border border-grey rounded mb-3 p-3">
				<FontAwesomeIcon
					icon={[hobby.icon.class, hobby.icon.name]}
					className="display-1"
				/>
				<div className="h5 my-2">{hobby.name}</div>
				<p className="m-0">{hobby.comment}</p>
			</div>
		</Col>
	);
}

export default HobbyDetail;

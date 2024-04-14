import React from "react";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import SinglePage from "./components/single-page/single-page";
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/config';

library.add(fab, fas, far);

function App() {
	if (process.env.NODE_ENV === "production") {
		initializeReactGA();
	}

	return (
		<I18nextProvider i18n={i18n}>
			<SinglePage />
		</I18nextProvider>
	);
}

function initializeReactGA() {
	let GA = "";
	if (process.env.REACT_APP_UA_GOOGLE_PROPERTY !== undefined) {
		GA = process.env.REACT_APP_UA_GOOGLE_PROPERTY;
	}
}

export default App;

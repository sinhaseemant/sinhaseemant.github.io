import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders without exploding", () => {
	const wrapper = render(<App />);
	expect(wrapper).toBeDefined();
});

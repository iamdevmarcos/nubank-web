import { render, screen } from "@testing-library/react";

import App from "./App";

describe("<App />", () => {
  it("should render a welcome text", () => {
    render(<App />);

    expect(screen.getByText(/nubank web/i)).toBeInTheDocument();
  });
});

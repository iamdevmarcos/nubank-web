import { render, screen } from "@testing-library/react";

import SplashScreen from ".";

describe("<SplashScreen />", () => {
  it("should render a initial text", () => {
    render(<SplashScreen />);

    screen.getByText(/comecar/i);
  });
});

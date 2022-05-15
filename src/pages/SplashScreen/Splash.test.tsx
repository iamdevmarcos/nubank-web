import { render, screen } from "@testing-library/react";

import SplashScreen from ".";

describe("<SplashScreen />", () => {
  it("should render a initial text", () => {
    render(<SplashScreen />);

    screen.getByText(/tela de splash screen/i);
    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.logTestingPlaygroundURL();
  });
});

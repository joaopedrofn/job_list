import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("Card", () => {
  it("should render", () => {
    render(<Card />);

    expect(screen.getByTestId("card")).toBeInTheDocument();
  });

  it("should render its children", () => {
    render(
      <Card>
        <div data-testid="child" />
      </Card>
    );

    expect(screen.getByTestId("child")).toBeInTheDocument();
  });
});

import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./Button";

const onClick = jest.fn();

describe("Button", () => {
  it("should render", () => {
    render(<Button />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should render as a link", () => {
    render(<Button link href="test" />);

    expect(screen.getByRole("link")).toBeInTheDocument();
  });

  it("should call 'onClick' when clicked", () => {
    render(<Button onClick={onClick} />);

    const button = screen.getByRole("button");

    fireEvent.click(button);

    expect(onClick).toBeCalledTimes(1);
  });
});

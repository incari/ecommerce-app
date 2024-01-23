import { render, screen, fireEvent } from "@testing-library/react";
import { Header } from "../Header"; // Update with the correct import path

const mockSetValue = jest.fn();
const mockValue = "Sample Search";
describe("Header Component", () => {
  test("renders Header with input and handles value change", () => {
    render(
      <Header
        value={mockValue}
        setValue={mockSetValue}
      />
    );

    const inputElement = screen.getByPlaceholderText(
      "Search by product title, highlights, or price..."
    );
    expect(inputElement).toBeInTheDocument();

    fireEvent.change(inputElement, { target: { value: "New Search" } });

    fireEvent.change(inputElement, { target: { value: "New Search" } });

    // Check if setValue function is called with the correct value
    expect(mockSetValue).toHaveBeenCalledWith("New Search");
  });
});

import { render, screen, fireEvent } from "@testing-library/react";
import SearchInput from "../SearchInput";

describe("SearchInput", () => {
  it("renders the input with placeholder", () => {
    render(<SearchInput value="" onChange={() => {}} />);
    expect(
      screen.getByPlaceholderText(/buscar por marca/i)
    ).toBeInTheDocument();
  });

  it("calls onChange when typing", () => {
    const handleChange = vi.fn();
    render(<SearchInput value="" onChange={handleChange} />);
    const input = screen.getByPlaceholderText(/buscar por marca/i);
    fireEvent.change(input, { target: { value: "iPhone" } });
    expect(handleChange).toHaveBeenCalled();
  });
});

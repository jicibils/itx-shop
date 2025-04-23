import { render, screen, fireEvent } from "@testing-library/react";
import AddToCartButton from "../AddToCartButton";

describe("AddToCartButton", () => {
  it("renders correctly with text", () => {
    render(<AddToCartButton handleAddToCart={() => {}} />);
    expect(screen.getByText("Añadir al carrito")).toBeInTheDocument();
  });

  it("calls the handler when clicked", () => {
    const handler = vi.fn();
    render(<AddToCartButton handleAddToCart={handler} />);
    fireEvent.click(screen.getByText("Añadir al carrito"));
    expect(handler).toHaveBeenCalled();
  });
});

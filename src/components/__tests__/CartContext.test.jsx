import { render, screen, waitFor } from "@testing-library/react";
import { useCart } from "../../hooks/useCart";
import { CartProvider } from "../../context/CartProvider";

function TestComponent() {
  const { cartCount, setCartCount } = useCart();
  return (
    <div>
      <p>Items: {cartCount}</p>
      <button onClick={() => setCartCount(5)}>Set</button>
    </div>
  );
}

describe("CartContext", () => {
  it("provides and updates the cart count", async () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );

    expect(screen.getByText(/Items: 0/)).toBeInTheDocument();
    screen.getByText("Set").click();

    await waitFor(() =>
      expect(screen.getByText("Items: 5")).toBeInTheDocument()
    );
  });
});

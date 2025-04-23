import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import * as api from "../../services/api";
import { CartProvider } from "../../context/CartProvider";
import ProductDetailPage from "../../pages/ProductDetailPage";

vi.mock("../../services/api");

describe("ProductDetailPage", () => {
  beforeEach(() => {
    api.getProductById.mockResolvedValue({
      id: "1",
      brand: "TestBrand",
      model: "TestModel",
      imgUrl: "img.jpg",
      price: 1000,
      options: {
        colors: [{ name: "Negro", code: "1" }],
        storages: [{ name: "128GB", code: "2" }],
      },
    });
  });

  it("renders product details", async () => {
    render(
      <MemoryRouter initialEntries={["/product/1"]}>
        <CartProvider>
          <Routes>
            <Route path="/product/:id" element={<ProductDetailPage />} />
          </Routes>
        </CartProvider>
      </MemoryRouter>,
    );

    expect(
      await screen.findByText("TestBrand - TestModel"),
    ).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("src", "img.jpg");
    expect(
      screen.getByText((_, el) => el.textContent === "1000 €"),
    ).toBeInTheDocument();
  });
});

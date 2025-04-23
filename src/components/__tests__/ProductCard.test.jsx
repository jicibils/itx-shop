import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ProductCard from "../ProductCard";

const product = {
  id: "1",
  brand: "Samsung",
  model: "Galaxy S23",
  imgUrl: "https://example.com/image.jpg",
  price: 999,
};

describe("ProductCard", () => {
  it("renders product brand, model and price", () => {
    render(
      <BrowserRouter>
        <ProductCard product={product} />
      </BrowserRouter>
    );

    expect(screen.getByText(/Samsung/i)).toBeInTheDocument();
    expect(screen.getByText(/Galaxy S23/i)).toBeInTheDocument();
    expect(screen.getByText(/\$999/)).toBeInTheDocument();
  });

  it("renders product image", () => {
    render(
      <BrowserRouter>
        <ProductCard product={product} />
      </BrowserRouter>
    );

    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", product.imgUrl);
    expect(img).toHaveAttribute("alt", product.model);
  });
});

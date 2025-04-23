import { render, screen, fireEvent } from "@testing-library/react";
import ProductSelectors from "../ProductSelectors";

const mockProduct = {
  options: {
    colors: [
      { name: "Rojo", code: "1" },
      { name: "Azul", code: "2" },
    ],
    storages: [
      { name: "64GB", code: "a" },
      { name: "128GB", code: "b" },
    ],
  },
};

describe("ProductSelectors", () => {
  it("renders color and storage options", () => {
    render(
      <ProductSelectors
        product={mockProduct}
        colorCode="1"
        storageCode="a"
        setColorCode={() => {}}
        setStorageCode={() => {}}
      />
    );

    expect(screen.getByLabelText(/color/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/almacenamiento/i)).toBeInTheDocument();
    expect(screen.getByText("Rojo")).toBeInTheDocument();
    expect(screen.getByText("128GB")).toBeInTheDocument();
  });

  it("calls set functions when changed", () => {
    const setColor = vi.fn();
    const setStorage = vi.fn();

    render(
      <ProductSelectors
        product={mockProduct}
        colorCode="1"
        storageCode="a"
        setColorCode={setColor}
        setStorageCode={setStorage}
      />
    );

    fireEvent.change(screen.getByLabelText(/color/i), {
      target: { value: "2" },
    });
    fireEvent.change(screen.getByLabelText(/almacenamiento/i), {
      target: { value: "b" },
    });

    expect(setColor).toHaveBeenCalledWith("2");
    expect(setStorage).toHaveBeenCalledWith("b");
  });
});

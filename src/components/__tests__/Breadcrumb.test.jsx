import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Breadcrumb from "../Breadcrumb";

describe("Breadcrumb", () => {
  it("renders home only for root path", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Breadcrumb />
      </MemoryRouter>
    );

    expect(screen.getByText("Home")).toBeInTheDocument();
  });

  it("renders full breadcrumb for product detail", () => {
    render(
      <MemoryRouter initialEntries={["/product/123"]}>
        <Breadcrumb />
      </MemoryRouter>
    );

    expect(screen.getByText("product")).toBeInTheDocument();
    expect(screen.getByText("Home")).toHaveAttribute("href", "/");
  });
});

import { renderHook } from "@testing-library/react";
import { waitFor } from "@testing-library/react";
import { useCachedProducts } from "../../hooks/useCachedProducts";
import * as api from "../../services/api";

vi.mock("../../services/api");

describe("useCachedProducts", () => {
  beforeEach(() => {
    localStorage.clear();
    vi.resetAllMocks();
  });

  it("returns cached data if available", () => {
    const fakeData = [{ id: 1, model: "iPhone" }];
    const expiry = Date.now() + 100000;
    localStorage.setItem(
      "products",
      JSON.stringify({ data: fakeData, expiry }),
    );

    const { result } = renderHook(() => useCachedProducts());

    expect(result.current.products).toEqual(fakeData);
    expect(result.current.loading).toBe(false);
  });

  it("fetches and caches data if no cache", async () => {
    const fetched = [{ id: 1, model: "Galaxy" }];
    api.getProducts.mockResolvedValue(fetched);

    const { result } = renderHook(() => useCachedProducts());

    await waitFor(() => {
      expect(result.current.products).toEqual(fetched);
      expect(result.current.loading).toBe(false);
    });

    const stored = JSON.parse(localStorage.getItem("products"));
    expect(stored.data).toEqual(fetched);
  });
});

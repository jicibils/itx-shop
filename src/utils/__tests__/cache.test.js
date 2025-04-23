import { getCache, setCache } from "../../utils/cache";

describe("cache utils", () => {
  const KEY = "test";
  const fakeData = { foo: "bar" };

  beforeEach(() => {
    localStorage.clear();
  });

  it("returns null if no cache", () => {
    expect(getCache(KEY)).toBeNull();
  });

  it("returns cached data if not expired", () => {
    const expiry = Date.now() + 10000;
    localStorage.setItem(KEY, JSON.stringify({ data: fakeData, expiry }));
    expect(getCache(KEY)).toEqual(fakeData);
  });

  it("returns null if cache expired", () => {
    const expiry = Date.now() - 1000;
    localStorage.setItem(KEY, JSON.stringify({ data: fakeData, expiry }));
    expect(getCache(KEY)).toBeNull();
  });

  it("sets cache with correct structure", () => {
    setCache(KEY, fakeData);
    const stored = JSON.parse(localStorage.getItem(KEY));
    expect(stored.data).toEqual(fakeData);
    expect(typeof stored.expiry).toBe("number");
  });
});

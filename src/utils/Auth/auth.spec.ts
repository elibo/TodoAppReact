import { doLogin, doLogout, setToken, getToken } from "./auth";

describe("Auth service", () => {
  describe("login ", () => {
    it("should do login correctly", () => {
      expect(doLogin({ name: "Test", password: "test" })).toBe("token");
    });
    it("shouldn't do login", () => {
      expect(doLogin({ name: "", password: "" })).toBe(undefined);
    });
  });

  it("should handle logout", () => {
    expect(doLogout()).toBeFalsy();
  });

  it("should set token", () => {
    setToken("tk");
    expect(sessionStorage.getItem("_token")).toEqual("tk");
  });

  it("should get token", () => {
    setToken("tk");
    expect(getToken()).toBe("tk");
  });
});

import { logout } from "./logout.js";
import { save } from "../../storage/save.js";

import storage from "../../helpers/storage.js";

const accessToken = "fklsjm";

const profile = { name: "example" };

global.localStorage = storage;

describe("logout", () => {
  save(profile, accessToken);
  it("removes token from localstorage", () => {
    logout();
    expect(localStorage.getItem("token")).toEqual(null);
  });
});

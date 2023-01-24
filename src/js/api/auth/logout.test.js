import { logout } from "./logout.js";

import storage from "../../helpers/storage.js";

const accessToken = "fklsjm";

const profile = { name: "example" }

global.localStorage = storage;

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({
            accessToken,
            ...profile
        }),
        status: 200,
        statusText: "OK",
        ok: true
    })
);


describe("logout", () => {
    localStorage.setItem(profile, accessToken);
        it("removes token from localstorage", () => {
            logout();
            expect(localStorage.getItem("token")).toBeNull();
    });
});
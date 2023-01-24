import { createPost } from "./create";

const mockpost = {
    title: "title",
    tags: ["tag1", "tag2"],
    media: "",
    body: "body"
};

const mockfetch = jest.fn().mockResolvedValue({
    ok: true,
    json: jest.fn().mockResolvedValue(mockpost)
});

global.fetch = mockfetch;

describe("create", () => {
    it("returns a valid item with a valid input", async () => {
        const post = await createPost("title", ["tag1", "tag2"], "", "body");
        expect(post).toMatchObject(mockpost);
    });
});

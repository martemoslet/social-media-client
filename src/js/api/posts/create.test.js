import { createPost } from "./create";

const mockpost = {
  title: "title",
  tags: ["tag1", "tag2"],
  media: "",
  body: "body",
};

function fetchSuccess() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: "OK",
    json: () => Promise.resolve(mockpost),
  });
}

describe("create", () => {
  it("returns a valid item with a valid input", async () => {
    global.fetch = jest.fn(() => fetchSuccess());
    const post = await createPost("title", ["tag1", "tag2"], "", "body");
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});

const getGoogleNewsItems = require("./get-google-news-rss");
const mockAxios = require("axios");
const fs = require("fs");
const path = require("path");

jest.mock("axios");

describe("get-google-news-items", () => {
  it("dksfj", async () => {
    // Arrange
    mockAxios.get.mockResolvedValue({
      data: fs.readFileSync(
        path.resolve(__dirname, "../testdata/google-news-rss.xml"),
        "utf8"
      ),
    });
    const result = await getGoogleNewsItems("google", "NL");
    console.log(result)
  });
});

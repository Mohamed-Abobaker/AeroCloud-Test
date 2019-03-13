const { expect } = require("chai");
const { filterFunc } = require("../src/utils");

describe("utils functions", () => {
  it("filterFunc : checks to see if all elements of one array are present in the other", () => {
    expect(
      filterFunc(
        [
          { name: "hotelone", starRating: 5, facilities: ["car park", "pool"] },
          { name: "hoteltwo", starRating: 3, facilities: ["car park", "gym"] },
          { name: "hotelthree", starRating: 3, facilities: [] },
          {
            name: "hotelfour",
            starRating: 4,
            facilities: ["car park", "pool", "gym"]
          }
        ],
        []
      )
    ).to.eql([
      { name: "hotelone", starRating: 5, facilities: ["car park", "pool"] },
      { name: "hoteltwo", starRating: 3, facilities: ["car park", "gym"] },
      { name: "hotelthree", starRating: 3, facilities: [] },
      {
        name: "hotelfour",
        starRating: 4,
        facilities: ["car park", "pool", "gym"]
      }
    ]);
  });
  it("filterFunc : checks to see if all elements of one array are present in the other", () => {
    expect(
      filterFunc(
        [
          { name: "hotelone", starRating: 5, facilities: ["car park", "pool"] },
          { name: "hoteltwo", starRating: 3, facilities: ["car park", "gym"] },
          { name: "hotelthree", starRating: 3, facilities: [] },
          {
            name: "hotelfour",
            starRating: 4,
            facilities: ["car park", "pool", "gym"]
          }
        ],
        ["car park", "pool", "gym"]
      )
    ).to.eql([
      {
        name: "hotelfour",
        starRating: 4,
        facilities: ["car park", "pool", "gym"]
      }
    ]);
  });
});

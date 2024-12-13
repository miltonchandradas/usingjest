const {
  squareNumbers,
  sumSquareNumbers,
  getPostsUsingAxios,
  filterGetPostsUsingAxios,
} = require("./myFunctions");
const axios = require("axios");

describe("Jest Tests - Group 1", () => {
  it("Square of numbers in array", () => {
    const numbers = [3, 5, 25];
    // expect(squareNumbers(numbers)).toBe([9, 25, 625])
    expect(squareNumbers(numbers)).toEqual([9, 25, 625]);
  });

  it("Sum of square numbers in array", () => {
    const numbers = [3, 5, 25];
    expect(sumSquareNumbers(numbers)).toBe(659);
  });

  it("Get Posts using Axios", async () => {
    jest.spyOn(axios, "get").mockReturnValue({
      data: [
        {
          userId: 1,
          title: "title 1",
        },
        {
          userId: 1,
          title: "title 2",
        },
      ],
    });
    expect((await getPostsUsingAxios())[0].body).toBe("User ID: 1");
  });

  it("Filter Get Posts using Axios", async () => {
    jest.spyOn(axios, "get").mockReturnValue({
      data: [
        {
          userId: 1,
          title: "title 1",
        },
        {
          userId: 2,
          title: "title 2",
        },
        {
          userId: 3,
          title: "title 3",
        },
        {
          userId: 4,
          title: "title 4",
        },
      ],
    });

    expect((await filterGetPostsUsingAxios(1)).length).toBe(1);
    expect((await filterGetPostsUsingAxios(2)).length).toBe(1);
    expect((await filterGetPostsUsingAxios(3)).length).toBe(1);
    expect((await filterGetPostsUsingAxios(4)).length).toBe(1);
  });
});

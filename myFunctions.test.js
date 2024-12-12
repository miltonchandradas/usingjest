const { squareNumbers, sumSquareNumbers, getPostsUsingAxios, filterGetPostsUsingAxios } = require("./myFunctions")

describe("Jest Tests - Group 1", () => {
    it ("Square of numbers in array", () => {
        const numbers = [3, 5, 25]
        // expect(squareNumbers(numbers)).toBe([9, 25, 625])
        expect(squareNumbers(numbers)).toEqual([9, 25, 625])
    })

    it ("Sum of square numbers in array", () => {
        const numbers = [3, 5, 25]
        expect(sumSquareNumbers(numbers)).toBe(659)
    })

    it ("Get Posts using Axios", async () => {
        expect((await getPostsUsingAxios()).length).toBe(100)
    })

    it ("Filter Get Posts using Axios", async () => {
        expect((await filterGetPostsUsingAxios()).length).toBe(10)
    })
})
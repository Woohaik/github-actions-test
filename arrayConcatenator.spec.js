const arrayConcatenator = require("./arraysConcatenator");


describe("Return a values in a array", () => {
    it("Number", () => {
        expect(arrayConcatenator(5)).toEqual([5]);
    })
    it("String", () => {
        expect(arrayConcatenator("5")).toEqual(["5"]);
    })
})

describe("Return arrays concateneted", () => {
    it("Numbers", () => {
        expect(arrayConcatenator([5, 4], [4, 4, 9])).toEqual([5, 4, 4, 4, 9]);
    })
    it("Strings", () => {
        expect(arrayConcatenator(["Hello", "World", "space"], ["Seconds"], ["Last"])).toEqual(["Hello", "World", "space", "Seconds", "Last"]);
    })
})
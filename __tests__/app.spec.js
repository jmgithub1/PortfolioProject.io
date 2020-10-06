const { expect } = require("@jest/globals");
const checkWin = require("../check");
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

describe("Tic Tac toe checker function ", () => {
    // given a winning combination of 3 has been hit, returns true
    test("Given winning combination has been hit, returns true", () => {
        expect(checkWin(winningCombos, [0, 1, 2])).toEqual(true);
    });

    // given a NON winning combination of 3 has been hit, return false
    test("Given a NON winning combination has been hit, return false ", () => {
        expect(checkWin(winningCombos,[1, 2, 3])).toEqual(false);
    });

    // given a winning combination of 3 has been hit(not in order), return false
    test("Given winning combination has been hit(not in array order), returns true ", () => {
        expect(checkWin(winningCombos,[1, 0, 2])).toEqual(true);
    });

    // given an empty string, return false
    test("Given a NON winning combination has been hit, return false ", () => {
        expect(checkWin(winningCombos,[])).toEqual(false);
    });

     // Given a combination of 4 digits is passed with a winning combo, return true
     test("Given a combination of 4 digits is passed with a winning combo, return true", () => {
        expect(checkWin(winningCombos,[0, 1, 2, 3, 4])).toEqual(true);
    });
});
    
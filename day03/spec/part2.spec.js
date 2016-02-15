var Santa = require("../Santa.js");
var Grid = require("../Grid.js");
var Elf = require("../Elf.js");

describe("Examples from part2 as specs.", function() {

    var santa, roboSanta, grid, elf;

    beforeEach(function () {
        santa = new Santa();
        roboSanta = new Santa();
        grid = new Grid();
        elf = new Elf(grid, santa, roboSanta);
    });

    it("Delivered three houses after moving", function() {
        elf.followDirections("^v");

        expect(grid.getNumberOfDeliveredHouses()).toBe(3);
    });

    it("Delivered three houses after moving", function() {
        elf.followDirections("^>v<");

        expect(grid.getNumberOfDeliveredHouses()).toBe(3);
    });

    it("Delivered eleven houses after moving", function() {
        elf.followDirections("^v^v^v^v^v");

        expect(grid.getNumberOfDeliveredHouses()).toBe(11);
    });

    // solve puzzle with a test
    it("Reading input calculates the result", function () {
        elf.readDirectionsFromFile();

        expect(grid.getNumberOfDeliveredHouses()).toBe(2341);
    });

});


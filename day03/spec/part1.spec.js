var Santa = require("../Santa.js");
var Grid = require("../Grid.js");
var Elf = require("../Elf.js");

describe("Examples from part1 as specs.", function() {

    var santa, grid, elf;

    beforeEach(function () {
        santa = new Santa();
        grid = new Grid();
        elf = new Elf(grid, santa);
    });

    it("Delivered two houses after moving", function() {
        elf.followDirections(">");

        expect(grid.getNumberOfDeliveredHouses()).toBe(2);
    });

    it("Delivered four houses after moving", function() {
        elf.followDirections("^>v<");

        expect(grid.getNumberOfDeliveredHouses()).toBe(4);
    });

    it("Delivered two houses after moving", function() {
        elf.followDirections("^v^v^v^v^v");

        expect(grid.getNumberOfDeliveredHouses()).toBe(2);
    });

    // solve puzzle with a test
    it("Reading input calculates the result", function () {
        elf.readDirectionsFromFile();

        expect(grid.getNumberOfDeliveredHouses()).toBe(2081);
    });

});


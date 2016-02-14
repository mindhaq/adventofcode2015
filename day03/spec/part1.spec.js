var GridSanta = require('../GridSanta.js');

describe("Examples from part1 as specs.", function() {

    var gridSanta;

    beforeEach(function () {
        gridSanta = new GridSanta();
    });

    it("Delivered two houses after moving", function() {
        gridSanta.execute(">");

        expect(gridSanta.getNumberOfDeliveredHouses()).toBe(2);
    });

    it("Delivered four houses after moving", function() {
        gridSanta.followDirections("^>v<");

        expect(gridSanta.getNumberOfDeliveredHouses()).toBe(4);
    });

    it("Delivered two houses after moving", function() {
        gridSanta.followDirections("^v^v^v^v^v");

        expect(gridSanta.getNumberOfDeliveredHouses()).toBe(2);
    });

    // solve puzzle with a test
    it("Reading input calculates the result", function () {
        gridSanta.readDirectionsFromFile();

        expect(gridSanta.getNumberOfDeliveredHouses()).toBe(2081);
    });

});


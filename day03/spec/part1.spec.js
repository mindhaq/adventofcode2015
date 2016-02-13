var GridSanta = require('../GridSanta.js');

describe("Examples from part1 as specs.", function() {

    var gridSanta;

    beforeEach(function () {
        gridSanta = new GridSanta();
    });

    it("Delivered two houses after moving right", function() {
        gridSanta.execute(">");

        expect(gridSanta.getNumberOfDeliveredHouses()).toBe(2);
    });


    it("Delivered two houses after moving right", function() {
        gridSanta.followDirections("^>v<");

        expect(gridSanta.getNumberOfDeliveredHouses()).toBe(4);
    });


    it("Delivered two houses after moving right", function() {
        gridSanta.followDirections("^v^v^v^v^v");

        expect(gridSanta.getNumberOfDeliveredHouses()).toBe(2);
    });

});


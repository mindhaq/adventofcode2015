var fs = require('fs');

module.exports = function() {

    var grid = [[]];
    var posX = 0;
    var posY = 0;
    var numberOfDeliveredHouses = 0;

    function propertyStringFor(x, y) {
        return "x" + x + "y" + y;
    }

    var isFirstTimeVisit = function (x, y) {
        return !grid[propertyStringFor(x, y)];
    };

    var dropPresent = function () {
        if (isFirstTimeVisit(posX, posY)) {    // first time visit
            grid[propertyStringFor(posX, posY)] = 1;
            numberOfDeliveredHouses++;
        } else {
            grid[propertyStringFor(posX, posY)]++;
        }
    };

    this.getNumberOfDeliveredHouses = function () {
        return numberOfDeliveredHouses;
    };

    this.moveNorth = function () {
        posX++;
        dropPresent();
    };

    this.moveSouth = function () {
        posX--;
        dropPresent();
    };

    this.moveWest = function () {
        posY--;
        dropPresent();
    };

    this.moveEast = function () {
        posY++;
        dropPresent();
    };

    this.execute = function (command) {
        switch (command) {
            case '^':
                this.moveNorth();
                break;

            case 'v':
                this.moveSouth();
                break;

            case '<':
                this.moveWest();
                break;

            case '>':
                this.moveEast();
                break;

            default:
                throw "unknown command " + command;
        }
    };

    this.followDirections = function (directions) {
        for (var i = 0; i < directions.length; i++) {
            this.execute(directions.charAt(i));
        }
    };

    this.readDirectionsFromFile = function () {
        var input = fs.readFileSync("input.txt", "utf8");
        this.followDirections(input);
    };

    // drop first present right away
    dropPresent();
};


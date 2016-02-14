module.exports = function() {

    var grid = [];
    var numberOfDeliveredHouses = 0;

    function propertyStringFor(x, y) {
        return "x" + x + "y" + y;
    }

    var isFirstTimeVisit = function (x, y) {
        return !grid[propertyStringFor(x, y)];
    };

    this.dropPresent = function (posX, posY) {
        if (isFirstTimeVisit(posX, posY)) {    // first time visit
            grid[propertyStringFor(posX, posY)] = true;
            numberOfDeliveredHouses++;
        }
    };

    this.getNumberOfDeliveredHouses = function () {
        return numberOfDeliveredHouses;
    };

};


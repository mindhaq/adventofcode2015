var fs = require('fs');

module.exports = function(grid, santa) {

    var dropPresent = function(santa) {
        grid.dropPresent(santa.getPosX(), santa.getPosY());
    };

    this.followDirections = function (directions) {
        for (var i = 0; i < directions.length; i++) {
            santa.execute(directions.charAt(i));
            dropPresent(santa);
        }
    };

    this.readDirectionsFromFile = function () {
        var input = fs.readFileSync("input.txt", "utf8");
        this.followDirections(input);
    };

    // drop first present right away
    dropPresent(santa);
};


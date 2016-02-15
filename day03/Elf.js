var fs = require('fs');

module.exports = function(grid, santa1, santa2) {

    var santas = santa2 ? [santa1, santa2] : [santa1];

    var dropPresent = function(santa) {
        grid.dropPresent(santa.getPosX(), santa.getPosY());
    };

    this.followDirections = function (directions) {
        var i = 0;
        do {
            for (var j = 0; j < santas.length; j++) {
                santas[j].execute(directions.charAt(i));
                dropPresent(santas[j]);
                i++;
            }
        } while (i < directions.length);
    };

    this.readDirectionsFromFile = function () {
        var input = fs.readFileSync("input.txt", "utf8");
        this.followDirections(input);
    };

    // drop first present right away
    dropPresent(santa1);
};


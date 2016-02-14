module.exports = function() {

    var posX = 0;
    var posY = 0;

    this.getPosX = function () {
        return posX;
    };

    this.getPosY = function () {
        return posY;
    };

    this.execute = function (command) {
        switch (command) {
            case '^':   // North
                posX++;
                break;

            case 'v':   // South
                posX--;
                break;

            case '<':   // West
                posY--;
                break;

            case '>':   // East
                posY++;
                break;

            default:
                throw "unknown command " + command;
        }
    };
};


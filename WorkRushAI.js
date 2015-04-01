var myPlayerNumber = scope.getMyPlayerNumber();

var idleWorkers = scope.getUnits({type:"Worker", player:myPlayerNumber, order:"Stop"});

var enemyPlayer = (function() {
    var players = scope.getArrayOfPlayerNumbers();
    for (i = 0; i < players.length; i++) {
        if (players[i] != myPlayerNumber) {
            return players[i];
        }
    }
    return null;
})();

var enemyPlayerLocation = scope.getStartLocationForPlayerNumber(enemyPlayer);

scope.order("AMove", idleWorkers, enemyPlayerLocation);



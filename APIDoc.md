LittleWarGame AI API
====================

# Scope #

>   The argument in the main function that represents the the viewable portions of the map.
>   Contains a couple functions to get data about the current game state.
>
>   1. `scope.getMyPlayerNumber()`: Returns the player number of the player you are controlling.
>       Ex. If you are the red player, this function returns 1.
>
>   2. `scope.getMyTeamNumber()`: Returns the team number of the player you are controlling.
>       Players of the same team are allied.
>
>   3. `scope.getUnits(filter)`: Returns an array of units. If you call it without a filter, 
>       this function will return an array of all the units you can currently see.
>       Use the filter argument to get only specific units. The filter argument is an object
>       with one or more of the following fields set.  
>           > **type**: only get units of this type (Ex. "Worker")  
>           > **notOfType**: only get units not of this type  
>           > **player**: only get units owned by this player  
>           > **team**: only get units owned by a player in this team  
>           > **order**: only get units currently executing this order (Ex. "Move")  
>           > **enemyOf**: only get units that are owned by an enemy player  

>       Some examples:  
>           > Returns all of own idle workers:  
>           > `var myPlayerNumber = scope.getMyPlayerNumber();`   
>           > `var idleWorkers = scope.getUnits({type:"Worker", player:myPlayerNumber, order:"Stop"});`  
>           >
>           > Returns all of own fighting units:  
>           > `var myPlayerNumber = scope.getMyPlayerNumber();`  
>           > `var fightingUnits = scope.getUnits({notOfType:"Worker", player:myPlayerNumber});`  
>
>   4. `scope.getBuildings(filter)`: Returns an array of buildings. If you call it without a filter,
>       this function will return an array of all the buildings you can currently see.
>       Use the filter argument to get only specific buildings. The filter argument is an object
>       with the same fields as `scope.getUnits` with the following field added.
>           > **onlyFinished**: returns only finished buildings, not under construction.
>   
>   5. `scope.order(order, units, o, shift)`: Gives an order to any amount of units.
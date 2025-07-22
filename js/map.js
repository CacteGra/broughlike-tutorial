map = {
    generateLevel: function(){
        util.tryTo('generate map', function(){
            return map.generateTiles() == map.randomPassableTile().getConnectedTiles().length; //Check if all passable tiles are connected, fails if not (returns false)
        });
    },


    generateTiles: function (){
        let passableTiles=0;
        tiles = [];
        for(let i=0;i<numTiles;i++){
            tiles[i] = [];
            for(let j=0;j<numTiles;j++){
                if(Math.random() < 0.3 || !map.inBounds(i,j)){
                    tiles[i][j] = new Wall(i,j);
                }else{
                    tiles[i][j] = new Floor(i,j);
                    passableTiles++;
                }
            }
        }
        return passableTiles;
    },

    inBounds: function(x,y){
        return x>0 && y>0 && x<numTiles-1 && y<numTiles-1;
    },


    getTile: function(x, y){
        if(map.inBounds(x,y)){
            return tiles[x][y];
        }else{
            return new Wall(x,y);
        }
    },

    randomPassableTile: function(){
        let tile;
        util.tryTo('get random passable tile', function(){
            let x = util.randomRange(0,numTiles-1);
            let y = util.randomRange(0,numTiles-1);
            tile = map.getTile(x, y);
            return tile.passable && !tile.monster;
        });
        return tile;
    }
}
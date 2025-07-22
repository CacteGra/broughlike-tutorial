class Tile{
	constructor(x, y, sprite, passable){
        this.x = x;
        this.y = y;
        this.sprite = sprite;
        this.passable = passable;

	}

    getNeighbor(dx, dy){
        return map.getTile(this.x + dx, this.y + dy) //Get tile from tiles array
    }

    getAdjacentNeighbors(){
        return util.shuffle([ //Shuffle resulting neighbours so that we get unbiased permutation: every permutation is equally likely.
            this.getNeighbor(0, -1),
            this.getNeighbor(0, 1),
            this.getNeighbor(-1, 0),
            this.getNeighbor(1, 0)
        ]);
    }

    getAdjacentPassableNeighbors(){
        return this.getAdjacentNeighbors().filter(t => t.passable); //Filter array from getAdjacentNeighbors where passable is true
    }

    getConnectedTiles(){
        let connectedTiles = [this];
        let frontier = [this];
        while(frontier.length){ //While there is still a tile around the current time
            let neighbors = frontier.pop() //.pop() removes the last element
                                .getAdjacentPassableNeighbors() //Get passable neighbours
                                .filter(t => !connectedTiles.includes(t)); //Filter frontier array from already connected tiles
            connectedTiles = connectedTiles.concat(neighbors); //Merge arrays together
            frontier = frontier.concat(neighbors); // Merge frontier array with neighbors array to spread further checking for passable tiles
        }
        return connectedTiles;
    }

	draw(){
        game.drawSprite(envSpritesheet, this.sprite, this.x, this.y);
	}
}

class Floor extends Tile{
    constructor(x,y){
        var randoming;
        randoming = Math.floor(Math.random() * 2) + 1; //Add variety to floor sprite
        super(x, y, randoming, true);
    };
}

class Wall extends Tile{
    constructor(x, y){
        super(x, y, 0, false);
    }
}
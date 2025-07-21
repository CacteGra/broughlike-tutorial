class Tile{
	constructor(x, y, sprite, passable){
        this.x = x;
        this.y = y;
        this.sprite = sprite;
        this.passable = passable;

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
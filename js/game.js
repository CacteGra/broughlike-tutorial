game = {
    setupCanvas:  function(){
        canvas = document.querySelector("canvas");
        ctx = canvas.getContext("2d");

        //canvas.width = tileSize*(numTiles+uiWidth);
        canvas.width = window.innerWidth;
        //canvas.height = tileSize*numTiles;
        canvas.height = window.innerHeight;

        canvas.style.width = window.innerWidth;

        canvas.style.height = window.innerHeight;
        ctx.imageSmoothingEnabled = false;

    },

    drawSprite: function(sprite, x, y){
        ctx.drawImage(
        spritesheet,
        sprite*32,
        0,
        32,
        32,
        x*tileSize,
        y*tileSize,
        tileSize,
        tileSize
    );
    },

    draw: function(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        game.drawSprite(0, x, y);
    }
}
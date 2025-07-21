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

    drawSprite: function(spritesheet, sprite, x, y){
        ctx.drawImage(
            spritesheet,
            sprite*32, //which sprite on spritesheet
            0, //creates gap on spritesheet
            32, //area on spritesheet
            32,
            x*tileSize, //coordinates
            y*tileSize,
            tileSize, //sprite size
            tileSize
        );
    },

    draw: function(){
        ctx.clearRect(0,0,canvas.width,canvas.height);

        for(let i=0;i<numTiles;i++){
            for(let j=0;j<numTiles;j++){
                map.getTile(i,j).draw();
            }
        }

        game.drawSprite(persoSpritesheet, n, x, y);
    }
}
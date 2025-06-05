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

    },

    draw: function(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.fillRect (x*tileSize,y*tileSize,tileSize,tileSize);
    }
}
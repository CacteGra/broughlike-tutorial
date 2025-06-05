movements = {

touchHandler: function(e) {
    if(e.touches) {
        var fourthX = canvas.width / 4;
        var fourthY = canvas.height / 4;
        console.log(fourthX);

        var touchX = e.touches[0].pageX;

        var touchY = e.touches[0].pageY;
        if(touchX >= e.touches[0].pageX && touchY <= e.touches[0].pageYlon){
            
        }
        if(touchX<fourthX){
            x--;
        }
        else if(touchX>fourthX*3){
            x++;
        };

        if(touchY<fourthY){
            y--;
        }
        else if(touchY>fourthY*3){
            y++;
        };
    }
}

}
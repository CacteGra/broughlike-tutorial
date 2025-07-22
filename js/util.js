util = {
    tryTo: function(description, callback){
        for(let timeout=1000;timeout>0;timeout--){
            if(callback()){
                return;
            }
        }
        throw 'Timeout while trying to '+description;
    },

    randomRange: function(min, max){
        return Math.floor(Math.random()*(max-min+1))+min;
    },

    shuffle: function(arr){
        let temp, r;
        for (let i = 1; i < arr.length; i++) {
            r = this.randomRange(0,i);
            temp = arr[i];
            arr[i] = arr[r];
            arr[r] = temp;
        }
        return arr;
    }
}
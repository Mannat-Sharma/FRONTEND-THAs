const PI = 3.14;
const cylinder = {
    height: 50,
    radius : 2.5,
    volume : function(){
        return "Volume: " + PI*this.radius*this.radius*this.height;
    }
}
console.log(cylinder.volume(20,10))

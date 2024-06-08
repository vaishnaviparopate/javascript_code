const game={
    value:0,
    ladder(){
        return this.value=this.value+10;
    },
    snake(){
        return this.value=0;
    },
    random(){
        let move=Math.floor(Math.random()*7);
        return this.value=this.value+move
        
    }
}
console.log(game.random());
console.log(game.snake());
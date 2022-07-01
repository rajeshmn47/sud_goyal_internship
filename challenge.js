function longestword(str){
    var string=str.split(' ')
    var d=''
    for(i=0;i<string.length;i++){
        if(d.length<string[i].length){
            d=string[i]
        }
    }
    return d;
}
console.log(longestword('who is this lowdaboyutrree jabroni'))
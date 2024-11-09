let sum = 0;
function adding(array){
    for (let i=0; i<array.length; i++){
        sum+=array[i]
    }
    return sum;
}
adding([1, 2, 3, 4, 5]);
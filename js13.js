


function checknum(numbers){
    for(let i=0; i<numbers.length; i++){
        if (numbers[i]%2 === 0 || numbers[i]%7 === 0){
            return true;
        }else{
            return false;
        }
    }
}
checknum([2, 7, 14, 4]);
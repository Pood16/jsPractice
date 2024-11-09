let colors = ["blue", "red", "green"];
let key = "six";
function  hascolor(colors, favorite){
    for (let i=0; i<colors.length; i++){
        if (colors[i] === key){
            return true
        }else{
            return false;
        }
    } 
}
hascolor(colors, key)

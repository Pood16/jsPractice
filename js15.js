function get(score){
    if(score <= 75){
        return "c"
    }
    if(score > 75 && score <= 85){
        return "B"
    }
    if(score > 85){
        return "A"
    }
    
}
get(95)
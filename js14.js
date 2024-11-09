


function get(age){
    if (age > 0 && age<=12){
        return "child"
    }
    else if (age >= 13 && age<=19){
        return "teen"
    }
    else if (age >= 20 ){
        return "adult"
    }
    
}
get(5)
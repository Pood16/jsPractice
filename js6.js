function long(a, b){
    if(a.length < b.length){
        return b
    }else if (a.length > b.length){
        return a
    }else{
        return "equals"
    }
}
long("lahcen", "ouirghane")
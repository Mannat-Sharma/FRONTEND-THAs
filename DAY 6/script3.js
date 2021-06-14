function first(arr,n){
    if (n > 0){
        let elements = arr.slice(0,n);
        console.log(elements);
    }else if (n<0){
        return [];
    }
    return arr.shift();
    
}

first([7, 9, 0, -2],-3);
first([7, 9, 0, -2]);
first([],3);

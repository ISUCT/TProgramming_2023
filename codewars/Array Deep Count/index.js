function deepCount(a){ 

    let arrays = 0; 
    const Counts = (array) => { 
        arrays += array.length;
        for ( let count of array ) {
            if ( Array.isArray(count) ) Counts(count);           
        }         
    } 
    Counts(a);
    return arrays;     
}
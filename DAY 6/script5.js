function maxFrequency(arr){
    let maxFreq = 0;
    for (let i=0; i<arr.length;i++){
        let count = 1
        for (let j=i+1; j<arr.length;j++){
            if (arr[i] === arr[j]){
                count++;
                if (count > maxFreq){
                    maxFreq = count;
                    var maxElement = arr[j];
                }
            }
            
        }
    }
    
    console.log(maxElement,"(", maxFreq, "times)")
}
maxFrequency([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3])

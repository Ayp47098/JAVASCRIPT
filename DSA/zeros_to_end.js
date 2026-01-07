function moveZerosToEnd(arr){
    let index=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==0){
            arr[index]=arr[i]
            index++
        }
    }
    while(index<arr.length){
        arr[index]=0
        index++
    }
    return arr;
}
let arr=[1,0,0,3,4,0,2,0,10]
console.log(moveZerosToEnd(arr));

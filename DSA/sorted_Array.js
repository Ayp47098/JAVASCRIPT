function ArraySortedOrNot(arr){
    // input array hi hona chahie for sure
    if(!Array.isArray(arr)){
        return false
    }
    // khaali array nhi hona chahie yaa sorted array nhi hona chahie
    if(arr.length===0|| arr.length===1){
        return true;
    }
    // sort karte hai array ko 
    for(i=0;i<arr.length-1;i++){
        // array me elements number hi hona chahie
        if(typeof arr[i]!=="number"||typeof arr[i+1]!=="number"){
            return false;
        }
        if (arr[i]>arr[i+1]){
            return false
        }
    }
    return true
}
let arr=[1,3,2,1,9,5,6,7,8]
console.log(ArraySortedOrNot(arr));

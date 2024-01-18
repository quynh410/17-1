let arr = [7,4,3,7,2,9,3,2,4,1];

let max = arr[0];
for( let i = 1; i < arr.length; i ++){
    if(arr[i] > max){
        max = arr[i];
    }
}
console.log("Max = ", +max);



let min = arr[0];
for(let i = 1; i < arr.length; i ++){
    if(arr[i] < min){
        min = arr[i];
    }
}
console.log("Min =", +min)
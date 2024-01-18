let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

function xoaSoLe(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            newArr.push(arr[i]);
        }
    }
    return newArr
}
let newArr = xoaSoLe(arr);

console.log(newArr);
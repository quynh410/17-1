let arr = [1,2,3,4,5,6,7,8,9,10];
let soChan = [];
let soLe = [];

for(let i = 0; i < arr.length; i++){
    if(arr[i] %2 === 0){
        soChan.push(arr[i]);
    }else{
        soLe.push(arr[i]);
    }
}

console.log(soChan);
console.log(soLe);


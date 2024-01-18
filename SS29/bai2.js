let arr = ["tao", "chuoi", "cam", "dua hau", "kiwi"];

function timPhanTuDaiNhat(arr) {
    let maxElement = arr[0]; 
  
for (let i = 1; i < arr.length; i++) {
      if (arr[i].length > maxElement.length) {
        maxElement = arr[i];
    }
}
  
    return maxElement;
}
  
console.log("Mảng: ", arr);
console.log("Phần tử có độ dài lớn nhất trong mảng: ", timPhanTuDaiNhat(arr));
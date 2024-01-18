let chuoi = "Hello World!";

function demKyTuKhongTrong(str) {
    let count = 0;
  
for (let i = 0; i < str.length; i++) {
      if (str[i] !== " ") {
        count++;
    }
}
  
return count;
}
  
console.log("Chuỗi: ", chuoi);
console.log("Số ký tự không trống trong chuỗi: ", demKyTuKhongTrong(chuoi));
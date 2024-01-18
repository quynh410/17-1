let chuoi = prompt("Nhập vào một chuỗi:");
let kyTu = prompt("Nhập vào một ký tự:");
  

function demSoLanXuatHien(chuoi, kyTu) {
    let count = 0;
  
for (let i = 0; i < chuoi.length; i++) {
      if (chuoi[i] === kyTu) {
        count++;
    }
} 
  return count;
}

console.log("Chuỗi: ", chuoi);
console.log("Ký tự: ", kyTu);
console.log("Số lần xuất hiện của ký tự trong chuỗi: ", demSoLanXuatHien(chuoi, kyTu));
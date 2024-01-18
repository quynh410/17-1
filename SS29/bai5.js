let mangChuoi = ["tao", "chuoi", "cam", "dua hau", "kiwi"];
let chuoiNhap = prompt("Nhập vào một chuỗi:");

function locPhanTuChuaChuoi(mang, chuoi) {
    let ketQua = [];
  
    for (let i = 0; i < mang.length; i++) {
      if (mang[i].includes(chuoi)) {
        ketQua.push(mang[i]);
      }
    }
  
    return ketQua;
  }

console.log("Mảng: ", mangChuoi);
console.log("Chuỗi nhập: ", chuoiNhap);
console.log("Các phần tử chứa chuỗi nhập trong mảng: ", locPhanTuChuaChuoi(mangChuoi, chuoiNhap));
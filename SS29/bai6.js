let chuoiDaKhaiBao = "chương trình viết hoa chữ cái đầu của từng từ";

function vietHoaChuCaiDau(chuoi) {
    var mangTu = chuoi.split(' ');

    for (var i = 0; i < mangTu.length; i++) {
        mangTu[i] = mangTu[i].charAt(0).toUpperCase() + mangTu[i].slice(1);
    }
    let ketQua = mangTu.join(' ');

    return ketQua;
}

let ketQua = vietHoaChuCaiDau(chuoiDaKhaiBao);
console.log(ketQua);

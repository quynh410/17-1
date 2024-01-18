let a = 2;
let b = 3;
let c = 4;

function kiemTraChanLe(number) {
    if (number % 2 === 0) {
      return "Số " + number + " là số chẵn.";
    } else {
      return "Số " + number + " là số lẻ.";
    }
  }
  
console.log(kiemTraChanLe(a));
console.log(kiemTraChanLe(b));
console.log(kiemTraChanLe(c));
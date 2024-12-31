function ReverseNumber(num) {
    let isNegative = num < 0;
  num = Math.abs(num);
  
  let result = 0;
//   let result="" if need to include 0
  while (num > 0) {
    let lastnumber = num % 10;
    result = result * 10 + lastnumber;
    //result=result+lastnumber

    num = Math.floor(num / 10);
  }

  return isNegative? -result:result
}

const reversed = ReverseNumber(-12345);
console.log(reversed);

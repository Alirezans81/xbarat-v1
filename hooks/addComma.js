function getNumber(_str) {
  var arr = (_str + "").split("");
  var out = [];
  for (var cnt = 0; cnt < arr.length; cnt++) {
    if (isNaN(arr[cnt]) === false) {
      out.push(arr[cnt]);
    }
  }
  return Number(out.join(""));
}
function addComma(number, returnsZero) {
  if (+number < 1000) {
    return number;
  }
  var num = getNumber(number);
  if (num === 0) {
    return returnsZero ? 0 : "";
  } else {
    return num.toLocaleString();
  }
}

export default addComma;

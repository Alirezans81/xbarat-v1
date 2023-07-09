const convertNumber = (number) => {
  const strNumber = Number(number) + "";
  let numberArray = strNumber.split("");

  let isFloat = false;
  for (let i = numberArray.length - 1; i >= 0; i--) {
    if (numberArray[i] === ".") {
      isFloat = true;
      for (let j = i - 3; j >= 0; j = j - 3) {
        j !== 0 && numberArray.splice(j, 0, ",");
      }
    }
  }

  if (!isFloat) {
    for (let i = numberArray.length - 3; i >= 0; i = i - 3) {
      i !== 0 && numberArray.splice(i, 0, ",");
    }
  }

  const converted = numberArray.join("");

  return converted;
};

const dotIsAvailble = (number) => {
  const strNumber = number + "";
  return !strNumber.includes(".");
};

export default convertNumber;

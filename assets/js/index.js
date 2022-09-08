// Базовый уровень
// 1)

function isAdult(age) {
  if (typeof age !== "number" || isNaN(age) || age >= 150) {
    console.log("Не вірний формат");
    return null;
  } else if (age >= 18) {
    console.log("Ласкаво просимо");
    return true;
  } else {
    console.log("Ви не досягли повноліття");
    return false;
  }
}

// Stackoverflow 1)
function isAdult(age) {

  if (typeof age !== "number" || isNaN(age) || age >= 150) {
    console.log("Не вірний формат");
    return null;
  } return (age >= 18 ? true : false);
}

// 2)

function checkMultiplicity(num1, num2) {
  let message1 = `Число ${num1} кратно числу ${num2}`;
  if (
    typeof num1 !== "number" ||
    typeof num2 !== "number" ||
    isNaN(num1 - num2)
  ) {
    return null;
  } else if (num1 % num2 !== 0) {
    return false;
  } else {
    console.log(message1);
    return true;
  }
}

// Stackoverflow 2)

function checkMultiplicity(num1, num2) {
  let message1 = `Число ${num1} кратно числу ${num2}`;
  if (
    typeof num1 !== "number" ||
    typeof num2 !== "number" ||
    isNaN(num1 - num2)
  ) {
    return null;
  } return (num1 % num2 !== 0 ? false:true);
}



// 3)

function isTriangleExist(num1, num2, num3) {
  if (
    typeof num1 !== "number" ||
    typeof num2 !== "number" ||
    typeof num3 !== "number" ||
    isNaN(num1 - num2 - num3)
  ) {
    return null;
  } else if (
    num1 < num2 + num3 &&
    num2 < num1 + num3 &&
    num3 < num2 + num1) {
    return true;
  } else {
    return false;
  }
}

// Stackoverflow 3)

function isTriangleExist(num1, num2, num3) {
  if (
    typeof num1 !== "number" ||
    typeof num2 !== "number" ||
    typeof num3 !== "number" ||
    isNaN(num1 - num2 - num3)
  ) {
    return null;
  } return (num1 < num2 + num3 &&
    num2 < num1 + num3 &&
    num3 < num2 + num1 ? true:false);
  }



// 4)

function checkNumbers (num1) {
  result = 0;
  num2 = 1;
  if (
    typeof num1 !== "number" ||
    isNaN(num1)) {
    return null;
  } while (num2 <= num1) {
    result = result + num2;
    num2 = num2 + 2;
  } return result;
}

// 5)

function checkSimpleNumber (num1) {
  // debugger;
  let b = 0;
  if (
    typeof num1 !== "number" ||
    isNaN(num1) ||
    num1 <= 0) {
    return null;
  } for (let i = 1; i < num1 ; i++) { //, b < 3) выполняется много вычислений
    b += num1 % i === 0;
  } if (b < 3) {
    console.log(`Число ${num1} простое`);
    return true;
  } else {
    console.log(`Число ${num1} не простое!`);
    return false;
  }
}
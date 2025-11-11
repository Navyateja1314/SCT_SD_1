function convertTemp() {

const inputTemp = parseFloat(document.getElementById('inputTemp').value);
const tempUnits = document.getElementById('tempUnits').value;
const toUnits = document.getElementById('toUnits').value;
const resultElement = document.getElementById('result');

  if (isNaN(inputTemp)) {
    resultElement.textContent=
    "Please Enter a valid temperature";
    return;
  }

  let result;

  // Celsius conversions
  if (tempUnits === "celsius") {
    if (toUnits === "fahrenheit") {
      result = (inputTemp * 9) / 5 + 32;
    } else if (toUnits === "kelvin") {
      result = inputTemp + 273.15;
    } else {
      result = inputTemp; 
    }
  }

  // Fahrenheit conversions
  else if (tempUnits === "fahrenheit") {
    if (toUnits === "celsius") {
      result = ((inputTemp - 32) * 5) / 9;
    } else if (toUnits === "kelvin") {
      result = ((inputTemp - 32) * 5) / 9 + 273.15;
    } else {
      result = inputTemp;
    }
  }

  // Kelvin conversions
  else if (tempUnits === "kelvin") {
    if (toUnits === "celsius") {
      result = inputTemp - 273.15;
    } else if (toUnits === "fahrenheit") {
      result = ((inputTemp - 273.15) * 9) / 5 + 32;
    } else {
      result = inputTemp;
    }
  }

  resultElement.textContent = `${inputTemp}\u00B0${tempUnits.charAt(0).toUpperCase()} = ${result.toFixed(2)}\u00B0${toUnits.charAt(0).toUpperCase()}`;
}
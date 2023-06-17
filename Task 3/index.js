
const input = document.getElementById('input');
const inputSelect = document.getElementById('inputSelect');
const result = document.getElementById('result');
const resultSelect = document.getElementById('resultSelect');
const convertButton = document.getElementById('btn1');

// Function to convert the temperature
function convertTemperature() {
  const inputValue = parseFloat(input.value);
  const inputSelectValue = inputSelect.value;
  const resultSelectValue = resultSelect.value;
  
  let convertedValue;
  
  if (inputSelectValue === 'celsius') {
    if (resultSelectValue === 'fahrenheit') {
      convertedValue = (inputValue * 9/5) + 32;
    }
     else if (resultSelectValue === 'kelvin') {
      convertedValue = inputValue + 273.15;
    } else {
      convertedValue = inputValue;
    }
  }
  
  else if (inputSelectValue === 'fahrenheit') {
    if (resultSelectValue === 'celsius') {
      convertedValue = (inputValue - 32) * 5/9;
    } else if (resultSelectValue === 'kelvin') {
      convertedValue = (inputValue - 32) * 5/9 + 273.15;
    } else {
      convertedValue = inputValue;
    }
  } 
  
  else if (inputSelectValue === 'kelvin') {
    if (resultSelectValue === 'celsius') {
      convertedValue = inputValue - 273.15;
    } else if (resultSelectValue === 'fahrenheit') {
      convertedValue = (inputValue - 273.15) * 9/5 + 32;
    } else {
      convertedValue = inputValue;
    }
  }
  
  result.value = convertedValue.toFixed(2);
}

convertButton.addEventListener('click', convertTemperature);



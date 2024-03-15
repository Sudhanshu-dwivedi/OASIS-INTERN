const temperatureInput = document.getElementById("temperature");
const unitSelect = document.getElementById("unit");
const convertBtn = document.getElementById("convert");
const resultDisplay = document.getElementById("result");

convertBtn.addEventListener("click", function() {
  const temperature = parseFloat(temperatureInput.value);
  const unit = unitSelect.value;

  if (isNaN(temperature)) {
    resultDisplay.textContent = "Please enter a valid number.";
    return;
  }

  let convertedTemperature;

  if (unit === "celsius") {
    convertedTemperature = (temperature * 9/5) + 32;
    convertedTemperature = convertedTemperature.toFixed(2); 
    resultDisplay.textContent =  String(convertedTemperature)+"\°F" ;
} else {
    convertedTemperature =   (temperature - 32) * 5/9;
    convertedTemperature = convertedTemperature.toFixed(2);
    resultDisplay.textContent =  String(convertedTemperature)+"\°C"
  }
})

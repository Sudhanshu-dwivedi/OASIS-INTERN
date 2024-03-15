let display = document.getElementById('display');

function Display(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}

function calculateSquareRoot() {
  const inputValue = display.value;
  if (inputValue !== '') {
    const result = Math.sqrt(eval(inputValue));
    display.value = result;
  }
}
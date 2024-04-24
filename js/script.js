// Ubah dari Celcius Ke Fahrenheit
function celsiusToFahrenheit(celsius) {
  return celsius * 9/5 + 32;
}

// Ubah dari Fahrenheit ke Celcius
function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}

// Tombol Submit dan Reset
function resetInputs() {
  document.getElementById('inptTextCel').value = '';
  document.getElementById('inptTextFar').value = '';
  document.getElementById('inptTextCalculation').value = '';
}
// Tombol Reverse
function reverseCelsiusToFahrenheit() {
    var celInput = document.getElementById('inptTextCel').value;
    if (celInput.trim() === '') {
        showPopup('Mohon isi input dengan nilai suhu dalam Celcius!');
        return;
    }
    
    var farValue = celsiusToFahrenheit(parseFloat(celInput));
    document.getElementById('inptTextFar').value = farValue;
}

function reverseFahrenheitToCelsius() {
    var farInput = document.getElementById('inptTextFar').value;
    if (farInput.trim() === '') {
        showPopup('Mohon isi input dengan nilai suhu dalam Fahrenheit!');
        return;
    }
    
    var celValue = fahrenheitToCelsius(parseFloat(farInput));
    document.getElementById('inptTextCel').value = celValue;
}

// Biar bisa tampil Perhitungan
function calculasiOnCel() {
  var resultCel = document.getElementById('inptTextCel').value;
  if(resultCel !== '') {
      var farValue = celsiusToFahrenheit(parseFloat(resultCel));
      var calculationText = "Rumus untuk mengonversi suhu dari Celsius ke Fahrenheit adalah: F = (" + resultCel + " * 9/5) + 32  ";
      document.getElementById('inptTextCalculation').value = calculationText;
  }
}

function calculasiOnFar() {
  var resultFar = document.getElementById('inptTextFar').value;
  if(resultFar !== '') {
      var celValue = fahrenheitToCelsius(parseFloat(resultFar));
      var calculationText = "Rumus untuk mengonversi suhu dari Fahrenheit ke Celcius adalah: C = ("+ resultFar + " - 32) * 5/9 " ;
      document.getElementById('inptTextCalculation').value = calculationText;
  }
}

// 
document.getElementById('btnKonversi').addEventListener('click', reverseCelsiusToFahrenheit);
document.getElementById('btnReset').addEventListener('click', resetInputs);
document.getElementById('btnReverse').addEventListener('click', reverseFahrenheitToCelsius);
document.getElementById('btnKonversi').addEventListener('click', calculasiOnCel);
document.getElementById('btnReverse').addEventListener('click', calculasiOnFar);
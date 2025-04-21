window.onload = () => {
    const inputs = document.querySelectorAll("input");
  
    inputs.forEach(input => {
      input.addEventListener('input', calculate);
    });
  }
  
  function calculate() {
    const Petrol_Price = parseFloat(document.querySelector('#Petrol_Price').value);
    const liters = parseFloat(document.querySelector('#liters').value);
  
    if (!Petrol_Price || !liters) {
      document.querySelector('#totalAmount').innerText = "--";
      return;
    }
  
    const total = (Petrol_Price * liters).toFixed(2);
    document.querySelector('#totalAmount').innerText = `${total}`;
  }
  
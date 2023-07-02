var string = '';
const buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((btn) => {
  btn.addEventListener('click', (e) => {
    if (e.target.innerHTML == '=') {
      let calculate = string;
      calculate = eval(calculate);
      document.querySelector('input').value = calculate;
    } else {
      string = string + e.target.innerHTML;
      document.querySelector('input').value = string;
    }
    if (e.target.innerHTML == 'C') {
      string = '';
      document.querySelector('input').value = string;
    }
  });
});

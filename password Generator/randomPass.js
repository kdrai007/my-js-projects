const num = '1234567890';
const lowerCase = 'abcdefghijklmnopquvwrstxyz';
const upperCase = 'ABCDEFGHIJKLMNOPQUVWRSTXYZ';
const specialLetters = '!@#$%^&*(+)';

let i = 0;

function randomNum(num) {
  const randomNum = Math.floor(Math.random() * num);
  return randomNum;
}

function randomPassword() {
  let password = '';
  while (i < 4) {
    password =
      password +
      num[randomNum(num.length)] +
      lowerCase[randomNum(lowerCase.length)] +
      upperCase[randomNum(upperCase.length)] +
      specialLetters[randomNum(specialLetters.length)];
    i = i + 1;
  }
  return password;
}
const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
  document.querySelector('.show-password').textContent = randomPassword();
});

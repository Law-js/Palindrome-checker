const input = document.querySelector('input');
const button = document.querySelector('button');

const isPalindrome = (str) => {
  const smallStr = str.value.toLowerCase().replace(/[\W_]/g, '');
  const reversed = smallStr.split('').reverse().join('');

  if (reversed === smallStr) console.log('Is a Palindrome');
  else console.log('Is not a Palindrome');
};

button.addEventListener('click', () => isPalindrome(input.value));

const input = document.getElementById('input');

const buttons = document.querySelectorAll('.container button');

buttons.forEach(button => {
  button.addEventListener('click', function() {
    const buttonText = button.textContent;

    if (buttonText === 'AC') {
      input.value = '';
    } 
    else if (buttonText === 'DEL') {
      input.value = input.value.slice(0, -1);
    } 
    else if (buttonText === '=') {
     input.value = eval(input.value);
    }
    else {
      input.value += buttonText;
    }
  });
});

var password = document.getElementById('password')
password.addEventListener('input', function () {
  const password = this.value;
  const number = /[0-9]/;
  const special_character = /[!@#$%^&*(),.|:""<>]/;
  const lower_case = /[a-z]/;
  const upper_case = /[A-Z]/;

  if (number.test(password)) {
    document.getElementById('number').classList.add('valid');
  }
  else {
    document.getElementById('number').classList.remove('valid');
  }

  if (password.length >= 12) {
    document.getElementById('length').classList.add('valid');

  }
  else {
    document.getElementById('length').classList.remove('valid');
  }

  if (special_character.test(password)) {
    document.getElementById('special').classList.add('valid');
  } else {
    document.getElementById('special').classList.remove('valid');

  }

if (lower_case.test(password)) {
  document.getElementById('lower').classList.add('valid');
} else {
   document.getElementById('lower').classList.remove('valid');
}

if (upper_case.test(password)) {
  document.getElementById('upper').classList.add('valid');
} else {
  document.getElementById('upper').classList.remove('valid');
}


})

function save() {
  const email = document.getElementById("email").value;
  window.localStorage.setItem('Email user',email);

  // Save the email above email to local storage
}

function display() {
  // ==change code only here== //
  const email = window.localStorage.getItem('Email user'); // get an email from local storage to
  // ==change code only here== //


  const display = document.getElementById("display-email");
  display.innerHTML = email;
}
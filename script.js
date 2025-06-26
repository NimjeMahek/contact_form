console.log("[mahek.js] - JS file is loaded");
function onButtonTap()
{
  const name = document.getElementsByClassName("name")[0];
  const email = document.getElementsByClassName("email")[0];
  const password = document.getElementsByClassName("password")[0];
  console.log("name->",name.Value,typeof name.value);
  console.log("email->",email.Value,typeof email.value);
  console.log("password->",password.Value,typeof password.value);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const hasNoNumbers = /^[^0-9]*$/;

}
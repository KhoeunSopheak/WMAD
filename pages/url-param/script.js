const params =window.location.search;
const urlparams =new URLSearchParams(params);
const name = urlparams.get("name");
const theage = urlparams.get("age");
const theclass = urlparams.get("my-class");




const theName = document.getElementById("name");
const age = document.getElementById("age");
const myClass = document.getElementById("class");


theName.innerText = name; //  using URL parameter to get value and replace "aaa"
age.innerText = theage; //  using URL parameter to get value and replace 2222
myClass.innerText = theclass; //  using URL parameter to get value and replace "cc"
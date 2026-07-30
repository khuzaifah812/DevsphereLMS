// user must enter all data in the fields
//event listeners to capture clicks
//<button type="submit" id="myBtn">Login</button>
const myInput = document.querySelector('#myInput');
if (myInput.ariaValueMax.trim() != ''){
  console.log('Data has been entered:', myInput.value);
}
else{
  console.log('Data not entered');
}

const myButton = document.querySelector('#myBtn');

myButton.addEventListener('click', (event) => {
  event.preventDefault();
  console.log('Button was clicked');
});

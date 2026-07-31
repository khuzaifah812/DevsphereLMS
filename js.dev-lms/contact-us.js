
function displayData(){

  const userName = document.querySelector('.js-user');
  let userInput = userName.value;
  if(!userInput){
    alert('Please enter a username');
  }

  const userId = document.querySelector('.js-user-id');
  let userIdentity = userId.value;
  if(!userIdentity){
    alert('Please Enter a valid Id');
  }

  const userEmail = document.querySelector('.js-user-email');
  let userValid = userEmail.value;
  if(!userValid){
    alert('Please enter an email');
  }

  const userComment = document.querySelector('.js-user-comment');
  let userIssue = userComment.value;
  if(!userIssue){
    alert('Please enter a comment');
  }


    if(userIssue){
      console.log(`User: ${userInput} | ID: ${userIdentity} | Email: ${userValid} just said:
${userIssue}`);
      alert('✅ Success! Your message has been received, we shall get in touch soon');
    }

}
function holdKey(event){
  if(event.key === 'Enter'){
    displayData();
  }
}
var myform = document.getElementById('myform')
var error = []

myform.addEventListener('submit', function(e){
    e.preventDefault();

    var email = document.getElementById('email')
    var password = document.getElementById('password')
  
    if(email.value == ''){
        error.push('Please enter your email')
    }
    if(password.value == ''){
        error.push('Please enter a correct password')
    }
    alert('Form has been submitted Successfully')
     var message = document.getElementById('messenger')

     message.innerText = error
})
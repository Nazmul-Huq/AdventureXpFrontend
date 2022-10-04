

var form=document.getElementById('form')

form.addEventListener('submit', function(e){
 e.preventDefault()

 var username=document.getElementById('username').value
 var email=document.getElementById('email').value
 var password=document.getElementById('password').value
 var role=document.getElementById('role').value

 fetch('http://localhost:8080/api/auth/user.html', {
  method: 'POST',
  body: JSON.stringify({
    username:username,
    email:email,
    password:password,
    role:role

  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  }
  })
  .then(function(response){ 
  return response.json()})
  .then(function(data)
  {console.log(data)
  username=document.getElementById("username")
  email=document.getElementById("email")
  password=document.getElementById("password")
  role=document.getElementById("role") 
}).catch(error => console.error('Error:', error)); 
});
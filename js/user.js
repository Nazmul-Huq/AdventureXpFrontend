async function doRequest() {
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const email = document.getElementById('email');
    const role = document.getElementById('role');

    let url = 'http://localhost:8080/api/auth/user';
    let data = {'username': username, 'password': password, 'email': email,'role': role
};
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
    username: username,
    email:email,
    password:password,
   role:role
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};
fetch(url, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}

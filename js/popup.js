document.querySelector("button").addEventListener("click", brugernavnPopup);
document.querySelector("button").addEventListener("click", passwordPopup);

function passwordPopup() {
  let tekstfieldting = document.querySelector("#inputPassword").value;
  if (tekstfieldting === "") {
    alertNoPassword();
  }
}
function alertNoPassword() {
  alert("Ingen password indtastet!");
  
}
  function alertNoUsername() {
    alert("Intet brugernavn indtastet!");
  }

function brugernavnPopup() {
  let tekstfieldting2 = document.querySelector("#inputUsername").value;
  if (tekstfieldting2 === "") {
    alertNoUsername();
  }
}
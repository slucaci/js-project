const startButton = document.getElementById("start-button");
const examineeNameInput = document.getElementById("examinee-name-input");
function checkName() {
  let examinee = examineeNameInput.value.trim();
  if (examinee === "") {
    alert("Please enter your name!");
  } else {
    window.location.href = "test.html";
    alert("Good luck on your test, " + examinee + ".");
  }
}
document.addEventListener("DOMContentLoaded", function () {
  startButton.addEventListener("click", (event) => {
    event.preventDefault();
    checkName();
  });
});

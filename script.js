const colorPicker = document.getElementById("color");

colorPicker.addEventListener("input", (event) => {
  document.body.style.backgroundColor = event.target.value;
});
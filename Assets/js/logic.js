function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }

const lightButton = document.querySelector("#lightButton")
lightButton.addEventListener("click", myFunction)
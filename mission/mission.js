const themeSelector = document.querySelector("#theme");

function changeTheme() {
  // check to see what the current value of our select is.
  // The current value is conveniently found in themeSelector.value!

  if (themeSelector.value == "dark") {
    // if the value is dark then:
    document.body.setAttribute("class", "dark"); // add the dark class to the body
    document.querySelector("img").setAttribute("src", "byui-logo_white.png"); // change the source of the logo img to point to the white logo.
  } else {
    // otherwise
    document.body.removeAttribute("class"); // remove the dark class
    document.querySelector("img").setAttribute("src", "byui-logo_blue.webp"); // make sure the logo src is the blue logo.
  }
}

// add an event listener to the themeSelector element here.
// Use the changeTheme function as the event handler function.
themeSelector.addEventListener("change", changeTheme);
// You may have noticed that even though a function is executed by calling it with parentheses, when we used it in the eventListener we omitted the parentheses!

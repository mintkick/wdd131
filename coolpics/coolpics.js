menuList = document.querySelector(".links");

menuButton = document.querySelector("#menu");
menuButton.addEventListener("click", () => {
  menuList.classList.toggle("hide");
});
// function toggleHide() {
//   menuList.classList.toggle("hide");
// }

function handleResize() {
  if (window.innerWidth >= 1000) {
    menuList.classList.remove("hide");
  }
}

function viewerTemplate(img, alt) {
  // we're essentially giving this HTML chunk a label to reference it by
  return `<div class="viewer">
    <button class="close-viewer">X</button>
    <img src="${img}" alt="${alt}" />
  </div>`;
} // stunning image of a hot spring

function viewHandler(event) {
  // create a variable to hold the element that was clicked on from event.target
  image = event.target;
  // get the src attribute from that element and 'split' it on the "-"
  // construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
  console.log(image);
  console.log(image.getAttribute("src"));
  console.log(image.getAttribute("src").split("-", 1));
  // bigImage = image.getAttribute("src").split("-", 1).push("-full.jpeg");
  bigImage = image.getAttribute("src").split("-", 1); // array of one string
  bigImage.push("-full.jpeg"); // array of two strings
  console.log(bigImage);
  bigImage = bigImage[0] + bigImage[1]; // string of two strings
  console.log(bigImage);
  // insert the viewerTemplate into the top of the body element
  // (element.insertAdjacentHTML("afterbegin", htmltoinsert))
  document
    .querySelector("body")
    .insertAdjacentHTML("afterbegin", viewerTemplate(bigImage, "picture!"));
  // add a listener to the close button (X) that calls a function called closeViewer when clicked
  document
    .querySelector(".close-viewer")
    .addEventListener("click", closeViewer);
}

function closeViewer() {
  document.querySelector(".viewer").remove();
}

window.addEventListener("resize", handleResize);
handleResize(); // run immediately when page is loaded
document.querySelector(".gallery").addEventListener("click", viewHandler);

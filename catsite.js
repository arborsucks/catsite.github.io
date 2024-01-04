/* Change image on click script */
let currentImage = 0;

function changeImage() {
  const imageElement = document.getElementById('mrBImage');
  imageElement.src = `./resources/images/car${currentImage + 1}.jpg`;
  
  currentImage = ( currentImage + 1 ) % 9;
}
/* Play animation once */
document.addEventListener("DOMContentLoaded", function() {
  var element = document.getElementById("mrBImage");
  element.classList.add("animate-once");

  element.addEventListener("animationend", function() {
    element.classList.remove("animate-once");
  });
});

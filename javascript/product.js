function openNav() {
  document.getElementById("overlay-nav").classList.add("active");
}

function closeNav() {
  document.getElementById("overlay-nav").classList.remove("active");
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
let i;
let slides = document.getElementsByClassName("product-img");
let dots = document.getElementsByClassName("thumbnail-img-opacity");
if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " active";
}



function addQuantity() {
    var quantityInput = document.getElementById('quantity');
    quantityInput.value = parseInt(quantityInput.value, 10) + 1;
}

function reduceQuantity() {
    var quantityInput = document.getElementById('quantity');
    var currentValue = parseInt(quantityInput.value, 10);

    if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
    }
}

function addCart() {
  // Implement the logic to redirect to another page
  window.location.href = '../cart.html';

  // Display a message (you can use alert or a custom modal)
  window.alert('Item added to cart!');
}

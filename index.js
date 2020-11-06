var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {

  acc[i].addEventListener("click", function() {
    this.nextElementSibling.classList.toggle("is-visible"); // p
    this.classList.toggle("clicked"); // h1
    this.lastChild.classList.toggle("upsidedown") // arrow
  });


}

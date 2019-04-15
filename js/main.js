function ajouterBordure() {
  var image = document.getElementById('image1');
  image.style.border ="3px solid red";
}
function retirerBordure() {
  var image = document.getElementById('image1');
  image.style.border = "none";
}
document.getElementById('image1').addEventListener('mouseover',ajouterBordure);
document.getElementById('image1').addEventListener('mouseout',retirerBordure);

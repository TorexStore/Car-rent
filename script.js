const images = [
  "images/gallery1.jpg",
  "images/gallery2.jpg",
  "images/gallery3.jpg"
];

let index = 0;
const sliderImage = document.getElementById("sliderImage");

document.querySelector(".next").onclick = () => {
  index = (index + 1) % images.length;
  sliderImage.src = images[index];
};

document.querySelector(".prev").onclick = () => {
  index = (index - 1 + images.length) % images.length;
  sliderImage.src = images[index];
};

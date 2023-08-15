const images = [
    "./images/1.jpg",
    "./images/2.jpg",
    "./images/3.jpg",
    "./images/4.jpg",
    "./images/5.jpg",
    "./images/6.jpg",
    "./images/7.jpg",
    "./images/8.jpg",
    "./images/9.jpg"
];

const imageElement = document.getElementById("currentImg");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

let currentIndex = 0;

function updateImage() {
    imageElement.src = images[currentIndex];
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === images.length - 1;
}

prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateImage();
    }
});

nextButton.addEventListener("click", () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateImage();
    }
});

updateImage();
// Define an array of image file names in your folder
const imageFiles = [
    '/assets/books/Yunyun_Holding_The_C_Programming_Language.png',
    // Add more image file names as needed
];

const imageContainer = document.getElementById('image-container');
const randomImage = document.getElementById('random-image');

// Function to get a random image file name from the array
function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * imageFiles.length);
    return imageFiles[randomIndex];
}

// Function to change the displayed image
function changeImage() {
    const randomImageFileName = getRandomImage();
    const imagePath = 'path/to/your/images/' + randomImageFileName; // Update the path
    randomImage.src = imagePath;
    randomImage.alt = 'Random Image: ' + randomImageFileName;
}

// Call the changeImage function when the page is loaded
window.addEventListener('load', changeImage);

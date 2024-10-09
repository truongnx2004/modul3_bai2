// Function to update the image and text on hover or focus
function upDate(previewPic) {
    console.log("Event triggered for: " + previewPic.alt);
    
    // Change the text of the div with the id 'image'
    document.getElementById("image").innerHTML = previewPic.alt;
    
    // Change the background image of the div
    document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
    document.getElementById("image").style.backgroundSize = "cover";
}

// Function to reset the image and text on mouse leave or blur
function undo() {
    document.getElementById("image").style.backgroundImage = "none";
    document.getElementById("image").innerHTML = "Hover over or focus on an image below to display here.";
}

// Function to initialize the gallery when the page loads
function initializeGallery() {
    console.log("Gallery initialized.");

    // Loop through all images and ensure tabindex attribute is set
    let images = document.querySelectorAll(".gallery-image");
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
        console.log("Tabindex added to image: " + images[i].alt);
    }
}

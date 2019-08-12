//let myImage = document.querySelector('img');

//myImage.onclick = function() {
//    let mySrc = myImage.getAttribute('src');
//   if(mySrc === 'images/eggs.jpg') {
//      myImage.setAttribute ('src','images/fishplate.jpg');
//   } else {
//      myImage.setAttribute ('src','images/eggs.jpg');
//    }
//}

// Changes the Images in Banner on a timer

function displayNextImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("img-banner").src = images[x];
}

function startTimer() {
    setInterval(displayNextImage, 1000);
}

var images = [], x = -1;
images[0] = "images/fishplate.jpg";
images[1] = "images/grills.jpg";
images[2] = "images/tomatoes.jpg";

// Dropdown Other Text Box

function checkvalue(val) {
    if (val === "other")
        document.getElementById('other').style.display = 'block';
    else
        document.getElementById('other').style.display = 'none';
}

const leftBtn = document.getElementById('leftBtn');
const rightBtn = document.getElementById('rightBtn');
const imgSection = document.querySelector('.hero');

var currImgNo = 0;

const imageUrls  = [
    "./images/live1.jpeg",
    "./images/live2.jpeg",
    "./images/live3.jpeg",
    "./images/live4.jpeg",
];

imgSection.style.backgroundImage = "url('"+imageUrls[0]+"')";

const numberofImg = imageUrls.length;


function changeBg(imgno)
{
    imgSection.style.backgroundImage = "url('"+imageUrls[imgno]+"')";
    return;
}

function changeImage(slideDir) {
    if(slideDir === 1) {
        currImgNo += 1;
        if(currImgNo >= numberofImg) currImgNo = 0;
        changeBg(currImgNo);
    }
    else if(slideDir === 0) {
        currImgNo -= 1;
        if(currImgNo < 0) currImgNo = numberofImg - 1;
        changeBg(currImgNo);
    }
    else return;
}

leftBtn.addEventListener('click' , () => {
    changeImage(0);
})

rightBtn.addEventListener('click' , () => {
    changeImage(1);
})
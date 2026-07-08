const dirBtn = document.querySelectorAll('.changeDir');
const imgSection = document.querySelector('.hero');

var currImgNo = 0;

const imageUrls  = [
    "./images/live1.jpeg",
    "./images/live2.jpeg",
    "./images/live3.jpeg",
    "./images/live4.jpeg",
];

imgSection.style.backgroundImage = "url('"+imageUrls[0]+"')";
console.log("hai");
const numberofImg = imageUrls.length;

dirBtn.forEach((dirBtn) => {
    dirBtn.addEventListener('click',(event)=>{
        let dir = event.currentTarget.id;
        if(dir == "leftBtn") {
            currImgNo -= 1;
            if(currImgNo < 0 ) currImgNo = numberofImg-1;
            imgSection.style.backgroundImage = "url('"+imageUrls[currImgNo]+"')";
        }
        else if(dir == "rightBtn") {
            currImgNo += 1;
            if(currImgNo >= numberofImg ) currImgNo = 0;
            imgSection.style.backgroundImage = "url('"+imageUrls[currImgNo]+"')";
        }
        else return;
    });
});
let video;
let durationControl;
let soundControl;
let intervalid;
let soundLevel;

//документ полнстью загружен
S().ready(function() {
    video = document.getElementById("player");

    //вешаем обработчик события onclick на тег видео
    video.addEventListener("click", playstop);

    //
    let playButtons = document.querySelectorAll(".play");
    for (let i = 0; i < playButtons.length; i++) {
        playButtons[i].addEventListener("click", playstop);
    }

    //
    let micControl = document.getElementById("mic");
    micControl.addEventListener("click", soundOf);

    //
    durationControl = document.getElementById("durationLevel");
    durationControl.addEventListener("click", setVideoDuration);
    durationControl.addEventListener("onmousemove", setVideoDuration);
    durationControl.addEventListener("mousedown", stopInterval);
    durationControl.min = 0;
    durationControl.value = 0;

    //
    soundControl = document.getElementById("micLevel");
    soundControl.addEventListener("click", changeSoundVolume);
    soundControl.addEventListener("onmousemove", changeSoundVolume);

    //
    soundControl.min = 0;
    soundControl.max = 10;
    //
    soundControl.value = soundControl.max;

    //
    video.addEventListener("ended", function () {
        $(".video__player-img").toggleClass("video__player-img--active");
        videoCurrentTime = 0;
    }, false)
});

//
//
//
function playStop() {
    //
    $(".video__player-img").toggleClass("video__player-img--active");
    //
    durationControl.max = video.duration;

    //
    if (video.paused){
        //
        video.play();
        intervalid = setInterval(updateDuration,1000/66)
        $(".duration__img").addClass("active")
        //
    }else{
        //
        video.pause();
        clearInterval(intervalid);
        $(".duration__img").removeClass("active")
    }
}

function stopInterval() {
    video.pause();
    clearInterval(intervalid);
}

//
function setVideoDuration() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
    video.currentTime = durationControl.value;
    intervalid = setInterval(updateDuration,1000/66);
}

//
function updateDuration() {
    durationControl.value = videoCurrentTime;
}

//
function soundOf() {
    //
    if (video.volume === 0){
        video.volume = soundLevel;
        soundControl.value = soundLevel*10;
    }else{
        //
        soundLevel = video.volume;
        video.volume = 0;
        soundControl.value = 0;
    }
}

//
function changeSoundVolume() {

    //
    video.volume = soundControl.value/10;
    console.log(video.volume); 
    
}
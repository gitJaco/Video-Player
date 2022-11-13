// Grab DOM elements
const video = document.querySelector(".video")
const playButton = document.querySelector(".play")
const stopButton = document.querySelector(".stop")
const playButtonIcon = document.querySelector(".fa-play")
const progressBar = document.querySelector(".progress")
const timestamp = document.querySelector(".timestamp")

// Listen for events
playButton.addEventListener("click", playPauseVideo)
video.addEventListener("click", playPauseVideo)
stopButton.addEventListener("click", stopVideo)
progressBar.addEventListener("change", setVideoProgress)
video.addEventListener("timeupdate", updateVideoProgress)

// Utility functions
function playPauseVideo() {
    if (video.paused) {
        video.play()
    } else {
        video.pause()
    }
    playButtonToggleIcon()
}

function playButtonToggleIcon() {
    if (video.paused) {
        playButtonIcon.classList.remove("fa-pause")
        playButtonIcon.classList.add("fa-play")
    } else {
        playButtonIcon.classList.remove("fa-play")
        playButtonIcon.classList.add("fa-pause")
    }
}

function stopVideo() {
    video.pause()
    video.currentTime = 0
    playButtonToggleIcon()
    progressBar.value = 0
}

function setVideoProgress() {
    video.currentTime = Number((progressBar.value * video.duration) / 100)
    
}

function updateVideoProgress() {
    progressBar.value = Number((video.currentTime / video.duration) * 100)
    let minutes = Math.floor(video.currentTime / 60)
    let seconds = Math.floor(video.currentTime % 60)

    if (minutes < 10) {
        minutes = "0" + minutes
    }

    if (seconds < 10) {
        seconds = "0" + seconds
    }
    timestamp.textContent = `${minutes}:${seconds}`
}


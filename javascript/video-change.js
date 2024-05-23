document.addEventListener("DOMContentLoaded", () => {
    const videos = [
        "../video/background1.mp4",
        "../video/background2.mp4",
        "../video/background3.mp4",
        "../video/background4.mp4",
        "../video/background5.mp4",
        "../video/background6.mp4",
        "../video/background7.mp4"
    ];

    const videoElement = document.getElementById("video-background");
    const randomIndex = Math.floor(Math.random() * videos.length);

    videoElement.src = videos[randomIndex];
    videoElement.play();
});

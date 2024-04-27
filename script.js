document.addEventListener("DOMContentLoaded", function() {
    const banners = document.querySelectorAll(".banner img");
    let currentBanner = 0;

    function showBanner(index) {
        banners.forEach(banner => banner.style.display = "none");
        banners[index].style.display = "block";
    }

    function changeBanner() {
        currentBanner = (currentBanner + 1) % banners.length;
        showBanner(currentBanner);
    }

    setInterval(changeBanner, 4000);
});

function cycleImages() {
    var images = $('#banner_area img'),
        now = images.filter(':visible'),
        next = now.next().length ? now.next() : images.first(),
        speed = 1500;

    now.fadeOut(speed);
    next.fadeIn(speed);
}

$(function () {
    setInterval(cycleImages, 5000);
});
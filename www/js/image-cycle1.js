function cycleImages() {
    var images = $('#banner_area img'),
        now = images.filter(':visible'),
        next = now.next().length ? now.next() : images.first(),
        speed = 1000;

    now.fadeOut(speed);
    next.fadeIn(speed);
}

$(function () {
    setInterval(cycleImages, 6000);
});
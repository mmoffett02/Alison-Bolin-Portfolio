document.addEventListener('DOMContentLoaded', function() {
    var currentIndex = 0;
    var images = ["path_to_first_image.jpg", "path_to_second_image.jpg", /* ... up to 50 images */];
    
    var portfolioImage = document.querySelector('#portfolio img');
    var prevButton = document.getElementById('prev');
    var nextButton = document.getElementById('next');

    prevButton.addEventListener('click', function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        portfolioImage.src = images[currentIndex];
    });

    nextButton.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % images.length;
        portfolioImage.src = images[currentIndex];
    });
});

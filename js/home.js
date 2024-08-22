
let navToggle = document.getElementById('navToggle');
navToggle.addEventListener('click', function() {
    let toggleMenu = document.getElementById('toggleMenu');

    if (toggleMenu.style.display == 'block') {
        
        toggleMenu.style.animationName = 'hide';
        
        setTimeout(() => {
            toggleMenu.style.display = 'none';
        }, 650);

    } else {
        toggleMenu.style.display = 'block';
        toggleMenu.style.animationName = 'show';
    }

});


document.addEventListener('DOMContentLoaded', function () {
    let themeToggle = document.getElementById('theme');
    let title = document.getElementById('title');
    let background = document.getElementById('background');


    // Load theme state from localStorage on page load
    if(localStorage.getItem('darkMode') === 'enabled'){
        document.body.classList.add('dark-mode');
        themeToggle.checked = true;
        background.style.backgroundImage = 'url(img/wallpaper/night-fairycore-forest-desktop-wallpaper.jpg)';
        title.style.color = 'wheat';
        title.style.textShadow = '1.5px 1.5px 5px black';
        // document.getElementById('name').style.borderRight = '2px solid white';
        // document.getElementById('fb').style.color = 'white';
    } else {
        background.style.backgroundImage = 'url(img/wallpaper/sunset_minimal_landscape_4k.jpg)';
        title.style.textShadow = '1.5px 1.5px 5px aquamarine';
        title.style.color = 'white';
        // document.getElementById('name').style.borderRight = '2px solid black';
        // document.getElementById('fb').style.color = 'black';
    }

    themeToggle.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode', themeToggle.checked);

        // Save theme state to localStorage
        if (themeToggle.checked) {
            localStorage.setItem('darkMode', 'enabled');
            background.style.backgroundImage = 'url(img/wallpaper/night-fairycore-forest-desktop-wallpaper.jpg)';
            title.style.textShadow = '1.5px 1.5px 5px black';
            title.style.color = 'wheat';
            // document.getElementById('name').style.borderRight = '2px solid white';
            // document.getElementById('fb').style.color = 'white';
        } else {
            localStorage.setItem('darkMode', 'disabled');
            background.style.backgroundImage = 'url(img/wallpaper/sunset_minimal_landscape_4k.jpg)';
            title.style.textShadow = '1.5px 1.5px 5px aquamarine';
            title.style.color = 'white';
            // document.getElementById('name').style.borderRight = '2px solid black';
            // document.getElementById('fb').style.color = 'black';
        }

    });
});


// document.getElementById('scroll').addEventListener('click', function() {
//     scrollDownSlowly();

// });

function scrollDownSlowly() {
    let targetElement = document.getElementById('introduction'); // Chọn phần tử mà bạn muốn cuộn đến
    let targetPosition = targetElement.offsetTop + 12; // Vị trí y của phần tử
    let initialPosition = window.scrollY; // Vị trí y hiện tại của trang

    let distance = targetPosition - initialPosition; // Khoảng cách cần cuộn

    let duration = 700; // Thời gian cuộn (1 giây)
    let frames = 60; // Số frame trong mỗi giây
    let interval = duration / frames; // Khoảng thời gian giữa mỗi frame

    let frameCount = 0;

    let scrollInterval = setInterval(function() {
        let progress = frameCount / frames;
        let newY = initialPosition + distance * progress;

        window.scrollTo(0, newY);

        frameCount++;

        if (frameCount === frames) {
            clearInterval(scrollInterval);
        }
    }, interval);
}


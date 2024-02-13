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


    // Load theme state from localStorage on page load
    if(localStorage.getItem('darkMode') === 'enabled'){
        document.body.classList.add('dark-mode');
        themeToggle.checked = true;
        
    } else {
        
    }

    themeToggle.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode', themeToggle.checked);

        // Save theme state to localStorage
        if (themeToggle.checked) {
            localStorage.setItem('darkMode', 'enabled');
            
        } else {
            localStorage.setItem('darkMode', 'disabled');
            
        }

    });
});
let navToggle = document.getElementById('navToggle');
navToggle.addEventListener('click', function () {
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
    if (localStorage.getItem('darkMode') === 'enabled') {
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

let mapTopic = new Map();

let topic = document.getElementsByClassName('topic-problem');
for (let i = 0; i < topic.length; i++) {
    let x = topic[i].innerHTML;
    if (!mapTopic.has(x)) {
        mapTopic.set(x, 1);
    }
    else {
        mapTopic.set(x, mapTopic.get(x) + 1);
    }
}

let topicList = document.getElementById('topic-list');

mapTopic.forEach(
    function (value, key) {
        let newSpan = document.createElement('span');
        newSpan.textContent = key + ' : ' + value;
        newSpan.classList = 'fs-15 fw-semibold rounded-5 topic-problem';
        topicList.appendChild(newSpan);
    }
)


let difficult = document.getElementsByClassName('fw-semibold text-easy fs-15');

let easy = 0, medium = 0, hard = 0;
for (let i = 0; i < difficult.length; i++) {
    let x = difficult[i].innerHTML.trim();
    if (x == 'Dễ') {
        easy++;
    }
    else if (x == 'Vừa') {
        medium++;
    }
    else if (x == 'Khó') {
        hard++;
    }
}

let levelList = document.getElementById('level-list');

let newChild = document.createElement('p');
newChild.textContent = 'Dễ : ' + easy;
newChild.classList = 'fw-bold text-easy';

levelList.appendChild(newChild);

newChild = document.createElement('p');
newChild.textContent = 'Vừa : ' + medium;
newChild.classList = 'text-warning fw-bold ms-lg-0 ms-4';

levelList.appendChild(newChild);

newChild = document.createElement('p');
newChild.textContent = 'Khó : ' + hard;
newChild.classList = 'text-danger fw-bold ms-lg-0 ms-4';

levelList.appendChild(newChild);
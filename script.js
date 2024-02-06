document.getElementById('yesButton').addEventListener('click', function () {
    document.getElementById('response').textContent = "I love you so much!";
});

document.getElementById('noButton').addEventListener('mouseover', function (event) {
    const noButton = event.target;
    const maxX = window.innerWidth - noButton.offsetWidth;
    const maxY = window.innerHeight - noButton.offsetHeight;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noButton.style.position = 'absolute';
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
});

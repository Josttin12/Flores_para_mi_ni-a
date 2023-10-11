function duplicateFlower() {
    var originalFlower = document.querySelector('.flower');
    var newFlower = originalFlower.cloneNode(true);
    document.body.appendChild(newFlower);
}

function changePetalColor() {
    var petals = document.querySelectorAll('.flower .Petal1, .flower .Petal2, .flower .Petal3');
    petals.forEach(function (petal) {
        var randomColor = getRandomColor();
        petal.style.background = randomColor;
    });
}

function changePetalColorToGray() {
    var petals = document.querySelectorAll('.flower .Petal1, .flower .Petal2, .flower .Petal3');
    petals.forEach(function (petal) {
        petal.style.background = 'gray';
    });
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeColor() {
    var colorBox = document.getElementById('colorBox');
    var colorCode = document.getElementById('colorCode');
    var randomColor = getRandomColor();
    colorBox.style.backgroundColor = randomColor;
    colorCode.textContent = randomColor;
}

function copyColorCode() {
    var colorCode = document.getElementById('colorCode');
    var tempInput = document.createElement('input');
    tempInput.value = colorCode.textContent;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert('Color code copied to clipboard: ' + colorCode.textContent);
}

function resetSelection() {
    var colorBox = document.getElementById('colorBox');
    var colorCode = document.getElementById('colorCode');
    colorBox.style.backgroundColor = '#ffffff';
    colorCode.textContent = '';
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

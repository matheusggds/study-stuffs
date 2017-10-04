var gatoImg = document.querySelectorAll('.gatoToClick'),
    countClicker = 0;

    for (var i = 0; i < gatoImg.length; i++) {
        gatoImg[i].addEventListener("click", function() {
            countClicker += 1;
            document.querySelector('.clickCounter').innerHTML = countClicker;
        })
    }
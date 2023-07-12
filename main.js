window.addEventListener('DOMContentLoaded', function() {
    var popup = document.getElementById('popup');
    var botaoFechar = document.querySelector('.close-button');
    var esconderPopup = document.getElementById('hide-popup');

    if (localStorage.getItem('hidePopup') === 'true') {
        popup.style.display = 'none';
    } else {
        popup.style.display = 'block';
    }

    function closePopup() {
        closePopup();

        if (esconderPopup.checked) {
            localStorage.setItem('hidePopup', 'true');
        }
    }

    botaoFechar.addEventListener('click', closePopup);
    closePopup();
});
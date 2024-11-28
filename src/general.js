function setActiveMenuItem() {
    const currentUrl = document.location.href;
    const menuLinks = document.querySelectorAll('.menu a');
    menuLinks.forEach(link => {
        if (link.href === currentUrl) {
            link.parentElement.classList.add('active');
        }
    });
}

window.onload = setActiveMenuItem;


(function() {
    const logoImage = document.getElementById('logoImage');

    logoImage.addEventListener('mouseover', function() {
        logoImage.classList.add('rotate');
    });

    logoImage.addEventListener('mouseout', function() {
        logoImage.classList.remove('rotate');
    });
})();
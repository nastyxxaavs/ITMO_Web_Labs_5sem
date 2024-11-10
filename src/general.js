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
    let startTime = performance.now();

    window.addEventListener('load', function() {
        let endTime = performance.now();
        let loadTime = (endTime - startTime).toFixed(2);
        document.getElementById('loadingStats').innerText = 'Page load time is  '+ loadTime+ '  milliseconds';
    });
})();

(function() {
    const logoImage = document.getElementById('logoImage');

    logoImage.addEventListener('mouseover', function() {
        logoImage.classList.add('rotate');
    });

    logoImage.addEventListener('mouseout', function() {
        logoImage.classList.remove('rotate');
    });
})();
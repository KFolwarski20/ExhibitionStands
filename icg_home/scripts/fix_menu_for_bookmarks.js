var menuItems = document.querySelectorAll('.menu-item');

window.addEventListener('scroll', function() {
    var scrollPos = window.scrollY;

    menuItems.forEach(function(item) {

        var itemPos = item.getBoundingClientRect().top + scrollPos;

        if (scrollPos >= itemPos) {
            
            menuItems.forEach(function(i) {
                i.classList.remove('active');
            });

            item.classList.add('active');
        }
    });
});
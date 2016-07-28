$(document).ready(function () {
    var transparent = true;
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
    
    $(window).scroll(function () {
        checkForNav();
    });
    
    var checkForNav = debounce(function () {
        if ($(document).scrollTop() > 550) {
            if (transparent) {
                transparent = false;
                $('nav[role="navigation"]').addClass('navbar-solid');
            }
        }
        else {
            if (!transparent) {
                transparent = true;
                $('nav[role="navigation"]').removeClass('navbar-solid');
            }
        }
    }, 17);

    function debounce(func, wait, immediate) {
        var timeout;
        return function () {
            var context = this
                , args = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            }, wait);
            if (immediate && !timeout) func.apply(context, args);
        };
    };

    function inView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();
        return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom) && (elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }
    
    $(function(){
        $('.mixitup').mixItUp();
    })
});
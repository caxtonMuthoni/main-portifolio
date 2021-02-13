$(document).ready(function () {

    // Current page tracking
    $('.js__nav-link').click(function () {
        $('.js__nav-link').removeClass("navbar__link--active");
        $(this).addClass("navbar__link--active");
    });

    // change navbar on scroll
    $('.js--section-about').waypoint(function (direction) {
        if (direction === "down") {
            $('.navbar').addClass('navabar-light')
        } else {
            $('.navbar').removeClass('navabar-light')
        }
    }, {
        offset: '60px'
    })

        //    Side menu 

        $('.js--toggle-menu').click(function () {
            console.log("clicked")
            $('.side-nav').toggleClass('side-nav__active')
        })

    // Smooth scroll
    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });

});
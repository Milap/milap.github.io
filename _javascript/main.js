document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {

                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });
    }
    
    var headerHeight = $(".is-fixed-top").height();
    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            var hash = this.hash;
            var scrollToPosition = $(target).offset().top - headerHeight;
            if (target.length) {
                $('html, body').animate({
                    'scrollTop': scrollToPosition
                }, 600, function() {
                    window.location.hash = "" + hash;
                    $('html, body').animate({
                        'scrollTop': scrollToPosition
                    }, 0);
                });
            }
        }
    });

    if($('.bxslider').length > 0) {
        $('.bxslider').bxSlider({
            captions: true,
            adaptiveHeight: true
        });
    }

    if($('#portfolio_gallery').length > 0) {
        $('#portfolio_gallery').lightGallery({
            selector: '.portfolio-image'
        });
    }

    $(".filter-button").click(function() {
        var value = $(this).attr('data-filter');
        if (value == "all") {
            $('.filter').show('1000');
        } else {
            $(".filter").not('.' + value).addClass('fadeInRight animated').hide();
            $('.filter').filter('.' + value).addClass('fadeInRight animated').fadeIn('5000');
        }
        if ($(".filter-button").removeClass("active")) {
            $(this).removeClass("active");
        }
        $(this).addClass("active");
    });

    if($("form").length > 0) {
        $("form").validate({
            rules: {
                name: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                subject: {
                    required: true
                },
                message: {
                    required: true
                }
            },
            submitHandler: function(form) {
                form.submit();
            }
        });
    }

    setTimeout(function() {
        if (window.location.hash) {
            var target = $(window.location.hash);
            var hash = window.location.hash;
            var scrollToPosition = $(target).offset().top - headerHeight;
            $('html, body').animate({
                'scrollTop': scrollToPosition
            }, 900);
            }
    }, 1000);
});
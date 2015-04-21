(function ($) {
    $(function () {

        $('.button-collapse').sideNav();
        $('.parallax').parallax();
        $('select').material_select();
        $('.slider').slider({full_width: false});
        $('.modal-trigger').leanModal();

        function doSomething() {
            if ($(window).width() <= 850) {
//                $("#logo-image").attr('src', 'images/icons/facebook-icon.png');
            }else{
//                $("#logo-image").attr('src', 'images/logo.png');
            }
        }

        var resizeTimer;
        $(window).resize(function () {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(doSomething, 100);
        });

    }); // end of document ready
})(jQuery); // end of jQuery name space

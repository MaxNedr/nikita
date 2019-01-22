(function ($) {
    $(function () {

        $('#up').click(function () {
            $('body,html').animate({scrollTop: 1}, 500);
            return false;
        })

    })
})(jQuery);
'use strict';

(function ($) {
    $(function () {

        $('#up').click(function () {
            $('body,html').animate({scrollTop: 1}, 500);
            return false;
        });
        $('button .button_for_dialog').click( function () {
            $('.dialog').className='d-block'
        })

    })
})(jQuery);
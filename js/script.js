$(window).scroll(function(){
    let el = $('#first_tape');
    if ( $(this).scrollTop() > el.offset().top - 1 ) {
        el.addClass('d-block animated fadeIn ');
    }
    let el2 = $('#second_tape');
    if ( $(this).scrollTop() > el2.offset().top + 3250 ) {
        el2.addClass('d-flex animated fadeIn ');
    }
});

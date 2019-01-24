'use strict';
/*document.querySelector('.button').onmousemove = (e) => {
    const x = e.pageX - e.target.offsetLeft;
    const y = e.pageY - e.target.offsetTop;
    e.target.style.setProperty(' - x',
        `${ x }px`
    );
    e.target.style.setProperty('- y',
    `${ y }px`
)
};*/
/*document.querySelector('.button').onmousemove = function (e) {

    var x = e.pageX - e.target.offsetLeft;
    var y = e.pageY - e.target.offsetTop;

    e.target.style.setProperty('--x', x + 'px');
    e.target.style.setProperty('--y', y + 'px');

};*/
$(window).scroll(function () {

    let el2 = $('#second_tape');
    if ($(this).scrollTop() > el2.offset().top + 3250) {
        el2.addClass('d-flex animated fadeIn ');
    }

});

$('.button_for_dialog').on('click', function () {

    $('#back_dialog').addClass('d-flex').removeClass('d-none')

});

$('#close_dialog').on('click', function () {

    $('#back_dialog').addClass('d-none').removeClass('d-flex')

});


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


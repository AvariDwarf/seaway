$(window).scroll(function(){

    var top = $(this).scrollTop();
    var pos_intro = [
        230 + top*.5,
        43 + top*.8];
    var pos_test = [
        (47 + 1500 - top*.8 < 47) ? 47 : 47 + 1500 - top*.8,
        (42 + 1500 - top*.9 < 42) ? 42 : 42 + 1500 - top*.9
    ];

    if(top>0)
        $('header').css({'background-color': 'hsla(0, 0%, 100%, 90%)',
                         'padding': '25px 0',
                         'border-bottom': '3px solid green'})

    else
        $('header').css({'background-color': 'hsla(0, 0%, 100%, 0%)',
                         'padding': '50px 0',
                         'border-bottom': '3px solid transparent'})

    $(".intro").css("background-position", `100% 377px, 100% ${pos_intro[0]}px, 100% 0, 0 ${pos_intro[1]}px, 0 0`);
    $('.test') .css("background-position", `334px ${pos_test[0]}px, 0 ${pos_test[1]}px, 0 0`);

    $('#front').css("top", `${top+50}px`);
})
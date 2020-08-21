'use strict';

$(function(){
    $('#opinion-show').click(function(){
        $('#form-modal').fadeIn();
    });

    $('.close-modal').click(function(){
        $('#form-modal').fadeOut();
    });

    $('.faq-list-item').click(function(){ //アコーディオン//
        var $answer = $(this).find('.answer'); 
        if($answer.hasClass('open')){       //クラスを所持しているか//
            $answer.removeClass('open');   //クラスを消去//
            $answer.slideUp();
            $(this).find('span').text('+'); //+と表示させる(クローズ状態になっている)//
        }else{
            $answer.addClass('open');   //クラスを所持していなければ、クラスを追加//
            $answer.slideDown();
            $(this).find('span').text('-'); //-と表示させる(オープン状態になっている)//
        }
    });

    $('#top-btn').click(function(){
        $('html', 'body').animate({
            'scrollTop': 0
        }, 'slow');
    });

    $('#to-top').click(function(){
        $('html', 'body').animate({
            'scrollTop': 0
        }, 'slow');
    });
});

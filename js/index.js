/**
 * Created by sumin.
 */
$(function(){
//    ����
    $(window).scroll(function(){
        if($(document).scrollTop()>=$(window).height()){
            $('header').css('background','rgba(255,255,255,.8)').css('border-bottom','1px solid #e8e8e8');
            $('#back_to_top').css('background','rgba(224,162,24,1)')
        }else{
            $('header').css('background','rgba(255,255,255,0)').css('border-bottom','none');
            $('#back_to_top').css('background','rgba(224,162,24,0)')
        }
    });

    $('header .slidenav').hover(function(){
        $(this).children('.navbtn').css('color','#E0A240');
        $(this).children('ul').slideToggle();
    },function(){
        $(this).children('.navbtn').css('color','#333');
        $(this).children('ul').slideToggle();
    });

//    ѡ�
    $('.worktitle li a').click(function(){
       $('.worktitle li a').removeClass('worktitle_active');
        $('.workonshine_tabpic .tab_pic').hide();
        var x = $(this).attr('href');
        $(this).addClass('worktitle_active');
        $(x).fadeIn();
        return false
    });

    //�ص�����
    $("#back_to_top").click(function(){
        $('body,html').animate({scrollTop:0},500);
        return false;
    });
});


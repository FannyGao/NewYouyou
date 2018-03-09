/**
 * Created by Admin on 2018/3/10.
 */
window.onload=function () {
    $(window).scroll(function () {
        let roll=$(window).scrollTop();
        if(roll>=74){
            $('.nav').addClass('fixed');
        }
        else {
            $('.nav').removeClass('fixed');
        }
    })
}
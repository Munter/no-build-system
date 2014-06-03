$(document).ready(function(){
    $('body').addClass('js');

      var $menu = $('#menu'),
        $menulink = $('.menu-link'),
        $wrap = $('.wrapper');

      $menulink.click(function() {
        $menulink.toggleClass('active');
        $wrap.toggleClass('active');
        return false;
        });

    // Registration attendee forms
    //$('#noattendes').prop('selectedIndex',0);
    $('#noattendes').change(function(){
        var sel_val = $("#noattendes option:selected").val();
        $('.attendee').hide();
        for(i=1;i<=parseInt(sel_val);i++) {
            $('.attendee'+i).fadeIn('fast');
        }

        // Early Bird
        /*var amount_ron = function(){
            if(sel_val == 1) {
                return '570';
            }else if(sel_val == 2){
                return '1140';
            }else if(sel_val == 3){
                return '1550';
            }else if(sel_val == 4){
                return '2060';
            }else if(sel_val == 5){
                return '2570';
            }
        };

        if(parseInt(sel_val) > 2){
            $('.total-price span.amount').html(125*sel_val*0.9);
            $('.total-price .discount').show();
        }else {
            $('.total-price span.amount').html(125*sel_val);
            $('.total-price .discount').hide();
        }*/

        //Regular
        /*var amount_ron = function(){
            if(sel_val == 1) {
                return '675';
            }else if(sel_val == 2){
                return '1350';
            }else if(sel_val == 3){
                return '1825';
            }else if(sel_val == 4){
                return '2430';
            }else if(sel_val == 5){
                return '3038';
            }
        };

        if(parseInt(sel_val) > 2){
            $('.total-price span.amount').html(150*sel_val*0.9);
            $('.total-price .discount').show();
        }else {
            $('.total-price span.amount').html(150*sel_val);
            $('.total-price .discount').hide();
        }*/

        // Last Minute
        var amount_ron = function(){
            if(sel_val == 1) {
                return '785';
            }else if(sel_val == 2){
                return '1570';
            }else if(sel_val == 3){
                return '2120';
            }else if(sel_val == 4){
                return '2826';
            }else if(sel_val == 5){
                return '3530';
            }
        };

        if(parseInt(sel_val) > 2){
            $('.total-price span.amount').html(175*sel_val*0.9);
            $('.total-price .discount').show();
        }else {
            $('.total-price span.amount').html(175*sel_val);
            $('.total-price .discount').hide();
        }



        $('.total-price span.amount_ron').html(amount_ron);

        $('#notickets').val(sel_val);

    });



    $(function() {

        // grab the initial top offset of the navigation
        var sticky_navigation_offset_top = $('.content').offset().top;
        // our function that decides weather the navigation bar should have "fixed" css position or not.
        var sticky_navigation = function(){
            var scroll_top = $(window).scrollTop(); // our current vertical position from the top
            // if we've scrolled more than the navigation, change its position to fixed to stick to top, otherwise change it back to relative
            if (scroll_top > sticky_navigation_offset_top) {
		$('.nav-right').css('margin-left','100px');
		$('.nav-left').css('margin-right','100px');
                $('.top-logo').css({'display':'inline-block','transform':'scale(0)'});
                $('.top-logo').fadeIn();
		$('.top-logo').css({'transform':'scale(1)'});
            }else {
		$('.top-logo').fadeOut();
		$('.top-logo').css({'transform':'scale(0)'});
		$('.nav-right').css('margin-left',0);
		$('.nav-left').css('margin-right',0);
            }
        };

        if($(window).width()>979) {
            // run our function on load
           sticky_navigation();

            // and run it again every time you scroll
            $(window).on('resize scroll', function() {
                 sticky_navigation();
            }).resize();
        }

    });

});

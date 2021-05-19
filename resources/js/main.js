$(document).ready(function () {
    // Responsive html font size
    const iw = window.innerWidth;
    const rootScreenWidth = 1366;
    const rootFontPercentage = 44.46;     
   
    if (iw <= 1366) {
        $('#my_html').attr("style", `font-size:${rootFontPercentage}%`);
        
    }else{
        let currentFontSize = (rootFontPercentage * iw) / rootScreenWidth;
        $('#my_html').attr("style", `font-size:${currentFontSize}%`);    
    }
        
    // Responsive html font size end



    // product slider
    $('#cbd_product_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 1000,
        infinite: true,
        autoplay: true,
        arrows: true,
        draggable: true,
        autoplaySpeed: 3000,
        prevArrow: $('#cbd_slider_left_arrow'),
        nextArrow: $('#cbd_slider_right_arrow'),
    });
    // product slider end 


    // review section slider
    $('#review_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 1000,
        infinite: true,
        autoplay: true,
        arrows: true,
        draggable: true,
        autoplaySpeed: 3000,
        prevArrow: $('#review_slider_left_arrow'),
        nextArrow: $('#review_slider_right_arrow'),
    })
    // review section slider end



    // faq section accordion
    $('#faq .acc .acc_item .acc_header .active_icon').click(function () {
        $(this).toggleClass('active');
        $(this).parents('.acc_item').children('.acc_body').slideToggle(300);
    })
    // faq section accordion end


    // learn more section slider    
    $('#learn_more_section_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 1000,
        infinite: true,
        autoplay: true,
        arrows: true,
        draggable: true,
        autoplaySpeed: 3000,
        prevArrow: $('#learn_more_section_slider_left_arrow'),
        nextArrow: $('#learn_more_section_slider_right_arrow'),
    })
    // learn more section slider end   
});
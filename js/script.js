$.each($('.single_post'), function(k,v){
    if($(v).hasClass($('.carousel-indicators li.active').attr('id'))){
        $(v).show();
    } else {
        $(v).hide();
    }
});

$('#carouselExampleIndicators').on('slid.bs.carousel', function () {
    $.each($('.single_post'), function(k,v){
        if($(v).hasClass($('.carousel-indicators li.active').attr('id'))){
            $(v).show();
        } else {
            $(v).hide();
        }
    });
  })
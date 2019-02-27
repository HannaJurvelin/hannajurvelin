$.each($('.single_post'), function(k,v){
    if($(v).hasClass($('.carousel-indicators li.active').attr('id'))){
        $(v).show();
    } else {
        $(v).hide();
    }
});

$('#carousel').on('slid.bs.carousel', function () {
    $.each($('.single_post'), function(k,v){
        if($(v).hasClass($('.carousel-indicators li.active').attr('id'))){
            $(v).show();
        } else {
            $(v).hide();
        }
    });
  })

  $(document).ready(function() {
    $("#cf7_controls").on('click', 'span', function() {
      $("#cf7 img").removeClass("opaque");
  
      var newImage = $(this).index();
  
      $("#cf7 img").eq(newImage).addClass("opaque");
  
      $("#cf7_controls span").removeClass("selected");
      $(this).addClass("selected");
    });

    addressStart = 'hanna';
    addressEnd = 'hannajurvelin.com';
    $('#contactMail').attr('href','mailto:'+addressStart+'@'+addressEnd);
  });

  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ? $("#myBtn").show() : $("#myBtn").hide();
  }

  function topFunction() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  }
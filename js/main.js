// Smooth Scrolling 
$('#2015').on('click', function(){
    const images = $('#champ15').position().top;

    $('html, body').animate(
        {
            scrollTop: images
        },
        900
    );
});

$('#2017').on('click', function () {
    const images = $('#champ17').position().top;

    $('html, body').animate(
        {
            scrollTop: images
        },
        900
    );
});

$("#2018").on("click", function() {
  const images = $("#champ18").position().top;

  $("html, body").animate(
    {
      scrollTop: images
    },
    900
  );
});


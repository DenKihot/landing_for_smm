$(document).ready(function(){
	const slider = new Splide( '.splide' ).mount();

  slider.on( 'active', function(item) {
    setTimeout(() => {
      item.slide.style.filter = 'grayscale(0%)'
    }, 500);
  } );


  slider.on( 'inactive', function(item) {
          item.slide.style.filter = 'grayscale(100%)'
  } );


});

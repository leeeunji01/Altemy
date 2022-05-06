


/* Nivo lightbox
    -----------------------------------------------*/
  $('.gallery-sec .col-md-4 a').nivoLightbox({
        effect: 'fadeScale',
    });


/* Istope Portfolio
-----------------------------------------------*/
jQuery(document).ready(function($){

  if ( $('.iso-box-wrapper').length > 0 ) { 

      var $container  = $('.iso-box-wrapper'), 
        $imgs     = $('.iso-box img');

      $container.imagesLoaded(function () {

        $container.isotope({
        layoutMode: 'fitRows',
        itemSelector: '.iso-box'
        });

        $imgs.load(function(){
          $container.isotope('reLayout');
        })

      });

      //filter items on button click

      $('.filter-wrapper li a.b').click(function(){
        $(".b5 img").css({"padding":"0 64px 64px 0"});
        $(".b10 img").css({"padding":"0 64px 64px 0"});

          var $this = $(this), filterValue = $this.attr('data-filter');

      $container.isotope({ 
        filter: filterValue,
        animationOptions: { 
            duration: 750, 
            easing: 'linear', 
            queue: false, 
        }                
      });             

      // don't proceed if already selected 

      if ( $this.hasClass('selected') ) { 
        return false; 
      }

      var filter_wrapper = $this.closest('.filter-wrapper');
      filter_wrapper.find('.selected').removeClass('selected');
      $this.addClass('selected');

        return false;
      });
      


      $('.filter-wrapper li a.a').click(function(){
 
       $(".b5 img").css({"padding":"0 0px 64px 0"});
       $(".b10 img").css({"padding":"0 0px 64px 0"});


        var $this = $(this), filterValue = $this.attr('data-filter');

    $container.isotope({ 
      filter: filterValue,
      animationOptions: { 
          duration: 750, 
          easing: 'linear', 
          queue: false, 
      }                
    });   
    




    // don't proceed if already selected 

    if ( $this.hasClass('selected') ) { 
      return false; 
    }

    var filter_wrapper = $this.closest('.filter-wrapper');
    filter_wrapper.find('.selected').removeClass('selected');
    $this.addClass('selected');

      return false;
    }); 




  }

});




//select HTML elements
const imgElement = document.querySelector('#lightbulb');
const turnOnButton = document.querySelector('#beLight');
const turnOffButton = document.querySelector('#turn-off');


const imgElement2 = document.querySelector('#growLogo');



// Animated and Still images values
const animatedImgUrl = 'images/giphy1.gif';
const stillImgUrl = 'images/giphy_s.gif';


const animatedImgUrl2 = 'images/growanimation.gif';
const stillImgUrl2 = 'images/growlogo.png'



// play function

turnOnButton.addEventListener('click', function(){
    
  imgElement.setAttribute('src', animatedImgUrl)
    
     imgElement2.setAttribute('src', animatedImgUrl2)
    
    document.getElementById("beLight").style.display = "none";
    
       document.getElementById("wrapper").style.display = "none";
    
});



turnOffButton.addEventListener('click', function(){
   
 imgElement.setAttribute('src', stillImgUrl)
    
    imgElement2.setAttribute('src', stillImgUrl2)
    
    
});










var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');










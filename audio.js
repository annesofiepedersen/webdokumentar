/**
 * fil: audio.js
 * purpose: play audio when the containing div is visible
 **/
window.addEventListener("scroll", function() { // detect scroll event

  let mySound = document.getElementById("myaudio"); // select audio id
  let lyd = document.getElementById("lyd");
    
  console.log("Is the #lyd visible or not? " + elFllVsbl(lyd)); // test

// Below: start and stop audio 
  if ( elFllVsbl(lyd) ) { // if the #lyd div is visible then
    if (!(mySound.curentTime > 0)) {
        // start or stop video
      mySound.play(); // play audio
    }
  } else {
    mySound.pause();
    mySound.currentTime = 0; // rewind the sound
  }
})

// this function will check whether a tag is visible
function elFllVsbl( el ) {
  return (
      el.getBoundingClientRect().top >= 0 && el.getBoundingClientRect().bottom < window.innerHeight);
}

/*
NB: the audio / video tags will allways return true,
solution: place the tag in a div and test for the div in stead
*/

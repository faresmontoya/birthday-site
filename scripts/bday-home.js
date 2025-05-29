import { presents } from './presents.js';

document.querySelector('.js-give-present'). addEventListener('click', generatePresent);


function generatePresent() {
  const max = presents.length - 1;
  const randomPresentNumber = Math.round(Math.random()*max);
  console.log(randomPresentNumber);
  /*
  generate HTML for present:
  one section for message
  one section for image

  make blank at first

  define the random present (ie make about 20 when() )
    and call from a separate tab (ie gifts.js)
    give each present a number (ie message 1, image 1)



  FIRST: Try the generation of html - then randomize - then create the gifts tab
  
 if(randomNumber <= .5) {
  document.querySelector('.js-present-container').innerHTML = ''
 } else {
  console.log('greater than .5')
 }*/
  const presentMessage = presents[randomPresentNumber].message
  const presentImage = presents[randomPresentNumber].image

  document.querySelector('.js-present-container').innerHTML = 
  `
  <div class="present-message">
    ${presentMessage}
  </div>
  <div class="present-image-container">
    <img class="present-image" src="${presentImage}">
  </div>
  `
}
const Eliframe = document.querySelector('#vimeo-player');
console.log(Eliframe);
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player(Eliframe);

console.log(
  JSON.parse(localStorage.getItem('videoplayer-current-time')).seconds
);

player.on(
  'timeupdate',
  throttle(data => {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
  }, 1000)
);

/* player.getVideoTitle().then(function (title) {
  console.log('title:', title);
}); */

player
  .setCurrentTime(
    JSON.parse(localStorage.getItem('videoplayer-current-time')).seconds
  )
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });

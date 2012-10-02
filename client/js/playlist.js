
var tag = document.createElement('script');
tag.src = "//www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '640',
    width: '1170',
    videoId: 'uVlFeE-TQdE',
    playerVars: {
      controls: 0,
      disablekb: 1,
      showinfo: 0
    },
    events: {
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
  $('.player-controls .player-play').addClass('player-pause').removeClass('player-play');
  $('.player-controls .player-pause i').addClass('icon-pause').removeClass('icon-play');
}

var playerControls = $('.player-controls');

// Play
playerControls.on('click', '.player-play', function () {
  player.playVideo();
  $('.player-controls .player-play').addClass('player-pause').removeClass('player-play');
  $('.player-controls .player-pause i').addClass('icon-pause').removeClass('icon-play');
});

// Pause
playerControls.on('click', '.player-pause', function () {
  player.pauseVideo();
  $('.player-controls .player-pause').addClass('player-play').removeClass('player-pause');
  $('.player-controls .player-play i').addClass('icon-play').removeClass('icon-pause');
});

// Previous
playerControls.on('click', '.player-prev', function () {
  var active = $('.active');
  active.removeClass('active');
  var prev = active.is('tr:first-child') ? active.siblings(':first') : active.next();
  prev.addClass('active');
  player.loadVideoById(prev.data('track-id'), 0, 'hd720');
});

// Stop
playerControls.on('click', '.player-stop', function () {
  player.stopVideo();
  $('.player-controls .player-pause').addClass('player-play').removeClass('player-pause');
  $('.player-controls .player-play i').addClass('icon-play').removeClass('icon-pause');
});

// Next
playerControls.on('click', '.player-next', function () {
  var active = $('.active');
  active.removeClass('active');
  var next = active.is('tr:last-child') ? active.siblings(':first') : active.next();
  next.addClass('active');
  player.loadVideoById(next.data('track-id'), 0, 'hd720');
});

// Track operation
$('#playlist').on('click', '.player-play', function () {
  var active = $(this).parents('tr');
  player.loadVideoById(active.data('track-id'), 0, 'hd720');
  $('.active').removeClass('active');
  active.addClass('active');
});

// Sortable table
$(document).ready(function () {
  $("#playlist tbody").sortable({ forceHelperSize: true, forcePlaceholderSize: true, axis: 'y' });
});
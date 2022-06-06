import $ from 'jquery';


// Resizes video (to keep aspect ratio) and resizes the right side panel (to keep height same as video)


// Keeps video in 16:9 aspect ratio
function resize_video() {
  var video = $('video');

  var video_width = video.width();
  var generated_video_height = (video_width / 16) * 9;

  video.height(generated_video_height);
}

// Keeps video side bar aligned with video height
function resize_comments() {
  var channel_box = $('.video-creator-details-wrapper');
  var video = $('video');
  var comment_box = $('.comment-box');

  var channel_box_height = channel_box.height();
  var video_height = video.height();
  var side_bar_spacing = 10;
  
  var generated_height = video_height - channel_box_height - side_bar_spacing;
  
  comment_box.height(generated_height);
}

function resize_components() {
  resize_video();
  resize_comments();
}

$(window).ready(function() {
  resize_components()
})

$(window).resize(function() {
  resize_components()
})


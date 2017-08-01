$(document).ready(function(){


let tweet_compose = $('.tweet-compose')
let tweet_controls = $('#tweet-controls')
let char_count = $('#char-count')
let tweet_submit = $('#tweet_submit')
let tweet = $('.tweet')

tweet_controls.hide();


$('.tweet-compose').on('click', function(){
   $(this).addClass('height_two')
   tweet_controls.show();
})

$('#tweet-content').mouseLeave(
  $(this).addClass('height_two')
  tweet_controls.hide();
)



tweet_submit.on('click', function(){
  $('#stream').prepend(function(){

  })
})






char_count.keypress(function(){
  $(this)
})





})

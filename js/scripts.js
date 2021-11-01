$(document).ready(function() {
  $("h1").click(function() {
    alert("This is a heading.");
  });

  $("p").click(function() {
    alert("This is a paragraph.");
  });

  $("img").click(function() {
    alert("This is an image.");
  });
});

  // This is the long hand way to wtite jQuery
  // jQuery(document).ready(function() {
  // jQuery("h1").click(function() {
  //   alert("This is a heading.");
  //   alert("I told you, THIS IS A HEADING!")
  // });

  // jQuery("p").click(function()  {
  //   alert("This is a paragraph.");
  // });

  // jQuery("img").click(function() {
  //   alert("This is an image.");
  // });

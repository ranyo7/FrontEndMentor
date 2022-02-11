$(document).ready(function(){
  console.log("JS start");
  displayDay();

  $(".showDay").click(function(){
    colorDateText();
    $(this).css("color","white");
    displayDay();
  });
  $(".showWeek").click(function(){
    colorDateText();
    $(this).css("color","white");
    displayWeek();
  });
  $(".showMonth").click(function(){
    colorDateText();
    $(this).css("color","white");
    displayMonth();
  });
});

function colorDateText(){
  $(".showDay").css("color","hsl(235, 45%, 61%)");
  $(".showWeek").css("color","hsl(235, 45%, 61%)");
  $(".showMonth").css("color","hsl(235, 45%, 61%)");
}
function displayDay(){
  $(".daily").each(function(){
    $(this).show();
  });
  colorDateText();
  $(".showDay").css("color","white");
  hideWeek();
  hideMonth();
}
function displayWeek(){
  $(".weekly").each(function(){
    $(this).show();
  });
  colorDateText();
  $(".showWeek").css("color","white");
  hideDay();
  hideMonth();
}
function displayMonth(){
  $(".monthly").each(function(){
    $(this).show();
  });
  colorDateText();
  $(".showMonth").css("color","white");
  hideDay();
  hideWeek();
}
function hideDay(){
  $(".daily").each(function() {
    $(this).hide();
  });
}
function hideWeek(){
  $(".weekly").each(function() {
    $(this).hide();
  });
}
function hideMonth(){
  $(".monthly").each(function() {
    $(this).hide();
  });
}

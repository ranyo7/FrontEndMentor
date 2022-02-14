$(document).ready(function(){
  console.log("JS start");
  displayDay();

  $(".showDay").click(function(){
    displayDay();
  });
  $(".showWeek").click(function(){
    displayWeek();
  });
  $(".showMonth").click(function(){
    displayMonth();
  });
});

function displayDay(){
  $(".daily").each(function(){
    $(this).show();
  });
  colorDateText();
  $(".showDay").addClass("selected");
  hideWeek();
  hideMonth();
}
function displayWeek(){
  $(".weekly").each(function(){
    $(this).show();
  });
  colorDateText();
  $(".showWeek").addClass("selected");
  hideDay();
  hideMonth();
}
function displayMonth(){
  $(".monthly").each(function(){
    $(this).show();
  });
  colorDateText();
  $(".showMonth").addClass("selected");
  hideDay();
  hideWeek();
}

function colorDateText(){
  $(".showDay").removeClass("selected");
  $(".showWeek").removeClass("selected");
  $(".showMonth").removeClass("selected");
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

$(document).ready(function(){
  var tech = DATA.technology;

  $("#launch").on("click", function() {
    toggleActiveTab(this);
    loadTech(tech[0]);
  });

  $("#spaceport").on("click", function() {
    toggleActiveTab(this);
    loadTech(tech[1]);
  });

  $("#capsule").on("click", function() {
    toggleActiveTab(this);
    loadTech(tech[2]);
  });

});

function toggleActiveTab(selectedTab){
  //de-selects all tabs
  $(".number-indicators button").attr("aria-selected", false);
  //makes the selected tab active
  $(selectedTab).attr("aria-selected", true);
}

function loadTech(tech) {
  //Update the images
  $("picture source").attr("srcset", tech.images.portrait);
  $("picture img").attr("src", tech.images.landscape);
  $("picture img").attr("alt", tech.name);
  //Update Crew member Name
  $(".name").text(tech.name);
  //Update Crew member description
  $(".description").text(tech.description);
}

$(document).ready(function(){
  var destinations = DATA.destinations;

  $(".moon").on("click", function() {
    toggleActiveTab(this);
    loadDestination(destinations[0]);
  });

  $(".mars").on("click", function() {
    toggleActiveTab(this);
    loadDestination(destinations[1]);
  });

  $(".europa").on("click", function() {
    toggleActiveTab(this);
    loadDestination(destinations[2]);
  });

  $(".titan").on("click", function() {
    toggleActiveTab(this);
    loadDestination(destinations[3]);
  });
});

function toggleActiveTab(selectedTab){
  //de-selects all tabs
  $(".tabButton").attr("aria-selected", false);
  //makes the selected tab active
  $(selectedTab).attr("aria-selected", true);
}

function loadDestination(destination) {
  //Update the images
  $("picture source").attr("srcset", destination.images.webp);
  $("picture img").attr("src", destination.images.png);
  $("picture img").attr("alt", destination.name);
  //Update Destination Name
  $(".name").text(destination.name);
  //Update Destination description
  $(".description").text(destination.description);
  //Update description meta
  $(".distance").text(destination.distance);
  $(".travelLength").text(destination.travel);
}

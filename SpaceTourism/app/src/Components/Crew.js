$(document).ready(function(){
  var crew = DATA.crew;
  console.log(crew);

  $(".commander").on("click", function() {
    toggleActiveTab(this);
    loadCrewMember(crew[0]);
  });

  $(".specialist").on("click", function() {
    toggleActiveTab(this);
    loadCrewMember(crew[1]);
  });

  $(".pilot").on("click", function() {
    toggleActiveTab(this);
    loadCrewMember(crew[2]);
  });

  $(".engineer").on("click", function() {
    toggleActiveTab(this);
    loadCrewMember(crew[3]);
  });

});

function toggleActiveTab(selectedTab){
  //de-selects all tabs
  $(".dot-indicators button").attr("aria-selected", false);
  //makes the selected tab active
  $(selectedTab).attr("aria-selected", true);
}

function loadCrewMember(member) {
  //Update the images
  $("picture source").attr("srcset", member.images.webp);
  $("picture img").attr("src", member.images.png);
  //Update Crew member title
  $(".title").text(member.role);
  //Update Crew member Name
  $(".name").text(member.name);
  //Update Crew member description
  $(".description").text(member.bio);
}

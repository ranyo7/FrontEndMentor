
$(document).ready(function(){

  const nav = $(".primary-navigation");
  const navToggle = $(".mobile-nav-toggle");

  $(".mobile-nav-toggle").on("click", () => {

    if(nav.attr("data-visible") === "false"){
      nav.attr("data-visible", true);
      navToggle.attr("aria-expanded", true);
    } else {
      nav.attr("data-visible", false);
      navToggle.attr("aria-expanded", false);
    }
  });

});

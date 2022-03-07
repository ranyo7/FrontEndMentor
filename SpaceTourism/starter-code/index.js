

const nav = $(".primary-navigation");
const navToggle = $(".movile-nav-toggle");
$(".mobile-nav-toggle").on("click", () => {

  if(nav.attr("data-visible") === "false"){
    nav.attr("data-visible", true);
    navToggle.attr("aria-expanded", true);
  } else {
    nav.attr("data-visible", false);
    navToggle.attr("aria-expanded", false);
  }
  console.log(nav.attr("data-visible"));
});

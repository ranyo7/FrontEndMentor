var orderAmount = 1;
var overSelector = 1;

$(document).ready(function() {

  $("#cartImage").click(function(){
    $("#cart").addClass("visible");
  });

  $("#cart").mouseleave(function(){
    $("#cart").removeClass("visible");
  });

  $("#closeOverlay").click(function(){
    $("#overlay").hide();
  });

  $("#displayImage").click(function(){
    $("#overlay").show();
  });

  $(".thumbnail").click(function(){
    $(".thumbnail").removeClass("thumbnailSelected");
    $(this).addClass("thumbnailSelected");
    var image = $(this).attr("src").replace("-thumbnail","");
    $("#displayImage").attr("src", image);
  });

  $(".oThumbnail").click(function(){
    $(".oThumbnail").removeClass("thumbnailSelected");
    $(this).addClass("thumbnailSelected");
    var image = $(this).attr("src").replace("-thumbnail","");
    $("#overlayImg").attr("src", image);
  });

  $(".trashcan").click(function(){
    $(".cartItem").addClass("invisible").removeClass("gridCol");
    $(".checkout").addClass("invisible");
    $(".centerGray").removeClass("invisible");
  });

  $(".addToCart").click(function(){
    //Make cart visible (feedback to user)
    $("#cart").addClass("visible");
    //Set the "You have nothing in your cart" to not visible
    $(".centerGray").addClass("invisible");
    //Turn cart item and checkoutButton to be visible
    $(".cartItem").removeClass("invisible").addClass("gridCol");
    $(".checkout").removeClass("invisible");
    //Update cart with the chosen amount
    $("#cartAmount").text("$125.00 x "+ orderAmount);
    $("#cartTotal").text("$"+(orderAmount*125)+".00");
  });

  $("#incOrderAmount").click(function(){
    orderAmount+=1;
    updateOrderAmount();
  });

  $("#decOrderAmount").click(function(){
    orderAmount-=1;
    updateOrderAmount();
  });

  updateOrderAmount();


});

function toggleOverlay(){
  var type = $("#overlay").style.display;
  if(type == "block") {
    type = "none";
  } else {
    type = "block";
  }
}

function updateOrderAmount(){
  orderAmount = Math.min(Math.max(orderAmount, 1), 10);
  $("#orderAmount").text(orderAmount);
}

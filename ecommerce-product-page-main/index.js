var orderAmount = 0;

$(document).ready(function() {

  $("#cartImage").click(function(){
    $("#cart").addClass("dropDown");
  });

  $("#cart").mouseleave(function(){
    $("#cart").removeClass("dropDown");
  });

  $(".thumbnail").click(function(){
    $(".thumbnail").removeClass("thumbnailSelected");
    $(this).addClass("thumbnailSelected");
    var image = $(this).attr("src").replace("-thumbnail","");
    $("#displayImage").attr("src", image);
  });

  updateOrderAmount();

  $("#incOrderAmount").click(function(){
    orderAmount+=1;
    updateOrderAmount();
  });
  $("#decOrderAmount").click(function(){
    orderAmount-=1;
    updateOrderAmount();
  });
});

function updateOrderAmount(){
  orderAmount = Math.min(Math.max(orderAmount, 0), 10);
  $("#orderAmount").text(orderAmount);
}

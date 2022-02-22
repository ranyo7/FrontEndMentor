getAJAX('all');
var darkmode = false;

function getAJAX(input){
  console.log("Loaded getAJAX()");
  console.log(input);
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    const response = this.responseText;
    createTable(response);
    }
  xhttp.open("GET", `https://restcountries.com/v3.1/${input}`);
  xhttp.send();
}

function createTable(data){
  if(data != null){
    let dataSet = JSON.parse(data);
    console.log(dataSet);
    let table="";

    for (let i=0; i<dataSet.length; i++){
      table +=
      "<div class='card mx-auto DML'>" +
        `<img src="${dataSet[i].flags.png}" class="card-img-top" alt="...">` +
        "<div class='card-body'>" +
          "<div class=''>" +
            `<h5 class=''>${dataSet[i].name.common}</h6>` +
            `<p class=''>Population: ${dataSet[i].population}</p>` +
            `<p class=''>Region: ${dataSet[i].region}</p>` +
            `<p class=''>Capital: ${dataSet[i].capital}</p>` +
          "</div>" +
        "</div>" +
      "</div>";
    }
    $("#display").html(table);

    if(darkmode){
      $("#display .DML").addClass("dark-mode-light");
    }
  } else {
    document.getElementById("display").innerHTML = "Data set is null";
  }
}

function darkModeToggle(){
  darkmode = !darkmode;
  $("body").toggleClass("dark-mode");
  $(".DML").toggleClass("dark-mode-light");
}

function searchByName(){
  var input = $("#query").val();
  getAJAX('name/'+input);
}

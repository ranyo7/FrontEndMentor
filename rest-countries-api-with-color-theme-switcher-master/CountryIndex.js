var parameters = location.search.substring(1).split("&");
darkmode = (parameters[1] == "true" ? true : false);
getAJAX();
initHomeButtons();
initDarkMode();

function getAJAX(){
  const xhttp= new XMLHttpRequest();
  xhttp.onload = function() {
    const response = this.responseText;
    fillInDetails(response);
  }
  xhttp.open("GET", 'https://restcountries.com/v3.1/name/'+parameters[0]);
  xhttp.send();
}

function fillInDetails(data){
  if(data != null){
    let dataSet = JSON.parse(data);
    $(".CountryName").text(dataSet[0].name.common);
    $(".indexImg").attr("src", dataSet[0].flags.svg);
    $(".NativeName").text(  generateNativeNames(dataSet[0].name.nativeName));
    $(".Population").text(  getPopulation(dataSet[0].population));
    $(".Region").text(      dataSet[0].region);
    $(".SubRegion").text(   dataSet[0].subregion);
    $(".Capital").text(     dataSet[0].capital[0]);
    $(".Domain").text(      dataSet[0].tld[0]);
    $(".Currencies").text(  generateCurrencies(dataSet[0].currencies));
    $(".Languages").text(   generateList(dataSet[0].languages));
    generateCountryButtons( dataSet[0].borders);

  }
}

function initHomeButtons(){
  $(".navbar-brand").on("click", function(event) {
    $(this).attr("href", $(this).attr('href') + "?" + darkmode);
  });
  $(".backBtn").on("click", function(event) {
    $(this).attr("href", $(this).attr('href') + "?" + darkmode);
  });
}

function initDarkMode() {
  console.log(darkmode);
  if(darkmode){
    $("body").toggleClass("dark-mode");
    $(".DML").toggleClass("dark-mode-light");
    $(".imgDML").toggleClass("dark-mode-image");
  }
}

function darkModeToggle(){
  darkmode = !darkmode;
  $("body").toggleClass("dark-mode");
  $(".DML").toggleClass("dark-mode-light");
  $(".imgDML").toggleClass("dark-mode-image");
}

function generateNativeNames(data){
  let keys = Object.keys(data);
  let list = "";
  for (var key in keys) {
    list += data[keys[key]].common + " ";
  }
  return list;
}

function getPopulation(data){
  x = parseInt(data, 10);
  return x.toLocaleString();
}

function generateCurrencies(data){
  let keys = Object.keys(data);
  let list = "";
  for (var key in keys) {
    list += data[keys[key]].name + " ";
  }
  return list;
}

function generateList(data){
  let keys = Object.keys(data);
  let list = "";
  for (var key in keys) {
    list += data[keys[key]] + " ";
  }
  return list;
}

function generateCountryButtons(borders){
  const xhttp= new XMLHttpRequest();
  xhttp.onload = function() {
    const response = this.responseText;
    if(response != null){
      //stuff to do with the request data
      let dataSet = JSON.parse(response);
      generateButtons(dataSet);

    }
  }
  xhttp.open("GET", 'https://restcountries.com/v3.1/alpha?codes='+borders[0]+","+borders[1]+","+borders[2]);
  xhttp.send();
}

function generateButtons(dataSet){
  let countryList = "";
  for (var i in dataSet) {
    countryList += `<a class="border btn box-shadow DML" href="./CountryIndex.html?${dataSet[i].name.common}">`+dataSet[i].name.common+"</a>";
  }

  $(".countryButtons").html(countryList);

  if(darkmode){
    console.log($("a.border"));
    $("a.border").toggleClass("dark-mode-light");
  }
}

getAJAX();

function darkModeToggle(){
  $("body").toggleClass("dark-mode");
  $(".DML").toggleClass("dark-mode-light");
  $(".imgDML").toggleClass("dark-mode-image");
}

function getAJAX(){
  console.log("Loaded getAJAX()");
  var parameter = location.search.substring(1);
  const xhttp= new XMLHttpRequest();
  xhttp.onload = function() {
    const response = this.responseText;
    fillInDetails(response);
  }
  xhttp.open("GET", 'https://restcountries.com/v3.1/name/'+parameter);
  xhttp.send();
}

function fillInDetails(data){
  console.log(data);
  if(data != null){
    let dataSet = JSON.parse(data);
    console.log(dataSet);
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
      console.log(generateButtons(dataSet));
    }
  }
  xhttp.open("GET", 'https://restcountries.com/v3.1/alpha?codes='+borders[0]+","+borders[1]+","+borders[2]);
  xhttp.send();
}

function generateButtons(dataSet){
  let countryList = "";
  for (var i in dataSet) {
    countryList += `<a class="btn box-shadow DML" href="./CountryIndex.html?${dataSet[i].name.common}">`+dataSet[i].name.common+"</a>";
  }
  console.log(countryList);
  $(".countryButtons").html(countryList);
}

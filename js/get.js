

$(document).ready(function(){

 var options;
  options = {
  httpEndpoint: 'https://api.eossupport.io', 
  verbose: false,
  fetchConfiguration: {}
};
var eos = EosApi(options);


eos.getInfo({}).then(result => console.log(result))

eos.getCurrencyBalance('webxtokenacc', 'webxwebxwebx', 'WEBX')
  .then(balance => {
    console.log(balance); 
    var str = JSON.stringify(balance[0]);
    var result = str.replace(/\d+(\.\d+)?/g, function(match) {
        return Math.floor(parseFloat(match) / 10000).toString();
      });
      
      console.log(result.replace(/"/g, ""));

    $("#ResponsePerEOS").text(result.replace(/"|WEBX/g, ""))
    
  })
  .catch(error => {
    console.error(error);
  });

  eos.getCurrencyBalance('webxtokenacc', 'eosio.null', 'WEBX')
  .then(balance => {
    console.log(balance); 
    var str = JSON.stringify(balance[0]);
    var result = str.replace(/\d+(\.\d+)?/g, function(match) {
      return Math.floor(parseFloat(match) ).toString();
    });

    console.log(result.replace(/"/g, ""));

    $("#burned").text(result.replace(/"|WEBX/g, ""))
    
  })
  .catch(error => {
    console.error(error);
  });

  var randomNumber = Math.floor(Math.random() * 4001) + 1000;
  console.log(randomNumber);

  $("#miners").text(randomNumber)

  setInterval(function() {
    eos.getCurrencyBalance('webxtokenacc', 'webxwebxwebx', 'WEBX')
  .then(balance => {
    //console.log(balance); 
    var str = JSON.stringify(balance[0]);
    var result = str.replace(/\d+(\.\d+)?/g, function(match) {
        return Math.floor(parseFloat(match) / 10000).toString();
      });
      
    //  console.log(result.replace(/"/g, ""));

    $("#ResponsePerEOS").text(result.replace(/"|WEBX/g, ""))
    
  })
  .catch(error => {
    console.error(error);
  });


  eos.getCurrencyBalance('webxtokenacc', 'eosio.null', 'WEBX')
  .then(balance => {
    //console.log(balance); 
    var str = JSON.stringify(balance[0]);
    var result = str.replace(/\d+(\.\d+)?/g, function(match) {
      return Math.floor(parseFloat(match) ).toString();
    });

   // console.log(result.replace(/"/g, ""));

    $("#burned").text(result.replace(/"|WEBX/g, ""))
    
  })
  .catch(error => {
    console.error(error);
  });

   
  }, 5000);

})
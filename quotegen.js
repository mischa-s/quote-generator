$(function (){
var $quotesObject = $('#quotes');
  $.ajax({
    type: 'GET',
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/',
    dataType: "json",
    headers: { "X-Mashape-Key": "qzwa4lx4gVmshWzgX5hbOgznXaK2p1XBRPQjsnEBhCpIknHhcG" },
    success: function(quotesObject) {
      $.each(quotesObject, function(quotesProperty){
        if (quotesProperty === "quote") {
        $quotesObject.append('<p id="quote">' + quotesObject[quotesProperty] + '</p>');}
        else if (quotesProperty === "author") {
        $quotesObject.append('<p id="author">' + quotesObject[quotesProperty] + '</p>');}


      });
    }
  });

});

var buttonClick = function (){
$('#quotes').empty();
  $(function (){
  var $quotesObject = $('#quotes');
    $.ajax({
    type: 'GET',
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/',
    dataType: "json",
    headers: { "X-Mashape-Key": "qzwa4lx4gVmshWzgX5hbOgznXaK2p1XBRPQjsnEBhCpIknHhcG" },
    success: function(quotesObject) {
      $.each(quotesObject, function(quotesProperty){
        if (quotesProperty === "quote") {
        $quotesObject.append('<p id="quote">' + quotesObject[quotesProperty] + '</p>');}
        else if (quotesProperty === "author") {
        $quotesObject.append('<p id="author">' + quotesObject[quotesProperty] + '</p>');}


      });
    }
  });

});

};

// $(function (){
// $.ajax({
//     type: 'GET',
//     datatype: 'json',
//     url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
//     headers: { "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V"},
//     success: function(response){
//      document.getElementById("quote").innerHTML= response.[0];
//     }
// })
// });


var client = require('cheerio-httpcli'); 
var URL =require('url');
let url = 'https://smartstore.naver.com/mfbshop/products/4072435942'; 
var param = {}; 

client.fetch(url, param, function(err, $, res){
     if(err){
          console.log(err);
           return; 
        }
    $(".selectbox-layer").each(function(idx) { 
       result=$(".selectbox-item").text();
      console.log(result);
        }); 
    });
  
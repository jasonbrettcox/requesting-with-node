
var request = require('./node_modules/request/');
var myVar = require('./env.js');
var secretKey = myVar.secretKey;
var secretId = myVar.secretId;
// console.log(secretId) 
function searchFor(movieTitle){
    // console.log(movieTitle);
    request('https://www.googleapis.com/customsearch/v1?key=' + secretKey + '&cx=' + secretId + '&q=' + movieTitle + '', function (error, response, body){
    if (error){console.log(error)};
    // console.log(response);    
    let object = JSON.parse(body);
        // console.log(object);
        let title = object.items[0].title
        let snippet = object.items[0].snippet
        console.log(title)
        console.log(snippet)
        
    //   console.log("The weather in Denver is " + denverWeather + ".")    
    });

};


module.exports = searchFor;
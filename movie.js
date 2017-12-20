
var request = require('./node_modules/request/');
var myVar = require('./env.js');
var secretKey = myVar.secretKey;
var secretId = myVar.secretId;
// console.log(secretId) 
function searchFor(movieTitle, secretKey, secretId){
    // console.log(movieTitle);
    request('https://www.googleapis.com/customsearch/v1?key=' + secretKey + '&cx=' + secretId + '&q=' + movieTitle + '', function (error, response, body){
    if (error){console.log(error)};
    // console.log(response);    
    let object = JSON.parse(body);
        // console.log(object);
        let movie = object.items[0].title
        console.log(movie)
        
    //   console.log("The weather in Denver is " + denverWeather + ".")    
    });

};

searchFor('Endless Summer', secretKey, secretId);
module.exports = 'get(movieTitle)';
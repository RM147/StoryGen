'use strict';
var x = "";
var y = "";

var JSONObject = "{\"word\": \"word\", \"type\": "+x+", \"genre\": "+y+"}";

function printWords(word){    
    x = word;
    var JSONObject = "{\"word\": \"word\", \"type\": \""+x+"\", \"genre\": "+y+"}";
    console.log(JSONObject);
}

function printGenre(word){    
    y = word;
    var JSONObject = "{\"word\": \"word\", \"type\": \""+x+"\", \"genre\": "+y+"}";
    console.log(JSONObject);
}
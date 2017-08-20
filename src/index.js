alert('Conférence App démarré !');
var jquery = require('jquery');

var moduleTalkService = require('./common/talk.service.js');

   moduleTalkService.listSpeakers()
	    .then(speakers => {
	    	alert(`${speakers}`);
	    });
	    



/*
var linkGetAllSpeakers = "http://localhost:3000/speakers";
var res = [];
$.ajax(linkGetAllSpeakers)
.done((speakers) => {
  
 alert(`${speakers}`);
});*/
alert('Conférence App démarré !');

import TalkService from './common/talk.service';

const talkService = new TalkService();

let jquery = require('jquery');

let listSpeakers = [];
   talkService.getAllSpeakers()
	    .then(speakers => {
	    	//console.log(`${speakers}`);
	    	`${speakers.forEach(function(e){
				console.log(e.firstname);
			})}`;
	    });

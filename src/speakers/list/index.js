import * as jquery from 'jquery';

import 'bootstrap/dist/css/bootstrap.css'

export default class SpeakerList {
	constructor(talkService) {
		this.talkService = talkService;
		
	};
	
	renderSpeakers(idView) {
		this.talkService.getAllSpeakers()
			.then(speakers => {

				jquery(idView).html('<ul><li>' 
					+ speakers.map(sp => {return `<li>${sp.firstname}</li>`}).join('')
				    + '</li></ul>'+ '<button class="btn btn-primary btn-success">hello Bootstrap</button>');
				

			});

	}
	renderSession(idView) {
		this.talkService.getAllSessions()
			.then(sessions => {

				jquery(idView).html('<ul><li>' 
					+ sessions.map(ss => {return `<li>${ss.title}</li>`}).join('')
				    + '</li></ul>');
				
			});

	}

}
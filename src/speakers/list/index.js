import * as jquery from 'jquery';

import 'bootstrap/dist/css/bootstrap.css'

export default class SpeakerList {
	constructor(talkService) {
		this.talkService = talkService;
		
	};
	
	renderSpeakers(idView) {
		this.talkService.getAllSpeakers()
			.then(speakers => {

				 jquery(idView).html(
				 	'<div class="container">'
					 	+'<div class="row">'
						 	+'<div class="col col-lg-4 col-lg-offset-4 ">'
							 	+'<table class="table table-hover">'
								 	+'<thead>'
									 	+'<tr>'
										 	+'<th>'
										 		+'Firstname'
										 	+'</th>'
									 	+'<tr>'
								 	+'</thead>'
								 	+'<tbody>'
								 	 
										+ speakers.map(sp => {return `<tr><td>${sp.firstname}</td></tr>`}).join('  ')
								    
								    +'</tbody>'
							    + '</table>'
						    +'</div>'
					    +'</div>'
				    +'</div>'
				    );   

			});

	}
	renderSession(idView) {
		this.talkService.getAllSessions()
			.then(sessions => {
				

				 jquery(idView).html(
				 	'<div class="container">'
					 	+'<div class="row">'
						 	+'<div class="col col-lg-4 col-lg-offset-4 ">'
							 	+'<table class="table table-hover">'
								 	+'<thead>'
									 	+'<tr>'
										 	+'<th>'
										 		+'Title'
										 	+'</th>'
									 	+'<tr>'
								 	+'</thead>'
								 	+'<tbody>'
								 	 
										+ sessions.map(ss => {return `<tr><td>${ss.title}</td></tr>`}).join('  ')
								   
								    +'</tbody>'
							    + '</table>'
						    +'</div>'
					    +'</div>'
				    +'</div>'
				    );
			});

	}

}
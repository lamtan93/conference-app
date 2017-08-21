import * as jquery from 'jquery';

export default class SpeakerList {
	constructor(talkService) {
		this.talkService = talkService;
		
	};
	
	render(idView) {
		//let res = "";
		let resTab = [];
		this.talkService.getAllSpeakers()
			.then(speakers => {

				jquery(idView).html('<ul><li>' 
					+ speakers.map(sp => {return `<li>${sp.firstname}</li>`}).join('')
				    + '</li></ul>');
				
				/*jquery(idView).html('<table border=1>' 
					+'<thead>'
						+<'tr>'
							+'<th>Firstname</th>'
						+'</tr>'
					+'</thead>'

						+'<tbody>'
							+'<tr>'
								+'<td>'
									+ speakers.map(sp => {return `<li>${sp.firstname}</li>`}).join('') 
								+'</td>'
							+'</tr>'
						+'</tbody>'



					+ '</table>');*/
				
			});

	}

}
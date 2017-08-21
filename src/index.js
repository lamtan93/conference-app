alert('Conférence App démarré !');

import TalkService from './common/talk.service';
import ContentBody from './layout/layout.html';
import SpeakerList from './speakers/list/index';

const talkService = new TalkService();
const speakerList = new SpeakerList(talkService);

let jquery = require('jquery');
/*
let listSpeakers = [];
talkService.getAllSpeakers()
	.then(speakers => {
		speakers.forEach(function(e){
				listSpeakers.push(e);
				console.log(e.firstname);
				
			});
		alert(listSpeakers.length);

	});
*/
class Layout{
	constructor(){}
	render(){
		jquery('body').append(ContentBody);
	}
}

const layout = new Layout();
layout.render();


speakerList.render('#main-view');	






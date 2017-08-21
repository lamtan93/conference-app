alert('Conférence App démarré !');

import TalkService from './common/talk.service';
import ContentBody from './layout/layout.html';
import SpeakerList from './speakers/list/index';

import css from './statique/myStyle.css';

const talkService = new TalkService();
const speakerList = new SpeakerList(talkService);

let jquery = require('jquery');



/*

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


speakerList.renderSpeakers('#main-view');	


//------------------------Routeur---------------------------
var router = () => {
	if (location.hash == '#speakers-list') {
		// TODO afficher vue liste des présentateurs
		speakerList.renderSpeakers('#main-view');

	} else if (location.hash == '#sessions-list') {
		// TODO afficher vue liste des sessions
		
		speakerList.renderSession('#main-view');
			

	} else {
		// TODO afficher vue par défaut
	}
}
window.addEventListener('load', () => {
	window.onhashchange = () => {
		router();
	};
	router();
});


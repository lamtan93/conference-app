alert('Conférence App démarré !');

import TalkService from './common/talk.service';
import ContentBody from './layout/layout.html';
import SpeakerList from './speakers/list/index';

import css from './statique/myCss/myStyle.css';

//import monJquery from './statique/jquery/monJquery.js';

const talkService = new TalkService();
const dao = new SpeakerList(talkService);

let jquery = require('jquery');


  jquery(document).ready(function() {
        jquery("#liPrincipal").click(function() {
            jquery("#zoneToHide").toggle(300);
            jquery(".divContain").toggle(100);
        });
    });
 
class Layout{
	constructor(){}
	render(){
		jquery('body').append(ContentBody);
	}
}

const layout = new Layout();
layout.render();

//----Page d'accueil-------
//dao.renderSpeakers('#main-view');	



//------------------------Routeur---------------------------
var router = () => {
	if (location.hash == '#speakers-list') {
		dao.renderSpeakers('#main-view');

	} else if (location.hash == '#sessions-list') {
	
		dao.renderSession('#main-view');	
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


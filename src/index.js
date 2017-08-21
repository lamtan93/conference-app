alert('Conférence App démarré !');

import TalkService from './common/talk.service';
import ContentBody from 'html-loader!./layout/layout.html';
import SpeakerList from './speakers/list/index';

const talkService = new TalkService();
const speakerList = new SpeakerList();

let jquery = require('jquery');

let listSpeakers = [];
talkService.getAllSpeakers()
	.then(speakers => {
		`${speakers.forEach(function(e){
				console.log(e.firstname);
			})}`;


			

	});


class Layout{
	constructor(){}
		render(){
		jquery('body').append(ContentBody);
	}

}

const layout = new Layout();
layout.render();


speakerList.render('body.main-view','123456789');




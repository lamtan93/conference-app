import * as jquery from 'jquery';


export default class SpeakerList{
	constructor(){};

	render(idView, contenu){
		jquery(idView).append(contenu);	
	}
	
}
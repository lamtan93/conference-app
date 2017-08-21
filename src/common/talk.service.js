import * as jquery from 'jquery';

let linkGetAllSpeakers = "http://localhost:3000/speakers";
let linkGetAllSessions = "http://localhost:3000/sessions";

export default class TalkService {

	constructor() {}

	getAllSpeakers() {
		return new Promise((resolve, reject) => {

			jquery.get(linkGetAllSpeakers, function(data, status) {

				resolve(data);
			});
		})
	}

	getAllSessions(){
		return new Promise((resolve, reject) => {

			jquery.get(linkGetAllSessions, function(data, status) {

				resolve(data);
			});
		})
	}

}

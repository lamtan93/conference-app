import * as jquery from 'jquery';

let linkGetAllSpeakers = "http://localhost:3000/speakers";

export default class TalkService {

	constructor() {}

	getAllSpeakers() {
		return new Promise((resolve, reject) => {

			jquery.get(linkGetAllSpeakers, function(data, status) {

				resolve(data);
			});
		})
	}

}

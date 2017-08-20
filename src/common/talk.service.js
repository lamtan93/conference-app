var jquery = require('jquery');

var linkGetAllSpeakers = "http://localhost:3000/speakers";

exports.listSpeakers = function getAllSpeakers() {
    
           jquery.get(linkGetAllSpeakers, (data) => {
                return new Promise((resolve, reject) => {
                    resolve(data)
                })
            });

        }
    

 

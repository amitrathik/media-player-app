const pathToVideos = './data';
const fs = require('fs');
async function getVideos(){
	const data = fs.promises.readdir(pathToVideos).then((files)=>{
		return files;
	}).catch((error) =>{
		console.log(error);
	})
	return data;
}

module.exports = getVideos;
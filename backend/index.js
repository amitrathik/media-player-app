// Requiring express in our server
const cors = require("cors");
const express = require('express');
const getVideos = require('./functions/getVideos');
const app = express();
//Enable cors
app.use(cors());
// API Endpoints
app.get('/videos', async (req,res) =>{
	const data = await getVideos();
    console.log(data);
	res.json(data)
})

// Setting the server to listen at port 8080
app.listen(8080, function(req, res) {
	console.log("Server is running at port 8080");
});
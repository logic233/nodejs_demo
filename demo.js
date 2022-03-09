var http = require("http");
const fs = require('fs');
http.createServer(function (req, res) {

	try {
		res.setHeader("Access-Control-Allow-Origin", "*");
		const data = fs.readFileSync('./config.json', 'utf8');
		// console.log(data);
		// res.write('<meta http-equiv="Access-Control-Allow-Origin" content="*">')
		res.write(data);
	} catch (err) {
		console.log(`Error reading file from disk: ${err}`);
	}


	res.end();


}).listen(3000);



console.log("have fun!!");

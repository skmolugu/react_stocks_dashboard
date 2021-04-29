var path = require("path");
global.data = {
	portfolio:[]
}
module.exports = function (router) {
	router.get('/', function (req, res) {
		res.sendFile('/public/dashboard.html', { root: path.join(__dirname, '../../') });
	});
	router.get('/list', function (req, res) {
		res.status(200).send(global.data.portfolio);
	});
	router.post('/create', function (req, res) {
		global.data.portfolio.push({name:req.body.name, id: "A" + Math.floor(Math.random()*99),shares:[]})
		res.status(200).send('success');
	});
	router.post('/add', function(req, res) {
		res.status(200).send("success");
	});
}
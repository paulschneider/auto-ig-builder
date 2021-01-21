const open = require('open');

(async () => {
	await open('./output/index.html', {app: ['google chrome']});
})();
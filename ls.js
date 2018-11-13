const exec = require('child_process').exec;
const fs = require('fs');
const readline = require('readline');
const stream = require('stream');

module.exports = (path, destination) => {
	return new Promise((resolve, reject) => {
		if (!destination) {
			destination = '/tmp/ls-'+(new Date().getTime() + Math.floor((Math.random()*10000)+1)).toString(16)+'.txt';
		}

		exec('find '+path+' -name "*" >> '+destination, {}, () => {
			var outstream = new stream;
			outstream.readable = true;
			outstream.writable = true;

			resolve(readline.createInterface({
				input: fs.createReadStream(destination),
				output: outstream,
				terminal: false
			}));

			fs.unlinkSync(destination);
		});
	});
};

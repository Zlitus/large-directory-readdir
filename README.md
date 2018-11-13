# large-directory-readdir
Simple solution to read a very large directory in Node.js, based on bash find command. Developed because native `fs.readdir` methods can’t handle very large directories (Containing hundreds of thousands files).

## Example of usage:
```js
const ls = require('ls');

ls('./very-large-directory').then((output) => {
	var i = 0;
	output.on('line', function(line) {
		i++;
		console.log(i+') '+line);
	});
});
```

# large-directory-readdir
Simple solution to read a very large directory in Node.js, based on bash find command. Developed because native `fs.readdir` methods can’t handle very large directories (Containing hundreds of thousands files).

## Example of usage:
```js
const ls = require('ls');

ls('./very-large-directory').then((output) => {
	var i = 0;
	output.on('line', (line) => {
		i++;
		console.log(i+') '+line);
	});
});
```

## To do:
- Security check of the parameter
- Adding options (timeout, recursive, find only files / folders, match filenames by regex, etc)
- Do fallbacks for Windows & systems without the `find` command

var file_system = require('fs');
var archiver = require('archiver');

if (system.args.length != 2) {
	console.log("Usage: zip_slideshows.js URL");
}

var output = file_system.createWriteStream('target.zip');
var archive = archiver('zip');

output.on('close', function () {
    console.log(archive.pointer() + ' total bytes');
    console.log('archiver has been finalized and the output file descriptor has closed.');
});

archive.on('error', function(err){
    throw err;
});

archive.pipe(output);
archive.bulk([
    { expand: true, cwd: 'source', src: ['**'], dest: 'source'}
]);
archive.finalize();
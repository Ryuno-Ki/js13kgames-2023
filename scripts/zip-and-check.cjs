const { statSync } = require('fs');
const { join } = require('path');

const zip = require('zip-dir');

const MAX_BYTES = 13312;
const distFolder = join(__dirname, '..', 'public');
const filepath = join(__dirname, '..', 'js13kgames.zip');

function zipDirectory (directory, targetFile, callback) {
	zip(distFolder, { saveTo: targetFile }, (error) => {
		if (error) {
			process.exit(2);
		}
		console.log(`Zipped ${ directory }`);
		callback();
	});
}

function getFileSizeInBytes (filepath) {
	return statSync(filepath).size;
}

function fileIsUnderMaxSize (fileSize) {
	return fileSize <= MAX_BYTES;
}

zipDirectory(distFolder, filepath, async () => {
	const fileSize = getFileSizeInBytes(filepath);
	const fileSizeDifference = Math.abs(MAX_BYTES - fileSize);

	if (fileIsUnderMaxSize(fileSize)) {
		console.log(`The file is ${ fileSize } bytes (${ fileSizeDifference } bytes under the limit).`);
		process.exit(0);
	} else {
		console.log(`The file is ${ fileSize } bytes (${ fileSizeDifference } bytes over the limit).`);
		process.exit(1);
	}
});
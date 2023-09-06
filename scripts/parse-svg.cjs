const { readFileSync, writeFileSync } = require('node:fs')

// parse only the value of d of path element
// Image found on https://nrv.de/reviere as
// https://nrv.de/upload/images/nrv-about-reviere-ostsee.svg
const content = readFileSync('./baltic-sea.svg', 'utf8').replace(/\n/g, ' ')
const searchTerm = 'polyline points="'
const start = content.search(searchTerm)
const end = content.slice(start + searchTerm.length).search('"></polyline>')

const points = content
	.slice(start + searchTerm.length, start + searchTerm.length + end)
	.split(' ')
	.map((point) => parseFloat(point))

const coordinates = []
for (let i = 0; i < points.length; i += 2) {
	coordinates.push([
		Math.round(points[i] - 2425),
		Math.round(points[i + 1] - 1009)
	])
}

writeFileSync('./baltic-sea.json', JSON.stringify(coordinates, null, 2))
console.log(`Written ${coordinates.length} points to baltic-sea.json`)

import('../src/js/state/cities.js').then((m) => console.log(m.cities.map(formatCity).join('\n')))
 
function formatWares (wares) {
	return Object
		.entries(wares)
		.filter((ware) => ware[1] > 0)
		.map((ware) => ware.join(': '))
		.join('. ')
}

function formatCity (city) {
	return `${city.name}: ${formatWares(city.demand)} vs. ${formatWares(city.supply)}`
}

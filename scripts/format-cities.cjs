Promise.all([
	import('../src/js/state/cities.js'),
	import('../src/js/state/wares.js')
]).then(([cities, wares]) => {
	console.log(formatBasePrice(wares.wares, cities.cities))
	console.log(cities.cities.map(formatCity).join('\n\n'))
})

function formatBasePrice (wares, cities) {
	return Object
		.entries(wares)
		.map((ware) => {
			const supply = cities
				.map((city) => city.supply[ ware[0] ])
				.reduce((sum, summand) => sum + summand)
			const demand = cities
				.map((city) => city.demand[ ware[0] ])
				.reduce((sum, summand) => sum + summand)

			return `${ware[0]}: ${ware[1] / 10} (${supply} - ${demand} = ${supply - demand})`
		})
		.join('\t')
}
 
function formatWares (wares) {
	return Object
		.entries(wares)
		.filter((ware) => ware[1] > 0)
		.map((ware) => ware.join(': '))
		.join('\t')
}

function formatCity (city) {
	return [
		`Demand of ${city.name}:\t${formatWares(city.demand)}`,
		`Supply of ${city.name}:\t${formatWares(city.supply)}`
	].join('\n')
}

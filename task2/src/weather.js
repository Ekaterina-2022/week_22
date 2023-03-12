/*попытка подключить json через локалхост, работает только на ноуте*/

async function dataFetch() {
	const url = "http://localhost/task2/weather.json";
	const res = await fetch(url);
	const datapoints = await res.json();
	console.log(datapoints);
}

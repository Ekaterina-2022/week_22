//const { Chart } = await import("chart.js");
/*const Chart = require("chart.js");*/
/* не работает почему-то
import data from "./chartjs/src/weather.json" assert { type: "JSON" };
console.log(data); */
//const dayjs = require("dayjs");

function a() {
	new Chart(document.getElementById("acquisitions"), {
		type: "doughnut",
		data: {
			//labels: Object.keys(data),
			labels: [
				"Москва",
				"Санкт-Петербург",
				"Оренбург",
				"Мурманск",
				"Астрахань",
				"Сочи",
				"Хабаровск",
			],
			datasets: [
				{
					label: "Sunny days",
					data: [72, 67, 54, 97, 100, 91, 102],
					backgroundColor: [
						"rgb(255, 99, 132)",
						"rgb(54, 162, 235)",
						"rgb(85, 15, 86)",
						"rgb(174, 38, 15)",
						"rgb(200, 140, 86)",
						"rgb(100, 88, 140)",
						"rgb(50, 200, 86)",
					],
					hoverOffset: 4,
				},
			],
		},
	});
}
a();
function b() {
	new Chart(document.getElementById("temp"), {
		type: "bar",
		data: {
			//labels: Object.keys(data),
			labels: [
				"Покровск-Якутия",
				"Дудинка-Красноярск",
				"Певек-Чукотка",
				"Норильск",
				"Верхоянск-Якутия",
			],
			datasets: [
				{
					label: "Freeze temp",
					data: [-9.5, -9.3, -9.5, -10.2, -14.5],
					backgroundColor: [
						"rgb(255, 99, 132)",
						"rgb(75, 192, 192)",
						"rgb(255, 205, 86)",
						"rgb(201, 203, 207)",
						"rgb(54, 162, 235)",
					],
					barPercentage: 0.5,
				},
			],
		},
	});
}

b();

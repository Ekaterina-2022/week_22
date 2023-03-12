import Chart from "chart.js/auto";

/* не работает почему-то
import data from "./chartjs/src/weather.json" assert { type: "JSON" };
console.log(data); */

(async function a() {
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
					label: "My First Dataset",
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
})();

(async function b() {
	new Chart(document.getElementById("temp"), {
		type: "polarArea",
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
					label: "My First Dataset",
					data: [-9.5, -9.3, -9.5, -10.2, -14.5],
					backgroundColor: [
						"rgb(255, 99, 132)",
						"rgb(75, 192, 192)",
						"rgb(255, 205, 86)",
						"rgb(201, 203, 207)",
						"rgb(54, 162, 235)",
					],
				},
			],
		},
	});
})();

module.exports = {
	Chart,
};

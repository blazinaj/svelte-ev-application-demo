<!-- Battery Level Area Chart -->

<script>
	import { Chart } from "@highcharts/svelte";

	const options = {
		chart: {
			type: "area",
			backgroundColor: "white",
		},
		title: {
			text: null,
			style: {
				color: "#f5f5f5",
			},
		},
		xAxis: {
			categories: [
				"Jan",
				"Feb",
				"Mar",
				"Apr",
				"May",
				"Jun",
				"Jul",
				"Aug",
				"Sep",
				"Oct",
				"Nov",
				"Dec",
			],
			labels: {
				style: {
					color: "#000000",
				},
			},
			title: {
				text: null,
				style: {
					color: "#f5f5f5",
				},
			},
		},
		yAxis: {
			title: {
				text: null,
				style: {
					color: "#f5f5f5",
				},
			},
			labels: {
				style: {
					color: "#f5f5f5",
				},
			},
		},
		plotOptions: {
			area: {
				stacking: "normal",
				fillOpacity: 0.5,
				lineWidth: 3,
				lineColor: "#28a745",
			},
		},
		legend: {
			enabled: false,
		},
		credits: {
			enabled: false,
		},
		series: [
			{
				name: "Series 1",
				data: [25, 24, 23, 22, 25, 30, 35, 32, 31, 30, 28, 31],
				color: "#28a745",
				markers: {
					enabled: false,
					symbol: "circle",
					radius: 3,
					fillColor: "#28a745",
					lineColor: "#28a745",
				},
			},
		],
	};
</script>

<Chart {options} />

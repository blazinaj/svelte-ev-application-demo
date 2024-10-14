<!-- Vehicles Bar chart component -->

<script>
	import { Chart } from "@highcharts/svelte";

	const options = {
		title: {
			text: null,
		},
		chart: {
			type: "column",
			backgroundColor: "#ffffff",
			style: {
				color: "#000000",
			},
		},
		xAxis: {
			categories: ["Ford 7", "Toyota 4", "Chevrolet 3", "Honda 10", "Ford 3"],
			title: {
				text: null,
			},
			labels: {
				style: {
					color: "#000000",
				},
			},
		},
		yAxis: {
			min: 0,
			title: {
				text: null,
			},
			labels: {
				overflow: "justify",
				style: {
					color: "#000000",
				},
			},
		},
		plotOptions: {
			bar: {
				dataLabels: {
					enabled: true,
					style: {
						color: "#000000",
					},
				},
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
				name: "Car Model",
				data: [15, 13, 12, 11, 9],
				color: "#28a745",
			},
		],
	};
</script>

<Chart {options} />

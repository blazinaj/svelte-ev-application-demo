<!-- Vehicles section of the PrimaryPanel -->

<script>
	import VehiclesBarChart from "src/layout/Viewport/PrimaryPanel/elements/VehiclesBarChart.svelte";
	import Icon from "@iconify/svelte";
</script>

<div class="primary-panel-vehicles">
	<div>
		<h3>
			<Icon icon="fontisto:area-chart" />
			&nbsp; BEHIND SCHEDULE VEHICLES
		</h3>
		<hr />
		<VehiclesBarChart />
	</div>
</div>

<style>
	h3 {
		color: green;
	}
</style>

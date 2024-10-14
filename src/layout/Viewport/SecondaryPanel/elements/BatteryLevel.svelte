<!--Battery Level Component for the SecondaryPanel-->

<script>
	import BatteryLevelRangeSelection from "src/layout/Viewport/SecondaryPanel/elements/BatteryLevelRangeSelection.svelte";
	import BatteryLevelChart from "src/layout/Viewport/SecondaryPanel/elements/BatteryLevelChart.svelte";
	import Icon from "@iconify/svelte";
</script>

<div class="grid-item">
	<h3>
		<Icon icon="tabler:battery-3" />
		&nbsp; BATTERY LEVEL
	</h3>
	<div class="grid-item-value">79%</div>
	<div class="grid-item-label">CURRENT BATTERY LEVEL</div>
	<BatteryLevelRangeSelection />
	<BatteryLevelChart />
</div>

<style>
	.grid-item {
		margin-bottom: 15px;
		font-size: 1.2rem;
		font-weight: bold;
	}

	.grid-item-label {
		font-size: 1rem;
		font-weight: bold;
		color: darkorange;
	}

	.grid-item-value {
		font-size: 1.5rem;
		font-weight: bolder;
	}

	h3 {
		color: green;
	}
</style>

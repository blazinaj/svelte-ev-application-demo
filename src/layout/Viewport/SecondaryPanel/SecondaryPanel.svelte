<!--SecondaryPanel component-->

<script>
	import AssetDetailsEV from "src/layout/Viewport/SecondaryPanel/elements/AssetDetailsEV.svelte";
	import BatteryLevel from "src/layout/Viewport/SecondaryPanel/elements/BatteryLevel.svelte";
	import SecondaryPanelTitle from "src/layout/Viewport/SecondaryPanel/elements/SecondaryPanelTitle.svelte";
</script>

<div class="secondary-panel">
	<SecondaryPanelTitle />
	<AssetDetailsEV />
	<BatteryLevel />
</div>

<style>
	.secondary-panel {
		padding: 20px;
		margin: 0;
		border: none;
		background-color: #ffffff;
		z-index: 1;
	}
</style>

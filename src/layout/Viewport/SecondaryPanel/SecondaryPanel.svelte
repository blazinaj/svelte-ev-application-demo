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
    box-shadow: 10px 0 10px -5px rgba(0, 0, 0, 0.5);
		z-index: 2;
	}
</style>
